class Enemy {
    constructor() {
        this.imageSprite = 0;
        this.xPos = CANVAS_W;
        this.yIni = 0;
        this.yPos = 0;
        this.time = 0;
        this.isWavey = false;
        this.canRespawn = false;

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
    }
}

class SuperKoopaRed extends Enemy {
    constructor() {
        super();
        
        this.image = new Image(92, 52);
        this.image.src = "images/super-koopa-red.png";
        this.respawnLine = CANVAS_W - 150;
        this.speed = 17.5;
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
    }
}

//// I"M HERE
class FlyingBrother extends Enemy {
    constructor() {
        super();

        this.image = new Image(216, 152);
        this.image.src = "images/flying-brother.png";
        this.spriteTotal = 2;
        this.spriteRate = 200;
        this.respawnLine = CENTER_X;
        this.xSpeed = 15;
    }

    move() {
        animate(this);
        let direction = this.y0 < CENTER_Y ? 1 : -1
        this.x -= this.speed;
        this.y = this.y0 + 4*Math.sqrt(Math.abs(8*this.time))*direction;
    }
}

class Chainsaw extends Enemy {
    constructor() {
        super();
        
        this.image.src = "images/chainsaw.png";
        this.spriteTotal = 4;
        this.spriteRate = 50;
        this.respawnLine = CENTER_X - 200;
        this.w = 64;
        this.h = 176;
        this.speed = BG_SPEED;
    }
}

class BigBoo extends Enemy {
    constructor() {
        super();
        
        this.image.src = "images/big-boo.png";
        this.respawnLine = CENTER_X - 200;
        this.w = 268;
        this.h = 256;
        this.speed = 14;
        this.customHitbox = true;
        this.xHitbox = this.x + 20
        this.yHitbox = this.y + 15
        this.wHitbox = this.w - 40
        this.hHitbox = this.h - 30
    }
}

class BigBubble extends Enemy {
    constructor() {
        super();
        
        this.image.src = "images/big-bubble.png";
        this.respawnLine = CENTER_X - 200;
        this.spriteTotal = 2;
        this.spriteRate = 250;
        this.w = 224;
        this.h = 240;
        this.xSpeed = 8;
        this.ySpeed = 8;
        this.customHitbox = true;
        this.xHitbox = this.x + 20
        this.yHitbox = this.y + 20
        this.wHitbox = this.w - 40
        this.hHitbox = this.h - 40
    }

    move() {
        animate(this);
        if (this.y + this.h > CANVAS_H || this.y < 0) this.ySpeed = -this.ySpeed;
        this.x -= this.xSpeed;
        this.y += this.ySpeed;
        this.xHitbox = this.x + 20;
        this.yHitbox = this.y + 20;
    }
}

class BooBuddy extends Enemy {
    constructor() {
        super();
        
        this.boo = ["red","black","tongue"][Math.floor(Math.random()*3)],
        this.image.src = "images/boo-buddy-" + this.boo + ".png";
        this.spriteTotal = 2
        this.spriteRate = 150;
        this.respawnLine = CANVAS_W - 150;
        this.w = 64;
        this.h = 64;
        this.speed = 20;
    }
}

class Eerie extends Enemy {
    constructor() {
        super();
        
        this.image.src = "images/eerie.png";
        this.spriteTotal = 2;
        this.spriteRate = 100;
        this.respawnLine = CANVAS_W - 150;
        this.w = 64;
        this.h = 64;
        this.speed = 12;
        this.coin = Math.round(Math.random())
    }
}

class BanzaiBill extends Enemy {
    constructor() {
        super();
        
        this.image.src = "images/banzai-bill.png";
        this.respawnLine = CENTER_X + 256;
        this.w = 256;
        this.h = 256;
        this.speed = 18;
        this.customHitbox = true;
        this.xHitbox = this.x + 20;
        this.yHitbox = this.y + 25;
        this.wHitbox = this.w - 20;
        this.hHitbox = this.h - 30;
    }
}

class BulletBillLinear extends Enemy {
    constructor() {
        super();
        
        this.image = new Image();
        this.image.src = "images/bullet-bill-linear.png";
        this.respawnLine = CANVAS_W;
        this.w = 64;
        this.h = 56;
        this.speed = 35;
        
    }
}

class BulletBillDiagonal extends Enemy {
    constructor() {
        super();
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
        this.w = 64;
        this.h = 64;
        this.x = CANVAS_W - this.w;
        this.speed = 22;
    }

    move() {
        this.x -= this.speed;
        this.y += this.ySpeed
    }
}

class Grinder extends Enemy {
    constructor() {
        super();
        
        this.image.src = "images/grinder.png";
        this.spriteTotal = 2;
        this.spriteRate = 25;
        this.respawnLine = CENTER_X + 100;
        this.w = 128;
        this.h = 128;
        this.speed = BG_SPEED;
        this.customHitbox = true;
        this.xHitbox = this.x + 12;
        this.yHitbox = this.y + 12;
        this.wHitbox = this.w - 24;
        this.hHitbox = this.h - 24;
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