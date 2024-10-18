import { chromeStorage, keys } from "../util/chromeStorage.js";

const _state = {
  keyPrefix: "",
  keySuffix: "",
};

const getSuffix = () => {
  return _state.keySuffix;
};

const getPrefix = () => {
  return _state.keyPrefix;
};

const updateSuffix = (suffix) => {
  _state.keySuffix = suffix;
  chromeStorage.set({ key: keys.SUFFIX_KEY, value: suffix });
};

const updatePrefix = (prefix) => {
  _state.keyPrefix = prefix;
  chromeStorage.set({ key: keys.PREFIX_KEY, value: prefix });
};

export const configState = {
  getSuffix,
  getPrefix,
  updateSuffix,
  updatePrefix,
};
