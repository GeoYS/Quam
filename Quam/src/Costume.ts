module Quam {

    export class Costume {

        entity: Entity;

        setEntity(entity: Entity) {
            this.entity = entity;
            this.initAnimations();
        }

        initAnimations() {
        }

        // Update current animation of entity based on it's current state
        updateSpriteLook() {
        }
    }
} 