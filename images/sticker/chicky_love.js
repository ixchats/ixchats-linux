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
	this.shape.graphics.f().s("rgba(172,172,172,0.447)").ss(1,1,1).p("AAChnQg7hDhIA+QgrAkAUBOQATBPCkBFQAjgPAYgaQBDhAADhZQADhbhFgSQhFgTgXBBg");
	this.shape.setTransform(15.9496,15.4101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,239,255,0.647)").s().p("AAABOIgNghIAfgKIAQAfQgIAMgZAAIgBAAgAgeANQgJgiAUgqQAjgdAPAdQgYAhAAAoQgJAHgLAAQgIAAgJgEg");
	this.shape_1.setTransform(6.196,12.6135);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(254,204,254,0.647)").s().p("AiYAGQgUhOArgkQBIg+A7BDQAXhBBFATQBFASgDBbQgDBZhDBAQgYAagjAPQikhFgThPgAhuARIANAhQAbABAIgNIgQgfgAh1hbQgTAqAIAjQAWAIAQgLQABgpAXghQgHgOgNAAQgNAAgSAOg");
	this.shape_2.setTransform(15.9496,15.4101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(-1,-1,33.9,32.8), null);


(lib.headobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FEE832").s().p("AjFDWIgYgTIgWgWQhGhJAAhkQAAhxBchRQBchQCBAAQCCAABbBQQBdBRAABxQAABkhGBJIgXAWIgFAEQhaBMh+AAQhxAAhUg9g");
	this.shape.setTransform(31.35,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headobj, new cjs.Rectangle(0,0,62.7,55), null);


(lib.bodyobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FEE832").s().p("AAADbQhVAAg9g6Qg8g5AAhSIAAgrQAAhSA8g5QA9g6BVAAIAAAAQBWAAA9A6QA8A5AABSIAAArQAABSg8A5Qg9A6hWAAg");
	this.shape.setTransform(20.725,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bodyobj, new cjs.Rectangle(0,0,41.5,43.8), null);


(lib.armobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FEE832").s().p("AhQBnQgSgZAIgdQAHgeA9gbIhChUQAFglBXAVQBYAUABBjQABBJhfAaQgZAHgRAAQgaAAgLgOg");
	this.shape.setTransform(9.3521,11.6957);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armobj, new cjs.Rectangle(0,0,18.7,23.4), null);


(lib.arm2obj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FEE832").s().p("AgHB9QgpgQAehCIg+hRQg8hhBTAEQA5AJAuBrIA9AkIgLBhQglAOgeAAQgUAAgQgHg");
	this.shape.setTransform(10.6413,13.1661);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm2obj, new cjs.Rectangle(0,0,21.3,26.4), null);


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

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.349)").ss(1,1,1).p("AjGDWQgMgJgLgKQgMgLgKgKQhGhKAAhkQAAhxBchRQBchQCBAAQCCAABcBQQBcBRAABxQAABkhGBKQgLAKgLALQgDACgDADQhaBLh+AAQhxAAhVg9g");
	this.shape.setTransform(31.35,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.647)").s().p("Ah+A2QgzgWgBggQABgfAzgXQA0gWBKAAQBJAAA0AWQA2AXAAAfQAAAgg2AWQg0AXhJAAQhKAAg0gXg");
	this.shape_1.setTransform(32,12.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.118)").s().p("AjJgKIgXgTIgPgOQBfA8CJAAQCHAAA4ghIA4giIgWAVIgFAFQhaBLh9AAQhyAAhVg9g");
	this.shape_2.setTransform(31.6625,49.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_3
	this.col0 = new lib.headobj();
	this.col0.name = "col0";
	this.col0.setTransform(31.4,27.5,1,1,0,0,0,31.4,27.5);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-1,-1,64.7,57), null);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj+DgIAAnAIH+AAIAAHAg");
	mask.setTransform(21.4,14.2);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.349)").ss(1,1,1).p("AAAjaQBWAAA9A6QA8A5AABSIAAArQAABSg8A5Qg9A6hWAAQhVAAg9g6Qg8g5AAhSIAAgrQAAhSA8g5QA9g6BVAAg");
	this.shape.setTransform(20.725,21.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// overlay
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.118)").s().p("AjOB/IAAgNIAAgtQAAhQA8g6QA9g5BVAAIAAAAQBWAAA9A5QA8A6AABQIAAAtIAAANQjfgti+Atg");
	this.shape_1.setTransform(20.725,12.725);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// body
	this.col0 = new lib.bodyobj();
	this.col0.name = "col0";
	this.col0.setTransform(20.7,21.9,1,1,0,0,0,20.7,21.9);

	var maskedShapeInstanceList = [this.col0];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-1,-1,43.5,37.7), null);


(lib.arm2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.349)").ss(1,1,1).p("AgSAqIg+hQQg8hhBTAEQA5AJAuBqQASAjgHAvAgSAqQgjBIArAOQArANA/gYIALhhIg9gkAADBGIgVgc");
	this.shape.setTransform(5.6913,-3.5196);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.col0 = new lib.arm2obj();
	this.col0.name = "col0";
	this.col0.setTransform(5.75,-3.55,1,1,0,0,0,10.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm2, new cjs.Rectangle(-5.9,-17.7,23.299999999999997,28.5), null);


(lib.arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.349)").ss(1,1,1).p("AgWgIIhChUQAFglBXAVQBYAUABBjQABBJhfAaQg9ARgSgYQgSgZAIgdQAHgeA9gbgAALAjIghgr");
	this.shape.setTransform(8.0021,0.0457);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.col0 = new lib.armobj();
	this.col0.name = "col0";
	this.col0.setTransform(7.95,0.05,1,1,0,0,0,9.3,11.7);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(-2.3,-12.6,20.7,25.299999999999997), null);


(lib.anim = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(14.4,0.65,0.4828,0.4828,0,0,0,16,15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regX:16.1,regY:15.3,scaleX:0.8566,scaleY:0.8566,x:31.9,y:-10.4},6).wait(1));

	// arms
	this.instance_1 = new lib.arm();
	this.instance_1.setTransform(-7.95,25.15,1,1,0,0,0,8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:7.9,scaleX:0.9118,rotation:5.2407,x:-7.9,y:24.25},0).wait(2).to({regX:8,scaleX:1,rotation:0,x:-7.95,y:25.15},0).wait(9));

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgbAEQAjAUAUgi");
	this.shape.setTransform(8.1,2.7636);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AgcAAQAhAXAYgg");
	this.shape_1.setTransform(7.95,3.5723);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AgOgjQAHAkAVAQQAHASgVABQgRgOADg5g");
	this.shape_2.setTransform(8.9362,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.247)").s().p("AgOgjQAHAkAVAQQAHARgVACQgRgOADg5g");
	this.shape_3.setTransform(8.9362,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(7));

	// beak
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#834D00").ss(1,1,1).p("ABBgQQAHAagNAYQgOAXgbAHQgaAIgYgOQgYgOgIgbQgHgaAOgYQAOgXAbgIQAagHAYAOQAYAOAHAbg");
	this.shape_4.setTransform(7.9394,2.2144);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E98C09").s().p("AggA6QgYgOgIgbQgHgaAOgYQAOgXAbgIQAagHAYAOQAYAOAHAbQAHAagNAYQgOAXgbAHQgKADgIAAQgRAAgPgJg");
	this.shape_5.setTransform(7.9394,2.2144);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#834D00").ss(1,1,1).p("ABCgKQAFAbgQAWQgQAWgcAFQgaAFgXgQQgWgQgFgbQgFgbAQgXQAQgWAbgFQAbgFAXAQQAWAQAFAcg");
	this.shape_6.setTransform(7.8104,2.8601);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E98C09").s().p("AgmA3QgWgQgFgbQgFgbAQgXQAQgWAbgFQAbgFAXAQQAWAQAFAcQAFAbgQAWQgQAWgcAFIgLABQgUAAgSgMg");
	this.shape_7.setTransform(7.8104,2.8601);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(9));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABFgaIBtgJAixAkIBtgm");
	this.shape_8.setTransform(5.475,-6.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("ABHgTIBuACAi0AUIBxgb");
	this.shape_9.setTransform(6.1,-5.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_8}]},2).wait(9));

	// head
	this.instance_2 = new lib.head();
	this.instance_2.setTransform(-0.6,-12.35,1,1.102,-14.9986,0,0,31.3,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({regX:31.2,rotation:-9.7579,x:0.55},0).wait(2).to({regX:31.3,rotation:-14.9986,x:-0.6},0).wait(9));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(0.3,23.7,0.6532,0.8603,0,0,0,20.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13));

	// armr
	this.instance_4 = new lib.arm2();
	this.instance_4.setTransform(19.65,26.15,0.9341,0.9341,0,0,180,8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({regX:7.9,scaleX:0.8726,scaleY:0.8796,skewX:5.2395,skewY:185.2395,x:15.85,y:26.25},0).wait(2).to({regX:8,scaleX:0.9341,scaleY:0.9341,skewX:0,skewY:180,x:19.65,y:26.15},0).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-50.1,85.1,93);


// stage content:
(lib.chicky_love = function(mode,startPosition,loop,reversed) {
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
			mystage.color = '#E98C09'; // Text color
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
	this.instance = new lib.anim();
	this.instance.setTransform(53.05,65.7,0.8775,0.8775,0,0,0,-0.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,72.7,18,31.599999999999994);
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