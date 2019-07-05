$(".anchor[href*=#]").on("click", function(e){
	let anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 700);
	e.preventDefault();
	return false;
});