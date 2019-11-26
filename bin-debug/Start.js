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
var Start = (function (_super) {
    __extends(Start, _super);
    function Start() {
        var _this = _super.call(this) || this;
        _this.flag = 0;
        _this.speed = 0.05;
        _this.time = 0;
        _this.skinName = "StartSkin";
        return _this;
    }
    Start.prototype.onComplete = function () {
        //设置两个Label为可点击
        this.Starticon.touchEnabled = true;
        this.Gametitle.touchEnabled = true;
        this.Starticon.text += egret.Capabilities.os.toString();
        //添加点击事件
        this.Starticon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc, this);
        this.Gametitle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
        //创建一个计时器对象
        this.timer = new egret.Timer(500, 0);
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        //开始计时
        this.timer.start();
    };
    Start.prototype.onTaptc = function () {
        var t1 = new Courtyard01();
        SceneManager.Instance.pushScene(t1); //添加場景彈出層
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    };
    Start.prototype.onTapqiehuan = function () {
        var t2 = new StarMove();
        SceneManager.Instance.pushScene(t2); //添加場景彈出層
    };
    Start.prototype.timerFunc = function () {
        console.log("计时開始Start");
        if (this.flag == 0) {
            this.Starticon.alpha = 1;
            this.flag = 1;
        }
        else {
            this.Starticon.alpha = 0;
            this.flag = 0;
        }
    };
    Start.prototype.timerComFunc = function () {
        this.Starticon.text = "Touch To START";
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        SceneManager.Instance.popScene();
        console.log("计时结束Start");
    };
    Start.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Start.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Start;
}(SceneController));
__reflect(Start.prototype, "Start");
//# sourceMappingURL=Start.js.map