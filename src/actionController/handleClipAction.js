import { cookieState } from "../states/cookie.js";
import { selector } from "../util/domSelector.js";

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
  if (text.length === 0) {
    selector.cookieTextareaEl.value = "Empty cookies :(";
    return;
  }
  selector.cookieTextareaEl.value = text;
};

const formatAsKeyValue = () => {
  const cookie = JSON.stringify(cookieState.getCookies());
  return `"${selector.inputKeyEl.value}": ${cookie}`;
};

const formatCookie = () => {
  if (cookieState.getCookieKey()) return formatAsKeyValue();
  return cookieState.getCookies();
};

const clipFeedbackBtn = () => {
  if (clipFeedbackBtnTimeout) {
    clearTimeout(clipFeedbackBtnTimeout);
  }

  selector.clipBtnEl.textContent = "COPIED";
  clipFeedbackBtnTimeout = setTimeout(() => {
    clipFeedbackBtnTimeout = null;
    selector.clipBtnEl.textContent = btnClipInitText;
  }, 1200);
};

const handleClipClick = async () => {
  const cookies = cookieState.getCookies();
  const formattedCookies = formatCookie(cookies);

  showInTextarea(formattedCookies);
  const hasSuccessCopied = copyToClipboard(formattedCookies);
  hasSuccessCopied && clipFeedbackBtn();
};

export { handleClipClick };
