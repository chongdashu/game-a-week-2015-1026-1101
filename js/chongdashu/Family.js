/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * Family
 * @class Family
 * @constructor
 **/
var Family = function(nodeClass, engine) {
    this.init(nodeClass, engine);
};
var p = Family.prototype;
Family.prototype.constructor = Family;

    p.nodes = [];
    p.entityNodeMap = {};
    p.components = {}; // [Component.Type, Bool]
    p.nodeClass = null;
    p.engine = null;

    p.init = function(nodeClass, engine)
    {
        console.log("[Family], init()");
        nodes = [];
        components = {};

        this.engine = engine;
        this.nodeClass = nodeClass;

        // get the list of components that this family
        // is in charge of based on the node class
        for (var i=0; i < nodeClass.COMPONENT_TYPES; i++) {
            this.components[nodeClass.COMPONENT_TYPES[i]] = true;
        }

    };

    p.getNodes = function() {
        return this.nodes;
    };

    p.addEntity = function(entity) {
        if (!(entity._name in this.entityNodeMap)) {
            
            if (!this.isEntityComponentsPresent(entity, this.components)) {
                // if entity does not matchr required components, 
                // do not add
                return;
            }

            var node = new this.nodeClass(entity);
            this.entityNodeMap[entity._name] = node;
            nodes.push(node);
        }
    };

    p.removeEntity = function(entity) {
        if (entity._name in this.entityNodeMap) {
            var node = this.entityNodeMap[entity._name];
            delete this.entityNodeMap[entity._name];
            this.nodes.splice(this.nodes.indexOf(node), 1);
        }
    };

    p.clearEntities = function() {
        for (var i=0; i < this.nodes.length; i++) {
            delete this.entityNodeMap[this.nodes[i].entity._name];
        }
        this.nodes.splice(0, this.nodes.length);
    };

    p.isEntityComponentsPresent = function(entity, components) {

        var containsKeys = true;

        $.each(components, function(key, value) {
            // Go through the list of components that
            // this node's family is associated with
            if (!(key in entity._components)) {
                containsKeys = false;
                return false;
            }
        });
        return containsKeys;
    };
// Link
// ----
chongdashu.Family = Family;

}());


