var slinky = $('.js-menu').slinky({
    title: true
  });

  
$('.hero-slider').slick({
    arrows: false,
    dots: true,
    fade: true
});

$(window).scroll(function () {
  var the_top = $(document).scrollTop();
  if (the_top > 55) {
      $('.header').addClass('sticky');
  } else {
      $('.header').removeClass('sticky');
  }
});