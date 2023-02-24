// Listen for when the extension button is clicked
chrome.browserAction.onClicked.addListener(function (tab) {

    // Redirect to the new URL with the current URL as a parameter
    chrome.tabs.update(tab.id, { url: "https://12ft.io/" + tab.url });
});
