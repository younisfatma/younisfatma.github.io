// Bouncung balls
// Array demo
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ball = [{
  x: 50,
  y: 200,
  diameter: 60,
  dx: 5,
  dy: -3,
}];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function moveBall(){
  if (ball.x + ball.diameter >= width || ball.x - ball.diameter/3 <=0){
    ball.dx *=-1;
  }
  if (ball.y + ball.diameter >= height || ball.y - ball.diameter/3 <=0){
    ball.dy *=-1;
  }
}

function displayBall(){
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
}
