import { configState } from "../../states/config.js";

export const handleChangePrefixAction = (event) => {
  const { value } = event.target;
  if (value === configState.getPrefix()) return;

  configState.updatePrefix(value);
};
