
$(document).ready(function(){
	$('.navbar-right li a').mouseover(function(){
		$('.navbar-right li a').css('text-decoration','underline');
	});

		$('.navbar-right li a').mouseout(function(){
		$('.navbar-right li a').css('text-decoration','none');
	});

		$('p,h4,h5,i,.benefit_ul ul li').fadeIn('8000000');

});