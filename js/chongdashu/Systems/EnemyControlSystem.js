/**
 * 
 * @author Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * EnemyControlSystem
 * @constructor
 * @class Game.System.EnemyControlSystem
 * @extends Core.System
 * @extends Game.System.KeyboardControlSystem
 **/
var EnemyControlSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(EnemyControlSystem, chongdashu.KeyboardControlSystem);

    p.keyStates = {};

    p.init = function(state)
    {
        console.log("[EnemyControlSystem], init()");
        this.System_init(chongdashu.EnemyControlNode);
    };

    p.updateNode = function(node) {
        var asc = node.asc;
        var kc = node.kc;
        var pc = node.pc;

        var sprite = asc.sprite;
        var body = asc.body;

        // -- perform superclass update first
        this.KeyboardControlSystem_updateNode(node);

        if (this.isJustDown(kc, Phaser.Keyboard.A)) {
            body.velocity.x = -10;
        }
        if (this.isJustDown(kc, Phaser.Keyboard.D)) {
            body.velocity.x = +10;
        }
        if (this.isUp(kc, Phaser.Keyboard.A)  && this.isUp(kc, Phaser.Keyboard.D)) {
            body.velocity.x = 0;
            body.velocity.y = 0;
        }

    };

// Link
// ----
chongdashu.EnemyControlSystem = createjs.promote(EnemyControlSystem, "KeyboardControlSystem");

}());


