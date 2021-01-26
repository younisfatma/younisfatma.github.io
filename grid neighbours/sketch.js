// Grid neighbours

let grid = createEmptyGrid(4,4);
let rows, cols, cellWidth, cellHeight;
let bgmusic;

function preload(){
  bgMusic = loadSound("assets/background.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusic.loop();

  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){

  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  toggleCells(x,y); //self
  toggleCells(x,y-1); //north
  toggleCells(x,y+1); //south
  toggleCells(x+1,y); //east
  toggleCells(x-1,y); //west
  console.log(x,y);
}

function toggleCells(x,y){
  //check that coordinates are in the array
  //an edge case
  if(x>= 0 && x<cols &&y >= 0 && y < rows){
    if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
  }
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

function createEmptyGrid(cols, rows){
  let emptyGrid = [];
  for (let y = 0; y < rows; y++){
    emptyGrid.push([])
    for (let x = 0; x < cols; x++){
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}
