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
        // 
        this.sequencePlayEntity = null;
        this.sequenceCheckEntity = null;
        
       
    };

    p.createPanels = function(numberOfRows, panelsPerRow) {
        if (typeof numberOfRows == "undefined" || numberOfRows === null) {
            numberOfRows = 2;
        }

        if (typeof panelsPerRow == "undefined" || panelsPerRow === null) {
            panelsPerRow = 2;
        }

        this.panels = [];

        var panelColors = [
            0xaa0000, 0x00aa00, 0x0000aa, 0xaaaa00, 0xaa00aa, 0x00aaaa
        ];

        for (var i=0; i < numberOfRows; i++) {
            for (var j=0; j < panelsPerRow; j++) {
                var sprite = this.game.add.sprite(0, 0, "panel");
                this.engine.addEntity(new chongdashu.Entity()
                    .add(new chongdashu.SpriteComponent(sprite))
                    .add(new chongdashu.InputComponent(sprite))
                    .add(new chongdashu.PanelComponent(i, j, panelColors[i*panelsPerRow + j])));
            }
        }
    };

    p.createPlaySequence = function(sequence) {
        if (this.sequencePlayEntity) {
            this.engine.removeEntity(this.sequencePlayEntity);
            this.sequencePlayEntity = null;
        }

        this.engine.addEntity(this.sequencePlayEntity = new chongdashu.Entity("PlaySequence")
            .add(new chongdashu.SequenceComponent(sequence))
            .add(new chongdashu.SequencePlayComponent(sequence)));
    };

    p.removePlaySequence = function() {
        if (this.sequencePlayEntity) {
            this.engine.removeEntity(this.sequencePlayEntity);
            this.sequencePlayEntity = null;
        }
    };

    p.createSequenceChecker = function(sequence) {
        if (this.sequenceCheckEntity) {
            this.engine.removeEntity(this.sequenceCheckEntity);
            this.sequenceCheckEntity = null;
        }

        this.engine.addEntity(this.sequenceCheckEntity = new chongdashu.Entity("SequenceChecker")
            .add(new chongdashu.SequenceComponent(sequence))
            .add(new chongdashu.SequenceCheckComponent(sequence)));
    };

    p.createSystems = function() {
        this.engine.addSystem(this.playerControlSystem = new chongdashu.PlayerControlSystem(), 0);
        this.engine.addSystem(this.enemyControlSystem = new chongdashu.EnemyControlSystem(), 0);
        this.engine.addSystem(this.panelSystem = new chongdashu.PanelSystem(null, null, this.game.tweens));
        this.engine.addSystem(this.sequencePlayingSystem = new chongdashu.SequencePlayingSystem());
        this.engine.addSystem(this.sequenceCheckingSystem = new chongdashu.SequenceCheckingSystem());
        this.engine.addSystem(this.turnTakingSystem = new chongdashu.TurnTakingSystem(this));
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


