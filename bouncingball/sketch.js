let x;
let y;
let dx;
let dy;
let r = 15;
let R = 0;
let G = 0;
let B = 0;
let state = "start screen";
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(-5, 5);
  dy = random(-5, 5);
  noStroke();
}

function draw() {
  background(220);
  if (state === "start screen"){
    background("black");
    showInstructions();
  }
  else if (state === "bounce"){
    changeCircleColour();
    createCircle();
    moveCircle();
    bounceCircle();
  }
}
  
function showInstructions(){
  fill("white");
  textSize(45);
  textAlign(CENTER, CENTER);
  text("Press mouse to start", width/2, height/2);
}
  
  
function mousePressed(){
  if (state === "start screen"){
    state = "bounce";
  }
}
  
  
function keyTyped(){
  if (key === " "){
    dx = random(-7, 7);
    dy = random(-7, 7);
  }
  if (key === "c"){
    changeCircleColour();
  }
}  

function changeCircleColour(){
  if ((x >= width - r || x <= 0 + r) || (y >= height - r || y <= 0 + r)){
    R = random(255);
    G = random(255);
    B = random(255);
  }
}

function createCircle(){
  fill(R, G, B);
  circle(x, y, r * 2);
}
  
function moveCircle(){
  x += dx;
  y += dy;
}

function bounceCircle(){
// if ((x >= width - r || x <= 0 + r) || (y >= height - r || y <= 0 + r)){
    if (x >= width - r || x <= 0 + r){
      dx = -1 * dx;
    }
    if (y >= height - r || y <= 0 + r){
      dy = -1 * dy;
    } 
}