


  if (window.matchMedia( "(max-width: 753px)" ).matches) {
    ;
  }
  else {
    $('.C1').hover(
      function() {
        $('.IndexPhotoGrid').addClass("Show");
      },
      function() {
        $('.IndexPhotoGrid').removeClass("Show");
      }
    )
    $('.C3').hover(
      function() {
        $('.IndexVideoFlex').addClass("Show");
        $('.Vid1').get(0).play();
        $('.Vid1').get(1).play();
        
      },
      function () {
        $('.IndexVideoFlex').removeClass("Show");
        $('.Vid1').get(0).pause();
        $('.Vid1').get(1).pause();
      }
    )
    $('.Name').hover(
      function() {
        $('.IndexAboutMeContainer').addClass("Show");
      },
      function() {
        $('.IndexAboutMeContainer').removeClass("Show")
      }
    )
  }
 

  


  
