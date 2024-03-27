// Neon art - Arrays and Object Notation
// Ben McPherson
// April 8th, 2024

// Decription of whole code - The following is code to make generative art where either a slope, circle, 
// triangle or square which has the stroke changing constantly
// I used object notation to store the coordanates of each shape and arrays to make each tile where the shapes are drawn
// each shape is assigned a string variable which is used to determine what shape is drawn

// Extras for experts: 


let tileSize = 15;
let theTiles = [];
let slider;


// The setup starts with drawing the canvas to fit the window
// Two for loops are used, one for the x-axis and one for the y-axis 
// These loops draw a certain amount of tiles to fit the window, all dependant on the tile size, set with variable tileSize
// The function spawnTile(x, y) is then saved as the variable someTile, which is pushed into the empty array theTiles[]
// theTiles[] is taken to the draw loop to create the shapes in the tiles
// The slider is made and set up to live in the top right corner. It has a minimum of 10 and a maximum of 50

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(10, 50, 15, 5);
  slider.position(10, 10);
  slider.size(200);
  for (let x = 0; x < width; x += tileSize){
    for (let y = 0; y < height; y += tileSize){
      let someTile = spawnTile(x, y);
      theTiles.push(someTile);
      
    }
  }
}


// Here in the draw loop, the functions made for the code are run continuousy
// The funcitons set the background, make the tiles, make the shapes, and updates everyhting when the tile size is changed

function draw() {
  background(0);
  createShapes();
  changeTileSize();
  
}

function changeTileSize() {

  // Just to help debug
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(255);
  text(tileSize, width/2, height/2);


  if (tileSize !== slider.value()) {
    tileSize = slider.value();
    theTiles = [];
    for (let x = 0; x < width; x += tileSize){
      for (let y = 0; y < height; y += tileSize){
        let someTile = spawnTile(x, y);
        theTiles.push(someTile);
      }
    }
  }
}



function createShapes() {
  for (let someTile of theTiles) {
    
    stroke(random(255), random(255), random(255));
    // stroke(255);
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

// The function spawnTile(x, y) is used to spawn a tile with an undetermined shape in it
// It randomly chooses a number between 0 to 100 and sets it as the choice
// Depending on the number, a certain shape will be saved in the code
// The saved variables are then taken to the setup

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
      xc: x,
      yc: y,
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
      xt2: x+tileSize/2,
      yt2: y+tileSize/2,
      xt3: x-tileSize/2,
      yt3: y+tileSize/2,
    };
  }
  
  return tile;
}
