$(function(){
  

  $('.trends__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
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

  $('.items__range-slider').ionRangeSlider({
    type: 'double',
    skin: 'round',
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
  });

  $('.items__page-btn').on('click', function(){
    $('.items__page-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.items__view-btn').on('click', function(){
    $('.items__view-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.items__view-btn--line').on('click', function(){
    $('.items .item').addClass('line');
    $('.items__goods').addClass('line');
  });

  $('.items__view-btn--grid').on('click', function(){
    $('.items .item').removeClass('line');
    $('.items__goods').removeClass('line');
  });


  var mixer = mixitup('.products__box, .items__inner');

});