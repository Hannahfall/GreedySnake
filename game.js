import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0;
const gameBoard = document.querySelector('#game-board');

function main(currentTime) {
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
    gameBoard.innerHTML = '';
    updateSnake();
    updateFood();
}
function draw(){
    drawSnake(gameBoard); 
    drawFood(gameBoard); 
}