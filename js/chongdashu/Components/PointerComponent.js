/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PointerComponent
 * @class Game.Component.PointerComponent
 * @extends Core.Component
 * @constructor
 **/
var PointerComponent = function(pointer) {
    // @param {Phaser.Keyboard} entity
    this.init(pointer);
};
var p = createjs.extend(PointerComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.PointerComponent.TYPE
    * @type String
    * @static
    * @final
    */
    PointerComponent.TYPE = "component:PointerComponent";

    p.pointer = null;

    p.init = function(pointer)
    {
        console.log("[PointerComponent], init()");
        this.Component_init(PointerComponent.TYPE);

        // -- 
        this.pointer = pointer;
    };

// Link
// ----
chongdashu.PointerComponent = createjs.promote(PointerComponent, "Component");

}());