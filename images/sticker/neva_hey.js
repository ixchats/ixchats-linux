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


(lib.snowball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgIAJgNAAQgLAAgJgJg");
	this.shape.setTransform(2.975,2.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowball, new cjs.Rectangle(0,0,6,6), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C50000").s().p("AgzAWQgCggAagLQgHgJgSACQgBgjA1AAQApgBALAmQAKBKhIAPIgFABQgfAAgFgqg");
	this.shape.setTransform(5.289,6.3598);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(0,0,10.6,12.8), null);


(lib.arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D42").s().p("AAaB5IAfhqQABgJgHgGIhshXIgcgFIAKgnIAbgCIAIAYIBXBDQA0AggSAsIgnBkg");
	this.shape.setTransform(8.5814,13.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(0,0,17.2,26.8), null);


(lib.snowman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snowball
	this.instance = new lib.snowball();
	this.instance.parent = this;
	this.instance.setTransform(71.45,-6.35,1,1,0,0,0,3,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAgQgEgCgBgCIgGAAQgHAAgFgEQgEgDAAgFQAAgFAEgEQAFgEAHAAQAHAAAFAEQAEADABAEIAHgBQAIAAAGADQAGAEAAAEQAAAFgGADQgGADgIAAQgHAAgGgDgAAOAJQgDgBgBgDIAAABIgBADIgDABIgDgBIgBgDIABgDIADgBIADABIABABIAAgBQAAgDAEgDQAEgDAGAAQAGAAAEADQAEADAAADQAAAEgEACQgEADgGAAQgGAAgEgDgAADgKQgDgEAAgGQAAgGADgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(-9.975,-8.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOA/IgHgFIgGABQgJAAgFgFQgGgEAAgGQAAgGAGgFQAFgEAJAAQAJAAAFAEQAEAEACAFQAEgBAFAAQAJAAAIADQAGAFAAAFQAAAGgGADQgIAEgJAAQgJAAgHgEgAATAGIgFgFIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIACgCIAEgBIADABIAAABIAAgBQAAgFAGgEQAFgDAGAAQAIAAAEADQAGAEAAAFQAAAEgGADQgEADgIAAQgGAAgFgDgAgCglQgEgFAAgHQAAgHAEgGQAEgEAHAAQAHAAAFAEQAFAGgBAHQABAHgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_1.setTransform(-6.65,-7.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({x:30.2,y:-15.4},3).to({x:-11.05,y:-8},3).to({_off:true},1).wait(36));

	// handr
	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.85,26.65,1,1,0,0,0,5.3,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({y:7.5},5).to({regY:6.3,rotation:120.0004,x:-13.1,y:-6.65},3).to({regX:5.4,regY:6.4,rotation:134.9994,x:-11.45,y:-6.8},3).to({regX:5.3,regY:6.3,rotation:120.0004,x:-13.1,y:-6.65},3).to({regX:5.4,regY:6.4,rotation:134.9994,x:-11.45,y:-6.8},3).to({regX:5.3,regY:6.3,rotation:120.0004,x:-13.1,y:-6.65},3).to({regY:6.4,rotation:0,x:-4.85,y:7.5},2).to({y:26.65},4).wait(7));

	// hand
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C50000").s().p("AgaA7Qg5gxAug7QAbgcAkAVQAuAZgSAfQgOgLgLAEQARAWgRAcQgRAXgRAAQgKAAgLgHg");
	this.shape_2.setTransform(-39.7568,25.6219);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(50));

	// hat
	this.instance_2 = new lib.snowhat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-24.9,-27.5,1.5201,1.5201,-14.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgcgFQAdAXAcgX");
	this.shape_3.setTransform(-22.2,-7.5625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgRAAQASADARgD");
	this.shape_4.setTransform(-22.2,-7.3875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},14).to({state:[{t:this.shape_3}]},29).wait(7));

	// nose
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF6023").s().p("AgQgQIAuATIgwAOQgVgUAXgNg");
	this.shape_5.setTransform(-21.0011,-12.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(50));

	// eyes
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAtADQAYgWAbAWAhfAJQAYgWAbAW");
	this.shape_6.setTransform(-21.925,-14.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(50));

	// buttons
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBnQgFgFAAgIQAAgIAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAIQAAAIgFAFQgGAGgHAAQgHAAgFgGgAgMACQgFgEAAgIQAAgHAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAHQAAAIgFAEQgGAGgHAAQgHAAgFgGgAgMhMQgFgFAAgIQAAgIAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAIQAAAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_7.setTransform(-20.75,16.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(50));

	// body
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2E2E2").s().p("AiNFPQg7g5AAhTQAAhQA3g4QgUgkAAgrQABhIAxgzQAQgQASgKQhYDXCpAbQgXAJgTARQgsAnAAA4QAAA4AsAmQArAoA/AAQA+AAAsgoQAUgRALgVQgOAwgnAlQg8A7hVAAQhTAAg9g7gAhbiyQgpgqAAg7QAAg8ApgqIANgMQg4BlA1B7IgKgJg");
	this.shape_8.setTransform(-24,13.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaFQQgsgmAAg4QAAg4AsgnQATgRAXgJQipgbBYjXQg1h7A4hlQAlgeAxAAQA6AAApAqQApAqAAA8QAAA7gpAqIgNALQAPAKAOAOQAyAzAABHQAAAsgTAkQAhAjANAqQAIAcAAAfQAAAdgHAaQgLAVgUARQgsAog/AAQg9AAgsgog");
	this.shape_9.setTransform(-19.1787,8.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(50));

	// armr
	this.instance_3 = new lib.arm();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.15,11.05,1,1,0,0,0,8.6,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({regY:13.4,scaleY:0.6019,y:5.8},5).to({regX:8.5,regY:13.2,scaleY:0.6414,skewX:170.5527,skewY:-9.4472,x:-11.85,y:4.8},3).to({regY:13.1,scaleY:0.6413,skewX:185.5515,skewY:5.5516,x:-13.1,y:4.65},3).to({regY:13.2,scaleY:0.6414,skewX:170.5527,skewY:-9.4472,x:-11.85,y:4.8},3).to({regY:13.1,scaleY:0.6413,skewX:185.5515,skewY:5.5516,x:-13.1,y:4.65},3).to({regY:13.2,scaleY:0.6414,skewX:170.5527,skewY:-9.4472,x:-11.85,y:4.8},3).to({regX:8.6,regY:13.4,scaleY:0.6019,skewX:0,skewY:0,x:-9.15,y:5.8},2).to({regY:13.3,scaleY:1,y:11.05},4).wait(7));

	// arm
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B5D42").s().p("AhGAtQgYgrAwglIBOhNIAGgYIAbgCIAOAmIgbAIIhhBkQgFAGABAJIArBlIgOAPg");
	this.shape_10.setTransform(-38.6002,15.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-40.6,120.9,93.6);


// stage content:
(lib.neva_hey = function(mode,startPosition,loop) {
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
	this.instance.setTransform(71,58.9,0.8743,0.8743,0,0,0,-1.9,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,66.3,55.69999999999999,31.900000000000006);
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