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


	$('.js-scroll').click(function(event) {
		event.preventDefault();
		scrollto = $(this).data('goto');
		$('html, body').animate({
	        scrollTop: $("#"+scrollto).offset().top
	    }, 1000);
	});

	//@todo ajax send form
	//@todo slick for feedbacks
});