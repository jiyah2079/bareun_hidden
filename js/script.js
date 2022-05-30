$(document).ready(function(){
		
	$('.total').click(function(){
		$(this).toggleClass('on');
		$('.nav_right').toggleClass('nav_right_on');
	});
	  
	$('.nav_right li a').click(function(){
		$('.nav_right').removeClass('nav_right_on');
		$('.total').removeClass('on');
	 });
	  
	});

(function() {
	document.documentElement.className = 'js';
	var slideshow = new CircleSlideshow(document.getElementById('slideshow'));
})();