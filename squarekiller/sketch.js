// JailBreak
// Ben McPherson
// April 17, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let cellSize;
const GRID_SIZE = 8;
const PLAYER = 9;
const OPENTILE = 0;
const IMPASSIBLE = 1;
const KILL = 5;
let player = {
  x: 0,
  y: 0,
}; 
let state = "start screen";

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
    grid = generateBlackoutTiles(GRID_SIZE, GRID_SIZE);
    displayGrid();
  
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
}


function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === OPENTILE) {  
        fill("white");
      }
      else if (grid[y][x] === PLAYER)  {
        fill("red");
      }
      else if (grid[y][x] === KILL) {
        fill("black");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
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

function generateBlackoutTiles(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(5) < 2) {
        emptyArray.push(5);
      }
      else {
        emptyArray.push(0);
      }
    }
  }
  return emptyArray;
}