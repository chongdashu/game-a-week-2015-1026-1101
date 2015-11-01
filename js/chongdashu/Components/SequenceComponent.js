/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * SequenceComponent
 * @class Game.Component.SequenceComponent
 * @extends Core.Component
 * @constructor
 **/
var SequenceComponent = function(sequence) {
    // @param {Phaser.Keyboard} entity
    this.init(sequence);
};
var p = createjs.extend(SequenceComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.SequenceComponent.TYPE
    * @type String
    * @static
    * @final
    */
    SequenceComponent.TYPE = "component:SequenceComponent";

    p.sequence = null;

    p.init = function(sequence)
    {
        console.log("[SequenceComponent], init()");
        this.Component_init(SequenceComponent.TYPE);

        this.sequence = sequence;
        
    };

// Link
// ----
chongdashu.SequenceComponent = createjs.promote(SequenceComponent, "Component");

}());