module Quam {

    export module Test {

        export class TestController extends Quam.Controller {

            upPressed: boolean = false;
            
            controlEntity() {
                
                if (this.entity.game.input.keyboard.isDown(Phaser.Keyboard.UP) && !this.upPressed) {
                    this.upPressed = true;
                    this.entity.controlState(Test.TestControlEvent.JUMP_CONTROl);
                }
                else if(!this.entity.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                    this.upPressed = false;
                }

                if (this.entity.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.entity.controlState(Test.TestControlEvent.LEFT_CONTROl);
                }
                else if (this.entity.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.entity.controlState(Test.TestControlEvent.RIGHT_CONTROl);
                }

                if (this.entity.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                    this.entity.controlState(Test.TestControlEvent.STOMP_CONTROl);
                }
            }
        }
    }
}    