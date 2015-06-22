$(document).ready(function() {
	$button = $('#btn');
	btnText = $('#btn').val();

	$button.on('click', loading);

	function loading(e) {
		$button.html('Loading...');

		setTimeout(function() {
			$button.html('Click to Load');
		}, 2500);
	}
});