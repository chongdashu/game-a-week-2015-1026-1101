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
    p.isFailed = false;
    p.panelSystem = null;
    p.panelIndex = null;

    p.init = function()
    {
        console.log("[SequenceCheckingSystem], init()");
        this.System_init(chongdashu.SequenceCheckingNode);

        // --
        this.panelSystem = null;
        this.panelIndex = -1;
    };

    p.update = function() {
        this.System_update();
        if (!this.panelSystem) {
            this.panelSystem = this.engine.getSystem(chongdashu.PanelSystem);
            if (this.panelSystem) {
                this.panelSystem.addOnPanelPressCallback(this.onPanelPress, this);
            }
        }
    };

    p.onPanelPress = function(panelIndex) {
        if (this.panelIndex < 0) {
            this.panelIndex = panelIndex;
        }
        
    };

    p.updateNode = function(node) {

        // -- perform superclass update first
        this.System_updateNode(node);

        var sc = node.sc;
        var scc = node.scc;

        if (!this.isCompleted) {
            if (scc.sequencePointer >= scc.sequence.length) {
                // sequence finished
                this.isCompleted = true;
                this.isPlaying = false;
            }
            else {

                if (this.panelIndex >= 0) {

                    var expectedPanelIndex = scc.sequence[scc.sequencePointer];
                    if (this.panelIndex == expectedPanelIndex) {
                        scc.sequencePointer++;
                    }
                    else {
                        this.isFailed = true;
                    }

                    this.panelIndex = -1;

                }
            }


        }
    };

// Link
// ----
chongdashu.SequenceCheckingSystem = createjs.promote(SequenceCheckingSystem, "System");

}());