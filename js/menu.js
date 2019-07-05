$(document).ready(function(){
	$('#humburger-menu').click(function(){
		$(this).toggleClass('open');
		$('.menu-items').toggleClass('show');		
	});
});
