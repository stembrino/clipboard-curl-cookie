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

const configSyncHostDomBinder = () => {
  if (!configState.getSyncHost()) return;
  selector.syncHostInput.value = configState.getSyncHost();
};

const startStateDomBinder = () => {
  configPrefixDomBinder();
  configSuffixDomBinder();
  configSyncHostDomBinder();
};

export const stateDomBinder = {
  init: startStateDomBinder,
  change: {
    configSyncHostDomBinder,
  },
};
