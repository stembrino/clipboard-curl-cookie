import { chromeStorage, keys } from "../util/chromeStorage.js";
import { selector } from "../domManipulation/domSelector.js";

const _states = {
  cookieKey: "",
  cookie: "",
};

const getCookieKey = () => _states.cookieKey;

const getCookies = () => _states.cookie;

const updateCookieKey = (value) => {
  chromeStorage.set({ key: keys.COOKIE_KEY, value });
  _states.cookieKey = value;
  bindCookieKeyToInput();
};

const adaptCookieFormat = (cookie) => {
  return cookie.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
};

const bindCookieKeyToInput = () => {
  if (_states.cookieKey === undefined) return;

  selector.cookieKeyEl.value = _states.cookieKey;
};

const loadStates = async () => {
  _states.cookieKey = (await chromeStorage.get(keys.COOKIE_KEY))?.cookieKey;
  _states.cookie = adaptCookieFormat(await chromeStorage.cookies());
  bindCookieKeyToInput();
};

export const cookieState = {
  getCookieKey,
  getCookies,
  loadStates,
  updateCookieKey,
  bindCookieKeyToInput,
};
