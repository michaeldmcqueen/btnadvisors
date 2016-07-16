$(document).ready(function() {
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  };
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.menu').toggleClass('show');
  });
  // Vimeo API nonsense
  var player = document.getElementById('player');
  $f(player).addEvent('ready', ready);

  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false)
    } else {
      element.attachEvent(eventName, callback, false);
    }
  }
  function ready(player_id) {
    var froogaloop = $f(player_id);
    froogaloop.addEvent('play', function(data) {
      $('.flexslider').flexslider("pause");
    });
    froogaloop.addEvent('pause', function(data) {
      $('.flexslider').flexslider("play");
    });
  }
  // Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
  $(".flexslider")
    .fitVids()
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      before: function(slider) {
        $f(player).api('pause');
      }
    });
});
