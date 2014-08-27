chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (/^.*\.(css)/.test(details.url) &&
      !/localhost/.test(details.url) &&
      !/127.0.0.1/.test(details.url)) {
    return { cancel: true };
  }
}, {
  urls: ['*://*/*']
}, ['blocking']);

console.log("@background.js", new Date().getTime());