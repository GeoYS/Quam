module Quam {
    // I added this comment to test git
    export class Arena extends Phaser.State {

        music: Phaser.Sound;
        arena: Quam.World;

        create() {

            this.arena = new TestQuamWorld(this.game);
            this.game.add.existing(this.arena);

            this.music = this.add.audio('music', 1, false);
            this.music.play();
        }
    }
} 