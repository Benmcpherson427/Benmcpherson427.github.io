// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let g;
let y;
let r;
let state = "";

function setup() {
  createCanvas(100, 300);
  state = "red";
  g = 3000;
  y = 1000;
  r = 3000;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  lightUp();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function lightUp() {
  if (state === "green") {
    if (millis() < g) {
      fill("green");
      ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
    } else {
      state = "yellow";
      y = millis() + 1500;
    }
  }
  if (state === "yellow") {
    if (millis() < y) {
      fill("yellow");
      ellipse(width / 2, height / 2, 50, 50); //middle
    } else {
      state = "red";
      r = millis() + 3000;
    }
  }
  if (state === "red") {
    if (millis() < r) {
      fill("red");
      ellipse(width / 2, height / 2 - 65, 50, 50); //top
    } else {
      state = "green";
      g = millis() + 3000;
    }
  }
}
