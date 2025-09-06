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


(lib.tear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#56CAD5").s().p("AgeAoQgYgOAGgXQAPgxBUgCQgaAkgEAXQgEAXgMAKQgFAFgGAAQgKAAgOgJg");
	this.shape.setTransform(5.04,4.8583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tear, new cjs.Rectangle(0,0,10.1,9.7), null);


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

	// arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7B902").s().p("AiQBPIDQjdQBmgggbB4QgbCEjCBIg");
	this.shape.setTransform(-19.425,17.29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// eyes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ABGAPQBog7BnA7AkUAPQBog7BnA7");
	this.shape_1.setTransform(-2,-9.9875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({y:-7.7375},0).wait(1));

	// tears
	this.instance = new lib.tear();
	this.instance.setTransform(31.4,-5.85,1,1,0,-14.9992,165.0008,5,4.8);

	this.instance_1 = new lib.tear();
	this.instance_1.setTransform(-33.5,-5.85,1,1,14.9992,0,0,5,4.8);

	this.instance_2 = new lib.tear();
	this.instance_2.setTransform(-37.85,2.85,1.1134,1.1134,0,0,0,5,4.9);

	this.instance_3 = new lib.tear();
	this.instance_3.setTransform(-46.85,-10.9,1,1,59.9984,0,0,5,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:14.9992,skewX:0,skewY:0,x:-33.5,y:-5.85}},{t:this.instance,p:{regY:4.8,scaleX:1,scaleY:1,skewX:-14.9992,skewY:165.0008,x:31.4,y:-5.85}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{rotation:0,skewX:-59.9984,skewY:120.0016,x:41.5,y:-10.9}},{t:this.instance,p:{regY:4.9,scaleX:1.1134,scaleY:1.1134,skewX:0,skewY:180,x:32.5,y:2.85}}]},1).wait(1));

	// hair
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8D80C").s().p("Ah1BGQBKhTAJhFQAHg5AgAfQAgAfgVBfQAkAFAcgWQAfgSAGA1QAFArhXApQg1hGhjAUg");
	this.shape_2.setTransform(1.3636,-53.521);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({y:-50.821},0).wait(1));

	// snout
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E17D0C").s().p("AhagCQAmADArgYQATgOATAOQAhASAdADQgCAehSADIgJAAQhJAAgPghg");
	this.shape_3.setTransform(-2.35,6.5581);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE9A00").s().p("ABRAuQgdgDghgSQgTgOgSAOQgsAZgmgEQgLgBgLgEQgpgVAQgiQBeAOAagdQAFgIAHgEQADgCADgBQAOgEALAHQAHAEAFAIQAaAdBegOQAQAigpAVQgPAGgRAAIgKgBg");
	this.shape_4.setTransform(-1.3878,1.6878);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D44F37").s().p("AgmASQgPghgygOQAyACAqgQQAGgDAFAAQAGAAAFADQArAQAygCQgyAOgPAhQgJAYgeAFQgdgFgJgYg");
	this.shape_5.setTransform(-1.6,9.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE9A00").s().p("AhGA2Qgtg3gugSQgwgRA/gKQA+gJAsgbQAXgOARAAQATAAAWAOQAsAbA+AJQA/AKgvARQgvASgsA3QgcAigsAJQgrgJgbgigAgmAjQAJAXAdAGQAegGAJgXQAPgjAygNQgyADgrgQQgFgDgGgBQgFABgFADQgqAQgzgDQAyANAPAjg");
	this.shape_6.setTransform(-1.6046,8.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// overlay
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.749)").s().p("AhABWQgYgRACgmQADglAbgkQAbgkAjgNQAkgMAXARQAYASgCAmQgDAlgaAkQgcAkgjANQgOAFgNAAQgSAAgOgLg");
	this.shape_7.setTransform(-19.2711,-33.2672);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({y:-30.5672},0).wait(1));

	// head
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8D80C").s().p("AkADmQhqhfAAiHQAAiHBqhfQBqhfCWAAQCXAABqBfQBqBfAACHQAACHhqBfQhqBgiXAAQiWAAhqhgg");
	this.shape_8.setTransform(-1.675,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({y:-15.1},0).wait(1));

	// shadow
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7B902").s().p("Ah4BEQgzgcAAgoQAAgnAzgcQAygcBGAAQBHAAAzAcQAyAcAAAnQAAAogyAcQgzAchHAAQhGAAgygcg");
	this.shape_9.setTransform(-2,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2));

	// body
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8D80C").s().p("Ai7CdQhOhBAAhcQAAhbBOhBQBOhBBtAAQBuAABOBBQBOBBAABbQAABchOBBQhOBBhuAAQhtAAhOhBg");
	this.shape_10.setTransform(-1.85,27.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2));

	// feet
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7911E").s().p("AB1BHQgQgMgaANQAMg+gwg5ICDgtQgMBMAbAZQAOANAxALQgsACANAqQgegPgTADQgTAFgHAYgAinBBQgSgDgfAPQANgqgrgCQAvgLAPgNQAbgZgMhMICDAtQgxA5ANA+QgagNgRAMIgYAXQgHgYgTgFg");
	this.shape_11.setTransform(-1.75,50.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(2));

	// arms
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7B902").s().p("ACqhpQB9A0AXBDQALArgYAaQgYAXgWAAQAKh+hjhVgAkwBTQgYgaALgrQAXhDB9g0QhjBVAKB+QgWAAgYgXg");
	this.shape_12.setTransform(-1.8,21.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-65.5,101.9,125.4);


// stage content:
(lib.quackers_laugh = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(65,58,0.6589,0.6589,0,0,0,-1.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(90,66.7,0.7999999999999972,32.599999999999994);
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