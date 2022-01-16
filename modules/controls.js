import { game, controls, sounds, playSound } from '../main.js';

export default function playerControls(e) {
  if (!game.isOn) return;

  let isHeld = e.type === 'keydown';
  let jumpFlag = false;

  switch (e.keyCode) {
    case controls.LEFT_BIND:
      controls.isLeft = isHeld;
      break;
    case controls.RIGHT_BIND:
      controls.isRight = isHeld;
      break;
    case controls.DOWN_BIND:
      controls.isDown = isHeld;
      break;
    case controls.UP_1_BIND:
    case controls.UP_2_BIND:
      if (!jumpFlag && isHeld) {
        jumpFlag = true;
        sounds.jump.currentTime = 0;
        playSound(sounds.jump);
      } else if (!isHeld) {
        jumpFlag = false;
      }

      controls.isUp = isHeld;
      break;
  }
}
