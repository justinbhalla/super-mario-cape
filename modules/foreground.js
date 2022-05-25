import { levels } from "../main.js";

const foreground = {
  screens: {
    iris: document.getElementById("iris"),
    fade: document.getElementById("fade"),
    menu: document.getElementById("menu"),
    tutorial: document.getElementById("tutorial"),
    loader: document.getElementById("loader"),
    text: document.getElementById("text"),
  },

  show(screenName) {
    const screen = this.screens[screenName];

    switch (screen) {
      case fade:
        screen.classList.add("fade-active");
        break;
      case text:
        const { name } = levels.getCurrent();
        screen.innerText = `${name}`;
        break;
    }

    screen.classList.remove("hidden");
  },

  hide(screenName) {
    const screen = this.screens[screenName];

    switch (screen) {
      case fade:
        screen.classList.remove("fade-active");
        break;
    }

    screen.classList.add("hidden");
  },
};

export default foreground;
