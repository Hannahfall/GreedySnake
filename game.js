import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector('#game-board');

function main(currentTime) {
    if(gameOver){
        if(confirm('Ops,you lost.Press OK to restart game!')){
            window.location('/')
        }
    return;
    }
    //告诉浏览器在渲染（重绘）前执行一下这个回调函数。
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondSinceLastRender < 1 / SNAKE_SPEED) return;

    //console.log('Render');
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard); 
    drawFood(gameBoard); 
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead() || snakeIntersection())
}

function outsideGrid(position){
    return(
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21 
    )
}

