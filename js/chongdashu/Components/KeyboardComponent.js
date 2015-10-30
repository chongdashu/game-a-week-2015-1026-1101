/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * KeyboardComponent
 * @class KeyboardComponent
 * @constructor
 **/
var KeyboardComponent = function(keyboard) {
    // @param {Phaser.Keyboard} keyboard
    this.init(keyboard);
};
var p = createjs.extend(KeyboardComponent, chongdashu.Component);
    
    // --
    
    KeyboardComponent.TYPE = "component:KeyboardComponent";

    // --
    
    KeyboardComponent.UP = "up";
    KeyboardComponent.JUST_UP = "just_up";
    KeyboardComponent.DOWN = "down";
    KeyboardComponent.JUST_DOWN = "just_down";

    // --

    p.keyStates = null;
    p.keyboard = null;

    p.init = function(keyboard)
    {
        console.log("[KeyboardComponent], init()");
        this.Component_init(KeyboardComponent.TYPE);
        this.keyStates = {};
        this.keyboard = keyboard;
    };


// Link
// ----
chongdashu.KeyboardComponent = createjs.promote(KeyboardComponent, "Component");

}());


