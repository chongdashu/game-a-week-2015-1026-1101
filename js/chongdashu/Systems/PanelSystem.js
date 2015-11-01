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


        if (ic.input.pointerDown(game.input.activePointer)) {
           this.scaleTo(sc, 0.8, true);
        }
        else {
            sc.sprite.scale.set(1.0);
        }

        if (!this.isInPosition(pc, sc)) {
            this.moveToPosition(pc, sc, true);
        }
        else {
            this.moveToPosition(pc, sc);
        }

    };

    p.getPanelPosition = function(row, col) {
        var xPosition = 0;
        var yPosition = 0;

        xPosition = -game.world.width/2 + 128/2 + 8;
        yPosition = -game.world.height/2 + 256/2 + 16;

        xPosition += col*((32) + (128) + (4));
        yPosition += row*((32) + (128) + (8));

        return new Phaser.Point(xPosition, yPosition);
    };

    p.scaleTo= function (sc, scale, lerp)  {
         if (typeof lerp == "undefined" || lerp === null || !lerp) {
            lerp = false;
        }

        if (lerp) {
            sc.sprite.scale.x += (scale - sc.sprite.scale.x) / 4;
            sc.sprite.scale.y += (scale - sc.sprite.scale.y) / 4;
        }
        else {
            sc.sprite.scale.x = scale;
            sc.sprite.scale.y = scale;
        }
    };

    p.moveToPosition = function(pc, sc, lerp) {

        if (typeof lerp == "undefined" || lerp === null || !lerp) {
            lerp = false;
        }

        var row = pc.row;
        var column = pc.col;

        var position = this.getPanelPosition(row, column);

        var xPosition = position.x;
        var yPosition = position.y;

        if (lerp) {
            sc.sprite.x += (xPosition - sc.sprite.x)/10;
            sc.sprite.y += (yPosition - sc.sprite.y)/10;
        }
        else {
            sc.sprite.x = xPosition;
            sc.sprite.y = yPosition;
        }

    };

    p.isInPosition = function(pc, sc) {

        var row = pc.row;
        var column = pc.col;

        var position = this.getPanelPosition(row, column);

        var xPosition = position.x;
        var yPosition = position.y;

        return Phaser.Math.fuzzyEqual(xPosition, sc.sprite.x, 1) &&
                Phaser.Math.fuzzyEqual(yPosition, sc.sprite.y, 1);
        
    };

    p.onEngineAdd = function(engine) {
        this.System_onEngineAdd(engine);
    };

// Link
// ----
chongdashu.PanelSystem = createjs.promote(PanelSystem, "System");

}());


