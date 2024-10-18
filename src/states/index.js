import { configState } from "./config.js";
import { cookieState } from "./cookie.js";
import { cookieKeyListState } from "./cookieKeyList.js";

export const loadInitialStates = async () => {
  await configState.loadStates();
  await cookieState.loadStates();
  await cookieKeyListState.loadStates();
};
