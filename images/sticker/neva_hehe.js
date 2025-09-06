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


(lib.handr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3BD00").s().p("Ag2ARQADgfAbgJQgGgJgSAAQADgjA0AGQApAEAHAnQABBLhJAGQglgBAAgtg");
	this.shape.setTransform(5.4765,6.2997);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handr, new cjs.Rectangle(0,0,11,12.6), null);


(lib.armr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D42").s().p("AAGB9IAshmQABgJgFgGIhihkIgagIIAOgmIAbACIAGAYIBOBNQAwAlgYArIgyBeg");
	this.shape.setTransform(7.9002,13.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.armr, new cjs.Rectangle(0,0,15.8,27.9), null);


(lib.snowman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handl
	this.instance = new lib.handr();
	this.instance.parent = this;
	this.instance.setTransform(-16.05,17.8,1,1,0,4.7167,-175.2833,5.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({skewX:1.9937,skewY:-178.0063,y:18.25},0).wait(2).to({skewX:4.7167,skewY:-175.2833,y:17.8},0).wait(2).to({skewX:1.9937,skewY:-178.0063,y:18.25},0).wait(2).to({skewX:4.7167,skewY:-175.2833,y:17.8},0).wait(2).to({skewX:1.9937,skewY:-178.0063,y:18.25},0).wait(2).to({skewX:4.7167,skewY:-175.2833,y:17.8},0).wait(22));

	// handr
	this.instance_1 = new lib.handr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.35,19.05,1,1,4.7167,0,0,5.5,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:17.15,y:20.85},0).wait(2).to({regY:6.4,rotation:1.9937,y:19.85},0).wait(2).to({regY:6.3,rotation:4.7167,y:20.85},0).wait(2).to({regY:6.4,rotation:1.9937,y:19.85},0).wait(2).to({regY:6.3,rotation:4.7167,y:20.85},0).wait(2).to({regY:6.4,rotation:1.9937,y:19.85},0).wait(2).to({regY:6.3,rotation:4.7167,x:15.35,y:19.05},0).wait(22));

	// hat
	this.instance_2 = new lib.snowhat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.95,-28.7,1.5202,1.5202,-10.282);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:4.7167,x:4.95,y:-26.95},0).wait(2).to({rotation:1.9938,x:2.7,y:-27.4},0).wait(2).to({rotation:4.7167,x:4.95,y:-26.95},0).wait(2).to({rotation:1.9938,x:2.7,y:-27.4},0).wait(2).to({rotation:4.7167,x:4.95,y:-26.95},0).wait(2).to({rotation:1.9938,x:2.7,y:-27.4},0).wait(2).to({rotation:-10.282,x:-1.95,y:-28.7},0).wait(22));

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgzgJQA1AoAygo");
	this.shape.setTransform(0.15,-8.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AA1gFQgBALgQAHQgQAHgVgCQgWgBgPgKQgPgIABgMQAAgCABgDIBoAJQAAACAAACg");
	this.shape_1.setTransform(3.5094,-7.5289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBASQgWgBgPgKQgPgIABgMIABgFIBoAJIAAAEQgBALgQAHQgMAGgRAAIgIgBg");
	this.shape_2.setTransform(3.5094,-7.5289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAfgHQgBAJgJAGQgIAHgNgBQgMgBgKgHQgIgGAAgJQAAgCAAgCIA9ADQAAACAAABg");
	this.shape_3.setTransform(2.1625,-7.8187);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAOQgMgBgKgHQgIgGAAgJIAAgEIA9ADIAAADQgBAJgJAGQgHAGgLAAIgDAAg");
	this.shape_4.setTransform(2.1625,-7.8187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape}]},2).wait(22));

	// nose
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF6023").s().p("AgQgQIAuATIgwAOQgVgUAXgNg");
	this.shape_5.setTransform(1.2989,-12.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CF6023").s().p("AgPgQIAsAYIgxAJQgTgWAYgLg");
	this.shape_6.setTransform(4.9679,-12.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CF6023").s().p("AgQgPIAtAUIgwALQgVgTAYgMg");
	this.shape_7.setTransform(3.4528,-12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_5}]},2).wait(22));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAtADQAYgWAbAWAhfAJQAYgWAbAW");
	this.shape_8.setTransform(0.375,-14.3125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AAtAGQAagUAZAYAhfAAQAZgUAaAY");
	this.shape_9.setTransform(4.15,-14.0543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAtAEQAZgVAaAXAhfAFQAYgVAbAX");
	this.shape_10.setTransform(2.575,-14.5569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_8}]},2).wait(22));

	// buttons
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBnQgGgFABgIQgBgIAGgFQAGgGAGAAQAHAAAGAGQAFAFABAIQgBAIgFAFQgGAGgHAAQgGAAgGgGgAgMACQgGgEABgIQgBgHAGgGQAGgFAGAAQAHAAAGAFQAFAGABAHQgBAIgFAEQgGAGgHAAQgGAAgGgGgAgMhMQgGgFABgIQgBgIAGgFQAGgGAGAAQAHAAAGAGQAFAFABAIQgBAIgFAFQgGAGgHAAQgGAAgGgGg");
	this.shape_11.setTransform(1.55,16.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBsQgHgBgGgGQgFgFABgIQABgIAGgFQAGgFAHABQAHAAAFAGQAFAGgBAIQgBAIgGAFQgEAEgGAAIgCAAgAAAAIQgHgBgFgGQgFgFAAgHQABgIAGgFQAGgFAGABQAIAAAFAGQAFAGgBAIQAAAHgGAEQgGAFgGAAIgBAAgAAGhGQgHgBgFgGQgFgGABgHQAAgIAGgFQAFgFAIABQAHAAAFAGQAFAGAAAIQgBAHgGAFQgFAFgHAAIgBAAg");
	this.shape_12.setTransform(2.8689,16.3689);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQBmQgFgFABgIQAAgHAGgGQAFgFAIAAQAGAAAGAGQAFAGAAAHQgBAIgGAGQgFAFgGAAQgIgBgGgGgAAAAIQgHAAgFgGQgFgEAAgIQAAgHAGgGQAGgFAGAAQAIAAAFAGQAFAGAAAHQAAAIgGAEQgFAFgHAAIgBAAgAgJhMQgFgGAAgHQAAgIAGgFQAFgGAHABQAHAAAGAGQAFAGAAAHQAAAIgGAFQgGAFgHAAQgHgBgFgFg");
	this.shape_13.setTransform(2.6977,15.9479);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_11}]},2).wait(22));

	// body
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2E2E2").s().p("AiMFPQg8g5AAhTQAAhQA2g4QgSgkgBgrQABhIAxgzQAQgQASgKQhYDXCpAbQgXAJgTARQgsAnAAA4QAAA4AsAmQArAoA/AAQA+AAAsgoQAUgRALgVQgOAwgnAlQg8A7hVAAQhTAAg8g7gAhbiyQgpgqAAg7QAAg8ApgqIANgMQg4BlA1B7IgKgJg");
	this.shape_14.setTransform(-1.7,13.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhaFQQgsgmAAg4QAAg4AsgnQATgRAXgJQipgbBYjXQg1h7A4hlQAlgeAxAAQA6AAApAqQApAqAAA8QAAA7gpAqIgNALQAPAKAOAOQAyAzAABHQAAAsgTAkQAhAjANAqQAIAcAAAfQAAAdgHAaQgLAVgUARQgsAog/AAQg9AAgsgog");
	this.shape_15.setTransform(3.1213,8.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2E2E2").s().p("AiMFSQg8g5AAhTQAAgVAHgkQAOg2AtgmQgRgmAEgrQAGhHA2gvQARgOATgJQhqDPCmApQgXAHgVAPQgeAXgMAeQgJAbAAAUQAAA4AsAmQArAoA/AAQA+AAAsgoQAUgRALgVQgOAwgnAlQg8A7hVAAQhTAAg8g7gAg8i3QgmgtAFg7QAFg8AsgmIAOgLQhABgArB/IgJgKg");
	this.shape_16.setTransform(-1.7,13.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhkFQQgsgmAAg4QAAgVAJgaQANgeAdgXQAVgPAYgHQingpBqjPQgqh/A/hgQAogbAwAEQA6AFAlAtQAnAtgFA8QgFA7gtAmIgOALQAPALAMAPQAuA3gGBGQgDAtgXAiQAeAlAKArIABAEIAAAAQAEATAAAVQAAAdgIAaQgLAVgUARQgsAog+AAQg+AAgsgog");
	this.shape_17.setTransform(4.0671,8.8492);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2E2E2").s().p("AiHFYQg+g3gEhTQgBgUAFglQAMg2AqgpQgRgkABgrQADhIAzgxQAQgQATgJQhgDUCoAhQgXAIgUAQQgcAYgLAfQgIAbABAUQADA4AtAkQAtAmA/gDQA+gDAqgqQAUgSAKgVQgMAwglAnQg6A9hUAEIgMAAQhMAAg7gzgAhQi1QgngrACg7QACg9AqgnIAOgLQg7BiAwB9IgKgKg");
	this.shape_18.setTransform(-0.9577,13.2384);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhaFUQgtgkgDg4QgBgUAIgbQALgfAcgYQAUgQAYgIQipghBgjUQgwh9A7hiQAmgdAxABQA6ADAnArQApAqgCA9QgDA7grAoIgNALQAPALANAOQAxA1gDBHQgBAsgVAkQAgAiALArIACAEIAAAAQAEATABAVQACAdgGAbQgKAVgUASQgqAqg+ADIgJAAQg4AAgrgjg");
	this.shape_19.setTransform(4.1261,8.4324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).wait(22));

	// arml
	this.instance_3 = new lib.armr();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17.2,8.5,1,0.6283,0,0,180,7.9,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({skewX:4.7155,skewY:184.7167,x:-15.15,y:7.2},0).wait(2).to({regX:8,skewX:1.9916,skewY:181.9937,x:-15.85,y:7.65},0).wait(2).to({regX:7.9,skewX:4.7155,skewY:184.7167,x:-15.15,y:7.2},0).wait(2).to({regX:8,skewX:1.9916,skewY:181.9937,x:-15.85,y:7.65},0).wait(2).to({regX:7.9,skewX:4.7155,skewY:184.7167,x:-15.15,y:7.2},0).wait(2).to({regX:8,skewX:1.9916,skewY:181.9937,x:-15.85,y:7.65},0).wait(2).to({regX:7.9,skewX:0,skewY:180,x:-17.2,y:8.5},0).wait(22));

	// armr
	this.instance_4 = new lib.armr();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.25,8.85,1,0.6283,0,0,0,7.9,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({regX:8,regY:13.9,rotation:4.7155,x:16.2,y:10},0).wait(2).to({regY:14,rotation:1.9916,x:15.7,y:9.05},0).wait(2).to({regY:13.9,rotation:4.7155,x:16.2,y:10},0).wait(2).to({regY:14,rotation:1.9916,x:15.7,y:9.05},0).wait(2).to({regY:13.9,rotation:4.7155,x:16.2,y:10},0).wait(2).to({regY:14,rotation:1.9916,x:15.7,y:9.05},0).wait(2).to({regX:7.9,rotation:0,x:14.25,y:8.85},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-40.8,49.8,93.8);


// stage content:
(lib.neva_hehe = function(mode,startPosition,loop) {
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
	this.instance.setTransform(68,58.9,0.8743,0.8743,0,0,0,-1.9,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.7,66.1,-8.700000000000003,32.10000000000001);
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