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


(lib.dog2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AA2AzQgDgDAAgFIAAgaQAAgEADgEQADgEAEAAQAEAAACAEQADAEAAAEIAAAaQAAAFgDADQgCAEgEAAQgEAAgDgEgAAYAzQgCgDAAgFIAAgaQAAgEACgEQADgEAEAAQAEAAADAEQACAEAAAEIAAAaQAAAFgCADQgDAEgEAAQgEAAgDgEgADGgOQgCgDAAgEIAAgVQAAgDACgEQADgCADAAQACAAADACQACAEAAADIAAAVQAAAEgCADQgDACgCAAQgDAAgDgCgACvgOQgDgDAAgEIAAgVQAAgDADgEQACgCACAAQAEAAACACQACAEAAADIAAAVQAAAEgCADQgCACgEAAQgCAAgCgCgAi6gUQgDgDAAgDIAAgTQAAgEADgCQACgDADAAQACAAADADQACACAAAEIAAATQAAADgCADQgDADgCAAQgDAAgCgDgAjQgUQgCgDAAgDIAAgTQAAgEACgCQACgDADAAQACAAADADQACACAAAEIAAATQAAADgCADQgDADgCAAQgDAAgCgDg");
	this.shape.setTransform(-8.375,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#423932").ss(1,1,1).p("ACFlUQAMgDAKADQAZAFAUAoQBcACADBMQADBIAkAPQABAAACABQAnAOgLA6QgLA5AdARQAdASgGBBQgCAbgTAVQAQAzgBAiQgJA/g/gMQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQgUgOgCgmQgEgjAQggQAMglgjgmQglglANg9QAHgvgnhBQgng9AdgaQACgDADgCgAitlDQgRgBgMAGQgeAMgOAsQh0AbAUBKQAOBGgoAZQgCAAgCACQgsAYAeA1QAeA2ggAZQggAYAaA+QAKAZAeAPQgHA2ANAgQAcA6BMgdQAVgIAHgKQA0ALAagkQAWgegTgwIgSgeQAVgTgGglQgFgjgegcQgbghAigsQAlgvggg4QgZgqAihKQAdhGgsgSQgDgCgDAAg");
	this.shape_1.setTransform(-3.0533,-3.2069);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E451B").s().p("Ak9DgQhGguAigfQBAgwgwgkQgxgmAQhDQAogZgOhGQgUhLB0gaQAOgsAegMQAMgHARABIAGACQAsASgdBGQgiBKAZArQAgA3glAuQgiAuAbAhQAeAcAFAiQAGAlgVAUQgeBOhIguQAjBNgpAEQhDgEANhbgAE1C+QgsA8gohGQgUgPgCglQgEgjAQghQAMgmgjglQglglANg8QAHgvgnhBQgng9AdgbIAFgEQAMgEAKAEQAZAFAUAoQBcABADBNQADBHAkAPQAbA+geAuQgbAvA7AiQAgAVgrA9QAdBVgxASIgDABQgbAAAJhOg");
	this.shape_2.setTransform(-2.8919,-5.5875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D2808").s().p("AlcDGQgNggAHg2QgegPgKgZQgag+AggXQAggZgeg2Qgeg2AsgYIAEgCQgQBEAxAmQAwAkhAAvQgiAfBGAvQgNBaBDAEQApgDgjhNQBIAtAehOIASAeQATAwgWAeQgaAkg0gLQgHAKgVAIQgZAKgUAAQgpAAgSgngAFICyQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQAoBHAsg9QgKBTAfgFQAxgSgdhWQArg7gggWQg7giAbguQAegwgbg9IADABQAnAOgLA6QgLA6AdARQAdASgGBBQgCAagTAVQAQAzgBAiQgIA1guAAQgIAAgKgCg");
	this.shape_3.setTransform(-3.0533,7.3556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEA9QgJgCgBgFQgBgFAHgGQAIgGAMgCIABgBQAMgCAJACQAKABAAAFQACAGgIAGQgHAFgNADIgGACIgFAAIgLgBgAh1AVQgGgCgDgHQgCgHADgFQADgGAGgCQAHgDAGADQAGADACAFQADAHgDAGQgDAGgGADIgGABQgDAAgEgCgABogcQgGgDgDgHQgCgHADgFQACgHAHgCQAHgDAGADQAGADACAGQADAHgDAGQgDAHgGACIgGABQgEAAgDgBg");
	this.shape_4.setTransform(-0.8453,-8.7042);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTBSQgUgFgCgNQgDgMAPgMQARgNAZgGIADgBQAXgEASAEQAUAFADAMQADAMgQANQgQANgZAGIgKACIgQABQgKAAgJgCgAiCAeQgMgIgDgOQgDgNAHgNQAIgMAOgCQAOgEANAIQALAHAEAPQADANgHANQgJAMgOADIgHABQgKAAgJgGgABdgTQgMgIgDgNQgDgOAIgNQAHgMAOgDQAPgEAMAHQAMAIADAQQADANgHAMQgIAMgOAEIgIABQgKAAgJgGg");
	this.shape_5.setTransform(-0.375,-8.2834);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("ABzgIQgTAIgPACQggADgLgnQgDANgFAJQgkBXhYhJAhyAQQAJgIALgGQAKgDALgC");
	this.shape_6.setTransform(-1.45,3.1426);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("ABSgpQAxgUA8A0AhdgLQg0gHgtBC");
	this.shape_7.setTransform(-1.775,-15.4659);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer_8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9E451B").s().p("AgsBiQgpgSgQgqQgPgpATgpQASgpAqgPQApgQApASQApAUAPApQAQApgTApQgTApgpAPQgTAHgSAAQgWAAgXgKg");
	this.shape_8.setTransform(-12.2474,-12.2478);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_11
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#423932").ss(1,1,1).p("Aj+A5QAYBtBcA9QBaA8BmgUQACgBADAAQBpgYA7hgQA5hdgZhtQgZhuhbg9QgpgcgsgJQgSgEgTgCQgVgCgWADQgPABgQADQgRAEgPAGQg3ATgoApQgVAVgQAcQg6BeAZBtg");
	this.shape_9.setTransform(-5.3849,-12.0556);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-2,-7.8,0,-2,-7.8,40.1).s().p("AiKDjQhcg9gYhtQgZhtA6heQAQgcAVgVQAogpA3gTQAPgGARgEQAQgDAPgBQAWgDAVACQATACASAEQAsAJApAcQBbA9AZBuQAZBtg5BdQg7BghpAYIgFABQgaAFgZAAQhKAAhDgtg");
	this.shape_10.setTransform(-5.3849,-12.0556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_10
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#423932").ss(1,1,1).p("Ai1gbQAUgwA2g7QBQg5BFgTQA5gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDQAHAlgTAUQgCADgCACQAeADgHAbQgNAWgkADQhGABgHgiQgOAGgQAGIgCAUQAiAWgNAaQgVAcg5gOQhEgRgLgyQAAgDgBgCQgFgbAFgWQACgIADgHADVAkQgEADgDAEQgZAcglAWQgXAOgbANAi1gbQgtgQgKguIAAAgIgUgiQgLAZAQAdIgSgMQgBA4BOAbAhzCBQgbgMgSgSQgDgDgCgDQgJgKgGgMQgFgKgEgKQgDgIAAgJAi0BHQgbAHgJAPQgDAGAAAIQgCAaAiAKQAjAKAlgYABKAxIgKBTAhLCOQgWgFgSgIAi1gbQgOAhADAc");
	this.shape_11.setTransform(-8.5481,27.0263);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],2.9,-5,0,2.9,-5,39.3).s().p("AgwDWQhFgRgLgyIgBgFQgCgOAAgMQAAgMACgLIAFgPIgFAPQgCALAAAMQAAAMACAOQgWgFgSgIQgbgMgSgSIAAgGQASirC5iEQA4gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDIgHAHQgZAcglAWQgXAOgbANIgeAMIAKhTIgKBTIgCAUQAiAWgNAaQgOATgeAAQgPAAgSgFg");
	this.shape_12.setTransform(-3.1217,27.0263);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-86.1,-9.2,0,-86.1,-9.2,23.5).s().p("ABeAZQAbgNAXgNQAkgWAZgcIAHgHQAIAlgTAUIgFAEQAfADgIAbQgNAWgjADIgEABQhDAAgGgigAi7AwQgjgKACgaQABgIADgFQAIgPAbgHQAGAMAJAKIAFAFQASASAbAMQgaARgYAAQgLAAgKgDg");
	this.shape_13.setTransform(-8.4815,36.5014);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#9E451B","#D96D39"],[0.396,0.651],-59.4,2.8,-32.4,2.8).s().p("AgrgVIASANQgQgdALgZIAUAiIAAggQAKAuAsAPQgOAiADAcQhNgbABg5g");
	this.shape_14.setTransform(-31.1264,24.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9E451B").s().p("AhZCVQgJgKgGgMQgFgKgEgKQgDgIAAgJQgDgcAOgiQAUgvA2g7QBPg5BGgTQi4CEgSCrIAAAGIgFgGg");
	this.shape_15.setTransform(-16.1265,21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog2, new cjs.Rectangle(-44.7,-40.2,83.30000000000001,90.1), null);


(lib.dog3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AA2AzQgDgDAAgFIAAgaQAAgEADgEQADgEAEAAQAEAAACAEQADAEAAAEIAAAaQAAAFgDADQgCAEgEAAQgEAAgDgEgAAYAzQgCgDAAgFIAAgaQAAgEACgEQADgEAEAAQAEAAADAEQACAEAAAEIAAAaQAAAFgCADQgDAEgEAAQgEAAgDgEgADGgOQgCgDAAgEIAAgVQAAgDACgEQADgCADAAQACAAADACQACAEAAADIAAAVQAAAEgCADQgDACgCAAQgDAAgDgCgACvgOQgDgDAAgEIAAgVQAAgDADgEQACgCACAAQAEAAACACQACAEAAADIAAAVQAAAEgCADQgCACgEAAQgCAAgCgCgAi6gUQgDgDAAgDIAAgTQAAgEADgCQACgDADAAQACAAADADQACACAAAEIAAATQAAADgCADQgDADgCAAQgDAAgCgDgAjQgUQgCgDAAgDIAAgTQAAgEACgCQACgDADAAQACAAADADQACACAAAEIAAATQAAADgCADQgDADgCAAQgDAAgCgDg");
	this.shape.setTransform(-8.375,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEA9QgJgCgBgFQgBgFAHgGQAIgGAMgCIABgBQAMgCAJACQAKABAAAFQACAGgIAGQgHAFgNADIgGACIgFAAIgLgBgAh1AVQgGgCgDgHQgCgHADgFQADgGAGgCQAHgDAGADQAGADACAFQADAHgDAGQgDAGgGADIgGABQgDAAgEgCgABogcQgGgDgDgHQgCgHADgFQACgHAHgCQAHgDAGADQAGADACAGQADAHgDAGQgDAHgGACIgGABQgEAAgDgBg");
	this.shape_1.setTransform(-2.0453,-13.9042);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTBSQgUgFgCgNQgDgMAPgMQARgNAZgGIADgBQAXgEASAEQAUAFADAMQADAMgQANQgQANgZAGIgKACIgQABQgKAAgJgCgAiCAeQgMgIgDgOQgDgNAHgNQAIgMAOgCQAOgEANAIQALAHAEAPQADANgHANQgJAMgOADIgHABQgKAAgJgGgABdgTQgMgIgDgNQgDgOAIgNQAHgMAOgDQAPgEAMAHQAMAIADAQQADANgHAMQgIAMgOAEIgIABQgKAAgJgGg");
	this.shape_2.setTransform(-1.575,-13.4834);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#423932").ss(1,1,1).p("Ai/ENQBnjMAdiKQAQhOgGg6QgMhxBVgVQBRgUAvA8QAuA1gHBQQgDAwgNAxQgSA9gkA9QiEDehmBO");
	this.shape_3.setTransform(27.7156,-14.2016);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F8AF71","#CD986B"],[0.396,0.729],-26.8,36.2,0,-26.8,36.2,39.3).s().p("AjLE0QAvgcgYgLQBnjMAeiKQAQhOgHg6QgMhxBVgVQBRgUAwA8QAtA1gGBQQgDAwgOAxQgSA9gkA9QiEDehlBOQgQgghWgJgAAmjpQgTAQAAAVQAAAWATAOQASAQAZAAQAZAAASgQQASgOAAgWQAAgVgSgQQgSgOgZAAQgZAAgSAOgAgSklQgHAJAAAMQAAALAHAIQAHAJAKAAQAJAAAHgJQAHgIAAgLQAAgMgHgJQgHgHgJAAQgKAAgHAHgACAkgQgIAHAAALQAAAKAIAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgLgHgHQgHgHgKAAQgKAAgHAHgAAuk5QgJAIAAAMQAAALAJAJQAHAIAMAAQALAAAIgIQAIgJAAgLQAAgMgIgIQgIgIgLAAQgMAAgHAIg");
	this.shape_4.setTransform(26.5656,-14.2016);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBJQgSgPAAgVQAAgWASgPQATgOAYAAQAZAAASAOQASAPAAAWQAAAVgSAPQgSAPgZAAQgYAAgTgPgAhZgTQgIgJAAgLQAAgMAIgIQAHgIAKAAQAKAAAHAIQAHAIgBAMQABALgHAJQgHAJgKAAQgKAAgHgJgAA5gTQgIgHAAgKQAAgLAIgHQAHgHAKAAQAJAAAIAHQAGAHABALQgBAKgGAHQgIAHgJAAQgKAAgHgHgAgZgnQgIgJAAgMQAAgLAIgJQAIgHALAAQAKAAAJAHQAHAJAAALQAAAMgHAJQgJAIgKAAQgLAAgIgIg");
	this.shape_5.setTransform(33.7,-37.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("ACFlUQAMgDAKADQAZAFAUAoQBcACADBMQADBIAkAPQABAAACABQAnAOgLA6QgLA5AdARQAdASgGBBQgCAbgTAVQAQAzgBAiQgJA/g/gMQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQgUgOgCgmQgEgjAQggQAMglgjgmQglglANg9QAHgvgnhBQgng9AdgaQACgDADgCgAitlDQgRgBgMAGQgeAMgOAsQh0AbAUBKQAOBGgoAZQgCAAgCACQgsAYAeA1QAeA2ggAZQggAYAaA+QAKAZAeAPQgHA2ANAgQAcA6BMgdQAVgIAHgKQA0ALAagkQAWgegTgwIgSgeQAVgTgGglQgFgjgegcQgbghAigsQAlgvggg4QgZgqAihKQAdhGgsgSQgDgCgDAAg");
	this.shape_6.setTransform(-3.0533,-3.2069);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E451B").s().p("Ak9DgQhGguAigfQBAgwgwgkQgxgmAQhDQAogZgOhGQgUhLB0gaQAOgsAegMQAMgHARABIAGACQAsASgdBGQgiBKAZArQAgA3glAuQgiAuAbAhQAeAcAFAiQAGAlgVAUQgeBOhIguQAjBNgpAEQhDgEANhbgAE1C+QgsA8gohGQgUgPgCglQgEgjAQghQAMgmgjglQglglANg8QAHgvgnhBQgng9AdgbIAFgEQAMgEAKAEQAZAFAUAoQBcABADBNQADBHAkAPQAbA+geAuQgbAvA7AiQAgAVgrA9QAdBVgxASIgDABQgbAAAJhOg");
	this.shape_7.setTransform(-2.8919,-5.5875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D2808").s().p("AlcDGQgNggAHg2QgegPgKgZQgag+AggXQAggZgeg2Qgeg2AsgYIAEgCQgQBEAxAmQAwAkhAAvQgiAfBGAvQgNBaBDAEQApgDgjhNQBIAtAehOIASAeQATAwgWAeQgaAkg0gLQgHAKgVAIQgZAKgUAAQgpAAgSgngAFICyQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQAoBHAsg9QgKBTAfgFQAxgSgdhWQArg7gggWQg7giAbguQAegwgbg9IADABQAnAOgLA6QgLA6AdARQAdASgGBBQgCAagTAVQAQAzgBAiQgIA1guAAQgIAAgKgCg");
	this.shape_8.setTransform(-3.0533,7.3556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer_6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#423932").ss(1,1,1).p("ABtg5QgrAEgOg1QgFARgGANQgxB1h1heQANAoARAdQArBQA9ALQARABAPgDIABgBQADgCAEgBQBEgegIiAQAUgBAagNAiaglQAXgWAhgG");
	this.shape_9.setTransform(-3.975,5.3475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA3800").s().p("AAkAtQg8gKgshPQBlABAkBVIAAAAIAAABQgLACgMAAIgKAAg");
	this.shape_10.setTransform(-6.7,11.4975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9C0000").s().p("AAyBpQgjhWhmgBQgQgegOgoQB1BeAyh0QAGgOAEgQQAOA1ArgEQAJCAhFAeIgHACg");
	this.shape_11.setTransform(-4.8031,5.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("ABSgpQAxgUA8A0AhdgLQg0gHgtBC");
	this.shape_12.setTransform(-2.975,-22.8659);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_8
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9E451B").s().p("AgsBiQgpgSgQgqQgPgpATgpQASgpAqgPQApgQApASQApAUAPApQAQApgTApQgTApgpAPQgTAHgSAAQgWAAgXgKg");
	this.shape_13.setTransform(-13.4474,-17.4478);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_11
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#423932").ss(1,1,1).p("Aj+A5QAYBtBcA9QBaA8BmgUQACgBADAAQBpgYA7hgQA5hdgZhtQgZhuhbg9QgpgcgsgJQgSgEgTgCQgVgCgWADQgPABgQADQgRAEgPAGQg3ATgoApQgVAVgQAcQg6BeAZBtg");
	this.shape_14.setTransform(-5.3849,-12.0556);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-2,-7.8,0,-2,-7.8,40.1).s().p("AiKDjQhcg9gYhtQgZhtA6heQAQgcAVgVQAogpA3gTQAPgGARgEQAQgDAPgBQAWgDAVACQATACASAEQAsAJApAcQBbA9AZBuQAZBtg5BdQg7BghpAYIgFABQgaAFgZAAQhKAAhDgtg");
	this.shape_15.setTransform(-5.3849,-12.0556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer_10
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#423932").ss(1,1,1).p("Ai1gbQAUgwA2g7QBQg5BFgTQA5gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDQgEADgDAEQgZAcglAWQgXAOgbANQgOAGgQAGIgCAUQAiAWgNAaQgVAcg5gOQhEgRgLgyQAAgDgBgCQgWgFgSgIQgbgMgSgSQgDgDgCgDQgJgKgGgMQgbAHgJAPQgDAGAAAIQgCAaAiAKQAjAKAlgYADVAkQAHAlgTAUQgCADgCACQAeADgHAbQgNAWgkADQhGABgHgiAi1gbQgtgQgKguIAAAgIgUgiQgLAZAQAdIgSgMQgBA4BOAbAi0BHQgFgKgEgKQgDgIAAgJAhLCOQgFgbAFgWQACgIADgHABKAxIgKBTAi1gbQgOAhADAc");
	this.shape_16.setTransform(-8.5481,27.0263);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],2.9,-5,0,2.9,-5,39.3).s().p("AgwDWQhFgRgLgyIgBgFQgCgOAAgMQAAgMACgLIAFgPIgFAPQgCALAAAMQAAAMACAOQgWgFgSgIQgbgMgSgSIAAgGQASirC5iEQA4gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDIgHAHQgZAcglAWQgXAOgbANIgeAMIAKhTIgKBTIgCAUQAiAWgNAaQgOATgeAAQgPAAgSgFg");
	this.shape_17.setTransform(-3.1217,27.0263);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-86.1,-9.2,0,-86.1,-9.2,23.5).s().p("ABeAZQAbgNAXgNQAkgWAZgcIAHgHQAIAlgTAUIgFAEQAfADgIAbQgNAWgjADIgEABQhDAAgGgigAi7AwQgjgKACgaQABgIADgFQAIgPAbgHQAGAMAJAKIAFAFQASASAbAMQgaARgYAAQgLAAgKgDg");
	this.shape_18.setTransform(-8.4815,36.5014);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#9E451B","#D96D39"],[0.396,0.651],-59.4,2.8,-32.4,2.8).s().p("AgrgVIASANQgQgdALgZIAUAiIAAggQAKAuAsAPQgOAiADAcQhNgbABg5g");
	this.shape_19.setTransform(-31.1264,24.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9E451B").s().p("AhZCVQgJgKgGgMQgFgKgEgKQgDgIAAgJQgDgcAOgiQAUgvA2g7QBPg5BGgTQi4CEgSCrIAAAGIgFgGg");
	this.shape_20.setTransform(-16.1265,21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog3, new cjs.Rectangle(-44.7,-50.1,92.7,100), null);


(lib.dog = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AA2AzQgDgDAAgFIAAgaQAAgEADgEQADgEAEAAQAEAAACAEQADAEAAAEIAAAaQAAAFgDADQgCAEgEAAQgEAAgDgEgAAYAzQgCgDAAgFIAAgaQAAgEACgEQADgEAEAAQAEAAADAEQACAEAAAEIAAAaQAAAFgCADQgDAEgEAAQgEAAgDgEgADGgOQgCgDAAgEIAAgVQAAgDACgEQADgCADAAQACAAADACQACAEAAADIAAAVQAAAEgCADQgDACgCAAQgDAAgDgCgACvgOQgDgDAAgEIAAgVQAAgDADgEQACgCACAAQAEAAACACQACAEAAADIAAAVQAAAEgCADQgCACgEAAQgCAAgCgCgAi6gUQgDgDAAgDIAAgTQAAgEADgCQACgDADAAQACAAADADQACACAAAEIAAATQAAADgCADQgDADgCAAQgDAAgCgDgAjQgUQgCgDAAgDIAAgTQAAgEACgCQACgDADAAQACAAADADQACACAAAEIAAATQAAADgCADQgDADgCAAQgDAAgCgDg");
	this.shape.setTransform(-8.375,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEA9QgJgCgBgFQgBgFAHgGQAIgGAMgCIABgBQAMgCAJACQAKABAAAFQACAGgIAGQgHAFgNADIgGACIgFAAIgLgBgAh1AVQgGgCgDgHQgCgHADgFQADgGAGgCQAHgDAGADQAGADACAFQADAHgDAGQgDAGgGADIgGABQgDAAgEgCgABogcQgGgDgDgHQgCgHADgFQACgHAHgCQAHgDAGADQAGADACAGQADAHgDAGQgDAHgGACIgGABQgEAAgDgBg");
	this.shape_1.setTransform(-2.0453,-12.1542);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTBSQgUgFgCgNQgDgMAPgMQARgNAZgGIADgBQAXgEASAEQAUAFADAMQADAMgQANQgQANgZAGIgKACIgQABQgKAAgJgCgAiCAeQgMgIgDgOQgDgNAHgNQAIgMAOgCQAOgEANAIQALAHAEAPQADANgHANQgJAMgOADIgHABQgKAAgJgGgABdgTQgMgIgDgNQgDgOAIgNQAHgMAOgDQAPgEAMAHQAMAIADAQQADANgHAMQgIAMgOAEIgIABQgKAAgJgGg");
	this.shape_2.setTransform(-1.575,-11.7334);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#423932").ss(1,1,1).p("AisDzQBdi5Aah8QAPhHgGg0QgLhmBNgTQBJgSArA2QApAwgGBIQgDAsgMAsQgQA3ghA3Qh2DIhdBH");
	this.shape_3.setTransform(27.1383,-10.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F8AF71","#CD986B"],[0.396,0.729],-24.2,32.7,0,-24.2,32.7,35.5).s().p("Ai3EWQArgZgWgKQBdi5Abh8QAOhHgGg0QgKhmBMgTQBJgSArA2QApAwgGBIQgCAsgMAsQgRA3ggA3Qh4DIhbBHQgOgdhOgIgAAijSQgQAOAAATQAAAUAQANQARAOAXAAQAWAAARgOQAQgNAAgUQAAgTgQgOQgRgNgWAAQgXAAgRANgAgQkIQgGAHAAALQAAAKAGAIQAGAIAKAAQAHAAAHgIQAGgIAAgKQAAgLgGgHQgHgHgHAAQgKAAgGAHgAB0kEQgHAGAAAKQAAAJAHAHQAGAGAKAAQAIAAAHgGQAGgHAAgJQAAgKgGgGQgHgGgIAAQgKAAgGAGgAAqkbQgIAIAAAKQAAAKAIAJQAGAHALAAQAKAAAHgHQAHgJAAgKQAAgKgHgIQgHgHgKAAQgLAAgGAHg");
	this.shape_4.setTransform(26.0883,-10.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBCQgRgNAAgUQAAgTARgOQAQgMAWAAQAWAAARAMQAQAOAAATQAAAUgQANQgRAOgWAAQgWAAgQgOgAhRgRQgGgIAAgKQAAgLAGgHQAHgHAJAAQAIAAAIAHQAFAHAAALQAAAKgFAIQgIAIgIAAQgJAAgHgIgAA0gRQgIgHAAgJQAAgKAIgGQAFgGAKAAQAIAAAHAGQAGAGAAAKQAAAJgGAHQgHAGgIAAQgKAAgFgGgAgWgjQgIgJAAgKQAAgKAIgIQAHgHAKAAQAJAAAHAHQAIAIgBAKQABAKgIAJQgHAHgJAAQgKAAgHgHg");
	this.shape_5.setTransform(32.55,-31.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("ACFlUQAMgDAKADQAZAFAUAoQBcACADBMQADBIAkAPQABAAACABQAnAOgLA6QgLA5AdARQAdASgGBBQgCAbgTAVQAQAzgBAiQgJA/g/gMQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQgUgOgCgmQgEgjAQggQAMglgjgmQglglANg9QAHgvgnhBQgng9AdgaQACgDADgCgAitlDQgRgBgMAGQgeAMgOAsQh0AbAUBKQAOBGgoAZQgCAAgCACQgsAYAeA1QAeA2ggAZQggAYAaA+QAKAZAeAPQgHA2ANAgQAcA6BMgdQAVgIAHgKQA0ALAagkQAWgegTgwIgSgeQAVgTgGglQgFgjgegcQgbghAigsQAlgvggg4QgZgqAihKQAdhGgsgSQgDgCgDAAg");
	this.shape_6.setTransform(-3.0533,-3.2069);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E451B").s().p("Ak9DgQhGguAigfQBAgwgwgkQgxgmAQhDQAogZgOhGQgUhLB0gaQAOgsAegMQAMgHARABIAGACQAsASgdBGQgiBKAZArQAgA3glAuQgiAuAbAhQAeAcAFAiQAGAlgVAUQgeBOhIguQAjBNgpAEQhDgEANhbgAE1C+QgsA8gohGQgUgPgCglQgEgjAQghQAMgmgjglQglglANg8QAHgvgnhBQgng9AdgbIAFgEQAMgEAKAEQAZAFAUAoQBcABADBNQADBHAkAPQAbA+geAuQgbAvA7AiQAgAVgrA9QAdBVgxASIgDABQgbAAAJhOg");
	this.shape_7.setTransform(-2.8919,-5.5875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D2808").s().p("AlcDGQgNggAHg2QgegPgKgZQgag+AggXQAggZgeg2Qgeg2AsgYIAEgCQgQBEAxAmQAwAkhAAvQgiAfBGAvQgNBaBDAEQApgDgjhNQBIAtAehOIASAeQATAwgWAeQgaAkg0gLQgHAKgVAIQgZAKgUAAQgpAAgSgngAFICyQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQAoBHAsg9QgKBTAfgFQAxgSgdhWQArg7gggWQg7giAbguQAegwgbg9IADABQAnAOgLA6QgLA6AdARQAdASgGBBQgCAagTAVQAQAzgBAiQgIA1guAAQgIAAgKgCg");
	this.shape_8.setTransform(-3.0533,7.3556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer_6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#423932").ss(1,1,1).p("ABjgzQgnADgNgwQgEAPgGAMQgsBqhrhVQANAkAPAbQAnBIA3AKQAPABAOgDIABgBQADgBADgBQA+gbgHh0QASgCAYgMAiMghQAVgVAegF");
	this.shape_9.setTransform(-3.725,5.8475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA3800").s().p("AAhApQg3gKgnhHQBcABAfBNIABAAIgBABQgKACgKAAIgJAAg");
	this.shape_10.setTransform(-6.2,11.4225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9C0000").s().p("AAtBfQgghOhcgBQgPgagMglQBqBVAthqQAFgMAEgPQANAxAngEQAIB0g+AbIgHACg");
	this.shape_11.setTransform(-4.4845,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("ABSgpQAxgUA8A0AhdgLQg0gHgtBC");
	this.shape_12.setTransform(-2.975,-18.9159);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_8
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9E451B").s().p("AgsBiQgpgSgQgqQgPgpATgpQASgpAqgPQApgQApASQApAUAPApQAQApgTApQgTApgpAPQgTAHgSAAQgWAAgXgKg");
	this.shape_13.setTransform(-13.4474,-15.6978);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_11
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#423932").ss(1,1,1).p("Aj+A5QAYBtBcA9QBaA8BmgUQACgBADAAQBpgYA7hgQA5hdgZhtQgZhuhbg9QgpgcgsgJQgSgEgTgCQgVgCgWADQgPABgQADQgRAEgPAGQg3ATgoApQgVAVgQAcQg6BeAZBtg");
	this.shape_14.setTransform(-5.3849,-12.0556);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-2,-7.8,0,-2,-7.8,40.1).s().p("AiKDjQhcg9gYhtQgZhtA6heQAQgcAVgVQAogpA3gTQAPgGARgEQAQgDAPgBQAWgDAVACQATACASAEQAsAJApAcQBbA9AZBuQAZBtg5BdQg7BghpAYIgFABQgaAFgZAAQhKAAhDgtg");
	this.shape_15.setTransform(-5.3849,-12.0556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer_10
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#423932").ss(1,1,1).p("Ai1gbQAUgwA2g7QBQg5BFgTQA5gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDQgEADgDAEQgZAcglAWQgXAOgbANQgOAGgQAGIgCAUQAiAWgNAaQgVAcg5gOQhEgRgLgyQAAgDgBgCQgWgFgSgIQgbgMgSgSQgDgDgCgDQgJgKgGgMQgbAHgJAPQgDAGAAAIQgCAaAiAKQAjAKAlgYADVAkQAHAlgTAUQgCADgCACQAeADgHAbQgNAWgkADQhGABgHgiAi1gbQgtgQgKguIAAAgIgUgiQgLAZAQAdIgSgMQgBA4BOAbAi0BHQgFgKgEgKQgDgIAAgJAhLCOQgFgbAFgWQACgIADgHABKAxIgKBTAi1gbQgOAhADAc");
	this.shape_16.setTransform(-8.5481,27.0263);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],2.9,-5,0,2.9,-5,39.3).s().p("AgwDWQhFgRgLgyIgBgFQgCgOAAgMQAAgMACgLIAFgPIgFAPQgCALAAAMQAAAMACAOQgWgFgSgIQgbgMgSgSIAAgGQASirC5iEQA4gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDIgHAHQgZAcglAWQgXAOgbANIgeAMIAKhTIgKBTIgCAUQAiAWgNAaQgOATgeAAQgPAAgSgFg");
	this.shape_17.setTransform(-3.1217,27.0263);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-86.1,-9.2,0,-86.1,-9.2,23.5).s().p("ABeAZQAbgNAXgNQAkgWAZgcIAHgHQAIAlgTAUIgFAEQAfADgIAbQgNAWgjADIgEABQhDAAgGgigAi7AwQgjgKACgaQABgIADgFQAIgPAbgHQAGAMAJAKIAFAFQASASAbAMQgaARgYAAQgLAAgKgDg");
	this.shape_18.setTransform(-8.4815,36.5014);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#9E451B","#D96D39"],[0.396,0.651],-59.4,2.8,-32.4,2.8).s().p("AgrgVIASANQgQgdALgZIAUAiIAAggQAKAuAsAPQgOAiADAcQhNgbABg5g");
	this.shape_19.setTransform(-31.1264,24.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9E451B").s().p("AhZCVQgJgKgGgMQgFgKgEgKQgDgIAAgJQgDgcAOgiQAUgvA2g7QBPg5BGgTQi4CEgSCrIAAAGIgFgGg");
	this.shape_20.setTransform(-16.1265,21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog, new cjs.Rectangle(-44.7,-42.9,90.2,92.8), null);


(lib.boxflapright = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AiwgNIESiBIBPCbIkhCCg");
	this.shape.setTransform(17.7,14.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#018EFA").s().p("AiwgNIESiBIBPCbIkhCCg");
	this.shape_1.setTransform(17.7,14.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boxflapright, new cjs.Rectangle(-1,-1,37.4,30.7), null);


(lib.boxflapleft = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AkiAJIB6iNIHLB0IhvCVg");
	this.shape.setTransform(29.125,13.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#018EFA").s().p("AkiAJIB6iNIHLB0IhvCVg");
	this.shape_1.setTransform(29.125,13.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boxflapleft, new cjs.Rectangle(-1,-1,60.3,28.7), null);


(lib.box = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ABODDIBxgwIAzgWIBEgeIA6khABODDIAPkEAlvi2IApEWICQAkIBEARIDAAu");
	this.shape.setTransform(36.75,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFC0F").s().p("AjbCGIgXkQIBFASIAXEPgAC4h6IA7gcIgmEVIgzAWg");
	this.shape_1.setTransform(40.425,19.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#018EFA").s().p("AhyCVIgWkQIDkA6ICAg8IgdEPIhyAxIAPkEIgPEEgAlFBhIgqkWICiAoIAXERgAEYiZIBYgpIg6EhIhEAeg");
	this.shape_2.setTransform(36.75,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-1,-1,75.5,41), null);


(lib.black = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AlvgHIElhlIG6BZIkUCAg");
	this.shape.setTransform(36.75,10.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,73.5,21.8), null);


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

	// flapright
	this.instance = new lib.boxflapright();
	this.instance.setTransform(25.35,23.1,1.0198,0.925,-1.9759,0,0,17.8,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({regX:17.7,regY:14.3,scaleX:1,scaleY:0.935,rotation:0,x:24.85,y:24.8},3).to({regX:17.8,regY:14.4,scaleX:1.0198,scaleY:0.925,rotation:-1.9759,x:25.35,y:23.1},3).wait(20).to({regX:17.7,regY:14.3,scaleX:1,scaleY:0.935,rotation:0,x:24.85,y:24.8},0).to({regX:17.8,regY:14.4,scaleX:1.0198,scaleY:0.925,rotation:-1.9759,x:25.35,y:23.1},4).wait(11));

	// flapleft
	this.instance_1 = new lib.boxflapleft();
	this.instance_1.setTransform(-22,23.9,1,1,0,0,0,29.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({regY:13.5,scaleX:0.9999,scaleY:1.0807,skewX:-2.3687,skewY:-2.0709,x:-21.65,y:26.8},3).to({regY:13.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-22,y:23.9},3).wait(20).to({regY:13.5,scaleX:0.9999,scaleY:1.0807,skewX:-2.3687,skewY:-2.0709,x:-21.65,y:26.8},0).to({regY:13.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-22,y:23.9},4).wait(11));

	// box
	this.instance_2 = new lib.box();
	this.instance_2.setTransform(-2.05,28.85,1,1,0,0,0,36.8,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({regY:19.6,scaleY:0.865,y:29.55},3).wait(23).to({regY:19.5,scaleY:1,y:28.85},4).wait(11));

	// dog
	this.instance_3 = new lib.dog2();
	this.instance_3.setTransform(2.55,21.2,0.496,0.496,0,0,0,0.3,3.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.dog();
	this.instance_4.setTransform(2.7,5.75,0.784,0.784,0,0,0,0.5,3.6);

	this.instance_5 = new lib.dog3();
	this.instance_5.setTransform(2.7,5.75,0.784,0.784,0,0,0,0.5,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},4).to({state:[]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({regX:0.5,regY:3.6,scaleX:0.784,scaleY:0.784,x:2.7,y:5.75},6).to({_off:true},5).wait(18).to({_off:false},0).to({regX:0.3,regY:3.5,scaleX:0.496,scaleY:0.496,x:2.55,y:21.2},4).to({_off:true},1).wait(10));

	// black
	this.instance_6 = new lib.black();
	this.instance_6.setTransform(-2.05,11.3,1,1,0,0,0,36.8,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({regY:10.9,scaleY:0.8322,y:13.25},3).wait(23).to({regY:10.8,scaleY:1,y:11.3},4).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-35.9,96.3,84.8);


// stage content:
(lib.bd_surprise = function(mode,startPosition,loop,reversed) {
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

	// Layer_1
	this.instance = new lib.anim();
	this.instance.setTransform(49.1,77.4,0.9103,0.9103,0,0,0,-3.6,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(55.4,105.4,37.300000000000004,-6);
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