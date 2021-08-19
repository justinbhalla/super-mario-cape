import { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_MID_X, CANVAS_MID_Y, 
         ctx, game, controls, player, elements, fpsInterval } from '../main.js';

class Element {
    constructor() {
        this.spriteFrame = 0;
        this.spriteRate = 0;
        this.spriteLength = 0;
        this.xPos = CANVAS_WIDTH;
        this.xOff = 0;
        this.yOff = 0;
        this.time = 0;
    }

    update() {
        moveHitbox(this);
        drawImage(this);
        
        if (this instanceof Mario === false) {
            if (game.isOn) drawSprite(this);
            
            if (this instanceof Star && didHitMario(this)) {player.gotStar = true}
            else if (didHitMario(this)) {player.isDead = true;}
                        
            if (this.xPos + this.image.width < 0) {
                elements.splice(elements.indexOf(this), 1);            
            }
            
            this.time += fpsInterval;
        }
    }
}

class Mario extends Element {
    constructor() {
        super();
        this.audio = new Audio('sounds/jump.wav');

        this.image = new Image(116, 124);
        this.image.src = "images/mario.png"
        this.spriteFrame = 0;
        
        this.xPos = CANVAS_MID_X - 185;
        this.yPos = CANVAS_MID_Y + 15;
        this.xOff = 20;
        this.yOff = 38;
        this.wBox = 92;
        this.hBox = 76;
        
        this.xSpeed = 10;
        this.ySpeed = 10;
        this.gravity = 7;
        this.wind = 3;
        this.isDead = false;
        this.gotStar = false;
        this.isJumping = true;
    }

    move() {
        let {isLeft, isRight, isUp, isDown} = controls;
        let {xPos, yPos, xSpeed, gravity, wind} = this;
        let hasFallen = yPos + this.image.height / 2 > CANVAS_HEIGHT;
        let hasSpaceRight = xPos + this.image.width < CANVAS_WIDTH;  
        let hasSpaceLeft = xPos > 0;

        if (isRight && hasSpaceRight) this.xPos += xSpeed + wind;
        if (isLeft && hasSpaceLeft) this.xPos -= xSpeed - wind
        
        if (isUp && !this.isJumping) {
            this.jump();
            this.spriteFrame = 1;
        }
        
        if (!isUp) {
            this.isJumping = false;
            this.spriteFrame = 0;
        }
        
        if (isDown) {
            this.yPos += xSpeed + gravity;
            this.spriteFrame = 2;  
        }

        if (game.isOn && hasFallen) this.isDead = true;
        if (game.state === "DEAD") this.spriteFrame = 3;
        if (game.isOn) this.yPos += gravity;
    }

    jump() {
        this.isJumping = true;
        let count = 0;
        
        let interval = setInterval(() => {
            if (count > 15) {
                clearInterval(interval);
                this.isJumping = false;
                count = 0;
            } else if (this.yPos > 0) {
                this.yPos -= this.ySpeed;
            }
            
            count++;
        }, 10);
    }

    reset() {
        this.xPos = 100;
        this.yPos = 100;
    }  
}

class SuperKoopa extends Element {
    constructor(yIni, color) {
        super();

        this.image = new Image(92, 52);
        this.image.src = `images/super-koopa-${color}.png`
        this.color = color;
        this.yIni = yIni
        this.yPos = yIni;
        this.wBox = 72;
        this.hBox = 45;
        this.xOff = 5;
        this.yOff = 5;

        switch(color) {
            case "yellow":
                this.curveSize = 2;
                this.curveRate = 20;
                this.xSpeed = 16;
                break;
            case "red":
                this.xSpeed = 18;
                break;
        }
    }

    move() {
        if (this.color === "red") {
            moveLinear(this) 
        } else {
            moveCurve(this)
        }
    }
}

class Parakoopa extends Element {
    constructor(yIni, color) {
        super();

        this.image = new Image(88, 116);
        this.image.src = `images/parakoopa-${color}.png`;
        this.spriteLength = 2;
        this.spriteRate = 200;
        this.yIni = yIni;
        this.wBox = 56;
        this.hBox = 93;
        this.xOff = 5;
        this.yOff = 15;
        this.xSpeed = 14;

        switch(color) {
            case "red":
            case "yellow":
                this.waveType = "sin";
                this.waveSize = 50;
                this.waveRate = 1e-2;
                break;
            case "blue":
            case "green":
                this.waveType = "cos";
                this.waveSize = 150;
                this.waveRate = 5e-3;
                break;
        }
    }

    move() {moveWave(this)}
}

class FlyingGoomba extends Element {
    constructor(yIni) {
        super();

        this.image = new Image(132, 100);
        this.image.src = "images/flying-goomba.png";
        this.spriteLength = 4;
        this.spriteRate = 200;
        this.xSpeed = 5;
        this.waveType = 'sin';
        this.waveSize = 50;
        this.waveRate = 0.01;
        this.yIni = yIni;
        this.wBox = 70;
        this.hBox = 60;
        this.xOff = 25;
        this.yOff = 35;
    }

    move() {moveWave(this)}
}

class FlyingBrother extends Element {
    constructor(yIni) {
        super();

        this.image = new Image(216, 152);
        this.image.src = "images/flying-brother.png";
        this.spriteLength = 2;
        this.spriteRate = 200;
        this.yIni = yIni
        this.yPos = yIni;
        this.curveSize = 10;
        this.curveRate = 1;
        this.wBox = 120;
        this.hBox = 136;
        this.xOff = 49;
        this.yOff = 14;
        this.xSpeed = 15;
    }

    move() {moveCurve(this)}
}

class Chainsaw extends Element {
    constructor(yPos) {
        super();

        this.image = new Image(64, 176);
        this.image.src = "images/chainsaw.png";
        this.spriteLength = 4;
        this.spriteRate = 50;
        this.xSpeed = game.scrollSpeed;
        this.yPos = yPos;
        this.wBox = 50;
        this.hBox = 168;
        this.xOff = 7;
        this.yOff = 3;
    }

    move() {moveLinear(this)}
}

class BigBoo extends Element {
    constructor(yIni) {
        super();
        
        this.image = new Image(268, 256);
        this.image.src = "images/big-boo.png";
        this.xSpeed = 14;
        this.yIni = yIni;
        this.yPos = yIni;
        this.waveType = 'sin'
        this.waveSize = 100;
        this.waveRate = 1e-3;
        this.wBox = 202;
        this.hBox = 218;
        this.xOff = 30;
        this.yOff = 20;
    }

    move() {moveWave(this)}
}

class BigBubble extends Element {
    constructor(yPos) {
        super();
        
        this.image = new Image(224, 240);
        this.image.src = "images/big-bubble.png";
        this.spriteLength = 2;
        this.spriteRate = 250;
        this.yPos = yPos;
        this.xSpeed = 8;
        this.ySpeed = 8;
        this.wBox = 184;
        this.hBox = 200;
        this.xOff = 20;
        this.yOff = 20;
    }

    move() {
        if (this.yPos + this.hBox > CANVAS_HEIGHT || 
            this.yPos < 0) this.ySpeed *= -1;
        this.xPos -= this.xSpeed;
        this.yPos += this.ySpeed;
    }
}

class BooBuddy extends Element {
    constructor(yPos) {
        super();
        
        this.image = new Image(64, 64);
        this.image.src = `images/boo-buddy-${Math.round(Math.random()*2)}.png`;
        this.spriteLength = 2
        this.spriteRate = 150;
        this.yPos = yPos;
        this.xSpeed = 20;
        this.wBox = 64;
        this.hBox = 64;
    }

    move() {moveLinear(this)}
}

class Eerie extends Element {
    constructor(yIni) {
        super();
        
        this.image = new Image(64, 64)
        this.image.src = "images/eerie.png";
        this.spriteLength = 2;
        this.spriteRate = 100;
        this.xSpeed = 12;
        this.yIni = yIni;
        this.waveType = "cos"
        this.waveSize = 40 * (this.time / 800); 
        this.waveRate = 2e-2;
        this.wBox = 64;
        this.hBox = 64;
    }

    move() {
        this.xPos -= this.xSpeed;
        this.yPos = this.yIni + 40 * (this.time/800) * Math.sin(15*this.time/800);
    }
}

class BanzaiBill extends Element {
    constructor(yPos) {
        super();
        
        this.image = new Image(256, 256);
        this.image.src = "images/banzai-bill.png";
        this.xSpeed = 18;
        this.yPos = yPos;
        this.wBox = 246;
        this.hBox = 236;
        this.xOff = 10;
        this.yOff = 10;
    }

    move() {moveLinear(this)}
}

class BulletBillLinear extends Element {
    constructor(yPos) {
        super();
 
        this.image = new Image(64, 56);
        this.image.src = "images/bullet-bill-linear.png";
        this.xSpeed = 35;
        this.yPos = yPos;
        this.wBox = 64;
        this.hBox = 56;
    }

    move() {moveLinear(this)}
}

class BulletBillDiagonal extends Element {
    constructor(direction) {
        super();
        
        this.image = new Image(64, 64);
        this.image.src = `images/bullet-bill-diagonal-${direction}.png`
        this.yPos = CANVAS_MID_Y;
        this.yPos = direction === "up" ? CANVAS_HEIGHT : 0;
        this.ySpeed = direction === "up" ? -22 : 22;        
        this.xSpeed = 22;
        this.wBox = 64;
        this.hBox = 64;
        this.xPos = 1050;

    }

    move() {
        this.xPos -= this.xSpeed;
        this.yPos += this.ySpeed
    }
}

class Grinder extends Element {
    constructor(yPos) {
        super();
 
        this.image = new Image (128, 128);
        this.image.src = "images/grinder.png";
        this.spriteLength = 2;
        this.spriteRate = 25;
        this.xSpeed = game.scrollSpeed
        this.yPos = yPos;
        this.wBox = 108;
        this.hBox = 108;
        this.xOff = 10;
        this.yOff = 10;
    }

    move() {moveLinear(this)}
}

class Star extends Element {
    constructor() {
        super();

        this.image = new Image(60, 64);
        this.image.src = "images/star.png";
        this.yPos = CANVAS_MID_Y + 29;
        this.wBox = 60;
        this.hBox = 64;
        this.xSpeed = 15;
    }

    move() {
        if (this.xPos > CANVAS_MID_X + 58) moveLinear(this);
    }
}

function moveHitbox(element) {
    let {xPos, yPos, xOff, yOff} = element;
    element.xBox = xPos + xOff;
    element.yBox = yPos + yOff;
}

function drawImage(element) {
    let {image, spriteFrame, xPos, yPos} = element
    let xSrc = image.width * spriteFrame;
    let wSrc = image.width;
    let hSrc = image.height;
    ctx.drawImage(image, xSrc,0, wSrc,hSrc, xPos,yPos, wSrc,hSrc);
}

function didHitMario(element) {
    let {
        xBox: ex1,
        yBox: ey1,
        wBox: ew,
        hBox: eh
    } = element;

    let {
        xBox: mx1,
        yBox: my1,
        wBox: mw,
        hBox: mh
    } = player;

    let [ex2, mx2] = [ex1 + ew, mx1 + mw];
    let [ey2, my2] = [ey1 + eh, my1 + mh];

    return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
}

function drawSprite(element) {
    let {spriteFrame, spriteLength, spriteRate, time} = element;

    if (Math.round(time) % spriteRate === 0) {
        let lastFrame = spriteFrame === spriteLength - 1;
        element.spriteFrame += lastFrame ? -spriteFrame : 1;
    }
}

function moveLinear(element) {
    element.xPos -= element.xSpeed;
}

function moveWave(element) {
    let {yIni, waveSize, waveType, waveRate, time} = element;
    element.yPos = yIni + waveSize * Math[waveType](time * waveRate);
    element.xPos -= element.xSpeed;
}

function moveCurve(element) {
    let {yIni, curveSize, curveRate, time} = element;
    element.yPos = yIni + curveSize * Math.sqrt(time * curveRate);
    element.xPos -= element.xSpeed;
}

export { Mario, SuperKoopa, Parakoopa, FlyingGoomba, FlyingBrother,
         Chainsaw, BigBoo, BigBubble, BooBuddy, Eerie, BanzaiBill,
         BulletBillDiagonal, BulletBillLinear, Grinder, Star }