function moveLinear(element) {
    element.xPos -= element.xSpeed;
}

function moveWave(element) {
    let {yIni, waveSize, waveType, waveRate, time} = element;
    element.yPos = yIni + waveSize * Math[waveType](time * waveRate);
    element.xPos -= element.xSpeed;
}

function moveCurve(element) {
    let {yIni, curveSize, curveRate, time} = element;
    element.yPos = yIni + curveSize * Math.sqrt(time * curveRate);
    element.xPos -= element.xSpeed;
}

function detectHit(element) {
    if (gamePause) return;

    let {
        xBox: ex1,
        yBox: ey1,
        wBox: ew,
        hBox: eh
    } = element;

    let {
        xBox: mx1,
        yBox: my1,
        wBox: mw,
        hBox: mh
    } = gamePlayer;

    let [ex2, mx2] = [ex1 + ew, mx1 + mw];
    let [ey2, my2] = [ey1 + eh, my1 + mh];
    let collision = !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
        
    if (collision && element instanceof Star) passScene();
    else if (collision) deathScene();    
}

function moveHitbox(element) {
    let {xPos, yPos, xOff, yOff} = element;
    element.xBox = xPos + xOff;
    element.yBox = yPos + yOff;
}

function animateSprite(element) {
    if (gamePause) return; 

    let {spriteFrame, spriteLength} = element;
    
    if (spriteFrame === spriteLength - 1) {
        element.spriteFrame = 0;
    } else {
        element.spriteFrame++;
    }
}

function drawImage({image, spriteFrame, xPos,yPos}) {
    let xSrc = image.width * spriteFrame;
    let wSrc = image.width;
    let hSrc = image.height;
    ctx.drawImage(image, xSrc,0, wSrc,hSrc, xPos,yPos, wSrc,hSrc);
}

function spawnElement(delay, element) {
    let timeout = setTimeout(() => gameElements.push(element), delay * 1000);
    gameTimeouts.push(timeout);
}

function drawBackground() {
    if (!gamePause || gameState === "START" || gameState === "END") {
        let x = parseInt(background.style.backgroundPositionX);
        background.style.backgroundPositionX = `${x - backgroundSpeed}px`;
    }

    ctx.clearRect(0,0, CANVAS_W, CANVAS_H);
}

function showScreen(screen) {
    switch(screen) {
        case background:
            background.style.animation = "fadein 0.1s forwards";
            break;
        case irisScreen:
            irisScreen.style.borderLeftWidth = "680px";
            irisScreen.style.borderRightWidth = "680px";
            irisScreen.style.borderBottomWidth = "380px";
            irisScreen.style.borderTopWidth = "380px";
            irisScreen.style.transition = "ease-in 1s"
            break;
        case livesScreen:
            screen.style.display = "flex";
            break;
        default:
            screen.style.display = "block";
            break;
    }
}

function hideScreen(screen) {
    switch(screen) {
        case background:
            background.style.animation = "fadeout 2.5s forwards";
            break;
        case irisScreen:
            irisScreen.style.borderLeftWidth = "0px";
            irisScreen.style.borderRightWidth = "0px";
            irisScreen.style.borderBottomWidth = "0px";
            irisScreen.style.borderTopWidth = "0px";
            irisScreen.style.transition = "none"
            break;
        default:
            screen.style.display = "none";
            break;
    }

}

function resetControls() {
    rightHeld = false;
    leftHeld = false;
    downHeld = false;
    upHeld = false;
}

function startLevel() {
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