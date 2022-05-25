import { moveCurve } from "./elements";

class FlyingBrother extends Element {
  constructor(yIni) {
    super();

    this.width = 216;
    this.height = 152;
    this.xAtlas = 256;
    this.yAtlas = 304;

    this.spriteLength = 2;
    this.spriteRate = 200;
    this.yIni = yIni;
    this.yPos = yIni;
    this.curveSize = 10;
    this.curveRate = 1;
    this.wBox = 120;
    this.hBox = 136;
    this.xOff = 49;
    this.yOff = 14;
    this.xSpeed = 15;
  }

  move() {
    moveCurve(this);
  }
}
