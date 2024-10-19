import { cookieState } from "../states/cookie.js";
import { selector } from "../domManipulation/domSelector.js";
import { cookieAdapter } from "../adapter/cookieFormatAdapter.js";

const btnClipInitText = selector.clipBtnEl.textContent;
let clipFeedbackBtnTimeout = null;

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Error: ", err);
    return false;
  }
  return true;
};

const showInTextarea = (text) => {
  if (!cookieState.getCookies()) {
    selector.cookieTextareaEl.value = "Empty cookies :(";
    return;
  }
  selector.cookieTextareaEl.value = text;
};

const clipFeedbackBtn = () => {
  if (clipFeedbackBtnTimeout) return;

  selector.clipBtnEl.textContent = "COPIED";
  clipFeedbackBtnTimeout = setTimeout(() => {
    clipFeedbackBtnTimeout = null;
    selector.clipBtnEl.textContent = btnClipInitText;
  }, 1200);
};

const handleClipClick = async () => {
  const formattedCookies = cookieAdapter.formatCopyClipboard();

  showInTextarea(formattedCookies);
  const hasSuccessCopied = copyToClipboard(formattedCookies);
  hasSuccessCopied && clipFeedbackBtn();
};

export { handleClipClick };
