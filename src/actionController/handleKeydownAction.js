import { states } from "../storageStates.js";
import { handleClipClick } from "./handleClipAction.js";

export const handleKeydown = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    states.updateCookieKey(event.target.value);
    handleClipClick();
  }
};
