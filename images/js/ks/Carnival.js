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


(lib.xring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(249,201,49,0)","#F9C931","#F9C931","rgba(249,201,49,0)"],[0.396,0.494,0.635,0.729],0,0,0,0,0,16.1).s().p("AhxByIAAjjIBCAAIgCBnIAxACIAzANIgEh2IBDAAIAADjg");
	this.shape.setTransform(11.4,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.xring, new cjs.Rectangle(0,0,22.8,22.8), null);


(lib.wheels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ADxBNQgUgDgVgDQgahMAahNIApAAIBeAAIBYAAIAqAAQAaBNgaBMQgVAEgVACQgEABgEAAQgoAEgoABQgGAAgFAAQgpgBgqgFgADxhSIAACfAFPhSIAAClAGnhSIAACfAmnBNQgUgDgVgDQgahMAahNIApAAIBeAAIBYAAIAqAAQAaBNgaBMQgVAEgVACQgEABgEAAQgoAEgoABQgGAAgFAAQgpgBgqgFgAjxhSIAACfAlJhSIAAClAmnhSIAACf");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AFEBTQgpgBgqgFIAAifIAACfIgpgGQgahMAahNIApAAIBeAAIBYAAIAqAAQAaBNgaBMQgVAEgVACIAAifIAACfIgIABQgoAEgoABIAAilIAAClIgLAAgAlUBTQgpgBgqgFIAAifIBeAAIAAClIAAilIBYAAIAqAAQAaBNgaBMQgVAEgVACIAAifIAACfIgIABQgoAEgoABIgLAAgAGnBNgAnQBHQgahMAahNIApAAIAACfIgpgGgAmnhSg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ADWBTQgYgEgYgDQgehRAehSIAwAAIBsAAIBlAAIAxAAQAeBSgeBRQgYAEgZADQgEAAgFABQguAEguAAQgHAAgGAAQgvAAgwgFgAGnhXIAACqAFCBYIAAivADWhXIAACqAmnBTQgYgEgYgDQgehRAehSIAwAAIBsAAIBlAAIAxAAQAeBSgeBRQgYAEgZADQgEAAgFABQguAEguAAQgHAAgGAAQgvAAgwgFIAAiqAk7hXIAACvAjWBTIAAiq");
	this.shape_2.setTransform(-0.4,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AE1BYQgvAAgwgFIAAiqIBsAAIBlAAIAACqIgJABQguAEguAAIAAivIAACvIgNAAgAlIBYQgvAAgwgFIAAiqIAACqIgwgHQgehRAehSIAwAAIBsAAIBlAAIAxAAQAeBSgeBRIgxAHIAAiqIAACqIgJABQguAEguAAIAAivIAACvIgNAAgAGnBTIAAiqIAxAAQAeBSgeBRIgxAHgACmBMQgehRAehSIAwAAIAACqIgwgHgAjWBTgAGnhXgADWhXg");
	this.shape_3.setTransform(-0.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-10.2,99.6,20.6);


(lib.smShad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.251)"],[0,0.698,1],-1,-1.2,0,-1,-1.2,10.6).s().p("AhCBDQgPgPgIgTQgFgPAAgSQAAgiAWgaIAGgGQAHgHAIgGQATgNAZgCIAHAAQAeAAAXARIACABIAMAKQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.smShad, new cjs.Rectangle(0,0,19,19.1), null);


(lib.smBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDA18").s().p("AhCBDQgcgcAAgnQAAgiAWgaIAGgGQAHgHAIgGQATgNAZgCIAHAAQAeAAAXARQAIAEAGAHQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.smBack, new cjs.Rectangle(0,0,19,19.1), null);


(lib.Rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjgjHIG3AVAjVDIQDagLDchF");
	this.shape.setTransform(-19,-54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgikYQCygwFBgCQkNgyjrAHQguACgtADQi2AQiiAzAgYASQCyC3FBAHQnlFbl6l3Qgmgmglgt");
	this.shape_1.setTransform(6,-44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08AAD2").s().p("AmEC0QgmgmgmgtQDcgKDchFQCyC3FBAHQjqCnjQAAQjhAAjEjDgAnaktQCigzC2gQQAtgDAugCQDrgHENAyQlBACiyAwg");
	this.shape_2.setTransform(6,-44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AqzDDQgnjFAnjGALHl0QgvF0AvF1");
	this.shape_3.setTransform(-75.7,-68.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ADYklQGVntIWF+QlAAHi0C3QgvFeAvFgQgtANgsAKQiLAiiIAPQgmAEglADQiTAKiPgLQgCAAgBAAQmLgglxjFQAAAAgBAAQiehViah0QCch1ChhUQH3kMImAogAKPjWQgtgNgtgLQixgqisgNAkkgDQAlAkAAA0QAAA0glAlQgkAlg0AAQg0AAglglQglglAAg0QAAg0AlgkQAlgkA0AAQA0AAAkAkgAkBglQA0AyAABJQAABJg0AzQgzAzhIAAQhJAAgzgzQgzgzAAhJQAAhJAzgyQAzgzBJAAQBIAAAzAzg");
	this.shape_4.setTransform(-61,-82.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#000000"],[0,1],-15,9.7,6.7,-2.8).s().p("AAAB9QgzABglglQgkglgBg0QABgzAkglQAlgkAzAAQA0AAAlAkQAlAlgBAzQABA0glAlQglAkg0AAIAAAAg");
	this.shape_5.setTransform(-99.2,-73.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#3C3C3C","#FFFFFF"],[0,0.459,1],-15.1,-8.7,15.2,8.8).s().p("Ah7B7QgzgyAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIQAABJgzAyQgzA0hJAAQhIAAgzg0gABZBYQAkglAAgzQAAg0gkglQglgkg0AAQgzAAglAkQglAlAAA0QAAAzAlAlQAlAlAzgBQA0ABAlglg");
	this.shape_6.setTransform(-99.1,-73.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#CD0603"],[0,1],0.6,18.3,0,0.8,18.3,30.3).s().p("AieABQCdh0CghWQgoDGAoDFIgFAIQiehViah0g");
	this.shape_7.setTransform(-160.7,-68.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#CD0603"],[0,1],4.7,26.2,0,4.7,26.2,52.5).s().p("AggFzQgwl0Awl1QAsALAtANQgvFeAvFgQgtAMgrALg");
	this.shape_8.setTransform(-1.2,-68.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#000000"],[0,1],20.6,14.5,0,20.6,14.5,236.1).s().p("ABHGuIgDAAQmKgglxjFIAEgIQgojFAojGQH3kMImApQCsAMCxArQgwF1AwF0IABAEQiLAhiIAPQglAFgmACQhIAGhHAAQhKAAhKgGgAlmitQgzAzAABJQAABHAzAzQAzA0BJAAQBJAAAyg0QA0gzAAhHQAAhJg0gzQgygzhJAAIAAAAQhJAAgzAzg");
	this.shape_9.setTransform(-75.6,-68.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#08AAD2").s().p("Ah4CbQixgrisgMQGVntIWF+QlBAHiyC2QgugMgtgLg");
	this.shape_10.setTransform(7.5,-121.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF6600").ss(3,1,1).p("AEllHQlIAHjlCLIgcBsQCKhTDFgFAkdDqIAiBe");
	this.shape_11.setTransform(30.1,-76.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF6600").ss(3,1,1).p("AnvjaQg+AUgWAxQCyg6DMBEQjRgNgQBFQBugNBtAIQCzAMCvBJQkVB8kkgLQAUBEDQgYQjIBPi1gyQAYAwA+AOQjFAIiOhMAsWEPQDrB/FGgPQhmgXgphQQEsBTFKiCQlXAnghhxQHiATHNjPQkkh5kogUQi1gMi2AVQAbhzFZAXQlQhyknBiQAkhSBogh");
	this.shape_12.setTransform(84,-70.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AsSEPIgiheQCOBMDFgIQg+gOgZgwQC1AyDJhPQjQAYgUhEQEjALEWh8QivhJi0gMQhsgIhvANQARhFDQANQjLhEiyA6QAWgxA+gUQjHAFiKBTIAdhsQDkiLFJgHQhnAhgkBSQEnhiFQByQlZgXgbBzQC2gVC0AMQEpAUEjB5QnMDPnigTQAhBxFXgnQlKCCkshTQAoBQBmAXIhAACQkdAAjThyg");
	this.shape_13.setTransform(83.6,-70.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("Am9j+IgdBtQCKhUDHgEQg/AUgWAxQCyg7DLBEQjQgNgQBFQBtgMBtAHQCzAMCwBJQkWB8kjgLQAUBEDPgYQjHBPi1gyQAZAwA9AOQjEAJiOhNIAhBeQiOkbCCjig");
	this.shape_14.setTransform(48.2,-69);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF6600").ss(3,1,1).p("At8EKQBwA8DqAiQDWAfCxgIQhngXgohQQErBTFLiCQlXAnghhxQHiATHNjPQkkh5kogUQi1gMi2AVQAbhzFZAXQlQhyknBiQAkhSBnghQixAEjMArQjeAuhsBCIgPBfQA/gmCggZQCHgWB3gDQg+AUgWAxQCyg6DLBEQjQgOgRBGQBvgNBtAIQCyAMCwBJQkWB8kjgLQAUBEDPgYQjIBPi0gyQAYAwA+AOQhoAFiWgZQidgahEglg");
	this.shape_15.setTransform(91.6,-70.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("ApNgNQAEhyBEh2IgPBgQA/gmCggaQCGgWB4gCQg+AUgWAxQCxg7DLBEQjRgNgQBFQBugMBtAHQCzAMCwBJQkWB8kjgLQAUBEDPgYQjIBPi0gyQAZAwA+AOQhoAFiWgZQidgZhEgmIgCBoQhEiJAFh6g");
	this.shape_16.setTransform(55,-68.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AojFoQjqgihvg8IAChoQBEAlCdAaQCWAZBogFQg+gOgYgwQC0AyDIhPQjPAYgUhEQEjALEVh8QivhJiygMQhtgIhvANQARhGDQAOQjLhEiyA6QAWgxA+gUQh4ADiGAWQigAZg/AmIAPhfQBshCDfguQDLgrCxgEQhnAhgkBSQEnhiFQByQlZgXgbBzQC2gVC1AMQEoAUEjB5QnMDPnigTQAhBxFXgnQlLCCkrhTQAoBQBnAXQgkACglAAQiTAAisgZg");
	this.shape_17.setTransform(91.6,-70.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-140.2,345.5,134.7);


(lib.handobj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAiQgFgIgBgKIgMgwIAWgEIAEAYQACgEAKgIIAtgfIAJAUIgGAHIAFAOIAAAEIAGAPIgEAFIAFAUIgaAQQgOAIgUACQgQgNgEgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handobj, new cjs.Rectangle(-4.9,-5.6,9.9,11.2), null);


(lib.ground2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#054D08","#078E07","#02581F","#26F316"],[0.227,0.616,0.863,1],0.1,49.8,-0.1,-49.8).s().p("EghmAHtIAAvZMBDNAAAIAAPZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ground2, new cjs.Rectangle(-215,-49.3,430.2,98.7), null);


(lib.ground1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AB7mtIBWAAIRGNbIhcAAMglsAAAIhlAAIQctbIBgAAIwXNbAB7mtIRANbAiamtIEVAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#090909").s().p("Ay1GuIQWtbIEVAAIRANbg");
	this.shape_1.setTransform(0.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AS7GuIxBtbIBXAAIRGNbgA0WGuIQctbIBgAAIwXNbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ground1, new cjs.Rectangle(-132.3,-45,264.6,90.1), null);


(lib.explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AU9gCQAACmmNB2QmNB3oxAAQoxAAmOh3QmNh2AAimQAAinGNh3QGOh2IxAAQIxAAGNB2QGNB3AACngARrmoQHVCwAAD5QAAD4nVCwQnUCvqXAAQqWAAnVivQnUiwAAj5QAAj4HUiwQHVivKWAAQKXAAHUCvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AxrGpQnUiwAAj5QAAj3HUixQHVivKWAAQKXAAHUCvQHVCwAAD5QAAD4nVCwQnUCvqXAAQqWAAnVivgAvNkgQmNB3AACnQAACmGNB2QGOB3IxAAQIxAAGNh3QGNh2AAimQAAinmNh3QmNh2oxAAQoxAAmOB2g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Au+EdQmNh2AAinQAAimGNh3QGOh2IwAAQIxAAGOB2QGNB3AACmQAACnmNB2QmOB3oxAAQowAAmOh3g");
	this.shape_2.setTransform(-1.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.explosion, new cjs.Rectangle(-162,-62,324.1,124), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* // Text will be placed in this box
		// Must have instance name: mbox
		
		//You can change  the shape and size of this
		// make it alphe 0 for invisible*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0)").s().p("Au/FeIAAq7Id/AAIAAK7g");
	this.shape.setTransform(96,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,1,192,70), null);


(lib.xatsat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.xring();
	this.instance.parent = this;
	this.instance.setTransform(1,-0.1,1.793,0.277,-26.2,0,0,12,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#02A9D2","#FFFFFF"],[0.565,0.816],-1.8,1,0,-1.8,1,12.8).s().p("Ag8BAQgUgPgKgfIAAgMQgBglAZgbQAbgcAlgBQAdgBAZATIAHAGQAfAaABAkQAAAigbAbQgXAagjABIgGABQgiAAgagYg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.xatsat, new cjs.Rectangle(-19.8,-11.8,39.4,23.7), null);


(lib.thumbsup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAtAKIAFAUIgbAQQgOAIgUACQgQgNgFgJQgEgIgBgKIgMgxIAWgDIAEAZQACgFAKgIIAugfIAJAUIgHAIIAGANIAAAFIAFAOIgDAFIgiARAAsgjQggASgSAOAArgJQgeAMgLAI");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.zcol0 = new lib.handobj();
	this.zcol0.name = "zcol0";
	this.zcol0.parent = this;
	this.zcol0.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.zcol0).wait(1));

}).prototype = getMCSymbolPrototype(lib.thumbsup, new cjs.Rectangle(-5.9,-6.6,11.9,13.2), null);


(lib.Smiley5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAEAAAEACIAEAEQAGAFAAAFQAAAHgGAFQgDADgEACIgFAAQgHAAgFgFgAgqAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAHAAAFAGQAGAFAAAFQAAAHgGAFQgFAFgHAAQgHAAgFgFg");
	this.shape.setTransform(11.2,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAWQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBgBQgCgDgBgEQgCgGAEgGQAEgGAHgCQAHgCAGAFQAHADACAFQABAHgEAGQgDAHgHACIgFAAQgEAAgFgDgAAVAGIgEgCIgBgBQgDgDgBgDQgCgGAFgGQAEgHAHgCQAEgBAEABIAFADQAHADACAGQABAHgEAFQgCAEgEADIgEACIgFAAQgEAAgFgDg");
	this.shape_1.setTransform(10.7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990000").ss(1,1,1).p("AghgFQAjAYAggY");
	this.shape_2.setTransform(11.5,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AAPAUQgFgJABgLQgBgMAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMQAAABAAAAQAAANgHAKQgEAHgGABQgCABgCAAQgJAAgHgJQAAgCgBAAAgwAUQgFgJABgLQgBgMAGgJQAHgKAJAAQAIAAAGAKQAHAJAAAMQAAANgHAKQgGAJgIAAQgJAAgHgJQAAgBAAgB");
	this.shape_3.setTransform(11.2,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAXIgBgCIAAgCQgFgIABgLQgBgMAGgIQAHgLAJAAQAIAAAGALQAGAHABAMIAAABQAAANgHAKQgEAHgGACIgEAAQgJAAgHgJgAgvAXIAAgCIgBAAIAAgCQgFgIABgLQgBgMAGgIQAHgLAJAAQAIAAAGALQAHAIAAAMQAAANgHAKQgGAJgIAAQgJAAgHgJg");
	this.shape_4.setTransform(11.2,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#990000").ss(1,1,1).p("AgsgDQAwADAngaQAFARgKAOQgKAPgSAFQgRAFgQgJQgQgIgFgQg");
	this.shape_5.setTransform(11.9,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AAUAPQgHgHgCgKQgEgMADgLQAFgLAIgDQAIgCAIAJQAJAGAEALQAAABAAABQADANgEAKQgCAIgGADQgCABgCAAQgIADgJgIQgBgBgBgBAgpAfQgHgHgCgLQgEgMAEgJQAEgMAIgCQAIgCAJAIQAIAHAEALQADANgEALQgDALgIACQgJACgJgHQAAgBgBgB");
	this.shape_6.setTransform(10.3,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBAQgQgIgFgRQAwADAngbQAFARgKAPQgKAQgSAFQgHABgGAAQgKAAgKgFgAgqAFIgBgCIgBgBQgHgGgCgLQgEgMADgKQAEgMAJgCQAIgDAIAJQAJAHAEAMQACANgDALQgEAJgIADIgEAAQgGAAgHgFgAASgLIgBgCIgBgBQgGgHgCgLQgEgMADgKQAEgMAIgCQAJgCAIAIQAIAHAEALIABABQACANgEALQgCAIgFADIgEACIgEABQgHAAgHgGg");
	this.shape_7.setTransform(10.7,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).wait(2));

	// Layer 1
	this.Shad = new lib.smShad();
	this.Shad.name = "Shad";
	this.Shad.parent = this;
	this.Shad.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.Shad).wait(4));

	// Layer 2
	this.zBack = new lib.smBack();
	this.zBack.name = "zBack";
	this.zBack.parent = this;
	this.zBack.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.zBack).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,19.1);


(lib.Smiley4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgVAlQgNgHgDgRQgDgPAJgPQAJgQAQgFQAOgGANAIQAOAHADARQADAPgJAQQgJAPgPAFQgPAGgOgIg");
	this.shape.setTransform(3.2,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgVAlQgNgHgDgRQgDgPAJgPQAJgQAQgFQAOgGANAIQAOAHADARQADAPgJAQQgJAPgPAFQgHADgFAAQgJAAgIgFg");
	this.shape_1.setTransform(3.2,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAWggQAPAHAFAOQAEAOgJAOQgKANgSAGQgQAEgOgHQgPgIgFgOQgEgOAKgOQAJgNASgFQAQgFAOAIg");
	this.shape_2.setTransform(3.2,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgVAhQgPgIgFgOQgEgOAKgOQAJgNASgFQAQgFAOAIQAPAHAFAOQAEAOgJAOQgKANgSAGQgHACgFAAQgKAAgIgFg");
	this.shape_3.setTransform(3.2,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAMIgDgDIgBgCQgCgDAAgEQAAgFAGgFQAEgGAFAAQAEAAADACIAEAEQAFAFAAAFQAAAHgFAFQgDADgEACIgEAAQgFAAgEgFg");
	this.shape_4.setTransform(4.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2).to({x:4,y:6},0).wait(2));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#990000").ss(1,1,1).p("AAAASQgNAAgKgKQgKgKAAgPQAjAZAggZQAAAPgKAKQgKAKgOAAg");
	this.shape_5.setTransform(4.9,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AgQATQgFgIABgLQgBgMAGgJQAHgKAIAAQAIAAAGAKQAGAIABAMQAAABAAAAQAAANgHAKQgEAHgGACQgCAAgCAAQgIAAgHgJQAAgCgBgB");
	this.shape_6.setTransform(5.4,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA1QgKgLAAgPQAjAaAggaQAAAPgKALQgKAKgOAAQgNAAgKgKgAgKgHIgBgDIAAgBQgFgIAAgLQAAgNAGgJQAHgKAHAAQAJAAAGAKQAGAIABAMIAAACQgBANgGAKQgFAHgFAAIgFABQgHAAgHgIg");
	this.shape_7.setTransform(4.9,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#990000").ss(1,1,1).p("AAmgPQAAANgLAIQgLAKgQAAQgOAAgLgKQgMgIAAgNQAnAVAkgVg");
	this.shape_8.setTransform(4.5,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(1,1,1).p("AgSARQgFgHAAgKQAAgLAGgHQAIgJAJAAQAJAAAHAJQAGAHACALQAAAAAAAAQgBALgHAJQgFAGgHACQgCAAgCAAQgJAAgIgIQAAgCgBAA");
	this.shape_9.setTransform(5.1,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAuQgMgJAAgNQAnAWAkgWQAAANgLAJQgLAKgQAAQgOAAgLgKgAgLgGIgBgCIgBgBQgFgIABgKQgBgLAHgHQAIgKAIAAQAKAAAGAKQAHAHABAKIAAABQgBAMgHAJQgFAGgGAAIgFABQgIAAgIgHg");
	this.shape_10.setTransform(4.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).wait(2));

	// Layer 1
	this.Shad = new lib.smShad();
	this.Shad.name = "Shad";
	this.Shad.parent = this;
	this.Shad.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.Shad).wait(4));

	// Layer 2
	this.zBack = new lib.smBack();
	this.zBack.name = "zBack";
	this.zBack.parent = this;
	this.zBack.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.zBack).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,0,20.7,24.8);


(lib.Smiley3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgxArQgPAAgLgMQgLgNAAgSQAAgRALgNQALgMAPAAQAPAAALAMQALANAAARQAAASgLANQgLAMgPAAgAAYAfQgLgNAAgSQAAgRALgNQAKgMAQAAQAPAAALAMQALANAAARQAAASgLANQgLAMgPAAQgQAAgKgMg");
	this.shape.setTransform(9.7,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAYAeQgLgMAAgSQAAgRALgMQAKgNAQAAQAPAAALANQALAMAAARQAAASgLAMQgLANgPAAQgQAAgKgNgAhLAeQgLgMAAgSQAAgRALgMQALgNAPAAQAPAAALANQALAMAAARQAAASgLAMQgLANgPAAQgPAAgLgNg");
	this.shape_1.setTransform(9.7,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhLgWQALgKAPAAQAPAAALAKQALAJAAANQAAAOgLAJQgLAKgPAAQgPAAgLgKQgLgJAAgOQAAgNALgJgAAYgWQAKgKAQAAQAPAAALAKQALAJAAANQAAAOgLAJQgLAKgPAAQgQAAgKgKQgLgJAAgOQAAgNALgJg");
	this.shape_2.setTransform(9.7,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AAYAXQgLgJAAgOQAAgMALgKQAKgJAQAAQAPAAALAJQALAKAAAMQAAAOgLAJQgLAJgPABQgQgBgKgJgAhLAXQgLgJAAgOQAAgMALgKQALgJAPAAQAPAAALAJQALAKAAAMQAAAOgLAJQgLAJgPABQgPgBgLgJg");
	this.shape_3.setTransform(9.7,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAEAAAEACIAEAEQAGAFAAAFQAAAHgGAFQgDADgEACIgFAAQgHAAgFgFgAgqAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAHAAAFAGQAGAFAAAFQAAAHgGAFQgFAFgHAAQgHAAgFgFg");
	this.shape_4.setTransform(9.6,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAKIgEgDIAAgBQgCgDAAgDQAAgFAGgEQAFgFAHAAQAEAAAEACIAEADQAGAEAAAFQAAAGgGAEQgDADgEACIgFAAQgHAAgFgFgAgqAKIgEgDIAAgBQgCgDAAgDQAAgFAGgEQAFgFAHAAQAHAAAFAFQAGAEAAAFQAAAGgGAEQgFAFgHAAQgHAAgFgFg");
	this.shape_5.setTransform(9.6,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(2));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#990000").ss(1,1,1).p("AghgRQAjAZAggZQAAAPgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgPg");
	this.shape_6.setTransform(9.8,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1).p("AAPAUQgFgJABgLQgBgMAGgIQAHgLAJAAQAIAAAGALQAGAIABAMQAAAAAAAAQAAANgHAKQgEAHgGABQgCABgCAAQgJAAgHgJQAAgCgBAAAgwAUQgFgJABgLQgBgMAGgIQAHgLAJAAQAIAAAGALQAHAIAAAMQAAANgHAKQgGAJgIAAQgJAAgHgJQAAgBAAgB");
	this.shape_7.setTransform(9.6,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVA1QgKgLAAgPQAjAaAggaQAAAPgKALQgKAKgOAAQgNAAgKgKgAAQgHIgBgDIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMIAAACQAAANgHAKQgEAHgGAAIgEABQgJAAgHgIgAgvgHIAAgCIgBgBIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAHAJAAANQAAANgHAKQgGAIgIAAQgJAAgHgIg");
	this.shape_8.setTransform(9.6,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#990000").ss(1,1,1).p("AgXAHQgKgJAAgMQAjAVAggVQAAAMgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape_9.setTransform(9.8,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(1,1,1).p("AAPARQgFgHABgKQgBgKAGgHQAHgJAJAAQAIAAAGAJQAGAHABAKQAAAAAAAAQAAALgHAJQgEAGgGABQgCABgCAAQgJAAgHgIQAAgCgBAAAgwARQgFgHABgKQgBgKAGgHQAHgJAJAAQAIAAAGAJQAHAHAAAKQAAALgHAJQgGAIgIAAQgJAAgHgIQAAgBAAgB");
	this.shape_10.setTransform(9.6,6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAtQgKgIAAgNQAjAWAggWQAAANgKAIQgKAJgOAAQgNAAgKgJgAAQgGIgBgDIAAgBQgFgHABgJQgBgLAGgIQAHgIAJgBQAIABAGAIQAGAIABAJIAAACQAAALgHAJQgEAGgGAAIgEAAQgJABgHgHgAgvgGIAAgCIgBgBIAAgBQgFgHABgJQgBgLAGgIQAHgIAJgBQAIABAGAIQAHAIAAALQAAALgHAJQgGAHgIgBQgJABgHgHg");
	this.shape_11.setTransform(9.6,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).wait(2));

	// Layer 1
	this.Shad = new lib.smShad();
	this.Shad.name = "Shad";
	this.Shad.parent = this;
	this.Shad.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.Shad).wait(4));

	// Layer 2
	this.zBack = new lib.smBack();
	this.zBack.name = "zBack";
	this.zBack.parent = this;
	this.zBack.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.zBack).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,25.7);


(lib.Smiley2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.thumbsup();
	this.instance.parent = this;
	this.instance.setTransform(4.4,16.1,0.763,0.858,-30,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:9.6},0).wait(2));

	// Layer 6
	this.instance_1 = new lib.thumbsup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,15.1,0.763,0.858,-75,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:12.7,y:15.8},0).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAEAAAEACIAEAEQAGAFAAAFQAAAHgGAFQgDADgEACIgFAAQgHAAgFgFgAgqAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAHAAAFAGQAGAFAAAFQAAAHgGAFQgFAFgHAAQgHAAgFgFg");
	this.shape.setTransform(11.2,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(1,1,1).p("AAAASQgNAAgKgKQgKgKAAgPQAjAZAggZQAAAPgKAKQgKAKgOAAg");
	this.shape_1.setTransform(11.5,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AAPAUQgFgJABgLQgBgMAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMQAAABAAAAQAAANgHAKQgEAHgGABQgCABgCAAQgJAAgHgJQAAgCgBAAAgwAUQgFgJABgLQgBgMAGgJQAHgKAJAAQAIAAAGAKQAHAJAAAMQAAANgHAKQgGAJgIAAQgJAAgHgJQAAgBAAgB");
	this.shape_2.setTransform(11.2,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA1QgKgLAAgPQAjAaAggaQAAAPgKALQgKAKgOAAQgNAAgKgKgAAQgHIgBgDIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMIAAACQAAANgHAKQgEAHgGAAIgEABQgJAAgHgIgAgvgHIAAgCIgBgBIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAHAJAAANQAAANgHAKQgGAIgIAAQgJAAgHgIg");
	this.shape_3.setTransform(11.2,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#990000").ss(1,1,1).p("AAAAVQgSAAgNgMQgOgLAAgSQAuAQAtgQQAAASgOALQgNAMgTAAg");
	this.shape_4.setTransform(11.1,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA2QgOgMAAgSQAuAQAtgQQAAASgOAMQgNAMgSAAQgTAAgNgMgAAQgKIgBgDIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMIAAACQAAANgHAKQgEAHgGABIgEABQgJAAgHgJgAgvgKIAAgCIgBgBIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAHAJAAANQAAANgHAKQgGAJgIAAQgJAAgHgJg");
	this.shape_5.setTransform(11.2,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_5},{t:this.shape_2},{t:this.shape_4}]},2).wait(2));

	// Layer 1
	this.Shad = new lib.smShad();
	this.Shad.name = "Shad";
	this.Shad.parent = this;
	this.Shad.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.Shad).wait(4));

	// Layer 2
	this.zBack = new lib.smBack();
	this.zBack.name = "zBack";
	this.zBack.parent = this;
	this.zBack.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.zBack).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0,25.6,22.7);


(lib.Smiley = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.thumbsup();
	this.instance.parent = this;
	this.instance.setTransform(17.1,0.6,0.763,0.858,-30,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:0,skewX:30,skewY:-150,x:1.3,y:1.2},0).wait(2));

	// Layer 5
	this.instance_1 = new lib.thumbsup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,9,0.763,0.858,-75,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:0,regY:0,rotation:0,skewX:75,skewY:-105,x:20.8,y:9.7},0).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAEAAAEACIAEAEQAGAFAAAFQAAAHgGAFQgDADgEACIgFAAQgHAAgFgFgAgqAMIgEgDIAAgCQgCgDAAgEQAAgFAGgFQAFgGAHAAQAHAAAFAGQAGAFAAAFQAAAHgGAFQgFAFgHAAQgHAAgFgFg");
	this.shape.setTransform(11.2,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(1,1,1).p("AAAASQgNAAgKgKQgKgKAAgPIBDAAQAAAPgKAKQgKAKgOAAg");
	this.shape_1.setTransform(11.5,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AAPAUQgFgJABgLQgBgMAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMQAAABAAAAQAAANgHAKQgEAHgGABQgCABgCAAQgJAAgHgJQAAgCgBAAAgwAUQgFgJABgLQgBgMAGgJQAHgKAJAAQAIAAAGAKQAHAJAAAMQAAANgHAKQgGAJgIAAQgJAAgHgJQAAgBAAgB");
	this.shape_2.setTransform(11.2,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA1QgKgLAAgPIBDAAQAAAPgKALQgKAKgOAAQgNAAgKgKgAAQgHIgBgDIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMIAAACQAAANgHAKQgEAHgGAAIgEABQgJAAgHgIgAgvgHIAAgCIgBgBIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAHAJAAANQAAANgHAKQgGAIgIAAQgJAAgHgIg");
	this.shape_3.setTransform(11.2,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#990000").ss(1,1,1).p("AAAAVQgSAAgNgMQgOgLAAgSQAuAQAtgQQAAASgOALQgNAMgTAAg");
	this.shape_4.setTransform(11.1,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA2QgOgMAAgSQAuAQAtgQQAAASgOAMQgNAMgSAAQgTAAgNgMgAAQgKIgBgDIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAGAIABAMIAAACQAAANgHAKQgEAHgGABIgEABQgJAAgHgJgAgvgKIAAgCIgBgBIAAgBQgFgIABgLQgBgNAGgJQAHgKAJAAQAIAAAGAKQAHAJAAANQAAANgHAKQgGAJgIAAQgJAAgHgJg");
	this.shape_5.setTransform(11.2,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_5},{t:this.shape_2},{t:this.shape_4}]},2).wait(2));

	// Layer 1
	this.Shad = new lib.smShad();
	this.Shad.name = "Shad";
	this.Shad.parent = this;
	this.Shad.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.Shad).wait(4));

	// Layer 2
	this.zBack = new lib.smBack();
	this.zBack.name = "zBack";
	this.zBack.parent = this;
	this.zBack.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.zBack).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-6,31.9,25);


(lib.arc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.explosion();
	this.instance.parent = this;
	this.instance.setTransform(5.3,-59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Al6LqQgSh9AAiNQAAlqB1j/QB2kAClAAQCnAAB2EAQB2D/AAFqQAACNgSB9AJTLqQAQiLAAiXQAAnxizlgQizlgj9AAQj8AAizFgQizFgAAHxQAACXARCL");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AGFLqQASh9AAiNQAAlqh2j/Qh2j/inAAQilAAh2D/Qh1D/AAFqQAACNASB9IjXAAQgRiLAAiYQAAnwCzlgQCzlgD8AAQD9AACzFgQCzFgAAHwQAACYgQCLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arc, new cjs.Rectangle(-156.7,-121.6,324.1,198.2), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Smiley2();
	this.instance.parent = this;
	this.instance.setTransform(-95.8,-23.3,0.668,0.698,0,0,0,11.2,11.1);

	this.instance_1 = new lib.Smiley2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-64,-8.4,0.923,0.946,0,0,0,11.2,11.2);

	this.instance_2 = new lib.Smiley2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-92.7,13.6,1.565,1.624,0,0,0,11.1,11.2);

	this.instance_3 = new lib.Smiley2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.1,-23.3,0.668,0.698,0,0,180,11.2,11.1);

	this.instance_4 = new lib.Smiley2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130.1,-9.1,1.132,1.197,0,0,180,11.1,11.2);

	this.instance_5 = new lib.Smiley2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-126.3,-8,1.437,1.429,0,0,0,11.1,11.2);

	this.instance_6 = new lib.Smiley2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(66.3,-8.4,0.923,0.946,0,0,180,11.2,11.2);

	this.instance_7 = new lib.Smiley2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(92.1,10.7,1.565,1.624,0,0,180,11.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{y:10.7}},{t:this.instance_6,p:{y:-8.4}},{t:this.instance_5,p:{y:-8}},{t:this.instance_4,p:{y:-9.1}},{t:this.instance_3,p:{y:-23.3}},{t:this.instance_2,p:{y:13.6}},{t:this.instance_1,p:{y:-8.4}},{t:this.instance,p:{regY:11.1,y:-23.3}}]}).to({state:[{t:this.instance_7,p:{y:19.7}},{t:this.instance_6,p:{y:-9.9}},{t:this.instance_5,p:{y:1}},{t:this.instance_4,p:{y:-0.1}},{t:this.instance_3,p:{y:-24.8}},{t:this.instance_2,p:{y:22.6}},{t:this.instance_1,p:{y:-10.4}},{t:this.instance,p:{regY:11.2,y:-25.2}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.8,-31,289.4,63.1);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Smiley2();
	this.instance.parent = this;
	this.instance.setTransform(-95.8,-23.3,0.668,0.698,0,0,0,11.2,11.1);

	this.instance_1 = new lib.Smiley2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-64,-8.4,0.923,0.946,0,0,0,11.2,11.2);

	this.instance_2 = new lib.Smiley2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-92.7,13.6,1.565,1.624,0,0,0,11.1,11.2);

	this.instance_3 = new lib.Smiley2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.1,-23.3,0.668,0.698,0,0,180,11.2,11.1);

	this.instance_4 = new lib.Smiley2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130.1,-9.1,1.132,1.197,0,0,180,11.1,11.2);

	this.instance_5 = new lib.Smiley2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-126.3,-8,1.437,1.429,0,0,0,11.1,11.2);

	this.instance_6 = new lib.Smiley2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(66.3,-8.4,0.923,0.946,0,0,180,11.2,11.2);

	this.instance_7 = new lib.Smiley2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(92.1,10.7,1.565,1.624,0,0,180,11.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.8,-31,289.4,63.1);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Smiley5();
	this.instance.parent = this;
	this.instance.setTransform(159.1,-28.8,1.105,1.105,0,0,180,9.5,9.5);

	this.instance_1 = new lib.Smiley5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.9,-39.9,0.658,0.658,0,0,180,9.5,9.4);

	this.instance_2 = new lib.Smiley5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(156.1,-49.1,0.658,0.658,0,0,180,9.5,9.4);

	this.instance_3 = new lib.Smiley5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-161.3,-28.8,1.105,1.105,0,0,0,9.5,9.5);

	this.instance_4 = new lib.Smiley5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-184.1,-39.9,0.658,0.658,0,0,0,9.5,9.4);

	this.instance_5 = new lib.Smiley5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-158.3,-49.1,0.658,0.658,0,0,0,9.5,9.4);

	this.instance_6 = new lib.Smiley();
	this.instance_6.parent = this;
	this.instance_6.setTransform(141.5,8.7,3.116,3.162,0,0,180,9.5,9.5);

	this.instance_7 = new lib.Smiley();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-141.5,8.7,3.116,3.162,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{y:8.7}},{t:this.instance_6,p:{y:8.7}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{regY:9.5,y:-28.8}}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{regY:9.6,y:-28.7}},{t:this.instance_7,p:{y:-15.8}},{t:this.instance_6,p:{y:-15.8}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.7,-55.3,395.5,94.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Smiley();
	this.instance.parent = this;
	this.instance.setTransform(141.5,8.7,3.116,3.162,0,0,180,9.5,9.5);

	this.instance_1 = new lib.Smiley();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-141.5,8.7,3.116,3.162,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.7,-40.4,395.5,79.1);


(lib.cartop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Smiley3();
	this.instance.parent = this;
	this.instance.setTransform(4.6,1.9,2.882,2.84,0,0,0,11.7,12.5);

	this.instance_1 = new lib.Smiley4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.9,2.7,2.683,2.567,0,0,180,8.9,12.1);

	this.instance_2 = new lib.Smiley4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,2.7,2.683,2.567,0,0,0,9,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(8));

	// Layer 5
	this.instance_3 = new lib.xatsat();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.5,-60.4,3.302,3.532,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-78.1},4).to({y:-60.4},3).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AhhEaQjAgIiRgoQi0gxAAhHQAAhHC0gxQBLgVBYgMQgxgmAAgvQAAhCBfgvQBfguCFAAQCGAABfAuQBfAvAABCQAAAwgyAmQBVAMBJAUQC0AxAABHQAABHi0AxQiVAqjIAHQgqABgsAAQgyAAgvgCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("ACLEDQA7gkAAg0QAAg0g7gkQg8glhTAAQhUAAg8AlQg8AkAAA0QAAA0A8AkQAXAPAcAJQjAgIiRgoQizgygBhHQABhGCzgxQBLgVBYgMQgxgmABgvQAAhCBegvQBfguCFAAQCGAABeAuQBfAvABBCQgBAwgxAmQBVAMBJAUQCzAxABBGQgBBHizAyQiWApjHAHQAdgJAYgPg");
	this.shape_1.setTransform(0,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhcB1QgbgJgYgOQg7glAAg0QAAgyA7glQA8gkBTAAQBUAAA8AkQA7AlAAAzQAAAzg7AlQgYAPgdAJQgqABgsAAQgxAAgwgCg");
	this.shape_2.setTransform(-0.5,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AhhEaQjAgIiRgoQi0gxAAhHQAAhHC0gxQBLgVBYgMQgxgmAAgvQAAhCBfgvQBfguCFAAQCGAABfAuQBfAvAABCQAAAwgyAmQBVAMBJAUQC0AxAABHQAABHi0AxQiVAqjIAGQgqACgsAAQgyAAgvgCg");
	this.shape_3.setTransform(0,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{y:16.5}},{t:this.shape_1,p:{y:-0.1}},{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:4.2}},{t:this.shape_2,p:{y:20.8}},{t:this.shape_3}]},2).to({state:[{t:this.shape_2,p:{y:16.5}},{t:this.shape_1,p:{y:-0.1}},{t:this.shape}]},2).to({state:[{t:this.shape_1,p:{y:4.2}},{t:this.shape_2,p:{y:20.8}},{t:this.shape_3}]},2).wait(2));

	// Layer 2
	this.instance_4 = new lib.arc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-70,0.851,1,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8));

	// Layer 4
	this.instance_5 = new lib.wheels();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3.9,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.3,-191.6,275.8,232.2);


(lib.all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_136 = function() {
		KissDone(this);
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(136).call(this.frame_136).wait(1));

	// Layer 2
	this.mbox = new lib.box();
	this.mbox.name = "mbox";
	this.mbox.parent = this;
	this.mbox.setTransform(9,-73,1.042,0.897,0,0,0,96,53.3);
	this.mbox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mbox).wait(46).to({_off:false},0).to({_off:true},31).wait(60));

	// Floatop
	this.instance = new lib.cartop();
	this.instance.parent = this;
	this.instance.setTransform(1.1,136.8,0.053,0.057,0,0,0,-1.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:0.13,scaleY:0.14,x:1.2,y:7},8).to({regX:0.1,regY:-0.1,scaleX:1.16,scaleY:1.13,x:5.6,y:58.6},38).wait(31).to({regX:0,regY:0,y:59.7},0).to({scaleX:1.58,scaleY:1.54,x:0.7,y:406.1},7).wait(53));

	// OuterCheer1
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,194.1);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,66.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:66.3},8).wait(76).to({_off:false,y:194.1},4).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},8).wait(76).to({startPosition:1},0).to({_off:true,y:194.1,startPosition:0},4).wait(49));

	// OuterCheer2
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,170.1);

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,42.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,y:42.3},8).wait(76).to({_off:false,y:170.1},4).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},8).wait(76).to({startPosition:1},0).to({_off:true,y:170.1,startPosition:0},4).wait(49));

	// Ground1
	this.instance_5 = new lib.ground1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2,193.3,1,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:65.5},8).wait(76).to({y:193.3},4).wait(49));

	// Ground2
	this.instance_6 = new lib.ground2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.5,190.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:62.6},8).wait(76).to({y:190.4},4).wait(49));

	// Layer 3
	this.Rocket = new lib.Rocket();
	this.Rocket.name = "Rocket";
	this.Rocket.parent = this;
	this.Rocket.setTransform(-265.3,21,0.264,0.276,0,150,149.9,-4.4,-72.6);
	this.Rocket._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Rocket).wait(46).to({_off:false},0).to({x:313.9,y:-211.8},17).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,125.9,430.2,122.2);


(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* // The Main Kiss animation goes in here.
		// The green box is temporary, used to scale the animation.
		// You cn make the green box any width and height you need*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// Layer 2
	this.instance = new lib.all();
	this.instance.parent = this;
	this.instance.setTransform(200.3,378.5,1,1,0,0,0,3.5,187.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,317.2,430.2,122.2);


// stage content:
(lib.Carnival = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{f1:0});

	// timeline functions:
	this.frame_0 = function() {
		mystage = this;
		mystage.TextCol = 0x000000; // <- Set text color here
		
		if(!mystage.doneInit)
		{
		
			mystage.LocalInit = function()
			{
			  // debug stuff - dont remove
			  if(HugKissDebug)
			  {
				mystage.Args = {WW:640, HH:480};
				mystage.Args.Message = "The message will go here#yt"
				mystage.Args.Vol = 100;
				//DebugGo(mystage);	
			  }
			  
			  // custom code
			}
			/*
		
			function Tick(e) // empty function if no custom code
			{
		
			}
			*/
		
			mystage.LocalGo = function() // empty function if no custom code
			{
			  //mystageInfo.RoundAvs = true; // uncomment if you want circular Avatars
			  
		
			}
		
			KissInit(mystage);
			
			// If hug has NO sound all this can be deleted:
		
			if(mystage.Args == undefined || mystage.Args.Vol > 0)
			{
				mystage.SoundLoaded = function(event) {  
					mystage.SoundsLoading = false; // start timeline
					mystage.visible = true;
					}
				
				mystage.visible = false;
				mystage.SoundsLoading = true; // stop updating (timeline)
				RegisterSounds(["Engine1wav.mp3"], mystage.SoundLoaded);
			}
		
		
		}
		
		
		/* import flash.display.MovieClip;
		sWidth = 640; // width of this design
		sHeight = 480; // height of this design
		include "kiss.as"
		
		var TextCol = 0xFFFFFF; // <- Set text color here
		var TextCol2 = 0xFFFFFF; // <- Set text border color (if used)
		var TextType = 0; // Set to 4 for outlined text
		
		////////// TEST ////////////
		Args = {WW:640, HH:480};
		Args.Message = "The message will go here"
		Go(Args);
		/////// END TEST ////////////
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Dots
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgyEglfIAKAAEAx7AlgIAKAA");
	this.shape.setTransform(320.5,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Animation
	this.AnimMc = new lib.Anim();
	this.AnimMc.name = "AnimMc";
	this.AnimMc.parent = this;
	this.AnimMc.setTransform(159.5,167.6,1.597,1.597,0,0,0,99.4,103.8);

	this.timeline.addTween(cjs.Tween.get(this.AnimMc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.1,239,687.2,704.5);
// library properties:
lib.properties = {
	id: 'A46A0417742A6E499707C8B711C081BC',
	width: 640,
	height: 480,
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
an.compositions['A46A0417742A6E499707C8B711C081BC'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;