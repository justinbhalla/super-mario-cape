import { SuperKoopa } from "../../main.js";

class YellowSuperKoopa extends SuperKoopa {
  constructor(yIni) {
    super();
    this.yIni = yIni;
    this.yPos = yIni;
    this.xAtlas = 92;
    this.yAtlas = 0;
    this.curveSize = 2;
    this.curveRate = 20;
    this.xSpeed = 16;
  }

  move() {
    this.moveCurve();
  }
}

export default YellowSuperKoopa;
