A simple adventure game by Gouse based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: `VillageSquare`, `DarkForest`, `DungeonEntrance`, `DungeonChamber`, and `CurseAltar`.
- **2+ scenes *not* based on `AdventureScene`**: `Intro`, `GoodEnding`, `BadEnding`, and `Outro`.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: `describe(obj, message)` in `adventure.js` makes a text object interactive and attaches a `pointerover` message in one call. I use it for the forest path, stone structure, herb altar, cursed gem, ward stone, ritual book, and several exits.
    - Enhancement 2: `shake(target, distance, duration)` in `adventure.js` animates an object when an interaction fails or pushes back. I use it when the player clicks the ward stone or ritual book without the `BLESSING` item.

Experience requirements:
- **4+ locations in the game world**: `VillageSquare`, `DarkForest`, `DungeonEntrance`, `DungeonChamber`, and `CurseAltar`.
- **2+ interactive objects in most scenes**: `VillageSquare` has the dark forest path, notice board, and old hermit. `DarkForest` has the stone structure and return path. `DungeonEntrance` has the descent path and return path. `DungeonChamber` has the herb altar and path to the curse altar. `CurseAltar` has the cursed gem, ward stone, and ritual book.
- **Many objects have `pointerover` messages**: the dark forest path says it leads into the forest, the stone structure is described as an ancient dungeon entrance, the herb altar radiates protective light, and the cursed gem changes its hover warning depending on whether the player has `BLESSING`.
- **Many objects have `pointerdown` effects**: the forest path, dungeon entrance path, descent path, and curse altar path move the player between scenes. The notice board, old hermit, ward stone, and ritual book show story messages. The cursed gem chooses the good or bad ending based on `BLESSING`.
- **Some objects are themselves animated**: the herb altar fades upward and disappears after giving `BLESSING`. The ward stone shakes when clicked without `BLESSING`, and the ritual book also shakes when the player tries to read it without `BLESSING`.

Asset sources:
- No external image, audio, or video assets are used. The game uses Phaser text objects and emoji/text labels created in code.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
