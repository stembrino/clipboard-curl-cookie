/**
 * @file This file initializes and starts event listeners for the application.
 */
import { handleClipClick } from "./actionController/handleClipAction.js";
import { handleKeyBlurAction } from "./actionController/handleKeyBlurAction.js";
import { selector } from "./util/domSelector.js";

const clipBtnListener = () => {
    selector.clipBtnEl.addEventListener("click", handleClipClick);
}

const inputKeyBlurListener = () => {
    selector.inputKey.addEventListener("blur", handleKeyBlurAction)
}

export const initListeners = () => {
    clipBtnListener();
    inputKeyBlurListener();
}

