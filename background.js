chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (/^.*\.(css)/.test(details.url) && !/localhost/.test(details.url)) {
    return { cancel: true };
  }
}, {
  urls: ['*://*/*']
}, ['blocking']);

console.log("@background.js", new Date().getTime());