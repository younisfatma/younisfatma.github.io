// Bouncing ball with collision detection

let ballArray= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < ballArray.length; i++) {
    // collision check
    for (let j = 0; j < ballArray.length; j++){
      //dont check self for collison
      if (i !== j){
        ballArray[i].chekIfCollidingWith(ballArray[j]);
      }
    }
    ballArray[i].move();
    ballArray[i].display();
  }
}

function mousePressed(){
  let balls = new Ball(mouseX, mouseY, random(10, 40));
  ballArray.push(balls);
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = random(-5,5);
    this.dy = random(-5, 5);
    this.someColor = color(random(255), random(255), random(255), random(255));
  }
  display() {
    noStroke();
    fill(this.someColor);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
  move(){
    this.x += this.dx;
    this.y += this.dy;

    //bounce on wall
    if (this.x <= 0+this.radius || this.x >= width-this.radius){
      this.dx*=-1;
    }
    if (this.y <= 0+this.radius || this.y >= height-this.radius){
      this.dy*=-1;
    }
  }

  chekIfCollidingWith(otherBall){
    let sumOfRadi = this.radius + otherBall.radius;
    let distanceBetweenCenters = dist(this.x, this.y, otherBall.x, otherBall.y)
    if (sumOfRadi >= distanceBetweenCenters){
      // this.someColor= "red";
      // otherBall.someColor ="red";
      // cool
      this.dx-=1;
      this.dy-=1;
      otherBall.dx-=1;
      otherBall.dy-=1;


      let tempDx = this.dx;
      let tempDy = this.dy;
      this.dx= otherBall.dx;
      this.dy= otherBall.dy;
      otherBall.dx = tempDx;
      otherBall.dy= tempDy;
    }
  }
}