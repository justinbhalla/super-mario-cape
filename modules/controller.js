import { game, controller } from '../main.js';

export default function playerControls(e) {
  if (!game.isOn) return;

  let isHeld = e.type === 'keydown';
  let jumpFlag = false;

  switch (e.keyCode) {
    case controller.LEFT_KEY:
      controller.pressedLeft = isHeld;
      break;
    case controller.RIGHT_KEY:
      controller.pressedRight = isHeld;
      break;
    case controller.DOWN_KEY:
      controller.pressedDown = isHeld;
      break;
    case controller.UP_1_KEY:
    case controller.UP_2_KEY:
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
}
