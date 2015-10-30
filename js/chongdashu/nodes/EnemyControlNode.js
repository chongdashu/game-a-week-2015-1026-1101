/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * EnemyControlNode
 * @class EnemyControlNode
 * @constructor
 **/
var EnemyControlNode = function(entity) {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(EnemyControlNode, chongdashu.Node);
    
    EnemyControlNode.TYPE = "component:EnemyControlNode";

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