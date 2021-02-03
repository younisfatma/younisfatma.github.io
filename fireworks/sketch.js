// fireworks oop demo
// date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
 

let fireworks = [];
let r;
let g; 
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  for (let i = fireworks.length-1; i >= 0; i--){
    if (fireworks[i].isAlive()){
      fireworks[i].move();
      fireworks[i].display();
    }
    else{
      fireworks.splice(i, 1);
    } 
  }
}

function mousePressed(){
  r = random(255);
  g = random(255);
  b = random(255);

  let numberOfParticles = 100;
  let theta = 0;
  for (let i = 0; i <numberOfParticles; i ++){
    let xspeed = cos(theta)*2 + random(-0.5,+0.5);
    let yspeed = sin(theta)*2 + random (-0.5+0.5);
    let someParticle = new Particle (mouseX, mouseY, xspeed, yspeed, r, g, b, 255);
    fireworks.push(someParticle);
    theta+=360/numberOfParticles;
  }
}

class Particle {
  constructor(x, y, dx, dy, r, g, b, a){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.diameter = 10;
    this.gravity = 0.05;
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
    this.dy += this.gravity;
    this.a -=5; //slowly fade
  }

  display(){
    noStroke();
    fill(color(this.r, this.g, this.b, this.a));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  isAlive() {
    return this.a > 0;
  }
}