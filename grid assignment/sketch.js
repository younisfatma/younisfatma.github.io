// Fatma Younis 
// Computer Science 30
// Mr. Schellenberg
// 2021-01-18
// Interactive scene

// Extra for experts:
// Collisions wihtout using the collison library
// User can resize window and game will resize
// Time
// Text

// array for start screen
let start = {x: 0, y: 0, isAlive: true,};

// variables for the game
let x;
let y;
let foods;
let player = {radius: 15, speed: 5, color: "white"}
let byeFood = false;
let grow = false;
let win = true;

// used to switch colors
let color = ["white", "black", "blue", "pink", "yellow", "red", ];
let colorSlide = 0;

// used to tell the time since the game started
let seconds = 0;
let minutes= 0;
let lastSecond = 0;
let lastAddedFood = 0;
let timeLastAddeddFood = 0;
let millisSinceGameStarted;

//obstacle variables
let grid = createGrid(4,4); // make the grid the size an length of the obsitcle
let rows, cols, cellWidth, cellHeight;
let obstacle = {x: 100, y: 100}; //assign it a grid, basically assigned it the first grid


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  
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
    checkByeFood();
    obstacles();
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
    text("EAT AS MUCH FOOD AS YOU CAN TO WIN!", width/2, height*11/16);
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


//green obstacle
function obstacles(){
  createObstacle();
  moveObstacle();
  if (x <= obstacle.x + player.radius && x >= obstacle.x - player.radius && y <= obstacle.y + player.radius && y >= obstacle.y - player.radius){
    console.log("hit green rect")
  }
}

function createObstacle(){
  noStroke();
  fill("lime");
  rect(obstacle.x, obstacle.y, 20, [20])
}

// function moveObstacle(){
//   for (let y = 0; y < rows; y++){
//     for (let x = 0; x < cols; x++){
//       if (x = obstacle.x, y = obstacle.y){

//       }
//     }
//   }
// }

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

// creates the game ball
function createStartBall(){
  stroke("black");
  fill(player.color);
  circle(width/2, height*3/4 , player.radius * 2);
}

// starts the game and controls color of the ball
function mousePressed() {
  if (start.isAlive === true) {
    start.isAlive = false;
    win = false;
  }
  //controlling the ball color
  player.color = (color[0+colorSlide]);
  if (colorSlide < 5){
    colorSlide+=1;
  }
  else{
    colorSlide=0;
  }
}

// creates the player balll
function createBall() {
  stroke("black");
  fill(player.color);
  circle(x, y, player.radius * 2);
}

// moves the ball
function move() {
  if (keyIsDown(65)) { //a
    x -= player.speed;
  }

  if (keyIsDown(68)) { ///s
    x += player.speed;
  }

  if (keyIsDown(87)) { //w
    y -= player.speed;
  }
  if (keyIsDown(83)) { //d
    y += player.speed;
  }
}

// stops the ball from flying off the window
function stopBall() {
  if (x - player.radius < 0) {
    x = player.radius;
  }
  if (x + player.radius > width) {
    x = width - player.radius;
  }
  if (y - player.radius < 0) {
    y = player.radius;
  }
  if (y + player.radius > height) {
    y = height - player.radius;
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
    if (x <= food.x + player.radius && x >= food.x - player.radius && y <= food.y + player.radius && y >= food.y - player.radius) {
      ballWidth();
      if (x > food.x + player.radius && x < food.x - player.radius && y > food.y + player.radius && y < food.y - player.radius) { //determines if player has moved or not
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