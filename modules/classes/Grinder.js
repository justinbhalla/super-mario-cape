import { moveLinear } from "./elements";

class Grinder extends Element {
  constructor(yIni) {
    super();

    this.width = 128;
    this.height = 128;
    this.xAtlas = 0;
    this.yAtlas = 304;
    this.spriteLength = 2;
    this.spriteRate = 25;
    this.xSpeed = game.scrollSpeed;
    this.yPos = yIni;
    this.wBox = 108;
    this.hBox = 108;
    this.xOff = 10;
    this.yOff = 10;
  }

  move() {
    moveLinear(this);
  }
}
