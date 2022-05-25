import { Element } from "../../main.js";

class BanzaiBill extends Element {
  constructor(yIni) {
    super();

    this.width = 256;
    this.height = 256;
    this.xAtlas = 448;
    this.yAtlas = 480;
    this.xSpeed = 18;
    this.yPos = yIni;
    this.wBox = 246;
    this.hBox = 236;
    this.xOff = 10;
    this.yOff = 10;
  }

  move() {
    super.move();
    this.moveLinear();
  }
}

export default BanzaiBill;
