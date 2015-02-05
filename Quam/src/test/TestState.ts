module Quam {

    export module Test {

        export class TestState extends Quam.State {

            jumping: boolean = false;
            stomping: boolean = false;
            movingLeft: boolean = false;
            movingRight: boolean = false;

            updateEntity() {

                if (this.jumping && this.entity.body.velocity.y == 0) {
                    this.jumping = false;
                }

                if (this.stomping) {
                    this.entity.body.velocity.y += 20;
                }

                if (this.movingLeft) {
                    this.entity.body.velocity.x = -150;
                }
                else if (this.movingRight) {
                    this.entity.body.velocity.x = 150;
                }
                else {
                    this.entity.body.velocity.x = 0;
                }

                this.stomping = false;
                this.movingLeft = false;
                this.movingRight = false;
            }

            handleControlEvent(event: ControlEvent) {
                if (event == Test.TestControlEvent.JUMP_CONTROl && this.jumping == false) {
                    this.entity.body.velocity.y = -350;
                    this.jumping = true;
                }

                if (event == Test.TestControlEvent.LEFT_CONTROl) {
                    this.movingLeft = true;
                }
                else if (event == Test.TestControlEvent.RIGHT_CONTROl) {
                    this.movingRight = true;
                }

                if (event == Test.TestControlEvent.STOMP_CONTROl && this.entity.body.velocity.y != 0) {
                    this.stomping = true;
                }
            }

            stateChangeAllowed(CustomState: typeof State) : boolean {
                return false;
            }
        }
    }
}  