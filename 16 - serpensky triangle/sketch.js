// sierpinski triangle recirsion demo

let triangleVertices;
let numberOfTriangles = 0;
let theColors= ["blue","yellow","pink","lime", "orange","black", "red", "white",];


function setup() {
  createCanvas(windowWidth, windowHeight);
  triangleVertices = [
    {x: width/2, y: 100},
    {x: 100, y: height-100},
    {x: width-100, y: height-100}
  ];
}

function draw() {
  background(220);
  sierpinski(triangleVertices, numberOfTriangles);
 
}
function mousePressed(){
  if (numberOfTriangles< theColors.length-1){
    numberOfTriangles ++;
  }
}

function sierpinski(points, depth){
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y,
          points[1].x, points[1].y,
          points[2].x, points[2].y);
  
  if (depth>0){
    sierpinski([points[1],
      getMidpoint(points[0], points[1]),
      getMidpoint(points[1], points[2])],
      depth - 1);

    sierpinski([points[0],
      getMidpoint(points[0], points[1]),
      getMidpoint(points[0], points[2])],
      depth - 1);

    sierpinski([points[2],
      getMidpoint(points[0], points[2]),
      getMidpoint(points[1], points[2])],
      depth - 1);
  }
}
function getMidpoint(point1, point2){
  let midx = (point1.x + point2.x)/2;
  let midy = (point1.y+ point2.y)/2;
  return {x: midx, y: midy};
}