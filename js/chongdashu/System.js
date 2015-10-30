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
var System = function(nodeType) {
    this.init(nodeType);
};
var p = System.prototype;
System.prototype.constructor = System;
    
    p.enabled = false;
    p.priority = 0;
    p.nodes = null;
    p.nodeType = null;

    p.init = function(nodeType)
    {
        console.log("[System], init()");
        this.priority = 0;
        this.enabled = true;

        this.nodeType = nodeType;
    };

    p.update = function() {
        if (this.nodes) {
            for (var i=0; i < this.nodes.length; i++) {
                this.updateNode(this.nodes[i]);
            }
        }
    };

    p.updateNode = function(node) {
    };

    p.onEngineAdd = function(engine) {
        this.nodes = engine.getNodes(this.nodeType);
    };

    p.onEngineRemove = function(engine) {
        this.nodes = null;
    };
    

// Link
// ----
chongdashu.System = System;

}());


