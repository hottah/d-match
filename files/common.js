$(function(){

	$("#header").on("click",function(){
		if( $("#keypad").length ){
			$("#keypad").fadeOut(30).remove();
		}else{
			$('<div id="keypad"><img src="/d-match/files/keypad.png" /><i></i></div>')
			.appendTo("body").hide().fadeIn(30);			

			setInterval(function(){
				$("#keypad i").fadeOut(300,function(){$(this).fadeIn(300)});
			},300);

		}
	});
});

/*
==================================================================
Interface elements for jQuery
*/
$(function(){

    $(window).on('load resize', function(){
       
       $("body").css({"padding-top":$("header").height()});
        
    });

/*
------------------------------------------------------------------
scrollTo
*/
$(".scrollto a").click(function() {
    $.scrollTo($($(this).attr("href")), {
        duration: 'slow'
    });
    return false;
});
/*
------------------------------------------------------------------
lightbox
*/
$('.lightbox a, .lightbox').fancybox();
/*
==================================================================
*/
});
