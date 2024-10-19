/**
 * @file Provides functions to wrap Chrome's (chrome) memory features.
 */

export const keys = {
  COOKIE_KEY: "cookieKey",
  COOKIE_KEY_LIST: "cookieKeyList",
  SUFFIX_KEY: "keySuffix",
  PREFIX_KEY: "keyPrefix",
  SYNC_HOST: "syncHost",
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

const getAllCookies = async () => {
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

const createTab = (url) => {
  if (!url) throw Error("url is not defined");

  chrome.tabs.create({
    url,
  });
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Error: ", err);
    return false;
  }
  return true;
};

export const chromeStorage = {
  get: getChromeStorage,
  set: setChromeStorage,
  cookies: getAllCookies,
  createTab,
  copyToClipboard,
};
