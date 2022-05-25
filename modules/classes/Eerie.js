class Eerie extends Element {
  constructor(yIni) {
    super();

    this.width = 64;
    this.height = 64;
    this.xAtlas = 760;
    this.yAtlas = 0;
    this.spriteLength = 2;
    this.spriteRate = 100;
    this.xSpeed = 12;
    this.yIni = yIni;
    this.waveType = "cos";
    this.waveSize = 40 * (this.time / 800);
    this.waveRate = 2e-2;
    this.wBox = 64;
    this.hBox = 64;
  }

  move() {
    this.xPos -= this.xSpeed;
    this.yPos =
      this.yIni + 40 * (this.time / 800) * Math.sin((15 * this.time) / 800);
  }
}
