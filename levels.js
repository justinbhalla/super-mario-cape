class Level {
    constructor(audio, volume, duration) {
        this.duration = duration;
        this.audio = //new Audio(`sounds/${audio}.mp3`);
        this.volume = volume;
    }
}

const LEVEL_1 = new Level("overworld", 0.4, 15 );
const LEVEL_2 = new Level("athletic", 0.45, 15);
const LEVEL_3 = new Level("haunted", 0.35, 15);
const LEVEL_4 = new Level("castle", 0.8, 15);
const FINALE = new Level("ending", 0.5, 250);
const LEVELS = [LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, FINALE];
let currentLevel = 0;