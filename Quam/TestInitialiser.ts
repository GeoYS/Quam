module Quam {

    export module Test {
        
        export class TestInialiser extends Quam.Initialiser {

            initialise(entity: Entity) {

                entity.anchor.setTo(0.5, 0.5);

                entity.game.physics.arcade.enableBody(entity);
            }
        }
    }
} 