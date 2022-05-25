import { Element } from "../../main.js";

class Star extends Element {
  constructor() {
    super();

    this.width = 60;
    this.height = 64;
    this.xAtlas = 888;
    this.yAtlas = 0;
    this.yPos = SCREEN.centerY + 29;
    this.wBox = 60;
    this.hBox = 64;
    this.xSpeed = 15;
  }

  move() {
    super.move();
    if (this.xPos > SCREEN.centerX + 58) this.moveLinear();
  }
}

export default Star;
