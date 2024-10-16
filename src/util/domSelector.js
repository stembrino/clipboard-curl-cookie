/**
 * @file Provides functions for manipulate DOM elements.
 */

import {
  handleClickKeyList,
  handleClickKeyListDelete,
} from "../actionController/handleClickKeyListAction.js";

export const selector = {
  bodyEl: document.body,
  cookieKeyEl: document.getElementById("cookie-key"),
  clipBtnEl: document.getElementById("copy-btn"),
  cookieTextareaEl: document.getElementById("cookie-textarea"),
  inputKeyEl: document.getElementById("cookie-key"),
  cookieKeyAddEl: document.getElementById("cookie-key-add"),
  cookieKeyListEl: document.getElementById("cookie-key-list"),
  wrapperKeyList: document.getElementById("wrapper-key-list"),
  btnOpenKeyListEl: document.getElementById("btn-open-key-list"),
  allCookieKeysItem: document.querySelectorAll("cookie-key-item"),
};

export const creatorEl = {
  cookieKeyLi: () => {
    const el = document.createElement("button");
    el.classList.add("cooke-key-list-panel__item", "cookie-key-item");
    el.addEventListener("click", handleClickKeyList);
    return el;
  },
  cookieKeyDeleteBtn: () => {
    const el = document.createElement("button");
    el.classList.add("cookie-delete-key-item");
    el.innerHTML = "&#10006;";
    el.addEventListener("click", handleClickKeyListDelete);
    return el;
  },
};
