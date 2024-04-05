chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extractData") {
    const data = getElementValue("data-element-id"); // Replace with your data extraction logic
    chrome.runtime.sendMessage({ from: "content", data: data });
  }
});
