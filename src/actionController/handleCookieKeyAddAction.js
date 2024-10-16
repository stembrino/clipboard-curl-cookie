import { cookieKeyListState } from "../states/cookieKeyList.js";
import { cookieState } from "../states/cookie.js";

export const handleCookieKeyAdd = () => {
  cookieKeyListState.addCookieKeyList(cookieState.getCookieKey());
};
