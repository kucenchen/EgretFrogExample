class StarMove extends SceneController implements  eui.UIComponent {
	public constructor() {
		super();
		
	}
	
	public star:eui.Button;

	//private star:egret.Bitmap;
	//设置动画的移动速度
	private speed:number = 0.5;
	private timeOnEnterFrame = 0;

	private onLoad(event:egret.Event) {
		var star:egret.Bitmap = new egret.Bitmap(RES.getRes("star"));
		this.addChild(star);
		//this.star = star;
		this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
		this.timeOnEnterFrame = egret.getTimer();
	}

	private  onEnterFrame(e:egret.Event){
			var now = egret.getTimer();
			var time = this.timeOnEnterFrame;
			var pass = now - time;
			//console.log("onEnterFrame: ", (1000 / pass).toFixed(5),pass);
			this.star.x += this.speed*pass;
			this.timeOnEnterFrame = egret.getTimer();
			if(this.star.x > 300)
				this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
	}

	protected onComplete() 
	{
		this.skinName ="StarMoveSkin";
		this.star.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLoad,this);
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}