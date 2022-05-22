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


  $('.product__tabs-btn').on('click', function(e){
    e.preventDefault();

    $('.product__tabs-btn').removeClass('active');
    $('.product__tabs-item').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');

  });


  var mixer = mixitup('.products__box');

});