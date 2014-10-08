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
				$(".navbar").css({
					'background-color': '#428bca',
					'margin-top': 0
				});
				$(".navbar .container .menu").css({
					'padding': 0
				});
				$(".navbar .navbar-brand").css({
					'opacity': 1
				});
				$(".navbar-inverse .navbar-nav > li > a").css({
					'font-size': '16px'
				});
			} else {
				$(".navbar").css({
					'background-color': 'transparent',
					'margin-top': '40px'
				});
				$(".navbar .container .menu").css({
					'padding': '25px 15px'
				});
				$(".navbar .navbar-brand").css({
					'opacity': 0
				});
				$(".navbar-inverse .navbar-nav > li > a").css({
					'font-size': '24px'
				});
			}
		});
		
		$('.message-box').css({'marginTop':$(window).height()*0.3});

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
	});