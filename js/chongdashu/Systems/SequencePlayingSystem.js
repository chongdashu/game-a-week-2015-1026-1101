/**
 * 
 * @author Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SequencePlayingSystem
 * @constructor
 * @class Game.System.SequencePlayingSystem
 * @extends Core.System
 * @extends Game.System.System
 **/
var SequencePlayingSystem = function() {
    this.init();
};
var p = createjs.extend(SequencePlayingSystem, chongdashu.System);
    
    p.isCompleted = false;
    
    p.init = function(tweens)
    {
        console.log("[SequencePlayingSystem], init()");
        this.System_init(chongdashu.SequencePlayingNode);
    };

    p.updateNode = function(node) {

        // -- perform superclass update first
        this.System_updateNode(node);
        
        var sc = node.sc;
        var spc = node.spc;

        if (!this.isCompleted) {
            if (spc.sequencePointer < 0) {
                // first start to play the sequence
                spc.sequencePointer++;
                this.play(spc);
            }
            else if (spc.sequencePointer >= spc.sequence.length) {
                // sequence finished
                this.isCompleted = true;
                this.isPlaying = false;
            }
            else {
                // sequence pointer is valid
            }
        }
    };

    p.onPlayPanelComplete = function(spc) {
        this.isPlaying = false;

        spc.sequencePointer++;
        
        if (spc.sequencePointer < spc.sequence.length) {
            this.play(spc);
        }
    };

    p.play = function(spc) {

        this.isPlaying = true;

        if (!this.panelSystem) {
            this.panelSystem = this.engine.getSystem(chongdashu.PanelSystem);
        }

        this.panelSystem.playPanel(spc.sequence[spc.sequencePointer], function() {
            
            // tween completed
            this.onPlayPanelComplete(spc);

        }, this);


    };

// Link
// ----
chongdashu.SequencePlayingSystem = createjs.promote(SequencePlayingSystem, "System");

}());