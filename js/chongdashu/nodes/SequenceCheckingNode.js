/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Node
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SequenceCheckingNode
 * @class Game.Node.SequenceCheckingNode
 * @extends Core.Node
 * @constructor
 **/
var SequenceCheckingNode = function(entity) {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(SequenceCheckingNode, chongdashu.Node);
    
    SequenceCheckingNode.TYPE = "node:SequenceCheckingNode";

    SequenceCheckingNode.COMPONENT_TYPES = [
        chongdashu.SequenceComponent.TYPE,
        chongdashu.SequenceCheckComponent.TYPE
    ];

    p.kc = null;

    p.init = function(entity)
    {
        console.log("[SequenceCheckingNode], init()");
        this.Node_init(SequenceCheckingNode.TYPE, entity);

        // -- Add references to entity's components here.
        p.sc = entity.get(chongdashu.SequenceComponent.TYPE);
        p.scc = entity.get(chongdashu.SequenceCheckComponent.TYPE);
    };

// Link
// ----
chongdashu.SequenceCheckingNode = createjs.promote(SequenceCheckingNode, "Node");

}());