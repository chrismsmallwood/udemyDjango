// Interaction

var testHead = document.querySelector('#testHead')
var clickHead = null

testHead.addEventListener("click",function(){
  if (clickHead === null){
    testHead.textContent = "JS is working! X";
    testHead.style.color = 'red';
    clickHead = "X"
  } else if (clickHead === "X"){
    testHead.textContent = "JS is working! O";
    testHead.style.color = 'blue';
    clickHead = "O"
  } else if (clickHead === "O"){
    testHead.textContent = "JS is working!";
    testHead.style.color = 'black';
    clickHead = null;
  }

})

// Player Turn Label
var turnLabel = document.querySelect('#playerTurn')

// Cell Functionality
var cells = document.querySelectorAll('td')

function checkCells(){
  if(this.textContent === ''){
    this.textContent = 'X'
  } else if(this.textContent === 'X'){
    this.textContent = 'O'
  } else{
    this.textContent = ''
  }
}

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", checkCells)
}

// Restart Button
var restartButton = document.querySelector('#restartButton')

function restartGame(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}

restartButton.addEventListener("click", restartGame)

// Check board
function gameWinner(){

}

// Game State
var gameArray = ['','','','','','','','','']
var gameOn = true
var playerTurn = 'X'
while(gameOn){
  if((gameArray[0] === gameArray[1] && gameArray[1] ==== gameArray[2]) ||
  )
  for (var i = 0; i < gameArray.length; i++) {
    if(gameArray[i] === 'X'){
      break;
    }
    gameOn= false;

    alert("Game ended in a tie. Press Restart Button to Play Again")
  }
  if(playerTurn === 'X'){
    turnLabel.textContent = "O's Turn"
  } else{
    turnLabel.textContent = "X's Turn"
  }
}

// var oneA = document.querySelector('#onea')
// oneA.addEventListener("click", function(){
//   if(oneA.textContent !== 'X' && oneA.textContent !== 'O'){
//     oneA.textContent = 'X'
//   } else if(oneA.textContent === 'X'){
//     oneA.textContent = 'O'
//   } else if(oneA.textContent === 'O'){
//     oneA.textContent = ''
//   }
// })
//
// var oneB = document.querySelector('#oneb')
// oneB.addEventListener("click", function(){
//   if(oneB.textContent !== 'X' && oneB.textContent !== 'O'){
//     oneB.textContent = 'X'
//   } else if(oneB.textContent === 'X'){
//     oneB.textContent = 'O'
//   } else if(oneB.textContent === 'O'){
//     oneB.textContent = ''
//   }
// })
//
// var oneC = document.querySelector('#onec')
// oneC.addEventListener("click", function(){
//   if(oneC.textContent !== 'X' && oneC.textContent !== 'O'){
//     oneC.textContent = 'X'
//   } else if(oneC.textContent === 'X'){
//     oneC.textContent = 'O'
//   } else if(oneC.textContent === 'O'){
//     oneC.textContent = ''
//   }
// })
//
// var twoA = document.querySelector('#twoa')
// twoA.addEventListener("click", function(){
//   if(twoA.textContent !== 'X' && twoA.textContent !== 'O'){
//     twoA.textContent = 'X'
//   } else if(twoA.textContent === 'X'){
//     twoA.textContent = 'O'
//   } else if(twoA.textContent === 'O'){
//     twoA.textContent = ''
//   }
// })
//
// var twoB = document.querySelector('#twob')
// twoB.addEventListener("click", function(){
//   if(twoB.textContent !== 'X' && twoB.textContent !== 'O'){
//     twoB.textContent = 'X'
//   } else if(twoB.textContent === 'X'){
//     twoB.textContent = 'O'
//   } else if(twoB.textContent === 'O'){
//     twoB.textContent = ''
//   }
// })
//
// var twoC = document.querySelector('#twoc')
// twoC.addEventListener("click", function(){
//   if(twoC.textContent !== 'X' && twoC.textContent !== 'O'){
//     twoC.textContent = 'X'
//   } else if(twoC.textContent === 'X'){
//     twoC.textContent = 'O'
//   } else if(twoC.textContent === 'O'){
//     twoC.textContent = ''
//   }
// })
//
// var threeA = document.querySelector('#threea')
// threeA.addEventListener("click", function(){
//   if(threeA.textContent !== 'X' && threeA.textContent !== 'O'){
//     threeA.textContent = 'X'
//   } else if(threeA.textContent === 'X'){
//     threeA.textContent = 'O'
//   } else if(threeA.textContent === 'O'){
//     threeA.textContent = ''
//   }
// })
//
// var threeB = document.querySelector('#threeb')
// threeB.addEventListener("click", function(){
//   if(threeB.textContent !== 'X' && threeB.textContent !== 'O'){
//     threeB.textContent = 'X'
//   } else if(threeB.textContent === 'X'){
//     threeB.textContent = 'O'
//   } else if(threeB.textContent === 'O'){
//     threeB.textContent = ''
//   }
// })
//
// var threeC = document.querySelector('#threec')
// threeC.addEventListener("click", function(){
//   if(threeC.textContent !== 'X' && threeC.textContent !== 'O'){
//     threeC.textContent = 'X'
//   } else if(threeC.textContent === 'X'){
//     threeC.textContent = 'O'
//   } else if(threeC.textContent === 'O'){
//     threeC.textContent = ''
//   }
// })
