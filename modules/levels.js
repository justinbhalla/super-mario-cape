import { game, elements, CANVAS_HEIGHT, CANVAS_MID_Y, Elements} from "../main.js";

let { SuperKoopa, Parakoopa, FlyingGoomba, FlyingBrother,
    Chainsaw, BigBoo, BigBubble, BooBuddy, Eerie, BanzaiBill,
    BulletBillDiagonal, BulletBillLinear, Grinder, Star } = Elements;

class Level {
    constructor(name, background, audio, volume) {
        this.name = name;
        this.background = `url(${background})`;
        this.audio = new Audio(`sounds/${audio}.mp3`);
        this.volume = volume;
    }
}

const OVERWORLD = new Level("The Basics", "images/overworld.jpg", "overworld", 0.4);
const ATHLETIC = new Level("Koopa Dragon", "images/athletic.jpg", "athletic", 0.45);
const HAUNTED = new Level("Spooooky", "images/haunted.jpg", "spooky", 0.35);
const CASTLE = new Level("You're Doomed", "images/castle.jpg", "castle", 0.8);

OVERWORLD.spawn = () => {
    spawnElement(1, new SuperKoopa(0, "yellow"));
    spawnElement(1, new SuperKoopa(100, "yellow"));
    spawnElement(1, new SuperKoopa(200 , "yellow"));
    spawnElement(2.5, new SuperKoopa(600, "red"));
    spawnElement(2.5, new SuperKoopa(100, "red"));
    spawnElement(4, new Parakoopa(300, "red"));    
    spawnElement(5, new Parakoopa(400, "yellow"));
    spawnElement(6, new FlyingGoomba(250));
    spawnElement(8, new Parakoopa(350, "yellow"));
    spawnElement(8.5, new Parakoopa(300, "yellow"));
    spawnElement(9, new Parakoopa(300, "yellow"));
    spawnElement(9.5, new Parakoopa(300, "yellow"));
    spawnElement(10, new Parakoopa(300, "yellow"));
    spawnElement(10.5, new Parakoopa(300, "yellow"));
    spawnElement(11, new FlyingGoomba(0));
    spawnElement(11, new FlyingGoomba(100));
    spawnElement(11, new FlyingGoomba(200));
    spawnElement(11, new FlyingGoomba(300));
    spawnElement(11, new FlyingGoomba(400));
    spawnElement(13, new FlyingGoomba(250));
    spawnElement(13, new FlyingGoomba(350));
    spawnElement(13, new FlyingGoomba(450));
    spawnElement(13, new FlyingGoomba(550));
    spawnElement(13, new FlyingGoomba(650));
    spawnElement(16, new SuperKoopa(100, "yellow"));
    spawnElement(16.25, new SuperKoopa(100, "yellow"));
    spawnElement(16.5, new SuperKoopa(100, "yellow"));
    spawnElement(16.75, new SuperKoopa(100, "yellow"));
    spawnElement(17, new SuperKoopa(100, "yellow"));
    spawnElement(18.5, new FlyingGoomba(200));
    spawnElement(19.5, new FlyingGoomba(200));
    spawnElement(18, new FlyingGoomba(625));
    spawnElement(19, new FlyingGoomba(625));
    spawnElement(20, new FlyingGoomba(625));
    spawnElement(18.50, new SuperKoopa(100, "red"));
    spawnElement(18.75, new SuperKoopa(100, "red"));
    spawnElement(19, new SuperKoopa(100, "red"));
    spawnElement(19.25, new SuperKoopa(100, "red"));
    spawnElement(19.5, new SuperKoopa(100, "red"));
    spawnElement(19.75, new SuperKoopa(100, "red"));
    spawnElement(20, new SuperKoopa(100, "red"));
    spawnElement(20.25, new SuperKoopa(100, "red"));
    spawnElement(20.5, new SuperKoopa(100, "red"));
    spawnElement(20.75, new SuperKoopa(100, "red"));
    spawnElement(21, new SuperKoopa(100, "red"));
    spawnElement(22, new Parakoopa(100, "yellow"));
    spawnElement(22.5, new Parakoopa(100, "yellow"));
    spawnElement(23, new Parakoopa(100, "yellow"));
    spawnElement(24.5, new Parakoopa(500, "red"));
    spawnElement(25, new Parakoopa(500, "red"));
    spawnElement(25.5, new Parakoopa(500, "red"));
    spawnElement(26, new Parakoopa(500, "red"));
    spawnElement(28, new Star());
}

ATHLETIC.spawn = () => {
    spawnElement(1.5, new Parakoopa(CANVAS_MID_Y, "green"));
    spawnElement(1.5, new Parakoopa(CANVAS_MID_Y, "blue", true));
    spawnElement(2.5, new Parakoopa(100, "green"));
    spawnElement(2.5, new Parakoopa(100, "blue", true));
    spawnElement(3.5, new Parakoopa(550, "green"));
    spawnElement(3.5, new Parakoopa(550, "blue", true));
    spawnElement(4.0, new Parakoopa(100, "green"));
    spawnElement(4.25, new Parakoopa(100, "green"));
    spawnElement(4.5, new Parakoopa(100, "green"));
    spawnElement(4.75, new Parakoopa(100, "green"));
    spawnElement(5.25, new Parakoopa(550, "blue", true));
    spawnElement(5.5, new Parakoopa(550, "blue", true));
    spawnElement(5.75, new Parakoopa(550, "blue", true));
    spawnElement(6, new Parakoopa(550, "blue", true));
    spawnElement(6.75, new FlyingBrother(CANVAS_MID_Y - 350));
    spawnElement(7.0, new FlyingBrother(CANVAS_MID_Y - 350));
    spawnElement(7.25, new FlyingBrother(CANVAS_MID_Y - 350));
    spawnElement(7.5, new FlyingBrother(CANVAS_MID_Y - 350));
    spawnElement(7.75, new FlyingBrother(CANVAS_MID_Y - 350));
    spawnElement(8, new FlyingBrother(CANVAS_MID_Y - 350));
    
    spawnElement(7, new Chainsaw(CANVAS_MID_Y - 300));
    spawnElement(7, new Chainsaw(CANVAS_MID_Y + 200));
    spawnElement(7.25, new Chainsaw(CANVAS_MID_Y - 300));
    spawnElement(7.25, new Chainsaw(CANVAS_MID_Y + 200));
    spawnElement(7.5, new Chainsaw(CANVAS_MID_Y - 300));
    spawnElement(7.5, new Chainsaw(CANVAS_MID_Y + 200));
    spawnElement(7.75, new Chainsaw(CANVAS_MID_Y - 300));
    spawnElement(7.75, new Chainsaw(CANVAS_MID_Y + 200));

    spawnElement(8, new Chainsaw(CANVAS_MID_Y - 350));
    spawnElement(8, new Chainsaw(CANVAS_MID_Y + 150));
    spawnElement(8.25, new Chainsaw(CANVAS_MID_Y - 350));
    spawnElement(8.25, new Chainsaw(CANVAS_MID_Y + 150));
    spawnElement(8.5, new Chainsaw(CANVAS_MID_Y - 350));
    spawnElement(8.5, new Chainsaw(CANVAS_MID_Y + 150));
    spawnElement(8.75, new Chainsaw(CANVAS_MID_Y - 350));
    spawnElement(8.75, new Chainsaw(CANVAS_MID_Y + 150));

    spawnElement(9, new Chainsaw(CANVAS_MID_Y - 400));
    spawnElement(9, new Chainsaw(CANVAS_MID_Y + 100));
    spawnElement(9.25, new Chainsaw(CANVAS_MID_Y - 400));
    spawnElement(9.25, new Chainsaw(CANVAS_MID_Y + 100));
    spawnElement(9.5, new Chainsaw(CANVAS_MID_Y - 400));
    spawnElement(9.5, new Chainsaw(CANVAS_MID_Y + 100));
    spawnElement(9.75, new Chainsaw(CANVAS_MID_Y - 400));
    spawnElement(9.75, new Chainsaw(CANVAS_MID_Y + 100));

    spawnElement(10, new Chainsaw(CANVAS_MID_Y - 450));
    spawnElement(10, new Chainsaw(CANVAS_MID_Y + 50));
    spawnElement(10.25, new Chainsaw(CANVAS_MID_Y - 450));
    spawnElement(10.25, new Chainsaw(CANVAS_MID_Y + 50));
    spawnElement(10.5, new Chainsaw(CANVAS_MID_Y - 450));
    spawnElement(10.5, new Chainsaw(CANVAS_MID_Y + 50));
    spawnElement(10.75, new Chainsaw(CANVAS_MID_Y - 450));
    spawnElement(10.75, new Chainsaw(CANVAS_MID_Y + 50));

    spawnElement(11, new Chainsaw(CANVAS_MID_Y - 500));
    spawnElement(11, new Chainsaw(CANVAS_MID_Y));
    spawnElement(11.25, new Chainsaw(CANVAS_MID_Y - 500));
    spawnElement(11.25, new Chainsaw(CANVAS_MID_Y));
    spawnElement(11.5, new Chainsaw(CANVAS_MID_Y - 500));
    spawnElement(11.5, new Chainsaw(CANVAS_MID_Y));
    spawnElement(11.75, new Chainsaw(CANVAS_MID_Y - 500));
    spawnElement(11.75, new Chainsaw(CANVAS_MID_Y));

    spawnElement(12, new Chainsaw(CANVAS_MID_Y - 600));
    spawnElement(12, new Chainsaw(CANVAS_MID_Y - 50));
    spawnElement(12.25, new Chainsaw(CANVAS_MID_Y - 600));
    spawnElement(12.25, new Chainsaw(CANVAS_MID_Y - 50));
    spawnElement(12.5, new Chainsaw(CANVAS_MID_Y - 600));
    spawnElement(12.5, new Chainsaw(CANVAS_MID_Y - 50));
    spawnElement(12.75, new Chainsaw(CANVAS_MID_Y - 600));
    spawnElement(12.75, new Chainsaw(CANVAS_MID_Y - 50));

    spawnElement(13.25, new Chainsaw(176));
    spawnElement(13.75, new Chainsaw(176*2));
    spawnElement(14.25, new Chainsaw(176*3));
    spawnElement(14.75, new Chainsaw(176*4));
    spawnElement(15.25, new Chainsaw(176*5));

    spawnElement(14.5, new Chainsaw(0));
    spawnElement(15, new Chainsaw(176));
    spawnElement(15.50, new Chainsaw(176*2));

    spawnElement(13.25, new Chainsaw(176));
    spawnElement(13.75, new Chainsaw(176*2));
    spawnElement(14.25, new Chainsaw(176*3));
    spawnElement(14.75, new Chainsaw(176*4));
    spawnElement(15.25, new Chainsaw(176*5));

    spawnElement(15.75, new Chainsaw(176*5));
    spawnElement(16.25, new Chainsaw(176*4));
    spawnElement(16.75, new Chainsaw(176*3));
    spawnElement(17.25, new Chainsaw(176*2));
    spawnElement(17.75, new Chainsaw(176));

    spawnElement(20.5, new Chainsaw(176*4));
    spawnElement(22, new Chainsaw(176*4));
    spawnElement(20.5, new Chainsaw(176*3));
    spawnElement(22, new Chainsaw(176*3));

    //
    spawnElement(23.0, new Parakoopa(CANVAS_MID_Y - 400, "blue"));
    spawnElement(23.0, new Parakoopa(CANVAS_MID_Y - 300, "blue"));
    spawnElement(23.0, new Parakoopa(CANVAS_MID_Y - 200, "blue"));
    spawnElement(23.1, new Parakoopa(CANVAS_MID_Y - 400, "green"))
    spawnElement(23.1, new Parakoopa(CANVAS_MID_Y - 300, "green"))
    spawnElement(23.1, new Parakoopa(CANVAS_MID_Y  - 200, "green"))
    spawnElement(23.2, new Parakoopa(CANVAS_MID_Y - 400, "blue"))
    spawnElement(23.2, new Parakoopa(CANVAS_MID_Y - 300, "blue"))
    spawnElement(23.2, new Parakoopa(CANVAS_MID_Y - 200, "blue"))
    spawnElement(23.3, new Parakoopa(CANVAS_MID_Y - 400, "green"))
    spawnElement(23.3, new Parakoopa(CANVAS_MID_Y - 300, "green"))
    spawnElement(23.3, new Parakoopa(CANVAS_MID_Y - 200, "green"))
    spawnElement(23.4, new Parakoopa(CANVAS_MID_Y - 400, "blue"))
    spawnElement(23.4, new Parakoopa(CANVAS_MID_Y - 300, "blue"))
    spawnElement(23.4, new Parakoopa(CANVAS_MID_Y - 200, "blue"))
    spawnElement(23.5, new Parakoopa(CANVAS_MID_Y - 400, "green"))
    spawnElement(23.5, new Parakoopa(CANVAS_MID_Y - 300, "green"))
    spawnElement(23.5, new Parakoopa(CANVAS_MID_Y - 200, "green"))
    spawnElement(23.6, new Parakoopa(CANVAS_MID_Y - 400, "blue"))
    spawnElement(23.6, new Parakoopa(CANVAS_MID_Y - 300, "blue"))
    spawnElement(23.6, new Parakoopa(CANVAS_MID_Y - 200, "blue"))
    spawnElement(23.7, new Parakoopa(CANVAS_MID_Y - 400, "green"))
    spawnElement(23.7, new Parakoopa(CANVAS_MID_Y - 300, "green"))
    spawnElement(23.7, new Parakoopa(CANVAS_MID_Y - 200, "green"))

    spawnElement(25.0, new FlyingBrother(-250));
    spawnElement(25.25, new FlyingBrother(-250));
    spawnElement(25.5, new FlyingBrother(-250));
    spawnElement(25.75, new FlyingBrother(-250));
    spawnElement(26, new FlyingBrother(-250));
    spawnElement(26.25, new FlyingBrother(-250));

    spawnElement(25.0, new FlyingBrother(120));
    spawnElement(25.25, new FlyingBrother(120));
    spawnElement(25.5, new FlyingBrother(120));
    spawnElement(25.75, new FlyingBrother(120));
    spawnElement(26, new FlyingBrother(120));
    spawnElement(26.25, new FlyingBrother(120));

    spawnElement(28, new Star());
}

HAUNTED.spawn = () => {
    spawnElement(1, new BooBuddy(100))
    spawnElement(1.1, new BooBuddy(100))
    spawnElement(1.2, new BooBuddy(100))
    spawnElement(1.3, new BooBuddy(100))

    spawnElement(1.5, new BooBuddy(500))
    spawnElement(1.6, new BooBuddy(500))
    spawnElement(1.7, new BooBuddy(500))
    spawnElement(1.8, new BooBuddy(500))

    spawnElement(1.9, new BooBuddy(300))
    spawnElement(2.0, new BooBuddy(300))
    spawnElement(2.1, new BooBuddy(300))
    spawnElement(2.2, new BooBuddy(300))

    spawnElement(2.0, new BigBoo(100))

    spawnElement(3.5, new BooBuddy(0))
    spawnElement(3.5, new BooBuddy(75))
    spawnElement(3.5, new BooBuddy(150))
    spawnElement(3.5, new BooBuddy(225))
    spawnElement(3.5, new BooBuddy(500))
    spawnElement(3.5, new BooBuddy(575))
    spawnElement(3.5, new BooBuddy(650))
    spawnElement(3.5, new BooBuddy(725))


    spawnElement(4.2, new BooBuddy(225))
    spawnElement(4.2, new BooBuddy(300))
    spawnElement(4.2, new BooBuddy(375))
    spawnElement(4.2, new BooBuddy(425))
    spawnElement(4.2, new BooBuddy(500))
    spawnElement(4.2, new BooBuddy(575))
    spawnElement(4.2, new BooBuddy(650))
    spawnElement(4.2, new BooBuddy(725))

    spawnElement(5.2, new BooBuddy(0))
    spawnElement(5.2, new BooBuddy(75))
    spawnElement(5.2, new BooBuddy(150))
    spawnElement(5.2, new BooBuddy(225))
    spawnElement(5.2, new BooBuddy(300))
    spawnElement(5.2, new BooBuddy(375))
    spawnElement(5.2, new BooBuddy(450))

    spawnElement(5.4, new BigBoo(CANVAS_MID_Y))
    spawnElement(6.5, new Eerie(CANVAS_MID_Y - 250))
    spawnElement(6.5, new Eerie(CANVAS_MID_Y + 150))
    spawnElement(7.5, new Eerie(CANVAS_MID_Y - 250))
    spawnElement(7.5, new Eerie(CANVAS_MID_Y + 150))
    spawnElement(8.5, new BigBubble(0))

    spawnElement(10, new BigBubble(CANVAS_MID_Y))
    spawnElement(10.5, new BigBubble(CANVAS_MID_Y))

    spawnElement(12, new BigBubble(CANVAS_MID_Y - 150))
    spawnElement(12.5, new BigBubble(CANVAS_MID_Y - 150))
    spawnElement(13.0, new BigBubble(CANVAS_MID_Y - 150))

    spawnElement(14.5, new BigBubble(0))
    spawnElement(14.5, new BigBubble(CANVAS_HEIGHT - 200))

    spawnElement(16.0, new BigBubble(0))
    spawnElement(16.0, new BigBubble(CANVAS_HEIGHT - 200))


    spawnElement(18 + 0.5, new BooBuddy(CANVAS_MID_Y))
    spawnElement(18.1 + 0.5, new BooBuddy(CANVAS_MID_Y + 125))
    spawnElement(18.1 + 0.5, new BooBuddy(CANVAS_MID_Y - 125))
    spawnElement(18.2 + 0.5, new BooBuddy(CANVAS_MID_Y + 225))
    spawnElement(18.2 + 0.5, new BooBuddy(CANVAS_MID_Y - 225))
    spawnElement(18.3 + 0.5, new BooBuddy(CANVAS_MID_Y + 125))
    spawnElement(18.3 + 0.5, new BooBuddy(CANVAS_MID_Y - 125))
    spawnElement(18.4 + 0.5, new BooBuddy(CANVAS_MID_Y))

    let mid = CANVAS_MID_Y - 200
    spawnElement(19.5 + 0.5, new BooBuddy(mid + 125))
    spawnElement(19.6 + 0.5, new BooBuddy(mid))
    spawnElement(19.7 + 0.5, new BooBuddy(mid + 125))
    spawnElement(19.7 + 0.5, new BooBuddy(mid - 125))
    spawnElement(19.8 + 0.5, new BooBuddy(mid))
    spawnElement(19.9 + 0.5, new BooBuddy(mid + 125))

    mid = CANVAS_MID_Y + 150
    spawnElement(21.0 + 0.5, new BooBuddy(mid - 125))
    spawnElement(21.1 + 0.5, new BooBuddy(mid))
    spawnElement(21.2 + 0.5, new BooBuddy(mid + 125))
    spawnElement(21.2 + 0.5, new BooBuddy(mid - 125))
    spawnElement(21.3 + 0.5, new BooBuddy(mid))
    spawnElement(21.4 + 0.5, new BooBuddy(mid - 125))

    mid = CANVAS_MID_Y
    spawnElement(23, new BooBuddy(mid - 175))
    spawnElement(23, new BooBuddy(mid + 125))
    spawnElement(23.1, new BooBuddy(mid - 275))
    spawnElement(23.1, new BooBuddy(mid + 225))
    spawnElement(23.2, new BooBuddy(mid - 375))
    spawnElement(23.2, new BooBuddy(mid + 325))
    spawnElement(23.3, new BooBuddy(mid - 275))
    spawnElement(23.3, new BooBuddy(mid + 225))
    spawnElement(23.4, new BooBuddy(mid - 175))
    spawnElement(23.4, new BooBuddy(mid + 125))

    spawnElement(25, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(26, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y - 225))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y - 225))

    spawnElement(25, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(26, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y - 300))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y - 300))

    spawnElement(25, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(26, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y - 375))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y - 375))

    spawnElement(25, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(26, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y - 450))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y - 450))

    spawnElement(25, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(26, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y - 525))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y - 525))

    spawnElement(25, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(26, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y + 225))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y + 225))

    spawnElement(25, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(26, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y + 300))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y + 300))

    spawnElement(25, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(26, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y + 375))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y + 375))

    spawnElement(25, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(26, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y + 450))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y + 450))

    spawnElement(25, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.1, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.2, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.3, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.4, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.5, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.6, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.7, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.8, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(25.9, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(26, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(26.1, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(26.2, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(26.3, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(26.4, new Eerie(CANVAS_MID_Y + 525))
    spawnElement(26.5, new Eerie(CANVAS_MID_Y + 525))

    spawnElement(25, new Star());
}

CASTLE.spawn = () => {
    let mid = CANVAS_MID_Y + 100;
    spawnElement(2, new BulletBillLinear(mid - 2 * 56));
    spawnElement(2, new BulletBillLinear(mid - 3 * 56));
    spawnElement(2, new BulletBillLinear(mid - 56));
    spawnElement(2, new BulletBillLinear(mid));
    spawnElement(2, new BulletBillLinear(mid + 56));
    spawnElement(2, new BulletBillLinear(mid + 2 * 56));
    spawnElement(2, new BulletBillLinear(mid + 3 * 56));

    mid = CANVAS_MID_Y - 156;
    spawnElement(3, new BulletBillLinear(mid - 2 * 56));
    spawnElement(3, new BulletBillLinear(mid - 3 * 56));
    spawnElement(3, new BulletBillLinear(mid - 56));
    spawnElement(3, new BulletBillLinear(mid));
    spawnElement(3, new BulletBillLinear(mid + 56));
    spawnElement(3, new BulletBillLinear(mid + 2 * 56));
    spawnElement(3, new BulletBillLinear(mid + 3 * 56));

    mid = CANVAS_MID_Y;
    spawnElement(4, new BulletBillLinear(mid - 2 * 56));
    spawnElement(4, new BulletBillLinear(mid - 3 * 56));
    spawnElement(4, new BulletBillLinear(mid - 56));
    spawnElement(4, new BulletBillLinear(mid));
    spawnElement(4, new BulletBillLinear(mid + 56));
    spawnElement(4, new BulletBillLinear(mid + 2 * 56));
    spawnElement(4, new BulletBillLinear(mid + 3 * 56));

    spawnElement(5, new BanzaiBill(0))
    spawnElement(5, new BanzaiBill(CANVAS_HEIGHT - 256))

    spawnElement(6, new BulletBillDiagonal("up"))
    spawnElement(6.1, new BulletBillDiagonal("up"))
    spawnElement(6.2, new BulletBillDiagonal("up"))
    spawnElement(6.3, new BulletBillDiagonal("up"))
    spawnElement(6.4, new BulletBillDiagonal("up"))
    spawnElement(6.5, new BulletBillDiagonal("up"))
    spawnElement(6.6, new BulletBillDiagonal("up"))
    spawnElement(6.7, new BulletBillDiagonal("up"))
    spawnElement(6.8, new BulletBillDiagonal("up"))
    spawnElement(6.9, new BulletBillDiagonal("up"))
    spawnElement(7.0, new BulletBillDiagonal("up"))
    spawnElement(6, new BulletBillDiagonal("down"))
    spawnElement(6.1, new BulletBillDiagonal("down"))
    spawnElement(6.2, new BulletBillDiagonal("down"))
    spawnElement(6.3, new BulletBillDiagonal("down"))
    spawnElement(6.4, new BulletBillDiagonal("down"))
    spawnElement(6.5, new BulletBillDiagonal("down"))
    spawnElement(6.6, new BulletBillDiagonal("down"))
    spawnElement(6.7, new BulletBillDiagonal("down"))
    spawnElement(6.8, new BulletBillDiagonal("down"))
    spawnElement(6.9, new BulletBillDiagonal("down"))
    spawnElement(7.0, new BulletBillDiagonal("down"))

    // spawnElement(8.0, new Grinder(0))
    // spawnElement(8.0, new Grinder(128))
    // spawnElement(8.0, new Grinder(128*2))
    // spawnElement(8.0, new Grinder(128*3))
    // spawnElement(8.0, new Grinder(128*4))
    // spawnElement(8.0, new Grinder(128*5))
    // spawnElement(8.0, new Grinder(128*6))

    spawnElement(7.0, new Grinder(128*2))
    spawnElement(7.0, new Grinder(128*3))
    spawnElement(7.0, new Grinder(128*4))
    spawnElement(7.0, new Grinder(128*5))
    spawnElement(7.0, new Grinder(128*6))

    spawnElement(8.5, new Grinder(0))
    spawnElement(8.5, new Grinder(128))
    spawnElement(8.5, new Grinder(128*2))
    spawnElement(8.5, new Grinder(128*3))

    spawnElement(10.0, new Grinder(0))
    spawnElement(10.0, new Grinder(128*3))
    spawnElement(10.0, new Grinder(128*4))
    spawnElement(10.0, new Grinder(128*5))
    spawnElement(10.0, new Grinder(128*6))

    spawnElement(10.5, new Grinder(0))
    spawnElement(11.0, new Grinder(0))
    spawnElement(11.5, new Grinder(0))
    spawnElement(12.0, new Grinder(0))
    spawnElement(12.5, new Grinder(0))
    spawnElement(13.0, new Grinder(0))
    spawnElement(13.5, new Grinder(0))
    spawnElement(14.0, new Grinder(0))
    spawnElement(14.5, new Grinder(0))
    spawnElement(15, new Grinder(0))
    spawnElement(15, new Grinder(128))
    spawnElement(15, new Grinder(128*2))
    spawnElement(15, new Grinder(128*3))
    
    spawnElement(10.5, new Grinder(128*3))
    spawnElement(11.0, new Grinder(128*3))
    spawnElement(11.5, new Grinder(128*3))
    spawnElement(12.0, new Grinder(128*3))
    spawnElement(12.5, new Grinder(128*3))
    spawnElement(13.0, new Grinder(128*3))
    spawnElement(13.5, new Grinder(128*3))
    spawnElement(13.5, new Grinder(128*4))
    spawnElement(13.5, new Grinder(128*5))
    spawnElement(13.5, new Grinder(128*6))


    spawnElement(18.5, new BanzaiBill(0));
    spawnElement(19, new BanzaiBill(0));
    spawnElement(19.5, new BanzaiBill(0));
    spawnElement(20, new BanzaiBill(0));
    spawnElement(20.5, new BanzaiBill(0));

    spawnElement(15.5, new Grinder(128*3))
    spawnElement(16, new Grinder(128*3))
    spawnElement(16.5, new Grinder(128*3))
    spawnElement(17, new Grinder(128*3))
    spawnElement(17.5, new Grinder(128*3))
    spawnElement(18, new Grinder(128*3))
    spawnElement(19, new Grinder(128*4))
    spawnElement(19, new Grinder(128*5))


    spawnElement(21, new Grinder(0-128/2))
    spawnElement(22.75, new Grinder(0-128/2))
    spawnElement(24.50, new Grinder(0-128/2))
    spawnElement(26.25, new Grinder(0-128/2))
    spawnElement(28, new Grinder(0-128/2))
    spawnElement(29.75, new Grinder(0-128/2))


    spawnElement(21.85, new Grinder(128*1.25))
    spawnElement(23.60, new Grinder(128*1.25))
    spawnElement(27.10, new Grinder(128*1.25))


    spawnElement(21, new Grinder(CANVAS_MID_Y - 128/2))
    spawnElement(22.75, new Grinder(CANVAS_MID_Y - 128/2))
    spawnElement(24.5, new Grinder(CANVAS_MID_Y - 128/2))
    spawnElement(26.25, new Grinder(CANVAS_MID_Y - 128/2))
    spawnElement(28, new Grinder(CANVAS_MID_Y - 128/2))
    spawnElement(29.75, new Grinder(CANVAS_MID_Y - 128/2))

    spawnElement(21.85, new Grinder(128*3.75))
    spawnElement(23.60, new Grinder(128*3.75))
    spawnElement(27.10, new Grinder(128*3.75))

    spawnElement(21, new Grinder(128*5+128/2))
    spawnElement(22.75, new Grinder(128*5+128/2))
    spawnElement(24.5, new Grinder(128*5+128/2))
    spawnElement(26.25, new Grinder(128*5+128/2))
    spawnElement(28, new Grinder(128*5+128/2))
    spawnElement(29.75, new Grinder(128*5+128/2))

    spawnElement(32, new Star());

}

function spawnElement(delay, element) {
    let timeout = setTimeout(() => elements.push(element), delay * 1000);
    game.timeouts.push(timeout);
}

const LEVELS = [OVERWORLD, ATHLETIC, HAUNTED, CASTLE];

export {Level, LEVELS};