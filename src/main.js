import { loadInitialStates } from "./states/index.js";
import { initListeners } from "./domManipulation/domListener.js";

window.addEventListener("load", async () => {
  loadInitialStates();
  initListeners();
});
