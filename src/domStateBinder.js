/**
 * @file Binds app state from Chrome storage to HTML elements.
 */
import { storage } from "./storageStates.js";
import { selector } from "./util/domSelector.js";

const bindCookieKeyToInput = () => {
    const cookieKey = storage.getCookieKey();
    if(!cookieKey) return;

    selector.cookieKeyEl.value = cookieKey;
}

export const initDomStateBinding = () => {
    bindCookieKeyToInput();
};