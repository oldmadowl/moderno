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


  $('.tabs__btn').on('click', function(e){
    e.preventDefault();

    $('.tabs__btn').removeClass('active');
    $('.tabs__item').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');

  });


  $('input[type="file"], select').styler();

  var mixer = mixitup('.products__box');

});