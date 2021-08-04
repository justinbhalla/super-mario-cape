const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const SPACE = 38;
const ENTER = 13;

let leftHeld = false;
let rightHeld = false;
let downHeld = false;
let spacePressed = false;

function controls(e) {
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
        case SPACE:
            spacePressed = isHeld;
            break;
    }

    // e.preventDefault();
}