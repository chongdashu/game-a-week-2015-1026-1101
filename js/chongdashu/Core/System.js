/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */

 /**
 * @module ChongdashuJS
 */

this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * System represents a System of the Entity-Component-System Design
 * paradigm.
 * @class Core.System
 * @constructor
 **/
var System = function(nodeType) {
    this.init(nodeType);
};
var p = System.prototype;
System.prototype.constructor = System;
    
    /**
    * Indicates if the system is currently enabled or not. 
    * If not enabled, no system or node updates will be performed.
    * @property enabled
    * @type boolean
    */
    p.enabled = false;

    /**
    * The priority of the current system. This is used by the 
    * {{#crossLink "Engine"}}{{/crossLink}} to order the sequence of systems
    * that it processes. Lower priority numbers are executed first.
    *
    * @property priority
    * @type integer
    */
    p.priority = 0;

    /**
    * @property nodes
    * @type {Array}
    */
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


