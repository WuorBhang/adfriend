// Function to find ad elements on the page
const widgetTypes = {
    QUOTES: 'quotes',
    REMINDERS: 'reminders',
    PRODUCTIVITY: 'productivity'
  };
  
  // Default widget type
  let currentWidgetType = widgetTypes.QUOTES;
  
  // Function to get content based on widget type
  function getWidgetContent() {
    switch (currentWidgetType) {
      case widgetTypes.REMINDERS:
        return getRandomReminder();
      case widgetTypes.PRODUCTIVITY:
        return getRandomProductivityTip();
      default:
        return getRandomQuote();
    }
  }
  
  function getRandomReminder() {
    const reminders = [
      "Have you done your burpees today?",
      "Time for a hydration break!",
      "Take a 5-minute walk."
    ];
    return reminders[Math.floor(Math.random() * reminders.length)];
  }
  
  function getRandomProductivityTip() {
    const tips = [
      "Break tasks into smaller steps.",
      "Use the Pomodoro technique.",
      "Prioritize your most important task first."
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  }
  
  // Function to replace an ad with a widget
  function replaceWithWidget(adElement) {
    const widgetHTML = `
      <div class="adfriend-widget">
        <h3>${getWidgetTitle()}</h3>
        <p>${getWidgetContent()}</p>
      </div>
    `;
    adElement.innerHTML = widgetHTML;
    adElement.style.border = '1px solid #ccc';
  }
  
  function getWidgetTitle() {
    switch (currentWidgetType) {
      case widgetTypes.REMINDERS:
        return "Stay Active!";
      case widgetTypes.PRODUCTIVITY:
        return "Boost Your Productivity!";
      default:
        return "Stay Motivated!";
    }
  }
  
  // Function to get a random motivational quote
  function getRandomQuote() {
    const quotes = [
      "Believe you can and you're halfway there.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "The future belongs to those who believe in the beauty of their dreams."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  chrome.storage.local.get(['widgetType'], (result) => {
    currentWidgetType = result.widgetType || widgetTypes.QUOTES;
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      main(tabId);
      observeAds(tabId);
    }
  });