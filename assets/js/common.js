



$(function checkBreakPoint() {
  w = $(window).width();

  if (w <= 767) {
    $('.futureSlider').not('.slick-initialized').slick({
      slidesToShow: 2.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      responsive: [{
        breakpoint: 599,
        settings: {
          slidesToShow: 1.2,
        }
      }]
    });






  } else {


  }



  $("#faq .faqBox dt").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });





});


$(function () {
  var windowWidth = $(window).width();
  var devW = 767;



  $('a[href^="#"]').click(function () {
    // if ( $(this).parents('#sp_menu').length ) {
    //   //メニューだったら閉じる
    if ($(this).hasClass('js-sub_menu_trigger')) {
      var $link = $(this).attr('href');
      $(this).toggleClass('open');
      $($link).toggleClass('open');
      return false;
    }
    $('#sp_menu').removeClass('open');
    $('.headerNav').removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('.topNavListSub').removeClass('open');
    // }
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var posBf = $(window).scrollTop();
    var posAf = target.offset().top;
    if (posBf > posAf) {//スクローのアップ・ダウンでヘッダー高を変更
      headerHight = $('.headerTop').innerHeight() + $('.headerNav').innerHeight();
      // console.log("UP");
    } else {
      headerHight = $('.headerTop').innerHeight();
      // console.log("down");
    }
    var position = posAf - headerHight;

    // $("html, body").animate({ scrollTop: position }, 500);//ずれるので下記に変更





    return false;
  });
});

let start_position = 0,
  window_position,
  $window = $(window),
  $header = $('header'),
  $footer = $('footer');

$window.on('scroll', function () {
  window_position = $(this).scrollTop();
  var header = $("header");

  if (window_position <= start_position && $(this).scrollTop() > 500) {
    header.addClass("active");
  } else if ($(this).scrollTop() < 600) {
    header.addClass("topPosition");
  } else {
    header.removeClass("active");
    header.removeClass("topPosition");
    $('.topNavListSub').removeClass('open');
  }
  start_position = window_position;

});
$window.trigger('scroll');
