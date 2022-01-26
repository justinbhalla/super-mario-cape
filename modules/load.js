const loading = [];

const IMAGE_PATHS = [
  'images/athletic.jpg',
  'images/atlas.png',
  'images/end.jpg',
  'images/haunted.jpg',
  'images/lives.png',
  'images/overworld.jpg',
  'images/sound-off.png',
  'images/sound-on.png',
  'images/title.jpg',
  'images/title.png',
];

const AUDIO_PATHS = [
  'sounds/athletic.mp3',
  'sounds/castle.mp3',
  'sounds/course.wav',
  'sounds/died.wav',
  'sounds/ending.mp3',
  'sounds/fortress.wav',
  'sounds/iris.wav',
  'sounds/jump.wav',
  'sounds/over.wav',
  'sounds/overworld.mp3',
  'sounds/spooky.mp3',
  'sounds/title.mp3',
];

function loadImages(imagePaths) {
  for (let path of imagePaths) {
    let image = new Image();
    image.src = path;
    image['onload'] = function () {
      let index = loading.indexOf(this);
      if (index > -1) loading.splice(index, 1);
    };

    loading.push(image);
  }
}

function loadSounds(soundPaths) {
  for (let path of soundPaths) {
    let audio = new Audio();
    audio.src = path;
    audio['oncanplaythrough'] = function () {
      let index = loading.indexOf(this);
      if (index > -1) loading.splice(index, 1);
    };

    loading.push(audio);
  }
}

loadImages(IMAGE_PATHS);
loadSounds(AUDIO_PATHS);

export { loading };
