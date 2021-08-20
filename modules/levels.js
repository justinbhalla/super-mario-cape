import { game, elements, CANVAS_MID_Y, Elements} from "../main.js";

let { SuperKoopa, Parakoopa, FlyingGoomba, FlyingBrother,
    Chainsaw, BigBoo, BigBubble, BooBuddy, Eerie, BanzaiBill,
    BulletBillDiagonal, BulletBillLinear, Grinder, Star } = Elements;

class Level {
    constructor(backgroundPosY, audio, volume) {
        this.backgroundPosY = backgroundPosY;
        this.audio = audio;//new Audio(`sounds/${audio}.mp3`);
        this.volume = volume;
    }
}

const LEVEL_1 = new Level(-760, "overworld", 0.4);
const LEVEL_2 = new Level(-1520, "athletic", 0.45);
const LEVEL_3 = new Level(-2280, "haunted", 0.35);
const LEVEL_4 = new Level(-3040, "castle", 0.8);
const FINALE = new Level(-3800,"ending", 0.5);

LEVEL_1.spawn = () => {
    spawnElement(1, new SuperKoopa(CANVAS_MID_Y, "red"));
    spawnElement(1.5, new Grinder(CANVAS_MID_Y));
    spawnElement(2, new Grinder(CANVAS_MID_Y));
    spawnElement(2.5, new Grinder(CANVAS_MID_Y));
    spawnElement(3, new Grinder(CANVAS_MID_Y));
    spawnElement(6, new Grinder(CANVAS_MID_Y));
    
    spawnElement(6, new Star());
}

LEVEL_2.spawn = () => {
    spawnElement(1, new Parakoopa(300, "green"));
    spawnElement(2, new Parakoopa(300, "blue"));
    spawnElement(3, new FlyingGoomba(300));
    spawnElement(3, new FlyingBrother(0));
    spawnElement(3, new Chainsaw(400));
    spawnElement(4, new Grinder(300));
    spawnElement(6, new Star());   
}

LEVEL_3.spawn = () => {
    spawnElement(1, new BooBuddy(300));
    spawnElement(1, new BooBuddy(100));
    spawnElement(1, new BooBuddy(700));
    spawnElement(2, new BigBoo(300));
    spawnElement(3, new BigBubble(300));
    spawnElement(4, new Eerie(300));
    spawnElement(6, new Star());
}

LEVEL_4.spawn = () => {
    spawnElement(1, new BulletBillLinear(300));
    spawnElement(2, new BulletBillDiagonal("up"));
    spawnElement(3, new BulletBillDiagonal("down"));
    spawnElement(4, new BanzaiBill(300));
    spawnElement(5, new Grinder(300));
    spawnElement(6, new Star());
}

FINALE.spawn = () => {
    
}

function spawnElement(delay, element) {
    let timeout = setTimeout(() => elements.push(element), delay * 1000);
    game.timeouts.push(timeout);
}

export default [LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, FINALE];