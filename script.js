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

// 質問のアコーディオン ↓↓
jQuery(function ($) {
    $('.js-accordion-title').on('click', function () {
      /*クリックでコンテンツを開閉*/
      $(this).next().slideToggle(200);
      /*矢印の向きを変更*/
      $(this).toggleClass('open', 200);
    });
});

