function diplay_hide (blockId){ 
	if ($(blockId).css('display') == 'none') 
	{ 
		$(blockId).animate({height: 'show'}, 700); 
	} 
	else 
	{     
		$(blockId).animate({height: 'hide'}, 700); 
	}
};

$('.showMap').click(function(){
	diplay_hide('#map');
	return false;
})

$('.showMap').click(function(){
	$('.arrow-down').toggleClass('rotate');
});