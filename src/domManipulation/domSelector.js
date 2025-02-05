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
  cookieKeyListEl: document.getElementById("cookie-key-list"),
  wrapperKeyList: document.getElementById("wrapper-key-list"),
  btnOpenKeyListEl: document.getElementById("btn-open-key-list"),
  allCookieKeysItem: document.querySelectorAll("cookie-key-item"),
  infoBtn: document.getElementById("info-btn"),
  prefixValue: document.getElementById("prefix-value"),
  suffixValue: document.getElementById("suffix-value"),
  wrapperConfig: document.getElementById("wrapper-config"),
  configPanel: document.getElementById("config-panel"),
  configBtn: document.getElementById("config-btn"),
  syncHostBtn: document.getElementById("sync-host-btn"),
  syncHostInput: document.getElementById("sync-host-input"),
  checkboxAutoKey: document.getElementById("checkbox-auto-key"),
};
