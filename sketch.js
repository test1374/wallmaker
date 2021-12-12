let blockSize = 19, wall1, wall2, wall3, wall4, brick1, brick2, brick3,
walls = [
  "----------------------------",
  "----------------------------",
  "--wwwww-wwwww---------------",
  "--w---------wwwwwwwwwwwww---",
  "--w---------w-----------w---",
  "--wwwwwww-www-----------w---",
  "---w--------w---------------",
  "---w--------------------w---",
  "---w--------w-----------w---",
  "---ww-wwwwwwwwwwwwww-wwww---",
  "---w-----w--------------w---",
  "------------------------w---",
  "---w-----w--------------w---",
  "---w-----wwwwwwwwwww-wwww---",
  "---www-www--------------w---",
  "---w-----w---w----------w---",
  "---w-----wwwww----------w---",
  "---w-----w-------wwww-www---",
  "---w-------------w------w---",
  "---w-----w-------w------w---",
  "---wwwwwwwwwwww-wwwwwwwww---",
  "----------------------------",
  "----------------------------",
],
floors = [
  "wwwwwwwwwwwwwwwwwwwwwwwwwwww",
  "w--------------------------w",
  "w-ffffffffff---------------w",
  "w-fffffffffffffffffffffff--w",
  "w-fffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--ffffffffffffffffffffff--w",
  "w--------------------------w",
  "wwwwwwwwwwwwwwwwwwwwwwwwwwww",
];
function preload() {
  wall1 = loadImage("wall1.png");
  wall2 = loadImage("wall2.png");
  wall3 = loadImage("wall3.png");
  wall4 = loadImage("wall4.png");
  brick1 = loadImage("brick1.png");
  brick2 = loadImage("brick2.png");
  brick3 = loadImage("brick3.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  blockSize = (width + height) / 50;
}
function draw() {
  background('#80AF49');
  //background(0, 0, 0);
  imageMode(CENTER);
  angleMode(DEGREES);
  noTint();
  noFill();
  for(var i = 0; i < floors.length; i++) {
    for(var b = 0; b < floors[i].length; b++) {
      if(floors[i][b] !== 'w') {
        var l = false, r = false, a = false, u = false;
        if(floors[i][b - 1] === "f") {
          l = true;
        }
        if(floors[i][b + 1] === "f") {
          r = true;
        }
        if(floors[i+1][b] === "f") {
          u = true;
        }
        if(floors[i-1][b] === "f") {
          a = true;
        }
        translate(b * blockSize + blockSize / 2, i * blockSize + blockSize / 2);
        if(r === true && l === true && a === true && u === true) {
          image(brick1, 0, 0, blockSize, blockSize);
        }
        if(r === true && l === true && a === true && u === false) {
          rotate(270);
          image(brick2, 0, 0, blockSize, blockSize);
          rotate(-270);
        }
        if(r === true && l === true && a === false && u === true) {
          rotate(90);
          image(brick2, 0, 0, blockSize, blockSize);
          rotate(-90);
        }
        if(r === true && l === false && a === true && u === true) {
          image(brick2, 0, 0, blockSize, blockSize);
        }
        if(r === false && l === true && a === true && u === true) {
          rotate(180);
          image(brick2, 0, 0, blockSize, blockSize);
          rotate(-180);
        }
        if(r === false && l === true && a === true && u === false) {
          rotate(180);
          image(brick3, 0, 0, blockSize, blockSize);
          rotate(-180);
        }
        if(r === true && l === false && u === true && a === false) {
          image(brick3, 0, 0, blockSize, blockSize);
        }
        if(r === false && l === true && u === true && a === false) {
          rotate(90);
          image(brick3, 0, 0, blockSize, blockSize);
          image(brick3, 0, blockSize / 2, blockSize, blockSize);
          image(brick3, blockSize / 2, 0, blockSize, blockSize);
          rotate(-90);
        }
        if(r === true && l === false && a === true && u === false) {
          rotate(270);
          image(brick3, 0, 0, blockSize, blockSize);
          image(brick3, 0, blockSize / 2, blockSize, blockSize);
          image(brick3, blockSize / 2, 0, blockSize, blockSize);
          rotate(-270);
        }
        translate(-(b * blockSize + blockSize / 2), -(i * blockSize + blockSize / 2));
      }
    }
  }
  for(var y = 0; y < walls.length; y++) {
    for(var x = 0; x < walls[y].length; x++) {
      if(walls[y][x] !== '-') {
        var left = false, right = false, above = false, under = false;
        if(walls[y][x - 1] === "w") {
          left = true;
        }
        if(walls[y][x + 1] === "w") {
          right = true;
        }
        if(walls[y+1][x] === "w") {
          under = true;
        }
        if(walls[y-1][x] === "w") {
          above = true;
        }
        translate(x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
        tint(100);
        if(above === true && under === true && left === true && right === true) {
          image(wall4, 0, 0, blockSize, blockSize);
        }
        if(right === true && left === true && under === false && above === false || right === true && left === false && above === false && under === false || right === false && left === true && above === false && under === false) {
          rotate(90);
          image(wall1, 0, 0, blockSize, blockSize);
          rotate(-90);
        } 
        if(above === true && under === true && right === false && left === false || right === false && left === false && above === true && under === false || right === false && left === false && above === false && under === true) {
          image(wall1, 0, 0, blockSize, blockSize);
        }
        if(right === true && left === false && above === true && under === false) {
          rotate(-90);
          image(wall2, 0, 0, blockSize, blockSize);
          rotate(90);
        }
        if(right === true && left === false && above === false && under === true) {
          image(wall2, 0, 0, blockSize, blockSize);
        }
        if(left === true && right === false && above === false && under === true) {
          rotate(90);
          image(wall2, 0, 0, blockSize, blockSize);
          rotate(-90);
        }
        if(left === true && right === false && above === true && under === false) {
          rotate(180);
          image(wall2, 0, 0, blockSize, blockSize);
          rotate(-180);
        }
        if(left === true && right === true && above === true && under === false) {
          rotate(-90);
          image(wall3, 0, 0, blockSize, blockSize);
          rotate(90);
        }
        if(left === true && right === true && above === false && under === true) {
          rotate(90);
          image(wall3, 0, 0, blockSize, blockSize);
          rotate(-90);
        }
        if(above === true && under === true && right === true && left === false) {
          image(wall3, 0, 0, blockSize, blockSize);
        }
        if(above === true && under === true && right === false && left === true) {
          rotate(180);
          image(wall3, 0, 0, blockSize, blockSize);
          rotate(-180);
        }
        translate(-(x * blockSize + blockSize / 2), -(y * blockSize + blockSize / 2));
      }
    }
  }
}
