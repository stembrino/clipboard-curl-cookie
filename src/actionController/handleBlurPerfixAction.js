import { configState } from "../states/config.js";

export const handleBlurPrefixAction = (event) => {
  const { value } = event.target;
  if (value === configState.getPrefix()) return;

  configState.updatePrefix(value);
};
