import { selector } from "../domManipulation/domSelector.js";

const formatKeyValue = (cookie) => {
  const cookieStringify = JSON.stringify(cookie);
  return `"${selector.inputKeyEl.value}": ${cookieStringify}`;
};

const format = (cookie) => {
  return cookie.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
};

export const cookieAdapter = {
  format,
  formatKeyValue,
};
