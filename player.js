class Mario {
    constructor() {
        this.audio = new Audio('sounds/jump.wav');

        this.image = new Image(116, 124);
        this.image.src = "images/mario.png"
        this.spriteFrame = 0;

        this.xPos = 200;
        this.yPos = 200;
        this.xOff = 20;
        this.yOff = 38;
        this.wBox = 92;
        this.hBox = 76;
        
        this.speed = 10;
        this.gravity = 0; //was 7
        this.wind = 3;

        this.isJumping = true;
        this.jumpHeight = 10;
    }

    move() {
        if (leftHeld) this.xPos -= this.speed - this.wind;
        if (rightHeld) this.xPos += this.speed + this.wind;
        
        if (spacePressed && !this.isJumping) {
            this.jump();
            this.spriteFrame = 1;
        }
        
        if (!spacePressed) {
            this.isJumping = false;
            this.spriteFrame = 0;
        }
        
        if (downHeld) {
            this.yPos += this.speed + this.gravity;
            this.spriteFrame = 2;  
        } 

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