import { chromeStorage, keys } from "./util/chromeStorage.js";

const _states = {
    cookieKey: "",
}

const getCookieKey = () => _states.cookieKey;

const loadStates = async () => {
    _states.cookieKey = (await chromeStorage.get(keys.COOKIE_KEY))?.cookieKey;
}

export const storage = {
    getCookieKey,
    loadStates
}