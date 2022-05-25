import { moveWave } from "./elements";

class FlyingGoomba extends Element {
  constructor(yIni) {
    super();

    this.width = 132;
    this.height = 100;
    this.xAtlas = 0;
    this.yAtlas = 64;
    this.spriteLength = 4;
    this.spriteRate = 200;
    this.xSpeed = 5;
    this.waveType = "sin";
    this.waveSize = 50;
    this.waveRate = 0.01;
    this.yIni = yIni;
    this.wBox = 70;
    this.hBox = 60;
    this.xOff = 25;
    this.yOff = 35;
  }

  move() {
    moveWave(this);
  }
}
