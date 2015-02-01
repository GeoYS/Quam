module Quam {

    export class Game extends Phaser.Game {

        constructor() {

            super(704, 704, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Arena', Arena, false);

            this.state.start('Boot');
        }
    }
}