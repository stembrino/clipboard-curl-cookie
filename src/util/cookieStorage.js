/**
 * @file Provides functions to get and set the cookie key in Chrome's local storage.
 */

export const keys = {
    COOKIE_KEY:'cookieKey',
};

/**
 * @param {string} key
 */
const getChromeStorage = async (key) => {
    return await chrome.storage.local.get(key);
}

/**
 * @param {{key: string}} params 
 */
const setChromeStorage = async ({key, value}) => {
    await chrome.storage.local.set({ [key]: value }); 
};

export const chromeStorage = {
    get: getChromeStorage,
    set: setChromeStorage,
}