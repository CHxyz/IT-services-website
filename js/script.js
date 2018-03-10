$(function() {

	var minWidth = "993";

	setNav();

    $(window).resize(setNav);
    
    function isSmallScreen() {
		var screenWidth = $(window).width();
    	return  screenWidth < minWidth;
	};
    
    function setNav() {
    	if (isSmallScreen()) {
    		$("#big-nav").hide();
    	    $("#small-nav").show();
    	}
    	else {
    		$("#small-nav").hide();
    	    $("#big-nav").show();
    	}
	};
});