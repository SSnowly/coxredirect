chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    
    if (url.includes("overextended.dev")) {
      return { redirectUrl: url.replace("overextended.dev", "coxdocs.dev") };
    }
    
    if (url.includes("github.com/overextended")) {
      return { redirectUrl: url.replace("github.com/overextended", "github.com/CommunityOx") };
    }
    
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
); 