import { Element } from "../../main.js";

class BigBubble extends Element {
  constructor(yIni) {
    super();

    this.width = 224;
    this.height = 240;
    this.xAtlas = 0;
    this.yAtlas = 480;
    this.spriteLength = 2;
    this.spriteRate = 250;
    this.yPos = yIni;
    this.xSpeed = 8;
    this.ySpeed = 8;
    this.wBox = 184;
    this.hBox = 200;
    this.xOff = 20;
    this.yOff = 20;
  }

  move() {
    super.move();
    if (this.yPos + this.hBox > SCREEN.height || this.yPos < 0)
      this.ySpeed *= -1;
    this.xPos -= this.xSpeed;
    this.yPos += this.ySpeed;
  }
}

export default BigBubble;
