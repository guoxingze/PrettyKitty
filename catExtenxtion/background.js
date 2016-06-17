var clickedEl = null;

function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.sendMessage(tab.id, {tabUrl:tab.url, info:info});
}


document.addEventListener("mousedown", function(event){
    //right click
    debugger
    if(event.button == 2) {
        clickedEl = event.target;
        console.log(clickedEl)
    }
}, true);

var menueItem = chrome.contextMenus.create({"title": "test cat", "contexts":["image"],
                                       "onclick": genericOnClick});

