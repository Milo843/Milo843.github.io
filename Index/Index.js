

  $(function() {
    $('.Name').hover(function() {
      $('.IndexAboutMeContainer').css('visibility', 'visible');
      $('.IndexAboutMeContainer').css('opacity', '1');
    }, 
    function() {
      // on mouseout, hide pgoto grid
      $('.IndexAboutMeContainer').css('visibility', 'hidden');
      $('.IndexAboutMeContainer').css('opacity', '0');
    });
  });

 
  $(function () {
    $('.C1').hover(function () {
      $('.IndexPhotoGrid').css('visibility', 'visible');
      $('.IndexPhotoGrid').css('opacity', '1');
    },
      function () {
        // on mouseout, hide pgoto grid
        $('.IndexPhotoGrid').css('visibility', 'hidden');
        $('.IndexPhotoGrid').css('opacity', '0');
      });
  });
  
  $(function() {
    $('.C3').hover(function() {
      $('.IndexVideoFlex').css('visibility', 'visible');
      $('.IndexVideoFlex').css('opacity', '1');
      $('.Vid1').get(0).play();
      $('.Vid1').get(1).play();
      },
     function() {
      // on mouseout, hide videos flex and pause videos
      $('.IndexVideoFlex').css('visibility', 'hidden');
      $('.IndexVideoFlex').css('opacity', '0');
      $('.Vid1').get(0).pause();
      $('.Vid1').get(1).pause();
    });
  });