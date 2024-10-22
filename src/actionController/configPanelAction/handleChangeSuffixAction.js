import { configState } from "../../states/config.js";

export const handleChangeSuffixAction = (event) => {
  const { value } = event.target;
  if (value === configState.getSuffix()) return;

  configState.updateSuffix(value);
};
