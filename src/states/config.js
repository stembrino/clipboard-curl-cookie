import { chromeStorage, keys } from "../util/chromeStorage.js";

const _state = {
  keyPrefix: "",
  keySuffix: "",
  syncHost: "",
};

const getPrefix = () => {
  return _state.keyPrefix;
};

const getSuffix = () => {
  return _state.keySuffix;
};

const getSyncHost = () => {
  return _state.syncHost;
};

const updatePrefix = async (prefix) => {
  _state.keyPrefix = prefix;
  await chromeStorage.set({ key: keys.PREFIX_KEY, value: prefix });
};

const updateSuffix = async (suffix) => {
  _state.keySuffix = suffix;
  await chromeStorage.set({ key: keys.SUFFIX_KEY, value: suffix });
};

const updateSyncHost = async (syncHost) => {
  _state.syncHost = syncHost;
  await chromeStorage.set({ key: keys.SYNC_HOST, value: syncHost });
};

const loadStates = async () => {
  _state.keyPrefix = (await chromeStorage.get(keys.PREFIX_KEY))?.keyPrefix;
  _state.keySuffix = (await chromeStorage.get(keys.SUFFIX_KEY))?.keySuffix;
  _state.syncHost = (await chromeStorage.get(keys.SYNC_HOST))?.syncHost;
};

export const configState = {
  getPrefix,
  getSuffix,
  getSyncHost,
  updatePrefix,
  updateSuffix,
  updateSyncHost,
  loadStates,
};
