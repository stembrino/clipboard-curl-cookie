import { configState } from "../../states/config.js";

export const handleCheckboxAutoKeyAction = async (event) => {
  await configState.updateAutoCookieKey(event.target.checked);
};
