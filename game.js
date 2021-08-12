function run() {
    requestAnimationFrame(run);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0,0, CANVAS_W, CANVAS_H);

        if (!gamePause) gameElements.move();
        gameElements.update();
        gamePlayer.update();
        gamePlayer.move();
        scrollBackground();
    }
}

function deathScene() {
    if (gamePause) return;
    gameState = "DEAD";
    gamePause = true;
    resetControls();
    
    setTimeout(() => {
        let yPeak = gamePlayer.yPos - 200;
        let yFlag = true;
        let animate = setInterval(() => {
            let yPos = gamePlayer.yPos;

            if (yPos > CANVAS_H) {
                showScreen(deathScreen);
                clearInterval(animate);
                gameState = "RETRY";
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
    showScreen(background, false);
    showScreen(passScreen);
    resetControls();
    gamePause = true;
    gameElements.length = 0;

    if (LEVELS.length === 2) {
        passText.innerText = "Fortress Complete";
    }
    
    setTimeout(() => {
        showScreen(passScreen, false);
        showScreen(background);
        LEVELS.shift();
        
        background.style.backgroundPositionY = `${LEVELS[0].backgroundPosY}px`;
        
        if (LEVELS[0] === FINALE) {
            endScene();
        } else {
            gamePause = false;
            gamePlayer.reset();
            introLevel();
            LEVELS[0].spawn();
        }
    }, 8200)
}

function endScene() {
    gamePlayer.xPos = CENTER_X - gamePlayer.image.width / 2;
    gamePlayer.yPos = CENTER_Y + 75;
    cursorSelect.style.cursor = "auto";
    showScreen(endScreen);
    backgroundSpeed = 2;
    move();
}

run()