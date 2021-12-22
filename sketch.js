let blockSize = 19, wallcolour, floortexture, wallcolours, floortextures, groundcolours, dgrey, lgrey, wall1, wall2, wall3, wall4, brick1, tool, mansion, house, barn, bank, bunker1, bunker2, tab = 'floor' ,jura, menutimer = 0, menu = false, backgroundcolour,  
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
  dgrey = loadImage('darkgrey.png');
  lgrey = loadImage('lightgrey.png');
  jura = loadFont('Jura-Bold.ttf');
  floortextures = [brick1, bank, barn, house, bunker1, bunker2, dgrey, lgrey];
  wallcolours = ['#ffffff', '#a18168', '#775529', '#a3977d', '#6d7645', '#233742', '#6c6c6b', '#814100', '#42060b'];
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  blockSize = 20;
  backgroundcolour = '#80AF49';
  tool = 'floor';
  floortexture = bunker1;
  wallcolour = '#ffffff';
}
imageButton = function(img, x, y, w, h, v, e, c) {
  rectMode(CORNER);
  imageMode(CORNER);
  if(img !== null) {
    image(img, x, y, w, h);
  }
  noStroke();
  if(c !==null) {
    fill(c);
    rect(x, y, w, h);
  }
  strokeWeight(1);
  noFill();
  stroke(255);
  if(mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    cursor('pointer');
    rect(x, y, w, h);
    if(mouseIsPressed) {
      switch(v) {
        case 'wall':
        wallcolour = e;
        break;
        case 'floor':
        floortexture = e;
        break;
        case 'ground':
        backgroundcolour = e;
        break;
        case 'tab':
        tab = e;
        break;
      }
    }
  }
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
    noStroke();
      rectMode(CENTER);
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
          case 9:
            image(dgrey, 0, 0, blockSize, blockSize);
          break;
          case 10:
            image(lgrey, 0, 0, blockSize, blockSize);
          break;
        }
        translate(-(b * blockSize + blockSize), -(i * blockSize + blockSize));
      }
    }
  }
noFill();
rectMode(CORNER);
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
        tint(wallcolour);
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
  noTint();
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
  if(key.toLowerCase() === 'a') {
    tool = 'wall';
  }
  if(key.toLowerCase() === 's') {
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
      for(let i = 0; i < floortextures.length; i++) {
        let x = blockSize * 4 + i * (blockSize * 4), 
        y = blockSize * 10;
        if(x >= width - blockSize * 4) {
          x -= floor(width / blockSize) * blockSize - (blockSize * 7);
          y += blockSize * 4;
        }
        imageButton(floortextures[i], x, y, blockSize * 4, blockSize * 4, 'floor', floortextures[i], null);
        if(floortexture == floortextures[i]) {
          noFill();
          stroke(0, 255, 0);
          strokeWeight(4);
          rect(x + 1, y + 1, blockSize * 4 - 2, blockSize * 4 - 2);
        }
      }
    }
    if(tab == 'wall') {
      textSize(20);
      text("Wall Colours", width / 2, blockSize * 6);
      for(let i = 0; i < wallcolours.length; i++) {
        let x = blockSize * 4 + i * (blockSize * 4), 
        y = blockSize * 10;
        if(x >= width - blockSize * 4) {
          x -= floor(width / blockSize) * blockSize - (blockSize * 7);
          y += blockSize * 4;
        }
        imageButton(null, x, y, blockSize * 4, blockSize * 4, 'wall', wallcolours[i], wallcolours[i]);
        if(wallcolour == wallcolours[i]) {
          noFill();
          stroke(0, 255, 0);
          strokeWeight(4);
          rect(x + 1, y + 1, blockSize * 4 - 2, blockSize * 4 - 2);
        }
      }
    }
    if(tab == 'ground') {
      
    }
  }
  strokeWeight(1);
  noStroke();
  fill(255, 0, 0);
  text(round(frameRate()), 20, 20);
  if(floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] === 0 && mouseButton == RIGHT && tool == 'floor' && menu == false && mouseIsPressed) {
        switch(floortexture) {
          case bunker1:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 2;
          break;
          case bunker2:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 3;
          break;
          case mansion:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 4;
          break;
          case house:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 5;
          break;
          case barn:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 6;
          break;
          case bank:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 7;
          break;
          case brick1:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 8;
          break;
          case dgrey:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 9;
          break;
          case lgrey:
            floors[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = 10;
          break;
        }
      }
}
