//obstacle variables
const ROWS = 20;
const COLS = 20;
let grid = createGrid(ROWS,COLS); // make the grid the size an length of the obsitcle
let rows, cols, cellWidth, cellHeight;
let obstacle = {x: 100, y: 100}; //assign it a grid, basically assigned it the first grid
let obX = 0;
let obY = 0;

//previous location of obstacle
let prevobX = 0;
let prevobY = 0;
let state = "right";
let speed = 1;

//setting up the images
let snakeImg, wallImg, grassImg;

function preload(){
  snakeImg = loadImage("assets/yellow-ghost.png");
  wallImg = loadImage ("assets/wall.png");
  grassImg = loadImage ("assets/grass.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //obstacle grid 
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}



function draw() {
  background(220);
  displayGrid();
  obstacles();

}



//green obstacle
function obstacles(){
  if (frameCount% 20 === 0){
    createObstacle();
    moveObstacle();
  }
}

//creates the obstacle
function createObstacle(){
  noStroke();
  fill("lime");
  grid[prevobY][prevobX] = 0;
  grid[obY][obX] = 1;
}

//moves the obstacle
function moveObstacle(){
  prevobX = obX;
  prevobY = obY;

  if (obY !== rows && obX !== cols){
    if (state=== "right" ) {
      obX += 1;
    }
    else if (state === "down"){
      obY += 1;
    }
    else if (state === "left"){
      obX -= 1;
    }
    else if (state ==="up"){
      obY -= 1;
    }
  }

  determineState();

}

//determines what direction to travel
function determineState(){
  if (state === "right" && obY === 0 && obX === cols-1){ 
    state = "down";
  }
  else if (state === "down" && obY === rows-1 && obX === cols-1){
    state = "left";
  }
  else if (state === "left" && obY === rows-1 && obX === 0){
    state = "up";
  }
  else if (state === "up" && obY === 0 && obX === 0){
    state = "right";
  }
}

//create's grid for the obstacle
function createGrid(cols, rows){
  let grid = [];
  for (let y = 0; y < rows; y++){
    grid.push([]);
    for (let x = 0; x < cols; x++){
      grid[y].push(0);
    }
  }
  return grid;
}

//display's grid for the obstacle
function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill("cyan");
      }
      if (grid[y][x] === 1){
        fill("pink");
      }
      noStroke();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}