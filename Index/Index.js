
var test1 = document.getElementsByClassName("test1");
var indexLength = document.getElementsByClassName("test").length
var noni = Array.from(Array(indexLength).keys())
var classVisible = document.getElementsByClassName("index-visible")
var test = document.getElementsByClassName("test");
var pageDivs = document.getElementsByClassName("test1");
for (i = 0; i < pageDivs.length; i++) {
  //apply your effects using pageDivs[i]
}




$('#E1').mouseenter(
  function () {
    $('.test').removeClass("index-visible");
    $('.test').addClass("index-hidden");
    $('#C1').removeClass('index-hidden');
    $('#C1').addClass('index-visible');
    $('.line-0').addClass('index-visible');
    $('.line-1').addClass('index-visible');

  }
)
$('#E1').mouseleave(
  function () {
    $('.line-0').removeClass('index-visible');
    $('.line-1').removeClass('index-visible');

  }
)
$('#E2').mouseenter(
  function () {
    $('.test').removeClass("index-visible");
    $('.test').addClass("index-hidden");
    $('#C2').removeClass('index-hidden');
    $('#C2').addClass('index-visible');

  }
)

$('#E3').mouseenter(
  function () {
    $('.test').removeClass("index-visible");
    $('.test').addClass("index-hidden");
    $('#C3').removeClass('index-hidden');
    $('#C3').addClass('index-visible');

  }
)
$('#E4').mouseenter(
  function () {
    $('.test').removeClass("index-visible");
    $('.test').addClass("index-hidden");
    $('#C4').removeClass('index-hidden');
    $('#C4').addClass('index-visible');

  }
)

$('.test').mouseleave(
  function () {
    $('.test').removeClass("index-visible");
    $('.test').addClass("index-hidden");
  }
)