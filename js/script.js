"use strict";

/* Start Toggle menu js*/
$('.nav-toggle').click(function () {
  $(this).toggleClass("is-active");
  $('.menu-toggle').toggleClass('active');
});
/* End toggle menu js */

/* Navigation bar color change */

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar-hotel");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
/* End js of navigation bar color change */

/* active js for navigation link */
// Add active class to the current button (highlight it)
// var nav = document.getElementById('.site-nav');
// var nav_link = navigation.getElementsByClassName(".nav-link");
// for (var i = 0; i < nav_link.length; i++) {
// nav_link[i].addEventListener("click", function() {
// var current = document.getElementsByClassName("active");
// current[0].className = current[0].className.replace(" active", "");
// this.className += " active";
// });
// }

/* active js for navigation link */

/* accomodation-hotel-image*/

var section = document.querySelector('.accomodation-hotel-image');
var hasEntered = false;
window.addEventListener('scroll', function (e) {
  var shouldAnimate = window.scrollY + window.innerHeight >= section.offsetTop;

  if (shouldAnimate && !hasEntered) {
    hasEntered = true;
    $('.counter-value').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function step(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
});
/** End accomodation-hotel-image */

/* accomodation js start */

$('.content').slick();
/* End of accomodation of js*/
// testimonial

$('.slider-testi-wrapper').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}); //testimonial

/* about animation */

$(function () {
  var wow = new WOW({
    boxClass: 'wow',
    // animated element css class (default is wow)
    animateClass: 'animated',
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: true,
    // trigger animations on mobile devices (default is true)
    live: true,
    // act on asynchronously loaded content (default is true)
    callback: function callback(box) {// the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window

  });
  wow.init();
});
/* end about animation */

/* Slider Nav js */

$('.nav-home').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.banner').offset().top - 60
  }, Number('1500'), 'swing');
});
$('.nav-about').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.about').offset().top - 60
  }, Number('1500'), 'swing');
});
$('.nav-accomodation').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.accomodation').offset().top - 60
  }, Number('1500'), 'swing');
});
$('.nav-amenities').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.amenities').offset().top - 60
  }, Number('1500'), 'swing');
});
$('.nav-restaurant').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.restaurant').offset().top - 60
  }, Number('1500'), 'swing');
});
$('.nav-gallery').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.gallery').offset().top - 60
  }, Number('1500'), 'swing');
});
$('.nav-contact').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.contact-us ').offset().top - 60
  }, Number('1500'), 'swing');
});
/**End of Slider nav js */