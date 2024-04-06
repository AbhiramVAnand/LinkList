
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.from === 'webpage') {
    console.log('Message from webpage:', message.message);
    // Process the message and optionally send a response
    sendResponse({ message: 'Received message from webpage!' });
  }
});