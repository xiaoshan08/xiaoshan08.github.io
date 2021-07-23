$(function(){

  $('.burger-btn').on('click', function(){
      $('.bar').toggleClass('cross');
      $('.bar').toggleClass('white');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
  });

});
