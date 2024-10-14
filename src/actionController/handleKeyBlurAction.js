import { states } from "../storageStates.js";

export const handleKeyBlurAction = (event) => {
  const { value } = event.target;
  if (value === states.getCookieKey()) return;

  states.updateCookieKey(value);
};
