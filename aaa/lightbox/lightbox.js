

console.log(document.querySelectorAll('#lightbox-CGI-models picture'))


//Models Lightbox functionality 
//Open Lightbox; Enter FullScreen; Hide Scrollbar
function openModalM() {
    document.getElementById("lightbox-CGI-models").style.display = "block";
    document.documentElement.requestFullscreen();
    document.body.style.overflow = 'hidden';
}
//Close Lightbox; Exit FullScreen; Show Scrollbar
function closeModalM() {
    document.getElementById("lightbox-CGI-models").style.display = "none";
    document.exitFullscreen();
    document.body.style.overflow = 'visible';
}

var slideIndex = 1;
showSlidesM(slideIndex);

// Next/previous controls
function plusSlidesM(n) {
    showSlidesM(slideIndex += n);
}

// Thumbnail image controls
function currentSlideM(n) {
    showSlidesM(slideIndex = n);
}
// Controls which picture is shown and which are hidden
function showSlidesM(n) {
    var i;
    var slides = document.querySelectorAll('#lightbox-CGI-models img, #lightbox-CGI-models video');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}





//close lightbox by clicking outside image/arrows

$(".lightbox-1").click(function (e) {
    var container = $("img, video, a");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        closeModalP();
    }
});

/*
$(document).click(function(e) 
{
    var container = $("img, video, a");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        closeModal(); 
    }
});  

*/







function openModalCGI() {
    document.getElementById("lightbox-CGI-geoart").style.display = "block";
    document.documentElement.requestFullscreen();
    document.body.style.overflow = 'hidden';
}
//Close Lightbox; Exit FullScreen; Show Scrollbar
function closeModalCGI() {
    document.getElementById("lightbox-CGI-geoart").style.display = "none";
    document.exitFullscreen();
    document.body.style.overflow = 'visible';
}

// Next/previous controls
function plusSlidesCGI(n) {
    showSlidesCGI(slideIndex += n);
}

// Thumbnail image controls
function currentSlideCGI(n) {
    showSlidesCGI(slideIndex = n);
}
// Controls which picture is shown and which are hidden
function showSlidesCGI(n) {
    var i;
    var slides = document.querySelectorAll('#lightbox-CGI-geoart video, #lightbox-CGI-geoart img');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}




//Photography Lightbox functionality 
//Open Lightbox; Enter FullScreen; Hide Scrollbar
function openModalP() {
    document.getElementById("lightbox-photography").style.display = "block";
    document.documentElement.requestFullscreen();
    document.body.style.overflow = 'hidden';
}
//Close Lightbox; Exit FullScreen; Show Scrollbar
function closeModalP() {
    document.getElementById("lightbox-photography").style.display = "none";
    document.exitFullscreen();
    document.body.style.overflow = 'visible';
}

var slideIndex = 1;
showSlidesP(slideIndex);

// Next/previous controls
function plusSlidesP(n) {
    showSlidesP(slideIndex += n);
}

// Thumbnail image controls
function currentSlideP(n) {
    showSlidesP(slideIndex = n);
}
// Controls which picture is shown and which are hidden
function showSlidesP(n) {
    var i;
    var slides = document.querySelectorAll('#lightbox-photography picture, #lightbox-photography video');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

/*

// hides buttons when mouse is inactive
let idleTimer = null;
let idleState = false;

function showFoo(time) {
  clearTimeout(idleTimer);
  if (idleState == true) {
    $(".lightbox-controls").removeClass("inactive");
  }
  idleState = false;
  idleTimer = setTimeout(function() {
    $(".lightbox-controls").addClass("inactive");
    idleState = true;
  }, time);
}

showFoo(800);

$(window).mousemove(function(){
    showFoo(800);
});

*/
/*
$(function () {
    var timer;
    var fadeInBuffer = false;
    $(document).mousemove(function () {
        if (!fadeInBuffer && timer) {
            console.log("clearTimer");
            clearTimeout(timer);
            timer = 0;
            console.log("fadeIn");
            $('html').css({
                cursor: ''
            });
        } else {
            $('.img-test').css({
                cursor: 'default'
            });
            $(".lightbox-controls").removeClass("inactive");
            fadeInBuffer = false;
        }


        timer = setTimeout(function () {
            console.log("fadeout");
            $(".lightbox-controls").addClass("inactive");
            $('.img-test').css({
                cursor: 'none'
            });
            fadeInBuffer = true;

        }, 1600)
    });
    $('.img-test').css({
        cursor: 'default'
    });

});
*/