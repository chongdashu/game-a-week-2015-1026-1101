/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * Entity
 * @class Entity
 * @constructor
 **/
var Entity = function(state) {
    this.init(state);
};
var p = Entity.prototype;
Entity.prototype.constructor = Entity;
    
    p._components = {};
    p.onComponentAddCallbacks = [];
    p.onComponentRemoveCallbacks = [];

    p.init = function(state)
    {
        console.log("[Entity], init()");
        this.state = state;
        this.game = state.game;
        this._components = {};
        this.onComponentAddCallbacks = [];
        this.onComponentRemoveCallbacks = [];
    };

    p.add = function(component) {
        if (typeof this._components == "undefined" || this._components === null) {
            // initialize an empty dictionary
            this._components = {};
        }
        // add this component to the entity's map of components
        this._components[component.getType()] = component;

        // dispatch callbacks
        for (var i=0; i < this.onComponentAddCallbacks; i++) {
            this.onComponentAddCallbacks[i](this, component.getType());
        }

        return this;
    };

    p.remove = function(componentOrType) {
        var type = "";
        if (typeof componentOrType == "string") {
            type = componentOrType;
        }
        else if (typeof componentOrType == "object") {
            type = componentOrType.getType();
        }
        else {
            console.warn("[Entity], remove(), unknown component or type param=%s", componentOrType);
        }

        var component = null;
        
        if (type) {
            if (type in this._components) {
                // get the component
                component = this._components[type];

                // remove the key entry
                delete this._components[type];
                
                // dispatch callbacks
                for (var i=0; i < this.onComponentRemoveCallbacks; i++) {
                    this.onComponentRemoveCallbacks[i](this, component.getType());
                }
            }
            else {
                console.warn("[Entity], remove(), component type=%s doesn't exist in entity.", type);
            }
        }

        return component;

    };

    p.get = function(componentType) {
        return this._components[componentType];
    };

    p.getAll = function() {
        var components = [];
        for (var i=0; i < this._components.length; i++) {
            components.push(this._components[i]);
        }

        return component;
    };

    p.isComponent = function(componentType) {
        return componentType in this._components && this._components[componentType] !== null;
    };

    p.addOnComponentAddCallback = function(callback) {
        this.onComponentAddCallbacks.push(callback);
    };

    p.removeOnComponentRemoveCallback = function(callback) {
        this.onComponentRemoveCallbacks.push(callback);
    };

// Link
// ----
chongdashu.Entity = Entity;

}());


