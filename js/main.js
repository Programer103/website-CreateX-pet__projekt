Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(function () {
  var mixer = mixitup('.directions__list');


  // burger button

  $('.burger').on('click', function (e) {
    e.preventDefault();
    $('.burger').toggleClass('burger--cross');
    const isOpen = $('.header__top')
      .toggleClass('header__top--open')
      .hasClass('header__top--open');

    if ($('.burger').hasClass('burger--cross')) {
      $('.header__top').css('visibility', 'visible');
    } else {
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


// scroll__up-btn

  $(window).on('scroll', function () {
    const scrollDistance = $(window).scrollTop(); // сколько прокрутили сверху
    const btn = $('.scroll__up-btn');

    if (scrollDistance > 300) { // порог, например 300px
      btn.addClass('scroll__up-btn--visible');
    } else {
      btn.removeClass('scroll__up-btn--visible');
    }
  });



  // directions

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })


  // team slider

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


  // testimonials slider

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


  // program accordion

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


  

})


// header__top visibility

$(window).on('resize', function () {
  if ($(window).width() > 1100) {
    $('.header__top').css('visibility', 'visible');
  }
})


  // footer mobile-accordion

function footerAccordionCheck() {
  if ($(window).width() < 449) {
    $('.hide')
      .addClass('footer__list--hide')
      .children('.footer__top-list')
      .slideUp(0);
  } else {
    $('.hide')
      .removeClass('footer__list--hide')
      .children('.footer__top-list')
      .slideDown(0);
  }
}

footerAccordionCheck();

$(window).on('resize', function () {
  footerAccordionCheck();
});

$('.hide').on('click', function (e) {
  if ($(window).width() >= 449) return;

  e.preventDefault();

  $(this).toggleClass('footer__list--hide');

  if ($(this).hasClass('footer__list--hide')) {
    $(this).children('.footer__top-list').slideUp();
  } else {
    $(this).children('.footer__top-list').slideDown();
  }
});



