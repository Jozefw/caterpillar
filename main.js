(function init() {
	// clears the board
	$('#container').html("");
	var food = "",
			direction = 1,
			food = "",
			snake = ["3_10", "2_10","1_10"],
			tail= [];

// make rows and coloumns for the board
	for ( var row = 0; row < 20; row++ ) {
		for ( var column = 0; column < 20; column++ ) {
			$('#container').append('<div id="columns_'+row+'_'+column+'" class = "boardCell"</div>');
		}
	}

// make the snake position
	$('#columns_1_10').addClass('snakeCell');
	$('#columns_2_10').addClass('snakeCell');
	$('#columns_3_10').addClass('snakeCell');

	// put some food on the board
	generateFood();
// run gameUpdate to get the snake moving
	setTimeout( function(){ gameUpdate}, speed );
})();

function generateFood() {
	var appleRow = Math.floor(Math.random() *19 );
	var appleColumn = Math.floor(Math.random()* 19 );
	$('#columns_'+appleRow+'_'+appleColumn).addClass('appleCell');
	food = row+"_"+column;
};

function gameUpdate() {
	var tail = snake.pop();
	$('#columns_'+tail).removeClass('appleCell');

	// define the snake head, placement of the snakes head will point to the direction of movement
	var head = snake[0],
	// the direction of movement is going to be either into a row or a column so we need to break the head up into these component parts
		 headParts = head.split("_"),
		 headRow = parseInt( headParts[0] ),
		 headColumn = parseInt( headParts[1] ),
		 direction;
// the snake is controlled by the heads movement into either a row or column which will be made by the arrow keypress;
	switch(direction){
		case 1: 
			row = row + 1 //row increases so this is down position
			break;
		case 2:
			column = column - 1 //move to the left	
			break;
		case 3:
			row = row - 1 //mov to top
			break;
		case 4:
			column = column + 1 // move to right
			break;
}


	// snake direction IS the placement of a new cell in front of the head in the desired direction from the keypress above 
	var newSnakeDir = row+"_"+column;
	snake.unshift(newSnakeDir);
}

// if snake direction is on food grow the tail
if ( newSnakeDir === food ) {
	snake.push(tail);
	$('columns_'+tail).addClass('snakeCell');
	// remove the apple
	$('columns_'+food).removeClass('appleCell');
	generateFood();
} 

// identify which keypress and asign a direction to it
$(document).keypress(function(event) {
	if( event.keyCode === 37 ) {
		direction = 2;
	}
	else if ( event.keyCode === 38 ) {
		direction = 3;
	}
	else if ( event.keycode === 39 ) {
		direction = 4; 
	}
	else if ( event.keyCode === 40 ) {
		direction = 1;
	}
});

// allow the snake to move with regular periodicity
setTimeout( function(){gameUpdate()}, speed)
})