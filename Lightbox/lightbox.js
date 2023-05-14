//Open Lightbox; Enter FullScreen; Hide Scrollbar
function openModal() {
    document.getElementById("lightbox-photography").classList.add("visible");
    document.documentElement.requestFullscreen();
    document.body.style.overflow = 'hidden';
}
//Close Lightbox; Exit FullScreen; Show Scrollbar
function closeModal() {
    document.getElementById("lightbox-photography").classList.remove("visible");
    document.exitFullscreen();
    document.body.style.overflow = 'visible';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// Controls which picture is shown and which are hidden
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll('#lightbox-photography picture, #lightbox-photography video');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


$(".lightbox-1").click(function (e) {
    var container = $("img, video, a");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        closeModal();
    }
});

/* keyboard lightbox controll */

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowLeft') {
        plusSlides(-1);
    }
    if (event.code === 'ArrowRight') {
        plusSlides(1);
    }
    if (event.code === 'Escape') {
        closeModal();
    }
});