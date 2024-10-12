import { storage } from "./storageStates.js";
import { initListeners } from "./eventListener.js";
import { initDomStateBinding } from "./domStateBinder.js";

window.addEventListener('load', async () => {
    await storage.loadStates();
    initListeners();
    initDomStateBinding();
});