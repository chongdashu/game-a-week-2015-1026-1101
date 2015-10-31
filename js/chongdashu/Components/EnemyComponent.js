/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game.Component
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * EnemyComponent
 * @class Game.Component.EnemyComponent
 * @extends Core.Component
 * @constructor
 **/
var EnemyComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(EnemyComponent, chongdashu.Component);
    
    /**
    * The type identifier of this component.
    *
    * @property Game.EnemyComponent.TYPE
    * @type String
    * @static
    * @final
    */
    EnemyComponent.TYPE = "component:EnemyComponent";

    p.audioCache = {};

    p.init = function()
    {
        console.log("[EnemyComponent], init()");
        this.Component_init(EnemyComponent.TYPE);

        this.audioCache = {};
    };

// Link
// ----
chongdashu.EnemyComponent = createjs.promote(EnemyComponent, "Component");

}());