const cookieKey = document.getElementById("cookie-key");

const hasCookieKey = () => cookieKey.value.length > 0;

const copyToClipboard =(text) => {
    navigator.clipboard.writeText(text).then(function() {
    }).catch(function(err) {
        console.error('Error: ', err);
    });
}

const chromeQueryConfig = {
    active: true,
    currentWindow: true,
    status: 'complete',
}

const showInTextarea = (text) => {
    if(text.length === 0) {
        document.getElementById('cookie-textarea').value = 'Empty cookies :(';
        return;
    }
    document.getElementById('cookie-textarea').value = text;
}

const formatAsKeyValue = (cookies) => {
    const cookie = JSON.stringify(cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; '));
    return `"${cookieKey.value}": ${cookie}`
}

const formatCookie = (cookies) => {
    if(hasCookieKey())
        return formatAsKeyValue(cookies);
    return cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ')
}

const tabHandler = (tab) => {
    chrome.cookies.getAll({ url: tab[0].url }, (cookies) => {
        const formattedCookies = formatCookie(cookies);

        showInTextarea(formattedCookies);
        copyToClipboard(formattedCookies)
    });
}

const persistCookieKey = async () => {
    await chrome.storage.local.set({ cookieKey: cookieKey.value });
}

const onClipBtnClick = () => {
    persistCookieKey()
    chrome.tabs.query(chromeQueryConfig, tabHandler);
};

const setCookieKeyFromChromeStore = async () => {
    if(hasCookieKey()) return;

    const cookieKeyStorage = (await chrome.storage.local.get('cookieKey'))?.cookieKey;
    cookieKey.value = cookieKeyStorage;
}

window.addEventListener('load', () => {
    document
        .getElementById('copy-btn')
        .addEventListener('click', onClipBtnClick);

    setCookieKeyFromChromeStore();
});
