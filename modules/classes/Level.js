import { elements } from "../../main.js";

class Level {
  constructor(name, backgroundTheme, musicName, volume, spawnFn) {
    this.name = name;
    this.backgroundTheme = backgroundTheme;
    this.musicName = musicName;
    this.volume = volume;
    this.spawnFn = spawnFn;
  }

  spawnElement(Element, yIni, time) {
    const element = new Element(yIni);
    const timeout = setTimeout(() => elements.list.push(element), time * 1000);
    elements.timeouts.push(timeout);
  }

  spawnColumn(Element, yIni, time, size, padding = 0) {
    const element = new Element(0);
    const { height } = element;
    const spacing = height + padding;

    for (let i = 0; i < size; i++) {
      let yPos = yIni + spacing * i;
      spawnElement(Element, yPos, time);
    }
  }

  spawnRow(Element, yIni, time, size, padding = 0) {
    const element = new Element(0);
    const { width } = element;
    const spacing = (width + padding) / 1000;

    for (let i = 0; i < size; i++) {
      let delay = time + spacing * i;
      spawnElement(Element, yIni, delay);
    }
  }
}

export default Level;
