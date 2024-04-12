// 2D Grid
// Ben M
// 04/09/2024


// For hardcoding something
// let grid = [[1, 0, 0, 1],
//             [0, 1, 0, 1],
//             [0, 0, 0, 1],
//             [1, 1, 0, 0],
//             [0, 1, 0, 0],
//             [1, 0, 1, 1],
//             [0, 1, 1, 0],
//             [0, 0, 0, 1]
//           ];

// For randomizing something
let grid;
let cellSize;
const GRID_SIZE = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  cellSize = height/grid.length;
}

function draw() {
  background(220);
  displaygrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
}

function mousePressed(){
  if (mousePressed === true) {
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
        if (grid[y][x] === 1) {
          fill(255);
        }
        else {
          fill(0);
        }
      }
    }
  }
}

function displaygrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        fill(0);
      }
      else {
        fill(255);
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