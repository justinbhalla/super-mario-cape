import { Level, SPAWNER, YellowParakoopa } from "../../main.js";

const OVERWORLD = new Level(
  "Creative Name",
  "haunted",
  "athletic",
  0.5,
  spawnFn
);

function spawnFn() {
  SPAWNER.makeOne(YellowParakoopa, 400, 1);
}

export default OVERWORLD;
