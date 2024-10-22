# Cookie Clipboard 🍪

**Cookie Clipboard** is a lightweight Chrome extension that simplifies copying cookies from any website to your clipboard with a single click. Perfect for developers and testers, it features **API Syncing** to automatically send copied cookies to a specified host API, enhancing workflow efficiency.

## Installation

1. Download the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click on **Load unpacked** and select the extension's directory.

5. **Check the Help Manual [In Progress]**: https://stembrino.github.io/clipboard-curl-cookie-info-page/

## Features

### Copy to Clipboard
> #### Demo 🎬
> https://youtu.be/g6WB-_XJsNA

- **One-Click Copy**: Easily copy cookies without navigating through complex settings.
- **User-Friendly Interface**: A clean and intuitive design for effortless usage.
- **Cross-Site Compatibility**: Works seamlessly on any website.


### Integration with API Tools (e.g., Insomnia)
> #### Demo 🎬
> https://youtu.be/Q7AR09-UaNc
1. Clone this project: https://github.com/stembrino/cookie-api-hook
   - This project uses Fastify as the backend to store cookies and make them available for requests (only on localhost).
2. Run the project using `docker-compose up` (or run it locally if you prefer).
3. In Insomnia, set up a request to get the cookie from `http://localhost:3003/api/cookie`.

**Insomnia script**c to set the cookie in the Base Environment (using the key as the key and cookie as value)
> Set it in After-response (Request (GET http://localhost:3003/api/cookie) -> Sripts- > After-response)
```js
const responseBody = insomnia.response.json();
insomnia.environment.set(responseBody.key, responseBody.cookie);
```

## How It Works

1. Install the Cookie Clipboard extension from the Chrome Web Store.
2. Navigate to the desired website.
3. Click the Cookie Clipboard icon in your browser toolbar.
4. Click on the clipboard button to copy the cookies.
5. Configure the host URL in the extension settings for API syncing.
6. Click the sync button to send the copied cookies to the specified host API automatically. 🚀

## Contributing

Contributions are welcome! If you have suggestions for improvement or want to report a bug, please create an [issue](https://github.com/stembrino/clipboard-curl-cookie/issues) or submit a pull request.

## 📷

<img width="463" alt="image" src="https://github.com/user-attachments/assets/18e0adfa-a20b-4749-ae82-eb936b11d74c">
