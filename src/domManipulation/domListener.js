/**
 * @file This file initializes and starts event listeners for the application.
 */
import { handleBlurPrefixAction } from "../actionController/handleBlurPerfixAction.js";
import { handleBlurSuffixAction } from "../actionController/handleBlurSuffixAction.js";
import { handleClipClick } from "../actionController/handleClipAction.js";
import { handleCookieKeyAdd } from "../actionController/handleCookieKeyAddAction.js";
import { handleKeyBlurAction } from "../actionController/handleKeyBlurAction.js";
import { handleKeydown } from "../actionController/handleKeydownAction.js";
import { handleSyncHostBtn } from "../actionController/handleSyncHostBtnAction.js";
import { handleSyncHostInputListener } from "../actionController/handleSyncHostInputAction.js";
import { chromeStorage } from "../util/chromeStorage.js";
import { selector } from "./domSelector.js";

const clipBtnListener = () => {
  selector.clipBtnEl.addEventListener("click", handleClipClick);
};

const inputKeyBlurListener = () => {
  selector.inputKeyEl.addEventListener("blur", handleKeyBlurAction);
};

const inputKeyClickListener = () => {
  selector.inputKeyEl.addEventListener("keydown", handleKeydown);
};

const btnCookieKeyAddListener = () => {
  selector.cookieKeyAddEl.addEventListener("click", handleCookieKeyAdd);
};

const btnOpenKeyListAddListener = () => {
  selector.btnOpenKeyListEl.addEventListener("click", () => {
    selector.wrapperKeyList.classList.remove("hidden");
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
    selector.wrapperConfig.classList.remove("hidden");
  });
};

const blurPrefixSuffixValueListener = () => {
  selector.prefixValue.addEventListener("blur", handleBlurPrefixAction);
  selector.suffixValue.addEventListener("blur", handleBlurSuffixAction);
};

const clickSyncHostListener = () => {
  selector.syncHostBtn.addEventListener("click", handleSyncHostBtn);
};

const blurSyncHostInputListener = () => {
  selector.syncHostInput.addEventListener("blur", handleSyncHostInputListener);
};

export const initListeners = () => {
  clipBtnListener();
  inputKeyBlurListener();
  inputKeyClickListener();
  btnCookieKeyAddListener();
  btnOpenKeyListAddListener();
  clickWrapperKeyListListener();
  clickKeyListListener();
  infoBtnListener();
  clickConfigPanelListener();
  clickWrapperConfigListener();
  clickConfigBtnListener();
  blurPrefixSuffixValueListener();
  clickSyncHostListener();
  blurSyncHostInputListener();
};
