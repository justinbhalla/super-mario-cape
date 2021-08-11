class Element {
    constructor() {
        this.spriteFrame = 0;
        this.spriteRate = 0;
        this.spriteLength = 0;
        this.xPos = CANVAS_W;
        this.xOff = 0;
        this.yOff = 0;
        this.time = 0;
        this.isWavey = false;
        this.isCurvy = false;
    }

    move() {
        moveHitbox(this);
        detectHit(this);
        this.xPos -= this.xSpeed;

        if (this.isWavey) {
            let {yIni, waveSize, waveType, waveRate, time} = this;
            this.yPos = yIni + waveSize * Math[waveType](time * waveRate);

        } else if (this.isCurvy) {
            let {yIni, curveSize, curveRate, time} = this;
            this.yPos = yIni + curveSize * Math.sqrt(time * curveRate);
        }
    }

    update() {
        drawImage(this);
        this.time += 1000 / 60;
        let {time, spriteRate, xPos, image} = this;
        if (Math.round(time) % spriteRate === 0) animateSprite(this);
        if (xPos + image.width < 0) gameElements.splice(gameElements.indexOf(this), 1);
    }
}

class SuperKoopa extends Element {
    constructor(yIni, color) {
        super();

        this.image = new Image(92, 52);
        this.image.src = `images/super-koopa-${color}.png`
        this.yIni = yIni
        this.yPos = yIni;
        this.wBox = 72;
        this.hBox = 45;
        this.xOff = 5;
        this.yOff = 5;

        switch(color) {
            case "yellow":
                this.isCurvy = true;
                this.curveSize = 2;
                this.curveRate = 20;
                this.xSpeed = 16;
                break;
            case "red":
                this.xSpeed = 18;
                break;
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
        this.isWavey = true;
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
}

class FlyingGoomba extends Element {
    constructor(yIni) {
        super();

        this.image = new Image(132, 100);
        this.image.src = "images/flying-goomba.png";
        this.spriteLength = 4;
        this.spriteRate = 200;
        this.xSpeed = 5;
        this.isWavey = true;
        this.waveType = 'sin';
        this.waveSize = 50;
        this.waveRate = 0.01;
        this.yIni = yIni;
        this.wBox = 70;
        this.hBox = 60;
        this.xOff = 25;
        this.yOff = 35;
    }
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
        this.isCurvy = true;
        this.curveSize = 10;
        this.curveRate = 1;
        this.wBox = 120;
        this.hBox = 136;
        this.xOff = 49;
        this.yOff = 14;
        this.xSpeed = 15;
    }
}

class Chainsaw extends Element {
    constructor(yPos) {
        super();

        this.image = new Image(64, 176);
        this.image.src = "images/chainsaw.png";
        this.spriteLength = 4;
        this.spriteRate = 50;
        this.xSpeed = 2//BG_SPEED;
        this.yPos = yPos;
        this.wBox = 50;
        this.hBox = 168;
        this.xOff = 7;
        this.yOff = 3;
    }
}

class BigBoo extends Element {
    constructor(yIni) {
        super();
        
        this.image = new Image(268, 256);
        this.image.src = "images/big-boo.png";
        this.xSpeed = 14;
        this.yIni = yIni;
        this.yPos = yIni;
        this.isWavey = true;
        this.waveType = 'sin'
        this.waveSize = 100;
        this.waveRate = 1e-3;
        this.wBox = 202;
        this.hBox = 218;
        this.xOff = 30;
        this.yOff = 20;
    }
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
        if (this.yPos + this.hBox > CANVAS_H || 
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
}

class BulletBillDiagonal extends Element {
    constructor(direction) {
        super();
        
        this.image = new Image(64, 64);
        this.image.src = `images/bullet-bill-diagonal-${direction}.png`
        this.yPos = CENTER_Y;
        this.yPos = direction === "up" ? CANVAS_H : 0;
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
        this.xSpeed = 2 //BG_SPEED;
        this.yPos = yPos;
        this.wBox = 108;
        this.hBox = 108;
        this.xOff = 10;
        this.yOff = 10;
    }
}

//STAR
class Star extends Element {
    constructor() {
        super();

        this.image = new Image(60, 64);
        this.image.src = "images/star.png";
        this.yPos = CENTER_Y;
        this.wBox = 60;
        this.hBox = 64;
        this.xSpeed = 10;
    }

    move() {
        moveHitbox(this)
        detectHit(this)
        if (this.xPos + this.wBox / 2 > CENTER_X) this.xPos -= this.xSpeed;
    }
}