class Level {
    constructor(audio, volume) {
        this.audio = audio;//new Audio(`sounds/${audio}.mp3`);
        this.volume = volume;
    }
}

const LEVEL_1 = new Level("overworld", 0.4);
const LEVEL_2 = new Level("athletic", 0.45);
const LEVEL_3 = new Level("haunted", 0.35);
const LEVEL_4 = new Level("castle", 0.8);
const FINALE = new Level("ending", 0.5);

LEVEL_1.spawner = () => {}
LEVEL_2.spawner = () => {}
LEVEL_3.spawner = () => {}
LEVEL_4.spawner = () => {}