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
	this.shape.graphics.f("#7B0000").s().p("AA5AOQgHgGAAgIQAAgHAHgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgIAAgFgGgAhUAOQgFgGAAgIQAAgHAFgGQAHgGAIAAQAHAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgHAAQgIAAgHgGg");
	this.shape.setTransform(9,1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pupils, new cjs.Rectangle(0,0,18,4), null);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AB9AAQAAAOgNAJQgNAKgTAAQgTAAgNgKQgNgJAAgOQAAgNANgKQANgJATAAQATAAANAJQANAKAAANgAgOAAQAAAOgQAJQgQAKgXAAQgXAAgQgKQgQgJAAgOQAAgNAQgKQAQgJAXAAQAXAAAQAJQAQAKAAANg");
	this.shape.setTransform(12.45,3.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwAXQgNgJAAgOQAAgNANgKQANgJATAAQATAAAMAJQAOAKAAANQAAAOgOAJQgMAKgTAAQgTAAgNgKgAhrAXQgQgJgBgOQABgNAQgKQAPgJAXAAQAWAAAQAJQARAKgBANQABAOgRAJQgQAKgWAAQgXAAgPgKg");
	this.shape_1.setTransform(12.45,3.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(-1,-1,26.9,8.7), null);


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

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmZGNQg7AAAAhmIAApNQAAhmA7AAIMzAAQA7AAAABmIAAJNQAABmg7AAg");
	mask.setTransform(-1.7,-8.467);

	// hatball
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AAeAAQAAACAAACQgBAKgHAHQgJAJgNAAQgMAAgJgJQgHgHgBgKQAAgCAAgCQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMg");
	this.shape.setTransform(-0.5,-37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9B9B9").s().p("AgUAVQgIgHAAgKIgBgEQAAgMAJgJQAJgIALAAQANAAAIAIQAJAJAAAMIAAAEQgBAKgIAHQgIAJgNAAQgLAAgJgJg");
	this.shape_1.setTransform(-0.5,-37.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(36));

	// hat
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AB/AdQgBgvgqgSQhNghghgdIgRAAQgHAmgtAaQgdAQAEAgAB/AdQADADABABQATAkgcAdQh4g/h3BAQgdgaAMgsQAGgIAIgHQAigbBZACQBSgBAqApg");
	this.shape_2.setTransform(3.4838,-24.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B9B9B9").s().p("AiGgNQAGgJAIgGQAigcBZACQBSgBAqAqIAEAEQATAjgcAcQh4g+h3A/QgdgaAMgqg");
	this.shape_3.setTransform(3.4838,-20.5317);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAXQhZgCgiAcQgEghAdgQQAtgZAHgmIARAAQAhAdBNAgQAqASABAwQgqgqhSABg");
	this.shape_4.setTransform(3.7754,-28.35);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(36));

	// mouth
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgpADQAvgKAkAK");
	this.shape_5.setTransform(9.4,10.3848);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(36));

	// pupils
	this.instance = new lib.pupils();
	this.instance.setTransform(8.3,-7.6,1,1,0,0,0,9,1.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleY:0.7121,y:-7.55},5).wait(27));

	// eyes
	this.instance_1 = new lib.eyes();
	this.instance_1.setTransform(5.2,-7.4,1,1,0,0,0,12.5,3.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleY:0.7121},5).wait(27));

	// darkshadow
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.447)").s().p("AApAiQgRgOAAgUQAAgTARgOQAQgOAYAAQAYAAARAOQARAOAAATQAAAUgRAOQgRAOgYAAQgYAAgQgOgAh1AiQgVgOAAgUQAAgTAVgOQAUgOAeAAQAeAAAWAOQAUAOAAATQAAAUgUAOQgWAOgeAAQgeAAgUgOg");
	this.shape_6.setTransform(4.575,-7.6);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(36));

	// noseshine
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.647)").s().p("AgUANQgJgFAAgIQAAgGAJgGQAJgGALAAQANAAAJAGQAIAGAAAGQAAAIgIAFQgJAGgNAAQgLAAgJgGg");
	this.shape_7.setTransform(12.175,0.925);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36));

	// nose
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsAfQgSgNgBgSQABgRASgNQATgNAZAAQAaAAATANQASANAAARQAAASgSANQgTANgaAAQgZAAgTgNg");
	this.shape_8.setTransform(10.4,1.9);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(36));

	// head
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AAAjQQhTgBgWA0QhoD4BKBBQA+A1BIAAQBLAAA+g1QBKhBhoj4QgWg0hUABg");
	this.shape_9.setTransform(3.375,-3.101);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#886139").s().p("AiHCcQhKhBBoj4QAWg0BTABQBUgBAWA0QBoD4hKBBQg+A1hLAAQhIAAg+g1g");
	this.shape_10.setTransform(3.375,-3.101);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(36));

	// antlers
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ABjBLQA3gKANghQgvgfgBgPQAAgCAAgCQABgUAbANIAsAVQASAEgBgQQgBgBAAgBQgBgHAAgHIAXAxIATgPIAUA0QgBAAgCAAQgcAFghgPQgqAwg2AEgAg3BAQg2gOgKgjQAlgUAKgNQADgEAAgEQAFgagfAMIguARQgTADAEgQQAFgWgDgXQgEgVgUAQIgVAnQgLAPgIgLQgJgWACgaQgTgMgPAYQgMAcAHAhIAAAAQAIAkAlAKQAcAHAigMQAlA0A2AIg");
	this.shape_11.setTransform(-0.2506,-34.1278);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#613E1D").s().p("ABjBLQA3gKANghQgvgfgBgPIAAgEQABgUAbANIAsAVQASAEgBgQIgBgCIgBgOIAXAxIATgPIAUA0IgDAAQgcAFghgPQgqAwg2AEgAidAXQgiAMgcgHQglgKgIgkIAAAAQgHghAMgcQAPgYATAMQgCAaAJAWQAIALALgPIAVgnQAUgQAEAVQADAXgFAWQgEAQATgDIAugRQAfgMgFAaQAAAEgDAEQgKANglAUQAKAjA2AOIgLATQg2gIglg0g");
	this.shape_12.setTransform(-0.2506,-34.1278);

	var maskedShapeInstanceList = [this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(36));

	// scarf
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ABkguQAnCmgpAZQgZAOgfgFQAUhIgChTQgSBcgbAuQgmgGgRgbQAkhHAUg9QhmAFglgkQgEgEgDgEQgTgeAVgvQB6BfCIhqQAUA/gTAYQgDAFgFAEQgJAIgOAFQgqAQgqAC");
	this.shape_13.setTransform(2.6491,23.6047);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAqCaQAUhIgChTQgSBcgbAuQgmgGgRgbQAkhHAUg9QAqgCAqgQQAnCmgpAZQgTALgXAAIgOgCgAh7g7IgHgIQgTgeAVgvQB6BfCIhqQAUA/gTAYIgIAJQgJAIgOAFQgqAQgqACIgZABQhSAAgggggAAQgcIAAAAg");
	this.shape_14.setTransform(2.6491,23.6047);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(36));

	// arms
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AByiLQA8ATAaBAQAYA9gGBrQAAAMgBAMQgFAWgegCQgdgBADgZQACgMABgMQAIhgggg8AhEibQg+AHgkA7QglA4gMBpQgCAMgBAMQAAAXAdADQAeAEACgYQAAgNAAgMQALhfAqg2");
	this.shape_15.setTransform(0.4431,26.5798);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#886139").s().p("AC2CcQgdgBADgZIADgYQAIhgggg8IgVhZQA8ATAaBAQAYA9gGBrIgBAYQgFAUgaAAIgEAAgAi9B6QgdgDAAgXIADgYQAMhpAlg4QAkg7A+gHIgkBTQgqA2gLBfIAAAZQgCAVgWAAIgIgBg");
	this.shape_16.setTransform(0.4431,26.5798);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(36));

	// body_shade
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A28360").s().p("Ag9BsQgZgsAAhAIABgYQAEgwAUgkQAagtAjAAQAkAAAZAtQAVAkAEAwIABAYQAABAgaAsQgZAugkAAQgjAAgagug");
	this.shape_17.setTransform(0.25,20.525);

	var maskedShapeInstanceList = [this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(36));

	// body
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ACqAAQAABNgyA2QgxA3hGAAQhGAAgyg3Qgyg2AAhNQAAgwAVgoQALgXASgUQAyg2BGAAQBGAAAxA2QASAUALAXQAVAoAAAwg");
	this.shape_18.setTransform(0.1,26.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#886139").s().p("Ah3CDQgxg2AAhNQgBgwAVgoQALgXASgUQAyg2BGAAQBGAAAxA2QASAUALAXQAUAoAAAwQAABNgxA2QgxA3hGAAQhGAAgyg3g");
	this.shape_19.setTransform(0.1,26.975);

	var maskedShapeInstanceList = [this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(36));

	// ears
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AD4g1QhkAbgzBJAD4g1QiHgKgXBgQACAIAFAGAD4g1QgPBFhRAgQgoAPgPgQAj3g2QBjAbA0BKAj3g2QAOBFBSAhQAoAOAPgPAj3g2QCGgJAXBgQgCAIgEAG");
	this.shape_20.setTransform(1,-16.142);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A28360").s().p("ABgAvQA0hKBkgbQgPBFhSAhQgTAHgNAAQgPAAgIgIgAiWAvQhSgggPhFQBjAbA1BJQgIAJgPAAQgNAAgTgIg");
	this.shape_21.setTransform(1,-16.0996);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#886139").s().p("ABaAlQAXhgCHAKQhkAbg0BJQgEgGgCgIgAj3gyQCHgJAXBgQgDAIgDAGQg1hKhjgbg");
	this.shape_22.setTransform(1,-16.5424);

	var maskedShapeInstanceList = [this.shape_20,this.shape_21,this.shape_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-44.7,55.6,76);


// stage content:
(lib.knack_d = function(mode,startPosition,loop,reversed) {
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
			mystage.font = 'Chau Philomene One'; // Google API font
			mystage.color = '#ff0000'; // Text color
			mystage.shad1 = '#333333'; // Main shadow color
			mystage.shad2 = '#333333'; // Alt shadow color
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
	this.instance.setTransform(60.3,60.4,0.9333,0.9333,0,0,0,-1.6,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(66.5,69.7,37.5,37.89999999999999);
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