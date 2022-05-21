$(function(){
  

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

 
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.header-box-btn').on('click', function(){
    $('.header__box').toggleClass('active');
  });


  var mixer = mixitup('.products__box');

});