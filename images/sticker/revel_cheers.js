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


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSASIg3gSIA3gRIASg4IASA4IA3ARIg3ASIgSA3g");
	this.shape.setTransform(7.35,7.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(0,0,14.7,14.7), null);


(lib.champagne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// champagne
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC00","#FFCC66","#FFFFFF","#000000","#FFFF00"],[0,0.549,1,1,1],0,27.4,0,-27.4).s().p("AgPFRQgEgFgGgEQgVgPgZg7QgchGgQiZQgRiwAQixIARgFQAdgHAkgCIAfAAIAHAAIAfAAQAkACAcAHIASAFQAQCxgRCwQgQCZgdBGQgYA7gVAPQgGAEgEAFg");
	this.shape.setTransform(0.075,-0.0559,1,1.0007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-33.8,25,67.5);


(lib.bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AARgRQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.4,6.9,6.9);


(lib.bubbly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAYAVIASAQAABAgIAAAYAAcAAIAXAAAATgUIAPgRAABg3IAAAdAghAlIANgPAgyAAIASAAAgnglIARAR");
	this.shape.setTransform(0,-26.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:false},0).wait(1));

	// Layer 1
	this.instance = new lib.bubble("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-24.3},6).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-32.9,12.1,36.4);


(lib.bubblerise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubbly();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// bubbles
	this.instance_1 = new lib.bubbly();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.85,-22.55);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(4));

	// bubbles
	this.instance_2 = new lib.bubbly();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.15,-14.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-25.2,16.4,27.9);


(lib.flute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.5,1,1).p("AiQgLQAHADAHADQAvAPBBACQAHAAAGAAQARAAAHAAQBBgCAvgPQAHgDAHgD");
	this.shape.setTransform(-0.075,57.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// stroke
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(0.5,1,1).p("AAEpqQgEAAgDAAQgQAAgQAAQgpACgfAIIglAKQgTC+ASC/QARCfAeBHQAeBJAcAQQAJBNADAlQABAGAAAGQAJB/gGBuQgDASgNAIQgBABgCABQgBABgCAAQgBAAgBAAQgTACgSADQgYAFgVAHQgBAAgBABQgyASAAAaQAAAQASANQANAIAVAIQAvAQBBACQAHAAAGAAQARAAAHAAQBBgCAvgQQAVgIANgIQASgNAAgQQAAgagygSQgBgBgBAAQgVgHgZgFQgRgDgTgCQgBAAgBAAQgCAAgBgBQgCgBgBgBQgNgIgDgSQgGhuAJh/QAAgGABgGQADglAJhNQAcgQAehJQAehHARifQASi/gTi+IglgKQgfgIgpgCQgQAAgQAAg");
	this.shape_1.setTransform(-0.075,0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(10));

	// glass
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF","#000033","#000033"],[0,0.322,0.51,1,1,1],-18.2,0,18.3,0).s().p("AAEJrIAAAAIgBAAIgCAAIgBAAIAAAAIAAAAIgBAAIgBAAIAAAAIgBAAIgBAAIgOAAQhAgCgvgRQgWgHgMgJQgTgNAAgQQAAgaAygSIADgBQAUgHAZgEQARgDAUgCIAEgBIgDAAIAGgCQANgIADgSQAGhugJh/IgBgMQgDglgJhNQgcgQgehJQgehHgQifQgSi+ATi+IAlgKQAegJApgCIAgAAIAHAAIAgAAQApACAeAJIAlAKQATC+gSC+QgQCfgeBHQgeBJgcAQQgJBNgDAlIgBAMQgJB/AGBuQADASANAIIAGACIgDAAIAEABQAUACARADQAZAEAVAHIACABQAyASAAAaQAAAQgTANQgMAJgVAHQgwARhAACIgNAAIgCAAg");
	this.shape_2.setTransform(-0.075,0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(10));

	// bubbly
	this.instance = new lib.bubblerise();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-50.1,1,1,0,0,180);

	this.instance_1 = new lib.bubblerise();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.05,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(10));

	// champagne
	this.instance_2 = new lib.champagne("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.05,-25.15);
	this.instance_2.alpha = 0.9102;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-62.9,38.7,125.9);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shine
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(-3.85,-11.4,1,1,0,0,0,7.4,7.4);
	this.instance.alpha = 0.3086;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:2.1224,scaleY:2.1224,rotation:-45.471,x:-3.8,y:-11.5,alpha:1},3).to({rotation:-88.4493,x:-3.95,alpha:0},4).wait(17));

	// glass
	this.instance_1 = new lib.flute("synched",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.35,13.25,0.4884,0.4884,-0.7035,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-11.9007,x:32.3,y:12.25,startPosition:9},6).to({regX:0.2,regY:0.3,rotation:-3.1305,x:5.35,y:11.25,startPosition:4},5).wait(2).to({rotation:-3.1305,startPosition:6},0).to({startPosition:4},5).to({x:10.1,y:9.75,startPosition:6},2).to({regX:0.1,regY:0.2,rotation:-0.7035,x:17.35,y:13.25,startPosition:3},4).wait(12));

	// glass
	this.instance_2 = new lib.flute("synched",3);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17.15,13.25,0.4884,0.4884,-0.7035,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.2422,x:-26.6,y:16.25,startPosition:9},6).to({regY:0.4,rotation:-9.2387,x:-8.55,y:6.4,startPosition:4},5).wait(2).to({rotation:-9.2387,startPosition:6},0).to({startPosition:4},5).to({x:-12.55,y:2.9,startPosition:6},2).to({regY:0.2,rotation:-0.7035,x:-17.15,y:13.25,startPosition:3},4).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-33.5,88.5,80.9);


// stage content:
(lib.revel_cheers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Oswald'; // Google API font
			mystage.color = '#29a9ee'; // Text color
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

	// Layer_1
	this.instance = new lib.anim();
	this.instance.parent = this;
	this.instance.setTransform(50.15,67.65,0.9012,0.9012,0,0,0,0.1,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76,90.2,-1.9000000000000057,4.8999999999999915);
// library properties:
lib.properties = {
	id: 'B1069FE8785B7C4AAF6DA2E392B3701B',
	width: 100,
	height: 100,
	fps: 12,
	color: "#CCCCCC",
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