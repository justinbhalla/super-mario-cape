import { Element } from "../../main.js";

class Parakoopa extends Element {
  constructor() {
    super();

    this.width = 88;
    this.height = 116;
    this.spriteLength = 2;
    this.spriteRate = 200;
    this.wBox = 56;
    this.hBox = 93;
    this.xOff = 5;
    this.yOff = 15;
    this.xSpeed = 7;
  }

  move() {
    super.move();
    this.moveWave();
  }
}

export default Parakoopa;
