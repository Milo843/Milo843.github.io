// Get all the videos on the page
var videos = document.querySelectorAll('video');

// Options for the Intersection Observer
var options = {
    rootMargin: '0px',
    threshold: 0.5
}

// Intersection Observer callback function
function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Video entered viewport, play it
            entry.target.play();
        } else {
            // Video left viewport, pause it
            entry.target.pause();
        }
    });
}

// Create the Intersection Observer
var observer = new IntersectionObserver(handleIntersection, options);

// Observe each video
videos.forEach(function (video) {
    observer.observe(video);
});