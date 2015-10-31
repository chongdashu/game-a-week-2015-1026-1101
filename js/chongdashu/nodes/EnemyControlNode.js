/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Node
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * EnemyControlNode
 * @class Game.Node.EnemyControlNode
 * @extends Core.Node
 * @constructor
 **/
var EnemyControlNode = function(entity) {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(EnemyControlNode, chongdashu.Node);
    
    EnemyControlNode.TYPE = "node:EnemyControlNode";

    EnemyControlNode.COMPONENT_TYPES = [
        chongdashu.EnemyComponent.TYPE,
        chongdashu.ArcadeSpriteComponent.TYPE,
        chongdashu.KeyboardComponent.TYPE
    ];

    p.kc = null;

    p.init = function(entity)
    {
        console.log("[EnemyControlNode], init()");
        this.Node_init(EnemyControlNode.TYPE, entity);

        // -- Add references to entity's components here.
        p.kc = entity.get(chongdashu.KeyboardComponent.TYPE);
        p.asc = entity.get(chongdashu.ArcadeSpriteComponent.TYPE);
        p.pc = entity.get(chongdashu.EnemyComponent.TYPE);
    };

// Link
// ----
chongdashu.EnemyControlNode = createjs.promote(EnemyControlNode, "Node");

}());