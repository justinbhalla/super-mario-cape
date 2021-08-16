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

function levelScene() {
    showScreen(livesScreen);
    background.style.backgroundPositionY = `${LEVELS[gameLevel].backgroundPosY}px`;
    levelScreen.style.display = "block";
    levelText.innerText = `Level ${gameLevel + 1}`;
    livesText.innerText = gameLives;
    gameTimeouts.forEach(t => clearTimeout(t));
    gameElements.length = 0;
    gamePlayer.reset();
    gameState = "PLAY";

    setTimeout(() => {
        levelScreen.style.display = "none";    
        LEVELS[gameLevel].spawn();
        gamePause = false;
    }, 1500);    
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
                if (!gameLives) {
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

    let gameWon = gameLevel === LEVELS.length - 1;
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
                levelScene();
            }
        }, 1500)
    }, 8200)
}

function endScene() {
    background.style.backgroundPositionY = `${LEVELS[gameLevel].backgroundPosY}px`;
    gamePlayer.xPos = CENTER_X - gamePlayer.image.width / 2;
    gamePlayer.yPos = CENTER_Y + 75;
    gameState = "END";
    cursorSelect.style.cursor = "auto";
    showScreen(endScreen);
    hideScreen(livesScreen);
    backgroundSpeed = 2;
}

window.addEventListener("load", () => {
    document.body.style.background = "#5590cc";
    hideScreen(loadScreen);
    run();
})