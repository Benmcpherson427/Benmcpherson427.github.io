// Arrays and Objects Notation
// Circles demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2, height/2);

}

function draw() {
  background(220);
  moveBalls();
  displayBalls();
}

function mousePressed(){
  spawnBall(mouseX, mouseY);
}

function moveBalls(){
  for (let ball of ballArray){
    ball.x += ball.dx;
    ball.y += ball.dy;
  
    if(ball.x > windowWidth){
      ball.x = 0;
    }
    else if(ball.x < 0){
      ball.x = windowWidth;
    }
    else if(ball.y > windowHeight){
      ball.y = 0;
    }
    else if(ball.y < 0){
      ball.y = windowHeight;
    }
  }
}

function displayBalls(){
  for (let ball of ballArray){
    fill(ball.colour);
    circle(ball.x, ball.y, ball.r*2);
  }
}

function spawnBall(initialX, initialY){
  let ball = {
    x: initialX,
    y: initialY,
    r: random(15, 30),
    colour: color(random(255), random(255,), random(255)),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  ballArray.push(ball);
}