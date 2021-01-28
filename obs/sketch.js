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

function setup() {
  createCanvas(400, 400);
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
  createObstacle();
  if (frameCount% 20 === 0){
    moveObstacle();
  }


}

function createObstacle(){
  noStroke();
  fill("lime");
  grid[prevobX][prevobY] = 0;
  grid[obY][obX] = 1;
}

function moveObstacle(){
  determineState();
  prevobX=obX;
  prevobY=obY;
  
  if (state=== "right") {
      obX += speed;
    }
   else if (state === "down"){
    obY -= speed;
  }
  //   else if (state === "left"){
  //   x-=speed;
  // }
  // else if (state ==="up"){
  //   y-=speed;
  // }
}

function determineState(){
  if (state === "right"  && obX >= COLS-1){
    state = "down";
  }
 // else if (state === "down"){
 //   state = "left";
 // }
 //  else if ( state === "left"){
 //    state = "up";
 //  }
 //   else if ( state === "left"){
 //    state = "right";
 //  }
}

function createGrid(cols, rows){
  let grid = [];
  for (let y = 0; y < rows; y++){
    grid.push([])
    for (let x = 0; x < cols; x++){
      grid[y].push(0);
    }
  }
  return grid;
}

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