module Quam {

    export module Test {

        export class TestCostume extends Quam.Costume {

            initAnimations() {
                alert("Adding animation");
                this.entity.animations.add('still', [0], 10, true);
                this.entity.animations.add('air', [1], 10, true);
                this.entity.animations.add('move', [2, 3], 10, true);
                alert("Finished adding animation");
            }

            updateSpriteLook() {

                if (this.entity.body.velocity.y != 0) {

                    this.entity.animations.play('air');
                }
                else if (this.entity.body.velocity.x < 0) {

                    this.entity.animations.play('move');

                    if (this.entity.scale.x == -1) {

                        this.entity.scale.x = 1;
                    }
                }
                else if (this.entity.body.velocity.x > 0) {

                    this.entity.animations.play('move');

                    if (this.entity.scale.x == 1) {

                        this.entity.scale.x = -1;
                    }
                }
                else {

                    this.entity.animations.play('still');
                }
            }
        }
    }
} 