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


(lib.pupils = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C50500").s().p("AA4AMQgEgFAAgHQAAgGAEgFQAEgFAGAAQAFAAAEAFQAEAFAAAGQAAAHgEAFQgEAFgFAAQgGAAgEgFgAhKAMQgEgFAAgHQAAgGAEgFQAEgFAGAAQAFAAAEAFQAEAFAAAGQAAAHgEAFQgEAFgFAAQgGAAgEgFg");
	this.shape.setTransform(8.325,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pupils, new cjs.Rectangle(0.4,0.5,15.9,3.4), null);


(lib.eyeshadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#8E7699").s().p("AAmAkQgNgPAAgVQAAgVANgOQAOgPATAAQAUAAAOAPQANAOAAAVQAAAVgNAPQgOAPgUgBQgTABgOgPgAhoAkQgOgPAAgVQAAgVAOgOQAOgPATAAQAUAAAOAPQANAOAAAVQAAAVgNAPQgOAPgUgBQgTABgOgPg");
	this.shape.setTransform(11.85,5.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeshadow, new cjs.Rectangle(0,0,23.7,10.1), null);


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

	// brows
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABigKQghgGgcAcAhhgKQAhgGAcAc");
	this.shape.setTransform(-0.575,-4.6087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	// hairtop
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB4CDQgbglgBgQQAAgQgSgCQgRgCgUgQIgMgSQgQgZgTgJQgYgLgeANQgNAGgNAIQARASgeAUQgeAUgWASQgbACgegWIAdhJQAwhuBcgaQAvgNAhAgQBoADAmBAQAsBNgrA/IADALQANAEALgSQAQAqgfATQgVAPgRAAQgUAAgOgVg");
	this.shape_1.setTransform(1.4083,-9.9487);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(36));

	// eyelashes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.2,1,1).p("AAiAKQAKgYAYACQAYACAIAYQAIAAAGgEAghAKQgJgYgYACQgZACgHAYQgIAAgHgE");
	this.shape_2.setTransform(-0.775,-0.9545);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36));

	// pupils
	this.instance = new lib.pupils();
	this.instance.setTransform(-0.7,0.9,1,1,0,0,0,8.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:-2.25,y:1.65},4).to({x:-1.75,y:-0.3},4).to({x:0.9,y:-0.15},4).to({y:1.85},4).to({x:-0.7,y:0.9},4).wait(11));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgPABQAQgEAPAF");
	this.shape_3.setTransform(-0.425,11.3435);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(36));

	// nose
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6CCC4").s().p("AgSgDIAGgEIAaAAIAFAEIgTALg");
	this.shape_4.setTransform(-0.625,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(36));

	// eyes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFFFF").s().p("AAsAWQgJgJABgNQgBgMAJgJQAJgJANAAQANAAAKAJQAJAJAAAMQAAANgJAJQgKAJgNAAQgNAAgJgJgAhYAWQgIgJgBgNQABgMAIgJQAKgJANAAQAMAAAJAJQAKAJgBAMQABANgKAJQgJAJgMAAQgNAAgKgJg");
	this.shape_5.setTransform(-0.85,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(36));

	// Layer_3
	this.instance_1 = new lib.eyeshadow();
	this.instance_1.setTransform(-1,-1.95,0.903,0.6472,0,0,0,11.7,4.9);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF2E7").s().p("AgdCjQg6gXghhMQg6ibCChNIBrAAQBtBAgpCbQgdBYhAAXQgSAHgQAAQgPAAgOgGg");
	this.shape_6.setTransform(-0.4463,-0.9745);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(36));

	// neck
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CCC4").s().p("AgnAEQAFgLACgOQABgNgCgPIBDAAQgCAPABANQABAOAHALIgpAug");
	this.shape_7.setTransform(-0.4,19.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36));

	// hairbottom
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlUCMQANA5BEgbQALhPA0guQAYgWAigOQgDgHAAgEQAEgjgXgLIgGgDQgTgMgIgZQgSg4AUhEIBVAAQBMg3ANg8ICOBaIA7gKIAFAOQAfBPgVBCQgKAcgXAMQgYALAEAjIAAAOQAdANAWAUQA1AtAKBQQBEAbANg5QAFB5lWBDQldhDAFh5g");
	this.shape_8.setTransform(-0.6619,17.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-25.1,68.1,75.6);


(lib.Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hands
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AASgDQALAEALAQAAHALQAMADADANQgJADgNACQgXg0gUACQBDghATAyQADALgGAHAAWAbQAMgEAGgG");
	this.shape.setTransform(9.9474,26.007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF2E7").s().p("AgrgSQBDghATAyQADALgGAHQgGAGgMAEQgJADgNACQgXg0gUACgAAWAbQgDgNgMgDQAMADADANgAAoARQgLgQgLgEQALAEALAQg");
	this.shape_1.setTransform(9.9474,26.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// arm2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("Ah9gnQgBAFgBADQgFAfAZAEIBRAKQBGAjBKgEQAUgUgQgXQgygFgigQQgVgJghgCIg/gP");
	this.shape_2.setTransform(-2.2192,24.7003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#810817").s().p("AgaAOIhRgKQgZgEAFgfIACgHIAugHIA/APQAhACAVAJQAiAQAyAFQAQAXgUAUIgQABQhCAAg+ggg");
	this.shape_3.setTransform(-2.2192,24.7003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// arm
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AA5AJQgzAagzAFQgVACgYgPQgLgRAJgLQAagEAVgFQAUgGARgHQAUgKArAEQAZgFARgF");
	this.shape_4.setTransform(-2.978,25.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#810817").s().p("AhpAgQgLgRAJgMQAagDAVgFQAUgGARgHQAVgKAqAEQAYgFASgFQAbgbgGAzQAcAPg9gFIgcAOQgyAZg0AFIgGABQgSAAgVgNg");
	this.shape_5.setTransform(-1.4616,24.6984);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// body
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AhkAVQgHAHgJAFQhFAmgvBvIHRAAQgvhvhFgmQgIgFgHgGABXhwQgYBhAnAlABHi1IhHBKIhFhGAhkAVIBlBTIBlhSAhWhyQAZBignAl");
	this.shape_6.setTransform(-1.175,33.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CCC4").s().p("AhEgZIgCgDIACgBIABAAQAbgDAEgLIBKAFQAEAGAbADIADAAIhIBJg");
	this.shape_7.setTransform(-1.25,18.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjoBQQAvhtBFgmQAJgFAHgHIBlBRIBlhQQAHAGAIAFQBFAmAvBtg");
	this.shape_8.setTransform(-1.175,43.7875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#810817").s().p("AhlA8QAngmgZhhQgFgUgHgWQgFgWAggCIADACIBEBHIBHhKIADABQAfACgFAWQgIAYgFAUQgYBgAoAmIhmBSg");
	this.shape_9.setTransform(-1.1375,29.7625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// handleft
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(1,1,1).p("AARAXIgyAIQgUgPAHgPIAAAAIAQgVQAwgUAfATgAgVAGIAmAR");
	this.shape_10.setTransform(-11.7407,26.9305);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF2E7").s().p("AguABIAAAAIAQgVQAwgUAfATIggAsIgmgRIAmARIgyAIQgUgPAHgPg");
	this.shape_11.setTransform(-11.7407,26.9305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// armleft
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("ABjBAIAIgNIgKgdABOg5QAJgEAKgBQAOgBAOAPQAPAOgXBIAhNA/IgLgOIAOgdAgyg6QgLgFgNAAQgSgBgLAEQgTAGgIAz");
	this.shape_12.setTransform(-1.7604,21.1659);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#810817").s().p("ABhAdIAAg/QgJgJgKgHQAJgEAKgBQAOgBAOAOQAPAPgXBIIgKANgAiCADQAIgzATgFQALgEASABQANAAALAFQgNAGgLAJIAAA/IgOAdg");
	this.shape_13.setTransform(-1.7604,20.4909);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(-1.15,-5.8,1,1,0,0,0,-0.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Anim, new cjs.Rectangle(-35.6,-30.1,68.1,82.9), null);


// stage content:
(lib.viki_crossed = function(mode,startPosition,loop,reversed) {
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
			mystage.color = '#FF0000'; // Text color
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

	// anim
	this.instance = new lib.Anim();
	this.instance.setTransform(60.6,51.05,0.9683,0.9683,0,0,0,-0.1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(76.2,64.1,15.899999999999991,29.900000000000006);
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;