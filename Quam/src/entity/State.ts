module Quam {

    export class State {

        entity: Entity;

        setEntity(entity: Entity) {
            this.entity = entity;
        }

        updateEntity() {

        }

        // Events sent from a Controller that can be handled
        handleControlEvent(event: ControlEvent) {

        }

        // Return whether or not the entity can change to the passed State
        stateChangeAllowed(CustomState: typeof State) : boolean{
            return false;
        }
    }
} 