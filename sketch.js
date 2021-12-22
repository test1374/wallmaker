"use strict";
const assets = {},
  menu = {
    open: false,
    tab: ""
  },
  tool = {
    type: "floor",
    floorTexture: "",
    wallColour: ""
  },
  controls = {
    place: "mouse0",
    destroy: "mouse2",
    floor_mode: "s",
    wall_mode: "a",
    toggle_menu: "m",
    show_tps: "t"
  },
  toP5MouseNotation = {
    mouse0: "left",
    mouse1: "middle",
    mouse2: "right"
  },
  blockSize = 20,
  backgroundcolour = "#80AF49",
  nameToFilePathMap = { // Update this as needed
    "wall1": { src: "wall1.png", type: "wall" },
    "wall2": { src: "wall2.png", type: "wall" },
    "wall3": { src: "wall3.png", type: "wall" },
    "wall4": { src: "wall4.png", type: "wall" },
    "brick1": { src: "brick1.png", type: "floor" },
    "brick2": { src: "brick2.png", type: "floor" },
    "brick3": { src: "brick3.png", type: "floor" },
    "bank": { src: "pattern-bank.png", type: "floor" },
    "barn": { src: "pattern-barn.png", type: "floor" },
    "house": { src: "pattern-house.png", type: "floor" },
    "mansion": { src: "pattern-mansion.png", type: "floor" },
    "bunker1": { src: "whitefloorbunker.png", type: "floor" },
    "bunker2": { src: "blackfloorbunker.png", type: "floor" },
    "jura": { src: "Jura-Bold.ttf" },
  },
  wallColors = [ // Update as desired
    "#FFFFFF",
    "#A18168",
    "#775529",
    "#A3977D",
    "#6D7645",
    "#233742",
    "#6C6C6b",
    "#814100",
    "#42060B"
  ],
  walls = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  floors = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  $ = element => document.getElementById(element),
  perf = {
    timers: { a: null, b: null },
    history: 60,
    critical: 100,
    currentMode: 0,
    showTPS(mode) {
      perf.currentMode = mode;
      if (!mode) { return perf.hideTPS(); }
      function createPElement() {
        const logger = document.createElement("p");
        logger.id = "tick-counter";
        logger.className = "hud stats";
        logger.innerHTML = "TPS: 0<br>AVG: 0 ± 0";
        document.getElementsByTagName("main")[0].appendChild(logger);
        return logger;
      }

      function average(...arr) {
        for (var sum = 0, i = 0; i < arr.length; sum += arr[i++]);
        return sum / arr.length;
      }

      function stdDev(arr) {
        const avg = average(...arr),
          a = arr.map(e => { return Math.abs(e - avg); });
        return average(...a);
      }

      function setTimer(p) {
        let ticks = 0, tps = [];
        perf.timers.a = setInterval(() => { ++ticks; }, 0);
        perf.timers.b = setInterval(() => {
          tps.push(ticks);
          if (tps.length > perf.history) { tps.shift(); }
          p.innerHTML = `TPS: ${ticks}<br>AVG: ${Math.round(100 * +average(...tps)) / 100} ± ${Math.round(100 * +stdDev(tps)) / 100}`;
          if (mode == 2) {
            const g = $("tick-graph"),
              gx = g.getContext("2d"),
              max = Math.max(...tps),
              l = tps.length,
              grd = gx.createLinearGradient(0, g.height - (g.height * 2 * perf.history / (1.5 * max)), 0, g.height - (g.height * perf.history / (1.5 * max)));
            grd.addColorStop(0, "#00FF00");
            grd.addColorStop(1, "#FF0000");
            gx.clearRect(0, 0, g.width, g.height);
            gx.strokeStyle = "#FFFFFF";
            gx.beginPath();
            gx.moveTo(0, 0);
            gx.lineTo(0, g.height);
            gx.lineTo(g.width, g.height);
            gx.stroke();
            gx.fillRect(1.5, g.height - (g.height * (perf.history / (1.5 * max))), g.width - 1.5, g.height * (perf.history / (1.5 * max)) - 1.5);
            gx.strokeStyle = grd;
            tps.forEach((t, i) => {
              gx.beginPath();
              gx.moveTo(i * g.width / l, g.height - (g.height * ((i ? tps[i - 1] : t) / (1.5 * max))));
              gx.lineTo((i + 1) * g.width / l, g.height - (g.height * (t / (1.5 * max))));
              gx.stroke();
            });
          }
          ticks = 0;
        }, 1000);
      }
      if (!$("tick-counter")) { setTimer(createPElement()); }
      if (!$("tick-graph") && mode == 2) {
        $("tick-counter").style.top = "";
        const g = document.createElement("canvas"),
          gx = g.getContext("2d");
        g.id = "tick-graph";
        g.className = "hud stats";
        g.width = g.height = 200;
        gx.lineWidth = 3;
        gx.strokeStyle = "#FFFFFF";
        gx.beginPath();
        gx.moveTo(0, 0);
        gx.lineTo(0, g.height);
        gx.lineTo(g.width, g.height);
        gx.stroke();
        gx.fillStyle = "#FF000055";
        gx.fillRect(1.5, g.height - (g.height * (perf.critical / 400)), g.width - 1.5, g.height * (perf.critical / 400) - 1.5);
        document.getElementsByTagName("main")[0].appendChild(g);
      }
      if (mode == 1) {
        $("draw-graph")?.remove?.();
        $("tick-counter").style.top = "1%";
      }
    },

    hideTPS() {
      if ($("tick-counter")) {
        $("tick-counter").remove();
        $("tick-graph")?.remove?.();
        clearInterval(perf.timers.a);
        clearInterval(perf.timers.b);
        perf.timers = { a: null, b: null };
      }
    }
  };

function preload() {
  for (const key in nameToFilePathMap) {
    const path = nameToFilePathMap[key].src,
      extension = path.slice(path.indexOf(".") + 1),
      loadingFunction = (() => {
        switch (extension) { // Using the file extension, determine the correct loading function
          case "ttf": return loadFont;
          case "txt": return loadStrings;
          case "json": return loadJSON;
          case "xml": return loadXML;
          case "obj":
          case "stl": return loadModel;
          case "vert":
          case "frag": return loadShader;
          case "gif":
          case "png":
          case "jpg":
          default: return loadImage;
        }
      })();

    assets[key] = { name: key, asset: loadingFunction.call(null, path) }; // Call the loading function, and pass its return value to the object
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  tool.type = "floor";
  for (const p in assets) { // Get the first floor texture and set it as the current one
    if (nameToFilePathMap[p].type == "floor") {
      tool.floorTexture = p; break;
    }
  }
  tool.wallColour = "#FFFFFF";
  const tip = document.createElement("p");
  tip.id = "tip";
  tip.innerHTML = `Press <code>${controls.toggle_menu.toUpperCase()}</code> to open settings. (Click to dismiss)`;
  document.getElementsByTagName("main")[0].appendChild(tip);
  tip.addEventListener("click", e => { // Make the tip vanish, and then delete it
    !e.button && (e.target.className += "vanish", setTimeout(() => e.target.remove(), 200));
  });
}
function keyPressed() {
  switch (key) {
    case controls.toggle_menu: {
      menu.open = !menu.open;
      if (menu.open) {
        if ($("tip")) {
          $("tip").className += "vanish"; // Make the tip vanish...
          setTimeout(() => $("tip").remove(), 200); // ...and then delete it
        }
        createMenu();
      } else {
        cursor("none");
        $("menu-container").remove(); // Remove the div that holds our menu
      }
      break;
    }
    case controls.floor_mode: { tool.type = "floor"; break; }
    case controls.wall_mode: { tool.type = "wall"; break; }
    case controls.show_tps: { perf.showTPS((perf.currentMode + 1) % 3); break; }
  }
  return false; // As suggested by the docs
};
function createMenu() {
  cursor("default");
  const div = document.createElement("div");
  div.id = "menu-container";
  document.getElementsByTagName("main")[0].appendChild(div); // Add the newly created div to the document

  const tabs = ["FLOOR", "WALL", "GROUND", "CONTROLS"]; // You can add additional tabs here

  for (const index in tabs) { // For each index in the tabs array (0, 1, 2, ...)
    const tab = tabs[index], // Get the element at that index
      button = document.createElement("button"); // Create the button
    // Assign it some basic values
    button.id = `tab-${tab}`;
    // If this tab was the one that was active the last time the menu was open, set it as active.
    // Otherwise, set the first tab as active
    button.className = `tab-button ${"tab-button-active".repeat(menu.tab ? tab == menu.tab : +(index == 0))}`;
    if (!!button.className.match(/tab-button-active/)) { createTabContents(tab); } // If this is the active tab, create its contents right away
    button.textContent = tab;
    button.style.width = `calc(100% / ${tabs.length})`; // To ensure all buttons fit snuggly
    button.style.left = `calc(${index} * calc(100% / ${tabs.length}))`; // Position depends on which button we're positioning, hence the use of the index
    button.addEventListener("click", e => { // Listen for button clicks
      if (!e.button) { // e.button = 0 for left click, 1 for middle mouse, 2 for right click
        const t = e.target;
        if (t.textContent == document.getElementsByClassName("tab-button-active")[0].textContent) { return; } // If we're switching to the tab that's already active, do nothing
        document.getElementsByClassName("tab-button-active")[0].className = "tab-button"; // Get the previously active button, make it inactive and then...
        t.className = "tab-button tab-button-active"; // ...make this one active
        menu.tab = t.textContent;
        createTabContents(t.textContent);
      }
    });

    function createTabContents(tab) {
      switch (tab) { // This lets us know which tab we've navigated to
        case "FLOOR": {
          $("tab-content-container")?.remove?.(); // Remove the previous container if it exists
          const tabDiv = document.createElement("div"), // Create a new div to hold all the buttons
            p = document.createElement("p");
          tabDiv.id = "tab-content-container";
          p.id = "tab-header";
          p.textContent = "Floor textures";
          div.appendChild(tabDiv);
          tabDiv.appendChild(p);

          const floorTextures = [ // I had to hard code your concretes in here; please make the suggested changes on line 407 ASAP
            {
              color: "#595959",
              name: "concrete",
              key: "concrete"
            },
            {
              color: "#646464",
              name: "light-concrete",
              key: "lconcrete"
            }
          ];

          for (const key in nameToFilePathMap) {
            if (nameToFilePathMap[key].type != "floor") { continue; } // We only want floors
            const path = nameToFilePathMap[key].src,
              ext = path.slice(path.indexOf(".") + 1);
            if (["png", "jpg", "png"].find(v => v == ext)) { // If the extension is that of an image, then push an object containing the corresponding asset and its name to the array of floor textures
              floorTextures.push({ asset: assets[key].asset, name: path, key: key });
            }
          }
          floorTextures.forEach((t, i) => {
            const button = document.createElement("button");
            button.id = `asset-${t.name.slice(0, t.name.match(/\./) && t.name.indexOf("."))}`;
            if (!tool.floorTexture) { tool.floorTexture = t.key; } // If the floor texture isn't assigned, assign it to this texture
            button.className = `asset-option ${"asset-option-active".repeat(+(t.key == tool.floorTexture))}`; // Make this button active if it corresponds to the current floor texture being used
            if (t.color) {
              button.style.backgroundColor = t.color;
            } else {
              button.style.backgroundImage = `url(${t.name})`;
            }
            button.style.left = `${12.5 + 7.5 * (i % 10)}%`;
            tabDiv.appendChild(button);
            button.style.height = getComputedStyle(button).width; // Ensure the button is a sqaure
            button.style.top = `calc(30% + ${7.5 * Math.floor(i / 10) * (parseInt(getComputedStyle(button).width, 10) / 5)}px)`; // Ensure the spacing is equal in all four directions

            button.addEventListener("click", e => { // Listen for clicks
              if (!e.button) {
                document.getElementsByClassName("asset-option-active")[0].className = "asset-option"; // Get the previously active button, make it inactive and then...
                e.target.className = "asset-option asset-option-active"; // ...make this one active
                reverseStyling(e);
              }
              tool.floorTexture = t.key;
            });
            button.addEventListener("mousedown", e => { // Read line 356
              if (!e.button) {
                const t = e.target;
                t.style.cursor = "pointer";
                t.style.outline = "2px solid #0F0";
                t.style.backgroundColour = "#0000";
              }
            });
            function reverseStyling(e) { // Reverse the styling applied when clicking on a button (lines 243 - 245)
              if (!e.button) {
                const t = e.target;
                t.style.cursor = t.style.backgroundColour = t.style.outline = "";
              }
            }
            button.addEventListener("mouseleave", reverseStyling);
            button.addEventListener("mouseup", reverseStyling);
          });
          break;
        }
        case "WALL": {
          $("tab-content-container")?.remove?.(); // Remove the previous container if it exists
          const tabDiv = document.createElement("div"), // Create a new div to hold all the buttons
            p = document.createElement("p");
          tabDiv.id = "tab-content-container";
          p.id = "tab-header";
          p.textContent = "Wall colours";
          div.appendChild(tabDiv);
          tabDiv.appendChild(p);

          wallColors.forEach((t, i) => {
            const button = document.createElement("button");
            button.id = `wall-tint-${t}`;
            if (!tool.wallColour) { tool.wallColour = t; } // If the wall colour isn't assigned, assign it this 
            button.className = `asset-option ${"asset-option-active".repeat(+(t == tool.wallColour))}`; // Make this button active if it corresponds to the current floor texture being used
            button.style.backgroundColor = t;
            button.style.left = `${12.5 + 7.5 * (i % 10)}%`;
            tabDiv.appendChild(button);
            button.style.height = getComputedStyle(button).width; // Ensure the button is a sqaure
            button.style.top = `calc(30% + ${7.5 * Math.floor(i / 10) * (parseInt(getComputedStyle(button).width, 10) / 5)}px)`; // Ensure the spacing is equal in all four directions

            button.addEventListener("click", e => { // Listen for clicks
              if (!e.button) {
                document.getElementsByClassName("asset-option-active")[0].className = "asset-option"; // Get the previously active button, make it inactive and then...
                e.target.className = "asset-option asset-option-active"; // ...make this one active
                reverseStyling(e);
              }
              tool.wallColour = t;
            });
            button.addEventListener("mousedown", e => { // Read line 241
              if (!e.button) {
                const t = e.target;
                t.style.cursor = "pointer";
                t.style.outline = "2px solid #0F0";
                t.style.backgroundColour = "#0000";
              }
            });
            function reverseStyling(e) { // Reverse the styling applied when clicking on a button (lines 291 - 293)
              if (!e.button) {
                const t = e.target;
                t.style.cursor = t.style.backgroundColour = t.style.outline = "";
              }
            }
            button.addEventListener("mouseleave", reverseStyling);
            button.addEventListener("mouseup", reverseStyling);
          });
          break;
        }
        case "GROUND": {
          $("tab-content-container")?.remove?.(); // Remove the previous container if it exists
          const tabDiv = document.createElement("div"), // Create a new div to hold all the buttons
            p = document.createElement("p");
          tabDiv.id = "tab-content-container";
          p.id = "tab-header";
          p.textContent = "Coming soon!";
          div.appendChild(tabDiv);
          tabDiv.appendChild(p);
          break;
        }
        case "CONTROLS": {
          $("tab-content-container")?.remove?.(); // Remove the previous container if it exists
          const tabDiv = document.createElement("div"), // Create a new div to hold all the buttons
            p = document.createElement("p"),
            table = document.createElement("table"); // Make a table out of the config info
          tabDiv.id = "tab-content-container";
          p.id = "tab-header";
          p.textContent = "Controls";
          table.id = "controls";
          const neatify = key => {
            switch (key) {
              case "mouse0": return "Left Mouse";
              case "mouse1": return "Middle Mouse";
              case "mouse2": return "Right Mouse";
              default: return key.toUpperCase();
            }
          };
          for (const ctrl in controls) { // Create rows and columns out of the data
            const row = table.insertRow();
            row.className = "control-table-row";
            const cellLeft = row.insertCell(),
              cellRight = row.insertCell();
            cellLeft.className = "control-table-action";
            cellRight.className = "control-table-key";
            cellLeft.appendChild(document.createTextNode(ctrl));
            cellRight.appendChild(document.createTextNode(neatify(controls[ctrl])));
          }
          div.appendChild(tabDiv);
          tabDiv.appendChild(p);
          tabDiv.appendChild(table);
          break;
        }
      }
    }

    button.addEventListener("mousedown", e => {
      if (!e.button) {
        const t = e.target;
        // Normally, this kind of stuff should be in a CSS file, because it's not changing (these are all unchaging strings), but since
        // we only want the styling to change if the left mouse button is pressed, it's necessart to put it here
        t.style.cursor = "pointer";
        t.style.webkitTextStroke = "1px #AAA";
        t.style.color = "#AAA";
        t.style.backgroundColour = "#111";
      }
    });
    function reverseStyling(e) { // Reverse the styling applied when clicking on a button (lines 358 - 361)
      if (!e.button) {
        const t = e.target;
        t.style.cursor = t.style.webkitTextStroke = t.style.color = t.style.backgroundColour = "";
      }
    }
    button.addEventListener("mouseleave", reverseStyling);
    button.addEventListener("mouseup", reverseStyling);

    div.appendChild(button); // Add the button inside the menu div
  }
}
function draw() {
  rectMode(CORNER);
  cursor("none");
  background(backgroundcolour);
  // background(20);
  stroke(0);
  for (let i = 0; i < width / blockSize * 4; line(0, i * blockSize * 4, width, i * blockSize * 4), i++);
  for (let i = 0; i < height / blockSize * 4; line(i * blockSize * 4, 0, i * blockSize * 4, height), i++);
  imageMode(CENTER);
  angleMode(DEGREES);
  noTint();
  noFill();
  for (var i = 0; i < floors.length; i++) {
    for (var b = 0; b < floors[i].length; b++) {
      if (!floors[i][b]
        && mouseIsPressed
        && floor(mouseX / blockSize) == b
        && floor(mouseY / blockSize) == i
        && mouseButton == toP5MouseNotation[controls.place]
        && tool.type == "floor"
        && !menu.open) {
        switch (tool.floorTexture) { // This is where class and class instances could be very useful
          case assets.bunker1.name: floors[i][b] = 2; break;
          case assets.bunker2.name: floors[i][b] = 3; break;
          case assets.mansion.name: floors[i][b] = 4; break;
          case assets.house.name: floors[i][b] = 5; break;
          case assets.barn.name: floors[i][b] = 6; break;
          case assets.bank.name: floors[i][b] = 7; break;
          case assets.brick1.name: floors[i][b] = 8; break;
          case assets.brick2.name: floors[i][b] = 9; break;
          case assets.brick3.name: floors[i][b] = 10; break;
          // This is not clean! I would suggest adding a base floor texture that's a white square, and then writing code to tint it, just like walls
          // You can then redefine these two as presets
          case "concrete": floors[i][b] = 11; break;
          case "lconcrete": floors[i][b] = 12; break;
        };
      }
      noStroke();
      rectMode(CENTER);
      if (floors[i][b] >= 2) {
        if (mouseIsPressed
          && floor(mouseX / blockSize) == b
          && floor(mouseY / blockSize) == i
          && mouseButton == toP5MouseNotation[controls.destroy]
          && tool.type == "floor"
          && !menu.open) {
          floors[i][b] = 0;
        }
        // var l = false,
        //   r = false,
        //   a = false,
        //   u = false;
        // if (floors[i][b - 1] == 2) {
        //   l = true;
        // }
        // if (floors[i][b + 1] == 2) {
        //   r = true;
        // }
        // if (floors[i + 1][b] == 2) {
        //   u = true;
        // }
        // if (floors[i - 1][b] == 2) {
        //   a = true;
        // }
        translate((b + 1) * blockSize, (i + 1) * blockSize);
        switch (floors[i][b]) {
          case 2:
            image(assets.bunker1.asset, 0, 0, blockSize, blockSize);
            break;
          case 3:
            image(assets.bunker2.asset, 0, 0, blockSize, blockSize);
            break;
          case 4:
            image(assets.mansion.asset, 0, 0, blockSize, blockSize);
            break;
          case 5:
            image(assets.house.asset, 0, 0, blockSize, blockSize);
            break;
          case 6:
            image(assets.barn.asset, 0, 0, blockSize, blockSize);
            break;
          case 7:
            image(assets.bank.asset, 0, 0, blockSize, blockSize);
            break;
          case 8:
            image(assets.brick1.asset, 0, 0, blockSize, blockSize);
            break;
          case 9:
            image(assets.brick2.asset, 0, 0, blockSize, blockSize);
            break;
          case 10:
            image(assets.brick3.asset, 0, 0, blockSize, blockSize);
            break;
          case 11:
            fill(89, 89, 89);
            rect(0, 0, blockSize, blockSize);
            break;
          case 12:
            fill(100, 100, 100);
            rect(0, 0, blockSize, blockSize);
            break;
        }
        translate((b + 1) * -blockSize, (i + 1) * -blockSize);
      }
    }
  }
  noFill();
  rectMode(CORNER);
  for (let y = 0; y < walls.length; y++) {
    for (let x = 0; x < walls[y].length; x++) {
      if (!walls[y][x]
        && floor(mouseX / blockSize) == x
        && floor(mouseY / blockSize) == y
        && mouseIsPressed
        && tool.type == "wall"
        && mouseButton == toP5MouseNotation[controls.place]
        && !menu.open) { walls[y][x] = 2; }
      if (walls[y][x] == 2) {
        if (floor(mouseX / blockSize) == x
          && floor(mouseY / blockSize) == y
          && mouseIsPressed
          && tool.type == "wall"
          && mouseButton == toP5MouseNotation[controls.destroy]
          && !menu.open) { walls[y][x] = 0; }

        const left = walls[y][x - 1] == 2,
          right = walls[y][x + 1] == 2,
          above = walls[y + 1][x] == 2,
          under = walls[y - 1][x] == 2,
          connections = +left + +right + +above + +under;
        translate(x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
        tint(tool.wallColour);
        if (connections == 4) { image(assets.wall4.asset, 0, 0, blockSize, blockSize); } // Trivial case
        if (
          connections == 2 && right && left || // Two connections, left and right
          connections == 1 && (right || left) // One connection, either left or right
        ) {
          rotate(90);
          image(assets.wall1.asset, 0, 0, blockSize, blockSize);
          rotate(-90);
          translate(-(x * blockSize + blockSize / 2), -(y * blockSize + blockSize / 2));
          continue; // Make sure we don't hit any of the other if statements that test for two connections
        }
        if (
          connections == 2 && above && under || // Two connections, above and under
          connections == 1 && (above || under) // One connection, either above or under
        ) {
          image(assets.wall1.asset, 0, 0, blockSize, blockSize);
          translate(-(x * blockSize + blockSize / 2), -(y * blockSize + blockSize / 2));
          continue; // Make sure we don't hit any of the other if statements that test for two connections
        }
        if (connections == 2) { // Corner cases (the only other possibility that has 2 connections)
          const ang = right ? 270 * +!above : 90 * (2 - +above);
          // Shorthand for:

          // let ang;
          // if (right) {
          //   if (above) {
          //     ang = 270;
          //   } else {
          //     ang = 0;
          //   }
          // } else {
          //   if (above) {
          //     ang = 180;
          //   } else {
          //     ang = 90;
          //   }
          // }

          rotate(ang);
          image(assets.wall2.asset, 0, 0, blockSize, blockSize);
          rotate(-ang);
        }
        if (connections == 3) { // T-shaped wall
          const ang = {
            "0111": 0,
            "1011": 90,
            "1101": 180,
            "1110": 270
          }[`${+left}${+under}${+right}${+above}`];

          // Shorthand for:
          //
          // let ang;
          // if (!under) {
          //   ang = 270;
          // } else if (!above) {
          //   ang = 90;
          // } else if (!left) {
          //   ang = 0;
          // } else if (!right) {
          //   ang = 180;
          // }

          rotate(ang);
          image(assets.wall3.asset, 0, 0, blockSize, blockSize);
          rotate(-ang);
        }
        if (!connections) { image(assets.wall1.asset, 0, 0, blockSize, blockSize); }
        translate(-(x * blockSize + blockSize / 2), -(y * blockSize + blockSize / 2));
      }
    }
  }
  noTint();
  stroke(0);
  if (!menu.open) {
    if (tool.type == "wall") {
      rect(floor(mouseX / blockSize) * blockSize, floor(mouseY / blockSize) * blockSize, blockSize, blockSize);
    } else {
      rect(floor(mouseX / blockSize) * blockSize + blockSize / 2, floor(mouseY / blockSize) * blockSize + blockSize / 2, blockSize, blockSize);
    }

    fill(255, 20, 20);
    noStroke();

    if (tool.type == "wall") {
      ellipse(mouseX, mouseY, blockSize / 2, blockSize / 2);
    } else {
      ellipse(mouseX + blockSize / 2, mouseY + blockSize / 2, blockSize / 2, blockSize / 2);
    }
  }
  document.addEventListener("contextmenu", e => e.preventDefault());
}