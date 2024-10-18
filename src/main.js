import { loadInitialStates } from "./states/index.js";
import { initListeners } from "./domManipulation/domListener.js";
import { stateDomBinder } from "./domManipulation/stateDomBinder.js";

// Info: the function order could impact
window.addEventListener("load", async () => {
  await loadInitialStates();
  initListeners();
  stateDomBinder.init();
});
