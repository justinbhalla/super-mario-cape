import { FPS_INTERVAL, CONTEXT, SCREEN, atlas } from "../../main.js";

class Element {
  constructor() {
    this.spriteFrame = 0;
    this.spriteRate = 0;
    this.spriteLength = 0;
    this.xPos = SCREEN.width;
    this.yPos = 0;
    this.xOff = 0;
    this.yOff = 0;
    this.time = 0;
  }

  drawImage() {
    const { width, height, xAtlas, yAtlas, xPos, yPos, spriteFrame } = this;
    CONTEXT.drawImage(
      atlas,
      xAtlas + spriteFrame * width,
      yAtlas,
      width,
      height,
      xPos,
      yPos,
      width,
      height
    );
  }

  drawSprite() {
    const { spriteFrame, spriteLength, spriteRate, time } = this;

    if (Math.round(time) % spriteRate === 0) {
      const lastFrame = spriteFrame === spriteLength - 1;
      this.spriteFrame += lastFrame ? -spriteFrame : 1;
    }
  }

  moveHitbox() {
    const { xPos, yPos, xOff, yOff } = this;
    this.xBox = xPos + xOff;
    this.yBox = yPos + yOff;
  }

  moveImage() {
    this.xPos -= this.xSpeed;
  }

  draw() {
    this.drawImage();
    this.drawSprite();
  }

  move() {
    this.moveHitbox();
    this.moveImage();
    this.time += FPS_INTERVAL;
  }
}

export default Element;
