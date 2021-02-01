
const ROWS = 20;
const COLS = 20;
let grid = createGrid(ROWS,COLS);
let rows, cols, cellWidth, cellHeight;
let obstacle = {x: 100, y: 100}; 
let obX = 0;
let obY = 0;

//previous location of snake
let prevobX = 0;
let prevobY = 0;
let state = "right";
let speed = 1;

let playerImg, wallImg, grassImg. bgImg;

function preload(){
  // playerImg = loadImage("assets/yellow-ghost.png");
  bgImg = loadImage ("assets/bg.jpg");
  playerImg = loadImage ("assets/snake2.png");
  wallImg = loadImage ("assets/wall.png");
  grassImg = loadImage ("assets/grass.png");
}

function setup() {
  createCanvas(400, 400);
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(bgImg)
  displayGrid();
  obstacles();
  direction();
}

function direction() {
  if (keyIsDown(65)) { //a
    state= "left";
  }

  if (keyIsDown(68)) { ///d
    state = "right";
  }

  if (keyIsDown(87)) { //w
    state= "up";
  }
  if (keyIsDown(83)) { //s
    state = "down";
  }
}

function obstacles(){
  if (frameCount% 20 === 0){
    createObstacle();
    moveObstacle();
  }
}

function createObstacle(){
  noStroke();
  grid[prevobY][prevobX] = 0;
  grid[obY][obX] = 1;
}


function moveObstacle(){
  prevobX = obX;
  prevobY = obY;

  if (obY <= rows-1 && obX <= cols-1 && obY >= 0 && obX >= 0 ){
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

//determines the direction it should travel
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
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1){
        image(playerImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}