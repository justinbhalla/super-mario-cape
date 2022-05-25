import { moveLinear } from "./elements";

class BooBuddy extends Element {
  constructor(yIni) {
    super();

    this.width = 64;
    this.height = 64;
    this.xAtlas = 248 + 2 * this.width * Math.round(Math.random() * 2);
    this.yAtlas = 0;
    this.spriteLength = 2;
    this.spriteRate = 150;
    this.yPos = yIni;
    this.xSpeed = 20;
    this.wBox = 64;
    this.hBox = 64;
  }

  move() {
    moveLinear(this);
  }
}
