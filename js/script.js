// script.js

$(function() {

	var minWidth = "980";

	$("#small-nav").hide();
	setNav();

	$(window).resize(setNav);

	$(".btn-small-nav-toggle").click(function() {
		$("#small-nav").toggle();
	});
    
    function isSmallScreen() {
		var screenWidth = $(window).width();
    	return  screenWidth < minWidth;
	};
    
    function setNav() {
    	if (isSmallScreen()) {
			$("#big-nav").hide();
			$(".btn-small-nav-toggle").show();
			$("#chxyz-icon").addClass("chxyz-nav-icon-small");
			$("#chxyz-icon").removeClass("chxyz-nav-icon-big");
    	}
    	else {
			$("#small-nav").hide();
    		$(".btn-small-nav-toggle").hide();
			$("#big-nav").show();
			$("#chxyz-icon").addClass("chxyz-nav-icon-big");
			$("#chxyz-icon").removeClass("chxyz-nav-icon-small");
    	}
	};
});