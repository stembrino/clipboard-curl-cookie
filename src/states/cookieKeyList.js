import { chromeStorage, keys } from "../util/chromeStorage.js";
import { creatorEl, selector } from "../util/domSelector.js";

/**
 * @typedef {{key: string, value: string}} Cookie
 */

/**
 * @type {{
 *   cookieKeyList: Array<Cookie>
 * }}
 */
const _state = {
  cookieKeyList: [],
};

/**
 * @param {string} value
 */
const genSanitizedKey = (value) => value.trim().replace(/\s+/g, "_");

const getCookieKeyList = () => _state.cookieKeyList;

/**
 * @param {string} cookieKey
 */
const addCookieKeyList = (cookieKey) => {
  if (!cookieKey) return;

  const sanitizedKey = genSanitizedKey(cookieKey);
  if (_state.cookieKeyList?.some(({ key }) => key === sanitizedKey)) return;

  _state.cookieKeyList = [
    ...(_state.cookieKeyList || []),
    {
      key: sanitizedKey,
      value: cookieKey.trim(),
    },
  ];
  chromeStorage.set({ key: keys.COOKIE_KEY_LIST, value: _state.cookieKeyList });
};

const deleteCookieKeyList = (cookieKey) => {
  return _state.cookieKeyList.delete(cookieKey);
};

const hasItem = (key) => {
  return Boolean(selector.cookieKeyListEl.querySelector(`[data-key="${key}"]`));
};

export const dispatchDomUpdate = () => {
  _state.cookieKeyList?.forEach(({ key, value }) => {
    if (!hasItem(key)) {
      const item = creatorEl.cookieKeyLi();
      item.textContent = value;
      item.setAttribute("data-key", key);
      selector.cookieKeyListEl.appendChild(item);
    }
  });
};

const loadStates = async () => {
  _state.cookieKeyList = (
    await chromeStorage.get(keys.COOKIE_KEY_LIST)
  ).cookieKeyList;
  dispatchDomUpdate();
};

export const cookieKeyListState = {
  addCookieKeyList,
  deleteCookieKeyList,
  genSanitizedKey,
  getCookieKeyList,
  dispatchDomUpdate,
  loadStates,
};
