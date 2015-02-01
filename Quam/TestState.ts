module Quam {

    export module Test {

        export class TestState extends Quam.State {

            upDown: boolean = false;

            updateEntity() {

                this.entity.body.velocity.x = 0;
                if (this.entity.game.input.keyboard.isDown(Phaser.Keyboard.UP) && !this.upDown) {
                    this.entity.body.velocity.y = -250;
                    this.upDown = true;
                }
                else if(!this.entity.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                    this.upDown = false;
                }

                if (this.entity.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.entity.body.velocity.x = -150;
                }
                else if (this.entity.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.entity.body.velocity.x = 150;
                }
                else {
                    this.entity.body.velocity.x = 0;
                }
            }
        }
    }
}  