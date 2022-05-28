import { SCREEN, storyboard, controller, Element } from "../../main.js";

class Mario extends Element {
  constructor() {
    super();

    this.xAtlas = 352;
    this.yAtlas = 180;
    this.width = 116;
    this.height = 124;
    this.spriteFrame = 0;

    this.xOff = 20;
    this.yOff = 38;
    this.wBox = 92;
    this.hBox = 76;

    this.lives = 3;

    this.xSpeed = 10;
    this.ySpeed = 10;
    this.gravity = 7;
    this.wind = 3;
    this.isDead = false;
    this.gotStar = false;
    this.isJumping = true;
    this.passedTutorial = false;
  }

  drawSprite() {
    if (this.isJumping) this.spriteFrame = 1;
    if (!controller.pressedUp) this.spriteFrame = 0;
    if (controller.pressedDown) this.spriteFrame = 2;
  }

  moveImage() {
    const { pressedLeft, pressedRight, pressedUp, pressedDown } = controller;
    const hasFallen = this.yPos + this.height / 2 > SCREEN.height;

    if (pressedLeft) this.moveLeft();
    if (pressedRight) this.moveRight();
    if (pressedDown) this.dive();
    if (pressedUp && !this.isJumping) this.jump();
    if (!pressedUp) this.isJumping = false;
    this.yPos += this.gravity;

    if (hasFallen && storyboard.state === "TUTORIAL") this.reset();
    else if (hasFallen) storyboard.dispatch("death", []);
    // else if (hasFallen) this.isDead = true;
  }

  moveRight() {
    const { state } = storyboard;
    const offset = state === "TUTORIAL" ? 2 : 1;
    const hasSpace = this.xPos + this.width / offset < SCREEN.width;
    if (hasSpace) this.xPos += this.xSpeed + this.wind;
    if (state === "TUTORIAL" && !hasSpace) this.passedTutorial = true;
  }

  moveLeft() {
    const hasSpace = this.xPos >= 0;
    if (hasSpace) this.xPos -= this.xSpeed - this.wind;
  }

  dive() {
    this.yPos += this.ySpeed + this.gravity;
  }

  jump() {
    this.isJumping = true;
    let count = 0;

    let interval = setInterval(() => {
      if (count > 15) {
        clearInterval(interval);
        this.isJumping = false;
        count = 0;
      } else if (this.yPos > 0) {
        this.yPos -= this.ySpeed;
      }

      count += 1;
    }, 10);
  }

  reset() {
    this.xPos = 100;
    this.yPos = 100;
  }
}

export default Mario;
