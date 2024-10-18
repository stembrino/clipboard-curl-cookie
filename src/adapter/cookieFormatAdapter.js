import { configState } from "../states/config.js";
import { cookieState } from "../states/cookie.js";

const cookieKeyValue = (cookie) => {
  if (!cookieState.getCookieKey()) return cookie;

  return `"${cookieState.getCookieKey()}": ${cookie}`;
};

const format = (cookie) => {
  return cookie.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
};

const addPrefix = (str, prefix) => (prefix ? `${prefix}${str}` : str);
const addSuffix = (str, suffix) => (suffix ? `${str}${suffix}` : str);

const formatCopyClipboard = () => {
  let formatCookie = cookieState.getCookies();
  formatCookie = cookieKeyValue(formatCookie);
  formatCookie = addPrefix(formatCookie, configState.getPrefix());
  formatCookie = addSuffix(formatCookie, configState.getSuffix());

  return formatCookie;
};

export const cookieAdapter = {
  cookieKeyValue,
  format,
  formatCopyClipboard,
};
