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


(lib.snowhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhFAAIAGgZQA8AgBJgJIgHAZQgWADgUAAQg4AAgigag");
	this.shape.setTransform(0.625,0.8344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhAAxQgngOAIgTQAIgUAaAEIgCAHQAuAlBWgNIAEgNQAbADgDAdQgXANgyAAQgxAAgngOgAg5gRIAKgrQBCgKBFAgIgMArQgQADgQAAQg2AAgvgZg");
	this.shape_1.setTransform(0.0267,0.006);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowhat, new cjs.Rectangle(-9.7,-6.3,19.5,12.7), null);


(lib.snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeDdIiKgIQkCgJgZg/QgKgkB8gWQgBg2AngoIBEhHQAugvAwgiQB2hQBSAgQBHAXAmA3QBJBvgGBvQBkgPBXAgQAdANgCAbQgIAjhFAMQibAci9AAIg+AAg");
	this.shape.setTransform(45.2473,22.1443);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(0,0,90.5,44.3), null);


(lib.nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF6023").s().p("AgqAeQgcgvAwgMIBMA7g");
	this.shape.setTransform(5.3476,2.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(0,0,10.7,6), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C50000").s().p("AgGA2QgbgSAGgdQgLACgIAPQgegUAggqQAYgiAkAOQBDAlggBCQgLASgSAAQgNAAgPgJg");
	this.shape.setTransform(6.1565,6.294);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(0,0,12.3,12.6), null);


(lib.buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACbA2QgGgFAAgIQAAgHAGgGQAFgGAIABQAHgBAGAGQAGAGgBAHQABAIgGAFQgGAGgHAAQgIAAgFgGgAi0A2QgFgFgBgIQABgHAFgGQAGgGAHABQAIgBAFAGQAFAGAAAHQAAAIgFAFQgFAGgIAAQgHAAgGgGgABHgcQgFgFgBgHQABgIAFgGQAGgFAHAAQAIAAAFAFQAFAGAAAIQAAAHgFAFQgFAGgIAAQgHAAgGgGg");
	this.shape.setTransform(18.65,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.buttons, new cjs.Rectangle(0,0,37.3,12), null);


(lib.arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D42").s().p("AiRAmIAJgZIAZAAIBfg3QAwgkAkAhIBNBJIgSAKIhWhEQgIgEgIAEIh6BEIgOAYg");
	this.shape.setTransform(14.55,6.1734);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(0,0,29.1,12.4), null);


(lib.arms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.arm();
	this.instance.parent = this;
	this.instance.setTransform(14.5,10.6,1,1,180,0,0,14.6,6.2);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,6.2,1,1,0,0,0,14.6,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arms, new cjs.Rectangle(0,0,68.6,16.8), null);


(lib.snowman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handr
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-40.6,12.5,1,1,0,120.0004,-59.9996,6.1,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-41.65,y:25.15},18).wait(18));

	// hand
	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,17.75,1,1,0,0,0,6.2,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:29.75,y:30.4},18).wait(18));

	// hat
	this.instance_2 = new lib.snowhat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.1,-1.6,1.5201,1.5201,-29.999);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-37.2351,x:-15.5,y:20.15},18).wait(18));

	// nose
	this.instance_3 = new lib.nose();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10.3,13.1,1,1,0,0,0,5.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.7601,y:22.7},18).wait(18));

	// buttons
	this.instance_4 = new lib.buttons();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-18,33.9,1,1,0,0,0,18.7,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.7601,y:38.5},18).wait(18));

	// body
	this.instance_5 = new lib.snow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,23.95,1,1,0,0,0,45.2,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.6648,y:31.4},18).wait(18));

	// arm
	this.instance_6 = new lib.arms();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-4.6,14.75,1,1,0,0,0,34.3,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:25.55},18).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-17.3,95.5,63.400000000000006);


// stage content:
(lib.neva_no = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Chau Philomene One'; // Google API font
			mystage.color = '#dcf3ff'; // Text color
			mystage.shad1 = '#257ca3'; // Main shadow color
			mystage.shad2 = '#257ca3'; // Alt shadow color
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

	// arm
	this.instance = new lib.snowman();
	this.instance.parent = this;
	this.instance.setTransform(54,58.9,0.8743,0.8743,0,0,0,-1.9,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.7,86.6,32.599999999999994,5.5);
// library properties:
lib.properties = {
	id: 'B1069FE8785B7C4AAF6DA2E392B3701B',
	width: 100,
	height: 100,
	fps: 12,
	color: "#999999",
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