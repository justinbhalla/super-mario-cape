import {
  cursor,
  CANVAS_HEIGHT,
  CANVAS_MID_X,
  CANVAS_MID_Y,
  game,
  controls,
  player,
  elements,
  LEVELS,
  Level,
} from '../main.js';

const screens = {
  livesText: document.getElementById('screen-hud__lives-text'),
  levelText: document.getElementById('screen-level__text'),
  background: document.getElementById('background').style,
  retry: document.getElementById('screen-retry').style,
  hud: document.getElementById('screen-hud').style,
  failure: document.getElementById('screen-failure').style,
  success: document.getElementById('screen-success'),
  level: document.getElementById('screen-level').style,
  outro: document.getElementById('screen-outro').style,
  intro: document.getElementById('screen-intro').style,
  transition: document.getElementById('screen-transition').style,
  loading: document.getElementById('screen-loading').style,
};

function levelScene() {
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
  elements.length = 0;
  player.isDead = false;
  player.gotStar = false;
  player.reset();

  setTimeout(() => {
    hideScreen(screens.level);
    currentLevel.spawn();
    game.isOn = true;
  }, 1500);
}

function deathScene() {
  if (!game.isOn) return;
  game.isOn = false;
  game.state = 'DEAD';
  LEVELS[game.level].audio.pause();
  playSound(sounds.died);
  controls.reset();

  setTimeout(() => {
    let yPeak = player.yPos - 200;
    let yFlag = true;
    let animate = setInterval(() => {
      let yPos = player.yPos;

      if ((yPos > CANVAS_HEIGHT && !game.hasSound) || sounds.died.ended) {
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
        player.yPos -= 10;
      } else if (yPos < yPeak && yFlag) {
        yFlag = false;
      } else {
        player.yPos += 12.5;
      }
    }, 10);
  }, 500);
}

function passScene() {
  if (!game.isOn) return;
  game.isOn = false;
  game.state = 'PASS';
  LEVELS[game.level].audio.pause();
  game.level++;
  controls.reset();
  elements.length = 0;

  let gameWon = game.level === LEVELS.length;
  let type = gameWon ? 'fortress' : 'course';
  playSound(sounds[type]);
  screens.success.innerText = `${type} Complete`;

  hideScreen(screens.background);
  showScreen(screens.success.style);

  setTimeout(() => {
    hideScreen(screens.success.style);
    showScreen(screens.transition);
    showScreen(screens.background);
    playSound(sounds.iris);

    setTimeout(() => {
      hideScreen(screens.transition);

      if (gameWon) {
        endScene();
      } else {
        game.lives = game.livesStart;
        levelScene();
      }
    }, 1500);
  }, 8200);
}

function endScene() {
  showScreen(screens.outro);
  hideScreen(screens.hud);
  player.xPos = CANVAS_MID_X - player.width / 2 - 15;
  player.yPos = CANVAS_MID_Y + 75;
  game.state = 'END';
  game.scrollSpeed = 2;
  let finale = new Level('ending', 'images/end.jpg', 'ending', 0.5);
  screens.background.backgroundImage = finale.background;
  playSound(finale.audio);
  cursor.cursor = 'auto';
}

function showScreen(screen) {
  switch (screen) {
    case screens.background:
      screens.background.animation = 'fadein 0.1s forwards';
      break;
    case screens.transition:
      screens.transition.borderLeftWidth = '510px';
      screens.transition.borderRightWidth = '510px';
      screens.transition.borderBottomWidth = '380px';
      screens.transition.borderTopWidth = '380px';
      screens.transition.transition = 'ease-in 1s';
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
    case screens.background:
      screens.background.animation = 'fadeout 2.5s forwards';
      break;
    case screens.transition:
      screens.transition.borderWidth = '0px';
      screens.transition.transition = 'none';
      break;
    default:
      screen.display = 'none';
      break;
  }
}

function playSound(sound) {
  if (game.hasSound) sound.play();
}

export {
  screens,
  levelScene,
  deathScene,
  passScene,
  endScene,
  showScreen,
  hideScreen,
  playSound,
};
