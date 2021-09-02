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
