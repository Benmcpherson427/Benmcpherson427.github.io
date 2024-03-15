// Generative art demo
// March 115th, 2024

let tileSize = 5;
let theTiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x += tileSize){
    for (let y = 0; y < height; y += tileSize){
      let someTile = spawnTile(x, y);
      theTiles.push(someTile);
      
    }
  }
}

function draw() {
  background(220);

  for (let someTile of theTiles) {
    stroke(random(255), random(255), random(255));
    line(someTile.x1, someTile.y1, someTile.x2, someTile.y2);
  }
}

function spawnTile(x, y) {
  let choice = random(100);
  let tile;

  if (choice > 50) {
    // neg slope
    tile = {
      x1: x-tileSize/2, 
      y1: y-tileSize/2,
      x2: x+tileSize/2,
      y2: y+tileSize/2,
    };
  } 
  else {
    // pos slope
    tile = {
      x1: x-tileSize/2, 
      y1: y+tileSize/2,
      x2: x+tileSize/2,
      y2: y-tileSize/2,
    };
  }
  
  return tile;
}