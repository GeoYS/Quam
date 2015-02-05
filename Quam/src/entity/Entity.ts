module Quam {

    /*
     * Update flow of Entity: Controller > State > Costume
     */
    export class Entity extends Phaser.Sprite {

        costume: Costume;
        controller: Controller;
        interactions: Interactions;
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
            controller: Controller,
            interactions: Interactions,
            world: World) {

            super(game, x, y, key, 0);
            this.costume = costume;
            this.costume.setEntity(this);
            this.components = new Array<Component>();
            initialiser.initialise(this);
            this.currentState = initialState;
            this.currentState.setEntity(this);
            this.controller = controller;
            this.controller.setEntity(this);
            this.interactions = interactions;
            this.interactions.setEntity(this);
            this.entityWorld = world;
        }

        // define what happens when to Entities overlap based on their getBoundingRegions
        interact(entity: Entity) {
            this.interactions.interactWithEntity(entity);
        }

        getBoundingRegion() {
            //TODO
        }

        controlState(event: ControlEvent) {
            this.currentState.handleControlEvent(event);
        }

        changeState(CustomState: typeof State) {
            if (this.currentState.stateChangeAllowed(CustomState)) {
                this.currentState = new CustomState();
                this.currentState.setEntity(this);
            }
        }

        update() {
            this.controller.controlEntity();
            this.currentState.updateEntity();
            this.costume.updateSpriteLook();
        }
    }
} 