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
  infoBtn: document.getElementById("info-btn"),
};
