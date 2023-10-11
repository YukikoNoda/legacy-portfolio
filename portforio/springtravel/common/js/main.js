$(function () {
  const Top = $('.btn');
  Top.on('touchstart click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 'swing')
  });
});