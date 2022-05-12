import { PIXELS, game, controller, elements, LEVELS, Level } from "../main.js";

const canvas = document.getElementById("canvas");
const iris = document.getElementById("iris");
const fade = document.getElementById("fade");
const menu = document.getElementById("menu");
const tutorial = document.getElementById("tutorial");
const loader = document.getElementById("loader");

const storyboard = {
  showMenu() {
    changeState("START");
    changeBackground("menu");
    hideScreen(loader);
  },

  showTutorial() {
    changeState("TUTORIAL");
    changeBackground("athletic");
    hideScreen(menu);
    hideScreen(fade);
    showScreen(tutorial);
    playSound(game.sfx.worldClear);
  },

  showLevel() {
    changeState("LEVEL");
    hideScreen(fade);
    hideScreen(tutorial);
  },

  showTransition() {
    resetSound();

    switch (game.state) {
      case "START":
        showScreen(fade);
        playSound(game.sfx.coin);
        setTimeout(this.showTutorial, 1500);
        break;
      case "TUTORIAL":
        showScreen(fade);
        playSound(game.sfx.coin);
        setTimeout(this.showLevel, 1500);
        break;
    }

    changeState("TRANSITION");
  },
};

function changeState(state) {
  switch (state) {
    case "START":
      game.state = state;
      game.isScrolling = true;
      game.background.style.backgroundPositionX = 0;
      break;
    case "TUTORIAL":
      game.state = state;
      game.isPlaying = true;
      elements.player.reset();
      break;
    case "TRANSITION":
      game.state = state;
      game.isPlaying = false;
      game.isScrolling = true;
      break;
    case "LEVEL":
      game.state = state;
      game.isPlaying = true;
      game.isScrolling = true;
      elements.player.reset();
      controller.reset();
      break;
  }
}

function showScreen(screen) {
  switch (screen) {
    case fade:
      screen.classList.add("fade-active");
      break;
  }

  screen.classList.remove("hidden");
}

function hideScreen(screen) {
  switch (screen) {
    case fade:
      screen.classList.remove("fade-active");
      break;
  }

  screen.classList.add("hidden");
}

function playSound(sound) {
  if (game.hasSound) sound.play();
}

function resetSound() {
  if (!game.hasSound) return;

  let { music, sfx } = game;
  let sounds = [...Object.values(music), ...Object.values(sfx)];
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

function changeBackground(background) {
  game.background.classList = [];
  game.background.classList.toggle(`bg-${background}`);
}

export { storyboard };
