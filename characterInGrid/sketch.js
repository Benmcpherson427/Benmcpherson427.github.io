// 2D Grid - Character
// Ben McPherson
// Apr 15, 2024

// if you are hard-coding a level, I'd use something like this

// let grid = [[1, 0, 0, 1],
//             [0, 1, 0, 1],
//             [1, 1, 0, 0],
//             [1, 0, 1, 1],
//             [0, 0, 0, 1],
//             [0, 0, 1, 1],
//             [0, 1, 0, 1],
//             [0, 0, 0, 1]];

let grid;
let cellSize;
const GRID_SIZE = 10;
const PLAYER = 9;
const OPENTILE = 0;
const IMPASSIBLE = 1;
let player = {
  x: 0,
  y: 0,
}; 
let grassIMG;
let pavingIMG;
let backgroundMusic;
let cantWalkSound;
let state = "start screen";

function preload() {
  grassIMG = loadImage("grass2.png");
  pavingIMG = loadImage("paving 1.png");
  backgroundMusic = loadSound("SpinningMonkeys.mp3");
  cantWalkSound = loadSound("WilhelmScream.wav");
}

function setup() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  //if randomizing the grid, do this:
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;

  //add player to grid
  grid[player.y][player.x] = PLAYER;
}

function windowResized() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }

  cellSize = height/grid.length;
}

function draw() {
  if (state === "start screen") {
    background(0);
  }
  else if (state === "game") {
    background(220);
    displayGrid();
  }
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "w") {
    movePlayer(player.x + 0, player.y - 1);
  }
  if (key === "s") {
    movePlayer(player.x + 0, player.y + 1);
  }
  if (key === "a"){
    movePlayer(player.x - 1, player.y + 0);
  }
  if (key === "d") {
    movePlayer(player.x + 1, player.y + 0);
  }

  if (key === " " && state === "start screen"){
    state = "game";
    backgroundMusic.loop();
  }
}

function movePlayer(x, y) {
  if (x < GRID_SIZE && y < GRID_SIZE && x >= 0 && y >= 0 && grid[y][x] === OPENTILE) {
    let oldx = player.x;
    let oldy = player.y;

    player.x = x;
    player.y = y;

    grid[oldy][oldx] = OPENTILE;

    grid[player.y][player.x] = PLAYER;
  }
  else {
    cantWalkSound.play();
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self
  toggleCell(x, y);

}

function toggleCell(x, y) {
  // make sure the cell you're toggling is in the grid...
  if (x < GRID_SIZE && y < GRID_SIZE && x >= 0 && y >= 0) {
    //toggle the color of the cell
    if (grid[y][x] === OPENTILE) {
      grid[y][x] = IMPASSIBLE;
    }
    else if (grid[y][x] === IMPASSIBLE) {
      grid[y][x] = OPENTILE;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === IMPASSIBLE) {
        
        image(grassIMG, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === OPENTILE) {
        
        image(pavingIMG, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === PLAYER)  {
        fill("red");
        square(x * cellSize, y * cellSize, cellSize);
      }
      
    }
  }
}

function generateRandomGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      //half the time, be a 1. Other half, be a 0.
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function generateEmptyGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}