$(document).ready(function() {

	if(Modernizr.mq('only all')) {
		$('html').addClass('mq');
	} else {
		$('html').addClass('no-mq');
	};


  // $( ".menu-btn" ).on('click touchstart', function() {
  //       $('.menu').toggleClass('show');
  //   });


  $('.hamburger-menu').on('click', function() {
      $('.bar').toggleClass('animate');
      $('.menu').toggleClass('show');
    });


});