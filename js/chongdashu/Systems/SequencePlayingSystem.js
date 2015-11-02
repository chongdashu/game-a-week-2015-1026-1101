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
    p.startCountdown = 0;
    
    p.init = function(tweens)
    {
        console.log("[SequencePlayingSystem], init()");
        this.System_init(chongdashu.SequencePlayingNode);
        this.startCountdown = 1000; // 1 sec before the first panel is played
    };

    p.updateNode = function(node, elapsed) {

        // -- perform superclass update first
        this.System_updateNode(node);

        var sc = node.sc;
        var spc = node.spc;

        if (!this.isCompleted) {
            if (spc.sequencePointer < 0) {
                // first start to play the sequence
                if (this.startCountdown < 0) {
                    spc.sequencePointer++;
                    this.play(spc);
                    this.startCountdown = 1000;
                }
                else {
                    this.startCountdown -= elapsed;
                }
                
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

        if (!this.panelSystem) {
            this.panelSystem = this.engine.getSystem(chongdashu.PanelSystem);
        }

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