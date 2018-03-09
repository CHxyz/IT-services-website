$(function() {

	var minWidth = "993px";
	var screenWidth = $(window).width();
    
    $(window).resize(setNav);
    
    var smallScreen = function(width) {
    	return screeWidth <= minWidth;
    };
    
    var setNav = function() {
    	if (smallScreen) {
    		$("#small-nav").hide();
    	    $("#big-nav").show();
    	}
    	else {
    		$("#big-nav").hide();
    	    $("#small-nav").show();
    	}
	};
});