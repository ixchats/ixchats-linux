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


(lib.xatsat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(249,201,49,0)","#F9C931","#F9C931","rgba(249,201,49,0)"],[0.647,0.725,0.925,1],-0.4,-0.3,0,-0.4,-0.3,24.5).s().p("AjJBuIgsgHIB8jUIFvAAIAAADIieDYgAhNhMQgeAfgBArIABAOQACAOAGANIC9hUQgHgRgOgOIgIgHQgbgXglAAQgsAAgeAeg");
	this.shape.setTransform(24.55,11.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#02A9D2","#FFFFFF"],[0.565,0.816],-2.2,1,0,-2.2,1,14.8).s().p("AhJBKQgYgZgFgiIgBgPQAAgqAegfQAfgeAqAAQAmAAAcAXIAHAHQAfAfAAAqQAAArgfAfQgeAegrAAQgqAAgfgeg");
	this.shape_1.setTransform(24.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.xatsat, new cjs.Rectangle(0,0,49.1,22.1), null);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgnAAIBPAA");
	this.shape.setTransform(-2.275,13.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	// eyeshine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABiAkQgPgBgGgLQgGgLAHgOQAHgPAQgKQAPgJAPAAQAPABAFALQAGALgGAOQgHAPgQAKQgNAJgOAAIgDAAgAiAAbQgPgKgHgPQgHgOAGgLQAGgLAPgBQAPAAAPAJQAPAKAHAPQAHAOgGALQgFALgPABIgDAAQgOAAgOgJg");
	this.shape_1.setTransform(-2.6445,-4.0717);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(36));

	// eyeline
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("Ai5gKQBLhFBVB0AC6gKQhLhFhVB0");
	this.shape_2.setTransform(-3.525,-9.9298);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36));

	// eyes
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#176000").s().p("AAQA6QALh6CGgNQAkAxgYA7QgUAvg1AAQgjAAgxgUgAisAfQgYg7AkgxQCGANALB6QgxAUgjAAQg1AAgUgvg");
	this.shape_3.setTransform(-3.325,-1.726);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(36));

	// headshine
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.647)").s().p("AgTAiQgYgPgLgTQgLgTAHgOQAJgOAXAAQAXAAAWAOQAZAOALATQAMAUgJAOQgIAOgWAAQgYAAgXgOg");
	this.shape_4.setTransform(5.15,-23.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(36));

	// head
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("ABGjvQgpgMgjgCQhugFhHBcQhMB0ByDCQBABWBVAVQAbAGASgGQATgHARgLQBshAAaixQAOhlgug8QgmgwhLgWg");
	this.shape_5.setTransform(-3.92,-7.5878);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],-27.5,9.5,25.9,-10).s().p("AAAD7QhVgVhAhWQhyjCBMh0QBHhcBuAFQAjACApAMQBLAWAmAwQAuA8gOBlQgaCxhsBAQgRALgTAHQgJADgLAAQgMAAgNgDg");
	this.shape_6.setTransform(-3.92,-7.5878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(36));

	// Layer_4
	this.instance = new lib.xatsat();
	this.instance.setTransform(-0.6,34,0.6503,0.6502,0,0,0,24.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24.3,regY:11.3,rotation:704.3516,x:-0.55,y:34.05},35).wait(1));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1).p("ABygkQgPgKgQgIQgIgEgIgDQg9gTgmAUQgmAUAUAHIgFAEQgGAKAMABIAYgOQAFgDAHgDQAQgHAZAAQAIAAAJAAACXgKQAoAeAlAoABZglQgIAEgEACQgCAAgBABQAGAGAGAIQAUAGAIgaQATAMASAOABKgeQgMAEgTgEQgVgEgcAHQgNACAGgNAgqB/QA8ATAngUQAngUgUgGIAEgEQAGgLgLgBIgYAOQgGAEgGACQgRAHgYABQgJAAgJgBABMBkIgKAFQgUANgTAAQgWAAgHgGAgzBiQAMgGAVAEQAVAEAcgHQAOgBgGAMABWgQQAnAvA3BTQAgAmAdgXQASgZgihgQgXhLg+g3AB3g1IAgArAgfiJQiVAdg/DFQgLAgAkAGQBEANBFgHQACAAABAAQASgCASgEAgyghIAKgGQATgMATAAQAWAAAIAGAhRBcIhegQQAghUBCgnAhRBcQgKAVANAUAg/BnQAHgEAFgBIgegGAg3B8QAGABAHACAivBMIgRgD");
	this.shape_7.setTransform(-2.5558,29.7086);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],51,-31.7,51,-31.7).s().p("AgoAFIAFgEIAKgFQATgMASAAQAXAAAIAGQgZAAgRAIIgLAFIgYAOQgMgBAGgLg");
	this.shape_8.setTransform(-4.0779,26.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],-53.6,24.9,-53.6,24.9).s().p("Ag3BfIgOgEIAOAEIglAFQgNgUALgUIAdAFQANgFAVAEQAVADAcgGQANgCgGANQAHgDAGgEIAYgNQALABgGAKIgFAEQAUAHgmAUQgUAKgZAAQgZAAgdgJgAAOBVQATAAATgMIAKgGIgKAGQgTAMgTAAQgWAAgIgGQAYAAARgHQgRAHgYAAIgRAAIARAAQAIAGAWAAIAAAAgAhNBHIAMgGIgMAGgAgQBPIAAAAgABJgwIgMgPIACgBIAMgFIgMAFIgCABQgMAEgTgEQgWgDgbAHQgOABAGgMQARgIAYAAIASAAIgSAAQgIgGgVAAQgTAAgUAMIgKAGQgUgGAngUQAngUA8ATIAPAGQAQAJAPAKQgGAVgPAAIgGgBg");
	this.shape_9.setTransform(-1.2096,32.9875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E7200").s().p("AC0ByQg3hTgngvQAUAGAIgaQATAMASAOQAoAeAlAoQglgogogeIgggrIAVhFQA+A3AXBLQAiBggSAZQgLAJgMAAQgSAAgUgYgAjaB/QgkgGALggQA/jFCVgdIguBaQhCAnggBUIBeAQQgKAVANAUIgDAAQgZADgZAAQgsAAgrgJgAivBMIgRgDg");
	this.shape_10.setTransform(-2.5558,29.7086);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#333333").ss(1,1,1).p("ABygkQgPgKgQgIQgIgEgIgDQg9gTgmAUQgmAUAUAHIgFAEQgGAKAMABIAYgOQAFgDAHgDQAQgHAZAAQAIAAAJAAACXgKQAoAeAlAoABKgeQgMAEgTgEQgVgEgcAHQgNACAGgNABKgeQAGAGAGAIQAUAGAIgaQATAMASAOABZglQgIAEgEACQgCAAgBABAgzBiQAMgGAVAEQAVAEAcgHQAOgBgGAMQgRAHgYABQgJAAgJgBABMBkIgKAFQgUANgTAAQgWAAgHgGABMBkIAEgEQAGgLgLgBIgYAOQgGAEgGACAgqB/QA8ATAngUQAngUgUgGABWgQQAnAvA3BTQAgAmAdgXQASgZgihgQgXhLg+g3AB3g1IAgArAgfiJQiVAdg/DFQgLAgAkAGQBEANBFgHQACAAABAAQASgCASgEAgyghIAKgGQATgMATAAQAWAAAIAGAhRBcQgKAVANAUAhRBcIhegQQAghUBCgnAg3B8QAGABAHACAg/BnQAHgEAFgBIgegGAivBMIgRgD");
	this.shape_11.setTransform(-2.5558,29.7086);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],-53.6,24.9,-53.6,24.9).s().p("Ag3BfIgOgEIAOAEIglAFQgNgUALgUIAdAFIgMAGIAMgGQANgFAVAEQAVADAcgGQANgCgGANQgRAHgYAAQAIAGAWAAQATAAATgMIAKgGIgKAGQgTAMgTAAQgWAAgIgGQAYAAARgHQAHgDAGgEIAYgNQALABgGAKIgFAEQAUAHgmAUQgUAKgZAAQgZAAgdgJgAgQBPIgRAAIARAAgAg3BfIAAAAgABJgwIgMgPIACgBIAMgFIgMAFIgCABQgMAEgTgEQgWgDgbAHQgOABAGgMQARgIAYAAIASAAIgSAAQgIgGgVAAQgTAAgUAMIgKAGQgUgGAngUQAngUA8ATIAPAGQAQAJAPAKQgGAVgPAAIgGgBg");
	this.shape_12.setTransform(-1.2096,32.9875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_10},{t:this.shape_12},{t:this.shape_8},{t:this.shape_11}]},35).wait(1));

	// emblem
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AAAAOIgbAPIANgdIgOgcIAcAOIAdgOIgOAcIANAdg");
	this.shape_13.setTransform(-3.55,27.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(36));

	// body
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(1,1,1).p("AAiieQAAgBAAgBQgCABgCABgABtiSQgogbgjANIhQAAQgIgBgIABQBFBTAbhRAhshHQAkBGggCmIDUAAQAFiWgihOQAMAMASAV");
	this.shape_14.setTransform(0.5013,32.0503);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],-28.4,-11.7,20.8,-40.1).s().p("AgvgUQAIgBAHACIBQAAIgDABIADABQgNAmgYAAQgXAAgjgpg");
	this.shape_15.setTransform(-0.9125,18.0467);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E7200").s().p("AhmClQAfimgkhFIgDhEQAbgUAXgCQBEBTAchRIgBgCQAkgNAnAbIAAB0IgeghQAiBOgECWgAAgieIADgCIABACgAAjigIAAAAg");
	this.shape_16.setTransform(0.3513,32.0503);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(1,1,1).p("AhshHQAkBGggCmIDUAAQAFiWgihOQAMAMASAVABtiSQgogbgjANQgCABgCABIAEAAQAAgBAAgBIhQAAQgIgBgIABQBFBTAbhR");
	this.shape_17.setTransform(0.5013,32.0503);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2E7200").s().p("AhmClQAfimgkhFIgDhEQAbgUAXgCQBEBTAchRIgBgCIABACIgEAAIADgCQAkgNAnAbIAAB0IgeghQAiBOgECWg");
	this.shape_18.setTransform(0.3513,32.0503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_18},{t:this.shape_15},{t:this.shape_17}]},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-34,51.4,85.5);


// stage content:
(lib.ali_planet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Aladin'; // Google API font
			mystage.color = '#463E72'; // Text color
			mystage.shad1 = '#ffffff'; // Main shadow color
			mystage.shad2 = '#ffffff'; // Alt shadow color
			mystage.shadow = '-1px -1px 0px $2, 2px 2px 0 $1, 2px -2px 0 $1, -2px 2px 0 $1, -2px -2px 0 $1, 2px 0px 0 $1, 0px 2px 0 $1, -2px 0px 0 $1, 0px -2px 0 $1'; // shadow
			//text-shadow: -1px -1px 0px #E97178, 2px 2px 0 #E34C55, 2px -2px 0 #E34C55, -2px 2px 0 #E34C55, -2px -2px 0 #E34C55, 2px 0px 0 #E34C55, 0px 2px 0 #E34C55, -2px 0px 0 #E34C55, 0px -2px 0 #E34C55;
			mystage.spacing =  '0.05'; // letter spacing in em's
			mystage.transform = 'rotate(-5deg)'; // transform
			//mystage.texty = 70; // text y offset in px (for text at bottom)
		
			StickerInit(mystage);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.instance = new lib.anim();
	this.instance.setTransform(69.25,63.1,0.9499,0.9499,0,0,0,-1.8,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.6,71.7,-2.0999999999999943,28.39999999999999);
// library properties:
lib.properties = {
	id: 'B1069FE8785B7C4AAF6DA2E392B3701B',
	width: 100,
	height: 100,
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
an.compositions['B1069FE8785B7C4AAF6DA2E392B3701B'] = {
	getStage: function() { return exportRoot.stage; },
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