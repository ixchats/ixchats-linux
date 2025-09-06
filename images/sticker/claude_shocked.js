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


(lib.Symbol = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAQBeQAAgMAOAAQAMAAAAALQAAAGgEAEQgEADgFAAQgNAAAAgMgAgrBJQAAgNANAAQANAAAAALQAAAHgEADQgEAEgGAAQgMAAAAgMgAAYA5IAAgFQADgLAAgSQAAgtgHguIgCgMQAAgEADAAQADAAAFADIAJAFQAEABABAEQABAGAAAdQAAAWgFAjIgHAnQgBAEgCAAQgFAAAAgHgAgiAkIAAgFQACgLAAgSQAAgugIgtIgBgMQAAgEADAAQAEAAADACIAKAFQAEABABAEQABAGAAAeQAAAWgFAjIgHAmQgBAEgDAAQgDAAAAgGg");
	this.shape.setTransform(-0.15,-1.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("ABCjBQgOBtBhAiQhFBdA6A9QhWAVgQBFQglhdiTgWQBLhrgthrQB3BRBBiLg");
	this.shape_1.setTransform(-1.05,-2.5125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0173E").s().p("AiUBPQBLhrgthrQB3BRBBiLQgOBtBhAiQhFBdA6A9QhWAVgQBFQglhdiTgWg");
	this.shape_2.setTransform(-1.05,-2.5125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-16.9,-22.9,31.799999999999997,40.8), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("Ag4gEQAzASA+gS");
	this.shape.setTransform(0.35,26.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AhNgsQBHATAfgiQAggiAlAkQA1A4gkAyQgQAVgcgLQgmgQgmAFQgkAFgfAQQgmAWgJgoQgGgnALgfQAQgjAZAKg");
	this.shape_1.setTransform(0.2681,26.0251);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.349)").s().p("Ah7AzQgGgnALgfQAQgjAZAKQBHATAfgiQAggiAlAkQA1A4gkAyQgQAVgcgLQgmgQgmAFQgkAFgfAQQgNAIgKAAQgSAAgGgag");
	this.shape_2.setTransform(0.2681,26.0251);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(51,51,51,0.647)").ss(1.5,1,1).p("AhpAcQAPgiAZAJQBHAUAfgiQAggiAlAk");
	this.shape_3.setTransform(-0.725,24.2743);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_3}]},2).wait(6));

	// body
	this.instance = new lib.body();
	this.instance.setTransform(0.05,28.15,1,1,0,0,0,21.6,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:21.5,rotation:-6.9676,x:-0.75,y:24.3},0).wait(16));

	// legs_right
	this.instance_1 = new lib.legs();
	this.instance_1.setTransform(18.3,39.05,1,1,0,0,180,7.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({skewX:-6.9676,skewY:173.0324,x:18.75,y:32.85},0).wait(16));

	// legs_left
	this.instance_2 = new lib.legs();
	this.instance_2.setTransform(-18.35,39.05,1,1,0,0,0,7.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({rotation:-6.9676,x:-17.6,y:37.3},0).wait(16));

	// pupil_right
	this.instance_3 = new lib.pupil();
	this.instance_3.setTransform(10.2,2.9,1,1,0,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({regX:4.4,regY:4.2,scaleX:0.4598,scaleY:0.4598,rotation:-6.9675,x:6.3,y:-5},0).wait(2).to({regX:4.7,regY:4,scaleX:0.7833,scaleY:0.7833,x:6.45,y:-5.05},0).wait(2).to({regX:4.4,regY:4.2,scaleX:0.4598,scaleY:0.4598,x:6.3,y:-5},0).wait(2).to({regX:4.7,regY:4,scaleX:0.7833,scaleY:0.7833,x:6.45,y:-5.05},0).wait(2).to({regX:4.4,regY:4.2,scaleX:0.4598,scaleY:0.4598,x:6.3,y:-5},0).wait(2).to({regX:4.7,regY:4,scaleX:0.7833,scaleY:0.7833,x:6.45,y:-5.05},0).wait(6));

	// pupil_left
	this.instance_4 = new lib.pupil();
	this.instance_4.setTransform(-9.8,2.9,1,1,0,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({regX:4.2,scaleX:0.4773,scaleY:0.4773,rotation:-6.9671,x:-13.6,y:-2.55},0).wait(2).to({regY:4.2,scaleX:0.7955,scaleY:0.7955,rotation:-6.9663,x:-13.55,y:-2.6},0).wait(2).to({regY:4.3,scaleX:0.4773,scaleY:0.4773,rotation:-6.9671,x:-13.6,y:-2.55},0).wait(2).to({regY:4.2,scaleX:0.7955,scaleY:0.7955,rotation:-6.9663,x:-13.55,y:-2.6},0).wait(2).to({regY:4.3,scaleX:0.4773,scaleY:0.4773,rotation:-6.9671,x:-13.6,y:-2.55},0).wait(2).to({regY:4.2,scaleX:0.7955,scaleY:0.7955,rotation:-6.9663,x:-13.55,y:-2.6},0).wait(6));

	// eye_right
	this.instance_5 = new lib.eye();
	this.instance_5.setTransform(10.4,2.85,1,1,0,0,180,8.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({skewX:-6.9676,skewY:173.0324,x:6.45,y:-5.05},0).wait(16));

	// eye_left
	this.instance_6 = new lib.eye();
	this.instance_6.setTransform(-9.85,2.85,1,1,0,0,0,8.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({rotation:-6.9676,x:-13.55,y:-2.6},0).wait(16));

	// stem_right
	this.instance_7 = new lib.eyestalk();
	this.instance_7.setTransform(8.5,17.15,1,1,0,0,180,4.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({skewX:-6.9676,skewY:173.0324,x:6.35,y:9.3},0).wait(16));

	// stem_left
	this.instance_8 = new lib.eyestalk();
	this.instance_8.setTransform(-8.55,17.15,1,1,0,0,0,4.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({regX:4.4,rotation:-6.9676,x:-10.65,y:11.4},0).wait(16));

	// claw_right
	this.instance_9 = new lib.claw();
	this.instance_9.setTransform(33.75,28,1,1,180,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({regY:11.7,rotation:165.591,x:31.15,y:17.4},0).wait(2).to({rotation:170.7839,y:19.6},0).wait(2).to({rotation:165.591,y:17.4},0).wait(2).to({rotation:170.7839,y:19.6},0).wait(2).to({rotation:165.591,y:17.4},0).wait(2).to({rotation:170.7839,y:19.6},0).wait(6));

	// claw_left
	this.instance_10 = new lib.claw();
	this.instance_10.setTransform(-33.75,28,1,1,0,180,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({regY:11.7,skewX:180.9888,skewY:0.9888,x:-33.2,y:25.7},0).wait(2).to({skewX:173.7883,skewY:-6.2117,x:-33.1,y:27.4},0).wait(2).to({skewX:180.9888,skewY:0.9888,x:-33.2,y:25.7},0).wait(2).to({skewX:173.7883,skewY:-6.2117,x:-33.1,y:27.4},0).wait(2).to({skewX:180.9888,skewY:0.9888,x:-33.2,y:25.7},0).wait(2).to({skewX:173.7883,skewY:-6.2117,x:-33.1,y:27.4},0).wait(6));

	// arm_right
	this.instance_11 = new lib.arm();
	this.instance_11.setTransform(21.4,20.95,1,1,180,0,0,7,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({regX:6.9,regY:3.3,rotation:165.591,x:17.55,y:13.6},0).wait(2).to({regX:6.8,rotation:170.7839,x:18,y:14.6},0).wait(2).to({regX:6.9,rotation:165.591,x:17.55,y:13.6},0).wait(2).to({regX:6.8,rotation:170.7839,x:18,y:14.6},0).wait(2).to({regX:6.9,rotation:165.591,x:17.55,y:13.6},0).wait(2).to({regX:6.8,rotation:170.7839,x:18,y:14.6},0).wait(6));

	// arm_left
	this.instance_12 = new lib.arm();
	this.instance_12.setTransform(-22,20.95,1,1,0,180,0,7,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({regX:6.9,skewX:180.9888,skewY:0.9888,x:-21.45,y:18.75},0).wait(2).to({skewX:173.7883,skewY:-6.2117,x:-22.35,y:19.05},0).wait(2).to({skewX:180.9888,skewY:0.9888,x:-21.45,y:18.75},0).wait(2).to({skewX:173.7883,skewY:-6.2117,x:-22.35,y:19.05},0).wait(2).to({skewX:180.9888,skewY:0.9888,x:-21.45,y:18.75},0).wait(2).to({skewX:173.7883,skewY:-6.2117,x:-22.35,y:19.05},0).wait(6));

	// !!
	this.instance_13 = new lib.Symbol();
	this.instance_13.setTransform(23.15,-7,1.0503,1.0503,0,0,0,0.3,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).wait(2).to({scaleX:0.8178,scaleY:0.8178,x:23.2},0).wait(2).to({scaleX:1.0503,scaleY:1.0503,x:23.15},0).wait(2).to({scaleX:0.8178,scaleY:0.8178,x:23.2},0).wait(2).to({scaleX:1.0503,scaleY:1.0503,x:23.15},0).wait(2).to({scaleX:0.8178,scaleY:0.8178,x:23.2},0).to({_off:true},1).wait(5));

	// shell
	this.instance_14 = new lib.shell();
	this.instance_14.setTransform(1.75,2.8,1,1,0,0,0,35.1,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({rotation:-6.9676,x:-2.05,y:-1.05},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-41.1,93.5,86.1);


// stage content:
(lib.claude_shocked = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(56.1,73.9,37.99999999999999,24.299999999999997);
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