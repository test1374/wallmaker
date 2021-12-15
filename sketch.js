let blockSize = 19, wallcolour, floortexture, wall1, wall2, wall3, wall4, brick1, tool, mansion, house, barn, bank, backgroundcolour,  
walls = [
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],],
floors = [
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
];
function preload() {
  wall1 = loadImage("wall1.png");
  wall2 = loadImage("wall2.png");
  wall3 = loadImage("wall3.png");
  wall4 = loadImage("wall4.png");
  brick1 = loadImage("brick1.png");
  bank = loadImage('pattern-bank.png');
  barn = loadImage('pattern-barn.png');
  house = loadImage('pattern-house.png');
  mansion = loadImage('pattern-mansion.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  blockSize = (width + height) / 90;
  backgroundcolour = '#80AF49';
  tool = 'wall';
}
function draw() {
  cursor('crosshair');
  background(backgroundcolour);
  //background(20);
  stroke(0);
  for(var h = 0; h < width / blockSize * 4; h++) {
    line(0, h * blockSize * 4, width, h * blockSize * 4)
  }
  for(var j = 0; j < height / blockSize * 4; j++) {
      line(j * blockSize * 4, 0, j * blockSize * 4, height);
  }
  imageMode(CENTER);
  angleMode(DEGREES);
  noTint();
  noFill();
  for(var i = 0; i < floors.length; i++) {
    for(var b = 0; b < floors[i].length; b++) {
      if(floors[i][b] === 2) {
        var l = false, r = false, a = false, u = false;
        if(floors[i][b - 1] === 2) {
          l = true;
        }
        if(floors[i][b + 1] === 2) {
          r = true;
        }
        if(floors[i+1][b] === 2) {
          u = true;
        }
        if(floors[i-1][b] === 2) {
          a = true;
        }
        translate(b * blockSize + blockSize / 2, i * blockSize + blockSize / 2);
        if(r === true && l === true && a === true && u === true && floors[i - 1][b + 1] !== 0 && floors[i + 1][b + 1] !== 0 && floors[i - 1][b - 1] !== 0 && floors[i + 1][b - 1] !== 0) {
          image(brick1, 0, 0, blockSize, blockSize);
        }
        if(r === true && l === true && a === true && u === true && floors[i - 1][b + 1] === 0 && floors[i + 1][b + 1] !== 0 && floors[i - 1][b - 1] !== 0 && floors[i + 1][b - 1] !== 0) {
          image(brick1.get(0, 0, brick1.width / 2, brick1.height), -blockSize / 4, 0, blockSize / 2, blockSize);
          image(brick1.get(brick1.width / 2, brick1.height / 2, brick1.width / 2, brick1.height / 2), blockSize / 4, blockSize / 4, blockSize / 2, blockSize / 2);
        }
        if(r === true && l === true && a === true && u === true && floors[i - 1][b + 1] !== 0 && floors[i + 1][b + 1] !== 0 && floors[i - 1][b - 1] === 0 && floors[i + 1][b - 1] !== 0) {
          image(brick1.get(brick1.width / 2, 0, brick1.width / 2, brick1.height), blockSize / 4, 0, blockSize / 2, blockSize);
          image(brick1.get(0, brick1.height / 2, brick1.width / 2, brick1.height / 2), -blockSize / 4, blockSize / 4, blockSize / 2, blockSize / 2);
        }
        if(r === true && l === true && a === true && u === true && floors[i - 1][b + 1] !== 0 && floors[i + 1][b + 1] !== 0 && floors[i - 1][b - 1] !== 0 && floors[i + 1][b - 1] === 0) {
          image(brick1.get(0, 0, brick1.width / 2, brick1.height / 2), -blockSize / 4, -blockSize / 4, blockSize / 2, blockSize / 2);
          image(brick1.get(brick1.width / 2, 0, brick1.width / 2, brick1.height), blockSize / 4, 0, blockSize / 2, blockSize);
        }
        if(r === true && l === true && a === true && u === true && floors[i - 1][b + 1] !== 0 && floors[i + 1][b + 1] === 0 && floors[i - 1][b - 1] !== 0 && floors[i + 1][b - 1] !== 0) {
          image(brick1.get(0, 0, brick1.width / 2, brick1.height), -blockSize / 4, 0, blockSize / 2, blockSize);
          image(brick1.get(brick1.width / 2, 0, brick1.width / 2, brick1.height / 2), blockSize / 4, -blockSize / 4, blockSize / 2, blockSize / 2);
        }
        if(r === true && l === true && a === true && u === false) {
          image(brick1.get(0, 0, brick1.width, brick1.height / 2), 0, -blockSize / 4, blockSize, blockSize / 2);
        }
        if(r === true && l === true && a === false && u === true) {
          image(brick1.get(0, brick1.height / 2, brick1.width, brick1.height / 2), 0, blockSize / 4, blockSize, blockSize / 1.99);
        }
        if(r === true && l === false && a === true && u === true) {
          image(brick1.get(brick1.width / 2, 0, brick1.width / 2, brick1.height), blockSize / 4, 0, blockSize / 2, blockSize);
        }
        if(r === false && l === true && a === true && u === true) {
          image(brick1.get(0, 0, brick1.width / 2, brick1.height), -blockSize / 4, 0, blockSize / 2, blockSize);
        }
        if(r === false && l === true && a === true && u === false) {
          image(brick1.get(brick1.width / 2, brick1.height / 2, brick1.width / 2, brick1.height / 2), -blockSize / 4, -blockSize / 4, blockSize / 2, blockSize / 2);
        }
        if(r === true && l === false && u === true && a === false) {
          image(brick1.get(0, 0, brick1.width / 2, brick1.height / 2), blockSize / 4, blockSize / 4, blockSize / 2, blockSize / 2);
        }
        if(r === false && l === true && u === true && a === false) {
          image(brick1.get(brick1.width / 2, 0, brick1.width / 2, brick1.height / 2), -blockSize / 4, blockSize / 4, blockSize / 2, blockSize / 2);
        }
        if(r === true && l === false && a === true && u === false) {
          image(brick1.get(0, brick1.height / 2, brick1.width / 2, brick1.height / 2), blockSize / 4 , -blockSize / 4, blockSize / 2, blockSize / 2);
        }
        translate(-(b * blockSize + blockSize / 2), -(i * blockSize + blockSize / 2));
      }
    }
  }
  for(var y = 0; y < walls.length; y++) {
    for(var x = 0; x < walls[y].length; x++) {
      if(walls[y][x] === 0 && floor(mouseX / blockSize) === x && floor(mouseY / blockSize) === y && mouseIsPressed && tool === 'wall' && mouseButton === RIGHT) {
        walls[y][x] = 2;
      }
      if(walls[y][x] === 2) {
        if(floor(mouseX / blockSize) === x && floor(mouseY / blockSize) === y && mouseIsPressed && tool === 'wall' && mouseButton === LEFT) {
        walls[y][x] = 0;
      }
        var left = false, right = false, above = false, under = false;
        if(walls[y][x - 1] === 2) {
          left = true;
        }
        if(walls[y][x + 1] === 2) {
          right = true;
        }
        if(walls[y+1][x] === 2) {
          under = true;
        }
        if(walls[y-1][x] === 2) {
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
        if(above === false && under === false && right === false && left === false) {
          image(wall1, 0, 0, blockSize, blockSize);
        }
        translate(-(x * blockSize + blockSize / 2), -(y * blockSize + blockSize / 2));
      }
    }
  }
  stroke(0);
  rect(floor(mouseX / blockSize) * blockSize, floor(mouseY / blockSize) * blockSize, blockSize, blockSize);
  document.addEventListener("contextmenu", (event) => event.preventDefault());
}
