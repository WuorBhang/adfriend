function observeAds(tabId) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: setupMutationObserver
    });
  }
  
  function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && isAd(node)) {
            replaceWithWidget(node);
          }
        });
      });
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  function isAd(element) {
    const adSelectors = ['.adsbygoogle', '.ad-slot', '.taboola'];
    return adSelectors.some(selector => element.matches(selector));
  }