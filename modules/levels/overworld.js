import { Level, SPAWNER } from "../../main.js";

const OVERWORLD = new Level(
  "Creative Name",
  "haunted",
  "athletic",
  0.5,
  spawnFn
);

function spawnFn() {
  console.log(SPAWNER);
}

export default OVERWORLD;
