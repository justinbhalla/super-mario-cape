import { storyboard } from "./modules/scenes.js";
import controller from "./modules/controller.js";
import { Mario } from "./modules/elements.js";
import { loading } from "./modules/load.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let then = Date.now();
let elapsed, now;

const PIXELS = {
  width: canvas.width,
  height: canvas.height,
  xMid: canvas.width / 2,
  yMid: canvas.height / 2,
};

const game = {
  FPS_INTERVAL: 1000 / 60,
  isScrolling: false,
  isPlaying: false,
  state: "LOADING",
  scrollSpeed: 6,
  livesStart: 3,
  lives: 3,
  level: 0,
  timeouts: [],
  hasSound: false,

  background: document.getElementById("background"),

  music: {
    title: new Audio("audio/music/title.mp3"),
    yoshisIsland: new Audio("audio/music/yoshis-island.mp3"),
  },

  sfx: {
    worldClear: new Audio("audio/sfx/world-clear.mp3"),
    lostALife: new Audio("audio/sfx/lost-a-life.wav"),
    coin: new Audio("audio/sfx/coin.wav"),
    irisOut: new Audio("audio/sfx/iris-out.wav"),
    capeJump: new Audio("audio/sfx/cape-jump.wav"),
    courseClear: new Audio("audio/sfx/course-clear.wav"),
    fortressClear: new Audio("audio/sfx/fortress-clear.wav"),
    messageBlock: new Audio("audio/sfx/message-block.wav"),
    gameOver: new Audio("audio/sfx/game-over.wav"),
  },
};

const elements = {
  player: new Mario(),
  enemies: [],

  update() {
    let elements = [this.player, ...this.enemies];
    elements.forEach((element) => {
      element.draw();
      element.move();
    });
  },
};

function runGame() {
  requestAnimationFrame(runGame);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > game.FPS_INTERVAL) {
    then = now - (elapsed % game.FPS_INTERVAL);

    if (game.isScrolling) scrollBackground();
    clearCanvas();
    elements.update();

    let { player } = elements;
    // if (player.isDead) storyboard.showDeathScene();
    if (player.passedTutorial && game.state === "TUTORIAL") {
      storyboard.showLevel();
    }

    if (player.gotStar) passScene();
  }
}

function scrollBackground() {
  const { background } = game;
  const currentX = parseInt(background.style.backgroundPositionX);

  game.background.style.backgroundPositionX = `${
    currentX - game.scrollSpeed
  }px`;
}

function clearCanvas() {
  context.clearRect(0, 0, PIXELS.width, PIXELS.height);
}

function setGame() {
  let interval = setInterval(() => {
    if (loading.length === 0) {
      setAudio();
      setControls();
      runGame();
      storyboard.showMenu();
      clearInterval(interval);
    }
  }, 250);
}

function setAudio() {
  const soundBtn = document.getElementById("sound-btn");
  soundBtn.addEventListener("click", () => {
    let { hasSound } = game;
    game.hasSound = !hasSound;
    game.music.title[hasSound ? "pause" : "play"]();
    soundBtn.value = `Sound: ${hasSound ? "Off" : "On!"}`;
  });
}

function setControls() {
  let { onMenuInput, onPlayerInput } = controller;
  const startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", onMenuInput);
  document.addEventListener("keydown", onPlayerInput);
  document.addEventListener("keyup", onPlayerInput);
}

window.addEventListener("load", setGame);

export { LEVELS, Level } from "./modules/levels.js";
export * as Enemies from "./modules/elements.js";
export { PIXELS, context, game, controller, storyboard, elements };
