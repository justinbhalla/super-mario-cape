class Level {
  constructor(name, backgroundTheme, musicName, volume, spawnFn) {
    this.name = name;
    this.backgroundTheme = backgroundTheme;
    this.musicName = musicName;
    this.volume = volume;
    this.spawnFn = spawnFn;
  }
}

export default Level;
