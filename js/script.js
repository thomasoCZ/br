

function homeIn() {

  
    // home featured in
  
    setTimeout(function(){
      $('.home-featured').addClass('in');
    }, 500);
  
  
  }

  


 var mobile = window.matchMedia("(max-width: 767px)");

 

  function SplitEm() {

    var splitWidth = '80%';

    if (mobile.matches) {
      splitWidth = 'calc(100% - 2.8rem)'
    }

    $('.split-text').each(function(i){
      $(this).splitLines({
        tag: '<div class="split-line"><span>',
        width: splitWidth,
        //width: '100%',
        keepHtml: true
      });

    });

  }



// ====================================== document ready ==================================

$(document).ready(function() {

 


  SplitEm();



  $('.home-logos__item').click(function(){

    var thisTarget = $(this).data('target');
    
    $('.home-logos__item').removeClass('active');
    $(this).addClass('active');
    

    $('.home-line').removeClass('animate');
    $('.split-text').removeClass('active');
    
    $('.home-line').addClass('animate');
    $('#' + thisTarget).addClass('active');

  });

  // desktop fullpage init

  $('#fullpage').fullpage({
    scrollingSpeed: 700,
    //menu: '.fullpage-menu',
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
       console.log("Trigger section" + index + " animation!");
   }
  });
  

  // logo loader in 

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


// ====================================== window load ==================================


$(window).on('load',function(){
  //$('body').addClass('fp-init');
  //$('.section--home').addClass('active');
  

  $('.loader__logo--front').addClass('animate');
  setTimeout(function(){
    $('body').addClass('fp-init');
    $('.section--home').addClass('active');
    homeIn();
  },2800);

  
  
});


