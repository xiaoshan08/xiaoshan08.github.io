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
