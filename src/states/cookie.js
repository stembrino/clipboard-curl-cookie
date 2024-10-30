import { chromeStorage, keys } from "../util/chromeStorage.js";
import { cookieAdapter } from "../adapter/cookieFormatAdapter.js";
import { stateDomBinder } from "../domManipulation/stateDomBinder.js";
import { configState } from "./config.js";

const _state = {
  cookieKey: "",
  cookie: "",
};

const getCookieKey = () => _state.cookieKey;

const getCookies = () => _state.cookie;

const updateCookieKey = async (value) => {
  chromeStorage.set({ key: keys.COOKIE_KEY, value });
  _state.cookieKey = value;
  stateDomBinder.change.cookieKeyToInputBinder();
};

const loadCookieKey = async () => {
  if (!configState.getAutoCookieKey()) {
    stateDomBinder.change.cookieKeyToInputBinder();
    return;
  }
  const hostName = await chromeStorage.tabHost();
  _state.cookieKey = hostName;
  stateDomBinder.change.cookieKeyToInputBinder();
};

const loadStates = async () => {
  _state.cookieKey = (await chromeStorage.get(keys.COOKIE_KEY))?.cookieKey;
  _state.cookie = cookieAdapter.format(await chromeStorage.cookies());
  loadCookieKey();
};

export const cookieState = {
  getCookieKey,
  getCookies,
  loadStates,
  updateCookieKey,
};
