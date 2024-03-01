// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let d;
let dx;
let dy;

function setup() {
  x = 390;
  y = 385;
  dx = 3;
  dy = 3;
  d = 15;
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circel();
  moveCircle();
  boundaries();
  createObstacles();

}

function circel(){
  fill("white");
 circle(x, y, d);
}

function moveCircle(){
  if (keyIsDown(87)){ //w
    y -= dy;
  }
  if (keyIsDown(83)){ //s
    y += dy;
  }
  if (keyIsDown(65)){ //a
    x -= dx;
  }
  if (keyIsDown(68)){ //d
    x += dx;
  }
}

function boundaries(){
  if (((x - d/2 <= 0) || (x - d/2 >= 400) || (x + d/2 <= 0) || (x + d/2 >= 400)) || ((y - d/2 <= 0) || (y - d/2 >= 400) || (y + d/2 <= 0) || (y + d/2 >= 400))) {
    x = 390;
    y = 385;
  }
}

function createObstacles(){
  fill("black");
  rect(0, 350, 200, 50);
  rect(300, 170, 100, 200);
  rect(100, 270, 200, 50);
  rect(30, 100, 50, 200);
}
