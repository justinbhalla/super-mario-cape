const titleScreen = document.getElementById("title-screen");
const deathScreen = document.getElementById("death-screen");
const levelScreen = document.getElementById("level-screen");
const livesScreen = document.getElementById("lives-screen");
const loadScreen = document.getElementById("load-screen");
const overScreen = document.getElementById("over-screen");
const irisScreen = document.getElementById("iris-screen");
const passScreen = document.getElementById("pass-screen");
const endScreen = document.getElementById("end-screen");
const levelText = document.getElementById("level-text");
const livesText = document.getElementById("lives-text");
const background = document.getElementById("background-1");
const cursorSelect = document.querySelector("*");
const CANVAS = document.getElementById("canvas");
const CANVAS_W = CANVAS.width;
const CANVAS_H = CANVAS.height;
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2;
const ctx = CANVAS.getContext('2d');

var fpsInterval = 1000 / 60;
var then = Date.now();
var startTime = then;
var elapsed, now;

background.style.backgroundPositionX = 0;
background.style.backgroundPositionY = 0;
let backgroundSpeed = 5;

let gameState = "START";
let gamePause = true;
let gameLevel = 0;
let gamePlayer = new Mario();
let gameTimeouts = [];
let gameElements = [];
gameElements.move = () => {
    if (!gamePause) gameElements.forEach(e => e.move());
}

gameElements.update = () => {
    gameElements.forEach(e => e.update());
}

const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const UP_1 = 38;
const UP_2 = 32;
let leftHeld = false;
let rightHeld = false;
let downHeld = false;
let upHeld = false;

class Level {
    constructor(backgroundPosY, audio, volume) {
        this.backgroundPosY = backgroundPosY;
        this.audio = audio;//new Audio(`sounds/${audio}.mp3`);
        this.volume = volume;
    }
}

const LEVEL_1 = new Level(0, "overworld", 0.4);
const LEVEL_2 = new Level(-760, "athletic", 0.45);
const LEVEL_3 = new Level(-1520, "haunted", 0.35);
const LEVEL_4 = new Level(-2280, "castle", 0.8);
const FINALE = new Level(-3040,"ending", 0.5);
const LEVELS = [LEVEL_1, FINALE];

LEVEL_1.spawn = () => {
    spawnElement(1, new FlyingGoomba(CENTER_Y));
    spawnElement(2, new Star());

}

LEVEL_2.spawn = () => {}

LEVEL_3.spawn = () => {}

LEVEL_4.spawn = () => {}

FINALE.spawn = () => {}