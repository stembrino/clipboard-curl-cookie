import {
  handleClickKeyList,
  handleClickKeyListDelete,
} from "../actionController/handleClickKeyListAction.js";

export const creatorEl = {
  cookieKeyLi: () => {
    const el = document.createElement("button");
    el.classList.add("cooke-key-list-panel__item", "cookie-key-item");
    el.addEventListener("click", handleClickKeyList);
    return el;
  },
  cookieKeyDeleteBtn: () => {
    const el = document.createElement("button");
    el.classList.add("cookie-delete-key-item");
    el.innerHTML = "&#10006;";
    el.addEventListener("click", handleClickKeyListDelete);
    return el;
  },
};
