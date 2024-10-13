import { chromeStorage, keys } from "./util/chromeStorage.js";

const _states = {
  cookieKey: "",
  cookie: "",
};

const getCookieKey = () => _states.cookieKey;

const getCookies = () => _states.cookie;

const updateCookieKey = (value) => {
  chromeStorage.set({ key: keys.COOKIE_KEY, value });
  _states.cookieKey = value;
};

const adaptCookieFormat = (cookie) => {
  return cookie.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
};

const loadStates = async () => {
  _states.cookieKey = (await chromeStorage.get(keys.COOKIE_KEY))?.cookieKey;
  _states.cookie = adaptCookieFormat(await chromeStorage.cookies());
};

export const states = {
  getCookieKey,
  getCookies,
  loadStates,
  updateCookieKey,
};
