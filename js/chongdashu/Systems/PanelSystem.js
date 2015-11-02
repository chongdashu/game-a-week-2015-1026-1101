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

    p.onCompleteCallback = null;
    p.callbackContext = null;

    p.onPanelPressCallbacks = [];
    p.onPanelPressCallbackContexts = [];

    p.isInputEnabled = false;

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
        this.onPanelPressCallbacks = [];
        this.onPanelPressCallbackContexts = [];
        this.isInputEnabled = false;
    };

    p.updateNode = function(node) {

        // -- perform superclass update first
        this.System_updateNode(node);

        var pc = node.pc; // PanelComponent
        var sc = node.sc; // SpriteComponent
        var ic = node.ic; // InputComponent

        var ac = node.entity.get(chongdashu.AudioComponent.TYPE);

        // --
        ic.input.userHandCursor = true;

        // --

        var panelIndex = this.getPanelIndex(pc);
        if (this.panelToPlay === panelIndex) {
            this.panelToPlay = -1;

            var shrinkTween = this.tweens.create(sc.sprite.scale).to({
                x : 0.8,
                y : 0.8
            }, 500, Phaser.Easing.Exponential.Out);
            
            var growTween = this.tweens.create(sc.sprite.scale).to({
                x : 1.0,
                y : 1.0,
            }, 250, Phaser.Easing.Exponential.Out);

            shrinkTween.chain(growTween);
            shrinkTween.start();

            if (ac) {
                ac.playOneShot = true;
            }


            growTween.onComplete.add(this.onTweenComplete, this, 0, sc);
        }

        // --

        if (pc.color && sc.sprite.tint !== pc.color) {
            sc.sprite.tint = pc.color;
        }

        // --
        if (this.isInputEnabled) {
            if (ic.input.pointerDown(game.input.activePointer.id, 20)) {
                this.scaleTo(sc, 0.8, true);
            }
            else {
                sc.sprite.scale.set(1.0);
            }

            if (ic.input.justReleased(game.input.activePointer.id, 20)) {
                this.onPanelPress(pc);
                if (ac) {
                    ac.playOneShot = true;
                }
            }
        }
        
        if (!this.isInPosition(pc, sc)) {
            this.moveToPosition(pc, sc, true);
        }
        else {
            this.moveToPosition(pc, sc);
        }

    };

    p.addOnPanelPressCallback = function(callback, context) {
        this.onPanelPressCallbacks.push(callback);
        this.onPanelPressCallbackContexts.push(context);
    };

    p.removeOnPanelPressCallback = function(callback, context) {
        this.onPanelPressCallbacks.splice(this.onPanelPressCallbacks.indexOf(callback), 1);
        this.onPanelPressCallbackContexts.splice(this.onPanelPressCallbackContexts.indexOf(context), 1);
    };

    p.onPanelPress = function(pc) {
        console.warn("[PanelSystem], onPanelPress, pc=%o", pc);
        console.warn("[PanelSystem], this.onPanelPressCallbacks.length=%s", this.onPanelPressCallbacks.length);
        for (var i=0; i < this.onPanelPressCallbacks.length; i++) {
            var context = this.onPanelPressCallbackContexts[i];
            this.onPanelPressCallbacks[i].call(context, this.getPanelIndex(pc));
        }
    };

    p.onTweenComplete = function(def, sc) {
        this.panelToPlay = -1;

        var callback = this.onCompleteCallback;
        var context = this.callbackContext;

        console.log(callback);
        console.log(context);
        
        this.onCompleteCallback = null;
        this.callbackContext = null;

        callback.call(context);
    };

    p.getPanelIndex = function(pc) {
        return pc.row * this.panelsPerRow + pc.col;
    };

    p.playPanel = function(panelIndex, completeCallback, callbackContext) {
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
            sc.sprite.scale.x += (scale - sc.sprite.scale.x) / 2;
            sc.sprite.scale.y += (scale - sc.sprite.scale.y) / 2;
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


