/* global require*/
//tell jshint there is a global variable named require
// 'use strict';// jshint ignore:line

// passing json argument to function as an argument, this is the configuration PATHS
require.config(
{

	// these are the path links
	paths: {
		'jquery':'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',

	}


});

require(['js/app'], function(app){
	app.init();
});