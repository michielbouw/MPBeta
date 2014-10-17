/*!
 * MPBeta
 * 
 * Bootstrap v3.0.0
 *
 * Copyright 2014 MPBeta
 * www.mpbeta.nl
 * contact@mpbeta.nl
 *
*/

$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
});

	jQuery(document).each(function() {
    	$('.project')
    	.mouseenter(function () {
		$(this).find('.link-overlay').stop(true, true).fadeIn();
    	})
    	.mouseleave(function () {
    	$(this).find('.link-overlay').stop(true, true).fadeOut();
    	});	
	});
	
	jQuery(window).load(function() {
		
		var $row = $('#portfolio-items');
		$row.isotope({
			itemSelector: '.project',
			filter: '*'
		});
	
		$('#filters').on( 'click', 'a', function( event ){
			var filtr = $(this).attr('data-filter');
			$row.isotope({
				itemSelector: '.project',
				filter: filtr
			});
			return false;
		});
		
	});

	jQuery(document).ready(function() {
		
		var sOffset = $(".navbar").offset().top;
		$(window).scroll(function() {
			var scrollYpos = $(document).scrollTop();
			if (scrollYpos > sOffset) {
				$(".full-width-image-1").css({
					'margin-bottom': '0',
				});
				$(".navbar").removeClass('navbar-static-top');
				$(".navbar").addClass('navbar-fixed-top');
				$(".navbar").css({
					'background-color': '#428bca',
				});
				$(".navbar .container .menu").css({
					'padding': 0
				});
				$(".navbar .navbar-brand").css({
					'display': 'block',
					'opacity': 1
				});
				$(".navbar .nav").addClass('navbar-right');
				$(".navbar .nav").css({
					'margin': '0',
					'margin-right': '-15px',
				});
				$(".navbar-inverse .navbar-nav > li > a").css({
					'font-size': '16px'
				});
			} else {
				$(".full-width-image-1").css({
					'margin-bottom': '-100px',
				});
				$(".navbar").css({
					'background': 'transparent',
				});
				$(".navbar").removeClass('navbar-fixed-top');
				$(".navbar").addClass('navbar-static-top');
				$(".navbar .container .menu").css({
					'padding': '25px 15px'
				});
				$(".navbar .navbar-brand").css({
					'opacity': 0,
					'display': 'none'
				});
				$(".navbar .nav").removeClass('navbar-right');
				$(".navbar .nav").css({
					'margin': '0',
					'float': 'none'
				});
				$(".navbar-inverse .navbar-nav > li > a").css({
					'font-size': '24px'
				});
			}
		});
		
		$('.message-box').css({'marginTop':$(window).height()*0.2});

		$('.home-slider').flexslider({
			animation: "slide",
			directionNav: false,
			controlNav: false,
			direction: "vertical",
			slideshowSpeed: 15000,
			animationSpeed: 1000,
			smoothHeight: false,
		});
		
		$('.fb-count').SocialCounter({ SocialSite: 'Facebook', UName: 'http://facebook.com/mpbeta.nl' });
		
		$('.fb-post').SocialPost({ Count: '1', UID: '226213847556371' });
		
		var images = ['intro-bg.jpg','macbook-mpbeta.jpg','intro-bg.jpg','8.jpg','macbook-mpbeta.jpg','9.jpg','intro-bg.jpg'];
		$('.full-width-image-1').css({'background': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center center fixed', 'background-size':'cover'});
	});