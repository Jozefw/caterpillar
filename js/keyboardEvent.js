	// wrap in a define function that gets passed an array of dependencies


define([
	'jquery',
	// when we reference jquery we are namespacing it to $
	], function($){

	// identify which keypress and asign a direction to it
	var keyboardEvent = $(document).keydown(function(event) {
		// console.log(event.keyCode);
		if( event.keyCode === 37 ) {
			direction = 2;
		}
		else if ( event.keyCode === 38 ) {
			direction = 3;
		}
		else if ( event.keyCode === 39 ) {
			direction = 4;
		}
		else if ( event.keyCode === 40 ) {
			direction = 1;
		}
	});
	return keyboardEvent;
});

