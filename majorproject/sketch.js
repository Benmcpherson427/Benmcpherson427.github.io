// CS30 Major project
// Ben McPherson
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

pokemon = [];
hp;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  createBalls();
}

function createBalls(){
  pokemon1 = circle(width/4, height * 3/4, 50);
  pokemon2 = circle(width * 3/4, height/4, 50);
}

function health(){
  let hp = random(95, 150)
  

}