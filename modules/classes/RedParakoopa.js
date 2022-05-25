import { Parakoopa } from "./Parakoopa";

class RedParakoopa extends Parakoopa {
  constructor(yIni) {
    super();
    this.yIni = yIni;
    this.waveType = "sin";
    this.waveSize = -50;
    this.waveRate = 1e-2;
    this.xAtlas = 0;
    this.yAtlas = 180;
  }
}
