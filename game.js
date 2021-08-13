function run() {
    requestAnimationFrame(run);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        drawBackground();
        gameElements.move();
        gameElements.update();
        gamePlayer.update();
        gamePlayer.move();
    }
}

function deathScene() {
    if (gamePause) return;
    gamePause = true;
    gameState = "DEAD";
    resetControls();
    
    setTimeout(() => {
        let yPeak = gamePlayer.yPos - 200;
        let yFlag = true;
        let animate = setInterval(() => {
            let yPos = gamePlayer.yPos;

            if (yPos > CANVAS_H) {
                if (!gamePlayer.lives) {
                    hideScreen(livesScreen);
                    showScreen(overScreen);
                    gameState = "OVER";
                } else {
                    showScreen(deathScreen);
                    gameState = "RETRY";
                }

                clearInterval(animate);
                
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
    hideScreen(background);
    showScreen(passScreen);
    resetControls();
    gameElements.length = 0;
    gameState = "PASS";
    gamePause = true;
    gameLevel++;

    let gameWon = gameLevel === LEVELS.length;
    let message = gameWon ? "Fortress" : "Course";
    passScreen.innerText = `${message} Complete`;

    setTimeout(() => {
        hideScreen(passScreen);
        showScreen(irisScreen);
        showScreen(background);
        
        setTimeout(() => {
            hideScreen(irisScreen);
        
            if (gameWon) {
                endScene();
            } else {
                startLevel();
            }
        }, 1500)
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