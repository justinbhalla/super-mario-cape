class Enemy {
    constructor() {
        this.imageSprite = 0;
        this.xPos = CENTER_X;
        this.yPos = CENTER_Y;
        this.yIni = 0;
        this.time = 0;
        this.isWavey = false;
        this.canRespawn = false;
        this.reflect = this.yIni < CENTER_Y ? 1 : -1
    }

    move() {
        this.xPos -= this.xSpeed;

        if (this.isWavey) {
            this.xPos -= this.xSpeed;
            this.yPos = this.yIni + this.reflect * 
            this.amplitude * Math[this.wave](this.radians);
        }
    }
}

class SuperKoopaYellow extends Enemy {
    constructor() {
        super();

        this.image = new Image(92, 52);
        this.image.src = "images/super-koopa-yellow.png";
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 15;
        this.wBox = 72;
        this.hBox = 45;
        this.xOff = 5;
        this.yOff = 5;
    }
}

class SuperKoopaRed extends Enemy {
    constructor() {
        super();
        
        this.image = new Image(92, 52);
        this.image.src = "images/super-koopa-red.png";
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 17.5;
        this.wBox = 72;
        this.hBox = 45;
        this.xOff = 5;
        this.yOff = 5;
    }
}

class ParakoopaRed extends Enemy {
    constructor() {
        super();

        this.image = new Image(88, 116);
        this.image.src = "images/parakoopa-red.png";
        this.spriteTotal = 2;
        this.spriteRate = 200;
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 14;
        this.isWavey = true;
        this.wave = 'cos'
        this.amplitude = 50;
        this.radians = this.time / 100;

        this.wBox = 56;
        this.hBox = 93;
        this.xOff = 5;
        this.yOff = 15;
    }
}

class ParakoopaYellow extends Enemy {
    constructor() {
        super();

        this.image = new Image(88, 116);
        this.image.src = "images/parakoopa-yellow.png";
        this.spriteTotal = 2;
        this.spriteRate = 200;
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 14;
        this.isWavey = true;
        this.wave = 'sin'
        this.amplitude = 50;
        this.radians = this.time / 100;

        this.wBox = 56;
        this.hBox = 93;
        this.xOff = 5;
        this.yOff = 15;
    }
}

class FlyingGoomba extends Enemy {
    constructor() {
        super();

        this.image = new Image(132, 100);
        this.image.src = "images/flying-goomba.png";
        this.spriteTotal = 4;
        this.spriteRate = 200;
        this.respawnLine = CANVAS_W - 264;
        this.xSpeed = 5;
        this.isWavey = true;
        this.wave = 'sin'
        this.amplitude = 50;
        this.radians = this.time / 100;

        this.wBox = 70;
        this.hBox = 60;
        this.xOff = 25;
        this.yOff = 35;
    }
}

class ParakoopaBlue extends Enemy {
    constructor() {
        super();

        this.image = new Image(88, 116);
        this.image.src = "images/parakoopa-blue.png";
        this.spriteTotal = 2;
        this.spriteRate = 200;
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 14;
        this.isWavey = true;
        this.wave = 'sin'
        this.amplitude = 150;
        this.radians = this.time / 200;

        this.wBox = 56;
        this.hBox = 93;
        this.xOff = 5;
        this.yOff = 15;
    }
}

class ParakoopaGreen extends Enemy {
    constructor() {
        super();

        this.image.src = "images/parakoopa-green.png";
        this.spriteTotal = 2;
        this.spriteRate = 200;
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 14;
        this.isWavey = true;
        this.wave = 'cos'
        this.amplitude = 150;
        this.radians = this.time / 200;

        this.wBox = 56;
        this.hBox = 93;
        this.xOff = 5;
        this.yOff = 15;
    }
}

class FlyingBrother extends Enemy {
    constructor() {
        super();

        this.image = new Image(216, 152);
        this.image.src = "images/flying-brother.png";
        this.spriteTotal = 2;
        this.spriteRate = 200;
        this.respawnLine = CENTER_X;
        this.xSpeed = 15;

        this.wBox = 120;
        this.hBox = 136;
        this.xOff = 49;
        this.yOff = 14;
    }

    move() {
        let reflect = this.y0 < CENTER_Y ? 1 : -1
        this.xPos -= this.xSpeed;
        this.yPos = this.yIni + 4 * reflect * 
        Math.sqrt(Math.abs(8*this.time));        
    }
}

class Chainsaw extends Enemy {
    constructor() {
        super();

        this.image = new Image(64, 176);
        this.image.src = "images/chainsaw.png";
        this.spriteTotal = 4;
        this.spriteRate = 50;
        this.respawnLine = CENTER_X - 200;
        this.xSpeed = 2//BG_SPEED;
        this.wBox = 50;
        this.hBox = 168;
        this.xOff = 7;
        this.yOff = 3;
    }
}

class BigBoo extends Enemy {
    constructor() {
        super();
        
        this.image = new Image(268, 256);
        this.image.src = "images/big-boo.png";
        this.respawnLine = CENTER_X - 200;
        this.xSpeed = 14;
        this.isWavey = true;
        this.wave = 'sin'
        this.amplitude = 100;
        this.radians = this.time / 1000;    

        this.wBox = 202;
        this.hBox = 218;
        this.xOff = 30;
        this.yOff = 20;
    }
}

class BigBubble extends Enemy {
    constructor() {
        super();
        
        this.image = new Image(224, 240);
        this.image.src = "images/big-bubble.png";
        this.respawnLine = CENTER_X - 200;
        this.spriteTotal = 2;
        this.spriteRate = 250;
        this.xSpeed = 8;
        this.ySpeed = 8;
        this.wBox = 184;
        this.hBox = 200;
        this.xOff = 20;
        this.yOff = 20;
    }

    move() {
        if (this.y + this.h > CANVAS_H || this.y < 0) this.ySpeed = -this.ySpeed;
        this.xPos -= this.xSpeed;
        this.yPos += this.ySpeed;
    }
}

class BooBuddy extends Enemy {
    constructor() {
        super();
        
        this.boo = ["red","black","tongue"][Math.floor(Math.random()*3)],
        this.image = new Image(64, 64);
        this.image.src = "images/boo-buddy-" + this.boo + ".png";
        this.spriteTotal = 2
        this.spriteRate = 150;
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 20;
        this.wBox = 64;
        this.hBox = 64;
        this.xOff = 0;
        this.yOff = 0;
    }
}

class Eerie extends Enemy {
    constructor() {
        super();
        
        this.image = new Image(64, 64)
        this.image.src = "images/eerie.png";
        this.spriteTotal = 2;
        this.spriteRate = 100;
        this.respawnLine = CANVAS_W - 150;
        this.xSpeed = 12;
        this.coin = Math.round(Math.random());
        this.isWavey = true;
        this.wave = this.coin ? "sin" : "cos;"
        this.amplitude = 40 * (this.time / 800);
        this.radians = 15 * this.time / 800;
        this.wBox = 64;
        this.hBox = 64;
        this.xOff = 0;
        this.yOff = 0;;
    }
}

class BanzaiBill extends Enemy {
    constructor() {
        super();
        
        this.image = new Image(256, 256);
        this.image.src = "images/banzai-bill.png";
        this.respawnLine = CENTER_X + 256;
        this.xSpeed = 18;
        this.wBox = 246;
        this.hBox = 236;
        this.xOff = 10;
        this.yOff = 10;
    }
}

class BulletBillLinear extends Enemy {
    constructor() {
        super();
 
        this.image = new Image(64, 56);
        this.image = new Image();
        this.image.src = "images/bullet-bill-linear.png";
        this.respawnLine = CANVAS_W;
        this.xSpeed = 35;
        this.wBox = 64;
        this.hBox = 56;
        this.xOff = 0;
        this.yOff = 0;
    }
}

class BulletBillDiagonal extends Enemy {
    constructor() {
        super();
        this.image = new Image(64, 64);
        this.upSrc = "images/bullet-bill-diagonal-up.png";
        this.downSrc = "images/bullet-bill-diagonal-down.png"
        this.corner = Math.round(Math.random()) * CANVAS_H;
        this.y = this.corner;
        this.y0 = this.corner;
        
        if (this.corner) {
            this.image.src = this.upSrc;
            this.ySpeed = -22;
        } else {
            this.image.src = this.downSrc;
            this.ySpeed = 22;
        }

        
        this.respawnLine = CANVAS_W;
        this.xPos = CANVAS_W - this.w;
        this.xSpeed = 22;
        this.wBox = 64;
        this.hBox = 64;
        this.xOff = 0;
        this.yOff = 0;
    }

    move() {
        this.x -= this.speed;
        this.y += this.ySpeed
    }
}

class Grinder extends Enemy {
    constructor() {
        super();
 
        this.image = new Image (128, 128);
        this.image.src = "images/grinder.png";
        this.spriteTotal = 2;
        this.spriteRate = 25;
        this.respawnLine = CENTER_X + 100;
        this.xSpeed = 2 //BG_SPEED;
        this.wBox = 108;
        this.hBox = 108;
        this.xOff = 10;
        this.yOff = 10;
    }
}

//STAR
class Star {
    constructor() {
        this.image = new Image();
        this.image.src = "images/star.png";
        this.sprite = 0;
        this.x = CANVAS_W;
        this.y = CENTER_Y;
        this.w = 60;
        this.h = 64;
        this.speed = 10;
    }

    update() {
        if (hitMario(this)) transition();
    }

    move() {
        if (this.x > CENTER_X) this.x -= this.speed;
    }

    draw() {
        if (!this.image.complete) {
            setTimeout(this.draw, 50);
            return;
        }

        sprite(this);
    }
}