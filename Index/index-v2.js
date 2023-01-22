


  if (window.matchMedia( "(max-width: 753px)" ).matches) {
    ;
  }
  else {
    $('.C1').hover(
      function() {
        $('.IndexPhotoGrid').addClass("index-visible");
      },
      function () {
        
        $('.IndexPhotoGrid').removeClass("index-visible");
      }
    )
    $('.C3').hover(
      function() {
        $('.IndexVideoFlex').addClass("index-visible");
        $('.Vid1').get(0).play();
        $('.Vid1').get(1).play();
        
      },
      function () {
        $('.IndexVideoFlex').removeClass("index-visible");
        $('.Vid1').get(0).pause();
        $('.Vid1').get(1).pause();
      }
    )
    $('.Name').hover(
      function() {
        $('.IndexAboutMeContainer').addClass("index-visible");
      },
      function() {
        $('.IndexAboutMeContainer').removeClass("index-visible")
      }
    )
  }
 

  var myIndex = 0;
  carousel();
  
 function carousel() {
    var i;
    var x = document.getElementsByClassName("test");
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("index-hidden");
      x[i].classList.remove("index-visible");
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].classList.add("index-visible");
    x[myIndex-1].classList.remove("index-hidden");  
    setTimeout(carousel, 6000); // Change image every 5 seconds
  }
  