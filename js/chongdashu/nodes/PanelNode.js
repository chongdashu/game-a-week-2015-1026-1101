/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Node
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PanelNode
 * @class Game.Node.PanelNode
 * @extends Core.Node
 * @constructor
 **/
var PanelNode = function(entity) {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(PanelNode, chongdashu.Node);
    
    PanelNode.TYPE = "node:PanelNode";

    PanelNode.COMPONENT_TYPES = [
        chongdashu.PanelComponent.TYPE,
        chongdashu.InputComponent.TYPE,
        chongdashu.SpriteComponent.TYPE
    ];

    p.kc = null;
    p.sc = null;
    p.pc = null;

    p.init = function(entity)
    {
        console.log("[PanelNode], init()");
        this.Node_init(PanelNode.TYPE, entity);

        // -- Add references to entity's components here.
        this.ic = entity.get(chongdashu.InputComponent.TYPE);
        this.sc = entity.get(chongdashu.SpriteComponent.TYPE);
        this.pc = entity.get(chongdashu.PanelComponent.TYPE);
    };

// Link
// ----
chongdashu.PanelNode = createjs.promote(PanelNode, "Node");

}());