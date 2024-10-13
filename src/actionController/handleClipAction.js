import { states } from "../storageStates.js";
import { selector } from "../util/domSelector.js";

const copyToClipboard = async (text) => {
    try{
        await navigator.clipboard.writeText(text);
    } catch(err) {
        console.error('Error: ', err);
    }
}

const showInTextarea = (text) => {
    if(text.length === 0) {
        selector.cookieTextareaEl.value = 'Empty cookies :(';
        return;
    }
    selector.cookieTextareaEl.value = text;
}

const formatAsKeyValue = () => {
    const cookie = JSON.stringify(states.getCookies());
    return `"${selector.inputKey.value}": ${cookie}`;
}

const formatCookie = () => {
    if(states.getCookieKey())
        return formatAsKeyValue();
    return states.getCookies();
}

const handleClipClick = async () => {
    const cookies = states.getCookies();
    const formattedCookies = formatCookie(cookies);
    
    showInTextarea(formattedCookies);
    copyToClipboard(formattedCookies);
};

export { handleClipClick };