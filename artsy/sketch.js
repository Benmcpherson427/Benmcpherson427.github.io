// Project Title
// Your Name
// Date
let tileSize = 10;
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
    stroke(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    if (someTile.shape === "negative" || someTile.shape === "positive") {
      line(someTile.xl1, someTile.yl1, someTile.xl2, someTile.yl2);
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
      xc: tileSize/2,
      yc: tileSize/2,
      dc: tileSize,
    };
  }
  else if (choice >= 60 && choice < 80){
    // square
    tile = {
      shape: "square",
      xs: x-tileSize/2, 
      ys: y-tileSize/2,
      ws: tileSize/2,
      hs: tileSize/2,
    };
  }
  else if (choice >= 80 && choice <101){
    // Triangle
    tile = {
      shape: "triangle",
      xt1: tileSize/2,
      yt1: 0,
      xt2: 0,
      yt2: tileSize,
      xt3: tileSize,
      yt3: tileSize,
    };
  }
  
  return tile;
}