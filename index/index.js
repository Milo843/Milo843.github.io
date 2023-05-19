// Check if the viewport width is greater than or equal to 1080px
if (window.innerWidth >= 1080) {
  const BeginingCgi = $('#CGI-main').offset().top;
  const EndingCgi = $('#show-more').offset().top;
  const BeginingPhotography = $('#photography-show').offset().top;
  const EndingPhotography = 10000;

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    var windowHeight = $(window).height();

    if (y < EndingCgi - windowHeight / 2 && y > BeginingCgi - windowHeight / 3) {
      $('.CGI-left-menu').addClass("visible");
    } else {
      $('.CGI-left-menu').removeClass("visible");
    }

    if (y < EndingPhotography && y > BeginingPhotography) {
      $('.photography-left-menu').addClass("visible");
    } else {
      $('.photography-left-menu').removeClass("visible");
    }

    if (y < EndingPhotography && y > BeginingPhotography || y < EndingCgi - windowHeight / 2 && y > BeginingCgi - windowHeight / 3) {
      $('.photography-right-menu').addClass("visible");
    } else {
      $('.photography-right-menu').removeClass("visible");
    }
  });
}
/*
const BeginingCgi = 700;
const EndingCgi = 2000;
const BeginingPhotography = 2300;
const EndingPhotography = 2900;
// CGI Margin Menus show on Scroll 
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y < EndingCgi & y > BeginingCgi) {
    $('.CGI-left-menu').addClass("visible");
  } else {
    $('.CGI-left-menu').removeClass("visible");
  }
});
// Photogrpahy Margin Menus show on Scroll 
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y < EndingPhotography & y > BeginingPhotography) {
    $('.photography-left-menu').addClass("visible");
  } else {
    $('.photography-left-menu').removeClass("visible");
  }
});
// right menu show on Scroll 
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y < EndingPhotography & y > BeginingPhotography || y < EndingCgi & y > BeginingCgi) {
    $('.photography-right-menu').addClass("visible");
  } else {
    $('.photography-right-menu').removeClass("visible");
  }
});
*/