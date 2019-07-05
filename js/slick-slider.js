$(document).on('ready', function() {
	$(".slider").slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});



	/// >>> WE ARE SLIDER <<< ///
	$(".team-slider").slick({
		dots: true,
		dotsClass: "my-dots",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		arrows: false
	});
	/// >>> WE ARE SLIDER <<< ///

});