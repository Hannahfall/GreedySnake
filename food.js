import { onSnake, expandSnake } from "./snake.js";


let food = getRandomFood();
const EXPANSION_RATE = 1;

export function update(){
   if(onSnake(food)){
       expandSnake(EXPANSION_RATE)
       food = getRandomFood()
   }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

function getRandomFood(){
    let foodPosition ;
    while(foodPosition == null || onSnake(foodPosition)){
        foodPosition = {
            x : Math.floor(Math.random() * 21) + 1,
            y : Math.floor(Math.random() * 21) + 1
        }
    };
    //console.log(foodPosition);
    
    //you know what? This is not feasible but why???It's really weird.
    /* let foodPosition = {} ;
    while(foodPosition == null || onSnake(foodPosition)) {
        foodPosition.x = Math.floor(Math.random() * 21) + 1;
        foodPosition.y = Math.floor(Math.random() * 21) + 1
    }; */

    return foodPosition;
}