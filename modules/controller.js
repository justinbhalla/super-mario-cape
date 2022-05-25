import { storyboard, sound, player } from "../main.js";

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
    let { keyCode, type } = event;
    let { UP_1_KEY, UP_2_KEY } = this;
    let menuClicked = type === "click";
    let menuPressed = keyCode === UP_1_KEY || keyCode === UP_2_KEY;

    if (menuClicked || menuPressed) {
      switch (storyboard.state) {
        case "START":
          storyboard.dispatch("prepare", ["play", 1500]);
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
          sound.sfx.capeJump.currentTime = 0;
          sound.play("capeJump");
        } else if (!isHeld) {
          jumpFlag = false;
        }

        controller.pressedUp = isHeld;
        break;
    }
  },
};

export default controller;
