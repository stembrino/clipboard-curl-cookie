import { cookieState } from "../states/cookie.js";
import { selector } from "../util/domSelector.js";

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Error: ", err);
  }
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

const handleClipClick = async () => {
  const cookies = cookieState.getCookies();
  const formattedCookies = formatCookie(cookies);

  showInTextarea(formattedCookies);
  copyToClipboard(formattedCookies);
};

export { handleClipClick };
