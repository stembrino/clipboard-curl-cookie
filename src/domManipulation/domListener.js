/**
 * @file This file initializes and starts event listeners for the application.
 */
import { handleClipClick } from "../actionController/handleClipAction.js";
import { handleCookieKeyAdd } from "../actionController/handleCookieKeyAddAction.js";
import { handleKeyBlurAction } from "../actionController/handleKeyBlurAction.js";
import { handleKeydown } from "../actionController/handleKeydownAction.js";
import { chromeStorage } from "../util/chromeStorage.js";
import { selector } from "./domSelector.js";

const clipBtnListener = () => {
  selector.clipBtnEl.addEventListener("click", handleClipClick);
};

const inputKeyBlurListener = () => {
  selector.inputKeyEl.addEventListener("blur", handleKeyBlurAction);
};

const inputKeyClickListener = () => {
  selector.inputKeyEl.addEventListener("keydown", handleKeydown);
};

const btnCookieKeyAddListener = () => {
  selector.cookieKeyAddEl.addEventListener("click", handleCookieKeyAdd);
};

const btnOpenKeyListAddListener = () => {
  selector.btnOpenKeyListEl.addEventListener("click", () => {
    selector.wrapperKeyList.classList.remove("hidden");
  });
};

const clickWrapperKeyListListener = () => {
  selector.wrapperKeyList.addEventListener("click", () => {
    selector.wrapperKeyList.classList.add("hidden");
  });
};

const clickKeyListListener = () => {
  selector.cookieKeyListEl.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

const infoBtnListener = () => {
  selector.infoBtn.addEventListener("click", () => {
    chromeStorage.createTab(
      "https://stembrino.github.io/clipboard-curl-cookie-info-page/",
    );
  });
};

export const initListeners = () => {
  clipBtnListener();
  inputKeyBlurListener();
  inputKeyClickListener();
  btnCookieKeyAddListener();
  btnOpenKeyListAddListener();
  clickWrapperKeyListListener();
  clickKeyListListener();
  infoBtnListener();
};