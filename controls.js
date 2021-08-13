function gameControls(e) {
    if (gamePause === true) return;

    let isHeld = e.type === "keydown";
    let jumpFlag = false;

    switch(e.keyCode) {
        case LEFT:
            leftHeld = isHeld;
            break;
        case RIGHT:
            rightHeld = isHeld;
            break;
        case DOWN:
            downHeld = isHeld;
            break;
        case UP_1:
        case UP_2:
            if (!jumpFlag && isHeld) {
                jumpFlag = true;
                // gamePlayer.audio.currentTime = 0;
                // gamePlayer.audio.play();
            } else if (!isHeld) {
                jumpFlag = false;
                // gamePlayer.audio.pause();
            }

            upHeld = isHeld;
            break;
    }

    // e.preventDefault();
}

function menuControls(e) {
    if (gamePause === false) return;

    let input = e.keyCode;
    if (input === UP_1 || input === UP_2 ) {
        let isStart = gameState === "START";
        let isRetry = gameState === "RETRY";
        let isOver = gameState === "OVER";

        if (isStart) {
            cursorSelect.style.cursor = "none";
            hideScreen(titleScreen);
            showScreen(livesScreen);
        } else if (isRetry) {
            hideScreen(deathScreen);
            gamePlayer.lives--;
        } else if (isOver) {
            hideScreen(overScreen);
            gamePlayer.lives = gamePlayer.startLives;
            gameLevel = 0;
        }

        if (isStart || isRetry | isOver) startLevel();
    }
}

document.addEventListener("keydown", menuControls);
document.addEventListener("keydown", gameControls);
document.addEventListener("keyup", gameControls);