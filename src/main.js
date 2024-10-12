import { states } from "./storageStates.js";
import { initListeners } from "./eventListener.js";
import { initDomStateBinding } from "./domStateBinder.js";

window.addEventListener('load', async () => {
    await states.loadStates();
    initListeners();
    initDomStateBinding();
});