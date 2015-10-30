/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * AudioNode
 * @class AudioNode
 * @constructor
 **/
var AudioNode = function(entity) {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(AudioNode, chongdashu.Node);
    
    AudioNode.TYPE = "component:AudioNode";

    AudioNode.COMPONENT_TYPES = [
        chongdashu.AudioComponent.TYPE
    ];

    p.audioComponent = null; // AudioComponent 

    p.init = function()
    {
        console.log("[AudioNode], init()");
        this.Node_init(AudioNode.TYPE, entity);

        // -- Add references to entity's components here.
        p.audioComponent = entity.get(AudioComponent.TYPE);
    };

// Link
// ----
chongdashu.AudioNode = createjs.promote(AudioNode, "Node");

}());