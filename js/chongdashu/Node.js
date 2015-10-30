/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * Node
 * @class Node
 * @constructor
 **/
var Node = function(nodeType, entity) {
    this.init(nodeType, entity);
};
var p = Node.prototype;
Node.prototype.constructor = Node;

    p.entity = null;
    p.nodeType = "";

    p.init = function(nodeType, entity)
    {
        console.log("[Node], init()");
        this.nodeType = nodeType;
        this.entity = entity;
    };

    p.getType = function() {
        return this.nodeType;
    };

// Link
// ----
chongdashu.Node = Node;

}());

