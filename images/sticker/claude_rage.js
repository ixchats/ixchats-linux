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


(lib.shellobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#BEB5FE").s().p("AkNDxQiVi6B9h9QAOgPARgMQgIhgBhgtQgkgGAbgrQAcgqAhgWQAiANAkAYQAjAZgSAYQCGAOAZBjQBWATBBAvQBlBOgjBwQgjB5hjBNQh9AyhlAAQiXAAhkhvg");
	this.shape.setTransform(35.1229,35.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shellobj, new cjs.Rectangle(0,0,70.2,70.5), null);


(lib.legsobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF451A").s().p("AgbAxQAAgYATgYQgSADgNAJQgdAQgFgKQAEgfAxgnIBeBGQgqAAgbAUQgRANgJAAQgEAAgCgDg");
	this.shape.setTransform(7.375,5.1806);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legsobj, new cjs.Rectangle(0,0,14.8,10.4), null);


(lib.eyestalkobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF451A").s().p("Agsg3IAngQQADBAAvA/IgnAQQgohAgKg/g");
	this.shape.setTransform(4.5,7.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyestalkobj, new cjs.Rectangle(0,0,9,14.3), null);


(lib.eyeobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF451A").s().p("AhMgcIAFgGQAagZAkAAQAkAAAZAZQAWAXADAeIAAAHIAAAIQgBAOgFAMg");
	this.shape.setTransform(7.7,6.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeobj, new cjs.Rectangle(0,0,15.4,12.1), null);


(lib.clawobj = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF451A").s().p("AgxBpQgsgUgRgtQgRgtAWgtQACgFAKgPIBrBLIgDh6QAUACATAJQAsAVARAuQAQAtgVAsQgVAsgtARQgUAHgTAAQgZAAgZgNg");
	this.shape.setTransform(11.8004,11.7663);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clawobj, new cjs.Rectangle(0,0,23.6,23.6), null);


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
	this.shape.graphics.f("#CF451A").s().p("AiYBpQg5gngFg1IgBgNQAAg8A/grQBAgsBYAAIABAAQBZABA/ArQA/ArAAA8QAAA+g/ArQg/ArhaAAQhYAAhAgrg");
	this.shape.setTransform(21.575,14.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bodyobj, new cjs.Rectangle(0,0,43.2,29.6), null);


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
	this.shape.graphics.f("#CF451A").s().p("AhFAFIATgmQBEAvA0gfIgTAnQgUAMgYAAQgiAAgqgdg");
	this.shape.setTransform(6.975,3.4241);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.armobj, new cjs.Rectangle(0,0,14,6.9), null);


(lib.shell = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AkGhhQgRAMgOAPQh9B9CVC6QCmC7E3h+QBjhNAjh5QAjhwhlhOQhBgvhWgTQg8gOhGABQioAEhZBAQgIhgBhgtQgkgGAbgrQAcgqAhgWQAiANAkAYQAjAZgSAYAitjuQAMgGANgEQA+gWAwAEQACAAACABAD4DOQAAA2hLAmQhMAmhpAAQhqAAhLgmQhLgmAAg2QAAg2BHgdQBHgdBqAAQBpAABQAdQBPAdAAA2gAB9iYQgZhjiGgO");
	this.shape.setTransform(35.1229,35.245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.349)").s().p("Ai1BSQhLgmAAg1QAAg2BHgcQBHgdBqAAQBpAABQAdQBQAcAAA2QAAA1hLAmQhMAnhqAAQhpAAhMgng");
	this.shape_1.setTransform(34.275,56.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.col1 = new lib.shellobj();
	this.col1.name = "col1";
	this.col1.setTransform(35.1,35.2,1,1,0,0,0,35.1,35.2);

	this.timeline.addTween(cjs.Tween.get(this.col1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shell, new cjs.Rectangle(-1,-1,72.2,72.5), null);


(lib.legs = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AgIABQgSADgNAJQgdAQgFgKQAEgfAxgnIBeBGQgqAAgbAUQgaATgGgJQAAgYATgYgAAGgPQgIAIgGAI");
	this.shape.setTransform(7.375,5.1806);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.col0 = new lib.legsobj();
	this.col0.name = "col0";
	this.col0.setTransform(7.4,5.2,1,1,0,0,0,7.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs, new cjs.Rectangle(-1,-1,16.8,12.4), null);


(lib.eyestalk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("Agsg3IAngQQADBAAvA/IgnAQQgphAgJg/g");
	this.shape.setTransform(4.5,7.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.col0 = new lib.eyestalkobj();
	this.col0.name = "col0";
	this.col0.setTransform(4.5,7.2,1,1,0,0,0,4.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyestalk, new cjs.Rectangle(-1,-1,11,16.3), null);


(lib.eye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("ABXgHQAAAEAAADQAAAEAAADQgBAOgGANQgGAPgNAMQgZAagkAAQgkAAgZgaQgZgZAAgjIAAgCQAAgeATgYQADgDADgDQAZgZAkAAQAkAAAZAZQAXAXADAfQAAAEAAADQAAAEAAADABQAiIiThZ");
	this.shape.setTransform(8.725,8.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5AuQgZgZgBgiIAAgDQABgfATgXICTBYQgHAPgMANQgZAZglAAQgjAAgZgZg");
	this.shape_1.setTransform(8.3875,10.2375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.col0 = new lib.eyeobj();
	this.col0.name = "col0";
	this.col0.setTransform(9.7,6,1,1,0,0,0,7.7,6);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-1,-1,19.5,19.4), null);


(lib.claw = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AAyhqQgTgJgUgCIADB6IhrhLQgKAPgCAFQgWAtARAtQARAtAsAUQAsAWAtgQQAtgRAVgsQAVgsgQgtQgRgugsgVg");
	this.shape.setTransform(11.8004,11.7663);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.col0 = new lib.clawobj();
	this.col0.name = "col0";
	this.col0.setTransform(11.8,11.8,1,1,0,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.claw, new cjs.Rectangle(-1,-1,25.6,25.6), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("ADYAAQAAA+g/ArQg/ArhaAAQhYAAhAgrQg5gngFg1QgBgGAAgHQAAg8A/grQBAgsBYAAQABAAAAAAQBZABA/ArQA/ArAAA8g");
	this.shape.setTransform(21.575,14.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.col0 = new lib.bodyobj();
	this.col0.name = "col0";
	this.col0.setTransform(21.6,14.8,1,1,0,0,0,21.6,14.8);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-1,-1,45.2,31.6), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AhFAFQBFAwAzgfIATgnQg0AfhEgv");
	this.shape.setTransform(6.975,3.4241);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.col0 = new lib.armobj();
	this.col0.name = "col0";
	this.col0.setTransform(7,3.4,1,1,0,0,0,7,3.4);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(-1,-1,16,8.9), null);


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

	// steam2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AAngPQAigSgVgdQgQgSgTARQgpgXgMAfQgFAJADARQgkAOAbAZQAAAqAogQIAjAmAAhgMQADgCADgBAAjA3Igfg3AA8A9IgVhM");
	this.shape.setTransform(-35.0022,-9.6276);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAkQgoAQAAgqQgbgZAkgOQgDgRAFgJQAMgfApAXQATgRAQASQAVAdgiASIgGADIAGgDIAVBMIggANgAAjA3Igfg3g");
	this.shape_1.setTransform(-35.0022,-9.6276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},2).wait(2));

	// steam1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AglgPQghgSAUgdQARgSATARQApgXAMAfQAFAJgDARQAgAJgZAcQABAsgngQIgjAmAg5A9IAUhMAghA3IAgg3AgegMQgEgCgDgB");
	this.shape_2.setTransform(15.2911,-19.9276);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5A9IAUhMIAHADIgHgDQghgSAUgdQARgSATARQApgXAMAfQAFAJgDARQAgAJgZAcQABAsgngQIgjAmgAghA3IAgg3g");
	this.shape_3.setTransform(15.2911,-19.9276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},2).wait(2));

	// mouth
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("Ag7g4QARAAAdgQQApgVAYAkQAWAmAGAdAgwArQAkAHArAXQAdAOAKgKQAUgYgKgrAg7ApQAFAAAGACQAyg0BOATAg7ApQgZgCACAbAhRhEQAHAMAPAAQARAsgRA1");
	this.shape_4.setTransform(-2.1796,25.1922);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F39494").s().p("AANAeQgrgXgjgHQAyg0BNAUQALAqgVAYQgEAEgHAAQgKAAgSgIg");
	this.shape_5.setTransform(-0.4472,29.4782);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.349)").s().p("AhFA8QARg2gRgrQARAAAegQQAogVAYAkQAWAmAGAdQhNgUgyA1QgHgCgFAAg");
	this.shape_6.setTransform(-1.2,23.2632);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("ABTAAQgHALgPAAQgRAAgdgPQgpgVg4Al");
	this.shape_7.setTransform(-0.525,19.5044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7}]},2).wait(2));

	// body
	this.instance = new lib.body();
	this.instance.setTransform(-1.25,25.25,1,1,-7.4912,0,0,21.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:0,skewX:7.4912,skewY:-172.5088,x:-1.35},0).wait(2));

	// legs_right
	this.instance_1 = new lib.legs();
	this.instance_1.setTransform(18.55,33.65,1,1,0,-7.4912,172.5088,7.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({rotation:7.4912,skewX:0,skewY:0,x:-21.15},0).wait(2));

	// legs_left
	this.instance_2 = new lib.legs();
	this.instance_2.setTransform(-17.85,38.45,1,1,-7.4912,0,0,7.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:0,skewX:7.4912,skewY:-172.5088,x:15.25},0).wait(2));

	// eye_right
	this.instance_3 = new lib.eye();
	this.instance_3.setTransform(0.95,-5.5,1,1,0,-7.4912,172.5088,8.7,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({rotation:7.4912,skewX:0,skewY:0,x:-3.55},0).wait(2));

	// eye_left
	this.instance_4 = new lib.eye();
	this.instance_4.setTransform(-17.15,-3.55,1,1,-7.4912,0,0,8.7,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({rotation:0,skewX:7.4912,skewY:-172.5088,x:14.55},0).wait(2));

	// stem_right
	this.instance_5 = new lib.eyestalk();
	this.instance_5.setTransform(1,8.9,1,1,0,-7.4912,172.5088,4.4,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({rotation:7.4912,skewX:0,skewY:0,x:-3.6},0).wait(2));

	// stem_left
	this.instance_6 = new lib.eyestalk();
	this.instance_6.setTransform(-14.1,10.45,1,1,-7.4912,0,0,4.4,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({rotation:0,skewX:7.4912,skewY:-172.5088,x:11.5},0).wait(2));

	// claw_right
	this.instance_7 = new lib.claw();
	this.instance_7.setTransform(24.95,1.15,1,1,0,-32.9468,147.0532,11.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({regY:11.6,scaleX:0.9999,scaleY:0.9999,skewX:-174.7204,skewY:5.2796,x:-33.85,y:22.1},0).wait(2));

	// claw_left
	this.instance_8 = new lib.claw();
	this.instance_8.setTransform(-33.7,12.1,1,1,21.7402,0,0,11.6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({rotation:-158.2598,x:28.5,y:33.5},0).wait(2));

	// arm_right
	this.instance_9 = new lib.arm();
	this.instance_9.setTransform(18.45,13.9,1,1,0,-32.9468,147.0532,7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({regX:6.9,scaleX:0.9999,scaleY:0.9999,skewX:-174.7204,skewY:5.2796,x:-20.9,y:16},0).wait(2));

	// arm_left
	this.instance_10 = new lib.arm();
	this.instance_10.setTransform(-25.4,22.95,1,1,21.7402,0,0,6.9,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({rotation:-158.2598,x:20.2,y:22.65},0).wait(2));

	// shell
	this.instance_11 = new lib.shell();
	this.instance_11.setTransform(-3.75,0.05,0.9703,1,-7.4912,0,0,35,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({rotation:0,skewX:7.4912,skewY:-172.5073,x:1.15},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-40,94.4,89.8);


// stage content:
(lib.claude_rage = function(mode,startPosition,loop,reversed) {
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

	// Layer_1
	this.instance = new lib.anim();
	this.instance.setTransform(50,61.05,0.9508,0.9508,0,0,0,-0.1,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(52.8,67.4,37.5,31.19999999999999);
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