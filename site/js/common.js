head.ready(function() {
	$('body').click(function(event) {
		changeClass();
	});


	var i = 0; 
	function changeClass(){
	    $("body").removeClass("figure" + i)
	        i = (i==3)?1:i+1;    
	    $("body").addClass("figure" + i);
	}
	// setInterval(changeClass, 2000);

});