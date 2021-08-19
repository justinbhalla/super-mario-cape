let loading = [];
let images = Array.from([
    "banzai-bill.png",
    "big-boo.png",
    "big-bubble.png",
    "boo-buddy-0.png",
    "boo-buddy-1.png",
    "boo-buddy-2.png",
    "bullet-bill-diagonal-down.png",
    "bullet-bill-diagonal-up.png",
    "bullet-bill-linear.png",
    "chainsaw.png",
    "eerie.png",
    "flying-brother.png",
    "flying-goomba.png",
    "grinder.png",
    "lives.png",
    "mario.png",
    "parakoopa-blue.png",
    "parakoopa-green.png",
    "parakoopa-red.png",
    "parakoopa-yellow.png",
    "sound-on.png",
    "star.png",
    "super-koopa-red.png",
    "super-koopa-yellow.png",
    "levels.jpg"
], load);

function load(asset) {
    let ext = asset.slice(asset.length - 3);
    let isImage = ext === "png" || ext === "jpg";
    let element = isImage ? new Image() : new Audio();
    element.src = `${isImage ? "images" : "sounds"}/${asset}`;
    element[isImage ? "onload" : "oncanplaythrough"] = function() {
        let index = loading.indexOf(this);
        if (index > -1) loading.splice(index, 1);
    }

    loading.push(element);
}

export { loading, images }