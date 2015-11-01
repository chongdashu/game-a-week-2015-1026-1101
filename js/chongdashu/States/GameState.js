/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game
* @msubmodule   State
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * GameState
 * @class State.GameState
 * @constructor
 **/
var GameState = function(game) {
};
var p = GameState.prototype;

    // @phaser
    p.preload = function() {
    };

    // @phaser
    p.create = function() {
        this.engine = new chongdashu.Engine();

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.createSystems();
        this.createPanels();
        // this.createPlayer();
        // this.createEnemy();
        
       
    };

    p.createPanels = function(numberOfRows, panelsPerRow) {
        if (typeof numberOfRows == "undefined" || numberOfRows === null) {
            numberOfRows = 2;
        }

        if (typeof panelsPerRow == "undefined" || panelsPerRow === null) {
            panelsPerRow = 4;
        }

        this.panels = [];

        for (var i=0; i < numberOfRows; i++) {
            for (var j=0; j < panelsPerRow; j++) {
                var sprite = this.game.add.sprite(0, 0, "panel");
                this.engine.addEntity(new chongdashu.Entity()
                    .add(new chongdashu.SpriteComponent(sprite))
                    .add(new chongdashu.InputComponent(sprite))
                    .add(new chongdashu.PanelComponent(i, j)));
            }
        }
    };

    p.createSystems = function() {
        this.engine.addSystem(this.playerControlSystem = new chongdashu.PlayerControlSystem(), 0);
        this.engine.addSystem(this.enemyControlSystem = new chongdashu.EnemyControlSystem(), 0);
        this.engine.addSystem(this.panelSystem = new chongdashu.PanelSystem(2, 4));
    };

    p.createPlayer = function() {
        this.engine.addEntity(
            this.player = new chongdashu.Entity()
                .add(new chongdashu.ArcadeSpriteComponent(this.game.add.sprite(+50,128, "player"), this.game.physics.arcade))
                .add(new chongdashu.KeyboardComponent(this.game.input.keyboard))
                .add(new chongdashu.PlayerComponent()));
    };

    p.createEnemy = function() {
        this.engine.addEntity(
            this.player = new chongdashu.Entity()
                .add(new chongdashu.ArcadeSpriteComponent(this.game.add.sprite(-50,-128, "player"), this.game.physics.arcade))
                .add(new chongdashu.KeyboardComponent(this.game.input.keyboard))
                .add(new chongdashu.EnemyComponent()));
    };

    // @phaser
    p.update = function() {
       this.engine.update();
    };

    

// Link
// ----
chongdashu.GameState = GameState;

}());


