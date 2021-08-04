// hitbox code
// ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
function moveHitbox(element) {
    let {xPos, yPos, xOff, yOff} = element;
    element.xBox = xPos + xOff;
    element.yBox = yPos + yOff;
}  

// Hit box helper
// ctx.fillRect(element.xBox, element.yBox, wBox, hBox);