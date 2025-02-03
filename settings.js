document.getElementById('saveButton').addEventListener('click', () => {
    const selectedType = document.getElementById('widgetType').value;
    chrome.storage.local.set({ widgetType: selectedType }, () => {
      alert('Preferences saved!');
    });
  });
  
  // Load saved preferences when the page loads
  chrome.storage.local.get(['widgetType'], (result) => {
    if (result.widgetType) {
      document.getElementById('widgetType').value = result.widgetType;
    }
  });