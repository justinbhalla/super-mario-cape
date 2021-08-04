function moveHitbox(element) {
    let {xPos, yPos, xOff, yOff} = element;
    element.xBox = xPos + xOff;
    element.yBox = yPos + yOff;
}