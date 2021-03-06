/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PanelComponent
 * @class Game.Component.PanelComponent
 * @extends Core.Component
 * @constructor
 **/
var PanelComponent = function(row, col, color) {
    // @param {Phaser.Keyboard} entity
    this.init(row, col, color);
};
var p = createjs.extend(PanelComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.PanelComponent.TYPE
    * @type String
    * @static
    * @final
    */
    PanelComponent.TYPE = "component:PanelComponent";

    p.row = -1;
    p.col = -1;
    p.color = null;

    p.init = function(row, col, color)
    {
        console.log("[PanelComponent], init(), row=%s, col=%s", row, col);
        this.Component_init(PanelComponent.TYPE);

        this.row = row;
        this.col = col;
        this.color = color;
    };

// Link
// ----
chongdashu.PanelComponent = createjs.promote(PanelComponent, "Component");

}());