jQuery(document).ready(function ($) {

  var mobile = window.matchMedia("(max-width: 767px)");

  if (mobile.matches) {

  }

  // business form trigger

  $('.bf-trigger').click(function(){
    $('.business-form').toggleClass('active');
  });


  // language menu

  $('.language-menu a').click(function () {
    $('.language-menu a').removeClass('active');
    $(this).addClass('active');
  });


  // animations

  var homeBg = new TimelineMax({
    paused: true
      })
      .to('.section__bg',2,{x: '50%'});



  $('#fullpage').fullpage({

    scrollingSpeed: 700,
    menu: '.fullpage-menu',
    // scrollOverflow:true,
    // mouseWheelSpeed: 6
/*
    onLeave: function(index, nextIndex, direction){
      if(index == 1 && direction =='down'){
        homeBg.play();
        console.log('Go')        
      }
    }
*/  
  });

  // hp tilt effect

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

  


  

});