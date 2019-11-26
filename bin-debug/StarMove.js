var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StarMove = (function (_super) {
    __extends(StarMove, _super);
    function StarMove() {
        var _this = _super.call(this) || this;
        //private star:egret.Bitmap;
        //设置动画的移动速度
        _this.speed = 0.5;
        _this.timeOnEnterFrame = 0;
        return _this;
    }
    StarMove.prototype.onLoad = function (event) {
        var star = new egret.Bitmap(RES.getRes("star"));
        this.addChild(star);
        //this.star = star;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    StarMove.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        //console.log("onEnterFrame: ", (1000 / pass).toFixed(5),pass);
        this.star.x += this.speed * pass;
        this.timeOnEnterFrame = egret.getTimer();
        if (this.star.x > 300)
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    StarMove.prototype.onComplete = function () {
        this.skinName = "StarMoveSkin";
        this.star.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoad, this);
    };
    StarMove.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StarMove.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return StarMove;
}(SceneController));
__reflect(StarMove.prototype, "StarMove", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StarMove.js.map