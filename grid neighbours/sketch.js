// Grid neighbours

let grid = createEmptyGrid(10,10);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  let rows = grid.length;
  let cols = grid[0].length;
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill("blue");
      }
      if (grid[y][x] = 1){
        fill("pink");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyGrid(cols, rows){
  let emptyGrid = [];
  for (let y = 0; y < rows; y++){
    EmptyGrid.push([])
    for (let x = 0; x < cols; x++){
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}
