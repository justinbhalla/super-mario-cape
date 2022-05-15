import { PIXELS, game, controller, elements, LEVELS, Level } from "../main.js";

const canvas = document.getElementById("canvas");
const iris = document.getElementById("iris");
const fade = document.getElementById("fade");
const menu = document.getElementById("menu");
const tutorial = document.getElementById("tutorial");
const loader = document.getElementById("loader");
const text = document.getElementById("text");

function changeScene() {
  const { state } = game;
  changeState("TRANSITION");
  resetSound();

  switch (state) {
    case "LOADING":
      showMenu();
      break;
    case "START":
      showScreen(fade);
      playSound(game.sfx.coin);
      setTimeout(showTutorial, 1500);
      break;
    case "TUTORIAL":
      showScreen(fade);
      playSound(game.sfx.coin);
      setTimeout(showLevel, 1500);
      break;
  }
}

function showMenu() {
  changeState("START");
  changeBackground("menu");
  hideScreen(loader);
}

function showTutorial() {
  changeState("TUTORIAL");
  changeBackground("athletic");
  hideScreen(menu);
  hideScreen(fade);
  showScreen(tutorial);
  playSound(game.sfx.worldClear);
}

function showLevel() {
  changeState("LEVEL");
  hideScreen(fade);
  hideScreen(tutorial);
  showScreen(text);

  setTimeout(() => {
    changeState("PLAY");
    hideScreen(text);
  }, 1500);
}

function changeState(state) {
  switch (state) {
    case "START":
      game.isScrolling = true;
      game.background.style.backgroundPositionX = 0;
      break;
    case "TUTORIAL":
      game.isPlaying = true;
      elements.player.reset();
      break;
    case "TRANSITION":
      game.isPlaying = false;
      game.isScrolling = true;
      break;
    case "LEVEL":
      game.isPlaying = false;
      game.isScrolling = false;
      elements.player.reset();
      controller.reset();
      break;
    case "PLAY":
      game.isPlaying = true;
      game.isScrolling = true;
      game.timeouts.forEach((t) => clearTimeout(t));
      elements.enemies.length = 0;
      elements.player.isDead = false;
      elements.player.gotStar = false;
      const level = LEVELS[game.level];
      level.spawn();
      break;
  }

  game.state = state;
}

function showScreen(screen) {
  switch (screen) {
    case fade:
      screen.classList.add("fade-active");
      break;
    case text:
      const { name } = LEVELS[game.level];
      screen.innerText = `Level ${game.level + 1} - ${name}`;
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

export { changeScene };
