/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * GameState
 * @class GameState
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

        this.createPlayer();
    };

    p.createPlayer = function() {
        this.player = new chongdashu.Entity()
            .add(new chongdashu.SpriteComponent(this.game.add.sprite(0,0, "player")))
            .add(new chongdashu.KeyboardComponent(this.game.input.keyboard));
    };

    // @phaser
    p.update = function() {
       this.engine.update();
    };

    

// Link
// ----
chongdashu.GameState = GameState;

}());


