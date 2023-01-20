$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'main/main.css') );

$(function(){
    $("#main-nav").load("nav/nav.html"); 
  });
  $(function(){
    $("#footer").load("main/footer.html"); 
  });