/**
 * @file This file initializes and starts event listeners for the application.
 */
import { handleChangePrefixAction } from "../actionController/configPanelAction/handleChangePrefixAction.js";
import { handleChangeSuffixAction } from "../actionController/configPanelAction/handleChangeSuffixAction.js";
import { handleClipClick } from "../actionController/clipboardAction/handleClipAction.js";
import { handleCookieKeyAdd } from "../actionController/cookieKeyAction/handleCookieKeyAddAction.js";
import { handleKeyChangeAction } from "../actionController/cookieKeyAction/handleKeyChangeAction.js";
import { handleKeydown } from "../actionController/cookieKeyAction/handleKeydownAction.js";
import { handleSyncHostBtn } from "../actionController/configPanelAction/syncHostKey/handleSyncHostBtnAction.js";
import { handleSyncHostInputListener } from "../actionController/configPanelAction/syncHostKey/handleSyncHostInputAction.js";
import { chromeStorage } from "../util/chromeStorage.js";
import { selector } from "./domSelector.js";

const clipBtnListener = () => {
  selector.clipBtnEl.addEventListener("click", handleClipClick);
};

const inputKeyChangeListener = () => {
  selector.inputKeyEl.addEventListener("blur", handleKeyChangeAction);
};

const inputKeyClickListener = () => {
  selector.inputKeyEl.addEventListener("keydown", handleKeydown);
};

const btnCookieKeyAddListener = () => {
  selector.cookieKeyAddEl.addEventListener("click", handleCookieKeyAdd);
};

const btnOpenKeyListAddListener = () => {
  selector.btnOpenKeyListEl.addEventListener("click", () => {
    selector.wrapperKeyList.classList.toggle("hidden");
    selector.wrapperKeyList.focus();
  });
};

const clickWrapperKeyListListener = () => {
  selector.wrapperKeyList.addEventListener("click", () => {
    selector.wrapperKeyList.classList.add("hidden");
  });
};

const clickKeyListListener = () => {
  selector.cookieKeyListEl.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

const infoBtnListener = () => {
  selector.infoBtn.addEventListener("click", () => {
    chromeStorage.createTab(
      "https://stembrino.github.io/clipboard-curl-cookie-info-page/",
    );
  });
};

const clickWrapperConfigListener = () => {
  selector.wrapperConfig.addEventListener("click", () => {
    selector.wrapperConfig.classList.add("hidden");
  });
};

const clickConfigPanelListener = () => {
  selector.configPanel.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

const clickConfigBtnListener = () => {
  selector.configBtn.addEventListener("click", () => {
    selector.wrapperConfig.classList.toggle("hidden");
    selector.wrapperConfig.focus();
  });
};

const changePrefixSuffixValueListener = () => {
  selector.prefixValue.addEventListener("change", handleChangePrefixAction);
  selector.suffixValue.addEventListener("change", handleChangeSuffixAction);
};

const clickSyncHostListener = () => {
  selector.syncHostBtn.addEventListener("click", handleSyncHostBtn);
};

const changeSyncHostInputListener = () => {
  selector.syncHostInput.addEventListener(
    "change",
    handleSyncHostInputListener,
  );
};

export const initListeners = () => {
  clipBtnListener();
  inputKeyChangeListener();
  inputKeyClickListener();
  btnCookieKeyAddListener();
  btnOpenKeyListAddListener();
  clickWrapperKeyListListener();
  clickKeyListListener();
  infoBtnListener();
  clickConfigPanelListener();
  clickWrapperConfigListener();
  clickConfigBtnListener();
  changePrefixSuffixValueListener();
  clickSyncHostListener();
  changeSyncHostInputListener();
};
