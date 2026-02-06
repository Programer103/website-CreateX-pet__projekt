Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(function () {
  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })


  $(window).on('scroll', function() {
    const scrollDistance = $(window).scrollTop(); // сколько прокрутили сверху
    const btn = $('.scroll__up-btn');

    if (scrollDistance > 300) { // порог, например 300px
        btn.addClass('scroll__up-btn--visible');
    } else {
        btn.removeClass('scroll__up-btn--visible');
    }
});



// console.log($(window).width());


  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: true,
    waitForAnimate: false,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                draggable: true,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                centerMode: true
              
            }
        }
    ]
    
});

  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    waitForAnimate: false,
    appendDots: $('.testimonials__dots')
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  // $('.program__acc-link').on('click', function(e){
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.porgram__acc-text').slideToggle()
  // })
  $('.program__acc-link').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active');
      $(this).children('.program__acc-text').slideUp();
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active');
      $('.program__acc-text').slideUp();
      $(this).addClass('program__acc-link--active');
      $(this).children('.program__acc-text').slideDown();
    }
  });


  // $('.burger').on('click', function (e){
  //   e.preventDefault();
  //   $('.header__top').toggleClass('header__top--open');
  //   $('.overlay').toggleClass('overlay--show');
  //   $('.header__nav-link').on('click', function (e){
  //       $('.header__top').removeClass('header__top--open');
  //        $('.overlay').removeClass('overlay--show');
  //   })

  // if($('.overlay').hasClass('overlay--show')){
  //   $('body').css({
  //       position: 'fixed'
  //   });
  // }else{
  //   $('body').css({
  //       position: ''
  //   });
  // }


  // })

  $('.burger').on('click', function (e) {
    e.preventDefault();
    $('.burger').toggleClass('burger--cross');
    const isOpen = $('.header__top')
      .toggleClass('header__top--open')
      .hasClass('header__top--open');

      if($('.burger').hasClass('burger--cross')){
        $('.header__top').css('visibility', 'visible');
      }else{
         $('.header__top').css('visibility', 'hidden');
      }

    $('.overlay').toggleClass('overlay--show', isOpen);
    $('body').css('position', isOpen ? 'fixed' : '');
  });

  $('.header__nav-link, .overlay, .header__btn-box').on('click', function () {
    $('.burger').removeClass('burger--cross');
    $('.header__top').removeClass('header__top--open');
    $('.overlay').removeClass('overlay--show');
    $('body').css('position', '');
  });

  $('.hide').on('click', function () {
    $(this).toggleClass('footer__list--hide');
});


})


$(window).on('resize', function(){
  if ($(window).width() > 1100) {
      $('.header__top').css('visibility', 'visible');
  }
})
