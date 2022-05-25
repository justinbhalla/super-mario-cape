import {
  levels,
  background,
  foreground,
  sound,
  player,
  controller,
} from "../main.js";

const storyboard = {
  state: "LOAD",

  transitions: {
    LOAD: {
      play(timeout) {
        background.enabled = true;
        background.element.style.backgroundPositionX = 0;
        background.change("menu");

        setTimeout(() => {
          foreground.hide("loader");
          this.changeState("START");
        }, timeout);
      },
    },

    START: {
      play(timeout) {
        foreground.show("fade");
        sound.reset();
        sound.play("coin");

        setTimeout(() => {
          player.reset();
          background.change("athletic");
          foreground.hide("menu");
          foreground.hide("fade");
          foreground.show("tutorial");
          sound.play("worldClear");
          this.changeState("TUTORIAL");
        }, timeout);
      },
    },

    TUTORIAL: {
      play(timeout) {
        foreground.show("fade");
        sound.reset();
        sound.play("coin");

        setTimeout(storyboard.playLevel, timeout);
      },
    },

    LEVEL: {
      prepare(actionName, timeout) {
        game.isPlaying = false;
        game.isScrolling = false;
        elements.player.reset();
        controller.reset();
        hideScreen(fade);
        hideScreen(tutorial);
        showScreen(text);
        setTimeout(() => this[actionName], timeout);
      },

      play() {
        game.isPlaying = true;
        game.isScrolling = true;
        game.timeouts.forEach((t) => clearTimeout(t));
        elements.enemies.length = 0;
        elements.player.isDead = false;
        elements.player.gotStar = false;
        const level = LEVELS[game.level];
        level.spawn();
        hideScreen(text);
        this.changeScene("LEVEL");
      },
    },
  },

  playLevel() {
    const level = levels.getCurrent();
    const { backgroundTheme, musicName } = level;

    player.reset();
    background.change(backgroundTheme);
    foreground.hide("tutorial");
    foreground.hide("fade");
    foreground.show("text");
    sound.play(musicName);

    setTimeout(() => {
      foreground.hide("text");
      level.spawnFn();
      storyboard.changeState("LEVEL");
    }, 1000);
  },

  dispatch(actionName, ...args) {
    const action = this.transitions[this.state][actionName];

    if (action) {
      action.apply(storyboard, ...args);
    } else {
      console.log(
        `Action '${actionName}' for state '${this.state}' does not exist.`
      );
    }
  },

  changeState(newState) {
    this.state = newState;
  },

  canPlay() {
    const { state } = this;
    return (
      (state === "TUTORIAL" && !player.passedTutorial) || state === "LEVEL"
    );
  },

  passedTutorial() {
    return this.state === "TUTORIAL" && player.passedTutorial;
  },
};

export default storyboard;
