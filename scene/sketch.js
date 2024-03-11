// Mazer
// Ben McPherson
// March 11th 2024

let x;
let y;
let d;
let dx;
let dy;
let hit;
let win = false;
let state = " ";

function setup() {
  x = 390;
  y = 385;
  dx = 1;
  dy = 1;
  d = 12;
  state = "start";
  createCanvas(400, 400);
  noStroke();
}

//depending on the state, either the start screen shows, or the maze shows
function draw() {
  if (state === "start"){
    startScreen();
  }
  else if (state === "play"){
    playMaze();
    winner();
  }
}

// creates maze and allows other code to run
function playMaze(){
  background("lightblue");
  boundaries();
  createPath();
  circel();
  moveCircle();
  collisionDetection();
}

//draws the circle
function circel(){
  fill("orange");
  circle(x, y, d);
}

// code to use WASD to move circle
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

// creates world boundaries on ednge of window
function boundaries(){
  if ((x - d/2 <= 0) || (x - d/2 >= 400) || (x + d/2 <= 0) || (x + d/2 >= 400) || (y - d/2 <= 0) || (y - d/2 >= 400) || (y + d/2 <= 0) || (y + d/2 >= 400)) {
    x = 390;
    y = 385;
  }
}

// draws track
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


// detects if the ball is not on tracks. resets ball if not on track
function collisionDetection(){
  hit = (collideRectCircle(200, 370, 200, 30, x, y, d/2) || collideRectCircle(200, 200, 30, 200, x, y, d/2) 
  || collideRectCircle(75, 200, 125, 30, x, y, d/2) || collideRectCircle(200, 370, 200, 30, x, y, d/2) 
  || collideRectCircle(200, 200, 30, 200, x, y, d/2) || collideRectCircle(75, 200, 125, 30, x, y, d/2)
  || collideRectCircle(75, 200, 30, 120, x, y, d/2) || collideRectCircle(75, 290, 90, 30, x, y, d/2) 
  || collideRectCircle(0, 150, 30, 220, x, y, d/2) || collideRectCircle(0, 150, 275, 30, x, y, d/2) 
  || collideRectCircle(75, 200, 125, 30, x, y, d/2) || collideRectCircle(135, 290, 30, 100, x, y, d/2)
  || collideRectCircle(0, 360, 140, 30, x, y, d/2) || collideRectCircle(245, 150, 30, 200, x, y, d/2) 
  || collideRectCircle(245, 320, 150, 30, x, y, d/2) || collideRectCircle(365, 100, 30, 220, x, y, d/2) 
  || collideRectCircle(25, 100, 340, 30, x, y, d/2) || collideRectCircle(25, 0, 30, 100, x, y, d/2) 
  || collideRectCircle(25, 0, 150, 30, x, y, d/2) || collideRectCircle(175, 0, 30, 70, x, y, d/2) 
  || collideRectCircle(175, 40, 130, 30, x, y, d/2) || collideRectCircle(305, 0, 30, 70, x, y, d/2) 
  || collideRectCircle(305, 0, 95, 30, x, y, d/2) || collideRectCircle(370, 0, 30, 30, x, y, d/2) 
  || collideRectCircle(370, 30, 30, 30, x, y, d/2));
  // resets ball
  if (hit === false){
    x = 390;
    y = 385;
  }
}


// displays green screen congratulating the player on beating the maze
function winner(){
  win = collideRectCircle(370, 30, 30, 30, x, y, d/2);
  if (win === true){
    background("Green");
    fill("black");
    textSize(45);
    textAlign(CENTER, CENTER);
    text("You Win!", width/2, height/2);
    textSize(20);
    text("Press mouse to play again!", width/2, height/2 + 50);
  }
}

// allows game to be reset
function mousePressed(){
  x = 390;
  y = 385;
  state = "play";
}


//displays the start screen and game controls
function startScreen(){
  background("blue");
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Press space to start!", width/2, height/2);
  textSize(20);
  text("Use WASD to move!", width/2, height/2 + 50);
}

// allows game to be started/reset
function keyTyped(){
  if (key === " "){
    state = "play";
  }
}