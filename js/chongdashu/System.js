/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * System
 * @class System
 * @constructor
 **/
var System = function(state) {
    this.init(state);
};
var p = System.prototype;
System.prototype.constructor = System;
    
    p.components = {};
    p.enabled = false;
    p.priority = 0;

    p.init = function(state)
    {
        console.log("[System], init()");
        this.state = state;
        this.game = state.game;
        this.components = {};
        this.priority = 0;
        this.enabled = true;
    };

    p.update = function(entity) {

    };

    p.addComponent = function(component) {
        this.components[component] = true;
    };

    p.onEngineAdd = function(engine) {
    };

    p.onEngineRemove = function(engine) {
    };
    

// Link
// ----
chongdashu.System = System;

}());


