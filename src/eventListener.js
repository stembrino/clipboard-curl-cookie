/**
 * @file This file initializes and starts event listeners for the application.
 */
import { handleClipClick } from "./actionController/handleClipAction.js";
import { selector } from "./util/domSelector.js";

const clipBtnListener = () => {
    selector.clipBtnEl.addEventListener("click", handleClipClick);
}

export const initListeners = () => {
    clipBtnListener();
}

