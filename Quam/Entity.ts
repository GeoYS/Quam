﻿module Quam {

    export class Entity extends Phaser.Sprite {

        costume: Costume;
        components: Array<Component>;
        currentState: State;
        entityWorld: World;

        constructor(game: Phaser.Game,
            x: number,
            y: number,
            key: any,
            initialiser: Initialiser,
            initialState: State,
            costume: Costume,
            world: World) {

            super(game, x, y, key, 0);
            this.costume = costume;
            this.costume.setEntity(this);
            this.components = new Array<Component>();
            initialiser.initialise(this);
            this.currentState = initialState;
            this.currentState.setEntity(this);
            this.entityWorld = world;
        }

        // define what happens when to Entities overlap based on their getBoundingRegions
        interact(entity: Entity) {
        }

        getBoundingRegion() {
        }

        update() {
            this.currentState.updateEntity();
            this.costume.updateSpriteLook();
        }
    }
} 