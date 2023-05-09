var divPhotography = document.querySelector('#E2');
var divCgi = document.querySelector('#E4');
var divWebdev = document.querySelector('#E3')
var slidePhotography = document.querySelector('#photography-vid');
var slideCgi = document.querySelector('#cgi-vid');
var slideWebdev = document.querySelector('#webdev-vid')
var slidesVisible = document.querySelector('.slide-visible');
var slides = document.querySelectorAll('.slide');


divPhotography.addEventListener('mouseover', function () {
    slides.forEach(function (slide) {
        slide.classList.remove('slide-visible');
    });
    slides.forEach(function (slide) {
        slide.classList.add('slide-hidden');
    });
    slidePhotography.classList.remove('slide-hidden');
    slidePhotography.classList.add('slide-visible');
    playVideos();
});


divCgi.addEventListener('mouseover', function () {
    slides.forEach(function (slide) {
        slide.classList.remove('slide-visible');
    });
    slides.forEach(function (slide) {
        slide.classList.add('slide-hidden');
    });
    slideCgi.classList.remove('slide-hidden');
    slideCgi.classList.add('slide-visible');
    playVideos();
})

divWebdev.addEventListener('mouseover', function () {
    slides.forEach(function (slide) {
        slide.classList.remove('slide-visible');
    });
    slides.forEach(function (slide) {
        slide.classList.add('slide-hidden');
    });
    slideWebdev.classList.remove('slide-hidden');
    slideWebdev.classList.add('slide-visible');
    playVideos();
})
/*
divPhotography.addEventListener('mouseover', function () {
    slideCgi.classList.add('index-hidden');
    slidesVisible.classList.remove('index-visible');
    slidePhotography.classList.add('index-visible');

});
*/

function playVideos() {
    const hiddenVideos = document.querySelectorAll('.slide-hidden');
    const visibleVideos = document.querySelectorAll('.slide-visible');


    // Pause hidden videos 
    hiddenVideos.forEach(function (video) {
        video.pause();
    });
    // Play visible videos instantly
    visibleVideos.forEach(function (video) {
        video.play();
    });
}

window.onload = playVideos;

