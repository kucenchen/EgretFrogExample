class Shop_EUI extends SceneController implements  eui.UIComponent {
	public constructor() {
		super();
		
		this.skinName="Shop_EUISkin";
		this.CloseShop.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Gohomepage ,this);
		this.Bingo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GoBingoPage,this);
		this.Goleft.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GoleftSide,this);
		this.GoRight.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GoRightSide,this);
	}

	public backg:eui.Image;
	public title:eui.Image;
	public bottom:eui.Image;
	public textarea:eui.Image;
	public Bingo:eui.Button;
	public Goleft:eui.Button;
	public GoRight:eui.Button;
	public CloseShop:eui.Button;

	protected onComplete() 
	{
		
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	private Gohomepage()
	{
		let gohome:Courtyard01 = new Courtyard01();
		SceneManager.Instance.pushScene(gohome);

	}
	private GoBingoPage() {
		
	}
	private GoleftSide() {
		
	}
	private GoRightSide() {
		
	}
}