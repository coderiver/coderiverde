head.ready(function() {

	$('body').click(function(event) {
		$(this).toggleClass('figure1');
	});

	console.log($('body').html());
});