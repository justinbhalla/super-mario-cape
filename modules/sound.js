const sound = {
  enabled: false,

  sfx: {
    worldClear: new Audio("audio/sfx/world-clear.mp3"),
    lostALife: new Audio("audio/sfx/lost-a-life.wav"),
    coin: new Audio("audio/sfx/coin.wav"),
    irisOut: new Audio("audio/sfx/iris-out.wav"),
    capeJump: new Audio("audio/sfx/cape-jump.wav"),
    courseClear: new Audio("audio/sfx/course-clear.wav"),
    fortressClear: new Audio("audio/sfx/fortress-clear.wav"),
    messageBlock: new Audio("audio/sfx/message-block.wav"),
    gameOver: new Audio("audio/sfx/game-over.wav"),
  },

  music: {
    title: new Audio("audio/music/title.mp3"),
    yoshisIsland: new Audio("audio/music/yoshis-island.mp3"),
  },

  play(soundName) {
    if (!this.enabled) return;

    const music = this.music[soundName];
    const sfx = this.sfx[soundName];

    if (music) {
      music.play();
    } else if (sfx) {
      sfx.play();
    } else {
      console.log(`Sound '${soundName}' does not exist.`);
    }
  },

  reset() {
    if (!this.enabled) return;

    const { music, sfx } = this;
    const sounds = [...Object.values(music), ...Object.values(sfx)];
    sounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  },

  toggle() {
    this.enabled = !this.enabled;
  },
};

export default sound;
