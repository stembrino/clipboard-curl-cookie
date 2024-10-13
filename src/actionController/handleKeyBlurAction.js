import { states } from "../storageStates.js";

export const handleKeyBlurAction = (event) => {
  const { value } = event.target;
  states.updateCookieKey(value);
};
