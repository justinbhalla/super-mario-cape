import { Parakoopa } from "./Parakoopa";

class GreenParakoopa extends Parakoopa {
  constructor(yIni) {
    super();
    this.yIni = yIni;
    this.waveType = "cos";
    this.waveSize = -150;
    this.waveRate = 5e-3;
    this.xAtlas = 704;
    this.yAtlas = 64;
  }
}
