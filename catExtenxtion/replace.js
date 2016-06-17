let clickedEl = null;

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    let height = clickedEl.height;
    let width = clickedEl.width;
    clickedEl.src = 'http://placekitten.com/' + width + '/' + height;
});

var images = document.getElementsByTagName('img')
console.log('images length = ' + images.length)
console.log('images  = ' + images)

document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) {
        clickedEl = event.target;
    }
}, true);