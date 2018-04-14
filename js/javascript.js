
$(document).ready(function(){
	$('.navbar-right li a').mouseover(function(){
		$('.navbar-right li a').css('text-decoration','underline');
	});

		$('.navbar-right li a').mouseout(function(){
		$('.navbar-right li a').css('text-decoration','none');
	});

		$('p,h4,h5,i,.benefit_ul ul li').fadeIn('8000000');

		$('.benefit_ul1 img').mouseover(function() {
			/* Act on the event */
			$('.benefit_ul1 img').attr("width","110%");
		});
		$('.benefit_ul1 img').mouseout(function() {
			/* Act on the event */
			$('.benefit_ul1 img').attr("width","100%");
		});

$(window).scroll(function() {
          $('.slideanim').each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
              if(pos < winTop + 700){
                $(this).addClass('slide');
              }

          });
        });

});