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
    let input = e.keyCode;
    switch(e.type) {
        case "keyup":
            if (input === LEFT) leftHeld = false;
            if (input === RIGHT) rightHeld = false;
            if (input === DOWN) downHeld = false;
            if (input === SPACE) spacePressed = false;
            break;
        case "keydown":    
            if (input === LEFT) leftHeld = true;
            if (input === RIGHT) rightHeld = true;
            if (input === DOWN) downHeld = true;
            if (input === SPACE) spacePressed = true;
            break;
    }

    // e.preventDefault();
}