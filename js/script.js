
$(window).load(function(){
 hideURLbar();
});

var hideURLbar = function(){
 window.scrollTo(0,1);
};

// 
 $.mobile.pushStateEnabled = false;
 
 
$(document).ready(function() {



 	//Global Tap class needs to be added to all links so the URL doesn't come into view
 	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
 	// Use this for high compatibility (iDevice + Android)	
 	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);


}); //end of document


// initialize the scroller for each page that has class boom
$('.boom').live( 'pageshow',function(event){
	var	 myScroll = new iScroll('wrapper', {  vScrollbar: true, checkDOMChanges: true });
});
