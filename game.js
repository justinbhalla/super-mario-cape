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

function passScene() {
    setTimeout(() => cancelAnimationFrame(moveReq));
    changeScreen(background, false);
    changeScreen(passScreen, true);
    resetControls();
    gameElements.length = 0;
    gamePause = true;

    setTimeout(() => {
        changeScreen(background, true);
        changeScreen(passScreen, false);
        LEVELS.shift();
        background.style.backgroundPositionY = `${LEVELS[0].backgroundPosY}px`;
        gamePause = false;
        LEVELS[0].spawn();
        update();
        move();
    }, 8200)
}

function deathScene() {
    setTimeout(() => {
        cancelAnimationFrame(moveReq);
        resetControls();
        gamePlayer.spriteFrame = 3;
    })

    let yPeak = gamePlayer.yPos - 200;
    let yFlag = true;

    setTimeout(() => {
        let animate = setInterval(() => {
            let yPos = gamePlayer.yPos;

            if (yPos > CANVAS_H) {
                clearInterval(animate);
                changeScreen(deathScreen, true);
                gameState = "DEAD";
                gamePause = true;
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

move();
update();