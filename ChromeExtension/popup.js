chrome.tabs.query({active : true, currentWindow:true}, function(tabs){
    var activeTab = tabs[0];
    var activeTabId = activeTab.url;
    var p = document.getElementById('link')
    p.innerHTML = activeTabId
});

data =  window.frames['myIframe'].document.body;
console.log(data)