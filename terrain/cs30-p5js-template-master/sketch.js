// Perlin Noise

let rectHeights;
let bikeLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeights = generateHeight();
  console.log(rectHeights);
}

function draw() {
  background(220);

  let howMany = width;
  for (let i = bikeLocation; i < bikeLocation + howMany; i++){
    let rectWidth = width/howMany;
    rect(rectWidth*(i-bikeLocation), height-rectHeights[i], rectWidth, rectHeights[i]);
  }
  if (keyIsPressed){
    if (key === "d"){
      bikeLocation +=5;
    }  
    if (key === "a" && bikeLocation > 0){
      bikeLocation -=5;
    }
  }
}

function generateHeight(){
  let theHeight = [];
  for (let i = 0; i < 5000; i++){
    let rectHeight= noise(i * 0.01) * height;
    theHeight.push(rectHeight);
  }
  return theHeight;
}