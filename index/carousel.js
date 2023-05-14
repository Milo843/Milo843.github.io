var count = 1;
var player = document.getElementById('myVideo');
var mp4Vid = document.getElementById('mp4Source');
player.addEventListener('ended', myHandler, false);

function myHandler(e) {

    if (!e) {
        e = window.event;
    }
    count++;
    mp4Vid.setAttribute("src", "video/video" + count + ".mp4")
    player.load();
    player.play();
}


//CAROUSEL SCRIPT

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("index-slides");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("index-hidden");
        x[i].classList.remove("index-visible");
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].classList.add("index-visible");
    x[myIndex - 1].classList.remove("index-hidden");
    setTimeout(carousel, 6000); // Change image every 5 seconds
}


/*
var videocount = 1;
var player = document.getElementById('homevideo');
player.addEventListener('ended', dispositor);
function dispositor(x) {
    if (!x) { x = window.event; }
    videocount++;
    if (videocount > 2) { // last number of video playing in loop. 
        videocount = 1;
    }
    player.src = "video" + videocount + ".mp4";	//complete url
}
*/