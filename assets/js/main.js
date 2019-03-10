jQuery(function($) {
	"use strict";

	var vnBuilding = window.vnBuilding || {};

	/*==========================
	=		MAIN FUNCTION      =
	============================*/

	vnBuilding.slider = function() {
		if( $('.slider__list').length ) {
			$('.slider__list').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				autoplay: true,
				autoplaySpeed: 4000,
				prevArrow: `<div class="prev"><i class="icons flaticon-back"></i></div>`,
				nextArrow: `<div class="next"><i class="icons flaticon-next"></i></div>`
			});
		}
	};

	/*==========================
	=		INIT FUNCTION      =
	============================*/

	$(document).ready(function() {
		vnBuilding.slider();
	});


	$(window).on('load', function() {});
	$(window).on('resize', function() {});
});