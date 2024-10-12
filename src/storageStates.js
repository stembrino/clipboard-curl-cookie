import { chromeStorage, keys } from "./util/chromeStorage.js";

const _states = {
    cookieKey: "",
    cookie: "",
}

const getCookieKey = () => _states.cookieKey;

const getCookie = () => _states.cookie;

const loadStates = async () => {
    _states.cookieKey = (await chromeStorage.get(keys.COOKIE_KEY))?.cookieKey;
    _states.cookie = await chromeStorage.cookies();
}

export const states = {
    getCookieKey,
    getCookie,
    loadStates
}