(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tube = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ApVf5QgNgfAAghQAAgFAAgHQABgOAEgNMgAFg6jQAAjiB3izQB5i4DAhAQDChCC+BMQC8BMByC9QBnCqgCDQMAAAA7MQACADAAADQAAAJgCAJQgRBoigBLQizBVj9AAQj9AAizhVQiBg9gkhQgAJhfTIAAgYAJhfTIAAEyQpbFvpblqIAAkR");
	this.shape.setTransform(0,-28.027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ApaBCIAAkRQAjBQCCA9QCzBUD9AAQD8AACzhUQCghLARhnIAAEwQkwC5kuAAQksAAkrizg");
	this.shape_1.setTransform(0.575,196.8318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(128,128,128,0.49)","rgba(136,136,136,0.78)","#FFFFFF"],[0,0.745,1],-61,0,61,0).s().p("EgGvAj3QiBg9gkhQQgNgeAAghIAAgMQABgOAEgNMgAFg6jQAAjiB3i0QB5i3DAhBQDBhCC+BMQC9BMByC9QBnCqgCDRMAAAA7MIAAAYQgSBnifBLQizBVj+AAQj8AAizhVg");
	this.shape_2.setTransform(-0.0981,-39.3838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tube, new cjs.Rectangle(-63.6,-279.9,127.2,503.79999999999995), null);


(lib.texbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.012)").s().p("A4YDwIAAnfMAwxAAAIAAHfg");
	this.shape.setTransform(156.05,24.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.texbox, new cjs.Rectangle(0,0,312.1,48.1), null);


(lib.pawnbrown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.412)","rgba(1,49,152,0)"],[0,1],16.7,12.1,0,16.7,12.1,62.1).s().p("AADElQlNgHgEg/QgDjTBzibQBmiMBsgKIADAAIAQAAQB2AABiCcQBjCcANDVQADA+kWAAIg5gBg");
	this.shape.setTransform(-0.0284,21.7037);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.424)","rgba(1,49,152,0)"],[0,1],9.8,8,0,9.8,8,32.6).s().p("AADDZIgDAAQhbAAhChAQhBhAAAhZQAAhYBBhAQBChABbAAQBcAABBBAQBCBAAABYQAABZhCBAQg7A5hOAHIgRAAg");
	this.shape_1.setTransform(-1.325,-29.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgMhMQhcAAhChAQhBg/AAhaQAAhZBBhAQBCg/BcAAQBbAABBA/QBCBAAABZQAABahCA/Qg7A6hOAGQB2AABiCbQBjCdANDVQADBDlPgGQlNgHgEg/QgDjTBzicQBmiLBsgKgAgJhMIgDAA");
	this.shape_2.setTransform(-0.0284,0.0287);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgWkhQANhTBIgjAhYGYQAUkPCdhj");
	this.shape_3.setTransform(-10.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#834100").s().p("AADH+QlNgHgEg/QgDjTBzicQBmiLBsgKQhcAAhChAQhBg/AAhaQAAhZBBhAQBCg/BcAAQBbAABBA/QBCBAAABZQAABahCA/Qg7A6hOAGQB2AABiCbQBjCdANDVQADA9kWAAIg5AAg");
	this.shape_4.setTransform(-0.0284,0.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.pawnbrown, new cjs.Rectangle(-35,-52.5,70,105.1), null);


(lib.ChatterB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AABBQQgzgBAAgKQgBghASgZQAPgVARgBQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQANAAAKAKQAKAKAAAOQAAAOgKAKQgJAJgMABQASAAAPAXQAPAZACAhQABAKgsAAIgHAAg");
	this.shape.setTransform(32.5206,50.9948,6.3774,6.3719);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ChatterB, new cjs.Rectangle(0,0,65.1,102), null);


(lib.Boulder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ATQFeMgo/AAAIAAnBIDnj7MAn4AAAIigD7gAVwleIAAHqIigDSA1vhjMAo/AAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("A1vFeIAAnBIDmj6MAn5AAAIigD6ICgj6IAAHpIigDSIAAnBMgo/AAAMAo/AAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boulder, new cjs.Rectangle(-141.2,-37,282.4,74.1), null);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mbox = new lib.texbox();
	this.mbox.name = "mbox";
	this.mbox.parent = this;
	this.mbox.setTransform(156.1,24,1,1,0,0,0,156.1,24);

	this.timeline.addTween(cjs.Tween.get(this.mbox).wait(1));

}).prototype = getMCSymbolPrototype(lib.t0, new cjs.Rectangle(0,0,312.1,48.1), null);


(lib.Magnet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Boulder();
	this.instance.parent = this;
	this.instance.setTransform(0,35.85,0.9103,1,0,180,0);

	this.instance_1 = new lib.Boulder();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-35.8,0.9103,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ABGrEIAAWJIiLjxIAAuig");
	this.shape.setTransform(119.7,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhFHUIAAuiICLj2IAAWJg");
	this.shape_1.setTransform(119.7,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Magnet, new cjs.Rectangle(-128.5,-72.8,257.2,145.7), null);


(lib.Pawn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.412)","rgba(1,49,152,0)"],[0,1],16.7,12.1,0,16.7,12.1,62.1).s().p("AADElQlNgHgEg/QgDjTBzibQBmiMBsgKIADAAIAQAAQB2AABiCcQBjCcANDVQADA+kWAAIg5gBg");
	this.shape.setTransform(-0.0284,21.7037);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.424)","rgba(1,49,152,0)"],[0,1],9.8,8,0,9.8,8,32.6).s().p("AADDZIgDAAQhbAAhChAQhBhAAAhZQAAhYBBhAQBChABbAAQBcAABBBAQBCBAAABYQAABZhCBAQg7A5hOAHIgRAAg");
	this.shape_1.setTransform(-1.325,-29.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgMhMQhcAAhChAQhBg/AAhaQAAhZBBhAQBCg/BcAAQBbAABBA/QBCBAAABZQAABahCA/Qg7A6hOAGQB2AABiCbQBjCdANDVQADBDlPgGQlNgHgEg/QgDjTBzicQBmiLBsgKgAgJhMIgDAA");
	this.shape_2.setTransform(-0.0284,0.0287);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgWkhQANhTBIgjAhYGYQAUkPCdhj");
	this.shape_3.setTransform(-10.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 4
	this.col0 = new lib.ChatterB();
	this.col0.name = "col0";
	this.col0.parent = this;
	this.col0.setTransform(-28.25,-43,1.0292,1,0,0,0,5.1,8);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pawn, new cjs.Rectangle(-35,-52.5,70,105.1), null);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Magnet();
	this.instance.parent = this;
	this.instance.setTransform(-349.75,0,0.3912,1,90);

	this.instance_1 = new lib.Magnet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-208.5,0,0.3912,1,90);

	this.instance_2 = new lib.Magnet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72.4,0,0.3912,1,90);

	this.instance_3 = new lib.Magnet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.35,0,0.3912,1,90);

	this.instance_4 = new lib.Magnet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(210.6,0,0.3912,1,90);

	this.instance_5 = new lib.Magnet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(349.8,0,0.3912,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.6,-50.3,845.3,100.69999999999999);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Magnet();
	this.instance.parent = this;
	this.instance.setTransform(-349.75,0,0.3912,1,90);

	this.instance_1 = new lib.Magnet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-208.5,0,0.3912,1,90);

	this.instance_2 = new lib.Magnet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72.4,0,0.3912,1,90);

	this.instance_3 = new lib.Magnet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.35,0,0.3912,1,90);

	this.instance_4 = new lib.Magnet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(210.6,0,0.3912,1,90);

	this.instance_5 = new lib.Magnet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(349.8,0,0.3912,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.6,-50.3,845.3,100.69999999999999);


(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//include "../blast.as"
		//
		////Options.TextCols = [0x000000]; // Text colors (optional - default is white
		///*
		//////////// TEST ////////////
		//Args = {WW:728, HH:486};
		//Args.Cols = [0xFFFFFF, 0xFF9900];
		//Args.Text = ["Mike","Ackirbachu"]; // Pwned name, Owner name
		//Go(Args);
		///////// END TEST ////////////
		//*/
	}
	this.frame_72 = function() {
		KissDone(this);
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(1));

	// Layer_4
	this.instance = new lib.Tube();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-447.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(5).to({y:-53.55},4).wait(2).to({y:-447.7},3).to({x:-103.35,y:-466.7},3).to({y:-58.6},3).to({y:-466.7},4).to({x:8.65},4).to({x:-79.35,y:-51.05},5).wait(12).to({y:-467.15},5).to({_off:true},1).wait(15));

	// BrownPawn
	this.instance_1 = new lib.pawnbrown();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.05,107.55,1,1,0,0,0,-0.5,-0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({scaleX:1.5941,x:-78.15},4).to({scaleX:1.3526,scaleY:3.5263,x:-78.05,y:-17.7},3).to({y:-500.3},3).wait(23));

	// GreenPawn
	this.instance_2 = new lib.Pawn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(610.55,101.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},1).to({x:-15.45,y:107.6},6).wait(5).to({x:-105.45},4).wait(8).to({x:-3.45},3).wait(11).to({x:-77.95},0).wait(2).to({_off:true},1).wait(32));

	// Layer_3
	this.instance_3 = new lib.t0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(609.5,179.4,1,1,0,0,0,156.1,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-15.5,y:184.4},6).wait(5).to({x:-105.5},4).wait(8).to({x:-3.5},3).wait(11).to({x:-78.5},0).to({_off:true},11).wait(24));

	// Conveyor
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(672.15,167.45);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-24,167.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},6).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true,x:-24},6).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-446.1,-747,1540.4,965.5);


// stage content:
(lib.blastban3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		mystage = this;
		mystage.TextCol = 0xffffff; // <- Set text color here
		
		if(!mystage.doneInit)
		{
		
			mystage.LocalInit = function()
			{
			  // debug stuff - dont remove
			  if(HugKissDebug)
			  {
				mystage.Args = {WW:640, HH:480};
				mystage.Args.Message = "The message will go here#yt"
				mystage.Args.Vol = 100;
				//DebugGo(mystage);	
			  }
			  
			  // custom code
			}
			/*
		
			function Tick(e) // empty function if no custom code
			{
		
			}
			*/
		
			mystage.LocalGo = function() // empty function if no custom code
			{
			  //mystageInfo.RoundAvs = true; // uncomment if you want circular Avatars
			  
		
			}
		
			KissInit(mystage);
			
			// If hug has NO sound all this can be deleted:
		
			if(0) // no sound
			if(mystage.Args == undefined || mystage.Args.Vol > 0)
			{
				mystage.SoundLoaded = function(event) {  
					mystage.SoundsLoading = false; // start timeline
					mystage.visible = true;
					}
				
				mystage.visible = false;
				mystage.SoundsLoading = true; // stop updating (timeline)
				RegisterSounds(["Engine1wav.mp3"], mystage.SoundLoaded);
			}
		
		
		}
		
		
		/* import flash.display.MovieClip;
		sWidth = 640; // width of this design
		sHeight = 480; // height of this design
		include "kiss.as"
		
		var TextCol = 0xFFFFFF; // <- Set text color here
		var TextCol2 = 0xFFFFFF; // <- Set text border color (if used)
		var TextType = 0; // Set to 4 for outlined text
		
		////////// TEST ////////////
		Args = {WW:640, HH:480};
		Args.Message = "The message will go here"
		Go(Args);
		/////// END TEST ////////////
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Animation
	this.AnimMc = new lib.Anim();
	this.AnimMc.name = "AnimMc";
	this.AnimMc.parent = this;
	this.AnimMc.setTransform(443.75,287.05,1,1,0,0,0,79,47.5);

	this.timeline.addTween(cjs.Tween.get(this.AnimMc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1182.2,532,-51.90000000000009,-89);
// library properties:
lib.properties = {
	id: 'B94B0819DBD5F44899E29BAFC47A92DF',
	width: 728,
	height: 486,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B94B0819DBD5F44899E29BAFC47A92DF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;