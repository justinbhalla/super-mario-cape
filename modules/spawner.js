import { elements } from "../../main.js";

const SPAWNER = {
  makeOne(Element, yIni, time) {
    const element = new Element(yIni);
    const timeout = setTimeout(() => elements.list.push(element), time * 1000);
    elements.timeouts.push(timeout);
  },

  makeCol(Element, yIni, time, size, padding = 0) {
    const element = new Element(0);
    const { height } = element;
    const spacing = height + padding;

    for (let i = 0; i < size; i++) {
      let yPos = yIni + spacing * i;
      spawnElement(Element, yPos, time);
    }
  },

  makeRow(Element, yIni, time, size, padding = 0) {
    const element = new Element(0);
    const { width } = element;
    const spacing = (width + padding) / 1000;

    for (let i = 0; i < size; i++) {
      let delay = time + spacing * i;
      spawnElement(Element, yIni, delay);
    }
  },
};

export default SPAWNER;
