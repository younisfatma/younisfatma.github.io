//projectile demo

let bullets = [];
let playerX; 
let playerY;

function setup() {
 createCanvas(windowWidth, windowHeight);
 playerX = width/2;
 playerY = height/2;
}

function draw() {
  background(220);
  displayPlayer();
  // handlebulets();
}

function displayPlayer(){
  fill("black");
  ellipse(playerX, playerY, 75, 75);
}