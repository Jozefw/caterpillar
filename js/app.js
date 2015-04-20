// template for require core code
define(['jquery', 'js/keyboardEvent'

	], function($, keyboardEvent) {
		var food = "",
		direction = 1,
		snake = ["3_10", "2_10","1_10"],
		speed = 200,
		tail= [];

		var app = {
			init: function() {
				keyboardEvent.init(function(direction) {
					alert("keyboard event fired " + direction );
				});

			}
		};

		//$(function(){


			function init() {
				tail= [];
				direction = 1;
				snake = ["3_10", "2_10","1_10"];


				/* clears the board*/
				$('#container').html("");

				/*make rows and coloumns for the board*/
				for ( var row = 0; row < 20; row++ ) {
					for ( var column = 0; column < 20; column++ ) {
						$('#container').append('<div id="columns_'+row+'_'+column+'" class = "boardCell"</div>');
					}
				}

				/* make the snake position*/
				$('#columns_1_10').addClass('snakeCell');
				$('#columns_2_10').addClass('snakeCell');
				$('#columns_3_10').addClass('snakeCell');

		/*put some food on the board*/
		generateFood();
	/* run gameUpdate to get the snake moving*/
	setTimeout(function(){
		gameUpdate();
	}, speed );
}


init();

function generateFood() {
	var appleRow = Math.floor(Math.random() *19 );
	var appleColumn = Math.floor(Math.random()* 19 );
	$('#columns_'+appleRow+'_'+appleColumn).addClass('appleCell');
	food = appleRow + "_" + appleColumn;
}

function gameUpdate() {
	var tail = snake.pop();
	$('#columns_'+tail).removeClass('snakeCell');

		// define the snake head, placement of the snakes head will point to the direction of movement
		var head = snake[0],
		// the direction of movement is going to be either into a row or a column so we need to break the head up into these component parts
		headParts = head.split("_"),
		headRow = parseInt(headParts[0]),
		// console.log(headRow);
		headColumn = parseInt(headParts[1]);
		// console.log(headColumn);

	// the snake is controlled by the heads movement into either a row or column which will be made by the arrow keypress;
	switch(direction){
		case 1:
				headRow = headRow + 1; //row increases so this is down position
				break;
				case 2:
				headColumn = headColumn - 1; //move to the left	
				break;
				case 3:
				headRow = headRow - 1; //mov to top
				break;
				case 4:
				headColumn = headColumn + 1; // move to right
				break;
			}
		// snake direction IS the placement of a new cell in front of the head in the desired direction from the keypress above 
		var newSnakeDir ="" + headRow + "_" + headColumn;
		

		// if snake direction is on food grow the tail
		if ( newSnakeDir === food ) {
			snake.push(tail);
			$('#columns_'+tail).addClass('snakeCell');
			// remove the apple
			$('#columns_'+food).removeClass('appleCell');
			generateFood();
		}

		snake.unshift(newSnakeDir);
		// $('#columns_' + newSnakeDir).hasClass('snakeCell');
		if ( headColumn<0 || headRow<0 || headColumn>19 || headRow>19 || $('#columns_' + newSnakeDir).hasClass('snakeCell') ) {
			alert("You Lost!");
			init();
			return;
		}
		$('#columns_' + newSnakeDir).addClass('snakeCell');
		// allow the snake to move with regular periodicity
		setTimeout(function(){gameUpdate();}, speed);

	}
	return app;


});


