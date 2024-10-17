import { selector } from "../domManipulation/domSelector.js";

const formatAsCurlKeyValue = (cookie) => {
  return `"${selector.inputKeyEl.value}": ${cookie}`;
};

export const format = {
  formatAsCurlKeyValue,
};
