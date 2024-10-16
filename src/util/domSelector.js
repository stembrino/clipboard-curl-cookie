/**
 * @file Provides functions for manipulate DOM elements.
 */

export const selector = {
  bodyEl: document.body,
  cookieKeyEl: document.getElementById("cookie-key"),
  clipBtnEl: document.getElementById("copy-btn"),
  cookieTextareaEl: document.getElementById("cookie-textarea"),
  inputKeyEl: document.getElementById("cookie-key"),
  cookieKeyAddEl: document.getElementById("cookie-key-add"),
  cookieKeyListEl: document.getElementById("cooke-key-list"),
  wrapperKeyList: document.getElementById("wrapper-key-list"),
  btnOpenKeyListEl: document.getElementById("btn-open-key-list"),
  allCookieKeysItem: document.querySelectorAll("cookie-key-item"),
};

export const creatorEl = {
  cookieKeyLi: () => {
    const el = document.createElement("button");
    el.classList.add("cooke-key-list-panel__item", "cookie-key-item");
    return el;
  },
};
