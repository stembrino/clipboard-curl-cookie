import { configState } from "../states/config.js";
import { cookieState } from "../states/cookie.js";

const sendCookieToHost = async () => {
  if (!cookieState.getCookies()) return "EMPTY COOKIE";
  if (!configState.getSyncHost()) return "EMPTY HOST";

  const key = cookieState.getCookieKey() || "cookie";
  try {
    const response = await fetch(configState.getSyncHost(), {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        key,
        cookie: cookieState.getCookies(),
      }),
    });
    const isSuccessStatus = response.status >= 200 && response.status <= 299;

    return isSuccessStatus ? "SUCCESS" : "BAD REQUEST";
  } catch (error) {
    console.error(error);

    return "REQUEST ERROR";
  }
};

export const serviceSyncHostService = {
  sendCookieToHost,
};
