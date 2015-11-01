/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SequencePlayComponent
 * @class Game.Component.SequencePlayComponent
 * @extends Core.Component
 * @constructor
 **/
var SequencePlayComponent = function(sequence) {
    // @param {Phaser.Keyboard} entity
    this.init(sequence);
};
var p = createjs.extend(SequencePlayComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.SequencePlayComponent.TYPE
    * @type String
    * @static
    * @final
    */
    SequencePlayComponent.TYPE = "component:SequencePlayComponent";

    p.sequence = null;
    p.sequencePointer = -1;

    p.init = function(sequence)
    {
        console.log("[SequencePlayComponent], init()");
        this.Component_init(SequencePlayComponent.TYPE);

        this.sequence = sequence;
        this.sequencePointer = -1;
        
    };

// Link
// ----
chongdashu.SequencePlayComponent = createjs.promote(SequencePlayComponent, "Component");

}());