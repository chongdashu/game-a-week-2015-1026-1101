/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * TextComponent
 * @class Game.Component.TextComponent
 * @extends Core.Component
 * @constructor
 **/
var TextComponent = function(sprite) {
    // @param {Phaser.Keyboard} entity
    this.init(sprite);
};
var p = createjs.extend(TextComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.TextComponent.TYPE
    * @type String
    * @static
    * @final
    */
    TextComponent.TYPE = "component:TextComponent";

    p.sprite = null;

    p.init = function(sprite)
    {
        console.log("[TextComponent], init()");
        this.Component_init(TextComponent.TYPE);

        this.sprite = sprite;
        this.sprite.anchor.set(0.5);
        
    };

// Link
// ----
chongdashu.TextComponent = createjs.promote(TextComponent, "Component");

}());