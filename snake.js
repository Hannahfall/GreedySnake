import { getInputDirection} from "./input.js";

export  const SNAKE_SPEED = 5;
const snakeBody = [{x:11, y:11 }];
let newSegments = 0;

export function update(){
    addSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    //根据键盘操作修改头元素的位置
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount){
    newSegments += amount;
}

export function onSnake(position){
    return snakeBody.some(segment => {
        return segment.x === position.x && segment.y === position.y 
    })
} 

function addSegments(){
    for(let i=0; i<newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    //？？？？？否则蛇会无限增长
    newSegments = 0;
}