import { CONTEXT, controller } from "../main.js";

const atlas = new Image(972, 736);
atlas.src = "images/atlas/atlas.png";

class SuperKoopa extends Element {
  constructor() {
    super();

    this.width = 92;
    this.height = 52;
    this.wBox = 72;
    this.hBox = 45;
    this.xOff = 5;
    this.yOff = 5;
  }
}

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
    moveCurve(this);
  }
}

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
    moveLinear(this);
  }
}

class Parakoopa extends Element {
  constructor() {
    super();

    this.width = 88;
    this.height = 116;
    this.spriteLength = 2;
    this.spriteRate = 200;
    this.wBox = 56;
    this.hBox = 93;
    this.xOff = 5;
    this.yOff = 15;
    this.xSpeed = 14;
  }

  move() {
    moveWave(this);
  }
}

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

class FlyingBrother extends Element {
  constructor(yIni) {
    super();

    this.width = 216;
    this.height = 152;
    this.xAtlas = 256;
    this.yAtlas = 304;

    this.spriteLength = 2;
    this.spriteRate = 200;
    this.yIni = yIni;
    this.yPos = yIni;
    this.curveSize = 10;
    this.curveRate = 1;
    this.wBox = 120;
    this.hBox = 136;
    this.xOff = 49;
    this.yOff = 14;
    this.xSpeed = 15;
  }

  move() {
    moveCurve(this);
  }
}

class Chainsaw extends Element {
  constructor(yIni) {
    super();

    this.width = 64;
    this.height = 176;
    this.xAtlas = 688;
    this.yAtlas = 304;
    this.spriteLength = 4;
    this.spriteRate = 50;
    this.xSpeed = game.scrollSpeed;
    this.yPos = yIni;
    this.wBox = 50;
    this.hBox = 168;
    this.xOff = 7;
    this.yOff = 3;
  }

  move() {
    moveLinear(this);
  }
}

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

class BigBubble extends Element {
  constructor(yIni) {
    super();

    this.width = 224;
    this.height = 240;
    this.xAtlas = 0;
    this.yAtlas = 480;
    this.spriteLength = 2;
    this.spriteRate = 250;
    this.yPos = yIni;
    this.xSpeed = 8;
    this.ySpeed = 8;
    this.wBox = 184;
    this.hBox = 200;
    this.xOff = 20;
    this.yOff = 20;
  }

  move() {
    if (this.yPos + this.hBox > SCREEN.height || this.yPos < 0)
      this.ySpeed *= -1;
    this.xPos -= this.xSpeed;
    this.yPos += this.ySpeed;
  }
}

class BooBuddy extends Element {
  constructor(yIni) {
    super();

    this.width = 64;
    this.height = 64;
    this.xAtlas = 248 + 2 * this.width * Math.round(Math.random() * 2);
    this.yAtlas = 0;
    this.spriteLength = 2;
    this.spriteRate = 150;
    this.yPos = yIni;
    this.xSpeed = 20;
    this.wBox = 64;
    this.hBox = 64;
  }

  move() {
    moveLinear(this);
  }
}

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

class BanzaiBill extends Element {
  constructor(yIni) {
    super();

    this.width = 256;
    this.height = 256;
    this.xAtlas = 448;
    this.yAtlas = 480;
    this.xSpeed = 18;
    this.yPos = yIni;
    this.wBox = 246;
    this.hBox = 236;
    this.xOff = 10;
    this.yOff = 10;
  }

  move() {
    moveLinear(this);
  }
}

class BulletBill extends Element {
  constructor(yIni) {
    super();

    this.width = 64;
    this.height = 56;
    this.xAtlas = 184;
    this.yAtlas = 0;
    this.xSpeed = 25;
    this.yPos = yIni;
    this.wBox = 64;
    this.hBox = 56;
  }

  move() {
    moveLinear(this);
  }
}

class Grinder extends Element {
  constructor(yIni) {
    super();

    this.width = 128;
    this.height = 128;
    this.xAtlas = 0;
    this.yAtlas = 304;
    this.spriteLength = 2;
    this.spriteRate = 25;
    this.xSpeed = game.scrollSpeed;
    this.yPos = yIni;
    this.wBox = 108;
    this.hBox = 108;
    this.xOff = 10;
    this.yOff = 10;
  }

  move() {
    moveLinear(this);
  }
}

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
    if (this.xPos > SCREEN.centerX + 58) moveLinear(this);
  }
}

function didHitMario(element) {
  let { xBox: ex1, yBox: ey1, wBox: ew, hBox: eh } = element;

  let { xBox: mx1, yBox: my1, wBox: mw, hBox: mh } = elements.player;

  let [ex2, mx2] = [ex1 + ew, mx1 + mw];
  let [ey2, my2] = [ey1 + eh, my1 + mh];

  return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
}

function moveLinear(element) {
  element.xPos -= element.xSpeed;
}

function moveWave(element) {
  let { yIni, waveSize, waveType, waveRate, time } = element;
  element.yPos = yIni + waveSize * Math[waveType](time * waveRate);
  element.xPos -= element.xSpeed;
}

function moveCurve(element) {
  let { yIni, curveSize, curveRate, time } = element;
  element.yPos = yIni + curveSize * Math.sqrt(time * curveRate);
  element.xPos -= element.xSpeed;
}

export default elements;
