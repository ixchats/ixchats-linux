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


(lib.vial = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AgHhJIgOgCQgHgMAIgJIBBAFQAIAMgJAJIgQgBAAehBIgCgFIAAgBAAehBIABgFAgsAXQANgHAaAQQAYgSAMACQANACAFAGIgWgsIADgtAgsAXIAgguIADgtIABgFAgJhEIACgFIAAAAIAjACAAxAYIAcA5QhNAmhMgyIAggu");
	this.shape.setTransform(7.65,9.7374);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhMAMIAhgtQANgHAaAQQAXgSAMACQANACAFAGIAcA4QgiARghAAQgqAAgsgdg");
	this.shape_1.setTransform(7.65,15.4022);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.749)").s().p("AguA3IAgguIADgtIABgEIABAAIAAAAIgOgCQgHgMAIgKIBBAGQAIAMgJAJIgQgBIgjgCIAjACIAAABIACAEIgDAtIAWAtQgFgGgNgCQgMgCgYARQgagPgNAGgAgLgkIACgEgAAcghIgCgEIADAAIgBAEgAAaglg");
	this.shape_2.setTransform(7.875,6.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vial, new cjs.Rectangle(-1,-1,17.3,21.5), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABhgWIg6AiAhggCIBCAZ");
	this.shape.setTransform(-3.175,-4.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// hairtop
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai8gMQAdhZBYgjQAvgTAjAdQBngIAtA9QA0BIgkBDIAEAKQANACAKgSQATAogcAWQgqAkgegiQgggjgBgQQgDgQgRAAQgSgBgVgMQgHgHgHgKQgRgZgVgGQgZgIgdAQQgMAGgMALQASAQgcAXQgcAXgTAUQgbAFgUAkQgMhFAdhXg");
	this.shape_1.setTransform(-0.3561,-10.3353);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(24));

	// eyelashes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.2,1,1).p("AAiAEQAHgZAYAAQAZgBAKAXQAIAAAFgEAghAMQgLgYgYAFQgYAEgFAZQgIABgHgD");
	this.shape_2.setTransform(-2.775,-0.4295);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(24));

	// pupils
	this.instance = new lib.pupils();
	this.instance.setTransform(-3.95,1.4,1,1,-5.9742,0,0,8.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:0.8},0).wait(10).to({y:1.4},0).wait(12));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgYAJQAeACATgT");
	this.shape_3.setTransform(-0.1,11.3091);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(24));

	// nose
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6CCC4").s().p("AgSAAIAGgEIAZgEIAGAEIgSAMg");
	this.shape_4.setTransform(-2.025,6.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(24));

	// eyes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFFFF").s().p("AhVAfQgKgIgBgNQgBgMAIgKQAIgKANgBQANgBAKAIQAJAIACAMQABANgIAKQgIAKgNABIgDAAQgLAAgJgHgAAvASQgKgJgBgMQgCgNAIgJQAIgKANgCQANgBAKAIQAKAIABANQABAMgIAKQgIAKgNABIgEAAQgKAAgIgGg");
	this.shape_5.setTransform(-2.7563,1.1437);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(24));

	// Layer_3
	this.instance_1 = new lib.eyeshadow();
	this.instance_1.setTransform(-3.3,-1.55,0.903,0.6472,-5.9731,0,0,11.6,4.8);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF2E7").s().p("AgKCoQg7gRgqhIQhJiUB6haIBqgLQBzA0gYCfQgUBag+AeQgVAKgUAAQgMAAgKgDg");
	this.shape_6.setTransform(-2.7877,-0.9547);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(24));

	// neck
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CCC4").s().p("AgnAEQAFgLACgOQABgNgCgPIBDAAQgCAPABANQABAOAHALIgpAug");
	this.shape_7.setTransform(-0.4,19.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(24));

	// hairbottom
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlUCMQANA5BEgbQALhPA0guQAYgWAigOQgDgHAAgEQAEgjgXgLIgGgDQgTgMgIgZQgSg4AUhEIBVAAQBMg3ANg8ICOBaIA7gKIAFAOQAfBPgVBCQgKAcgXAMQgYALAEAjIAAAOQAdANAWAUQA1AtAKBQQBEAbANg5QAFB5lWBDQldhDAFh5g");
	this.shape_8.setTransform(-0.6619,17.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-24.7,68.1,75.2);


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
	this.shape.graphics.f().s("#333333").ss(0.7,1,1).p("AAoATQAEACACgHIgkgwIgrAHQgDAXgJAOQAFAJASgQQAOAiAQgCIgGgUQAYAXACgNQALAFABgLQgFgCgHgL");
	this.shape.setTransform(18.925,43.5586);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF2E7").s().p("AgWADQgSAQgFgJQAJgOADgXIArgHIAkAwQgCAHgEgCQgFgCgHgLQAHALAFACQgBALgLgFQgCANgYgXIAGAUIgCAAQgPAAgNggg");
	this.shape_1.setTransform(18.925,43.5586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(24));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AhkAVQgHAHgJAFQhFAmgvBvIHRAAQgvhvhFgmQgIgFgHgGABXhwQgYBhAnAlAhShgIgIghQgBgCgBgDAhWhyQACAJACAJQARBTgjAiIBlBTIBlhSABHi1IhHBKIhFhG");
	this.shape_2.setTransform(-1.175,33.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6CCC4").s().p("AhEgZIgCgDIACgBIABAAQAbgDAEgLIBKAFQAEAGAbADIADAAIhIBJg");
	this.shape_3.setTransform(-1.25,18.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjoBQQAvhtBFgmQAJgFAHgHIBlBRIBlhQQAHAGAIAFQBFAmAvBtg");
	this.shape_4.setTransform(-1.175,43.7875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#810817").s().p("AhlA8QAjgjgQhSIgFgSIgEgPIgBgFIgHgWQgFgWAggCIADACIBEBHIBHhKIADABQAfACgFAWQgIAYgFAUQgYBgAoAmIhmBSg");
	this.shape_5.setTransform(-1.1375,29.7625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(24));

	// hand
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AgZgHQgBgFgBgEQAFgKAIAIQAJAhArgUQAMgEAEAQQADAPADAJIgoAKIgEgSQgPADgIgEQgGgCgDgDQAAgBgBgBAgtgSQgPgWACAeQABAdAyADAgtgSQgBgDAAgEQgBgRAJADQAEATAJANQACAMAGAKAgtgSQAHAmAVgF");
	this.shape_6.setTransform(-29.307,11.4451);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CCC4").s().p("AgYgHQgCgeAPAWQAHAmAUgFIABACQADADAGACQgxgDgBgdg");
	this.shape_7.setTransform(-32.707,11.1346);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF2E7").s().p("AAKAXQgOADgJgEQgGgCgDgDIgBgCQgGgKgCgMQACAMAGAKQgVAFgHgmIgBgHQgBgRAJADQAEATAJANIgCgJQAFgKAIAIQAJAhArgUQAMgEAEAQIAGAYIgoAKg");
	this.shape_8.setTransform(-28.705,11.4451);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(1,1,1).p("AgWgLQAAgFAAgFQAGgJAHAKQADAiAugNQAMgBABAQQABAQABAJIgjAGIgHgVQgOAAgIgFQgFgDgDgEQAAgBgBgBAgogZQAAgEAAgEQACgQAJAFQABASAGAPQAAAMAEALAgogZQABAmAVgBAgogZQgLgYgDAeQgEAcAxAM");
	this.shape_9.setTransform(-29.9868,8.8419);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6CCC4").s().p("AgVgLQADgeALAYQABAmAUgBIABACQADAEAFADQgwgMAEgcg");
	this.shape_10.setTransform(-33.2618,8.0167);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF2E7").s().p("AAGAaQgOAAgIgFQgGgDgCgEIgBgCQgEgLgBgMIAAgKQAHgJAHAKQADAiAtgNQANgBABAQIACAZIgjAGgAgvgZIAAgIQACgQAIAFQACASAFAPQABAMAEALIgCAAQgUAAAAglgAgZAMIAAAAg");
	this.shape_11.setTransform(-29.25,8.8419);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("AgZgHQgBgFgBgEQAFgKAIAIQAJAhArgUQAMgEAEAQQADAPADAJIgoAKIgEgSQgPADgIgEAgtgSQgBgDAAgEQgBgRAJADQAEATAJANQACAMAGAKAgtgSQgPgWACAeQABAdAyADQgGgCgDgDQAAgBgBgBAgtgSQAHAmAVgF");
	this.shape_12.setTransform(-29.307,11.4451);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF2E7").s().p("AAKAXQgOADgJgEQgGgCgDgDIgBgCQgGgKgCgMIgCgJQAFgKAIAIQAJAhArgUQAMgEAEAQIAGAYIgoAKgAgzgSIgBgHQgBgRAJADQAEATAJANQACAMAGAKIgFAAQgRAAgGghg");
	this.shape_13.setTransform(-28.705,11.4451);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_13},{t:this.shape_7},{t:this.shape_12}]},10).wait(12));

	// vial
	this.instance = new lib.vial();
	this.instance.setTransform(-30,2.15,1,1,0,0,0,7.7,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:6.435,x:-29.4,y:0.25},0).to({y:-16.05},3).to({rotation:366.435},5).to({rotation:360,x:-30,y:2.15},2).wait(12));

	// armleft
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(1,1,1).p("ABmAaQiuBDgdiLIAqgBQAIBUBbg9");
	this.shape_14.setTransform(-17.425,18.6083);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#810817").s().p("AhlguIAqgBQAIBUBbg9QAlACAZAwQg4AWgqAAQhVAAgUheg");
	this.shape_15.setTransform(-17.425,18.6083);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(1,1,1).p("ABfAwQiPAsguiVIAqAFQAVBbBYgz");
	this.shape_16.setTransform(-19.15,17.4653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#810817").s().p("Aheg5IAqAFQAVBbBYgzQAWAHAPA1QggAKgbAAQhdAAgkhzg");
	this.shape_17.setTransform(-19.15,17.4653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},10).wait(12));

	// armleft
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#333333").ss(1,1,1).p("AhLB7IApAJABMh+QgLgFgMAAQgTgBgLAEQgGACgGAJ");
	this.shape_18.setTransform(-14.525,27.9659);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#810817").s().p("AgggjQAGgIAGgCQAMgFARABQANABAKAEQgMAHgLAJIAAA/IgHAPQADgUglhBg");
	this.shape_19.setTransform(-10.15,19.7159);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(1,1,1).p("ABMh+QgLgFgMAAQgTgBgLAEQgGACgGAJAhLB7IApAJ");
	this.shape_20.setTransform(-14.525,27.9659);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_19},{t:this.shape_20}]},12).wait(12));

	// armright
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(1,1,1).p("AhLh+QALgFAMAAQATgBALAEQAWAHAGBJIAVA9QAsAyAFA8IgpAJQgNgmgUgYQgLgPgGgaIglhM");
	this.shape_21.setTransform(12.175,27.9659);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#810817").s().p("AACBGQgLgPgGgaIglhMIAAhAQgLgJgMgGQALgFAMAAQATgBALAEQAWAHAGBJIAVA9QAsAyAFA8IgpAJQgNgmgUgYg");
	this.shape_22.setTransform(12.175,27.9659);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(24));

	// head
	this.instance_1 = new lib.head();
	this.instance_1.setTransform(-1.15,-5.8,1,1,0,0,0,-0.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-29.7,73.6,82.5);


// stage content:
(lib.viki_vial = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(61.6,51.05,0.9683,0.9683,0,0,0,-0.1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(74.7,64.5,18.39999999999999,29.5);
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