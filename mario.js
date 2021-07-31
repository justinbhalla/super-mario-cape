class Mario {
    constructor() {
        this.image = new Image();
        this.image.src = "images/mario.png"
        this.imageWidth = 116;
        this.imageHeight = 124;
        this.imageSprite = 0;
        this.audio = new Audio('sounds/jump.wav');

        this.width = 100;
        this.height = 120;
        this.x = CANVAS_W * 0.2;
        this.y = CENTER_Y - this.h;

        this.speed = 10;
        this.gravity = 7;
        this.wind = 3;
        this.jump = 11;

        this.moveLeft = this.speed - this.wind;
        this.moveRight = this.speed + this.wind;
        this.moveDown = this.speed + this.gravity;
        this.moveUp;

        this.isJumping = true;
        this.isDead = false;
    }

    move() {
        if (leftHeld) this.x -= this.moveLeft;
        if (rightHeld) this.x += this.moveRight;
        if (downHeld) this.y += this.moveDown;
    }
}