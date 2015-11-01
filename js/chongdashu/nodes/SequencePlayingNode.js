/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Node
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SequencePlayingNode
 * @class Game.Node.SequencePlayingNode
 * @extends Core.Node
 * @constructor
 **/
var SequencePlayingNode = function(entity) {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(SequencePlayingNode, chongdashu.Node);
    
    SequencePlayingNode.TYPE = "node:SequencePlayingNode";

    SequencePlayingNode.COMPONENT_TYPES = [
        chongdashu.SequenceComponent.TYPE,
        chongdashu.SequencePlayComponent.TYPE
    ];

    p.kc = null;

    p.init = function(entity)
    {
        console.log("[SequencePlayingNode], init()");
        this.Node_init(SequencePlayingNode.TYPE, entity);

        // -- Add references to entity's components here.
        p.sc = entity.get(chongdashu.SequenceComponent.TYPE);
        p.spc = entity.get(chongdashu.SequencePlayComponent.TYPE);

    };

// Link
// ----
chongdashu.SequencePlayingNode = createjs.promote(SequencePlayingNode, "Node");

}());