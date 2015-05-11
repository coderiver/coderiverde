head.ready(function() {
	

	// go thru animations
	var i = 0;   
	function changeClass(){
	    $("body").removeClass("figure" + i)
	        i = (i==3)?1:i+1;     
	    $("body").addClass("figure" + i); 
	} 
	setInterval(changeClass, 2200);
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

	// team slider
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
	//feedback slider
	$('.slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  autoplay: true,
	  slide: '.slide',
	  autoplaySpeed: 5000,
	  prevArrow: '.slider__prev',
	  nextArrow: '.slider__next'
	});


	// send form
	function isEmail(emailAddress) {
    	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    	return pattern.test(emailAddress);
	};
	$('.form').submit(function(event) {
		event.preventDefault();
		// validate
		nameVal = $('#name').val();
		emailVal = $('#email').val();
		contactVal = $('#contact').val();

		if(nameVal!='' && isEmail(emailVal) && contactVal!=''){
			// dummy
			// setTimeout(function(){
			// 	$('.form').addClass('is-success');
			// }, 1000);

			$.ajax({
				type: "POST",
				url: "/send.php",
				data: $(".form").serialize(), // serializes the form's elements.
				success: function(data) {
					$('form').addClass('is-success');
					console.log(data);
					setTimeout(function(){$('.form').removeClass("is-success");}, 2000);
				}
			});
		}
		else{
			$('.form').addClass('shake');
			setTimeout(function(){
				$('.form').removeClass('shake');
			}, 1000);
			return false;
		}
	});
					
});