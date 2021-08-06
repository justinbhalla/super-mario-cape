function moveHitbox(element) {
    let {xPos, yPos, xOff, yOff} = element;
    element.xBox = xPos + xOff;
    element.yBox = yPos + yOff;
}

function detectHit(enemy) {
    let {
        xBox: ex1,
        yBox: ey1,
        wBox: ew,
        hBox: eh
    } = enemy;

    let {
        xBox: mx1,
        yBox: my1,
        wBox: mw,
        hBox: mh
    } = player;

    let [ex2, mx2] = [ex1 + ew, mx1 + mw];
    let [ey2, my2] = [ey1 + eh, my1 + mh];

    return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
}

function animateSprite(enemy) {
    let {spriteFrame, spriteLength} = enemy;
    
    if (spriteFrame === spriteLength - 1) {
        enemy.spriteFrame = 0;
    } else {
        enemy.spriteFrame++;
    }
}

function spawnEnemy(enemy, timeout) {
    setTimeout(() => elements.push(enemy), timeout * 1000);
}