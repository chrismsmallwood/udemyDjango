// Interaction

var testHead = document.querySelector('#testHead')
var click = null

testHead.addEventListener("click",function(){
  if (click === null){
    testHead.textContent = "JS is working! X";
    testHead.style.color = 'red';
    click = "X"
  } else if (click === "X"){
    testHead.textContent = "JS is working! O";
    testHead.style.color = 'blue';
    click = "O"
  } else if (click === "O"){
    testHead.textContent = "JS is working!";
    testHead.style.color = 'black';
    click = null;
  }

})

var boxes = document.querySelectorAll('.box')
var boxClick = null

boxes.addEventListener("click",function(){
  if (boxClick === null){
    boxes.textContent = "X";
    boxes.style.color = 'red';
    boxClick = "X"
  } else if (boxClick === "X"){
    boxes.textContent = "O";
    boxes.style.color = 'blue';
    boxClick = "O"
  } else if (boxClick === "O"){
    boxes.textContent = " ";
    boxes.style.color = 'black';
    boxClick = null;
  }
})
