function detectHit(element) {
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

    return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
}

function moveHitbox(element) {
    let {xPos, yPos, xOff, yOff} = element;
    element.xBox = xPos + xOff;
    element.yBox = yPos + yOff;
}

function animateSprite(element) {
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

function spawnElement(element, timeout) {
    setTimeout(() => gameElements.push(element), timeout * 1000);
}

function changeScene() {
    switch(gameState) {
        case "START":
            titleScreen.style.display = "none";
            gameState = "PLAY";
            gameLevel = 0;
            LEVELS[gameLevel].spawn();
            break;
        case "DEAD":
            gamePlayer.spriteFrame = 3;
            setTimeout(() => {
                let yPos = gamePlayer.yPos;
                let yPeak = gamePlayer.yPos - 200;
                
                let animate = setInterval(() => {                    
                    if (yPos > CANVAS_H) {
                        clearInterval(animate);
                        setTimeout(() => {
                            //show deadscreen
                            console.log("deadscreen")
                        }, 1500)
                    } else if (yPos > yPeak) {
                        gamePlayer.yPos -= 10;
                    } else {
                        gamePlayer.yPos += 12.5;
                    }    
            }, 10)}, 500);
            break;
    }
}

function scrollBackground() {
    let x = parseInt(background.style.backgroundPositionX);
    background.style.backgroundPositionX = `${x - BG_SPEED}px`;
}