function run() {   
    ctx.clearRect(0,0, CANVAS_W, CANVAS_H);
    
    if (gameState !== "DEAD") {
        for (let element of gameElements) {
            element.move();
            element.update();
        }
    
        gamePlayer.move();
        scrollBackground();
    }

    drawImage(gamePlayer);
    requestAnimationFrame(run);
}

run();
document.addEventListener("keydown", gameControls);
document.addEventListener("keyup", gameControls);