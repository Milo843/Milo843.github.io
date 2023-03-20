

console.log('dupa')
console.log(document.querySelectorAll('#lightbox-photography img'))


//Photography Lightbox functionality 
    //Open Lightbox; Enter FullScreen; Hide Scrollbar
function openModal() {
    document.getElementById("lightbox-photography").style.display = "block";
    document.documentElement.requestFullscreen();
    document.body.style.overflow = 'hidden';
}
    //Close Lightbox; Exit FullScreen; Show Scrollbar
function closeModal() {
    document.getElementById("lightbox-photography").style.display = "none";
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
    var slides = document.querySelectorAll('#lightbox-photography img, #lightbox-photography video');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    slides[slideIndex-1].style.display = "block";
}





//close lightbox by clicking outside image/arrows

$(".lightbox-1").click(function(e) 
{
    var container = $("img, video, a");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        closeModal(); 
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
        document.getElementById("lightbox-CGI").style.display = "block";
        document.documentElement.requestFullscreen();
        document.body.style.overflow = 'hidden';
    }
        //Close Lightbox; Exit FullScreen; Show Scrollbar
    function closeModalCGI() {
        document.getElementById("lightbox-CGI").style.display = "none";
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
          var slides = document.querySelectorAll('#lightbox-CGI video, #lightbox-CGI img');
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
            }
          slides[slideIndex-1].style.display = "block";
      }




/* keyboard lightbox controll */
$(document).keydown(function(e){
    if(e.keyCode === 37){ plusSlides(-1) }    //left arrow goes back one photo
    if(e.keyCode === 39){ plusSlides(1) }     //right goes forward one photo
    if(e.keyCode === 27){ closeModal}  //esc exits lightbox
  }); 

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

$(function() {
  var timer;
  var fadeInBuffer = false;
  $(document).mousemove(function() {
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


      timer = setTimeout(function() {
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