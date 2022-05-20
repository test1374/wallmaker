let tabs = ['floor', 'wall', 'door','ground'], blockSize = 20, wallcolour, doorcolour, doorcolours, floortexture, wallcolours, floortextures, walltype, door, doorframe, door2, doorframe2, groundcolours, lines = true, dgrey, lgrey, wall1, wall2, wall3, wall4, brick1, tool, mansion, house, barn, bank, bunker1, bunker2, tab = 'floor' , underground = false, jura, menu = false, backgroundcolour, walls = [], floors = [];
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
  door = loadImage('door.png');
  doorframe = loadImage('doorframe.png');
  door2 = loadImage('door2.png');
  doorframe2 = loadImage('doorframe2.png');
  floortextures = [brick1, bank, barn, house, bunker1, bunker2, dgrey, lgrey];
  wallcolours = ['#ffffff', '#a18168', '#775529', '#a3977d', '#6d7645', '#233742', '#6c6c6b', '#814100', '#42060b', '#483737ff', '#119099'];
  groundcolours = [['#80AF49', '#1B0D03'], ['#BDBDBD', '#1B0D03'], ['#DFA757', '#3D0D03'], ['#4E6128', '#1B0D03'], ['#8E832A', '#1B0D03'], ['#212404', '#120801'], ['#B4B02E', '#3D0D03'], ['#4D5A68', '#1B0D03'], ['#2F5737', '#1B0D03'], ['#58657E', '#1B0D03'], ['#2D385D', '#1B0D03'], ['#3d3d3d', '#1d0a02']];
  doorcolours = ['#ffffff', '#4b4b4b', '#eff542', '#0e1466', '#CC9966', '#332211', '#119099'];
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  blockSize = 20;
  backgroundcolour = 0;
  tool = 'floor';
  floortexture = bunker1;
  wallcolour = '#ffffff';
  doorcolour = '#ffffff';
  walltype = 'wall';
  for(var y = 0; y < ceil(height / blockSize); y++) {
    for(var x = 0; x < floor(width / blockSize); x++) {
      if(x == 0) {
        walls.push([]);
        floors.push([]);
      }
      walls[y].push([0, '#ffffff', '#ffffff']);
      floors[y].push(0);
    }
  }
}
imageButton = function(img, x, y, w, h, v, e, c, t) {
  rectMode(CORNER);
  imageMode(CORNER);
  if(img !== null) {
    image(img, x, y, w, h);
  }
  noStroke();
  if(c !== null) {
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
        case 'tool':
        tool = e;
        break;
        case 'walltype':
        walltype = e;
        break;
        case 'line':
        lines = e;
        break;
        case 'above/below':
        underground = e;
        break;
        case 'doorcolour':
        doorcolour = e;
        break;
      }
    }
  }
  if(t) {
    text(t, x + w / 2, y + h / 2);
  }
}
keyReleased = function() {
  if(key.toLowerCase() == 'm' && menu == false) {
    menu = true;
  }
  else if(key.toLowerCase() == 'm' && menu == true) {
    menu = false;
  }
}
function draw() {
  rectMode(CORNER);
  cursor('none');
  if(underground == false) {
    background(groundcolours[backgroundcolour][0]);
  }
  else {
    background(groundcolours[backgroundcolour][1]);
  }
  //background(20);
  stroke(0, 0, 0, 100);
  if(lines == true && underground == false) {
    for(var h = 0; h < width / blockSize * 4; h++) {
      line(0, h * blockSize * 4, width, h * blockSize * 4)
    }
    for(var j = 0; j < height / blockSize * 4; j++) {
      line(j * blockSize * 4, 0, j * blockSize * 4, height);
    }
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
      if(walls[y][x][0] == 3) {
        var L = false, R = false, A = false, U = false;
        if(walls[y][x - 1][0] == 2) {
          L = true;
        }
        if(walls[y][x + 1][0] == 2) {
          R = true;
        }
        if(walls[y+1][x][0] == 2) {
          U = true;
        }
        if(walls[y-1][x][0] == 2) {
          A = true;
        }
        translate(x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
        tint(walls[y][x][1]);
        if(A == true && U == true || A == false && U == false && L == false && R == false) {
          image(doorframe, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door, 0, 0, blockSize, blockSize);
        }
        else if(L == true && R == true) {
          rotate(90);
          image(doorframe, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door, 0, 0, blockSize, blockSize);
          rotate(-90);
        }
        else if(U == true && A == false && L == false && R == false) {
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
        }
        else if(A == true && U == false && L == false && R == false) {
          rotate(180);
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
          rotate(-180);
        } 
        else if(A == false && U == false && L == true && R == false) {
          rotate(90);
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
          rotate(-90);
        }
        else if(U == false && A == false && L == false && R == true) {
          rotate(270);
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
          rotate(-270);
        }
        else if(A == true && U == false && R == false && L == true) {
          rotate(90);
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
          rotate(-90);
        }
        else if(A == true && U == false && R == true && L == false) {
          rotate(270);
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
          rotate(-270);
        }
        else if(A == false && U == true && R == false && L == true) {
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
        }
        else if(A == false && U == true && R == true && L == false) {
          image(doorframe2, 0, 0, blockSize, blockSize);
          noTint();
          tint(walls[y][x][2]);
          image(door2, 0, 0, blockSize, blockSize);
        }
        translate(-(x * blockSize + blockSize / 2), -(y * blockSize + blockSize / 2));
      }
      else if(walls[y][x][0] == 2) {
        var left = false, right = false, above = false, under = false;
        if(walls[y][x - 1][0] >= 2) {
          left = true;
        }
        if(walls[y][x + 1][0] >= 2) {
          right = true;
        }
        if(walls[y+1][x][0] >= 2) {
          under = true;
        }
        if(walls[y-1][x][0] >= 2) {
          above = true;
        }
        translate(x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
        tint(walls[y][x][1]);
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
        fill(0);
        if(walls[y][x - 1][1] !== walls[y][x][1] && walls[y][x - 1][0] !== 0) {
          rect(x * blockSize - blockSize / 40, y * blockSize + blockSize / 2.8, blockSize / 20, blockSize / 3.8);
        }
        if(walls[y - 1][x][1] !== walls[y][x][1] && walls[y - 1][x][0] !== 0) {
          rect(x * blockSize + blockSize / 2.8, y * blockSize - blockSize / 40, blockSize / 3.8, blockSize / 20);
        }
        noFill();
      }
    }
  }
  noTint();
  if(underground == false) {
    stroke(0);
  }
  else {
    stroke(255);
  }
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
  noStroke();
  if(menu == true) {
    fill(0);
    rect(blockSize, blockSize, width - blockSize * 2, height - blockSize * 2);
    cursor('default');
    textFont(jura);
    textAlign(CENTER, CENTER);
    textSize(blockSize * 1.4);
    for(var c = 0; c < tabs.length; c++) {
      imageButton(null, blockSize + ((width - blockSize * 2) / tabs.length) * c, blockSize, (width - blockSize * 2) / tabs.length, blockSize * 2, 'tab', tabs[c], '#000000', tabs[c].toUpperCase());
    }
    if(tab == 'floor') {
      textSize(20);
      text("Floor textures", width / 2, blockSize * 6);
      for(let i = 0; i < floortextures.length; i++) {
        let x = blockSize * 4 + i * (blockSize * 4), 
        y = blockSize * 7;
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
        y = blockSize * 7;
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
      fill(0);
      stroke(255);
      strokeWeight(2);
      text("Select door or walls", width / 2, blockSize * 17);
      image(doorframe, width / 2 - blockSize * 4, blockSize * 18, blockSize * 4, blockSize * 4);
      imageButton(door, width / 2 - blockSize * 4, blockSize * 18, blockSize * 4, blockSize * 4, 'walltype', 'door', null);
      imageButton(wall1, width / 2, blockSize * 18, blockSize * 4, blockSize * 4, 'walltype', 'wall', null);
    }
    if(tab == 'door') {
      textSize(20);
      text('Door Colours', width / 2, blockSize * 6);
      for(let i = 0; i < doorcolours.length; i++) {
        let x = blockSize * 4 + i * (blockSize * 4), 
        y = blockSize * 7;
        if(x >= width - blockSize * 6) {
          x -= round(width / blockSize) * blockSize - (blockSize * 7);
          y += blockSize * 4;
        }
        if(x >= width - blockSize * 6) {
          x -= round(width / blockSize) * blockSize - (blockSize * 7);
          y += blockSize * 4;
        }
        imageButton(null, x, y, blockSize * 4, blockSize * 4, 'doorcolour', doorcolours[i], doorcolours[i], null);
        if(doorcolour == i) {
          noFill();
          stroke(0, 255, 0);
          strokeWeight(4);
          rect(x + 1, y + 1, blockSize * 4 - 2, blockSize * 4 - 2);
        }
      }
    }
    if(tab == 'ground') {
      textSize(20);
      text("Ground Colours", width / 2, blockSize * 6);
      for(let i = 0; i < groundcolours.length; i++) {
        let x = blockSize * 4 + i * (blockSize * 4), 
        y = blockSize * 7;
        if(x >= width - blockSize * 6) {
          x -= round(width / blockSize) * blockSize - (blockSize * 7);
          y += blockSize * 4;
        }
        if(x >= width - blockSize * 6) {
          x -= round(width / blockSize) * blockSize - (blockSize * 7);
          y += blockSize * 4;
        }
        imageButton(null, x, y, blockSize * 4, blockSize * 4, 'ground', i, groundcolours[i][0]);
        if(backgroundcolour == i) {
          noFill();
          stroke(0, 255, 0);
          strokeWeight(4);
          rect(x + 1, y + 1, blockSize * 4 - 2, blockSize * 4 - 2);
        }
      }
      fill(0);
      stroke(255);
      strokeWeight(2);
      text("Above or below ground", width / 2, blockSize * 17);
        imageButton(null, width / 2 - blockSize * 4, blockSize * 18, blockSize * 4, blockSize * 4, 'above/below', false, groundcolours[backgroundcolour][0]);
      imageButton(null, width / 2, blockSize * 18, blockSize * 4, blockSize * 4, 'above/below', true, groundcolours[backgroundcolour][1]);
    }
  }
  strokeWeight(1);
  noStroke();
  fill(255, 0, 0);
  text(round(frameRate()), 20, 20);
  if(floor(mouseX / blockSize) < floor(width / blockSize) - 1 && floor(mouseY / blockSize) < ceil(height / blockSize) - 1 && floor(mouseX / blockSize) > 0 && floor(mouseY / blockSize) !== 0 && floor(mouseY / blockSize) > 0) {
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
      if(walls[floor(mouseY / blockSize)][floor(mouseX / blockSize)][0] === 0 && mouseIsPressed && tool === 'wall' && mouseButton === RIGHT && menu == false && walltype == 'wall') {
        walls[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = [2, wallcolour];
      }
      if(walls[floor(mouseY / blockSize)][floor(mouseX / blockSize)][0] === 0 && mouseIsPressed && tool === 'wall' && mouseButton === RIGHT && menu == false && walltype == 'door') {
        walls[floor(mouseY / blockSize)][floor(mouseX / blockSize)] = [3, wallcolour, doorcolour];
      }
      if(walls[floor(mouseY / blockSize)][floor(mouseX / blockSize)][0] >= 2 && mouseIsPressed && tool === 'wall' && mouseButton === LEFT && menu == false && walls[floor(mouseY / blockSize)][floor(mouseX / blockSize)][0] >= 2) {
        walls[floor(mouseY / blockSize)][floor(mouseX / blockSize)][0] = 0;
      }
  }
  width = windowWidth;
  height = windowHeight;
}
