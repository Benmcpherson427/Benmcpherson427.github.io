// CS30 Final
// Ben McPherson
// June 18, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d = 40;
    this.r = structuredClone(this.d)/2;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.red = (random(255));
    this.blue = (random(255))
    this.green = (random(255))
  }
  // Function in class which displays the balls
  display() {
    stroke(this.red, this.blue, this.green);
    fill(this.red, this.blue, this.green);
    circle(this.x, this.y, this.d);
  }
  move() {

    // Detects if ball hits sides
    if (((this.x - this.r) <= 0) || (this.x + this.r >= windowWidth)) {
      this.dx = this.dx * (-1);
    }
    // Detects if ball hits top/bottom
    if (((this.y - this.r) <= 0) || (this.y + this.r >= windowHeight)) {
      this.dy = this.dy * (-1);
    }
    // Moves the balls
    this.x += this.dx;
    this.y += this.dy;
  }
}

let theBalls = [];
let diameter = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Pushes the balls into an array
  for (let i = 0; i < 5; i++) {
    theBalls.push(new ball(random(diameter/2, width - diameter/2), random(diameter/2, height - diameter/2)));
  }
}

// Displays and moves the balls in the array
function draw() {
  background(0);
  for (let ball of theBalls) {
    ball.display();
    ball.move();
  }
}

// Deletes balls when they are clicked
function mousePressed() {
  if (mouseX === ball.x + ball.r && mouseX === ball.x - ball.r && mouseY === ball.y + ball.r && mouseY === ball.y - ball.r) {
    for (let Index of theBalls) {
      theBalls.splice(Index, 1);
    }
    return theBalls;
  }
}

// Adds a ball to the screen when space bar is pressed
function keyPressed() {
  if (key === " ") {
    theBalls.push(new ball(random(diameter/2, width + diameter/2), random(diameter/2, height - diameter/2)));
  }
}
