/**
 * 
 * @author Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * TurnTakingSystem
 * @constructor
 * @class Game.System.TurnTakingSystem
 * @extends Core.System
 * @extends Game.System.System
 **/
var TurnTakingSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(TurnTakingSystem, chongdashu.System);
    
    p.isPlayerTurn = false;
    p.numberOfPanels = 0;
    p.currentSequence = [];

    p.init = function(state)
    {
        console.log("[TurnTakingSystem], init(), this.panelSystem=%s", this.panelSystem);
        this.System_init();

        this.state = state;
        this.isPlayerTurn = false;
        this.numberOfPanels = 0;
        this.currentSequence = [];

        this.panelSystem = null;
    };

    p.createNextTurn = function() {
        if (this.isPlayerTurn) {
            // prepare an entity to check player
            this.state.removePlaySequence();
            this.state.createSequenceChecker(this.currentSequence);
            this.panelSystem.isInputEnabled = true;
        }
        else {
            // prepare next sequence
            this.currentSequence.push(Math.floor(this.numberOfPanels * Math.random()));
            this.state.createPlaySequence(this.currentSequence);
            this.panelSystem.isInputEnabled = false;
        }
    };

    p.update = function(){
        this.System_update();

        if (!this.sequencePlayingSystem) {
            this.sequencePlayingSystem = this.engine.getSystem(chongdashu.SequencePlayingSystem);
        }

        if (!this.sequenceCheckingSystem) {
            this.sequenceCheckingSystem = this.engine.getSystem(chongdashu.SequenceCheckingSystem);
        }

        if (!this.panelSystem) {
            this.panelSystem = this.engine.getSystem(chongdashu.PanelSystem);
        }

        if (this.numberOfPanels === 0) {
            // hasn't started

            if (this.panelSystem) {
                this.numberOfPanels = this.panelSystem.numberOfRows * this.panelSystem.panelsPerRow;
            }

            if (this.numberOfPanels > 0) {
                this.createNextTurn();
            }

        }

        if (!this.isPlayerTurn) {

            // not player's turn
            
            if (this.sequencePlayingSystem.isCompleted) {

                // sequence has finished playing
                this.isPlayerTurn = true;
                this.sequencePlayingSystem.isCompleted = false;

                this.createNextTurn();
            }
        }

        else {

            if (this.sequenceCheckingSystem.isCompleted || this.sequenceCheckingSystem.isFailed) {

                if (this.sequenceCheckingSystem.isCompleted) {
                    // Got correct
                    this.isPlayerTurn = false;
                    this.createNextTurn();
                }

                else {
                    // Got it wrong
                    this.state.game.state.start("MenuState");

                }

                this.sequenceCheckingSystem.isCompleted = false;
                this.sequenceCheckingSystem.isFailed = false;

            }

        }
       
    };

// Link
// ----
chongdashu.TurnTakingSystem = createjs.promote(TurnTakingSystem, "System");

}());