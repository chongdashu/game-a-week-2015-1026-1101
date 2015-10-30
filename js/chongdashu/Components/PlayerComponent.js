/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PlayerComponent
 * @class Game.Component.PlayerComponent
 * @extends Core.Component
 * @constructor
 **/
var PlayerComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(PlayerComponent, chongdashu.Component);
    
    PlayerComponent.TYPE = "component:PlayerComponent";

    p.audioCache = {};

    p.init = function()
    {
        console.log("[PlayerComponent], init()");
        this.Component_init(PlayerComponent.TYPE);

        this.audioCache = {};
    };

// Link
// ----
chongdashu.PlayerComponent = createjs.promote(PlayerComponent, "Component");

}());