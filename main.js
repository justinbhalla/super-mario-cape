import {
  screens,
  levelScene,
  deathScene,
  passScene,
  hideScreen,
} from './modules/scenes.js';
import playerControls from './modules/controls.js';
import { Mario } from './modules/elements.js';
import { LEVELS } from './modules/levels.js';
import { loading } from './modules/load.js';

const audio = document.getElementById('audio');
const cursor = document.querySelector('*').style;
const CANVAS = document.getElementById('canvas');
const CANVAS_WIDTH = CANVAS.width;
const CANVAS_HEIGHT = CANVAS.height;
const CANVAS_MID_X = CANVAS_WIDTH / 2;
const CANVAS_MID_Y = CANVAS_HEIGHT / 2;
const ctx = canvas.getContext('2d');

const game = {
  state: 'START',
  isOn: false,
  scrollSpeed: 6,
  livesStart: 3,
  lives: 3,
  level: 0,
  timeouts: [],
  hasSound: false,
};

const sounds = {
  died: new Audio('sounds/died.wav'),
  iris: new Audio('sounds/iris.wav'),
  jump: new Audio('sounds/jump.wav'),
  course: new Audio('sounds/course.wav'),
  fortress: new Audio('sounds/fortress.wav'),
  over: new Audio('sounds/over.wav'),
};

const controls = {
  LEFT_BIND: 37,
  RIGHT_BIND: 39,
  UP_1_BIND: 38,
  UP_2_BIND: 32,
  DOWN_BIND: 40,
  isLeft: false,
  isRight: false,
  isUp: false,
  isDown: false,

  reset() {
    this.isLeft = false;
    this.isRight = false;
    this.isUp = false;
    this.isDown = false;
  },
};

const player = new Mario();
const theme = new Audio('sounds/title.mp3');
const elements = [];
elements.update = () => elements.forEach((e) => e.update());
elements.move = () => elements.forEach((e) => e.move());

let fpsInterval = 1000 / 60;
let then = Date.now();
let elapsed, now;

function runGame() {
  requestAnimationFrame(runGame);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    drawBackground();
    player.move();
    elements.update();
    player.update();
    if (game.isOn) elements.move();
    if (player.isDead) deathScene();
    if (player.gotStar) passScene();
  }
}

function drawBackground() {
  if (game.isOn || game.state === 'START' || game.state === 'END') {
    let currentPos = parseInt(screens.background.backgroundPositionX);

    screens.background.backgroundPositionX = `${
      currentPos - game.scrollSpeed
    }px`;
  }

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function menuControls(e) {
  if (game.isOn) return;

  let input = e.keyCode;
  if (input === controls.UP_1_BIND || input === controls.UP_2_BIND) {
    let { state } = game;
    let isStart = state === 'START';
    let isRetry = state === 'RETRY';
    let isOver = state === 'OVER';

    if (isStart) {
      hideScreen(screens.title);
      cursor.cursor = 'none';
      theme.pause();
    } else if (isRetry) {
      hideScreen(screens.death);
      game.lives--;
    } else if (isOver) {
      hideScreen(screens.over);
      game.lives = game.livesStart;
      game.level = 0;
    }

    if (isStart || isRetry | isOver) levelScene();
  }
}

function loadGame() {
  let interval = setInterval(() => {
    if (loading.length === 0) {
      hideScreen(screens.load);
      audio.checked = false;
      screens.background.backgroundPositionX = 0;
      screens.background.backgroundPositionY = 0;
      document.addEventListener('keydown', menuControls);
      document.addEventListener('keydown', playerControls);
      document.addEventListener('keyup', playerControls);
      audio.addEventListener('change', () => {
        let isMuted = !audio.checked;
        if (!isMuted && !theme.currentTime) theme.play();
        for (let s of Object.values(sounds)) s.muted = isMuted;
        for (let l of LEVELS) l.audio.muted = isMuted;
        theme.muted = isMuted;
        game.hasSound = !isMuted;
      });
      clearInterval(interval);
      runGame();
    } else {
      console.log('loading');
    }
  }, 1);
}

window.addEventListener('load', loadGame);

export { LEVELS, Level } from './modules/levels.js';
export * as Elements from './modules/elements.js';
export { playSound } from './modules/scenes.js';
export {
  cursor,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CANVAS_MID_X,
  CANVAS_MID_Y,
  ctx,
  game,
  controls,
  player,
  elements,
  fpsInterval,
  sounds,
};
