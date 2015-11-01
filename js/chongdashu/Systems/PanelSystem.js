/**
 * 
 * @author Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PanelSystem
 * @constructor
 * @class Game.System.PanelSystem
 * @extends Game.System.System
 **/
var PanelSystem = function(numberOfRows, panelsPerRow) {
    this.init(numberOfRows, panelsPerRow);
};
var p = createjs.extend(PanelSystem, chongdashu.System);

    p.numberOfRows = null;
    p.panelsPerRow = null;

    p.init = function(numberOfRows, panelsPerRow)
    {
        console.log("[PanelSystem], init()");
        this.System_init(chongdashu.PanelNode);

        // --
        
        if (typeof numberOfRows == "undefined" || numberOfRows === null || numberOfRows <= 0) {
            numberOfRows = 2;
        }

        if (typeof panelsPerRow == "undefined" || panelsPerRow === null || panelsPerRow <= 0) {
            panelsPerRow = 4;
        }

        this.numberOfRows = numberOfRows;
        this.panelsPerRow = panelsPerRow;
    };

    p.updateNode = function(node) {

        // -- perform superclass update first
        this.System_updateNode(node);

        var pc = node.pc; // PanelComponent
        var sc = node.sc; // SpriteComponent
        var ic = node.ic; // InputComponent

        if (ic.input.pointerDown()) {
            console.log(node.entity._name);
        }
    };

    p.onEngineAdd = function(engine) {
        this.System_onEngineAdd(engine);

        for (var i=0; i < this.nodes.length; i++) {

            var node = this.nodes[i];
            var pc = node.pc; // PanelComponent
            var sc = node.sc; // SpriteComponent
            var ic = node.ic; // InputComponent

            var row = pc.row;
            var column = pc.col;

            var xPosition = 0;
            var yPosition = 0;

            xPosition = -game.world.width/2 + 128/2 + 8;
            yPosition = -game.world.height/2 + 256/2 + 16;

            xPosition += column*((32) + (128) + (4));
            yPosition += row*((32) + (128) + (8));

            sc.sprite.x = xPosition;
            sc.sprite.y = yPosition;

            // console.log("%o %s (%s, %s) (%s,%s)", node, node.entity._name, pc.row, pc.col, xPosition, yPosition);
        }
       
    };

// Link
// ----
chongdashu.PanelSystem = createjs.promote(PanelSystem, "System");

}());


