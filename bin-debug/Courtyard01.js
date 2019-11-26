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
var Courtyard01 = (function (_super) {
    __extends(Courtyard01, _super);
    function Courtyard01() {
        var _this = _super.call(this) || this;
        // private FrogFactorty1: egret.MovieClipDataFactory;
        // private FrogFindsomething : egret.MovieClip;
        _this.initialPoin = 0;
        //進入房間場景配置
        _this.initgarden = 0;
        return _this;
    }
    Courtyard01.prototype.onComplete = function () {
        this.playerFactorty = new egret.MovieClipDataFactory(RES.getRes('read_json'), RES.getRes('read_png'));
        this.player = new egret.MovieClip(this.playerFactorty.generateMovieClipData('Read'));
        this.player.play(-1);
        this.FrogFactorty = new egret.MovieClipDataFactory(RES.getRes('eat_json'), RES.getRes('eat_png'));
        this.Frog = new egret.MovieClip(this.FrogFactorty.generateMovieClipData('Eat'));
        this.Frog.play(-1);
        //----------------------------------------------------------------------------------------//
        this.skinName = "Courtyard01Skin";
        this.x = egret.MainContext.instance.stage.stageWidth - this.width;
        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.Move, this);
        this.bg.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd, this);
        this.GoRoom.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ChangeScenestoRoom, this);
        this.GoGarden.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ChangeScenestoGarden, this);
        this.GoShop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ChangeScenestoShop, this);
        this.GoGarden.visible = false;
        Courtyard01.initlist();
        this.initialclover();
        // //创建一个计时器对象
        // this.timer = new egret.Timer(5000,1);
        // //注册事件侦听器
        // this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        // this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        // //开始计时
        // this.timer.start();
    };
    Courtyard01.prototype.timerFunc = function () {
        console.log("计时開始");
        //加入青蛙
        this.addChild(this.Frog);
        this.Frog.x = 500;
        this.Frog.y = 670;
        this.Frog.scaleX = 1;
        this.Frog.scaleY = 1;
    };
    Courtyard01.prototype.timerComFunc = function () {
        this.removeChild(this.Frog);
        console.log("计时结束");
    };
    Courtyard01.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Courtyard01.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Courtyard01.prototype.Move = function (evt) {
        if (this.initialPoin != 0 && this.x <= 0 && this.x >= egret.MainContext.instance.stage.stageWidth - this.width) {
            this.x += evt.stageX - this.initialPoin;
            console.log("右移");
        }
        if (this.x > 0) {
            this.x = 0;
            console.log("左移回原點");
        }
        if (this.x < egret.MainContext.instance.stage.stageWidth - this.width) {
            this.x = egret.MainContext.instance.stage.stageWidth - this.width;
            console.log("如果X為負值視為原點");
        }
        this.initialPoin = evt.stageX; //更新現階段X的位置
    };
    Courtyard01.prototype.TouchEnd = function () {
        this.initialPoin = 0;
    };
    Courtyard01.prototype.ChangeScenestoRoom = function (evt) {
        //this.timer.start();
        this.GoGarden.visible = true;
        this.addChild(this.room);
        this.addChild(this.GoGarden);
        this.addChild(this.GoShop);
        //加入雞雞
        this.addChild(this.player);
        this.player.x = 400;
        this.player.y = 180;
        this.player.scaleX = 1;
        this.player.scaleY = 1;
        //加入青蛙
        this.addChild(this.Frog);
        this.Frog.x = 500;
        this.Frog.y = 670;
        this.Frog.scaleX = 1;
        this.Frog.scaleY = 1;
        this.removeChild(this.bg);
        this.removeChild(this.GoRoom);
    };
    //進入花園場景配置
    Courtyard01.prototype.ChangeScenestoGarden = function (evt) {
        this.addChild(this.bg);
        this.addChild(this.GoRoom);
        this.addChild(this.GoShop);
        //青蛙找東西
        // this.addChild(this.FrogFindsomething);
        // this.FrogFindsomething.x = 369;
        // this.FrogFindsomething.y = 1000;
        // this.FrogFindsomething.scaleX = 0.5;
        // this.FrogFindsomething.scaleY = 0.5;
        this.removeChild(this.room);
        this.removeChild(this.GoGarden);
    };
    //進入商店場景配置
    Courtyard01.prototype.ChangeScenestoShop = function () {
        var SE = new Shop_EUI();
        SceneManager.Instance.pushScene(SE); //添加場景彈出層
        //this.addChild(this.bg);
        this.addChild(this.GoRoom);
        this.addChild(this.GoGarden);
        // this.removeChild(this.room);
        // this.removeChild(this.GoGarden);
    };
    Courtyard01.prototype.initialclover = function () {
        for (var i = 0; i < Courtyard01.grasslist.length; i++) {
            if (Courtyard01.grasslist[i][2] == 1) {
                var grass = new egret.Bitmap();
                grass.texture = RES.getRes(Courtyard01.grasslist[i][3]);
                grass.x = Courtyard01.grasslist[i][0];
                grass.y = Courtyard01.grasslist[i][1];
                grass.touchEnabled = true;
                this.addChild(grass);
                grass.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);
                grass.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.grassclear, this);
                grass.addEventListener(egret.Event.ENTER_FRAME, this.clear, this);
            }
        }
    };
    //採集幸運草狀態
    Courtyard01.prototype.grassclear = function (event) {
        for (var i = 0; i < Courtyard01.grasslist.length; i++) {
            if (event.target.x == Courtyard01.grasslist[i][0] && event.target.y == Courtyard01.grasslist[i][1]) {
                Courtyard01.grasslist[i][2] = 0;
            }
        }
        //Data.savelist();
        event.target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);
        event.target.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.grassclear, this);
        //草逐漸消逝
        var tw = egret.Tween.get(event.target);
        tw.to({ y: 450, "alpha": 0 }, 1000);
    };
    Courtyard01.prototype.clear = function (event) {
        if (event.target.y < 500 && event.target.y != 0) {
            this.removeChild(event.target);
            // Data.AddClover();
            // Data.save();
            event.target.removeEventListener(egret.Event.ENTER_FRAME, this.clear, this);
        }
    };
    //初始化草的圖檔名(變化三頁與四頁幸運草)
    Courtyard01.initlist = function () {
        var temp = 0;
        for (var i = 0; i < this.grasslist.length; i++) {
            var x = Math.random();
            this.grasslist[i][2] = 1;
            var str = void 0;
            if (x < 0.1) {
                this.grasslist[i][3] = "clover_166_png";
                str = "clover_166_png";
            }
            else if (x < 0.55) {
                this.grasslist[i][3] = "clover_160_png";
                str = "clover_160_png";
            }
            else {
                this.grasslist[i][3] = "clover_154_png";
                str = "clover_154_png";
            }
            // var firstvalue: string = "no";
            // egret.localStorage.setItem(this.isfirst, firstvalue);
            // var value: string = this.grasslist[i][0].toString() + "," + this.grasslist[i][1].toString() + "," + this.grasslist[i][2].toString() + "," + str;
            // egret.localStorage.setItem(temp.toString(), value);
            temp++;
        }
    };
    Courtyard01.grasslist = [[600, 0, 1, ""],
        [40, 550, 1, ""],
        [0, 560, 1, ""],
        [-50, 570, 1, ""],
        [-200, 580, 1, ""],
        [-300, 590, 1, ""],
        [20, 600, 1, ""],
        [-400, 550, 1, ""],
        [-150, 620, 1, ""],
        [-250, 620, 1, ""],
        [-350, 630, 1, ""],
        [-450, 640, 1, ""],
        [-100, 650, 1, ""],
        [-50, 650, 1, ""],
        [30, 630, 1, ""],
        [-312, 680, 1, ""],
        [-134, 680, 1, ""],
        [-412, 680, 1, ""],
        [-234, 680, 1, ""],
        [-80, 680, 1, ""]];
    return Courtyard01;
}(SceneController));
__reflect(Courtyard01.prototype, "Courtyard01", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Courtyard01.js.map