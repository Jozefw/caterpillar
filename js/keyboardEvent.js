	// wrap in a define function that gets passed an array of dependencies

// when we reference jquery we are namespacing it to $
define(['jquery'], function($){

		console.log("keyboard events included ");

	// identify which keypress and asign a direction to it
	var keyboardEvent = {

		init: function (callback) {
				var self = this;
				$(document).keydown(function(event) {
				// console.log(event.keyCode);
				if( event.keyCode === 37 ) {
					self.direction = 2;
				}
				else if ( event.keyCode === 38 ) {
					self.direction = 3;
				}
				else if ( event.keyCode === 39 ) {
					self.direction = 4;
				}
				else if ( event.keyCode === 40 ) {
					self.direction = 1;
				}
				callback(self.direction);
			});
		},
	}
	return keyboardEvent;
});

