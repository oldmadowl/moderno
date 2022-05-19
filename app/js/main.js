$(function(){

  var mixer = mixitup('.products__box');

  $('.trends__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
  });

  $('.rate-star').rateYo({
    rating: 5,
    starWidth: '12px',
    ratedFill: '#ffa726',
    spacing: '2px',
    readOnly: true,
  });

});