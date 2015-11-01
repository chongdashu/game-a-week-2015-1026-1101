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
var PanelSystem = function(numberOfRows, panelsPerRow, tweens) {
    this.init(numberOfRows, panelsPerRow, tweens);
};
var p = createjs.extend(PanelSystem, chongdashu.System);

    p.numberOfRows = null;
    p.panelsPerRow = null;
    p.panelToPlay = -1;
    p.tweens = null;

    p.tween = null;
    p.onCompleteCallback = null;
    p.callbackContext = null;

    p.init = function(numberOfRows, panelsPerRow, tweens)
    {
        console.log("[PanelSystem], init()");
        this.System_init(chongdashu.PanelNode);

        // --
        
        if (typeof numberOfRows == "undefined" || numberOfRows === null || numberOfRows <= 0) {
            numberOfRows = 2;
        }

        if (typeof panelsPerRow == "undefined" || panelsPerRow === null || panelsPerRow <= 0) {
            panelsPerRow = 2;
        }

        this.numberOfRows = numberOfRows;
        this.panelsPerRow = panelsPerRow;
        this.panelToPlay = -1;
        this.tweens = tweens;
    };

    p.updateNode = function(node) {

        // -- perform superclass update first
        this.System_updateNode(node);

        var pc = node.pc; // PanelComponent
        var sc = node.sc; // SpriteComponent
        var ic = node.ic; // InputComponent

        // --

        var panelIndex = this.getPanelIndex(pc);
        if (this.panelToPlay === panelIndex) {
            this.panelToPlay = -1;

            this.tween = this.tweens.create(sc.sprite.scale).to({
                x : 0.8,
                y : 0.8
            }, 500, Phaser.Easing.Exponential.Out);
            this.tween.onComplete.add(this.onTweenComplete, this, 0, sc);
            this.tween.start();

        }

        // --

        if (pc.color && sc.sprite.tint !== pc.color) {
            sc.sprite.tint = pc.color;
        }

        // --

        if (ic.input.pointerDown(game.input.activePointer.id)) {
           this.scaleTo(sc, 0.8, true);
        }
        else {
            sc.sprite.scale.set(1.0);
        }

        if (!this.isInPosition(pc, sc)) {
            this.moveToPosition(pc, sc);
        }
        else {
            this.moveToPosition(pc, sc);
        }

    };

    p.onTweenComplete = function(def, sc) {
        this.panelToPlay = -1;
        this.onCompleteCallback.call(this.callbackContext);
        this.onCompleteCallback = null;
        this.callbackContext = null;
    };

    p.getPanelIndex = function(pc) {
        return pc.row * this.panelsPerRow + pc.col;
    };

    p.playPanel = function(panelIndex, completeCallback, callbackContext) {
        console.warn("ASDAS");
        this.panelToPlay = panelIndex;
        this.onCompleteCallback = completeCallback;
        this.callbackContext = callbackContext;
    };

    p.getPanelPosition = function(row, col) {
        var xPosition = 0;
        var yPosition = 0;

        xPosition = -game.world.width/2 + 48 + 128;
        yPosition = -game.world.height/2 + 256/2 + 32;

        xPosition += col*((32) + (128) + (128));
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


