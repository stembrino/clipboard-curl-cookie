import { chromeStorage, keys } from "../util/chromeStorage.js";

const SYNC_HOST_DEFAULT = "http://localhost:3003/api/cookie";

const _state = {
  keyPrefix: "",
  keySuffix: "",
  syncHost: "",
  autoCookieKey: false,
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

const getAutoCookieKey = () => {
  return _state.autoCookieKey;
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

const updateAutoCookieKey = async (autoCookieKey) => {
  _state.autoCookieKey = autoCookieKey;
  await chromeStorage.set({ key: keys.AUTO_COOKIE_KEY, value: autoCookieKey });
};

const loadSyncHostInitState = async () => {
  const syncHostMemory = (await chromeStorage.get(keys.SYNC_HOST))?.syncHost;
  return syncHostMemory ? syncHostMemory : SYNC_HOST_DEFAULT;
};

const loadStates = async () => {
  _state.keyPrefix = (await chromeStorage.get(keys.PREFIX_KEY))?.keyPrefix;
  _state.keySuffix = (await chromeStorage.get(keys.SUFFIX_KEY))?.keySuffix;
  _state.autoCookieKey = Boolean(
    (await chromeStorage.get(keys.AUTO_COOKIE_KEY))?.autoCookieKey,
  );
  _state.syncHost = await loadSyncHostInitState();
};

export const configState = {
  getPrefix,
  getSuffix,
  getSyncHost,
  getAutoCookieKey,
  updatePrefix,
  updateSuffix,
  updateSyncHost,
  updateAutoCookieKey,
  loadStates,
};
