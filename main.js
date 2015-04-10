// clears the board
$('#container').html("");
// make rows and coloumns for the board
for ( var row = 0; row < 20; row++ ) {
	for ( var column = 0; column < 20; column++ ) {
		$('#container').append('<div id="columns_'+row+'_'+column+'" class = "boardCell"</div>');
	}
}

// this is the snake position
(function init() {
	$('#columns_1_10').addClass('snakeCell');
	$('#columns_2_10').addClass('snakeCell');
	$('#columns_3_10').addClass('snakeCell');
})();

(function generateFood() {
	var appleRow = Math.floor(Math.random() *19 );
	var appleColumn = Math.floor(Math.random()* 19 );
	$('#columns_'+appleRow+'_'+appleColumn).addClass('appleCell');
})();

function snakeTail(){
	// you want the array with just the rows & colums not the id name
	var snake = ["3_10", "2_10","1_10"];
	var tail = snake.pop();
	$('#columns_'+tail).removeClass('appleCell');
}

function snakeMove() {
	// define the snake head
	var head = snake[0];
	// the direction of mivement is going to be either into a row or a column so we need to break the head up into these component parts
	var headParts = head.split("_");
	var headRow = parseInt( headParts[0] );
	var headColumn = parseInt( headParts[1] );
// the snake is controlled by the heds movement into either a row or column which will be made by the arrow keypress;
	switch(direction){
		
	}
}