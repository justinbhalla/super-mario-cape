class Mario {
    constructor() {
        this.audio = new Audio('sounds/jump.wav');

        this.image = new Image();
        this.image.src = "images/mario.png"
        this.imageWidth = 116;
        this.imageHeight = 124;
        this.imageSprite = 0;

        this.width = 100;
        this.height = 120;
        this.xPos = 200;
        this.yPos = 200;

        this.speed = 10;
        this.gravity = 7;
        this.wind = 3;

        
        this.isJumping = true;
        this.jumpHeight = 11;

    }

    move() {
        if (leftHeld) this.xPos -= this.speed - this.wind;
        if (rightHeld) this.xPos += this.speed + this.wind;
        if (downHeld) this.yPos += this.speed + this.gravity;
        this.isJumping = spacePressed ? true : false;
    }
}