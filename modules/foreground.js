import { levels, player } from "../main.js";

const foreground = {
  screens: {
    iris: document.getElementById("iris"),
    fade: document.getElementById("fade"),
    menu: document.getElementById("menu"),
    tutorial: document.getElementById("tutorial"),
    loader: document.getElementById("loader"),
    text: document.getElementById("text"),
    death: document.getElementById("death"),
    hud: document.getElementById("hud"),
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
      case hud:
        const { lives } = player;
        hud.innerText = lives;
        break;
      case death:
        const { xBox, wBox, yPos } = player;
        const centerX = xBox + wBox / 2;
        death.style.backgroundPosition = `${centerX}px ${yPos}px`;
        setTimeout(() => death.classList.add("falling"), 500);
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
      case death:
        screen.classList.remove("falling");
        break;
    }

    screen.classList.add("hidden");
  },
};

export default foreground;
