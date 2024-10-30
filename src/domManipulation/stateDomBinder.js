import { configState } from "../states/config.js";
import { cookieState } from "../states/cookie.js";
import { chromeStorage } from "../util/chromeStorage.js";
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

const autoCookieKeyDomBinder = () => {
  selector.checkboxAutoKey.checked = configState.getAutoCookieKey();
};

const cookieKeyToInputBinder = async () => {
  if (cookieState.getCookieKey() === undefined) return;

  selector.cookieKeyEl.value = cookieState.getCookieKey();
};

const startStateDomBinder = () => {
  configPrefixDomBinder();
  configSuffixDomBinder();
  configSyncHostDomBinder();
  autoCookieKeyDomBinder();
  cookieKeyToInputBinder();
};

export const stateDomBinder = {
  init: startStateDomBinder,
  change: {
    configSyncHostDomBinder,
    cookieKeyToInputBinder,
  },
};
