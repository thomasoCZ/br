$(document).ready(function() {

  var mobile = window.matchMedia("(max-width: 767px)");

  if (mobile.matches) {

  }

  $('#fullpage').fullpage({
    scrollingSpeed: 700,
    menu: '.fullpage-menu'
  });

  $('.section--home').removeClass('active');
  $('.loader__logo').addClass('in');



  // business form trigger

  $('.bf-trigger').click(function(){
    $('.business-form').toggleClass('active');

    if($('.business-form').hasClass('active')) { 
      $.fn.fullpage.setAllowScrolling(false);
    }
    else {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });


  // language menu

  $('.language-menu a').click(function () {
    $('.language-menu a').removeClass('active');
    $(this).addClass('active');
  });


  // hp tilt effect
  /*
  $('.work-screen').tilt({
    maxTilt:        6,
    perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
    //easing:         "linear",    // Easing on enter/exit.
    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          300,    // Speed of the enter/exit transition.
    transition:     true,   // Set a transition on enter/exit.
    disableAxis:    null,   // What axis should be disabled. Can be X or Y.
    reset:          false,   // If the tilt effect has to be reset on exit.
    glare:          false,  // Enables glare effect
    maxGlare:       1       // From 0 - 1.
  });
  

*/


});


$(window).on('load', function () {
  $('.loader__logo--front').addClass('animate');
  setTimeout(function(){
    $('body').addClass('fp-init');
    $('.section--home').addClass('active');
  },2800);
});