import { configState } from "../states/config.js";

export const handleBlurSuffixAction = (event) => {
  const { value } = event.target;
  if (value === configState.getSuffix()) return;

  configState.updateSuffix(value);
};
