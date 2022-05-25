import { moveWave } from "../elements";

class BigBoo extends Element {
  constructor(yIni) {
    super();

    this.width = 268;
    this.height = 256;
    this.xAtlas = 704;
    this.yAtlas = 480;
    this.xSpeed = 14;
    this.yIni = yIni;
    this.yPos = yIni;
    this.waveType = "sin";
    this.waveSize = 100;
    this.waveRate = 1e-3;
    this.wBox = 202;
    this.hBox = 218;
    this.xOff = 30;
    this.yOff = 20;
  }

  move() {
    moveWave(this);
  }
}
