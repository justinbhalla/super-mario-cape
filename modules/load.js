const loading = [];

const IMAGE_PATHS = [
  'images/atlas/atlas.png',
  'images/levels/bg-plains.jpg',
  'images/levels/bg-athletic.jpg',
  'images/levels/bg-finale.jpg',
  'images/levels/bg-haunted.jpg',
  'images/levels/bg-overworld.jpg',
  'images/graphics/lives.png',
  'images/graphics/sound-off.png',
  'images/graphics/sound-on.png',
  'images/graphics/title.png',
];

const AUDIO_PATHS = [
  'audio/music/yoshis-island.mp3',
  'audio/music/athletic.mp3',
  'audio/music/cast-list.mp3',
  'audio/music/fortress.mp3',
  'audio/music/ghost-house.mp3',
  'audio/music/overworld.mp3',
  'audio/music/title.mp3',
  'audio/sfx/cape-jump.wav',
  'audio/sfx/course-clear.wav',
  'audio/sfx/fortress-clear.wav',
  'audio/sfx/game-over.wav',
  'audio/sfx/iris-out.wav',
  'audio/sfx/message-block.wav',
  'audio/sfx/lost-a-life.wav',
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
