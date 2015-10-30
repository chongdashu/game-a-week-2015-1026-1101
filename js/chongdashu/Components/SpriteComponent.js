/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SpriteComponent
 * @class SpriteComponent
 * @constructor
 **/
var SpriteComponent = function(sprite) {
    // @param {Phaser.Keyboard} entity
    this.init(sprite);
};
var p = createjs.extend(SpriteComponent, chongdashu.Component);
    
    SpriteComponent.TYPE = "component:SpriteComponent";

    p.sprite = null;

    p.init = function(sprite)
    {
        console.log("[SpriteComponent], init()");
        this.Component_init(SpriteComponent.TYPE);

        this.sprite = sprite;

        this.setup();
    };

    p.setup = function() {
        this.sprite.anchor.set(0.5);
    };

// Link
// ----
chongdashu.SpriteComponent = createjs.promote(SpriteComponent, "Component");

}());