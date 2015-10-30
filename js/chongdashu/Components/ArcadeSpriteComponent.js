/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * ArcadeSpriteComponent
 * @class ArcadeSpriteComponent
 * @constructor
 **/
var ArcadeSpriteComponent = function(sprite, arcade) {
    // @param {Phaser.Keyboard} entity
    this.init(sprite, arcade);
};
var p = createjs.extend(ArcadeSpriteComponent, chongdashu.Component);
    
    ArcadeSpriteComponent.TYPE = "component:ArcadeSpriteComponent";

    p.sprite = null;

    p.init = function(sprite, arcade)
    {
        console.log("[ArcadeSpriteComponent], init()");
        this.Component_init(ArcadeSpriteComponent.TYPE);

        this.sprite = sprite;
        this.arcade = arcade;

        this.setup();
    };

    p.setup = function() {

        this.sprite.anchor.set(0.5);
        this.arcade.enable(this.sprite);

    };

// Link
// ----
chongdashu.ArcadeSpriteComponent = createjs.promote(ArcadeSpriteComponent, "Component");

}());