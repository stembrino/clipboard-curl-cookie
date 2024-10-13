/**
 * @file Provides functions to wrap Chrome's (chrome) memory features.
 */

export const keys = {
  COOKIE_KEY: "cookieKey",
};

/**
 * @param {string} key
 */
const getChromeStorage = async (key) => {
  return await chrome.storage.local.get(key);
};

/**
 * @param {{key: string}} params
 */
const setChromeStorage = async ({ key, value }) => {
  await chrome.storage.local.set({ [key]: value });
};

const getCurrentTab = async () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(tabs[0]);
    });
  });
};

export const getAllCookies = async () => {
  const currentTab = await getCurrentTab();

  return new Promise((resolve, reject) => {
    chrome.cookies.getAll({ url: currentTab.url }, (cookies) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(cookies);
    });
  });
};

export const chromeStorage = {
  get: getChromeStorage,
  set: setChromeStorage,
  cookies: getAllCookies,
};
