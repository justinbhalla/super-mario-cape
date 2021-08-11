function update() {   
    ctx.clearRect(0,0, CANVAS_W, CANVAS_H);
    gameElements.update();
    gamePlayer.update();
    updateReq = requestAnimationFrame(update);
}

function move() {
    scrollBackground();
    gameElements.move();
    gamePlayer.move();
    moveReq = requestAnimationFrame(move);
}

function deathScene() {
    setTimeout(() => {
        cancelAnimationFrame(moveReq);
        resetControls();
        gamePlayer.spriteFrame = 3;
        gamePause = true;
    });
    
    setTimeout(() => {
        let yPeak = gamePlayer.yPos - 200;
        let yFlag = true;
        let animate = setInterval(() => {
            let yPos = gamePlayer.yPos;

            if (yPos > CANVAS_H) {
                clearInterval(animate);
                changeScreen(deathScreen, true);
                gameState = "DEAD";
            } else if (yPos > yPeak && yFlag) {
                gamePlayer.yPos -= 10;
            } else if (yPos < yPeak && yFlag) {
                yFlag = false;
            } else {
                gamePlayer.yPos += 12.5;
            }
        }, 10);
    }, 500)
}

function passScene() {
    setTimeout(() => cancelAnimationFrame(moveReq));
    changeScreen(background, false);
    changeScreen(passScreen, true);
    resetControls();
    gameElements.length = 0;
    gamePause = true;

    if (LEVELS.length === 2) {
        passText.innerText = "Fortress Complete";
    }
    
    setTimeout(() => {
        changeScreen(background, true);
        changeScreen(passScreen, false);
        LEVELS.shift();
        
        background.style.backgroundPositionY = `${LEVELS[0].backgroundPosY}px`;
        
        if (LEVELS[0] === FINALE) {
            endScene();
        } else {
            requestAnimationFrame(move);
            gamePause = false;
            introLevel();
            LEVELS[0].spawn();
        }
    }, 8200)
}

function endScene() {
    gamePlayer.xPos = CENTER_X - gamePlayer.image.width / 2;
    gamePlayer.yPos = CENTER_Y + 75;
    cursorSelect.style.cursor = "auto";
    backgroundSpeed = 2;
    changeScreen(endScreen, true);
    gamePlayer.move = () => {}
    move();
}


move();
update();