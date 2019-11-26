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
var Shop_EUI = (function (_super) {
    __extends(Shop_EUI, _super);
    function Shop_EUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "Shop_EUISkin";
        _this.CloseShop.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.Gohomepage, _this);
        _this.Bingo.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.GoBingoPage, _this);
        _this.Goleft.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.GoleftSide, _this);
        _this.GoRight.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.GoRightSide, _this);
        return _this;
    }
    Shop_EUI.prototype.onComplete = function () {
    };
    Shop_EUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Shop_EUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Shop_EUI.prototype.Gohomepage = function () {
        var gohome = new Courtyard01();
        SceneManager.Instance.pushScene(gohome);
    };
    Shop_EUI.prototype.GoBingoPage = function () {
    };
    Shop_EUI.prototype.GoleftSide = function () {
    };
    Shop_EUI.prototype.GoRightSide = function () {
    };
    return Shop_EUI;
}(SceneController));
__reflect(Shop_EUI.prototype, "Shop_EUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Shop_EUI.js.map