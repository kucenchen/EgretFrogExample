class Start extends SceneController {
	public constructor() {
		super();
		this.skinName ="StartSkin";
	}
	public bgr:eui.Image;
	public Starticon:eui.Label;
	public Gametitle:eui.Label;
	public timer: egret.Timer;
	public flag:number =0;
	protected onComplete() 
	{
            //设置两个Label为可点击
            this.Starticon.touchEnabled =true;
            this.Gametitle.touchEnabled =true;
			this.Starticon.text += egret.Capabilities.os.toString();
            //添加点击事件
            this.Starticon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc,this);
            this.Gametitle.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapqiehuan, this);
			
			//创建一个计时器对象
			this.timer = new egret.Timer(500,0);
			//注册事件侦听器
			this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
			this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
			//开始计时
			this.timer.start();

	}

	private onTaptc() {
		 let t1:Courtyard01 = new Courtyard01();
		 SceneManager.Instance.pushScene(t1);//添加場景彈出層
		 
		 this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
	}
	private onTapqiehuan() 
	{
		 let t2:StarMove = new StarMove();
		 SceneManager.Instance.pushScene(t2);//添加場景彈出層

	}

	private timerFunc()
	{
		console.log("计时開始Start");
		if(this.flag==0)
		{
			this.Starticon.alpha = 1;
			this.flag=1;
		}
		else
		{
			this.Starticon.alpha = 0;
			this.flag=0;
		}
	}

	private timerComFunc()
	{
		this.Starticon.text ="Touch To START";
		this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
		SceneManager.Instance.popScene();
		console.log("计时结束Start");		
	}

	private speed:number = 0.05;
    private time:number = 0;



	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}