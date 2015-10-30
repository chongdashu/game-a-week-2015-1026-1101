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
var Node = function() {
    this.init();
};
var p = Node.prototype;
Node.prototype.constructor = Node;

    p.init = function()
    {
        console.log("[Node], init()");
       
    };
// Link
// ----
chongdashu.Node = Node;

}());


