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
	this.shape.graphics.f().s("#333333").ss(0.7,1,1).p("AgZgCQgGgCgCgGQgHgQATgIQARgHAOAEQAQAFACAFQACAGgHAFQANAEAAAKQADAbghANQgUAGACgWQgSgEAFgUgAAXgQQgDADgEACQgFADgGACQgUAHgKgDAgMAWQAZAAARgW");
	this.shape.setTransform(3.6415,3.9751);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF2E7").s().p("AgMAWQAZAAARgWQgRAWgZAAQgSgEAFgUIAAAAIABAAIAHABIAAAAIABAAIABAAQAIgBAKgDIACgBIALgFIAHgFIgHAFIgLAFIgCABQgKADgIABIgBAAIgBAAIAAAAIgHgBIgBAAIAAAAQgGgCgCgGQgHgQATgIQARgHAOAEQAQAFACAFQACAGgHAFQANAEAAAKQADAbghANIgHACQgMAAABgSg");
	this.shape_1.setTransform(3.6415,3.9751);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-1,-1,9.3,10), null);


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


(lib.door = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("Ah1GUIgfjHIhDmlICDjoIDkBIIASA6IA2C1IiXJKgAAJizIAKg5IAmAKIgKA4IAXAGIAaAGIgHAkIgmgJIgJgDIgEAYIgPBgIgkgJIgBAAIATh4Ig5gPIAGgig");
	this.shape.setTransform(21.625,44.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#965E37").s().p("AiWFTIggjHICIjkIAlAJIAOhgIAMgWIAnAJIAHgkIgagFIBbiaIA3C1IiXJKg");
	this.shape_1.setTransform(24.975,51.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBmIgBAAIAUh3Ig7gPIAHgiIA3ANIAKg5IAlAKIgJA4IAXAGIAaAGIgHAjIgngJIgJgCIgDAXIgPBgg");
	this.shape_2.setTransform(23.775,32.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B77548").s().p("Ai8heICEjoIDjBIIASA7IhbCZIgXgGIAJg4IgmgKIgKA5Ig2gNIgHAiIA6APIgUB3IABAAIiHDlgABFgMIAJADIgMAUg");
	this.shape_3.setTransform(18.8875,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.door, new cjs.Rectangle(-1,-1,45.3,91.9), null);


(lib.back = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AhmmyIFZA0IAnDhIjCJQIh5gJIhogPIiQpWIAAAAIBLjZIBogeIhVDwICaJsAkZi7IBegH");
	this.shape.setTransform(28.175,43.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#422217").s().p("AATEnIiOpWIBegGICZJsg");
	this.shape_1.setTransform(12.4,55.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#965E47").s().p("AhYB7IBKjYIBngeIhVDwIhcAGg");
	this.shape_2.setTransform(8.925,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhPGrIibpsIBVjxIFZA0IAnDhIjCJQg");
	this.shape_3.setTransform(32.85,43.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(-1,-1,58.4,88.9), null);


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
	this.shape.setTransform(-0.825,-5.3587);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// hairtop
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB4CDQgbglgBgQQAAgQgSgCQgRgCgUgQIgMgSQgQgZgTgJQgYgLgeANQgNAGgNAIQARASgeAUQgeAUgWASQgbACgegWIAdhJQAwhuBcgaQAvgNAhAgQBoADAmBAQAsBNgrA/IADALQANAEALgSQAQAqgfATQgVAPgRAAQgUAAgOgVg");
	this.shape_1.setTransform(1.4083,-9.9487);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(24));

	// eyelashes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.2,1,1).p("AAiAKQAKgYAYACQAYACAIAYQAIAAAGgEAghAKQgJgYgYACQgZACgHAYQgIAAgHgE");
	this.shape_2.setTransform(-0.775,-0.9545);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(24));

	// pupils
	this.instance = new lib.pupils();
	this.instance.setTransform(-1.35,0.45,1,1,0,0,0,8.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgPADQAUAGALgN");
	this.shape_3.setTransform(1.05,11.5673);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(24));

	// nose
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6CCC4").s().p("AgSgDIAGgEIAaAAIAFAEIgTALg");
	this.shape_4.setTransform(-0.625,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(24));

	// eyes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFFFF").s().p("AAsAWQgJgJABgNQgBgMAJgJQAJgJANAAQANAAAKAJQAJAJAAAMQAAANgJAJQgKAJgNAAQgNAAgJgJgAhYAWQgIgJgBgNQABgMAIgJQAKgJANAAQAMAAAJAJQAKAJgBAMQABANgKAJQgJAJgMAAQgNAAgKgJg");
	this.shape_5.setTransform(-0.85,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(24));

	// Layer_3
	this.instance_1 = new lib.eyeshadow();
	this.instance_1.setTransform(-1,-1.95,0.903,0.6472,0,0,0,11.7,4.9);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF2E7").s().p("AgdCjQg6gXghhMQg6ibCChNIBrAAQBtBAgpCbQgdBYhAAXQgSAHgQAAQgPAAgOgGg");
	this.shape_6.setTransform(-0.4463,-0.9745);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(24));

	// neck
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CCC4").s().p("AgnAEQAFgLACgOQABgNgCgPIBDAAQgCAPABANQABAOAHALIgpAug");
	this.shape_7.setTransform(-0.4,19.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(24));

	// hairbottom
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiQEnIgzkVQgLg3gXgLIgGgDQgTgMgIgZQgSg4AUhEIBVAAQBMg3ANg8ICOBaIA7gKIAFAOQAfBPgVBCQgKAcgXAMQgYALAEAjIAAAOQAdANAWAUQA1AtAKBQQBEAbANg5QAFB5lVBDQg4gLgYgWg");
	this.shape_8.setTransform(6.2336,17.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-25.1,54.3,75.6);


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

	// hand
	this.instance = new lib.hand();
	this.instance.setTransform(-14.25,17.55,0.863,0.863,0,0,0,3.6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:-4.05,y:14.85},8).wait(23).to({x:-14.25,y:17.55},8).wait(1));

	// lid
	this.instance_1 = new lib.door();
	this.instance_1.setTransform(5.75,22.15,1,1.152,0,0,0,21.6,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({x:15.15},8).wait(23).to({x:5.75},8).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA1GrIgjh7IBMgfIgyhdIA4gsIg4AsIgsAjIgsi1IgFgWIAFAWIgGAHIhGBIIiFghIhzjSIA7kvIElAAIhUDwIAyDqIgyjqIBUjwIAAgBIFaA0IAmDhIjBJQgAgsAig");
	mask.setTransform(-13.35,12.4);

	// head
	this.instance_2 = new lib.head();
	this.instance_2.setTransform(-1.15,-2.15,1,1,-29.4874,0,0,-0.2,-0.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({rotation:-29.4879},0).to({rotation:-29.4874,x:-12.85,y:-5.35},8).wait(23).to({rotation:-29.4879,x:-1.15,y:-2.15},8).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAInvIhUEVICZLK");
	this.shape.setTransform(-15.775,18.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(46));

	// coffinback
	this.instance_3 = new lib.back();
	this.instance_3.setTransform(-4.65,19.05,1,1.152,0,0,0,28.2,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-31.6,79.3,106.6);


// stage content:
(lib.viki_coffin = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(68.6,48.7,0.7452,0.7452,0,0,0,-0.1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(80.9,67,27.5,31.200000000000003);
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