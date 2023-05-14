//This code plays videos while they are hovered over

const container = document.getElementById("video-container");

// Get a list of all the video elements inside the container
const videos = container.getElementsByTagName("video");

// Add event listeners to each video element
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseover", function () {
        videos[i].play();
    });

    videos[i].addEventListener("mouseout", function () {
        videos[i].pause();
    });
}