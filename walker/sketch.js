// Walker OOP
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y, theColour) {
    this.x = x;
    this.y = y;
    this.stepSize = 5;
    this.colour = theColour;
    this.radius = 5;
  }

  display() {
    fill(this.colour);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.stepSize;
    }
    else if (choice < 50) {
      this.y += this.stepSize;
    }
    else if (choice < 75) {
      this.x += this.stepSize;
    }
    else if (choice < 100) {
      this.x -= this.stepSize;
    }
  }
}

let maram;
let griffin;
let seth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maram = new Walker(width/2, height/2, "red");
  griffin = new Walker(200, 400, "blue");
  seth = new Walker(800, 100, "yellow");
  noStroke();
}

function draw() {
  maram.move();
  griffin.move();
  seth.move();
  
  seth.display();
  griffin.display();
  maram.display();
}
