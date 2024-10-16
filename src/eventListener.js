/**
 * @file This file initializes and starts event listeners for the application.
 */
import { handleClipClick } from "./actionController/handleClipAction.js";
import { handleCookieKeyAdd } from "./actionController/handleCookieKeyAddAction.js";
import { handleKeyBlurAction } from "./actionController/handleKeyBlurAction.js";
import { handleKeydown } from "./actionController/handleKeydownAction.js";
import { selector } from "./util/domSelector.js";

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

export const initListeners = () => {
  clipBtnListener();
  inputKeyBlurListener();
  inputKeyClickListener();
  btnCookieKeyAddListener();
  btnOpenKeyListAddListener();
  clickWrapperKeyListListener();
  clickKeyListListener();
};
