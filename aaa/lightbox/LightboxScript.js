//open and close lightbox/view mode

function openModal() {
  $("#myModal").show();
  document.querySelector("body").style.overflow = "hidden";
}


function closeModal() {
  $("#myModal").show();
  document.querySelector("body").style.overflow = "auto";
}

//close lightbox by clicking outside image/arrows

$(document).click(function (e) {
  var container = $("img, video, a");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $("#myModal").hide();
    document.querySelector("body").style.overflow = "auto";
  }
});

//lightbox script
var slide = document.getElementsByClassName("imgbox");
var slides = slide.getElementsByTagName('img')
var slideIndex = 1;

showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slideIndexLoad = slideIndex;
  var slide = document.getElementsByClassName("imgbox");
  var slides = slide.getElementsByTagName("img");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}
//Controll lightbox (switching photos and exiting) by keyboard

$(document).keydown(function (e) {
  if (e.keyCode === 37) { plusSlides(-1); }    //left arrow goes back one photo
  if (e.keyCode === 39) { plusSlides(1) }     //right goes forward one photo
  if (e.keyCode === 27) {
    $("#myModal").hide();
    document.querySelector("body").style.overflow = "auto";
  }  //esc exits lightbox
});

console.log('dupa');
