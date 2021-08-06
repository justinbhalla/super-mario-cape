const bgStyle = document.getElementById("b").style;
const CANVAS = document.getElementById("c");
const CANVAS_W = CANVAS.width;
const CANVAS_H = CANVAS.height;
const CENTER_X = CANVAS_W / 2;
const CENTER_Y = CANVAS_H / 2;
const ctx = CANVAS.getContext('2d');
const player = new Mario();
const elements = [player];
const BG_SPEED = 5;
bgStyle.backgroundPositionX = 0;

function update() {   
    ctx.clearRect(0,0, CANVAS_W,CANVAS_H);
    bgStyle.backgroundPositionX = `${parseInt(
        bgStyle.backgroundPositionX) - BG_SPEED
    }px`
    
    for (let element of elements) {
        let {image,spriteFrame,spriteRate,
        wBox,hBox, xPos,yPos, time} = element;
        let xSrc = image.width * spriteFrame;
        let wSrc = image.width;
        let hSrc = image.height;
        ctx.drawImage(image, xSrc,0, wSrc,hSrc, xPos,yPos, wSrc,hSrc);
        
        if (element instanceof Enemy) {
            if (Math.round(time) % spriteRate === 0) {
                animateSprite(element);
            }
            
            element.time += 1000 / 60;
        }
        
        moveHitbox(element);
        element.move();
    }

    requestAnimationFrame(update);
}

document.addEventListener("keydown", controls);
document.addEventListener("keyup", controls);
update();