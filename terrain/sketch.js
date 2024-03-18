// Project Title
// Your Name
// Date

let terrain = [];
let numOfRects;
let rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numOfRects = 10000;
  rectWidth = width / numOfRects;
  generateTerrain();
  noStroke();
}

function draw() {
  background("lightblue");

  for (let someRect of terrain) {
    fill("green");
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain() {
  let time = 0;
  let deltaTime = 0.0003;

  for(let x = 0; x < width; x += rectWidth) {
    let theHeight = noise(time) * height;
    spawnRect(x, theHeight);
    time += deltaTime;
  }
}

function spawnRect(leftside, rectHeight) {
  let thisRect = {
    x: leftside,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight
  };
  terrain.push(thisRect);
}