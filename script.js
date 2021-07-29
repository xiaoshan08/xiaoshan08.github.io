$(function(){

  $('.burger-btn').on('click', function(){
      $('.bar').toggleClass('cross');
      $('.bar').toggleClass('white');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
  });


});

// 質問(PC版)のアコーディオン ↓↓
jQuery(function ($) {
  $('.js-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
});

// Contact term(PC版)のアコーディオン ↓↓
jQuery(function ($) {
  $('.term-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
  });
});

$(function(){

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    //レスポンシブでの動作を指定
    responsive: [{
      breakpoint: 414,  //ブレイクポイントを指定
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }]

  });

  $('.voice-slider').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,

    //レスポンシブでの動作を指定
    responsive: [{
      breakpoint: 414,  //ブレイクポイントを指定
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    }]

  });

});

// TOPへスクロール ↓↓
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 300px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 300) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  // 1.0秒かけてTOPへ戻る
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 1000);
     return false;
  });
});
