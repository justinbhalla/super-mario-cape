import { game, storyboard } from "../main.js";

const controller = {
  LEFT_KEY: 37,
  RIGHT_KEY: 39,
  UP_1_KEY: 38,
  UP_2_KEY: 32,
  DOWN_KEY: 40,
  pressedLeft: false,
  pressedRight: false,
  pressedUp: false,
  pressedDown: false,

  reset() {
    this.pressedLeft = false;
    this.pressedRight = false;
    this.pressedUp = false;
    this.pressedDown = false;
  },

  onMenuInput(event) {
    if (game.isPlaying) return;

    let { keyCode, type } = event;
    let { UP_1_KEY, UP_2_KEY } = this;
    let menuClicked = type === "click";
    let menuPressed = keyCode === UP_1_KEY || keyCode === UP_2_KEY;

    if (menuClicked || menuPressed) {
      switch (game.state) {
        case "START":
          storyboard.showTransition();
          // storyboard.showTutorial();
          break;
        case "RETRY":
          // hideScreen(screens.retry);
          // game.lives--;
          //levelScene();
          break;
        case "OVER":
          // hideScreen(screens.failure);
          // game.lives = game.livesStart;
          // game.level = 0;
          // levelScene();
          break;
        default:
          break;
      }
    }
  },

  onPlayerInput(event) {
    if (!game.isPlaying) return;

    let { LEFT_KEY, RIGHT_KEY, DOWN_KEY, UP_1_KEY, UP_2_KEY } = controller;
    let isHeld = event.type === "keydown";
    let jumpFlag = false;

    switch (event.keyCode) {
      case LEFT_KEY:
        controller.pressedLeft = isHeld;
        break;
      case RIGHT_KEY:
        controller.pressedRight = isHeld;
        break;
      case DOWN_KEY:
        controller.pressedDown = isHeld;
        break;
      case UP_1_KEY:
      case UP_2_KEY:
        if (!jumpFlag && isHeld) {
          jumpFlag = true;
          // sounds.jump.currentTime = 0;
          // playSound(sounds.jump);
        } else if (!isHeld) {
          jumpFlag = false;
        }

        controller.pressedUp = isHeld;
        break;
    }
  },
};

export { controller as default };
