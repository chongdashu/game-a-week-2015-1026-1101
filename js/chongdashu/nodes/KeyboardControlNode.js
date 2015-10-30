/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * KeyboardControlNode
 * @class KeyboardControlNode
 * @constructor
 **/
var KeyboardControlNode = function(entity) {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(KeyboardControlNode, chongdashu.Node);
    
    KeyboardControlNode.TYPE = "component:KeyboardControlNode";

    KeyboardControlNode.COMPONENT_TYPES = [
        chongdashu.KeyboardComponent.TYPE
    ];

    p.kc = null;

    p.init = function(entity)
    {
        console.log("[KeyboardControlNode], init()");
        this.Node_init(KeyboardControlNode.TYPE, entity);

        // -- Add references to entity's components here.
        p.kc = entity.get(chongdashu.KeyboardComponent.TYPE);
    };

// Link
// ----
chongdashu.KeyboardControlNode = createjs.promote(KeyboardControlNode, "Node");

}());