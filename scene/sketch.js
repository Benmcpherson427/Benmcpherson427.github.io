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
let hit;

function setup() {
  x = 390;
  y = 385;
  dx = 3;
  dy = 3;
  d = 15;
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);
  boundaries();
  createPath();
  circel();
  moveCircle();
  collisionDetection();

}

function circel(){
  fill("cyan");
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

function createPath(){
  fill("black");
  rect(200, 370, 200, 30);
  rect(200, 200, 30, 200);
  rect(75, 200, 125, 30);
  rect(75, 200, 30, 120);
  rect(75, 290, 90, 30);
  rect(0, 150, 30, 220);
  rect(0, 150, 275, 30);
  rect(245, 150, 30, 200);
  rect()
}

function collisionDetection(){
  hit = (collideRectCircle(200, 370, 200, 30, x, y, d/2) || collideRectCircle(200, 200, 30, 200) || collideRectCircle(75, 200, 125, 30));
  if (hit === false){
    x = 390;
    y = 385;
  }
}
