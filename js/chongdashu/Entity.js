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
    
    p.komponents = {};

    p.init = function(state)
    {
        console.log("[Entity], init()");
        this.state = state;
        this.game = state.game;
        this.komponents = {};
    };

    p.add = function(component) {
        if (typeof this.komponents == "undefined" || this.komponents === null) {
            // initialize an empty dictionary
            this.komponents = {};
        }
        // add this component to the entity's map of components
        this.komponents[component.getType()] = component;
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
        
        if (type) {
            if (type in this.komponents) {
                var component = this.komponents[type];
                delete this.komponents[type];
            }
            else {
                console.warn("[Entity], remove(), component type=%s doesn't exist in entity.", type);
            }
        }

    };

    p.get = function(componentType) {
        return this.komponents[componentType];
    };

    p.getAll = function() {
        var components = [];
        $.each(this.komponents, function(index, component) {
            components.push(component);
        });

        return component;
    };

    p.isComponent = function(componentType) {
        return componentType in this.komponents && this.komponents[componentType] !== null;
    };

    p.update = function() {

    };

    p.render = function() {

    };


    

// Link
// ----
chongdashu.Entity = Entity;

}());


