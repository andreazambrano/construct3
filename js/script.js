(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 60) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Main Menu Fade Toggle
		$('.header-style-two .nav-toggler').on('click', function() {
			$('.header-style-two .main-menu').fadeToggle(300);
		});
	}
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	
	//Gallery With Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	
	//News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//Single Item Fade Carousel
	if ($('.single-item-fade-carousel').length) {
		$('.single-item-fade-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-caret-left"></span>', '<span class="fa fa-caret-right"></span>' ],
			autoHeight : true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	// Fullwidth Gallery Carousel
	if ($('.fullwidth-gallery-carousel').length) {
		$('.fullwidth-gallery-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				},
				1300:{
					items:4
				}
			}
		});    		
	}
	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);