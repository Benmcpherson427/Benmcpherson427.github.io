// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let startButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startButton = new Clickable();
  startButton.locate(300, 300);

}

function draw() {
  background(220);
  startButton.draw();
  // 

}
