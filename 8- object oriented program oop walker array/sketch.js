// tittle
// date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theWalkers = [];
let colorOptions = ["red", "lime", "blue", "yellow", "white", "pink" ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  for (let walker of theWalkers){
    walker.move();
    walker.display();
  }
}

function mousePressed(){
  let someWalker = new Walker(mouseX, mouseY, random(colorOptions));
  theWalkers.push(someWalker);
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