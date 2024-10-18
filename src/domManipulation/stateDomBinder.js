import { configState } from "../states/config.js";
import { selector } from "./domSelector.js";

const configPrefixDomBinder = () => {
  if (!configState.getPrefix()) return;

  selector.prefixValue.value = configState.getPrefix();
};

const configSuffixDomBinder = () => {
  if (!configState.getSuffix()) return;

  selector.suffixValue.value = configState.getSuffix();
};

const startStateDomBinder = () => {
  configPrefixDomBinder();
  configSuffixDomBinder();
};

export const stateDomBinder = {
  init: startStateDomBinder,
};
