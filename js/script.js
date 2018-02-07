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


  /*
  TweenMax.set('.circle-top',{
    drawSVG: 0,
    transformOrigin:"50% 50%"});


  $('.svg-arrow').hover(function(){
  
    TweenMax.to('.circle-top', 1.2,{
      drawSVG:"0% 100%",
      rotation: '180',
      ease:new Ease(BezierEasing(0.73,0.38,0,1))});

  },function(){


    TweenMax.to('.circle-top', 1.2,{
      drawSVG:"0% 0%",
      rotation: '0',

      ease:new Ease(BezierEasing(0.73,0.38,0,1))});
  }
  


  );

  */

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
  


  $('#fullpage').fullpage({
    
        scrollingSpeed: 700,
        menu: '.fullpage-menu',
        onLeave: function(index,nextIndex, direction) {
          
        }
  });



  

});