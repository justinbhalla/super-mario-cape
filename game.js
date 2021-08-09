function update() {   
    ctx.clearRect(0,0, CANVAS_W, CANVAS_H);
    gameElements.update();
    gamePlayer.update();
    updateReq = requestAnimationFrame(update);
}

function move() {
    gameElements.move();
    gamePlayer.move();
    scrollBackground();
    moveReq = requestAnimationFrame(move);
}

function menu(e) {
    if (e.keyCode === UP) {
        switch(gameState) {
            case "START":
                changeScreen(titleScreen, false);
                gameState = "PLAY";
                gameLevel++
                LEVELS[gameLevel].spawn();
                break;
            case "DEAD":
                changeScreen(deathScreen, false);
                gamePlayer.spriteFrame = 0;
                gamePlayer.xPos = 200;
                gamePlayer.yPos = 200;
                gameElements.length = 0;
                gameState = "PLAY";
                LEVELS[gameLevel].spawn();
                break;
        }
    }
}

function deathScene() {
    setTimeout(() => cancelAnimationFrame(moveReq));
    gamePlayer.spriteFrame = 3;
    let yPeak = gamePlayer.yPos - 200;
    let yFlag = true;

    setTimeout(() => {
        let animate = setInterval(() => {
            let yPos = gamePlayer.yPos;

            if (yPos > CANVAS_H) {
                clearInterval(animate);
                gameState = "DEAD";
                deathScreen.style.display = "block";
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
document.addEventListener("keydown", menu);