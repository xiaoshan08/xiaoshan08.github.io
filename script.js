$(function(){

  $('.burger-btn').on('click', function(){
      $('.bar').toggleClass('cross');
      $('.bar').toggleClass('white');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
  });

  $('.full-screen').slick({
    autoplay:true, // 自動再生を設定
    autoplaySpeed:2000, // スライド切り替えの時間を設定
    speed: 1000,
    dots:true, // インジケーターを表示
    centerMode:true,
    centerPadding: '5%',
  });

});
