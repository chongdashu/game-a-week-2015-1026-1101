/**
 * 
 * @author Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SequenceCheckingSystem
 * @constructor
 * @class Game.System.SequenceCheckingSystem
 * @extends Core.System
 * @extends Game.System.System
 **/
var SequenceCheckingSystem = function() {
    this.init();
};
var p = createjs.extend(SequenceCheckingSystem, chongdashu.System);
    
    p.isCompleted = false;

    p.init = function()
    {
        console.log("[SequenceCheckingSystem], init()");
        this.System_init(chongdashu.SequenceCheckingNode);
    };

// Link
// ----
chongdashu.SequenceCheckingSystem = createjs.promote(SequenceCheckingSystem, "System");

}());