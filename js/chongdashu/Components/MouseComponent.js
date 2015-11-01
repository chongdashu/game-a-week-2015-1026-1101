/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * MouseComponent
 * @class Game.Component.MouseComponent
 * @extends Core.Component
 * @constructor
 **/
var MouseComponent = function(mouse) {
    // @param {Phaser.Keyboard} entity
    this.init(mouse);
};
var p = createjs.extend(MouseComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.MouseComponent.TYPE
    * @type String
    * @static
    * @final
    */
    MouseComponent.TYPE = "component:MouseComponent";

    p.mouse = null;

    p.init = function(mouse)
    {
        console.log("[MouseComponent], init()");
        this.Component_init(MouseComponent.TYPE);

        // -- 
        this.mouse = mouse;
    };

// Link
// ----
chongdashu.MouseComponent = createjs.promote(MouseComponent, "Component");

}());