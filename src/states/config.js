import { chromeStorage, keys } from "../util/chromeStorage.js";

const _state = {
  keyPrefix: "",
  keySuffix: "",
};

const getPrefix = () => {
  return _state.keyPrefix;
};

const getSuffix = () => {
  return _state.keySuffix;
};

const updatePrefix = async (prefix) => {
  _state.keyPrefix = prefix;
  await chromeStorage.set({ key: keys.PREFIX_KEY, value: prefix });
};

const updateSuffix = async (suffix) => {
  _state.keySuffix = suffix;
  await chromeStorage.set({ key: keys.SUFFIX_KEY, value: suffix });
};

const loadStates = async () => {
  _state.keyPrefix = (await chromeStorage.get(keys.PREFIX_KEY))?.keyPrefix;
  _state.keySuffix = (await chromeStorage.get(keys.SUFFIX_KEY))?.keySuffix;
};

export const configState = {
  getPrefix,
  getSuffix,
  updatePrefix,
  updateSuffix,
  loadStates,
};
