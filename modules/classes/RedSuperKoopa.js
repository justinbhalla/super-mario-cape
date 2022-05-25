import { SuperKoopa } from "../../main.js";

class RedSuperKoopa extends SuperKoopa {
  constructor(yIni) {
    super();
    this.yIni = yIni;
    this.yPos = yIni;
    this.xAtlas = 0;
    this.yAtlas = 0;
    this.xSpeed = 18;
  }

  move() {
    super.move();
    this.moveLinear();
  }
}

export default RedSuperKoopa;
