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
        switch(gameState) {
            case "START":
                changeScreen(titleScreen, false);
                gamePause = false;
                gameState = "PLAY";
                LEVELS[0].spawn();
                break;
            case "DEAD":
                changeScreen(deathScreen, false);
                requestAnimationFrame(move);
                gamePause = false;
                gamePlayer.xPos = 200;
                gamePlayer.yPos = 200;
                gameElements.length = 0;
                gameState = "PLAY";
                LEVELS[0].spawn();
                break;
        }
    }
}

document.addEventListener("keydown", menuControls);
document.addEventListener("keydown", gameControls);
document.addEventListener("keyup", gameControls);