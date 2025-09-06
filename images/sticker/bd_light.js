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


(lib.sprite52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(242,115,218,0.298)").s().p("AleAIQCqgvCxACQDDADCgAqQisAeiwAAQivAAizgeg");
	this.shape.setTransform(27.65,-62.0311);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(242,182,218,0.298)").s().p("ACuDMQgngJgcgbQgegbACgcQAEg1gigLQgfgKgSAeQgPAagfgQQgegPAAgXQAAg7gLgMQgbgchXB6QhXB8hFgoQgmgWgfhLQgYg6hmBkQghAhgcgpIgXgvQgFhnABgbQAFg3DEgdQH7hJHSBnQBmAbADBXIACBmQgFAagXAaQgXAcgbAIQhIAXgYhwQgNg7gagYQgYgWgcALQgcALgXAlQgYApgJA5QgJA2gkAVQgUAMgZAAQgNAAgPgEg");
	this.shape_1.setTransform(28.9673,-44.1018);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B6DA").s().p("ACuDMQgngJgcgbQgegbACgcQAEg1gigLQgfgKgSAeQgPAagfgQQgegPAAgXQAAg7gLgMQgbgchXB6QhXB8hFgoQgmgWgfhLQgYg6hmBkQghAhgcgpIgXgvQgFhnABgbQAFg3DEgdQH7hJHSBnQBmAbADBXIACBmQgFAagXAaQgXAcgbAIQhIAXgYhwQgNg7gagYQgYgWgcALQgcALgXAlQgYApgJA5QgJA2gkAVQgUAMgZAAQgNAAgPgEg");
	this.shape_2.setTransform(28.9673,-49.1018);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#63371C").s().p("AhHEgQkEgSj0hHQgtgMACgcIgLjZIgJitIAWAvQAdApAhghQBlhlAZA7QAfBLAmAWQBFAoBXh8QBXh7AbAcQALAMAAA8QAAAXAeAPQAfAQAPgaQARgeAgAKQAhALgDA1QgCAcAeAbQAcAbAmAJQArAKAegSQAkgVAJg2QAKg5AYgpQAWgmAcgLQAdgLAXAWQAbAZANA7QAYBwBHgXQAcgIAXgcQAXgaAFgaQAACwgUCvIgIBaQgMAYgzAJQimAfiwAAQiIAAiNgSg");
	this.shape_3.setTransform(29.2,-22.1083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite52, new cjs.Rectangle(-35.1,-69.8,128.2,78.3), null);


(lib.sprite48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(242,182,218,0.498)").s().p("AGjEqQgOgNADhIQAGiNgzgYQgUgKgSAQQgTARgGAgQgOBVggAdQgkAigQh4QgQh2g7AXQgVAIgOAXQgNAXAJAQQAIAPABATQABASgGAHQgRASgghWQghhagvAIQgnAHgyBMQgsBChFAAQhEABgXg6QgfhPgSgOQgjgZg1BLQg0BLgggTQgWgNgCgjQAEhRgKgrQgUhUhFB+QhEB9hAiAQgTgogRg9IgNg1IgNhhQgEgTgBgRQGRChHkBEQJUA6D/iCQAJAwgaBUQgLBHgIBGQgHAngTAsQgZA8gGhXQgHhdgeAUQgLAIgJAVQgJAWAAATQgBAlgYAIQgZAIgCgcQgKiWhDAAQgZAAgWAXQgVAXgDAcQgDAbgSAtQgRAugTAcQgPAXgLAAQgDAAgDgDg");
	this.shape.setTransform(45.7157,9.4424);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B6DA").s().p("AGjEqQgOgNADhIQAGiNgzgYQgUgKgSAQQgTARgGAgQgOBVggAdQgkAigQh4QgQh2g7AXQgVAIgOAXQgNAXAJAQQAIAPABATQABASgGAHQgRASgghWQghhagvAIQgnAHgyBMQgsBChFAAQhEABgXg6QgfhPgSgOQgjgZg1BLQg0BLgggTQgWgNgCgjQAEhRgKgrQgUhUhFB+QhEB9hAiAQgTgogRg9IgNg1IgNhhQgEgTgBgRQGRChHkBEQJUA6D/iCQAJAwgaBUQgLBHgIBGQgHAngTAsQgZA8gGhXQgHhdgeAUQgLAIgJAVQgJAWAAATQgBAlgYAIQgZAIgCgcQgKiWhDAAQgZAAgWAXQgVAXgDAcQgDAbgSAtQgRAugTAcQgPAXgLAAQgDAAgDgDg");
	this.shape_1.setTransform(45.7157,4.4424);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F273DA").s().p("AARCuQnkhEmQigQgCggAHgVIACgEQAthPCtgBQKfAiKIB5QB9AgA8BUQAFAKACAMQiwBalSAAQiZAAi5gSg");
	this.shape_2.setTransform(45.5778,-20.1672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aq6ETQhDgMgRgeIgKhuQgUjTgWiuIgHgyIANA1QARA9AUAoQA/CBBFh9QBFh/ATBUQAKArgDBSQABAjAXANQAfATA0hKQA2hNAiAaQASAOAgBPQAXA5BDAAQBFgBAshAQAzhMAngHQAugJAhBaQAgBWARgSQAHgHgBgSQgBgTgJgPQgIgPANgXQANgXAWgJQA7gWAPB1QAQB3AlgiQAfgdAPhTQAFghATgQQATgQATAJQAzAYgGCNQgDBIAOANQAMALAVggQASgbASguQARgtADgbQAEgcAVgWQAWgXAZAAQBCgBALCWQACAcAYgIQAZgJAAgkQABgUAJgUQAJgWALgHQAegUAGBbQAHBXAZg7QATgtAHgmQgJBKgEBIQADAig6APQlABXlWAWQi5AXizAAQjlAAjZgmg");
	this.shape_3.setTransform(44.675,18.8734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite48, new cjs.Rectangle(-41.3,-39.3,174,89.5), null);


(lib.sprite46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,51,204,0.498)").s().p("AqxBWQDwhzGegsQGdgsE4AxQo1CjoqAAQiCAAiCgJg");
	this.shape.setTransform(79.3,3.488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(242,182,218,0.298)").s().p("ACxDaQgZihgzAcQgoAVgWBXQgPA5ggAEQghAEgfgyQhaiUhXApQgfAPgXAkQgTAdgEAXQgCAUgQAcQgSAdgUAQQg3AqgVhbQgVhfgsgGQgRgCgOAPQgPAPgEAYQgHArgwgDQgsgDgOgWQgOgXgLgDQgSgGgTAoQgSAlgbABQgHgCgHgUQgGgTgKgXQgUgugjADQgiADgiAoQgRAVgKATQgjArgjgrQgLhqgShtQgghsAMg8QFBClLwhKQJjhWH4jPQAAAWgFAZIgZC8IgOB3QgXAPgXATQgsAoAGAYQADAPgGATQgGATgMAIQgfATgchZQgdheg0AeQgvAcgYBjQgTBPgsAEQgPABgLgLQgKgLAEgOQAFgPgMgjQgNgmgVgXQg9hAhBBzQhZCdhTAmQgVAKgSAAQhBAAgViEg");
	this.shape_1.setTransform(76.1497,36.5932);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B6DA").s().p("ACxDaQgZihgzAcQgoAVgWBXQgPA5ggAEQghAEgfgyQhaiUhXApQgfAPgXAkQgTAdgEAXQgCAUgQAcQgSAdgUAQQg3AqgVhbQgVhfgsgGQgRgCgOAPQgPAPgEAYQgHArgwgDQgsgDgOgWQgOgXgLgDQgSgGgTAoQgSAlgbABQgHgCgHgUQgGgTgKgXQgUgugjADQgiADgiAoQgRAVgKATQgjArgjgrQgLhqgShtQgghsAMg8QFBClLwhKQKFg0HWjxQAAAWgFAZIgZC8IgOB3QgXAPgXATQgsAoAGAYQADAPgGATQgGATgMAIQgfATgchZQgdheg0AeQgvAcgYBjQgTBPgsAEQgPABgLgLQgKgLAEgOQAFgPgMgjQgNgmgVgXQg9hAhBBzQhZCdhTAmQgVAKgSAAQhBAAgViEg");
	this.shape_2.setTransform(76.1497,31.3432);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F273DA").s().p("AxGCDQACgQAGgMQBMhtCdgoQNEiqM7gdQDbACA5BlIACAEQAJAbgCAqQnXDwqFA0QjpAXjBAAQmqAAjdhzg");
	this.shape_3.setTransform(76.3272,3.3646);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#63371C").s().p("AiDEdQmvgLmThvQhKgUAEgsQgFhMgHhNQAjAqAjgqQAKgUARgUQAigpAigDQAjgDAUAuQAKAYAGATQAHAUAIABQAaAAASgmQATgnASAFQALADAPAYQAOAVArADQAwADAHgqQAEgYAPgPQAOgPARACQAsAFAVBfQAVBbA3grQAUgOASgeQAQgcADgTQADgXATgeQAXgjAfgPQBXgpBaCTQAfAzAhgEQAggFAPg5QAWhWAogWQAzgbAZCgQAbCoBiguQBTgnBZibQBBh0A9BBQAVAXANAlQAMAjgFAQQgEAOAKALQALALAQgBQArgEAThQQAYhiAwgdQAzgeAeBfQAbBZAfgUQAMgHAGgUQAGgTgDgPQgGgYAtgnQAWgUAXgOQgSCugMDHQABAkg6AdQigBGi6AXIgFACQk4AmlBAAIhsgBg");
	this.shape_4.setTransform(76.525,60.4786);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(0.2,1,1).p("ASIhcQAgA5h/AXAr9A+QF8BGGZgZAwzhwQhoASAQA5");
	this.shape_5.setTransform(77.3148,83.7752);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.498)").ss(1.2,1,1).p("AvbiBQAhgFAlgEQF9guIYAAQIaAAF8AuQBhAMBJANQDSAmAAAwQAABAoPBTQgwAIgvAHQnZBCmSgVQm7gYlIg7QhcgRhCgRQipgsAAguQAAg6E2gsg");
	this.shape_6.setTransform(75.55,80.9601);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,153,153,0.298)").s().p("ARAhzQDSAmAAAwQAABAoPBTIhgAOQGchqABiNgA0RgdQAAg7E2grQjVA6BICGQipgsAAgug");
	this.shape_7.setTransform(75.55,81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjHC0Qm7gYlIg7QlHg8AAhAQAAhBF8guQF9guIYAAQIaAAF8AuQBhAMBJANQDSAmAAAwQAABAoPBTIhgAPQllAyk+AAQhlAAhigFg");
	this.shape_8.setTransform(75.55,80.9601);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite46, new cjs.Rectangle(-55.2,-21.2,261.6,121.7), null);


(lib.shape62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgFAmQgEgBgEgNIgEgLIAegzQAJACgHApIAAAAIAAACIgBADIAAADIgBAFIAAACIgBADQgFAQgKAAIgCgBg");
	this.shape.setTransform(6.1863,11.9603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgqAWQAAgQAPgdQAKgUAYgPQATgLAEAAQAFgBgEAXQgEAXABARQAAAPAKAJQAKAJgNAWQgTAWgaAAQgNAAgTgwgAgTAlIAEALQAEANAEABQAMACAFgSIABgCIAAgCIABgGIABgCIAAgDIAAgCIABgBIgBAAQAHgpgJgBg");
	this.shape_1.setTransform(6.3628,9.6245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.502)").s().p("Ag6AdQAAgVAUgnQAMgaAhgSQAhgTABADIgFA0QgHAwAOAHQAOAGACAGQABAGgRAdQgZAdgiAAQgRAAgZg/gAAbg/QgEAAgTALQgYAPgKAUQgPAeAAAPQATAxANAAQAaAAATgWQANgXgKgJQgKgJAAgPQgBgQAEgXQAEgXgFAAIAAAAg");
	this.shape_2.setTransform(6.6809,8.9728);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-0.2,11.799999999999999,18.4);


(lib.shape61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgRAiQgEgBgBgUIAAgFIAqgqQAIAEgRAmIgHAPIAAABIgDAEQgFAHgHAAIgGgBg");
	this.shape.setTransform(7.3167,11.6403);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgrAWQAIAAAMgbQAMgdAVgQIAagTQAEgEADAXQACAXgBAYQgCAXACADQADADgOAXQgSAWgaAAQgNAAgTgxgAgSAeIAAAGQABATAEACQALAEAHgLIADgDIAAgBIAHgQQARgmgIgEg");
	this.shape_1.setTransform(6.9445,9.3704);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.502)").s().p("Ag7AcQADgMAOgVQANgVAighQAigiAFACQAFACABArQAAAqAFALQAFALAAAIQgBAIgRAdQgZAdgiAAQgRAAgZhAgAAhhAIgaAUQgVAQgMAcQgMAbgIABQATAwANAAQAaAAATgWQANgWgCgDQgDgDACgYQACgYgDgXQgCgTgEAAIgBAAg");
	this.shape_2.setTransform(7.1773,8.8194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-0.3,12,18.3);


(lib.shape60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgFAmQgEgBgEgNIgEgLIAegzQAJACgHApIgCANIAAACIgBADIgBACQgFAOgJAAIgCgBg");
	this.shape.setTransform(6.8863,11.5568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AguAWQAAgQAPgdQAKgUAYgPQATgLAEAAQAFgBABAYQABAYAJATQAIARgGALIgNAXQgTAWgaAAQgNAAgTgwgAgaAiIADALQAFANADABQAMACAFgPIABgBIAAgBIAAgDIAAgCIADgNQAGgpgJgCg");
	this.shape_1.setTransform(7.8241,9.4745);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.502)").s().p("Ag8AdQAAgVATgnQANgaAggSQAigTABADIAKAtIAMA0QACAMgFAPIgSAeQgYAdgjAAQgQAAgZg/gAAZg/QgFAAgTALQgYAPgJAUQgPAeAAAPQATAxANAAQAaAAASgWIAOgXQAGgMgJgSQgIgRgBgYQgCgYgEAAIAAAAg");
	this.shape_2.setTransform(7.9891,8.8228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,-0.4,12.299999999999999,18.5);


(lib.shape59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgBAcIgCgEIgHgQQgSgmAJgEIAqAqIgBAFQgBAUgDABIgGABQgIAAgFgHg");
	this.shape.setTransform(5.1611,11.2903);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgZAxIgNgXQgGgMgFgZQgGgaAMgSQAMgSAEAEIAUASIAlAlQAWAVAAAPQgTAxgNAAQgaAAgTgWgAgNAWIAIAQIACAEQAHALALgFQAEgBABgUIAAgFIgqgqQgIAEARAmg");
	this.shape_1.setTransform(5.4136,9.8636);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.502)").s().p("AgiA/IgSgeIgLgcQgHgMAOgpQAOgpAFgBQAEgBAdAcIAxAyQAVAVAAAUQgZBAgQAAQgjAAgYgdgAgpgyQgMASAFAbQAFAZAGALIAOAXQASAWAbAAQAMAAATgwQAAgQgVgUIglglIgVgTIgBgBQgFAAgJAPg");
	this.shape_2.setTransform(5.272,9.3483);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0.2,13.200000000000001,18.3);


(lib.shape58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgLAXIgBgDIAAgCIgCgNQgHgpAJgCIAeAzIgEALQgFANgDABIgDABQgKAAgEgQg");
	this.shape.setTransform(6.3015,11.0103);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgeAwIgNgXQgGgLAIgRQAJgTABgYQABgYAFABQAEAAATALQAYAPAKAUQAPAdAAAQQgTAwgNAAQgaAAgTgWgAgKAQIACANIAAACIAAAAIABADQAFARAMgCQADgBAFgNIAEgLIgegzQgJACAHApg");
	this.shape_1.setTransform(5.9259,9.9245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.502)").s().p("AgnA/IgSgeQgFgPADgMIALg0IAKgtQABgDAiATQAgASANAaQATAnAAAVQgZA/gQAAQgjAAgYgdgAgdgnQgCAYgIARQgJASAGAMIAOAXQASAWAbAAQAMAAATgxQAAgPgPgeQgJgUgYgPQgTgLgFAAIAAAAQgEAAgBAYg");
	this.shape_2.setTransform(5.7721,9.2728);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0.1,12.200000000000001,18.4);


(lib.shape57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.502)").s().p("AgpA/IgSgeQAAgSAcg2QAbg1AEAAQAKAAAeA+QATAmAAAVQgZBAgQAAQgjgBgYgdgAgWgXQgVAoAAAPIANAXQATAWAaAAQAMAAAUgxQgBgPgPgeQgWgugIgBQgDAAgUApg");
	this.shape.setTransform(5.95,9.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3300").s().p("AgBAoQgJgBgCgHIgDgMIADgSIAAgDQABgQADgGQAEgQAFABIAPA5IgBACQgNATgDAAIAAAAg");
	this.shape_1.setTransform(6.35,11.6477);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgfAxIgNgXQAAgPAVgoQAUgpADAAQAIAAAWAvQAPAeABAPQgUAxgMAAQgaAAgTgWgAgFgGQgDAGgBAQIAAADIgDASIADAMQACAHAIABQAEABANgUIABgBIgPg6IAAAAQgFAAgEAPg");
	this.shape_2.setTransform(6.05,9.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.9,18.5);


(lib.shape56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.502)","rgba(255,255,0,0)"],[0,1],0,0,0,0,0,30.3).s().p("AjPC+QhWhOAAhwQAAhvBWhOQBWhPB5AAQB6AABWBPQBWBOAABvQAABwhWBOQhWBPh6AAQh5AAhWhPg");
	this.shape.setTransform(7.85,8.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-18.1,58.8,53.800000000000004);


(lib.shape54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A3402").s().p("AgCBJIgEhtQABglAHAAQAGAAgBAFQgFA7AAALQAAAQAFAwQAAAIgFAAg");
	this.shape.setTransform(9.9,-1.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAACpIgNh0IgCgRIgDgcIgBgIIAAgEIgCgMIgBgNIgMiJIAFAIIACgDIgPgKIAAgBIAAAAIAYAGQAMAEANASIAGANQAJAmAHArIAFAbQARBwgNBRIAAABIgrACg");
	this.shape_1.setTransform(8.335,28.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ABgDeIhRAEIAAgBQANhRgRhxIgEgbQgHgqgJgmIgFgOQgPgRgLgEIgZgGIAAAAIgCgDIgKABQgEARAAAkQACADgKAAQgMABgCgTIgCg6QACgmAPgGIADgDIACAAIAVABIAIAAIAkgSIAEgFQAHgGAQgFQAZgJAPAAQAmAAAHAKQAEAGgEAGQAAANgOAMQgOAMAAAHQAgBWAAANQAEAbgEAbIgXgVQAQAsABA3QACB2ALAjIABABIgFAGg");
	this.shape_2.setTransform(10.575,22.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC8E02").s().p("AAIAlIAAgBIAAABgAgJggIABgDIASAEg");
	this.shape_3.setTransform(3.2375,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.3,21.2,55);


(lib.shape53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().p("AgDAwQgBAAAAAAQAAAAAAAAQABgBAAAAQABAAABgBIAUgBIABADIgIAEIgHABQgFAAgDgFgAgmAxIABgFIAIAFIgEADgAAjAmQAAgFAGgCIAHgEIACAAIABACQAAAEgOAGgAgzAiQgCgNAFgFIABADIgBAQIgBABIAAABIgCgDgAgbARQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIABAFgAAGARQAAgFAFgDIAIgFIABABIABACIgOALgAAxAAQgDgHACgCIACgBIABADIABAJgAgYAAIABgSIACAAIABACIADAPIgEADgAAOgYQABgEAHgEIAIgJQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQACAHgSAKgAgKgnQAFgHAIgGIADADQgEAJgKAFg");
	this.shape.setTransform(8.5063,7.2224);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B10101").s().p("AhAA7IAkhHIABAAQAXgnAYgHQAKgDAMADQAQADAGAOQhAAPg8BXg");
	this.shape_1.setTransform(7,6.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2B2B").s().p("AgKA/QgVgDglgVQA8hWBBgPIAAAAIAAAAIADAIIAAAAQAUBMgXAXQgNAKgMADQgQAFgQAAIgKAAg");
	this.shape_2.setTransform(7.7901,8.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.4,14.1,14.5);


(lib.shape49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AgbAGIgPggIAKAAIAJAZQAKAUAOAAQAdAAAGgcIADgRIAEAAIgDAaQgJAbgfAAQgPAAgMgVg");
	this.shape.setTransform(4.3,2.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B5DA").s().p("AgaA0IgJgZQAZgxAEgaQAHgwAHAwQAHAaAVAxIgCARQgHAdgbAAQgPAAgLgVg");
	this.shape_1.setTransform(4.55,-2.6625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,8.6,15.5);


(lib.shape44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHPAFIgugJIgxgFIjggEIpyACIgGADIgMADIgaADIgNgOIBAgFINPAFIAuAFQAMgBAhAKIBNARIgCAHQgegJgtgIg");
	this.shape.setTransform(277,237.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F273DA").s().p("AljA7QgTgDgugVQgpgSgCgCIhFhHIAbgDIAMgDIAGgCIJygDIDgAEIAxAFIAtAKQAuAJAeAIIjnBiIgkABQh2AAn3gJg");
	this.shape_1.setTransform(277.525,243.2083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(223,235.7,108,14.300000000000011);


(lib.sprite63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.shape57("synched",0);
	this.instance.setTransform(0,-70);

	this.instance_1 = new lib.shape58("synched",0);
	this.instance_1.setTransform(0,-70);

	this.instance_2 = new lib.shape59("synched",0);
	this.instance_2.setTransform(0,-70);

	this.instance_3 = new lib.shape60("synched",0);
	this.instance_3.setTransform(0,-70);

	this.instance_4 = new lib.shape61("synched",0);
	this.instance_4.setTransform(0,-70);

	this.instance_5 = new lib.shape62("synched",0);
	this.instance_5.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).wait(2));

	// Layer 1
	this.instance_6 = new lib.shape56("synched",0);
	this.instance_6.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-88.1,58.8,53.8);


(lib.sprite55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.shape54("synched",0);
	this.instance.setTransform(0.2,-87.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite55, new cjs.Rectangle(0.2,-96.3,21.2,55), null);


(lib.sprite50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.shape49("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprite50, new cjs.Rectangle(0,-10,8.6,15.5), null);


(lib.cake_nofire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.sprite55();
	this.instance.setTransform(264.75,158.7,0.7453,0.7453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.sprite50();
	this.instance_1.setTransform(291.95,155.6,0.8698,0.4219,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 26
	this.instance_2 = new lib.shape53("synched",0);
	this.instance_2.setTransform(259.15,113.45,0.451,0.451,0,-96.2929,83.7071);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 25
	this.instance_3 = new lib.shape53("synched",0);
	this.instance_3.setTransform(239.6,123.5,0.5671,0.5671,0,23.7069,-156.2931);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 24
	this.instance_4 = new lib.shape53("synched",0);
	this.instance_4.setTransform(307.5,118.85,0.689,0.689,0,-36.2936,143.7064);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 5
	this.instance_5 = new lib.shape53("synched",0);
	this.instance_5.setTransform(244.4,188.15,0.5671,0.5671,0,-96.293,83.707);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 23
	this.instance_6 = new lib.shape53("synched",0);
	this.instance_6.setTransform(211.7,179.95,0.6433,0.4811,140.5944);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer 6
	this.instance_7 = new lib.shape53("synched",0);
	this.instance_7.setTransform(300.1,194.7,0.6434,0.4811,5.5931);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer 7
	this.instance_8 = new lib.shape53("synched",0);
	this.instance_8.setTransform(278.65,239.95,1.4897,1.4897,96.2929);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Layer 8
	this.instance_9 = new lib.shape53("synched",0);
	this.instance_9.setTransform(360.15,222.25,1.0333,1.0333,0,-20.5914,159.4086);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer 9
	this.instance_10 = new lib.shape53("synched",0);
	this.instance_10.setTransform(199.25,239.3,1.2176,1.2176,0,4.8115,-175.1879);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 10
	this.instance_11 = new lib.sprite52();
	this.instance_11.setTransform(246.5,186.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Layer 11
	this.instance_12 = new lib.sprite50();
	this.instance_12.setTransform(290.3,224.9,0.8698,0.5984,0.7437);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 13
	this.instance_13 = new lib.sprite48();
	this.instance_13.setTransform(223.85,205.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Layer 15
	this.instance_14 = new lib.sprite46();
	this.instance_14.setTransform(196.8,235.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Layer 16
	this.instance_15 = new lib.shape44("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cake_nofire, new cjs.Rectangle(142,86.9,260.8,248.79999999999998), null);


(lib.cake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.sprite63();
	this.instance.setTransform(265.55,139.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.sprite55();
	this.instance_1.setTransform(264.75,158.7,0.7453,0.7453);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.sprite50();
	this.instance_2.setTransform(291.95,155.6,0.8698,0.4219,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 26
	this.instance_3 = new lib.shape53("synched",0);
	this.instance_3.setTransform(259.15,113.45,0.451,0.451,0,-96.2929,83.7071);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 25
	this.instance_4 = new lib.shape53("synched",0);
	this.instance_4.setTransform(239.6,123.5,0.5671,0.5671,0,23.7069,-156.2931);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 24
	this.instance_5 = new lib.shape53("synched",0);
	this.instance_5.setTransform(307.5,118.85,0.689,0.689,0,-36.2936,143.7064);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 5
	this.instance_6 = new lib.shape53("synched",0);
	this.instance_6.setTransform(244.4,188.15,0.5671,0.5671,0,-96.293,83.707);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer 23
	this.instance_7 = new lib.shape53("synched",0);
	this.instance_7.setTransform(211.7,179.95,0.6433,0.4811,140.5944);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer 6
	this.instance_8 = new lib.shape53("synched",0);
	this.instance_8.setTransform(300.1,194.7,0.6434,0.4811,5.5931);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Layer 7
	this.instance_9 = new lib.shape53("synched",0);
	this.instance_9.setTransform(278.65,239.95,1.4897,1.4897,96.2929);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer 8
	this.instance_10 = new lib.shape53("synched",0);
	this.instance_10.setTransform(360.15,222.25,1.0333,1.0333,0,-20.5914,159.4086);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 9
	this.instance_11 = new lib.shape53("synched",0);
	this.instance_11.setTransform(199.25,239.3,1.2176,1.2176,0,4.8115,-175.1879);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Layer 10
	this.instance_12 = new lib.sprite52();
	this.instance_12.setTransform(246.5,186.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 11
	this.instance_13 = new lib.sprite50();
	this.instance_13.setTransform(290.3,224.9,0.8698,0.5984,0.7437);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Layer 13
	this.instance_14 = new lib.sprite48();
	this.instance_14.setTransform(223.85,205.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Layer 15
	this.instance_15 = new lib.sprite46();
	this.instance_15.setTransform(196.8,235.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Layer 16
	this.instance_16 = new lib.shape44("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cake, new cjs.Rectangle(142,51.7,260.8,284), null);


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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgjgJQAjAbAkgM");
	this.shape.setTransform(1.65,15.8028);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AglgIQAlAeAmgV");
	this.shape_1.setTransform(2.175,15.2361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape}]},6).wait(20));

	// eyeshine
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABOA1QgIgCgBgHQgCgHAFgHQAGgIAJgCQAJgDAIACQAIADABAHQADAHgGAHQgGAGgJAEIgKABIgHgBgAhHAZQgPgDgLgOQgMgMgDgRQgDgQAHgJQAIgKAPADQANAEANAOQAMANADARQADAPgIAIQgFAIgKAAIgHgBg");
	this.shape_2.setTransform(2.9168,0.4584);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABWAuQgIgCgCgHQgDgGAFgIQAFgIAKgDQAJgEAIACQAJACACAHQADAGgGAIQgFAHgJAEQgHACgGAAIgFAAgAhIAfQgPgCgOgNQgOgMgEgPQgFgQAHgKQAIgKAPACQAPACAOANQAOAMAEAQQAFAPgHAJQgGAJgMAAIgFAAg");
	this.shape_3.setTransform(1.6649,-0.0935);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_2}]},6).wait(20));

	// eyeline
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("ACWAnQgigbg7AsAiVgrQBVgwA2CH");
	this.shape_4.setTransform(2.95,-7.8898);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("ACgAYQgmgYg5AxAifggQBWg3BDCC");
	this.shape_5.setTransform(0.975,-8.2256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_4}]},6).wait(20));

	// eyes
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#176000").s().p("AAkBJQAag+BRgUQALArgZAqQgPAbgXAAQgYAAgfgegAiQAAQgJhBAtglQBsBPgCBaQgVADgSAAQhbAAgMhGg");
	this.shape_6.setTransform(1.2204,-0.8799);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#176000").s().p("AAsBEQAWg/BSgbQAPApgVAtQgPAegaAAQgYAAghgagAiWAMQgPhAAsgpQB4BFAEBaQggAHgbAAQhNAAgRg9g");
	this.shape_7.setTransform(-0.2341,-1.229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_6}]},6).wait(20));

	// headshine
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.647)").s().p("AAAA3QgSgLgNgYQgOgXAAgXQAAgXAOgIQAMgJATALQATALANAYQAOAYAAAWQAAAYgOAIQgFAEgHAAQgJAAgLgHg");
	this.shape_8.setTransform(12.1259,-12.8918);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.647)").s().p("AAFA3QgUgKgQgWQgQgXgCgWQgCgWANgKQANgKAVAKQAUAJAQAXQAQAWACAWQACAYgNAJQgGAFgJAAQgIAAgLgFg");
	this.shape_9.setTransform(10.1566,-14.2375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},10).to({state:[{t:this.shape_8}]},6).wait(20));

	// head
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(1,1,1).p("ABTjpQgogPgkgFQhsgNhNBWQhVBvBjDJQA5BaBUAcQAaAIATgFQATgFASgJQBwg5AoivQAVhjgqhAQgigyhJgbg");
	this.shape_10.setTransform(-3.494,-2.6954);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],-28.6,7.4,26.1,-8).s().p("AgXD6QhUgcg5haQhjjJBVhvQBNhWBsANQAkAFAoAPQBJAbAiAyQAqBAgVBjQgoCvhwA5QgSAJgTAFQgHACgJAAQgMAAgRgFg");
	this.shape_11.setTransform(-3.494,-2.6954);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("ABEjvQgpgMgjgCQhugEhGBcQhLB1B0DBQBABVBVAVQAcAGASgGQASgIARgKQBrhCAaixQANhlgvg8QgmgvhMgVg");
	this.shape_12.setTransform(-4.7225,-2.7664);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],-27.4,9.7,25.9,-10.2).s().p("AACD7QhVgVhAhVQh0jBBLh1QBGhcBuAEQAjACApAMQBMAVAmAvQAvA8gNBlQgaCxhrBCQgRAKgSAIQgKADgMAAQgLAAgNgDg");
	this.shape_13.setTransform(-4.7225,-2.7664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},10).to({state:[{t:this.shape_11},{t:this.shape_10}]},6).wait(20));

	// emblem
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("AAAAOIgcAPIAPgdIgPgcIAcAOIAdgOIgPAcIAPAdg");
	this.shape_14.setTransform(-9.55,32.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(36));

	// body
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(1,1,1).p("AEVheIAIAdQAGAUgJAIQALAJAbgBQAGAlg2gHIgRAdADvhuQgIBPAmgCQAKgCADgCAFUhRQAXAGgDAbQgCALgQAEQgMADgKABADPABIAQgbQgcgSAFgZIARgrQgHgdAOgGQAegNAPAdQAoh0A1gDQAhgBABAfQgyAkgbAwQAqgIAAAiQgBARgUAMAEdhBQAkgFATgLAEPh0IAGAWAE/iIQgMAGgeAkAhYgXQhKAHjNCHQg/A/BOBEIBbAAQg6gwgBgsQBog+BOgcQAnBEgiBzIDWAAQAFhigihQQAaAaA9A5QAMALAUgaIBUhvADPABQAFAfArgCAARgTQBNA0AyA9IA/hdAARgTQAJAEgNgHIhWAAQgHgCgIABQBsBegDhag");
	this.shape_15.setTransform(-2.8074,23.1484);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],32.3,-0.1,67.9,-25.7).s().p("AhaBvIARgcQgcgSAEgZIASgqQgHgdAOgGQAegNAOAdQAnh0A2gDQAggBACAfQgzAkgbAwQgMAGgdAjIAJAdQACAIAAAGQAAAJgFAFIAAAAQAKAIAVAAIAAAAIAAAAIACAAIADAAIgDAAIgCAAIAAAAIAAAAQgVAAgKgIIAAAAQAFgFAAgJQAAgGgCgIQAjgFATgLQAXAGgEAbQgBALgQAEIgXAEQAGAmg0gHIgSAdIgEABQgnAAgFgegAgeBNIACgBQAKgCAEgCQgEACgKACIgCABIAAAAIAAAAQgigBAGhIIAAgEIAAAEQgGBIAiABIAAAAIAAAAgAgUAPIgFgVgAgLAsIgJgdQAdgjAMgGQArgIgBAiQgBAQgTAMQgTALgjAFIAAAAg");
	this.shape_16.setTransform(26.9438,12.1019);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],-29.1,-12,20.2,-40.4).s().p("Ag2gXQAIgBAIACIBWAAQAMAHgIgEQABArgaAAQgaAAg3gvg");
	this.shape_17.setTransform(-6.253,23.1496);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2E7200").s().p("Ag/CJQAjhzgohCQhNAchoA8QABAtA5AvIhaAAQhOhEA/g/QDNiHBJgGQBtBfgDhcQBMA1AyA+IA/heQAGAfAqgBIhTBtQgUAagMgKQg+g5gZgaQAiBPgGBig");
	this.shape_18.setTransform(-9.8824,34.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(1,1,1).p("ADggyIAWgZQgYgXAKgXIAZgnQgBgeAPgDQAggHAJAgQA+hrA1AJQAgAFgFAeQg4AagkAqQgNADglAdIACAfQAlABAVgHQAVALgJAaQgDALgRAAQgNAAgKgBQgBAmg0gRIgWAaAE3iZIABAWADggyQAAAfAqAHAEWiaQgYBMAmAGQAKAAAEgCQAJALAaAEAE6hkQADAUgLAGAiTgGQhJAGjNCIQg/A/BOBEIBaAAQg5gwgBgsQBog+BNgcQAoBEgjBzIDWAAQAFhhgfhOQAEAEAEADQAuAkAugLQA2gNAZgcIBbhgAgEBdQgBgCAAgBQAEAFAFAFAgogCQAkAYApAhQAwAlBEg/IBHhPAFqijQAqAAgHAiQgEAQgVAHAgogCQAIADgMgGIhXAAQgIgCgIABQBuBegDhag");
	this.shape_19.setTransform(3.0457,21.4436);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],31.3,6.1,71.3,-11.9).s().p("AhyBZIAWgYQgYgYAJgXIAaglQgBgfAPgCQAggHAIAfQA9hqA2AIQAfAGgEAeQg5AagkApQgNADgjAdIgBgWIABAWIACAeIgCgeQAjgdANgDQArABgHAgQgEAQgWAIQAWALgJAZQgEALgQABIgXgBQgZgEgJgLQAJALAZAEQgCAmgygRIgXAZQgqgHABgfgAgvBDQALAAAEgBQgEABgLAAQgXgDAAgfQAAgSAJgdQgJAdAAASQAAAfAXADIAAAAgAggBCQAIgFAAgPIAAgHIACAAIAEABIABAAIAFAAIAAAAIABAAQAYAAAQgFIABAAIABgBIABAAIgBAAIgBABIgBAAQgQAFgYAAIgBAAIAAAAIgFAAIgBAAIgEgBIgCAAIAAAHQAAAPgIAFgAACBRIAAAAg");
	this.shape_20.setTransform(36.9778,7.3686);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2E7200").s().p("AhhCgQAih0gnhCQhOAbhoA9QABAtA6AvIhbAAQhOhEA/g/QDNiGBKgHQBsBfgDhcQAlAaApAgQAxAmBEhAIBHhQQgBAfAqAHIhbBhQgYAbg2ANQgvAMgugjIgKgKIABADQAhBNgFBhg");
	this.shape_21.setTransform(-6.4074,32.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("ADvhuQgIBPAmgCQAKgCADgCQALAJAbgBQAGAlg2gHIgRAdAEdhBQAGAUgJAIAEVheIAIAdQAkgFATgLQAXAGgDAbQgCALgQAEQgMADgKABAE/iIQgMAGgeAkAEPh0IAGAWAE/iIQAqgIAAAiQgBARgUAMADPABIAQgbQgcgSAFgZIARgrQgHgdAOgGQAegNAPAdQAoh0A1gDQAhgBABAfQgyAkgbAwAhYgXQhKAHjNCHQg/A/BOBEIBbAAQg6gwgBgsQBog+BOgcQAnBEgiBzIDWAAQAFhigihQQAaAaA9A5QAMALAUgaIBUhvAARgTQBNA0AyA9IA/hdQAFAfArgCAARgTQAJAEgNgHIhWAAQgHgCgIABQBsBegDhag");
	this.shape_22.setTransform(-2.8074,23.1484);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#6A7782","#A0B4C5"],[0.333,0.553],32.3,-0.1,67.9,-25.7).s().p("AhaBvIARgcQgcgSAEgZIASgqQgHgdAOgGQAegNAOAdQAnh0A2gDQAggBACAfQgzAkgbAwQgMAGgdAjQAdgjAMgGQArgIgBAiQgBAQgTAMQAXAGgEAbQgBALgQAEIgXAEQAGAmg0gHIgSAdIgEABQgnAAgFgegAARBQIACAAIADAAIgDAAIgCAAIAAAAIAAAAQgVAAgKgIIAAAAQAFgFAAgJQAAgGgCgIQAjgFATgLQgTALgjAFQACAIAAAGQAAAJgFAFIAAAAQAKAIAVAAIAAAAIAAAAgAgeBNIACgBQAKgCAEgCQgEACgKACIgCABIAAAAIAAAAQgigBAGhIIAAgEIAAAEQgGBIAiABIAAAAIAAAAgAgLAsIgJgdgAgUAPIgFgVgAgLAsIAAAAg");
	this.shape_23.setTransform(26.9438,12.1019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_21},{t:this.shape_17},{t:this.shape_20},{t:this.shape_19}]},10).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_22}]},6).wait(20));

	// glow
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AgOAmIgFACIAAgEIghgSIAcgYIg1g0IA7AsIgKgvIAcAxIA9hFIgpBKIA6gFIgBAMIguAPIAqAUIAAABIgjgEIAcAygAgTBNIAAgBIADABg");
	this.shape_24.setTransform(47.5,-6.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AglAgIgjAEIAAgBIAqgUIgvgbIA6AFIgphKIA8BFIAdgxIgLAvIA8gsIg1A0IAtANIgzAdIAAAEIgEgBIhPArgAAQBNIADgBIAAABg");
	this.shape_25.setTransform(47.5,-6.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},10).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_24}]},2).to({state:[]},2).wait(20));

	// Layer_2
	this.instance = new lib.cake_nofire();
	this.instance.setTransform(46.85,22.7,0.2279,0.2279,0,0,0,275.6,223.8);

	this.instance_1 = new lib.cake();
	this.instance_1.setTransform(46.85,22.7,0.2279,0.2279,0,0,0,275.6,223.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},6).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-29.2,119.30000000000001,78.5);


// stage content:
(lib.bd_light = function(mode,startPosition,loop,reversed) {
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
			mystage.color = '#f5bd3d'; // Text color
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

	// body
	this.instance = new lib.anim();
	this.instance.setTransform(35.55,68.45,0.8222,0.8222,0,0,0,-1.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(51.8,86.4,47.60000000000001,13.799999999999997);
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;