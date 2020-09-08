/*!
 *	Template Functions
*/

(function($){

	"use strict";

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).on('load', function() {

		$('.page-loader').delay(350).fadeOut('slow');

		/* ---------------------------------------------- /*
		 * WOW Animation on page load
		/* ---------------------------------------------- */

		var wow = new WOW({
			mobile: false
		});

		wow.init();

	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		var mobileTest;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

		/* ---------------------------------------------- /*
		 * Header animation
		/* ---------------------------------------------- */

		var header = $('.header');

		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 5) {
				header.addClass('header-small');
				header.addClass('header-shadow');
			} else {
				header.removeClass('header-small');
				header.removeClass('header-shadow');
			}
			if ( ( $('.module-header').length <= 0 ) && ( $('.module-slides').length <= 0 ) ) {
				header.addClass('header-small');
			}
		}).scroll();

		/* ---------------------------------------------- /*
		 * Light/dark header
		/* ---------------------------------------------- */

		var module_header = $('.module-header');

		if ( module_header.length >= 0 ) {
			if ( module_header.hasClass('bg-dark') ) {
				header.addClass('header-light');
			} else {
				header.removeClass('header-light');
			}
		}

		/* ---------------------------------------------- /*
		 * Sticky footer
		/* ---------------------------------------------- */

		function footerAlign() {
			var footerHeight = $('.footer').outerHeight();
			$('.wrapper').css('padding-bottom', footerHeight);
			$('.footer').css('height', footerHeight);
		}

		$(document).ready(function() {
			footerAlign();
		});

		$( window ).resize(function() {
			footerAlign();
		});

		/* ---------------------------------------------- /*
		 * Collapse navbar on click
		/* ---------------------------------------------- */

		$(document).on('click', '.inner-navigation.show', function(e) {
			if ( $(e.target).is('span')  && !$(e.target).parent().parent().hasClass('menu-item-has-children') ) {
				$(this).collapse('hide');
			}
		});

		$('.nav-toggle-bars').on('click', function () {
			if ($('.nav-toggle-bars').hasClass('nav-toggle-bars')) {
				$('.nav-toggle-bars').addClass('is-opened');
				$('.nav-toggle-bars').removeClass('nav-toggle-bars');
			} else {
				$('.is-opened').addClass('nav-toggle-bars');
				$('.is-opened').removeClass('is-opened');
			}
		});


		/* ---------------------------------------------- /*
		 * One Page Nav
		/* ---------------------------------------------- */

		$('.onepage-nav a').filter(function() {
			if ($(this).is(':not([href^="#"])')) {
				$(this).addClass('external');
			}
		});

		$('.onepage-nav').singlePageNav({
			filter: ':not(.external)',
			currentClass: 'active',
			offset: '58',
		});

		/* ---------------------------------------------- /*
		 * Setting background of modules
		/* ---------------------------------------------- */

		$('[data-background]').each(function() {
			$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
		});

		$('[data-background-color]').each(function() {
			$(this).css('background-color', $(this).attr('data-background-color') );
		});

		$('[data-color]').each(function() {
			$(this).css('color', $(this).attr('data-color') );
		});

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		$('.parallax').jarallax({
			speed: 0.6
		});

		/* ---------------------------------------------- /*
		 * Portfolio masonry
		/* ---------------------------------------------- */

		var filters   = $('#filters'),
			worksgrid = $('.row-portfolio');

		$('a', filters).on('click', function() {
			var selector = $(this).attr('data-filter');
			$('.current', filters).removeClass('current');
			$(this).addClass('current');
			setTimeout(function() {
				worksgrid.isotope({
					filter: selector
				});
			}, 300);
			$('.portfolio-item', worksgrid).css({
					"will-change": "",
					"transform": "",
					"opacity": "",
				});
			return false;
		});

		$(window).on('resize', function() {
			setTimeout(function() {
				worksgrid.imagesLoaded(function() {
					worksgrid.isotope({
							layoutMode: 'masonry',
						itemSelector: '.portfolio-item',
						transitionDuration: '0.2s',
						masonry: {
							columnWidth: '.grid-sizer',
						},
					});
				});
			}, 300);
			$('.portfolio-item', worksgrid).css({
				"will-change": "",
				"transform": "",
				"opacity": "",
			});
		}).resize();

		/* ---------------------------------------------- /*
		 * Slides
		/* ---------------------------------------------- */

		$('.image-slider').each(function () {
			$(this).owlCarousel($.extend({
				dots:     true,
				nav:      true,
				center:   true,
				items:    1,
				loop:     true,
				autoHeight:true,
				margin:   0,
				navText: [
					'<span class="ti-angle-left"></span>',
					'<span class="ti-angle-right"></span>'
				],
			}, $(this).data('carousel-options')));
		});

		/* ---------------------------------------------- /*
		 * Lightbox, Gallery
		/* ---------------------------------------------- */

		$('.gallery [rel=gallery]').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			},
			callbacks: {

				open: function() {
					//$('body').addClass('noscroll');
					$('html').css('margin-right', '0');
				},

				close: function() {
					//$('body').removeClass('noscroll');
					$('html').css('margin-right', 0);
				}
			}
		});

		$('.portfolio-item .photo').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			},
			callbacks: {
				open: function() {
					$('html').css('overflow-y', 'hidden');
					$('html').addClass('modal-w');
				},
				close: function() {
					$('html').css('overflow-y', '');
					$('html').removeClass('modal-w');
				}
			}
		});

		/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.smoothscroll').on('click', function(e) {
			var target  = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 58
			}, 600, 'swing');
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Scroll top
		/* ---------------------------------------------- */

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-top').addClass('scroll-top-visible');
			} else {
				$('.scroll-top').removeClass('scroll-top-visible');
			}
		});

		$('a[href="#top"]').on('click', function() {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});

		/* ---------------------------------------------- /*
		 * Disable hover on scroll
		/* ---------------------------------------------- */

		var body = document.body,
			timer;
		window.addEventListener('scroll', function() {
			clearTimeout(timer);
			if (!body.classList.contains('disable-hover')) {
				body.classList.add('disable-hover')
			}
			timer = setTimeout(function() {
				body.classList.remove('disable-hover')
			}, 100);
		}, false);
	});

})(jQuery);
