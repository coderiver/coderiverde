head.ready(function() {
	

	// go thru animations
	var i = 0;   
	function changeClass(){
	    $("body").removeClass("figure" + i)
	        i = (i==3)?1:i+1;     
	    $("body").addClass("figure" + i); 
	}
	setInterval(changeClass, 3000);
	// or click thru them
	// $('body').click(function(event) {
	// 	changeClass();
	// });

	// goto
	$('.js-scroll').click(function(event) {
		event.preventDefault();
		scrollto = $(this).data('goto'); 
		$('html, body').animate({
	        scrollTop: $("#"+scrollto).offset().top
	    }, 1000);
	});
	$('.people__all').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 2
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          centerMode: true,
	          slidesToShow: 1
	        }
	      }
	    ]
	});
					

	//@todo ajax send form
	//@todo slick for feedbacks
	//@todo success sent form
});