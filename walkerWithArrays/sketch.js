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
    this.stepSize = 10;
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

let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  for (let walkah of theWalkers) {
    walkah.move();
    walkah.display();
  }
}

function mousePressed() {
  let theColour = color(random(255), random(255), random(255));
  let wawker = new Walker(mouseX, mouseY, theColour);
  theWalkers.push(wawker);

}
