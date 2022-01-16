let loading = [];

function load(assets) {
  for (let a of assets) {
    let ext = a.slice(a.length - 3);
    let isImage = ext === 'png' || ext === 'jpg';
    let element = isImage ? new Image() : new Audio();
    element.src = `${isImage ? 'images' : 'sounds'}/${a}`;
    element[isImage ? 'onload' : 'oncanplaythrough'] = function () {
      let index = loading.indexOf(this);
      if (index > -1) loading.splice(index, 1);
    };

    loading.push(element);
  }
}

load([
  // IMAGES
  'atlas.png',
  'sound-on.png',
  'sound-off.png',
  'lives.png',
  'athletic.jpg',
  'castle.jpg',
  'end.jpg',
  'haunted.jpg',
  'overworld.jpg',
  'title.jpg',

  // SOUND
  'died.wav',
  'course.wav',
  'fortress.wav',
  'iris.wav',
  'over.wav',
  'jump.wav',
  'athletic.mp3',
  'castle.mp3',
  'title.mp3',
  'ending.mp3',
  'spooky.mp3',
  'overworld.mp3',
]);

export { loading };
