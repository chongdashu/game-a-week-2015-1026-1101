/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SequenceCheckComponent
 * @class Game.Component.SequenceCheckComponent
 * @extends Core.Component
 * @constructor
 **/
var SequenceCheckComponent = function(sequence) {
    // @param {Phaser.Keyboard} entity
    this.init(sequence);
};
var p = createjs.extend(SequenceCheckComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.SequenceCheckComponent.TYPE
    * @type String
    * @static
    * @final
    */
    SequenceCheckComponent.TYPE = "component:SequenceCheckComponent";

    p.sequence = null;
    p.sequencePointer = 0;

    p.init = function(sequence)
    {
        console.log("[SequenceCheckComponent], init()");
        this.Component_init(SequenceCheckComponent.TYPE);

        this.sequence = sequence;
        this.sequencePointer = 0;
        
    };

// Link
// ----
chongdashu.SequenceCheckComponent = createjs.promote(SequenceCheckComponent, "Component");

}());