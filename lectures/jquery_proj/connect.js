
var player1 = prompt("Player One, enter your name, you will be blue")
var player2 = prompt("Player Two, enter your name, you will be red")

$('.turnHeader').text(player1 + ": It is your turn, please pick a column to drop your blue chip.")


//Grab Columns
var colA = $('.colA');
var colB = $('.colB');
var colC = $('.colC');
var colD = $('.colD');
var colE = $('.colE');
var colF = $('.colF');
var colG = $('.colG');

//Array of Columns
var colArr = [colA, colB, colC, colD, colE, colF, colG]


//Drop Chip Functions
//alert("This column is full, please choose another column.");
function dropChip(column, color){
  for (var i = -1; i > -column.length-1; i--) {
    if(column.eq(i).css("background-color") === 'rgb(211, 211, 211)'){
      column.eq(i).css("background-color", color);
      break;
    }
  }
}

//Click Functions
colA.click(function(){
  dropChip(colA, chipColor);
})

colB.click(function(){
  dropChip(colB, chipColor);
})

colC.click(function(){
  dropChip(colC, chipColor);
})

colD.click(function(){
  dropChip(colD, chipColor);
})

colE.click(function(){
  dropChip(colE, chipColor);
})

colF.click(function(){
  dropChip(colF, chipColor);
})

colG.click(function(){
  dropChip(colG, chipColor);
})

//Check Board for winner
function checkBoard(){
  // Check Rows
  var rowCount = 0;
  for

  // Check Columns
  var colCount = 0;
  for (var i = 1; i < column.length; i++) {
    if(column.eq(i).css("background-color") === column.eq(i-1).css("background-color"){
      column.eq(i).css("background-color", color);
      break;
    }

  // Check Diagonals
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}

// Game Play
var gameOn = true;
var playerTurn = player1
var chipColor
var playerHeader = $('#playerHeader')
// while(gameOn){
//
//   checkBoard();
// }
//
// $('h1').text(playerTurn + "")

if(playerTurn === player1){
  chipColor = 'lightblue'
  playerHeader.text(player1 + ": It is your turn, please select a column to drop a blue chip.")

  playerTurn = player2
}else{
  chipColor = 'pink'
  playerHeader.text(player2 + ": It is your turn, please select a column to drop a red chip.")

  playerTurn = player1
}
