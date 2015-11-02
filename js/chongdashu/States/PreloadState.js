/**
* @author       Chong-U Lim <me@chongdashu.com>
* @copyright    2015 Chong-U Lim
* @module       Game
* @msubmodule   State
*/
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PreloadState
 *
 * @class State.PreloadState
 * @constructor
 **/
var PreloadState = function(game) {
};
var p = PreloadState.prototype;
    
    p.logo = null;
    p.loadingFrame = null;
    p.loadingBar = null;
    p.loadingText = null;

    // @phaser
    p.preload = function() {
        console.log("[PreloadState], preload()");

        // Preloader specific stuff.
        // -------------------------
        this.loadingFrame = this.game.add.sprite(0,0, "preloader-frame");
        this.loadingBar = this.game.add.sprite(0,0, "preloader-bar");
        this.loadingText = this.game.add.text(0,0, "Loading: 0%", { font: "16pt Garamond", align: "center", fill : "#FFFFFF", stroke : "black", strokeThickness: 1});

        this.loadingFrame.anchor.set(0.5);
        this.loadingBar.anchor.set(0.5);
        this.loadingText.anchor.set(0.5);

        this.load.setPreloadSprite(this.loadingBar);

        // Loading begins here.
        // --------------------
        this.load.image("player", "res/player.png");
        this.load.image("panel", "res/panel.png");
        this.load.audio("click_0", "res/click_0.wav");
        this.load.audio("click_1", "res/click_1.wav");
        this.load.audio("click_2", "res/click_2.wav");
        this.load.audio("click_3", "res/click_3.wav");
       
    };

    // @phaser
    p.create = function() {
        console.log("[PreloadState], create()");
        this.loadingBar.cropEnabled = false;
        this.state.start("MenuState");
        
    };

    // @phaser
    p.loadUpdate = function() {
        this.loadingText.text = "Loading: " + this.load.progress + "%";
    };
    

// Link
// ----
chongdashu.PreloadState = PreloadState;

}());


