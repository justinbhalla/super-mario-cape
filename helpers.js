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

function scrollBackground() {
    let x = parseInt(background.style.backgroundPositionX);
    background.style.backgroundPositionX = `${x - BG_SPEED}px`;

}

function changeScreen(screen, bool) {
    if (screen === background && bool) {
        background.style.animation = "fadein 0.1s forwards";
    } else if (screen === background) {
        background.style.animation = "fadeout 2.5s forwards";
    } else {
        screen.style.display = bool ? "block" : "none";
    }
}