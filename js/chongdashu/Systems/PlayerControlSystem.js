/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PlayerControlSystem
 * @class PlayerControlSystem
 * @constructor
 **/
var PlayerControlSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(PlayerControlSystem, chongdashu.System);

    p.keyStates = {};

    p.init = function(state)
    {
        console.log("[PlayerControlSystem], init()");
        this.System_init(chongdashu.PlayerControlNode);
    };

    p.updateNode = function(node) {
        console.log("[PlayerControlSystem], updateNode()");
        var asc = node.asc;
        var kc = node.kc;
        var pc = node.pc;

        var sprite = asc.sprite;
        sprite.x++;
    };

// Link
// ----
chongdashu.PlayerControlSystem = createjs.promote(PlayerControlSystem, "System");

}());


