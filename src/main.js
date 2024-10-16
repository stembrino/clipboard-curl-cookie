import { loadInitialStates } from "./states/index.js";
import { initListeners } from "./eventListener.js";

window.addEventListener("load", async () => {
  loadInitialStates();
  initListeners();
});
