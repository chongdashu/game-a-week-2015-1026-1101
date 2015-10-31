/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * AudioComponent
 * @class Game.Component.AudioComponent
 * @extends Core.Component
 * @constructor
 **/
var AudioComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(AudioComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.AudioComponent.TYPE
    * @type String
    * @static
    * @final
    */
    AudioComponent.TYPE = "component:AudioComponent";

    p.audioCache = {};

    p.init = function()
    {
        console.log("[AudioComponent], init()");
        this.Component_init(AudioComponent.TYPE);

        this.audioCache = {};
    };

// Link
// ----
chongdashu.AudioComponent = createjs.promote(AudioComponent, "Component");

}());