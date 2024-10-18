import { chromeStorage, keys } from "../util/chromeStorage.js";
import { selector } from "../domManipulation/domSelector.js";
import { cookieAdapter } from "../adapter/cookieFormatAdapter.js";

const _state = {
  cookieKey: "",
  cookie: "",
};

const getCookieKey = () => _state.cookieKey;

const getCookies = () => _state.cookie;

const updateCookieKey = (value) => {
  chromeStorage.set({ key: keys.COOKIE_KEY, value });
  _state.cookieKey = value;
  bindCookieKeyToInput();
};

const bindCookieKeyToInput = () => {
  if (_state.cookieKey === undefined) return;

  selector.cookieKeyEl.value = _state.cookieKey;
};

const loadStates = async () => {
  _state.cookieKey = (await chromeStorage.get(keys.COOKIE_KEY))?.cookieKey;
  _state.cookie = cookieAdapter.format(await chromeStorage.cookies());
  bindCookieKeyToInput();
};

export const cookieState = {
  getCookieKey,
  getCookies,
  loadStates,
  updateCookieKey,
  bindCookieKeyToInput,
};
