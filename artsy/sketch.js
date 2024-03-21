// Project Title
// Your Name
// Date
let tileSize = 100;
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
  background(0);

  for (let someTile of theTiles) {
    // stroke(random(255), random(255), random(255));
    stroke(255);
    fill(0);
    if (someTile.shape === "negative" || someTile.shape === "positive") {
      line(someTile.x1, someTile.y1, someTile.x2, someTile.y2);
    }
    else if (someTile.shape === "circle") {
      circle(someTile.xc, someTile.yc, someTile.dc);
    }
    else if (someTile.shape === "square") {
      rect(someTile.xs, someTile.ys, someTile.ws, someTile.hs);
    }
    else if (someTile.shape === "triangle") {
      triangle(someTile.xt1, someTile.yt1, someTile.xt2, someTile.yt2, someTile.xt3, someTile.yt3);
    }
  }
}

function spawnTile(x, y) {
  let choice = random(100);
  let tile;

  if (choice < 20) {
    // neg slope
    tile = {
      shape: "negative",
      x1: x-tileSize/2, 
      y1: y-tileSize/2,
      x2: x+tileSize/2,
      y2: y+tileSize/2,

    };
  } 
  else if (choice >= 20 && choice < 40){
    // pos slope
    tile = {
      shape: "positive",
      x1: x-tileSize/2, 
      y1: y+tileSize/2,
      x2: x+tileSize/2,
      y2: y-tileSize/2,

    };
  }
  else if (choice >= 40 && choice < 60){
    // circle
    tile = {
      shape: "circle",
      xc: x-tileSize,
      yc: y-tileSize,
      dc: tileSize,
    };
  }
  else if (choice >= 60 && choice < 80){
    // square
    tile = {
      shape: "square",
      xs: x-tileSize/2, 
      ys: y-tileSize/2,
      ws: tileSize,
      hs: tileSize,
    };
  }
  else if (choice >= 80 && choice <101){
    // Triangle
    tile = {
      shape: "triangle",
      xt1: x-tileSize/x,
      yt1: y-tileSize/2,
      xt2: x+tileSize,
      yt2: y+tileSize,
      xt3: x-tileSize,
      yt3: y+tileSize,
    };
  }
  
  return tile;
}