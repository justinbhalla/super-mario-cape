import { Level } from "../../main.js";

const OVERWORLD = new Level("Creative Name", "haunted", "athletic", 0.5, () => {
  this.spawnElement();
  //this is underfined when being created in this way
});

export default OVERWORLD;
