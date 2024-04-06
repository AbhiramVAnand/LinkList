chrome.storage.local.get("isFirstUse", function(data) {
  if (data.isFirstUse === undefined) {
    // This is the first time
     // Set a flag for future checks
    hideElement("addUi");
  }else{
    hideElement("welcome");
    alert("Enjoy LinkList!")
    showAddUi();
  }
});

document.getElementById("saveButton").addEventListener("click", function() {
  const email = document.getElementById("userEmail").value;
  chrome.storage.local.set({ email: email }, function() {
    chrome.storage.local.set({ isFirstUse: false });
    console.log("Email saved!");
    hideElement("welcome");
    showAddUi();
  });
});

function hideElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = "none";
  } else {
    console.warn("Element with ID", elementId, "not found");
  }
}

function showAddUi(){
  const element = document.getElementById("addUi");
  if (element) {
    element.style.display = "none";
  } else {
    console.warn("Element with ID", elementId, "not found");
  }
}