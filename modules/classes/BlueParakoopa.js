import { Parakoopa } from "../../main.js";

class BlueParakoopa extends Parakoopa {
  constructor(yIni) {
    super();
    this.yIni = yIni;
    this.waveType = "cos";
    this.waveSize = 150;
    this.waveRate = 5e-3;
    this.xAtlas = 528;
    this.yAtlas = 64;
  }
}

export default BlueParakoopa;
