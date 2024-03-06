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
  rect(135, 290, 30, 100);
  rect(0, 360, 140, 30);
  rect(0, 150, 30, 220);
  rect(0, 150, 275, 30);
  rect(245, 150, 30, 200);
  rect(245, 320, 150, 30);
  rect(365, 100, 30, 220);
  rect(25, 100, 340, 30);
  rect(25, 0, 30, 100);
  rect(25, 0, 150, 30);
  rect(175, 0, 30, 70);
  rect(175, 40, 130, 30);
  rect(305, 0, 30, 70);
  rect(305, 0, 95, 30);
  rect(370, 0, 30, 30);
  fill("green");
  rect(370, 30, 30, 30);
} 

function collisionDetection(){
  hit = (collideRectCircle(200, 370, 200- d, 30- d, x, y, d/2) || collideRectCircle(200, 200, 30- d, 200- d, x, y, d/2) 
  || collideRectCircle(75, 200, 125- d, 30- d, x, y, d/2) || collideRectCircle(75, 200, 30- d, 120- d, x, y, d/2) 
  || collideRectCircle(75, 290, 90- d, 30- d, x, y, d/2) || collideRectCircle(0, 150, 30- d, 220- d, x, y, d/2)
  || collideRectCircle(0, 150, 275- d, 30- d, x, y, d/2) || collideRectCircle(75, 200, 125- d, 30- d, x, y, d/2)
  || collideRectCircle(135, 290, 30- d, 100- d, x, y, d/2) || collideRectCircle(0, 360, 140- d, 30- d, x, y, d/2)
  || collideRectCircle(245, 150, 30- d, 200- d, x, y, d/2) || collideRectCircle(245, 320, 150- d, 30- d, x, y, d/2)
  || collideRectCircle(365, 100, 30- d, 220- d, x, y, d/2) || collideRectCircle(25, 100, 340- d, 30- d, x, y, d/2)
  || collideRectCircle(25, 0, 30- d, 100- d, x, y, d/2) || collideRectCircle(25, 0, 150- d, 30- d, x, y, d/2)
  || collideRectCircle(175, 0, 30- d, 70- d, x, y, d/2) || collideRectCircle(175, 40, 130- d, 30- d, x, y, d/2)
  || collideRectCircle(305, 0, 30- d, 70- d, x, y, d/2) || collideRectCircle(305, 0, 95- d, 30- d, x, y, d/2)
  || collideRectCircle(370, 0, 30- d, 30- d, x, y, d/2) || collideRectCircle(370, 30, 30- d, 30- d, x, y, d/2));
  if (hit === false){
    x = 390;
    y = 385;
  }
}
