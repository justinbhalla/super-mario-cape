import { Parakoopa } from "../../main.js";

class YellowParakoopa extends Parakoopa {
  constructor(yIni) {
    super();
    this.yIni = yIni;
    this.waveType = "sin";
    this.waveSize = 50;
    this.waveRate = 1e-2;
    this.xAtlas = 176;
    this.yAtlas = 180;
  }
}

export default YellowParakoopa;
