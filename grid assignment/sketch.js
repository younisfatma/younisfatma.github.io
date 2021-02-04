// Fatma Younis 
// Computer Science 30
// Mr. Schellenberg
// Grid assignment

// Extra for experts:
// more colors

// array for start screen
let start = {x: 0, y: 0, isAlive: true,};

// variables for the game
let x;
let y;
let foods;
let player = {x:0 , y:0, radius: 15, speed: 5, color: "white"};
let byeFood = false;
let grow = false;
let win = true;

// used to switch colors
let colorOptions = ["linen", "lightgrey", "aqua", "pink", "yellow", "DarkOrchid", ];
let colorSlide = 0;

// used to tell the time since the game started
let seconds = 0;
let minutes= 0;
let lastSecond = 0;
let lastAddedFood = 0;
let timeLastAddeddFood = 0;
let millisSinceGameStarted;

//obstacle variables
const ROWS = 15;
const COLS = 15;
let grid = createGrid(ROWS,COLS); // make the grid the size an length of the obsitcle
let rows, cols, cellWidth, cellHeight;
let obstacle = {x: 100, y: 100}; //assign it a grid, basically assigned it the first grid
let obX = 0;
let obY = 0;

//previous location of obstacle
let prevobX = 0;
let prevobY = 0;
let state = "right";

//rectangle collision
let rectx;
let recty;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player.x = width / 2;
  player.y = height / 2;

  // creates the first food
  foods = [{x: random(0, width), y: random(0, width), radius: 10,},];

  //obstacle grid 
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

// when the window is resized the canvas is also resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // start screen
  displayStart();
  
  // if mouse is pressed win becomes false and the game is started
  if (win === false) {
    gridBackGround();
    obstacles();
    checkByeFood();
    createBall();
    move();
    stopBall();
    time();
    won();
  }
}

// Start screen
function displayStart() { 
  if (start.isAlive) {
    fill("white");
    rect(0, 0, width, height);

    fill("black");
    textSize(26);
    textAlign(CENTER);
    textStyle(BOLD);
    text("CLICK TO START", width / 2, height / 2);
    
    textSize(18);
    fill(50);
    textStyle(NORMAL);
    text("EAT AS MUCH FOOD AS YOU CAN TO WIN! IF YOU COLLIDE WITH GREEN OBSTICAL YOU LOSE!", width/2, height*11/16);
    text("Right Click to Change your Color", width/2, height*3/4);
    text("Use WASD to Control", width/2, height*13/16);
    
    //time value
    millisSinceGameStarted = millis();
  }
}
 
// Creates the background
function gridBackGround(){
  background(255);
  for (let x = 0; x < width; x += 25) {
    for (let y = 0; y < height; y += 25) {
      noStroke();
      fill(200);
      circle(x, y, 10);
    }
  }
}

// Creates and displays the time
function time(){
  if (millis() - millisSinceGameStarted - lastSecond >= 1){
    seconds +=1;
    lastSecond += 1000;
    if (seconds >= 60){
      seconds = 0;
      minutes +=1;
    }
  }
  fill("black");
  text("Time  "+ minutes + ":"+ seconds, 80, 30); 
}

// Checks if the food is eaten
function checkByeFood() {
  if (byeFood === false) {
    createFood();
  }
  byeFood = eatFood(byeFood);
}

// starts the game and controls color of the ball
function mousePressed() {
  if (start.isAlive === true) {
    start.isAlive = false;
    win = false;
  }
  //controlling the ball color
  player.color = colorOptions[0+colorSlide];
  if (colorSlide < 5){
    colorSlide+=1;
  }
  else{
    colorSlide=0;
  }
}

// creates the player balll
function createBall() {
  noStroke();
  fill(player.color);
  circle(player.x, player.y, player.radius * 2);
}

// moves the ball
function move() {
  if (keyIsDown(65)) { //a
    player.x -= player.speed;
  }

  if (keyIsDown(68)) { ///s
    player.x += player.speed;
  }

  if (keyIsDown(87)) { //w
    player.y -= player.speed;
  }
  if (keyIsDown(83)) { //d
    player.y += player.speed;
  }
}

// stops the ball from flying off the window
function stopBall() {
  if (player.x - player.radius < 0) {
    player.x = player.radius;
  }
  if (player.x + player.radius > width) {
    player.x = width - player.radius;
  }
  if (player.y - player.radius < 0) {
    player.y = player.radius;
  }
  if (player.y + player.radius > height) {
    player.y = height - player.radius;
  }
}

// makes the ball grow bigger
function ballWidth() {
  player.radius += 3;
  if (player.speed > 1 && player.speed > 1) {
    player.speed -= 0.05;
  }
}

// creates the food for the player to eat
function createFood() { 
  for (let food of foods){
    noStroke();
    fill("yellow");
    circle(food.x, food.y, food.radius * 2);
  }
  if (millis()-lastAddedFood > 4000+timeLastAddeddFood ){
    foods.push({x: random(0, width), y: random(0, width), radius: 10,});
    lastAddedFood = millis();
    timeLastAddeddFood +=2000;
    
  }
}

// determines when the player has touched the food, calls the food to grow, and chooses a new location for the food
function eatFood(byeFood) {
  for (let food of foods){
    if (player.x <= food.x + player.radius && player.x >= food.x - player.radius && player.y <= food.y + player.radius && player.y >= food.y - player.radius) {
      ballWidth();
      if (player.x > food.x + player.radius && player.x < food.x - player.radius && player.y > food.y + player.radius && player.y < food.y - player.radius) { //determines if player has moved or not
        food.x = random(0, width);
        food.y = random(0, height);
        return true;
      }
      food.x = random(0, width);
      food.y = random(0, height);
    }
  }
  return false;
}

//green obstacle
function obstacles(){
  createObstacle();
  if (frameCount% 20 === 0){
    moveObstacle();
  }
}

//creates the obstacle
function createObstacle(){
  grid[prevobY][prevobX] = 0;
  grid[obY][obX] = 1;
  displayGrid();
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
      // if (grid[y][x] === 0){
      //   fill(color(255, 255, 255, 0));
      // }
      rectx = x*cellWidth;
      recty = y*cellHeight;
      if (grid[y][x] === 1){
        fill("lime");
        noStroke();
        rect(rectx, recty, cellWidth, cellHeight);

        //collision
        hit = collideRectCircle(rectx, recty, cellWidth, cellHeight, player.x, player.y, player.radius);
        if (hit) {
          // reduceRadiusOfBall();
          //ends the game
          win = true;
        }
      }
      
    }
  }
}

function reduceRadiusOfBall(){
  if (frameCount% 10 === 0){
    if (player.radius > cellWidth || player.radius > cellHeight){
      player.radius -=5;
      console.log(rectx, recty, cellWidth, cellHeight, player.x, player.y, player.radius,"ouch");
    }
    
  }
}

// if the player has grown more than width/6 the player wins the game
function won() {
  if (player.radius > width / 6) {
    win = true;
    background(255);
    fill("black");
    textSize(26);
    textAlign(CENTER);
    textStyle(BOLD);
    text("YOU WON", width / 2, height / 2);
  }
}