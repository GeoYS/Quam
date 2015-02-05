module Quam {

    export class World extends Phaser.Sprite{

        entities: Array<Entity>;

        constructor(game: Phaser.Game) {

            super(game, 0, 0, "", 0);
            this.entities = new Array<Entity>();
            this.init();
        }

        add(entity: Entity) {

            this.entities.push(entity);
            this.game.add.existing(entity);
        }

        init() {
            // Add all entities
            // Maybe load a map
        }

        update() {
            // Collision detection
        }
    }

    export class TestQuamWorld extends World {

        player: Quam.Entity;
        map: Phaser.Tilemap;
        backgroundLayer: Phaser.TilemapLayer;
        blockLayer: Phaser.TilemapLayer;

        init() {

            /*alert("Adding test entity");
            this.player = new Entity(this.game, 130, 284, 'swift',
                new Test.TestInialiser(),
                new Test.TestState(),
                new Test.TestCostume(),
                this);
            this.add(this.player);
            alert("Finished adding test entity");*/

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 500;

            alert("Adding tile map");
            this.map = this.game.add.tilemap('testmap');

            alert("Adding tilesets to tile map");
            //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
            this.map.addTilesetImage('backgroundTileset', 'background', 32, 32);
            this.map.addTilesetImage('loadbarTileset', 'preloadBar', 32, 32);

            for (var i = 0; i < this.map.layers.length; i++) {
                alert(this.map.layers[i].name);
            }

            alert("Creating background layer reference");
            //create layer
            this.backgroundLayer = this.map.createLayer('backgroundLayer');
            alert("Creating blocks layer references");
            this.blockLayer = this.map.createLayer('blocksLayer');

            alert("Enabling map collisions");
            //collision on blockedLayer
            this.map.setCollisionBetween(1, 1000, true, 'blocksLayer');

            alert("Rezising game world");
            //resizes the game world to match the layer dimensions
            this.backgroundLayer.resizeWorld();

            //create player
            var result = this.findObjectsByType('player', this.map, 'objectsLayer')

            //we know there is just one result
            alert("Adding test entity");
            this.player = new Entity(this.game, result[0].x, result[0].y, 'swift',
                new Test.TestInialiser(),
                new Test.TestState(),
                new Test.TestCostume(),
                new Test.TestController(),
                new Test.TestInteractions(),
                this);
            this.add(this.player);

            alert("Enabling player physics");
            this.game.physics.arcade.enable(this.player);
        }

        findObjectsByType (type, map, layer) {
            var result = new Array();
            map.objects[layer].forEach(function (element) {
                alert(element.properties.type);
                if (element.properties.type === type) {
                    //Phaser uses top left, Tiled bottom left so we have to adjust
                    //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
                    //so they might not be placed in the exact position as in Tiled
                    element.y -= map.tileHeight;
                    result.push(element);
                }
            });
            return result;
        }

        update() {

            //collision
            this.game.physics.arcade.collide(this.player,
                this.blockLayer);
        }
    }
}