import { cookieState } from "../states/cookie.js";

export const handleClickKeyList = (event) => {
  if (!event.target?.textContent) return;

  console.log(
    "  🚩 ~ handleClickKeyList ~ event.target:",
    event.target.textContent,
  );
  cookieState.updateCookieKey(event.target.textContent);
};
