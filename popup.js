/**
 * @param {string} text
 */
const copyToClipboard =(text) => {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(err) {
        console.error('Error: ', err);
    });
}

const chromeQueryConfig = {
    active: true,
    currentWindow: true,
    status: 'complete',
}


/**
 * @param {Array<Object>} cookies
 * @returns {Array<string>}
 */
const formatCookie = (cookies) => {
    return cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ')
}

/**
 * @param {Array<{url: string}>} tab
 */
const tabHandler = (tab) => {
    chrome.cookies.getAll({ url: tab[0].url }, (cookies) => {
        const formattedCookies = formatCookie(cookies);

        debug(formattedCookies)
        copyToClipboard(JSON.stringify(formattedCookies))
    });
}

const onCopyButtonClick = () => {
    chrome.tabs.query(chromeQueryConfig, tabHandler);
};

window.addEventListener('load', () => {
    document
        .getElementById('copy-btn')
        .addEventListener('click', onCopyButtonClick);
});

/**
 * only to debug propose
 */
function debug(text) {
    document.getElementById('debug').innerHTML = JSON.stringify(text);
}