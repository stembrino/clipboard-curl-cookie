import { chromeStorage, keys } from "../util/chromeStorage.js";
import { selector } from "../util/domSelector.js";

const cookieKeyInputEl = document.getElementById("cookie-key");

const hasCookieKey = () => cookieKeyInputEl.value.length > 0;

const copyToClipboard =(text) => {
    navigator.clipboard.writeText(text).then(function() {
    }).catch(function(err) {
        console.error('Error: ', err);
    });
}

const showInTextarea = (text) => {
    if(text.length === 0) {
        selector.cookieTextareaEl.value = 'Empty cookies :(';
        return;
    }
    selector.cookieTextareaEl.value = text;
}

const formatAsKeyValue = (cookies) => {
    const cookie = JSON.stringify(cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; '));
    return `"${cookieKeyInputEl.value}": ${cookie}`
}

const formatCookie = (cookies) => {
    if(hasCookieKey())
        return formatAsKeyValue(cookies);
    return cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
}

const handleClipClick = async () => {
    chromeStorage.set({key: keys.COOKIE_KEY, value: cookieKeyInputEl.value});
    const cookies = await chromeStorage.cookies();
    const formattedCookies = formatCookie(cookies);
    
    showInTextarea(formattedCookies);
    copyToClipboard(formattedCookies);
};

export { handleClipClick };