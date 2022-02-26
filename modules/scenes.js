import { PIXELS, game, controller, elements, LEVELS, Level } from '../main.js';

const screens = {
  canvas: document.getElementById('canvas').style,
  livesText: document.getElementById('screen-hud__lives-text'),
  levelText: document.getElementById('screen-level__text'),
  background: document.getElementById('background').style,
  map: document.getElementById('screen-map').style,
  retry: document.getElementById('screen-retry').style,
  hud: document.getElementById('screen-hud').style,
  failure: document.getElementById('screen-failure').style,
  success: document.getElementById('screen-success'),
  level: document.getElementById('screen-level').style,
  outro: document.getElementById('screen-outro').style,
  intro: document.getElementById('screen-intro').style,
  tutorial: document.getElementById('screen-tutorial').style,
  transitionIris: document.getElementById('screen-transition-iris').style,
  transitionFade: document.getElementById('screen-transition-fade').style,
  loading: document.getElementById('screen-loading').style,
};

const storyboard = {
  showSceneIntro() {
    changeState('START');
    hideScreen(screens.loading);
  },

  showSceneTutorial() {
    hideScreen(screens.intro);
    showScreen(screens.transitionFade);
    resetSound();
    playSound(game.sfx.coin);

    setTimeout(() => {
      changeState('TUTORIAL');
      hideScreen(screens.transitionFade);
      showScreen(screens.tutorial);
      screens.background.backgroundImage = `url(images/levels/bg-athletic.jpg)`;
      playSound(game.sfx.worldClear);
    }, 1500);
  },

  showSceneMap() {
    changeState('MAP');
    hideScreen(screens.tutorial);
    showScreen(screens.transitionFade);
    resetSound();
    controller.reset();

    setTimeout(() => {
      hideScreen(screens.background);
      hideScreen(screens.transitionFade);
      hideScreen(screens.canvas);
      showScreen(screens.map);
    }, 1500);
  },

  levelScene() {
    showScreen(screens.hud);
    showScreen(screens.level);
    let currentLevel = LEVELS[game.level];
    screens.background.backgroundImage = currentLevel.background;
    levelText.innerText = `Level ${game.level + 1} — ${currentLevel.name}`;
    livesText.innerText = game.lives;
    currentLevel.audio.currentTime = 0;
    playSound(currentLevel.audio);
    game.timeouts.forEach((t) => clearTimeout(t));
    game.state = 'PLAY';
    elements.enemies.length = 0;
    elements.player.isDead = false;
    elements.player.gotStar = false;
    elements.player.reset();

    setTimeout(() => {
      hideScreen(screens.level);
      currentLevel.spawn();
      game.isPlaying = true;
    }, 1500);
  },

  showDeathScene() {
    if (!game.isPlaying) return;
    game.isPlaying = false;
    game.state = 'DEAD';
    LEVELS[game.level].audio.pause();
    playSound(sounds.died);
    controller.reset();

    setTimeout(() => {
      let yPeak = elements.player.yPos - 200;
      let yFlag = true;
      let animate = setInterval(() => {
        let yPos = elements.player.yPos;

        if ((yPos > PIXELS.height && !game.hasSound) || sounds.died.ended) {
          if (!game.lives) {
            hideScreen(screens.hud);
            showScreen(screens.failure);
            playSound(sounds.over);

            if (!game.hasSound) {
              game.state = 'OVER';
            } else {
              sounds.over.onended = () => {
                game.state = 'OVER';
              };
            }
          } else {
            showScreen(screens.retry);
            game.state = 'RETRY';
          }

          clearInterval(animate);
        } else if (yPos > yPeak && yFlag) {
          elements.player.yPos -= 10;
        } else if (yPos < yPeak && yFlag) {
          yFlag = false;
        } else {
          elements.player.yPos += 12.5;
        }
      }, 10);
    }, 500);
  },

  passScene() {
    if (!game.isPlaying) return;
    game.isPlaying = false;
    game.state = 'PASS';
    LEVELS[game.level].audio.pause();
    game.level++;
    controller.reset();
    elements.enemies.length = 0;

    let gameWon = game.level === LEVELS.length;
    let type = gameWon ? 'fortress' : 'course';
    playSound(sounds[type]);
    screens.success.innerText = `${type} Complete`;

    hideScreen(screens.background);
    showScreen(screens.success.style);

    setTimeout(() => {
      hideScreen(screens.success.style);
      showScreen(screens.transitionIris);
      showScreen(screens.background);
      playSound(sounds.iris);

      setTimeout(() => {
        hideScreen(screens.transitionIris);

        if (gameWon) {
          endScene();
        } else {
          game.lives = game.livesStart;
          levelScene();
        }
      }, 1500);
    }, 8200);
  },

  endScene() {
    showScreen(screens.outro);
    hideScreen(screens.hud);
    elements.player.xPos = PIXELS.xMid - elements.player.width / 2 - 15;
    elements.player.yPos = PIXELS.yMid + 75;
    game.state = 'END';
    game.scrollSpeed = 2;
    let finale = new Level('ending', 'images/end.jpg', 'ending', 0.5);
    screens.background.backgroundImage = finale.background;
    playSound(finale.audio);
    cursor.cursor = 'auto';
  },
};

function changeState(state) {
  switch (state) {
    case 'START':
      game.state = state;
      game.isScrolling = true;
      screens.background.backgroundPositionX = 0;
      break;
    case 'TUTORIAL':
      game.state = state;
      game.isPlaying = true;
      elements.player.reset();
      break;
    case 'MAP':
      game.state = state;
      game.isPlaying = false;
      game.isScrolling = false;
      elements.player.passedTutorial = false;
      break;
  }
}

function showScreen(screen) {
  switch (screen) {
    case screens.map:
      screen.display = 'block';
      screens.map.animation = 'fadein 0.5s forwards';
      break;
    case screens.background:
      screens.background.animation = 'fadein 0.1s forwards';
      break;
    case screens.transitionFade:
      screens.transitionFade.opacity = '100%';
      screens.transitionFade.transition = 'ease-in 1s';
      break;
    case screens.transitionIris:
      screens.transitionIris.borderLeftWidth = '510px';
      screens.transitionIris.borderRightWidth = '510px';
      screens.transitionIris.borderBottomWidth = '380px';
      screens.transitionIris.borderTopWidth = '380px';
      screens.transitionIris.transition = 'ease-in 1s';
      break;
    case screens.hud:
      screen.display = 'flex';
      break;
    default:
      screen.display = 'block';
      break;
  }
}

function hideScreen(screen) {
  switch (screen) {
    // case screens.background:
    //   screens.background.animation = 'fadeout 2.5s forwards';
    //   break;
    case screens.transitionFade:
      screens.transitionFade.opacity = '0%';
      screens.transitionFade.transition = 'none';
    case screens.transitionIris:
      screens.transitionIris.borderWidth = '0px';
      screens.transitionIris.transition = 'none';
      break;
    default:
      screen.display = 'none';
      break;
  }
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

export { screens, storyboard };
