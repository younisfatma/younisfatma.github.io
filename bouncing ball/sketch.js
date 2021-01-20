// Bouncung balls
// Array demo

let theBouncingBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  moveBall();
  displayBall();
}

function mousePressed(){
  let ball = {
    x: mouseX,
    y: mouseY,
    diameter: random(25, 100),
    dx: random(5,.5),
    dy: random(5,.5),
    theColor: color(random(255), random(255), random(255), random(255)),
 };
 theBouncingBalls.push(ball);
}

function moveBall(){
  for (let ball of theBouncingBalls){
    ball.x+=ball.dx;
    ball.y+= ball.dy;

    if (ball.x + ball.diameter >= width || ball.x - ball.diameter/3 <=0){
    ball.dx *=-1;
    }
    if (ball.y + ball.diameter >= height || ball.y - ball.diameter/3 <=0){
      ball.dy *=-1;
    }
  }
}

function displayBall(){
  for (let ball of theBouncingBalls){
    noStroke();
    fill(ball.theColor);
    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
  }
}
