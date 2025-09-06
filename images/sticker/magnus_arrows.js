(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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


(lib.arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ah8glIhXAkIBRAdQgcghAigggAC+AAIhPAAIAJAcIBcAMIgWgoIAMgnIhUAAIgLAcIAEALIj6AA");
	this.shape.setTransform(21.175,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE0A7").s().p("AgmAcIgJgcIgEgKIALgdIBTAAIgNAnIAWAogAAeAAIhNAAg");
	this.shape_1.setTransform(37.125,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgqADIBVgjQghAgAcAhg");
	this.shape_2.setTransform(4.325,3.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-1,-1,44.4,10), null);


(lib.Male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow_copy
	this.instance = new lib.arrow();
	this.instance.setTransform(51.55,-9.05,1,1,-1.7226,0,0,21.2,3.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regY:4,scaleX:0.9067,x:24.6,y:-9.35},2).to({regY:3.9,scaleX:0.9453,rotation:35.7228,x:24.55,y:-9.4},2).to({regY:3.8,rotation:65.7229,x:32.95,y:-4.5},2).to({regX:21.1,scaleY:0.9999,rotation:88.168,x:39.3,y:6.6},2).to({regX:21.2,x:43.8,y:21.8},2).to({_off:true},1).wait(11));

	// arrow
	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(48.1,-20.25,1,1,6.2212,0,0,21.2,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({scaleX:0.9067,x:21.4,y:-24.35},2).to({regY:3.9,scaleX:0.9453,rotation:43.6676,x:21.45,y:-24.45},2).to({regY:3.8,scaleX:0.9454,rotation:73.6673,x:29,y:-18.4},2).to({regX:21.1,scaleX:0.9453,rotation:96.1125,x:33.8,y:-6.55},2).to({x:36.15,y:9.1},2).to({_off:true},1).wait(8));

	// shield
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACAF9D").s().p("Ag3DqQg/hFgch1Qgbh1AXhhQAXhgA9gUQAzgQA0AvQgogggnANQg1ARgUBYQgUBYAZBpQAZBsA4A/QA3A/A1gRQA2gRAUhXQAJgrAAguQACA9gNA2QgXBgg9AUQgOAEgOAAQguAAgwg1gAANAlQgNgPgEgYQgGgZAEgUQAFgUALgEQANgEANAOQANAPAGAZQAGAYgFAVQgFAUgNAFIgFAAQgJAAgLgMg");
	this.shape.setTransform(5.9964,-9.1125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D4128").s().p("AgvDUQg5g/gZhsQgZhpAVhYQAUhYA0gRQAogNAnAgQAKAIAKALQA/BFAcB1QAMAyACAwQABAugKArQgUBXg2ARQgLAEgLAAQgpAAgsgygAgHg6QgNAEgEAUQgFAUAGAYQAGAZANAPQAMAPAMgDQANgFAEgUQAFgVgFgYQgGgZgOgPQgKgLgIAAIgGABg");
	this.shape_1.setTransform(7.8144,-10.4104);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACAF9D").s().p("AgiDuQhFg/gmhyQgmhyAOhiQAPhjA6gZQAygUA4AqQgqgcgnAQQgyAWgNBZQgMBZAjBnQAiBpA+A6QA9A6AzgWQA0gWAMhYQAFgsgEguQAIA8gIA4QgPBig7AYQgRAHgSAAQgrAAgwgsgAAQAkQgNgOgHgXQgJgZADgUQADgVAKgFQANgFAOANQAPAOAIAYQAIAYgDAVQgDAUgNAGIgGABQgJAAgLgKg");
	this.shape_2.setTransform(5.7865,-9.927);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D4128").s().p("AgcDXQg+g5gihpQgjhnAMhZQANhZAygWQAngRArAcQAJAHALAKQBGBAAmBxQAQAxAHAvQAEAvgFArQgMBYg0AXQgOAFgPAAQgnAAgsgqgAgNg5QgLAFgDAUQgDAVAJAXQAIAZANANQAOAOALgFQANgFADgVQADgVgIgYQgIgYgPgNQgKgKgIAAQgEAAgEACg");
	this.shape_3.setTransform(7.4714,-11.3652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(22));

	// wingr
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBkQgVgLgGgkQgdiUCGgGQAiAIgyAfQAwAOgyAnIgCAAQAZADgKAWQgMAbgXgIQAWAMgVAmQgMARgPAAQgGAAgGgCg");
	this.shape_4.setTransform(-2.2514,-29.6051);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(24));

	// armr
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D3227").s().p("Ag4g4IAUAmQAJASAbASIAogsIAAACIAGAMIAMAQIg6A1QhDgfALhSg");
	this.shape_5.setTransform(-11.8766,9.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCEAD").s().p("AgFAuIgQgTIgGgMQgGghAIgnIASAOIAlBlQgegFgFgHg");
	this.shape_6.setTransform(-5.0957,5.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCEAD").s().p("AgDAyIgRgSIgHgMQgKggAIgtIAQASIAvBhQgfgCgGgGg");
	this.shape_7.setTransform(-4.4028,4.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D3227").s().p("Ag7g1IAXAkQALARAbAQIAlgwIABABIAHAMIANAPIg0A6QhGgYADhTg");
	this.shape_8.setTransform(-11.2061,9.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).wait(22));

	// mouth
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgQAGQAPgNASAD");
	this.shape_9.setTransform(-11.1,1.0305);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(24));

	// moustache
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CFA64B").s().p("AihALQA+AjAagtQAgguArAkQAeg1AtAeQAqAdArg5QgTByiIgpQg1AwgqAAQgrAAgegyg");
	this.shape_10.setTransform(-12.975,-3.8811);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(24));

	// beard
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2BA62").s().p("AhbgYQBFhLByAsQhGA2gIBKQhOglgbg8g");
	this.shape_11.setTransform(-8.175,2.7866);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(24));

	// headband
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D3227").s().p("Ah8AtQgGgGgDgLQgCgLAEgJQAFgHAIgBIDjgwQAJgBAGAGQAIAGACAKIAAABQACAKgFAIQgDAIgIACIjkAvIgEAAQgGAAgGgEg");
	this.shape_12.setTransform(-11.5195,-21.9553);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(24));

	// hair
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2BA62").s().p("AgpDRQg1hegfhbIAyAuIBHCSgABRARQAahTg5g3Qg3g4iNBVQAEiGCHALQBqAOAuCUQALAlgnAwIAZB7IgbAbg");
	this.shape_13.setTransform(-8.879,-8.5419);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(24));

	// brows
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgVAIQgagHgPATAA/gRQgagHgPAT");
	this.shape_14.setTransform(-13.625,-16.1042);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(24));

	// pupils
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AhEAAIAuANIgrAWAA2giIghAiIAwgC");
	this.shape_15.setTransform(-12.675,-11.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(24));

	// torso
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A59A9F").s().p("AhIBMQAdgbALg+IABgNIgMgCIgjgaIAagaIAKgIIAHAEQANAFAMgGIAAgDQAJABAHADQALAFAGAGIA4AsIgbAZQAEAaABA2QgiANgfAAQghAAgfgNg");
	this.shape_16.setTransform(-9.175,6.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(24));

	// head
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCEAD").s().p("AAZCXIgGgRQgnAFgngVQgzgbgSg4QgTg4AZg1QAYg1A2gSQA1gSAyAbQA0AcATA3QASA5gZA0QgYA0gzATIAFAOIgFAGQgGAGgHAAQgFAAgFgCg");
	this.shape_17.setTransform(-10.2755,-13.1399);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(24));

	// wingl
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAFBSQgZgiAUgQQgVANgOgZQgMgTAVgFQg1gfAtgWQg0gUAggOQCDgQgLCSQgDAjgSAOQgIAFgIAAQgMAAgMgLg");
	this.shape_18.setTransform(-25.6482,-25.6698);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-41.8,105.7,84.19999999999999);


// stage content:
(lib.magnus_arrows = function(mode,startPosition,loop,reversed) {
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
			mystage.color = '#afccce'; // Text color
			mystage.shad1 = '#222222'; // Main shadow color
			mystage.shad2 = '#222222'; // Alt shadow color
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
	this.instance = new lib.Male();
	this.instance.setTransform(68.8,73.65,1.1143,1.0889,0,0,180,-6.5,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(86.8,82.3,10.799999999999997,14.799999999999997);
// library properties:
lib.properties = {
	id: '8F6504BFFD572E4F939766561DC746C6',
	width: 100,
	height: 100,
	fps: 12,
	color: "#666666",
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;