import { cookieState } from "./cookie.js";
import { cookieKeyListState } from "./cookieKeyList.js";

export const loadInitialStates = () => {
  cookieState.loadStates();
  cookieKeyListState.loadStates();
};
