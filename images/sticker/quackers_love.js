(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.749)").s().p("AhABWQgYgRACgmQADglAbgkQAbgkAjgNQAkgMAXARQAYASgCAmQgDAlgaAkQgcAkgjANQgOAFgNAAQgSAAgOgLg");
	this.shape.setTransform(8.6789,9.6828);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shine, new cjs.Rectangle(0,0,17.4,19.4), null);


(lib.mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E17D0C").s().p("AADAeQhRgJgLgkQAkAIAvgTQAUgLARAQQAeAVAdAHQgEAYg2AAIgdgBg");
	this.shape.setTransform(13.625,9.5009);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE9A00").s().p("ABLAyQgdgHgegXQgQgQgVALQgvAUgkgJQgMgDgKgFQgmgZAVghQBbAbAdgaQAGgHAIgDQADgCADAAQAPgCAKAIQAGAFAEAIQAWAgBfgBQAMAjgsAQQgKADgKAAQgLAAgLgDg");
	this.shape_1.setTransform(15.1329,5.2625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(0,0,30.3,12.7), null);


(lib.heart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47485").s().p("AgDA6Qg3gNgEgzQgIheA5gFQAMgCAKACQAZAagTAYQgbAZAqAYQAoAXgHBaQgXgngrgKg");
	this.shape.setTransform(6.3912,12.4429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF455B").s().p("AgiBtIgCgCQAGhagngXQgsgZAdgYQASgYgZgaQApAHATA0QgChXBBAKQA9AKADA9IAAAMQgBANgHAOQgQAeg0AhQg2AmAIAlIgIgQg");
	this.shape_1.setTransform(16.4109,12.4982);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F47485").s().p("AgCAlQgjgIgDghQgFg9AlgDQAIgBAGABQAQARgMAQQgSAPAcAQQAZAPgEA6QgPgZgcgHg");
	this.shape_2.setTransform(8.7236,12.505);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF455B").s().p("AgVBHIgCgCQAEg6gZgPQgdgQATgPQAMgQgQgRQAaAFAMAhQgBg4AqAHQAnAGACAoIAAAHQAAAJgFAJQgKATgiAVQgjAZAGAYIgFgKg");
	this.shape_3.setTransform(15.2109,12.5412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.1,25);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D80C").s().p("AgpFDQiVgThdhtQhehsASiGQARiGB3hQQB1hRCVAUQCVATBdBsQBdBsgSCGQgRCGh2BQQhfBChzAAQgbAAgdgEg");
	this.shape.setTransform(36.3256,32.7231);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,72.7,65.5), null);


(lib.hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D80C").s().p("AgPA5IAnAAQAMASgMAXIgFAAQglAAADgpgAhwAbIA6gpIAAhKQAkgSAUASIAaAYIA7gfQAgAOgHAcQgFAWg1APIAAAXQgRARgfgQQgLgHgGgKIgTADIgTA7IgdAag");
	this.shape.setTransform(11.2962,9.7846);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7B902").s().p("AguA4QgYgIgHglIASg8IAUgCQAFALAMAGQAfARAQgRIAAgYIAcAAQAPAMAGANQAGAMgDAMQgWAbg6gEIgpAAQgDAsAsgDQgKAEgLAAQgKAAgMgDg");
	this.shape_1.setTransform(14.1029,14.0315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(0,0,22.6,20), null);


(lib.hair = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D80C").s().p("Ah2A1QBUhJAShDQAOg4AcAjQAcAjgiBcQAkAJAegSQAhgOgBA1QAAAshcAeQgrhNhlAHg");
	this.shape.setTransform(11.8514,12.2863);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair, new cjs.Rectangle(0,0,23.7,24.6), null);


(lib.eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF455B").s().p("ABJBGQgggogFgcQgCgMADgLIADgJQATgvAzAJQA3AJgYBDQAcgjAiAFQgbAOAJAXQAQAbgqAIQglAIgTBJQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgLALQARgbgigugAiCBeIgDgCQAAhbgpgUQgtgVAbgbQARgZgbgYQApAEAWAzQgIhWBDAFQA+AGAHA8IABAMQAAANgGAOQgOAhgxAjQg1AqALAkIgJgPg");
	this.shape.setTransform(27.0339,14.3085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F47485").s().p("ACrArQAqgIgQgbQgJgXAbgOQAJACAJAEQAsAUggBHQgRAogvgEQglgFgdAZQAThJAlgIgAjAApQg3gKgHgzQgPhcA5gKQALgCALABQAbAYgRAZQgbAbAtAVQApAVAABaQgagmgtgGg");
	this.shape_1.setTransform(25.8259,15.0219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,51.7,28.6), null);


(lib.animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// heart
	this.instance = new lib.heart();
	this.instance.setTransform(36.6,18.75,1,1,14.9992,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.3285,scaleY:1.3285,rotation:0,x:39.4,y:2},5).wait(14).to({scaleX:1,scaleY:1,rotation:14.9992,x:36.6,y:18.75},4).wait(1));

	// hand
	this.instance_1 = new lib.hand();
	this.instance_1.setTransform(30.55,28.45,1,1,14.9992,0,0,11.3,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.3285,scaleY:1.3285,rotation:0,x:35,y:16.6},5).wait(14).to({scaleX:1,scaleY:1,rotation:14.9992,x:30.55,y:28.45},4).wait(1));

	// pupils
	this.instance_2 = new lib.eyes();
	this.instance_2.setTransform(-1.65,-13.95,1,1,-8.4409,0,0,25.8,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:14.3,rotation:0,x:-0.8,y:-13.15},5).wait(14).to({regY:14.2,rotation:-8.4409,x:-1.65,y:-13.95},4).wait(1));

	// hair
	this.instance_3 = new lib.hair();
	this.instance_3.setTransform(-0.4,-52.7,1,1,-8.4409,0,0,11.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:6.15,y:-51.35},5).wait(14).to({rotation:-8.4409,x:-0.4,y:-52.7},4).wait(1));

	// snout
	this.instance_4 = new lib.mouth();
	this.instance_4.setTransform(-1.1,4.1,1,1,-8.4409,0,0,15.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:6.3,rotation:0,x:-2.95,y:4.65},5).wait(14).to({regY:6.4,rotation:-8.4409,x:-1.1,y:4.1},4).wait(1));

	// overlay
	this.instance_5 = new lib.shine();
	this.instance_5.setTransform(-23,-31,1,1,-8.4409,0,0,8.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:8.7,rotation:0,x:-19.25,y:-33.25},5).wait(14).to({regX:8.6,rotation:-8.4409,x:-23,y:-31},4).wait(1));

	// head
	this.instance_6 = new lib.head();
	this.instance_6.setTransform(-2.2,-17.1,1,1,-8.4409,0,0,36.2,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7B902").s().p("Ah4BEQgzgcAAgoQAAgnAzgcQAygcBGAAQBHAAAzAcQAyAcAAAnQAAAogyAcQgzAchHAAQhGAAgygcg");
	this.shape.setTransform(-2,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// body
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D80C").s().p("Ai7CdQhOhBAAhcQAAhbBOhBQBOhBBtAAQBuAABOBBQBOBBAABbQAABchOBBQhOBBhuAAQhtAAhOhBg");
	this.shape_1.setTransform(-1.85,27.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(24));

	// feet
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7911E").s().p("AB1BHQgQgMgaANQAMg+gwg5ICDgtQgMBMAbAZQAOANAxALQgsACANAqQgegPgTADQgTAFgHAYgAinBBQgSgDgfAPQANgqgrgCQAvgLAPgNQAbgZgMhMICDAtQgxA5ANA+QgagNgRAMIgYAXQgHgYgTgFg");
	this.shape_2.setTransform(-1.75,50.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(24));

	// arms
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7B902").s().p("Ag7BTQgXgaALgrQAWhDB9g0QhiBVAJB+QgVAAgZgXg");
	this.shape_3.setTransform(-26.3639,21.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-66.5,99.6,126.4);


// stage content:
(lib.quackers_love = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
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
			mystage.color = '#DC143C'; // Text color
			mystage.shad1 = '#FFD45C'; // Main shadow color
			mystage.shad2 = '#FFD45C'; // Alt shadow color
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
	this.instance = new lib.animation();
	this.instance.setTransform(59,58,0.6589,0.6589,0,0,0,-1.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(81.9,66,12.799999999999997,33.3);
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;