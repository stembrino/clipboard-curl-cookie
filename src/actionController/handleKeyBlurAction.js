import { cookieState } from "../states/cookie.js";

export const handleKeyBlurAction = (event) => {
  const { value } = event.target;
  if (value === cookieState.getCookieKey()) return;

  cookieState.updateCookieKey(value);
};
