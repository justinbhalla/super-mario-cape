const CANVAS = document.getElementById("c");
const CANVAS_W = CANVAS.width;
const CANVAS_H = CANVAS.height;
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2;
const ctx = CANVAS.getContext('2d');

const titleScreen = document.getElementById("title");
const bgStyle = document.getElementById("b").style;
bgStyle.backgroundPositionX = 0;
bgStyle.backgroundPositionY = 0;
const BG_SPEED = 5;

const player = new Mario();
const elements = [player];

function update() {   
    let bgX = parseInt(bgStyle.backgroundPositionX);
    bgStyle.backgroundPositionX = `${bgX - BG_SPEED}px`;
    ctx.clearRect(0,0, CANVAS_W, CANVAS_H);

    for (let element of elements) {
        let {image,spriteFrame,spriteRate, xPos,yPos, time} = element;
        let xSrc = image.width * spriteFrame;
        let wSrc = image.width;
        let hSrc = image.height;
        ctx.drawImage(image, xSrc,0, wSrc,hSrc, xPos,yPos, wSrc,hSrc);
        
        if (element instanceof Enemy) {
            if (Math.round(time) % spriteRate === 0) {
                animateSprite(element);
            }
            
            element.time += 1000 / 60;
            if (xPos < 0) elements.splice(elements.indexOf(element), 1);
        }
        
        moveHitbox(element);
        element.move();
    }

    requestAnimationFrame(update);
}

document.addEventListener("keydown", controls);
document.addEventListener("keyup", controls);
update();