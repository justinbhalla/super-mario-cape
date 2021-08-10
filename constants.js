const titleScreen = document.getElementById("title-screen");
const deathScreen = document.getElementById("death-screen");
const passScreen = document.getElementById("pass-screen");
const background = document.getElementById("background-1");
const CANVAS = document.getElementById("canvas");
const CANVAS_W = CANVAS.width;
const CANVAS_H = CANVAS.height;
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2;
const ctx = CANVAS.getContext('2d');

background.style.backgroundPositionX = 0;
background.style.backgroundPositionY = 0;
const BG_SPEED = 5;

let gameState = "START";
let gamePause = true;
let gamePlayer = new Mario();
let gameLevel = -1;
let gameElements = [];
gameElements.move = () => {
    gameElements.forEach(e => e.move());
}

gameElements.update = () => {
    gameElements.forEach(e => e.update());
}

const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const UP = 38;
const ENTER = 13;
let leftHeld = false;
let rightHeld = false;
let downHeld = false;
let upHeld = false;

class Level {
    constructor(audio, volume) {
        this.audio = audio;//new Audio(`sounds/${audio}.mp3`);
        this.volume = volume;
    }
}

const LEVEL_1 = new Level("overworld", 0.4);
const LEVEL_2 = new Level("athletic", 0.45);
const LEVEL_3 = new Level("haunted", 0.35);
const LEVEL_4 = new Level("castle", 0.8);
const FINALE = new Level("ending", 0.5);
const LEVELS = [LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4];

LEVEL_1.spawn = () => {spawnElement(new Star())}
LEVEL_2.spawn = () => {}
LEVEL_3.spawn = () => {}
LEVEL_4.spawn = () => {}