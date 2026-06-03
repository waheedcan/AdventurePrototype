class Intro extends Phaser.Scene {
    constructor() {
        super("Intro");
    }

    create() {
        const w = this.game.config.width;
        const h = this.game.config.height;
        const s = w * 0.01;

        this.add.text(w * 0.05, h * 0.2, "Welcome to this grand adventure!")
            .setFontSize(s * 3);

        this.add.text(w * 0.05, h * 0.35, "A curse plagues the land. You must venture into the dark forest,")
            .setFontSize(s * 2)
            .setWordWrapWidth(w * 0.9);

        this.add.text(w * 0.05, h * 0.48, "find the blessing in an ancient dungeon, and claim the")
            .setFontSize(s * 2)
            .setWordWrapWidth(w * 0.9);

        this.add.text(w * 0.05, h * 0.61, "sacred gem before the curse consumes you.")
            .setFontSize(s * 2)
            .setWordWrapWidth(w * 0.9);

        let start = this.add.text(w * 0.05, h * 0.8, "Click here to begin...")
            .setFontSize(s * 2.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0, 0, 0);
                this.time.delayedCall(1000, () => this.scene.start('VillageSquare', { inventory: [] }));
            });
    }
}

class VillageSquare extends AdventureScene {
    constructor() {
        super("VillageSquare", "Village Square");
    }

    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.15, "A peaceful village square surrounds you.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        this.add.text(this.w * 0.1, this.h * 0.28, "A weathered road leads north into a dark forest. An old merchant stands nearby.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        let forest = this.describe(this.add.text(this.w * 0.1, this.h * 0.45, "🌲 dark forest path")
            .setFontSize(this.s * 2), "A path into the dark forest...")
            .on('pointerdown', () => {
                this.showMessage("You venture into the forest...");
                this.gotoScene('DarkForest');
            });

        let noticeBoard = this.describe(this.add.text(this.w * 0.1, this.h * 0.60, "notice board")
            .setFontSize(this.s * 1.5), "A faded notice warns travelers about the cursed altar.")
            .on('pointerdown', () => {
                this.showMessage("The board says: Seek a blessing before touching the gem.");
            });

        let hermit = this.describe(this.add.text(this.w * 0.1, this.h * 0.73, "old hermit")
            .setFontSize(this.s * 1.5), "The hermit watches the road with worried eyes.")
            .on('pointerdown', () => {
                this.showMessage("The hermit whispers: The herbs below still remember old protections.");
            });
    }
}

class DarkForest extends AdventureScene {
    constructor() {
        super("DarkForest", "Dark Forest");
    }

    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.15, "Twisted trees surround you. The forest grows darker the deeper you go.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        this.add.text(this.w * 0.1, this.h * 0.28, "Strange markings are carved into the trees. They point toward a stone structure in the distance...")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        let forward = this.describe(this.add.text(this.w * 0.1, this.h * 0.45, "🏛️ stone structure")
            .setFontSize(this.s * 2), "The entrance to an ancient dungeon.")
            .on('pointerdown', () => {
                this.showMessage("You approach the dungeon entrance...");
                this.gotoScene('DungeonEntrance');
            });

        let back = this.describe(this.add.text(this.w * 0.1, this.h * 0.60, "↩️ return to village")
            .setFontSize(this.s * 1.5), "Go back to the village.")
            .on('pointerdown', () => this.gotoScene('VillageSquare'));
    }
}

class DungeonEntrance extends AdventureScene {
    constructor() {
        super("DungeonEntrance", "Dungeon Entrance");
    }

    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.15, "You stand at the mouth of a vast dungeon. Cold air emanates from within.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        this.add.text(this.w * 0.1, this.h * 0.28, "Torches flicker along the stone walls, illuminating a corridor deeper underground.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        let deeper = this.describe(this.add.text(this.w * 0.1, this.h * 0.45, "🔦 descent into darkness")
            .setFontSize(this.s * 2), "Venture deeper into the dungeon.")
            .on('pointerdown', () => {
                this.showMessage("You descend into the depths...");
                this.gotoScene('DungeonChamber');
            });

        let back = this.describe(this.add.text(this.w * 0.1, this.h * 0.60, "↩️ return to forest")
            .setFontSize(this.s * 1.5), "Go back to the forest.")
            .on('pointerdown', () => this.gotoScene('DarkForest'));
    }
}

class DungeonChamber extends AdventureScene {
    constructor() {
        super("DungeonChamber", "Dungeon Chamber");
    }

    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.15, "A vast underground chamber opens before you. At the center stands an altar with divine light.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        this.add.text(this.w * 0.1, this.h * 0.28, "The Herb Altar glows with ancient magic, promising protection for the worthy.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        let blessing = this.describe(this.add.text(this.w * 0.1, this.h * 0.45, "✨ herb altar")
            .setFontSize(this.s * 2), "A sacred altar radiates protective light.")
            .on('pointerdown', () => {
                if (this.hasItem('BLESSING')) {
                    this.showMessage("The altar is quiet now. Its blessing already protects you.");
                    return;
                }
                this.showMessage("You receive a blessing from the ancient herbs!");
                this.gainItem('BLESSING');
                this.tweens.add({
                    targets: blessing,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => blessing.destroy()
                });
            });

        let proceed = this.describe(this.add.text(this.w * 0.1, this.h * 0.65, "🚪 path to curse altar")
            .setFontSize(this.s * 1.5), "A passage deeper underground...")
            .on('pointerdown', () => {
                this.showMessage("You press onward toward your destiny...");
                this.gotoScene('CurseAltar');
            });
    }
}

class CurseAltar extends AdventureScene {
    constructor() {
        super("CurseAltar", "Curse Altar");
    }

    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.15, "You stand before an ancient altar shrouded in shadow.")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        this.add.text(this.w * 0.1, this.h * 0.28, "A precious gem rests on the pedestal, glowing with dark and light energy intertwined...")
            .setFontSize(this.s * 1.5)
            .setWordWrapWidth(this.w * 0.6);

        let gem = this.describe(this.add.text(this.w * 0.1, this.h * 0.45, "💎 cursed gem")
            .setFontSize(this.s * 2), this.hasItem('BLESSING')
                ? "The gem glows with purified light. The curse seems contained."
                : "The gem pulses with dark energy. Taking it feels very dangerous...")
            .on('pointerdown', () => {
                if (this.hasItem('BLESSING')) {
                    this.showMessage("With the blessing's protection, you claim the gem safely!");
                    this.gotoScene('GoodEnding');
                } else {
                    this.showMessage("The curse overwhelms you as you touch the gem!");
                    this.gotoScene('BadEnding');
                }
            });

        let wardStone = this.describe(this.add.text(this.w * 0.1, this.h * 0.60, "ward stone")
            .setFontSize(this.s * 1.5), "A cracked ward stone hums against the altar's curse.")
            .on('pointerdown', () => {
                this.showMessage("The stone grows warmer near your blessing, but it cannot hold the curse alone.");
            });

        let ritualBook = this.describe(this.add.text(this.w * 0.1, this.h * 0.73, "ritual book")
            .setFontSize(this.s * 1.5), "The open book describes the altar's old ritual.")
            .on('pointerdown', () => {
                this.showMessage("The ritual requires courage, a blessing, and one steady hand.");
            });
    }
}

class GoodEnding extends Phaser.Scene {
    constructor() {
        super("GoodEnding");
    }

    create() {
        const w = this.game.config.width;
        const h = this.game.config.height;
        const s = w * 0.01;

        this.cameras.main.setBackgroundColor('#2d5a2d');

        this.add.text(w * 0.05, h * 0.15, "A brilliant light surrounds you!")
            .setFontSize(s * 3);

        this.add.text(w * 0.05, h * 0.35, "With the blessing's protection and your courage, you have claimed the gem.")
            .setFontSize(s * 2)
            .setWordWrapWidth(w * 0.9);

        this.add.text(w * 0.05, h * 0.50, "The curse shatters into a thousand pieces. The land is saved!")
            .setFontSize(s * 2)
            .setWordWrapWidth(w * 0.9);

        this.add.text(w * 0.05, h * 0.68, "✨ VICTORY ✨")
            .setFontSize(s * 3);

        this.add.text(w * 0.05, h * 0.85, "Click to return to the beginning...")
            .setFontSize(s * 1.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.scene.start('Intro'));
    }
}

class BadEnding extends Phaser.Scene {
    constructor() {
        super("BadEnding");
    }

    create() {
        const w = this.game.config.width;
        const h = this.game.config.height;
        const s = w * 0.01;

        this.cameras.main.setBackgroundColor('#2d1a1a');

        this.add.text(w * 0.05, h * 0.15, "Darkness engulfs you...")
            .setFontSize(s * 3);

        this.add.text(w * 0.05, h * 0.35, "Without protection from the blessing, the curse consumes your body and soul.")
            .setFontSize(s * 2)
            .setWordWrapWidth(w * 0.9);

        this.add.text(w * 0.05, h * 0.50, "The land falls into eternal shadow. All hope is lost.")
            .setFontSize(s * 2)
            .setWordWrapWidth(w * 0.9);

        this.add.text(w * 0.05, h * 0.68, "💀 DEFEAT 💀")
            .setFontSize(s * 3);

        this.add.text(w * 0.05, h * 0.85, "Click to try again...")
            .setFontSize(s * 1.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.scene.start('Intro'));
    }
}


class Outro extends Phaser.Scene {
    constructor() {
        super('Outro');
    }
    create() {
        const w = this.game.config.width;
        const h = this.game.config.height;
        const s = w * 0.01;

        this.add.text(w * 0.05, h * 0.4, "Thanks for playing!")
            .setFontSize(s * 3);

        this.add.text(w * 0.05, h * 0.6, "Click anywhere to restart.")
            .setFontSize(s * 2)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.scene.start('Intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, VillageSquare, DarkForest, DungeonEntrance, DungeonChamber, CurseAltar, GoodEnding, BadEnding, Outro],
    title: "Adventure Game",
});

