class Mario {
    constructor() {
        this.audio = new Audio('sounds/jump.wav');

        this.image = new Image(116, 124);
        this.image.src = "images/mario.png"
        this.spriteFrame = 0;

        this.xPos = CENTER_X - 185;
        this.yPos = CENTER_Y + 15;
        this.xOff = 20;
        this.yOff = 38;
        this.wBox = 92;
        this.hBox = 76;
        
        this.xSpeed = 10;
        this.ySpeed = 10;
        this.gravity = 0; //was 7
        this.wind = 3;
        this.isJumping = true;
    }

    move() {
        let {xPos, yPos, xSpeed, gravity, wind} = this;
        let bBound = yPos + this.image.height / 2 < CANVAS_H;
        let rBound = xPos + this.image.width < CANVAS_W; 
        let lBound = xPos > 0;

        if (rightHeld && rBound) this.xPos += xSpeed + wind;
        if (leftHeld && lBound) this.xPos -= xSpeed - wind
        
        if (upHeld && !this.isJumping) {
            this.jump();
            this.spriteFrame = 1;
        }
        
        if (!upHeld) {
            this.isJumping = false;
            this.spriteFrame = 0;
        }
        
        if (downHeld) {
            this.yPos += xSpeed + gravity;
            this.spriteFrame = 2;  
        }

        if (gameState === "DEAD") this.spriteFrame = 3;
        if (!bBound) deathScene();
        this.yPos += gravity;
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

    update() {
        moveHitbox(this);
        drawImage(this);
    }

    reset() {
        this.xPos = 150;
        this.yPos = 300;
    }  
}