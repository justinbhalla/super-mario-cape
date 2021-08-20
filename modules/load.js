let loading = [];
let images = Array.from([
    "atlas.png"
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