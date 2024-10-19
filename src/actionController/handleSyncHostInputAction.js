import { stateDomBinder } from "../domManipulation/stateDomBinder.js";
import { configState } from "../states/config.js";

export const handleSyncHostInputListener = (event) => {
  const { value } = event.target;
  const valueTrim = value.trim();
  if (!value || valueTrim === configState.getSyncHost()) {
    stateDomBinder.change.configSyncHostDomBinder();
    return;
  }
  configState.updateSyncHost(valueTrim);
};
