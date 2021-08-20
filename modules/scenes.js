import { CANVAS_HEIGHT, CANVAS_MID_X, CANVAS_MID_Y, 
         game, controls, player, elements, LEVELS} from "../main.js"

const levelText = document.getElementById("level-text");
const livesText = document.getElementById("lives-text");
const screens = {
    background: document.getElementById("background-1").style,
    title: document.getElementById("title-screen").style,
    death: document.getElementById("death-screen").style,
    level: document.getElementById("level-screen").style,
    load: document.getElementById("load-screen").style,
    iris: document.getElementById("iris-screen").style,
    over: document.getElementById("over-screen").style,
    lives: document.getElementById("lives-screen").style,
    end: document.getElementById("end-screen").style,
    pass: document.getElementById("pass-screen"),
}

function levelScene() {
    showScreen(screens.lives);
    showScreen(screens.level);
    let currentLevel = LEVELS[game.level];
    screens.background.backgroundPositionY = `${currentLevel.backgroundPosY}px`;
    levelText.innerText = `Level ${game.level + 1}`;
    livesText.innerText = game.lives;
    game.timeouts.forEach(t => clearTimeout(t));
    game.state = "PLAY";    
    elements.length = 0;
    player.isDead = false;
    player.gotStar = false; 
    player.reset();

    setTimeout(() => {
        hideScreen(screens.level);
        currentLevel.spawn();
        game.isOn = true;
    }, 1500);    
}

function deathScene() {
    if (!game.isOn) return;
    game.isOn = false;
    game.state = "DEAD";
    controls.reset();
    
    setTimeout(() => {
        let yPeak = player.yPos - 200;
        let yFlag = true;
        let animate = setInterval(() => {
            let yPos = player.yPos;

            if (yPos > CANVAS_HEIGHT) {
                if (!game.lives) {
                    hideScreen(screens.lives);
                    showScreen(screens.over);
                    game.state = "OVER";
                } else {
                    showScreen(screens.death);
                    game.state = "RETRY";
                }

                clearInterval(animate);
                
            } else if (yPos > yPeak && yFlag) {
                player.yPos -= 10;
            } else if (yPos < yPeak && yFlag) {
                yFlag = false;
            } else {
                player.yPos += 12.5;
            }
        }, 10);
    }, 500)


}

function passScene() {
    if (!game.isOn) return;
    game.isOn = false;
    game.state = "PASS";
    game.level++;
    controls.reset();
    elements.length = 0;
    
    let gameWon = game.level === LEVELS.length - 1;
    let message = gameWon ? "Fortress" : "Course";
    screens.pass.innerText = `${message} Complete`;

    hideScreen(screens.background);
    showScreen(screens.pass.style);

    setTimeout(() => {
        hideScreen(screens.pass.style);
        showScreen(screens.iris);
        showScreen(screens.background);
        
        setTimeout(() => {
            hideScreen(screens.iris);
            

            if (gameWon) {
                endScene();
            } else {
                levelScene();
            }
        }, 1500)
    }, 8200)
}

function endScene() {
    screens.background.backgroundPositionY = `${LEVELS[game.level].backgroundPosY}px`;
    player.xPos = CANVAS_MID_X - player.width / 2;
    player.yPos = CANVAS_MID_Y + 75;
    game.state = "END";
    showScreen(screens.end);
    hideScreen(screens.lives);
    game.scrollSpeed = 2;
}

function showScreen(screen) {
    switch(screen) {
        case screens.background:
            screens.background.animation = "fadein 0.1s forwards";
            break;
        case screens.iris:
            screens.iris.borderLeftWidth = "680px";
            screens.iris.borderRightWidth = "680px";
            screens.iris.borderBottomWidth = "382px";
            screens.iris.borderTopWidth = "382px";
            screens.iris.transition = "ease-in 1s"
            break;
        case screens.lives:
            screen.display = "flex";
            break;
        default:
            screen.display = "block";
            break;
    }
}

function hideScreen(screen) {
    switch(screen) {
        case screens.background:
            screens.background.animation = "fadeout 2.5s forwards";
            break;
        case screens.iris:
            screens.iris.borderWidth = "0px";
            screens.iris.transition = "none"
            break;
        default:
            screen.display = "none";
            break;
    }
}

export { screens, levelScene, deathScene, passScene, 
         endScene, showScreen, hideScreen }