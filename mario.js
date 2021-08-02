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
        if (spacePressed && !this.isJumping) this.jump();
        if (!spacePressed) this.isJumping = false;
        this.yPos += this.gravity;
    }

    jump() {
        this.isJumping = true;
        this.audio.currentTime = 0;
        // this.audio.play();
        
        let count = 0;
        let interval = setInterval(() => {
            if (count > 15) {
                clearInterval(interval);
                this.isJumping = false;
                count = 0;
            } else if (this.yPos > 0) {
                this.yPos -= this.jumpHeight;
            }
            
            count++;
        }, 10);
    }
}