$(document).ready(function() {
	$('#nav,#subNav').hover(function() {
		$('#subNav').css('visibility', 'visible');
	}, function() {
		$('#subNav').css('visibility', 'hidden');
	});
});
