// JailBreak
// Ben McPherson
// April 17, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
            [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 5],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
let cellSize;
const GRID_SIZE = 25;
const PLAYER = 9;
const OPENTILE = 0;
const IMPASSIBLE = 1;
const WIN = 5;
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


// When a certain key is pressed, a function happens. ex; wasd the character
function keyPressed() {

  if (key === "w") {
    movePlayer(player.x + 0, player.y - 1);
    randomReset();
  
  }
  if (key === "s") {
    movePlayer(player.x + 0, player.y + 1);
    randomReset();
  
  }
  if (key === "a"){
    movePlayer(player.x - 1, player.y + 0);
    randomReset();
  
  }
  if (key === "d") {
    movePlayer(player.x + 1, player.y + 0);
    randomReset();
  }

  if (key === " " && state === "start screen"){
    state = "game";
  }
}

function movePlayer(x, y) {
  if (x <= GRID_SIZE && y <= GRID_SIZE && x >= 0 && y >= 0 && grid[y][x] === OPENTILE) {
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
      else if (grid[y][x] === IMPASSIBLE) {
        fill("black");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function randomReset() {
  if (random(30) < 1) {
    let oldx = player.x;
    let oldy = player.y;

    grid[oldy][oldx] = OPENTILE;

    player.x = 0;
    player.y = 0;
    grid[0][0] = PLAYER;

  }
}


// function generateRandomGrid(cols, rows) {
//   let emptyArray = [];
//   for (let y = 0; y < rows; y++) {
//     emptyArray.push([]);
//     for (let x = 0; x < cols; x++) {
//       emptyArray[y].push(0);
//     }
//   }
//   return emptyArray;
// }

// function generateEmptyGrid(cols, rows) {
//   let emptyArray = [];
//   for (let y = 0; y < rows; y++) {
//     emptyArray.push([]);
//     for (let x = 0; x < cols; x++) {
//       emptyArray[y].push(0);
//     }
//   }
//   return emptyArray;
// }
