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
 * @class Game.Component.ArcadeSpriteComponent
 * @extends Core.Component
 * @extends Game.Component.SpriteComponent
 * @constructor
 **/
var ArcadeSpriteComponent = function(sprite, arcade) {
    // @param {Phaser.Keyboard} entity
    this.init(sprite, arcade);
};
var p = createjs.extend(ArcadeSpriteComponent, chongdashu.SpriteComponent);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.ArcadeSpriteComponent.TYPE
    * @type String
    * @static
    * @final
    */
    ArcadeSpriteComponent.TYPE = "component:ArcadeSpriteComponent";

    p.body = null;
    p.arcade = null;

    p.init = function(sprite, arcade)
    {
        console.log("[ArcadeSpriteComponent], init(), arcade=%o", arcade);
        this.SpriteComponent_init(sprite);
        this.Component_init(ArcadeSpriteComponent.TYPE);

        this.arcade = arcade;
        this.arcade.enable(this.sprite);
        this.body = this.sprite.body;
    };

// Link
// ----
chongdashu.ArcadeSpriteComponent = createjs.promote(ArcadeSpriteComponent, "SpriteComponent");

}());