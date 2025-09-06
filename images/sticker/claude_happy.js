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


(lib.pupil2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAfgaIg9AbIAuAa");
	this.shape.setTransform(3.075,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pupil2, new cjs.Rectangle(-1,-1,8.2,7.4), null);


(lib.pupil = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgdAeQgNgMAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMAMQgNANgSAAQgRAAgMgNg");
	this.shape.setTransform(4.3,4.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pupil, new cjs.Rectangle(0,0,8.6,8.7), null);


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
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("Aheg1QBfAhBhgWQATAZgpAnQgyAxhHgbQg5gZgBguQgBgdAKADg");
	this.shape.setTransform(10.3828,5.4153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.349)").s().p("AgtAsQg5gZgBguQgBgdAKADQBfAhBhgWQATAZgpAnQghAggpAAQgWAAgZgKg");
	this.shape_1.setTransform(10.3828,5.4153);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AhFgmQBGAXBHgQQANATgeAcQgkAkg0gUQgpgSgBgiQAAgVAGADg");
	this.shape_2.setTransform(10.3827,5.4574);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.349)").s().p("AghAgQgpgSgBgiQAAgVAGADQBGAXBHgQQANATgeAcQgXAXgfAAQgPAAgTgHg");
	this.shape_3.setTransform(10.3827,5.4574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.8,12.8);


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
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("ABXgHQAAAEAAADQAAAEAAADABXgHQAAAEAAADQAAAEAAADQgDAggXAWQgZAagkAAQgkAAgZgaQgZgZAAgjIAAgCQAAgiAZgaQAZgZAkAAQAkAAAZAZQAXAXADAfg");
	this.shape.setTransform(8.725,8.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9A9QgZgZAAgjIAAgCQAAgiAZgaQAZgZAkAAQAkAAAZAZQAYAXACAfIAAAHIAAAHQgCAggYAWQgZAagkAAQgkAAgZgag");
	this.shape_1.setTransform(8.7,8.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-1,-1,19.5,19.4), null);


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

	// mouth
	this.instance = new lib.mouth();
	this.instance.setTransform(-1.8,31.45,1,1,0,0,0,10.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:5.5,rotation:-2.9695,x:-0.85,y:31.85},4).to({regY:5.4,rotation:0,x:-1.8,y:31.45},4).wait(1));

	// body
	this.instance_1 = new lib.body();
	this.instance_1.setTransform(-1.75,28.05,1,1,4.4545,0,0,21.5,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.4847,x:-1.05,y:28.4},4).to({rotation:4.4545,x:-1.75,y:28.05},4).wait(1));

	// legs_right
	this.instance_2 = new lib.legs();
	this.instance_2.setTransform(15.7,40.4,1,1,0,4.4545,-175.5455,7.3,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:7.2,regY:5.3,skewX:11.4452,skewY:-168.5548,x:16.4,y:40.3},4).to({regX:7.3,regY:5.2,skewX:4.4545,skewY:-175.5455,x:15.7,y:40.4},4).wait(1));

	// legs_left
	this.instance_3 = new lib.legs();
	this.instance_3.setTransform(-20.85,37.5,1,1,4.4545,0,0,7.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-5.4603,x:-18.6,y:39.75},4).to({rotation:4.4545,x:-20.85,y:37.5},4).wait(1));

	// pupil_right
	this.instance_4 = new lib.pupil2();
	this.instance_4.setTransform(11.4,-0.85,1,1,0,0,0,3.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-2.9695,x:10.6,y:-1.1},4).to({rotation:0,x:11.4,y:-0.85},4).wait(1));

	// pupil_left
	this.instance_5 = new lib.pupil();
	this.instance_5.setTransform(-9.15,-2.75,1,1,4.4545,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:4.2,regY:4.2,rotation:1.4847,x:-10.1,y:-2.1},4).to({regX:4.3,regY:4.3,rotation:4.4545,x:-9.15,y:-2.75},4).wait(1));

	// eye_right
	this.instance_6 = new lib.eye();
	this.instance_6.setTransform(11,-1.4,1,1,0,4.4545,-175.5455,8.7,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:1.4847,skewY:-178.5153,x:10.1,y:-1.6},4).to({skewX:4.4545,skewY:-175.5455,x:11,y:-1.4},4).wait(1));

	// eye_left
	this.instance_7 = new lib.eye();
	this.instance_7.setTransform(-9.25,-2.85,1,1,4.4545,0,0,8.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:1.4847,x:-10.1,y:-2},4).to({rotation:4.4545,x:-9.25,y:-2.85},4).wait(1));

	// stem_right
	this.instance_8 = new lib.eyestalk();
	this.instance_8.setTransform(7.95,12.8,1,1,0,4.4545,-175.5455,4.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:1.4847,skewY:-178.5153,x:7.8,y:12.65},4).to({skewX:4.4545,skewY:-175.5455,x:7.95,y:12.8},4).wait(1));

	// stem_left
	this.instance_9 = new lib.eyestalk();
	this.instance_9.setTransform(-8.95,11.5,1,1,4.4545,0,0,4.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:1.4847,x:-9.1,y:12.2},4).to({rotation:4.4545,x:-8.95,y:11.5},4).wait(1));

	// claw_right
	this.instance_10 = new lib.claw();
	this.instance_10.setTransform(33.35,32.05,1,1,175.5455,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:11.7,rotation:179.8138,x:34.2,y:34.8},4).to({regX:11.8,rotation:175.5455,x:33.35,y:32.05},4).wait(1));

	// claw_left
	this.instance_11 = new lib.claw();
	this.instance_11.setTransform(-33.05,8.15,1,1,19.6816,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:11.9,rotation:-13.5138,x:-36.7,y:21.45},4).to({regY:11.8,rotation:19.6816,x:-33.05,y:8.15},4).wait(1));

	// arm_right
	this.instance_12 = new lib.arm();
	this.instance_12.setTransform(20.55,25.9,1,1,175.5455,0,0,6.9,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:3.4,rotation:179.8138,x:21.85,y:27.8},4).to({regY:3.5,rotation:175.5455,x:20.55,y:25.9},4).wait(1));

	// arm_left
	this.instance_13 = new lib.arm();
	this.instance_13.setTransform(-24.5,18.8,1,1,19.6816,0,0,6.9,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-13.5138,x:-23.7,y:25.6},4).to({rotation:19.6816,x:-24.5,y:18.8},4).wait(1));

	// shell
	this.instance_14 = new lib.shell();
	this.instance_14.setTransform(2,3.05,1,1,4.4545,0,0,35.1,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:1.4847,x:1.45,y:3.25},4).to({rotation:4.4545,x:2,y:3.05},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-35.6,98.8,83.2);


// stage content:
(lib.claude_happy = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(53.4,71.6,41.199999999999996,28.400000000000006);
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