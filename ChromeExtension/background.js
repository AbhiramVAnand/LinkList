chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://link-list-bwe83tqvd-abhiramvanands-projects.vercel.app/";
  chrome.tabs.create({ url: newURL });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.from === "content" && message.data) {
    console.log("Received data from webpage:", message.data);
    // Process the data or send it to a server-side API
  }
});

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "extractData" });
  });
});
