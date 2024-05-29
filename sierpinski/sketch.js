// Sierpinski Triangle

let initialTriangle = [
  {x: 800, y: 20},
  {x: 300, y: 700},
  {x: 1300, y: 700}
];

let theDepth = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(initialTriangle, theDepth);
}

function mousePressed() {
  if (theDepth < 7) {
    theDepth ++;
  }
}

function sierpinski(points, depth) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y,);

  if (depth > 0) {
    sierpinski([midpoint(points[0], points[1]), midpoint(points[1], points[2]), points[1]], depth - 1);
    sierpinski([midpoint(points[0], points[1]), midpoint(points[0], points[2]), points[0]], depth - 1);
    sierpinski([midpoint(points[0], points[2]), midpoint(points[1], points[2]), points[2]], depth - 1);
  }
}

function midpoint(point1, point2) {
  let newx = (point1.x + point2.x)/2;
  let newy = (point1.y + point2.y)/2;
  return {x: newx, y: newy};
}