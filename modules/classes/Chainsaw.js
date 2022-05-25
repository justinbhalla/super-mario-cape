import { moveLinear } from "./elements";

class Chainsaw extends Element {
  constructor(yIni) {
    super();

    this.width = 64;
    this.height = 176;
    this.xAtlas = 688;
    this.yAtlas = 304;
    this.spriteLength = 4;
    this.spriteRate = 50;
    this.xSpeed = game.scrollSpeed;
    this.yPos = yIni;
    this.wBox = 50;
    this.hBox = 168;
    this.xOff = 7;
    this.yOff = 3;
  }

  move() {
    moveLinear(this);
  }
}
