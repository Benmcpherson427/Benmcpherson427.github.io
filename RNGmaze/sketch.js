// JailBreak
// Ben McPherson
// April 17, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// All the parameters used in the code, such as a hard-coded grid.
let grid = [[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 5, 0],
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 5, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
            [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5],
            [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 5],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            [0, 1, 5, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
            [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
let cellSize;
const GRID_SIZE = 25;
const PLAYER = 9;
const OPENTILE = 0;
const IMPASSIBLE = 1;
const END = 5;
const WIN = 7;
let player = {
  x: 0,
  y: 0,
}; 
let state = "start screen";
let ends = [grid[22][2], 
            grid[5][23], 
            grid[8][13], 
            grid[18][24], 
            grid[16][24]];

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


// Here the game checks to see what state you're in and then displays the correct screen accordingly
function draw() {
  if (state === "start screen") {
    background(0);
  }
  else if (state === "game") {
    background(220);
    displayGrid();
  }
  else if (state === "win") {
    background(0);
    fill(255);
    textSize = 300;
    textAlign(CENTER, CENTER);
    text("You win!", width/2, height/2);

  }
}


// When a certain key is pressed, a function happens. ex; wasd the character moves, space, resets when the state is not "game"
function keyPressed() {

  if (key === "w") {
    movePlayer(player.x + 0, player.y - 1);
    randomReset();
    endJump();
  
  }
  if (key === "s") {
    movePlayer(player.x + 0, player.y + 1);
    randomReset();
    endJump();
  
  }
  if (key === "a"){
    movePlayer(player.x - 1, player.y + 0);
    randomReset();
    endJump();
  
  }
  if (key === "d") {
    movePlayer(player.x + 1, player.y + 0);
    randomReset();
    endJump();
  }

  if (key === " " && (state === "start screen" || state === "win")){
    state = "game";
  }
}

// This function allows the player to move, by detecting if the block in front is emtpy ot not
function movePlayer(x, y) {
  // This checks for an empty block
  if (x <= GRID_SIZE && y <= GRID_SIZE && x >= 0 && y >= 0 && grid[y][x] === OPENTILE) {
    let oldx = player.x;
    let oldy = player.y;

    player.x = x;
    player.y = y;

    grid[oldy][oldx] = OPENTILE;

    grid[player.y][player.x] = PLAYER;
  }

// This checks if the block is an end and then calls the state "win"
  if (x <= GRID_SIZE && y <= GRID_SIZE && x >= 0 && y >= 0 && grid[y][x] === END) {
    state = "win";
  }
}

// This creates the grid above with the empty and blocked paths, which makes it so you can't walk anywhere
function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === OPENTILE) {  
        fill("white");
      }
      else if (grid[y][x] === END) {
        fill("green");
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

// This function is what allows the end point to jump around. Unfortunately it never got working properly
// function endJump() {
//   for (let y = 0; y < grid.length; y++) {
//     for (let x = 0; x < grid[y].length; x++) {
//       if (random(5) < 1) {
//         let winTile = random(ends);
//         winTile = END;
//         fill("green");
//         square(x * cellSize, y * cellSize, cellSize);
//       }
//     }
//   }
// }


// This function is randomly called everytime WASD are pressed and resets the player to the start if successfully called
function randomReset() {
  if (random(10000) < 1) {
    let oldx = player.x;
    let oldy = player.y;

    grid[oldy][oldx] = OPENTILE;

    player.x = 0;
    player.y = 0;
    grid[0][0] = PLAYER;

  }
}

function resetPlayer() {
  player.x = 0;
  player.y = 0;
}