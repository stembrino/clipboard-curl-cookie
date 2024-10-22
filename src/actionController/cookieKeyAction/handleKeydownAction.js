import { cookieState } from "../../states/cookie.js";
import { handleClipClick } from "../clipboardAction/handleClipAction.js";

export const handleKeydown = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    cookieState.updateCookieKey(event.target.value);
    handleClipClick();
  }
};
