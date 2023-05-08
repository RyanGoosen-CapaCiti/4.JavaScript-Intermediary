// Board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;


//Snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//Food
var foodX = blockSize * 10;
var foodY = blockSize * 10;

var gameOver = false;
let apples = [];


window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    placeFood(5);
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}



function update(){
    if (gameOver) {
        return;
    }
    context.fillStyle="black";
    context.fillRect(0,0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY]);
        placeFood(5);
    }

    for (let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize; 
    snakeY += velocityY * blockSize; 
    context.fillRect(snakeX , snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }


    //Game Over
    if (snakeX < 0 || snakeX > cols*blockSize - 20 || snakeY < 0 || snakeY > rows*blockSize - 20) {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++){
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
        gameOver = true;
        alert("Game Over");
    }}

    for (let i = 0; i < apples.length; i++) {
      context.fillStyle = "red";
      context.fillRect(
        apples[i].x * blockSize,
        apples[i].y * blockSize,
        blockSize,
        blockSize
      );
    }
}

function changeDirection(e){
    if (e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight"&& velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood(num){
  for (let i = 0; i < num; i++) {
    let apple = {
      x: Math.floor(Math.random() * cols) * blockSize,
      y: Math.floor(Math.random() * rows) * blockSize,
    };
    apples.push(apple);
  }
}


// Kenny Yip Coding IS GOATED