let blockSize = 19, wallcolour, floortexture, wall1, wall2, wall3, wall4, brick1, tool, mansion, house, barn, bank, bunker1, bunker2, tab = 'floor' ,jura, menutimer = 0, menu = false, backgroundcolour,  
walls = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],],
floors = [
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
  bunker1 = loadImage('whitefloorbunker.png');
  bunker2 = loadImage('blackfloorbunker.png');
  jura = loadFont('Jura-Bold.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  blockSize = 20;
  backgroundcolour = '#80AF49';
  tool = 'floor';
  floortexture = bunker1;
}
keyReleased = function() {
  if(key == 'm' && menu == false && menutimer > 0) {
    menu = true;
    menutimer = 0;
  }
  if(key == 'm' && menu == true && menutimer > 0) {
    menu = false;
    menutimer = 0;
  }
}
function draw() {
  rectMode(CORNER);
  cursor('none');
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
      if(floors[i][b] === 0 && mouseIsPressed && floor(mouseX / blockSize) === b && floor(mouseY / blockSize) === i && mouseButton === RIGHT && tool === 'floor' && menu == false) {
        switch(floortexture) {
          case bunker1:
            floors[i][b] = 2;
          break;
          case bunker2:
            floors[i][b] = 3;
          break;
          case mansion:
            floors[i][b] = 4;
          break;
          case house:
            floors[i][b] = 5;
          break;
          case barn:
            floors[i][b] = 6;
          break;
          case bank:
            floors[i][b] = 7;
          break;
          case brick1:
            floors[i][b] = 8;
          break;
        }
      }
      if(floors[i][b] !== 0 && floors[i][b] !== 1) {
        if(mouseIsPressed && floor(mouseX / blockSize) === b && floor(mouseY / blockSize) === i && mouseButton === LEFT && tool === 'floor' && menu == false) {
        floors[i][b] = 0;
      }
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
        translate(b * blockSize + blockSize, i * blockSize + blockSize);
        switch(floors[i][b]) {
          case 2:
            image(bunker1, 0, 0, blockSize, blockSize);
          break;
          case 3:
            image(bunker2, 0, 0, blockSize, blockSize);
          break;
          case 4:
            image(mansion, 0, 0, blockSize, blockSize);
          break;
          case 5:
            image(house, 0, 0, blockSize, blockSize);
          break;
          case 6:
            image(barn, 0, 0, blockSize, blockSize);
          break;
          case 7:
            image(bank, 0, 0, blockSize, blockSize);
          break;
          case 8:
            image(brick1, 0, 0, blockSize, blockSize);
          break;
        }
        translate(-(b * blockSize + blockSize), -(i * blockSize + blockSize));
      }
    }
  }
  for(var y = 0; y < walls.length; y++) {
    for(var x = 0; x < walls[y].length; x++) {
      if(walls[y][x] === 0 && floor(mouseX / blockSize) === x && floor(mouseY / blockSize) === y && mouseIsPressed && tool === 'wall' && mouseButton === RIGHT && menu == false) {
        walls[y][x] = 2;
      }
      if(walls[y][x] === 2) {
        if(floor(mouseX / blockSize) === x && floor(mouseY / blockSize) === y && mouseIsPressed && tool === 'wall' && mouseButton === LEFT && menu == false) {
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
  if(tool === 'wall' && menu == false) {
    rect(floor(mouseX / blockSize) * blockSize, floor(mouseY / blockSize) * blockSize, blockSize, blockSize);
    fill(255, 20, 20);
    noStroke();
    ellipse(mouseX, mouseY, blockSize / 2, blockSize / 2);
  }
  if(tool === 'floor' && menu == false) {
    rect(floor(mouseX / blockSize) * blockSize + blockSize / 2, floor(mouseY / blockSize) * blockSize + blockSize / 2, blockSize, blockSize);
    fill(255, 20, 20);
  noStroke();
  ellipse(mouseX + blockSize / 2, mouseY + blockSize / 2, blockSize / 2, blockSize / 2);
  }
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  if(key === 'a') {
    tool = 'wall';
  }
  if(key === 's') {
    tool = 'floor';
  }
  menutimer++;
  if(menu == true) {
    cursor('default');
    fill(0);
    rect(blockSize, blockSize, width - blockSize * 2, height - blockSize * 2);
    noFill();
    stroke(255);
    if(mouseX >= blockSize && mouseY >= blockSize && mouseX <= blockSize + (width - blockSize * 2) / 3 && mouseY <= blockSize * 3) {
        cursor('pointer');
        rect(blockSize, blockSize, (width - blockSize * 2) / 3, blockSize * 2);
        if(mouseIsPressed) {
          tab = 'floor';
        }
    }
    if(mouseX >= blockSize + (width - blockSize * 2) / 3 && mouseY >= blockSize && mouseX <= width - (blockSize + (width - blockSize * 2) / 3) && mouseY <= blockSize * 3) {
        cursor('pointer');
        rect(blockSize + (width - blockSize * 2) / 3, blockSize, (width - blockSize * 2) / 3, blockSize * 2);
        if(mouseIsPressed) {
          tab = 'wall';
        }
    }
    if(mouseX >= blockSize + ((width - blockSize * 2) / 3) * 2 && mouseY >= blockSize && mouseX <= width - blockSize && mouseY <= blockSize * 3) {
        cursor('pointer');
        rect(blockSize + ((width - blockSize * 2) / 3) * 2, blockSize, (width - blockSize * 2) / 3, blockSize * 2);
        if(mouseIsPressed) {
          tab = 'ground';
        }
    }
    textFont(jura);
    textAlign(CENTER);
    textSize(blockSize * 1.4);
    text("FLOOR", (width - blockSize * 2) / 5, blockSize * 2.5);
    text("WALL", (width - blockSize * 2) / 1.9, blockSize * 2.5);
    text("GROUND", (width - blockSize * 2) / 1.15, blockSize * 2.5);
    if(tab == 'floor') {
      textSize(20);
      text("Floor textures", width / 2, blockSize * 6);
      image(mansion, width / 2 - blockSize * 10, blockSize * 10, blockSize * 4, blockSize * 4);
      image(house, width / 2 - blockSize * 6, blockSize * 10, blockSize * 4, blockSize * 4);
      image(barn, width / 2 - blockSize * 2, blockSize * 10, blockSize * 4, blockSize * 4);
      image(bank, width / 2 + blockSize * 2, blockSize * 10, blockSize * 4, blockSize * 4);
      image(bunker1, width / 2 + blockSize * 6, blockSize * 10, blockSize * 4, blockSize * 4);
      image(bunker2, width / 2 + blockSize * 10, blockSize * 10, blockSize * 4, blockSize * 4);
      image(brick1, width / 2 - blockSize * 10, blockSize * 14, blockSize * 4, blockSize * 4);
      rectMode(CENTER);
      if(mouseX >= width / 2 - blockSize * 12 && mouseX <= width / 2 - blockSize * 8 && mouseY > blockSize * 8 && mouseY <= blockSize * 12) {
        cursor('pointer');
        noFill();
        rect(width / 2 - blockSize * 10, blockSize * 10, blockSize * 4, blockSize * 4);
        if(mouseIsPressed) {
          floortexture = mansion;
        }
      }
      if(mouseX >= width / 2 - blockSize * 8 && mouseX <= width / 2 - blockSize * 4 && mouseY > blockSize * 8 && mouseY <= blockSize * 12) {
        cursor('pointer');
        noFill();
        rect(width / 2 - blockSize * 6, blockSize * 10, blockSize * 4, blockSize * 4);
        if(mouseIsPressed) {
          floortexture = house;
        }
      }
      if(mouseX >= width / 2 - blockSize * 4 && mouseX <= width / 2 && mouseY > blockSize * 8 && mouseY <= blockSize * 12) {
        cursor('pointer');
        noFill();
        rect(width / 2 - blockSize * 2, blockSize * 10, blockSize * 4, blockSize * 4);
        if(mouseIsPressed) {
          floortexture = barn;
        }
      }
      if(mouseX >= width / 2 && mouseX <= width / 2 + blockSize * 4 && mouseY >= blockSize * 8 && mouseY <= blockSize * 12) {
        cursor('pointer');
        noFill();
        rect(width / 2 + blockSize * 2, blockSize * 10, blockSize * 4, blockSize * 4);
        if(mouseIsPressed) {
          floortexture = bank;
        }
      }
      if(mouseX >= width / 2 + blockSize * 4 && mouseX <= width / 2 + blockSize * 8 && mouseY >= blockSize * 8 && mouseY <= blockSize * 12) {
        cursor('pointer');
        noFill();
        rect(width / 2 + blockSize * 6, blockSize * 10, blockSize * 4, blockSize * 4);
        if(mouseIsPressed) {
          floortexture = bunker1;
        }
      }
      if(mouseX >= width / 2 + blockSize * 8 && mouseX <= width / 2 + blockSize * 12 && mouseY >= blockSize * 8 && mouseY <= blockSize * 12) {
        cursor('pointer');
        noFill();
        rect(width / 2 + blockSize * 10, blockSize * 10, blockSize * 4, blockSize * 4);
        if(mouseIsPressed) {
          floortexture = bunker2;
        }
      }
      if(mouseX >= width / 2 - blockSize * 12 && mouseX <= width / 2 - blockSize * 8 && mouseY > blockSize * 12 && mouseY <= blockSize * 16) {
        cursor('pointer');
        noFill();
        rect(width / 2 - blockSize * 10, blockSize * 14, blockSize * 4, blockSize * 4);
        if(mouseIsPressed) {
          floortexture = brick1;
        }
      }
    }
  }
}
