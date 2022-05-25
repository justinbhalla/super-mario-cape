const background = {
  element: document.getElementById("background"),
  enabled: false,
  speed: 6,
  themes: [
    "athletic",
    "castle",
    "finale",
    "haunted",
    "menu",
    "overworld",
    "plains",
  ],

  change(backgroundTheme) {
    if (this.themes.includes(backgroundTheme)) {
      this.element.classList = [];
      this.element.classList.toggle(`bg-${backgroundTheme}`);
    } else {
      console.log(`Theme '${backgroundTheme}' does not exist.`);
    }
  },

  scroll() {
    const x = parseInt(this.element.style.backgroundPositionX);
    this.element.style.backgroundPositionX = `${x - this.speed}px`;
  },
};

export default background;
