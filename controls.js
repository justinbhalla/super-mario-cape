const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const UP = 38;
const ENTER = 13;

let leftHeld = false;
let rightHeld = false;
let downHeld = false;
let upHeld = false;

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
        case UP:
            upHeld = isHeld;
            break;
    }

    // e.preventDefault();
}