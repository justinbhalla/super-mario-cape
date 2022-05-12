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
    showScreen(fade);
    resetSound();
    playSound(game.sfx.coin);

    setTimeout(() => {
      changeState("TUTORIAL");
      changeBackground("athletic");
      hideScreen(menu);
      hideScreen(fade);
      showScreen(tutorial);
      playSound(game.sfx.worldClear);
    }, 1500);
  },

  // levelScene() {
  //   showScreen(screens.hud);
  //   showScreen(screens.level);
  //   let currentLevel = LEVELS[game.level];
  //   screens.background.backgroundImage = currentLevel.background;
  //   levelText.innerText = `Level ${game.level + 1} — ${currentLevel.name}`;
  //   livesText.innerText = game.lives;
  //   currentLevel.audio.currentTime = 0;
  //   playSound(currentLevel.audio);
  //   game.timeouts.forEach((t) => clearTimeout(t));
  //   game.state = "PLAY";
  //   elements.enemies.length = 0;
  //   elements.player.isDead = false;
  //   elements.player.gotStar = false;
  //   elements.player.reset();

  //   setTimeout(() => {
  //     hideScreen(screens.level);
  //     currentLevel.spawn();
  //     game.isPlaying = true;
  //   }, 1500);
  // },

  // showDeathScene() {
  //   if (!game.isPlaying) return;
  //   game.isPlaying = false;
  //   game.state = "DEAD";
  //   LEVELS[game.level].audio.pause();
  //   playSound(sounds.died);
  //   controller.reset();

  //   setTimeout(() => {
  //     let yPeak = elements.player.yPos - 200;
  //     let yFlag = true;
  //     let animate = setInterval(() => {
  //       let yPos = elements.player.yPos;

  //       if ((yPos > PIXELS.height && !game.hasSound) || sounds.died.ended) {
  //         if (!game.lives) {
  //           hideScreen(screens.hud);
  //           showScreen(screens.failure);
  //           playSound(sounds.over);

  //           if (!game.hasSound) {
  //             game.state = "OVER";
  //           } else {
  //             sounds.over.onended = () => {
  //               game.state = "OVER";
  //             };
  //           }
  //         } else {
  //           showScreen(screens.retry);
  //           game.state = "RETRY";
  //         }

  //         clearInterval(animate);
  //       } else if (yPos > yPeak && yFlag) {
  //         elements.player.yPos -= 10;
  //       } else if (yPos < yPeak && yFlag) {
  //         yFlag = false;
  //       } else {
  //         elements.player.yPos += 12.5;
  //       }
  //     }, 10);
  //   }, 500);
  // },

  // passScene() {
  //   if (!game.isPlaying) return;
  //   game.isPlaying = false;
  //   game.state = "PASS";
  //   LEVELS[game.level].audio.pause();
  //   game.level++;
  //   controller.reset();
  //   elements.enemies.length = 0;

  //   let gameWon = game.level === LEVELS.length;
  //   let type = gameWon ? "fortress" : "course";
  //   playSound(sounds[type]);
  //   screens.success.innerText = `${type} Complete`;

  //   hideScreen(screens.background);
  //   showScreen(screens.success.style);

  //   setTimeout(() => {
  //     hideScreen(screens.success.style);
  //     showScreen(screens.transitionIris);
  //     showScreen(screens.background);
  //     playSound(sounds.iris);

  //     setTimeout(() => {
  //       hideScreen(screens.transitionIris);

  //       if (gameWon) {
  //         endScene();
  //       } else {
  //         game.lives = game.livesStart;
  //         levelScene();
  //       }
  //     }, 1500);
  //   }, 8200);
  // },

  // endScene() {
  //   showScreen(screens.outro);
  //   hideScreen(screens.hud);
  //   elements.player.xPos = PIXELS.xMid - elements.player.width / 2 - 15;
  //   elements.player.yPos = PIXELS.yMid + 75;
  //   game.state = "END";
  //   game.scrollSpeed = 2;
  //   let finale = new Level("ending", "images/end.jpg", "ending", 0.5);
  //   screens.background.backgroundImage = finale.background;
  //   playSound(finale.audio);
  //   cursor.cursor = "auto";
  // },
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
