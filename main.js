import Element from "./modules/classes/Element.js";
import SuperKoopa from "./modules/classes/SuperKoopa.js";
import Parakoopa from "./modules/classes/Parakoopa.js";
import YellowParakoopa from "./modules/classes/YellowParakoopa.js";
import SPAWNER from "./modules/spawner.js";
import background from "./modules/background.js";
import foreground from "./modules/foreground.js";
import sound from "./modules/sound.js";
import storyboard from "./modules/storyboard.js";
import controller from "./modules/controller.js";
import loading from "./modules/load.js";
import Mario from "./modules/classes/Mario.js";
import Level from "./modules/classes/Level.js";
import OVERWORLD from "./modules/levels/overworld.js";

const FPS_INTERVAL = 1000 / 60;
const CANVAS = document.getElementById("canvas");
const CONTEXT = CANVAS.getContext("2d");

const SCREEN = {
  width: CANVAS.width,
  height: CANVAS.height,
  centerX: CANVAS.width / 2,
  centerY: CANVAS.height / 2,
};

const player = new Mario();
const elements = {
  list: [],
  timeouts: [],

  move() {
    this.list.forEach((element) => element.move());
  },

  draw() {
    this.list.forEach((element) => element.draw());
  },
};

const levels = {
  index: 0,
  list: [OVERWORLD],

  getCurrent() {
    return this.list[this.index];
  },

  goNext() {
    this.index += 1;
  },
};

const atlas = new Image(972, 736);
atlas.src = "images/atlas/atlas.png";
let then = Date.now();
let elapsed, now;

function runGame() {
  requestAnimationFrame(runGame);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > FPS_INTERVAL) {
    then = now - (elapsed % FPS_INTERVAL);

    if (background.enabled) background.scroll();

    if (storyboard.canPlay()) {
      player.move();
      elements.move();

      if (storyboard.passedTutorial()) {
        storyboard.dispatch("play", [1500]);
      }
    }

    clearCanvas();
    // we're drawing mario on all screens
    if (storyboard.state !== "DEATH") player.draw();
    elements.draw();
  }
}

function clearCanvas() {
  CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

function setGame() {
  let interval = setInterval(() => {
    if (loading.length === 0) {
      setAudio();
      setControls();
      runGame();
      storyboard.dispatch("play", []);
      clearInterval(interval);
    }
  }, 250);
}

function setAudio() {
  const soundBtn = document.getElementById("sound-btn");
  soundBtn.addEventListener("click", () => {
    sound.toggle();
    const { enabled } = sound;
    sound.music.title[enabled ? "play" : "pause"]();
    soundBtn.value = `Sound: ${enabled ? "On!" : "Off"}`;
  });
}

function setControls() {
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", (event) => {
    if (storyboard.state === "START") {
      controller.onMenuInput(event);
    }
  });

  const callback = (event) => {
    const { state } = storyboard;
    if (state === "LEVEL" || state === "TUTORIAL") {
      controller.onPlayerInput(event);
    }
  };

  document.addEventListener("keydown", callback);
  document.addEventListener("keyup", callback);
}

window.addEventListener("load", setGame);

export {
  FPS_INTERVAL,
  elements,
  atlas,
  background,
  foreground,
  sound,
  SCREEN,
  CONTEXT,
  SPAWNER,
  controller,
  storyboard,
  Element,
  player,
  Level,
  levels,
  Parakoopa,
  SuperKoopa,
  YellowParakoopa,
  Mario,
};
