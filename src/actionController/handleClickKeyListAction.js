import { cookieState } from "../states/cookie.js";

export const handleClickKeyList = (event) => {
  if (!event.target?.textContent) return;

  cookieState.updateCookieKey(event.target.textContent);
};
