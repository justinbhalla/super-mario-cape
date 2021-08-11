function gameControls(e) {
    if (gamePause === true) return;

    let isHeld = e.type === "keydown" ? true : false;

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
        case UP:
            upHeld = isHeld;
            break;
    }

    // e.preventDefault();
}

function menuControls(e) {
    if (gamePause === false) return;

    if (e.keyCode === UP) {
        let isStart = gameState === "START";
        let isDead = gameState === "DEAD";
        
        if (isStart) {
            cursorSelect.style.cursor = "none";
            changeScreen(titleScreen, false);
            introLevel();
        } else if (isDead) {
            gameTimeouts.forEach(timeout => clearTimeout(timeout));
            changeScreen(deathScreen, false);
            requestAnimationFrame(move);
            gameElements.length = 0;
        }

        if (isStart || isDead) {
            gamePlayer.yPos = CENTER_Y;
            gamePlayer.xPos = 150;
            gameState = "PLAY";
            gamePause = false;
            LEVELS[0].spawn();
        }
    }
}

document.addEventListener("keydown", menuControls);
document.addEventListener("keydown", gameControls);
document.addEventListener("keyup", gameControls);