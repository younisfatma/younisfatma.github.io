// tittle
// date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let amy;
let noah;

function setup() {
  createCanvas(windowWidth, windowHeight);
  amy = new Walker(200, 200, "green");
  noah = new Walker(width/2, height/2, "pink");
  background(0);
}

function draw() {
  amy.move();
  noah.move();

  amy.display();
  noah.display();
}

class Walker{
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
  }

  display(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 3, 3);
  }

  move(){
    let choice = random(100);
    if (choice<25){
      this.x += this.speed;
    }
    else if (choice<50){
      this.x -= this.speed;
    }
    else if (choice<75){
      this.y += this.speed;
    }
    else if (choice<100){
      this.y -= this.speed;
    }
  }
}