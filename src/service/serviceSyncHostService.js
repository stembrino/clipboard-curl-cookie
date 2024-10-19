import { configState } from "../states/config.js";
import { cookieState } from "../states/cookie.js";

const sendCookieToHost = async () => {
  if (!cookieState.getCookies()) return "EMPTY COOKIE";
  if (!configState.getSyncHost()) return "EMPTY HOST";

  const key = cookieState.getCookieKey() || "cookie";
  try {
    await fetch(configState.getSyncHost(), {
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
      method: "POST",
      body: JSON.stringify({
        key,
        cookie: cookieState.getCookies(),
      }),
    });

    return "SUCCESS";
  } catch (error) {
    console.error(error);

    return "REQUEST ERROR";
  }
};

export const serviceSyncHostService = {
  sendCookieToHost,
};
