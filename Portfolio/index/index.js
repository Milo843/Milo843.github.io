// Photogrpahy Margin Menus show on Scroll 
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y < 500 & y >100 ) {
      $('.photography-left-menu').addClass("visible");
    } else {
      $('.photography-left-menu').removeClass("visible");
    }
  });

  // CGI Margin Menus show on Scroll 
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 1800 & y >1200 ) {
    $('.CGI-left-menu').addClass("visible");
  } else {
    $('.CGI-left-menu').removeClass("visible");
  }
});
  // CGI Margin Menus show on Scroll 
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y < 1800 & y >1200 || y < 500 & y >100) {
      $('.photography-right-menu').addClass("visible");
    } else {
      $('.photography-right-menu').removeClass("visible");
    }
  });