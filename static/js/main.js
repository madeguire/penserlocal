
$("#burgerCta").click(function() {
  $('.navMobile--init').toggleClass('navMobile--slideIn');
  $('.burger__menuLine--topLine').toggleClass('burger__menuLine--topLineAfter');
  $('.burger__menuLine--middleLine').toggleClass('burger__menuLine--middleLineAfter');
  $('.burger__menuLine--bottomLine').toggleClass('burger__menuLine--bottomLineAfter');
  $('.whiteLogo--mask').toggleClass('whiteLogo--maskSlideIn');
  $('.navMobile--overflowInit').toggleClass('navMobile--overflow');
});

$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 2000,
  lazyLoad: true,
  prevNextButtons: false,
  pageDots: false,
  fade: true
});


