import { screens, levelScene, deathScene, passScene, hideScreen} from './modules/scenes.js';
import { loading, images } from './modules/load.js';
import playerControls from './modules/controls.js';
import { Mario } from './modules/elements.js';

const CANVAS = document.getElementById("canvas");
const CANVAS_WIDTH = CANVAS.width;
const CANVAS_HEIGHT = CANVAS.height;
const CANVAS_MID_X = CANVAS_WIDTH / 2;
const CANVAS_MID_Y = CANVAS_HEIGHT / 2;
const ctx = canvas.getContext('2d');

const game = {
    state: "START",
    isOn: false,
    scrollSpeed: 5,
    livesStart: 3,
    lives: 3,
    level: 0,
    timeouts: [],
}

const controls = {
    LEFT_BIND: 37,
    RIGHT_BIND: 39,
    UP_1_BIND: 38,
    UP_2_BIND: 32,
    DOWN_BIND: 40,
    isLeft: false,
    isRight: false,
    isUp: false,
    isDown: false,

    reset() {
        this.isLeft = false;
        this.isRight = false;
        this.isUp = false;
        this.isDown = false;
    }
}

const player = new Mario();
const elements = [];
elements.update = () => elements.forEach(e => e.update());
elements.move = () => elements.forEach(e => e.move());

let fpsInterval = 1000 / 60;
let then = Date.now();
let elapsed, now;

function runGame() {
    requestAnimationFrame(runGame);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        drawBackground();    
        player.move();
        elements.update();
        player.update();
        if (game.isOn) elements.move();
        if (player.isDead) deathScene();
        if (player.gotStar) passScene();
    }
}

function drawBackground() {
    if (game.isOn || game.state === "START" || game.state === "END") {
        let currentPos = parseInt(
        screens.background.backgroundPositionX);

        screens.background.backgroundPositionX =
        `${currentPos - game.scrollSpeed}px`;
    }

    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function menuControls(e) {
    if (game.isOn) return;

    let input = e.keyCode;
    if (input === controls.UP_1_BIND ||
        input === controls.UP_2_BIND ) {
        let { state } = game;
        let isStart = state === "START";
        let isRetry = state === "RETRY";
        let isOver = state === "OVER";

        if (isStart) {
            hideScreen(screens.title);
        } else if (isRetry) {
            hideScreen(screens.death);
            game.lives--
        } else if (isOver) {
            hideScreen(screens.over);
            game.lives = game.livesStart;
            game.level = 0;
        }

        if (isStart || isRetry | isOver) levelScene();
    }
}

window.addEventListener("load", () => {
    let interval = setInterval(() => {
        if (loading.length === 0) {
            images.length = 0;
            hideScreen(screens.load);
            document.body.style.background = "#5590cc";
            screens.background.backgroundPositionX = 0;
            screens.background.backgroundPositionY = 0;
            document.addEventListener("keydown", menuControls);
            document.addEventListener("keydown", playerControls);
            document.addEventListener("keyup", playerControls);
            clearInterval(interval);
            runGame();        
        } 
    }, 250);
});

export { default as LEVELS } from './modules/levels.js';
export * as Elements from './modules/elements.js';
export { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_MID_X, CANVAS_MID_Y, 
        ctx, game, controls, player, elements, fpsInterval };