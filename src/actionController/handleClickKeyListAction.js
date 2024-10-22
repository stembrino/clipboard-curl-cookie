import { cookieState } from "../states/cookie.js";
import { cookieKeyListState } from "../states/cookieKeyList.js";
import { selector } from "../domManipulation/domSelector.js";

export const handleClickKeyList = (event) => {
  if (!event.target?.textContent) return;
  cookieState.updateCookieKey(event.target.textContent);
  selector.wrapperKeyList.classList.add("hidden");
  selector.clipBtnEl.focus();
};

export const handleClickKeyListDelete = (event) => {
  const deleteBtn = event.target;
  const keyBtn = event.target.previousElementSibling;
  if (!deleteBtn || !keyBtn) return;

  deleteBtn.remove();
  keyBtn.remove();
  cookieKeyListState.deleteCookieKeyList(event.target.getAttribute("data-key"));
};
