// script.js

$(function() {

	var minWidth = "800";

	$("#small-nav").hide();
	setNav();

	$(window).resize(setNav);

	$(".btn-small-nav-toggle").click(function() {
		$("#small-nav").stop(true,false).slideToggle();
	});
    
    function isSmallScreen() {
		var screenWidth = $(window).width();
    	return  screenWidth < minWidth;
	};
    
    function setNav() {
    	if (isSmallScreen()) {
			$("#big-nav").hide();
			$(".btn-small-nav-toggle").show();
			$("#brand-icon").addClass("brand-nav-icon-small");
			$("header").addClass("header-small");
			$("#brand-icon").removeClass("brand-nav-icon-big");
    	}
    	else {
			$("#small-nav").hide();
    		$(".btn-small-nav-toggle").hide();
			$("#big-nav").show();
			$("#brand-icon").addClass("brand-nav-icon-big");
			$("#brand-icon").removeClass("brand-nav-icon-small");
			$("header").removeClass("header-small");
    	}
	};

	$('.collapsible').find('.collapsible-header').click(function(e){
		$('.collapsible-body').slideUp(250);
		$(this).parent().children('.collapsible-body').stop(true,false).slideToggle(250);
	});
});