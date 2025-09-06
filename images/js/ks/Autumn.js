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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.569)").ss(0.5,1,1).p("AgToNIAAkFQAAgPAGgLQAGgLAHAAIABAAQAIAAAFALQAGALAAAPIAABVIAAD8IAAD8QgQCFgXArIAAj9gAgTHSIAAj8IAAjrAgTK+QAIgQAIgbQAMgwALhVIAAEFQAAAQgGALQgFAKgIAAIgBAAQgHAAgGgKQgGgLAAgQIAAhVIAAjsAAUAlIAAD9IAADsAAUq9QgQCFgXArAAUnBQgQCFgXAqAAUEiQgQCFgXArAgTDWQAXgsAQiFAAUjFIAADq");
	this.shape.setTransform(0,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#990000","#660000"],[0,1],-1.9,-67.5,2,-67.5).s().p("AAAM4QgHAAgGgKQgGgMAAgPIAAhVIAAjsIAAj8QAWgrARiFIAAD8QgRCFgWArQAWgrARiFIAADrQgLBWgMAxQgHAagJAQQAJgQAHgaQAMgxALhWIAAEGQAAAPgGAMQgGAKgHAAgAAUINgAAUEigAgTgVIAAj9IAAj7QAWgrARiFIAAD8QgRCFgWAqQAWgqARiFIAAD8QgRCFgWArQAWgrARiFIAADrQgRCFgWArgAgTsSQAAgPAGgLQAGgLAHAAIABAAQAHAAAGALQAGALAAAPIAABVQgRCFgWArgAAUq9g");
	this.shape_1.setTransform(0,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-80.6,5.9,166.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.569)").ss(0.5,1,1).p("AAXorIAAkUQAAgQgHgLQgGgMgKAAIAAAAQgJAAgGAMQgHALAAAQIAABaIAAEKIAAELIAAD4IAAELIAAD4IAAEVQAAAQAHAMQAGALAJAAIAAAAQAKAAAGgLQAHgMAAgQIAAhbIAAj5IAAkKIAAj4IAAkLgAgWrlQATCMAaAuAAXkhQgagtgTiNAgWjQQATCMAaAuAAXLlQgagtgTiNAAXHsQgagugTiLAAXDiQgagugTiM");
	this.shape.setTransform(0,1.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#990000","#660000"],[0,1],-2.2,-51.6,2.3,-51.6).s().p("AAANnQgIAAgHgLQgGgMgBgQIAAkVQATCNAaAtIAABbQgBAQgGAMQgHALgJAAgAAXLlQgagtgTiNIAAj4IAAkLQATCMAaAuQgagugTiMIAAj4QATCMAaAuQgagugTiMIAAkLQATCNAaAtQgagtgTiNIAAkKIAAhaQABgQAGgLQAHgMAIAAIAAAAQAJAAAHAMQAGALABAQIAAEUQgagugTiMQATCMAaAuIAAEKIAAELIAAD4IAAEKQgagugTiLQATCLAaAuIAAD5IAAAAg");
	this.shape_1.setTransform(0,1.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-86.7,6.5,176.2);


(lib.Tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC00","#B4B300","#669900"],[0,0.341,1],-8.6,4.2,0,-8.6,4.2,88.5).s().p("AicEhQgdgDgRgqQgRgpiegtIgXgJQgYgIgwAMQgxALgDgWQgDgWhhAUQAdivA/j+QAjDdgICvQAnh5BAhLQg+BhBcCKQBakFBuhAQhtBdBnD3QApjCA5gjQA3EQADhVQBoiihtiDQB7CBBuDKQA8htBZhrQhRBnB8BqQBJjDhRi4QBmCkCFEMQiHghhpAhIAAgBQhsAZg2gfQjqgag8BNQgoArgkAAIgJgBg");
	this.shape.setTransform(209.85,357.5571);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCC00","#666600"],[0,1],207,386.7,207,386.7).s().p("AgFABIAIgCIADADg");
	this.shape_1.setTransform(207.0375,386.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#000000","#663300"],[0,1],0,0,0,0,0,7.3).s().p("AAGA8QgHgtgdAiQgUgGgJgUQgLgUAGgVIAAgBQAFgWASgMQARgLAUAFIAkALQATAGAKAUQAKAUgFAWIAAAAQgGAXgRALQgMAIgMAAQgHAAgGgCg");
	this.shape_2.setTransform(128.0417,137.0889);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000000","#663300"],[0,1],0,0,0,0,0,8.2).s().p("AgUA6QgWAAgPgRQgQgRAAgYIAAAAQAAgXAQgRQAPgRAWAAIAoAAQAWAAAQARQAQARAAAXIAAAAQAAAYgQARQgQARgWAAQgXg4gRA4g");
	this.shape_3.setTransform(72.025,128.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#660000","#410000","#000000"],[0,0.404,1],-18.1,0.1,0,-6.4,0.1,34.5).s().p("AiYEqQBDkRASlNQBXAIA/BRQBGBbAACAQAACAhGBaQhGBbhjAAQgjABgfgMg");
	this.shape_4.setTransform(200.8,263.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#660000"],[0,1],-152.2,0,152.3,0).s().p("AgjciQD9kjBynUQAgAMAiAAQBkAABGhbQBGhbAAiAQAAiBhGhbQg/hRhXgIQAJilgCizQkLjIjJksQoujIk1AtQkfjRlFDSQD3j5EFB9QA6gtj7mEQE4D3gVDyQFtgyG0CjQjKj1hhj/QCBCaCZB3IBRj/QgXDRBADRQDRFjEKBkQAQl1gwliIkji2IDaAbQgYmjiSnPQDjF9BwHaQCaikBZi2IgxkIIBpCbIDSk2QiBHjkzGHQCSIGgJFRQBqAkEal1QCBksDKj1QhJB/ggB2ICpg2IjaD1QhYBkgYBbIE7gkIkcB/QjRBkjaCjQgIJqCBKiQBhE+CRC2Qj5AXkAAAQlUAAldgpg");
	this.shape_5.setTransform(152.25,186.7316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tree, new cjs.Rectangle(0,0,304.5,386.9), null);


(lib.shoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AAYAaQgCgrgdgUQgdgTgEgBQgEgCAEgGQAFgGAgAMQAfALAJAhQAJAggEAYQgDAXgHADIAAABQgGAAgCgqg");
	this.shape.setTransform(12.5829,10.7081);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#666666","#000000"],[0,1],-11.8,3.1,0,-0.2,3.1,11.9).s().p("AhSBMQgFgVAAgZQAAg4AbgaQAbgaAkADQAkACAYAYQAZAXAAA4QAAAZgFAVg");
	this.shape_1.setTransform(8.8,10.6142);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#666666","#000000"],[0,1],-8.3,-2,0,-1.8,-2,8.1).s().p("Ag+gIQgGgKgFgMICTAAQgFAMgHAKQgaAngkAAQgkAAgagng");
	this.shape_2.setTransform(8.8,24.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhSgLQBSgIBTAIQgDANgGANIiTABQgGgNgDgOg");
	this.shape_3.setTransform(8.8,19.4119);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSBMQgFgVAAgZQAAg4AbgaQAbgaAkADQAkACAYAYQAZAXAAA4QAAAZgFAVQhTgIhSAIg");
	this.shape_4.setTransform(8.8,10.6142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoes, new cjs.Rectangle(0,3,17.6,24.2), null);


(lib.mbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,0,0,0)").s().p("As0GDIAAsFIZpAAIAAMFg");
	this.shape.setTransform(82.125,38.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mbox, new cjs.Rectangle(0,0,164.3,77.3), null);


(lib.leaf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(243,145,0,0.529)","rgba(255,153,0,0.439)","rgba(255,255,0,0.71)"],[0,0.345,1],-138.4,1.9,138.5,1.9).s().p("AElHFQklhPkjBPQhuAEhZA8IAAgnQhZAghagmQA+gPAAg1QiZAGiYgxIAcgoQhfgHhHgqIAFgXQg7AGhGgXIAUgkQh1AChxgsQBtgmCCACIgEgbQBGgHAqAHIAAgdQBjgNA9AWQBUgCggg8Qhahch5hPIAogNQhigkhBhFIAjgVQhOgrgbguQgNgVgCgWQAbAaAbAQQAeARAfAGIAAggQALAFALACQAUADAWgEIATgGQgNgWgXgWIARgDQDHiEEhB7IACAVIAPgqIAKAVQAPAeANAWQAiA5ATgEQAjgJACgtQABgWgGgfQACAADKBYQDKBXDohSQDphRAFgNQgGAfABAWQABAuAjAJQAUAEAjg7QAMgWAPgeIAJgTIAPAqIACgXQCag+CaANQCaAOAwAsQgbAYgOAZIAIADQAhAKAfgJIALgEIAAAgQAhgGAggUQAZgPAZgYQgCAUgLAUQgaAwhRAsIAjAVQhBBFhiAkIAoANQh5BPhaBcQggA8BUACQA9gWBjANIAAAdQAqgHBGAHIgEAbQCCgCBtAmQhxAsh1gCIAUAkQhGAXg7gGIAFAXQhHAqhfAHIAcAoQiYAxiZgGQAAA1A+APQhaAmhZggIAAAnQhZg8htgEg");
	this.shape.setTransform(138.475,51.646);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf2, new cjs.Rectangle(0,0,277,103.3), null);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF00","#DB5D00","#AF0000","#FFFF00"],[0,0.294,0.62,1],-138.4,0,138.5,0).s().p("AElPdQklhQkjBQQhuAEhZA8IAAgnQhZAfhaglQA+gPAAg1QiZAFiYgwIAcgpQhfgGhHgqIAFgXQg7AFhGgXIAUgkQh1AChxgrQBtgnCCADIgEgbQBGgHAqAHIAAgdQBjgNA9AVQBUgCggg7Qhaheh5hPIAogMQhigkhBhFIAjgVQhyg/gGhGQA4A3A7AKIAAgfQAnAQAsgQQgig8htg5IBAgDQhpgXgMhIQAuARAbgRIg8hKIA5AJQgpglgDgqQAeAXAZgPQhShYgfjWQBuCLB2BsIAAg3QA0AfAgA4QApgKgGgxQAzAoAFBYIAQgwQAbBcA4AMQArADAWhWQAuAsgNBMIAZgqQAZA7gCA1IAZgtQAUBNAGBLIAPgrQA+CEAdgFQA4gPgchrQgbhQgsg7QAYALATgLQg8g5gShCIA8AfQgahHgsg4IBCAYQgjhNgsg6IA1AIIhIhlIAjAbQATgIgCgkQgtg8gsghIAagLQgfg8g2g8QBOAtA8A+IAAgiIBGBIIAAgeICRB4QAdgtgHgtIgZAUIgKgoQAegPgKgZIgPgUQgLgmAMgnQAZAuA0AEIAZAAQgKgpAUgRQATgSASASQgMgjAMgjIAcAUIAlhdIAPAbQAkhqBKhFQBLBFAkBqIAPgbIAmBdIAbgUQAMAjgMAjQATgSATASQAUARgKApIAZAAQAzgEAaguQAMAngMAmIgPAUQgJAZAdAPIgKAoIgZgUQgGAtAdAtICRh4IAAAeIBGhIIAAAiQA7g+BOgtQg2A8gfA8IAaALQgsAhgsA8QgDAkATAIIAjgbIhHBlIA0gIQgrA6gjBNIBCgYQgtA4gZBHIA8gfQgSBCg9A5QATALAZgLQgtA7gaBQQgcBrA3APQAeAFA9iEIAPArQAGhLAUhNIAZAtQgCg1AZg7IAZAqQgNhMAugsQAWBWArgDQA4gMAbhcIAQAwQAFhYAzgoQgGAxApAKQAgg4A0gfIAAA3QB2hsBuiLQgfDWhSBYQAZAPAegXQgDAqgpAlIA5gJIg8BKQAbARAugRQgMBIhpAXIBAADQhtA5giA8QAsAQAngQIAAAfQA7gKA4g3QgGBGhyA/IAjAVQhBBFhiAkIAoAMQh5BPhaBeQggA7BUACQA9gVBjANIAAAdQAqgHBGAHIgEAbQCCgDBtAnQhxArh1gCIAUAkQhGAXg7gFIAFAXQhHAqhfAGIAcApQiYAwiZgFQAAA1A+APQhaAlhZgfIAAAnQhZg8htgEg");
	this.shape.setTransform(138.475,105.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf1, new cjs.Rectangle(0,0,277,210.5), null);


(lib.handobj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTArIgVAFIADgjQACgcANgYQAMgWALAAQAMABATAQQAJAaAAAXIgCAeIgVAFIAAAIIgSACIAAAMIgRAAg");
	this.shape.setTransform(4.075,6.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handobj, new cjs.Rectangle(0,0,8.2,12.5), null);


(lib.dots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgyOglkIAAB4EAyPAllIAAhQ");
	this.shape.setTransform(321.475,240.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dots, new cjs.Rectangle(-1,-1,645,483), null);


(lib.ChatterB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AABBQQgzgBAAgKQgBghASgZQAPgVARgBQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQANAAAKAKQAKAKAAAOQAAAOgKAKQgJAJgMABQASAAAPAXQAPAZACAhQABAKgsAAIgHAAg");
	this.shape.setTransform(30.1713,47.3428,5.9167,5.9156);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ChatterB, new cjs.Rectangle(0,0,60.4,94.7), null);


(lib.auch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AgOB+QgGgHAAgIQAAgIAGgGQAGgHAIAAQAIAAAGAHQAGAGAAAIQAAAIgGAHQgGAFgIAAQgIAAgGgFgAgDA8IgQiWIgBgOQAAgMAGgHQAGgHAIAAQAJAAAGAHQAGAHAAAOIgBAMIgQCWg");
	this.shape.setTransform(188.525,-63.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFCFC").s().p("AAJCEIAAgGIAEAAQAMAAAFgEQAEgEACgHIAAgSIAAg8QAAgbgCgIQgDgJgHgEQgGgFgJAAQgJABgJAEQgJAFgOAOIAABZQAAASACAFQACADAFADQAGAEAMAAIAAAGIhUAAIAAgGQALAAAHgEQADgCADgGQACgFAAgQIAAiYQAAgegCgGQgBgHgCgCQgEgDgEABIgNACIgDgGIA0gVIAIAAIAAB9QAUgXAMgGQALgHANAAQAOAAALAIQAKAIAFARQADALABAfIAAA8QgBAQADAHQACAEAFACQADAEANAAIAAAGg");
	this.shape_1.setTransform(172.7,-64.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFCFC").s().p("AgxBCQgVgYAAgqQgBgnAYgZQAYgZAhAAQAYAAARANQAQANAAAPQAAAHgFAFQgEADgJAAQgLABgFgIQgDgDgBgLQgBgLgGgGQgHgGgLAAQgSAAgLAOQgQASABAeQgBAdAQAYQAPAXAYABQASAAAPgNQAJgJALgWIAEACQgGAigUASQgUASgYAAQgdAAgVgYg");
	this.shape_2.setTransform(154.8,-59.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFCFC").s().p("AAjBXIAAgkQgWAYgLAHQgKAFgNAAQgOAAgLgHQgKgJgFgNQgEgNAAgYIAAhKQAAgMgDgFQgCgFgFgCQgFgDgNABIAAgIIA7AAIAAByQAAAXAIAHQAJAIALAAQAHAAAKgFQALgFANgOIAAhfQAAgPgFgFQgGgFgQAAIAAgIIA6AAIAABmQAAAeACAGQAAAHAEADQADACAEABQAGgBAHgDIADAGIgzAVg");
	this.shape_3.setTransform(136.85,-59.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFCFC").s().p("AhXBfQgjglAAg6QAAg8AogmQAkghAwAAQAxAAAkAmQAkAlAAA3QAAA5gkAmQgkAmgzAAQg0AAgjglgAg2hcQgaAfAAA8QAAA9AaAhQAVAZAhAAQAiAAAYgbQAXgcAAg8QAAg/gaggQgUgZgjAAQgiAAgUAZg");
	this.shape_4.setTransform(113.625,-63.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF6600","#990000"],[0,1],-42.9,-44.6,37.1,35).s().p("AhyBFQi1BQh/hLQilhfAmiJQAliICXgnQCWgnDbAJQDbAJCdAeQCeAeAOCFQAOCFiBBPQiCBQjegzQBCD3knAnQCkgliKkEg");
	this.shape_5.setTransform(147.8149,-51.9594);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.auch, new cjs.Rectangle(92.1,-88.5,111.5,73.1), null);


(lib.apple2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FF0000","#FF8F00","#FFCC00"],[0,0.275,0.8,1],-161.1,-61.3,0,-19.2,-61.3,247.8).s().p("A8VOeQpDslCzvYQD0tUOejQQGrhQItHHIAqAjIgEgbICrAjQFzgxFZjlQU/kXAvcHQiLQisXLHQkpGfoVgZQlGi+mTADQivBQilCTQqhioo3tKg");
	this.shape.setTransform(225.6115,278.3764);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AEYJcQhZo4qCpcIFKhGQGlJMCYKxg");
	this.shape_1.setTransform(195.45,63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.apple2, new cjs.Rectangle(0,0,451.2,472), null);


(lib.apple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AEcJyQhOpEqRpqIFKhHQGlJNCYKxQgtAFguADg");
	this.shape.setTransform(195.45,64.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FF0000","#FF0000"],[0,0.463,1],-166.2,-89.3,0,-25.2,-89.3,246.3).s().p("A8VOeQpDslCzvYQD0tUOejQQG7hTJHHtIAXAUIA2gDQAtgDAtgGQFzgxFZjlQU/kXAvcHQiLQisXLHQkpGfoVgZQlGi+mTADQivBQilCTQqhioo3tKg");
	this.shape_1.setTransform(225.6115,278.3765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.apple, new cjs.Rectangle(0,0,451.2,472), null);


(lib.thumbsup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AASAoIAVgFIACgeQAAgXgJgaQgTgQgMgBQgLAAgMAWQgNAYgCAcIgDAjIAVgFQAAgFACghAAAAyQAAgaAAgTAASAEIAAAkIAAAIIgSACAgTArIACATIARAAIAAgM");
	this.shape.setTransform(4.075,6.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.handobj();
	this.instance.parent = this;
	this.instance.setTransform(4,6.2,1,1,0,0,0,4,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.thumbsup, new cjs.Rectangle(-1,-1,10.2,14.5), null);


(lib.pawn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAAAIAAAA");
	this.shape.setTransform(29.6479,40.7837,5.9167,5.9156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgDgtQACgNAKgFAgNBAQADgqAXgQ");
	this.shape_1.setTransform(21.5125,47.8824,5.9167,5.9156);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.651)").ss(1,1,1,3,true).p("AgBgLQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQANAAAKAKQAKAKAAAOQAAAOgKAKQgJAJgMABQASAAAPAXQAPAZACAhQABALgzgBQgygBgBgKQAAghARgZQAQgVAQgBg");
	this.shape_2.setTransform(30.6807,47.9081,5.9167,5.9156);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.412)","rgba(1,49,152,0)"],[0,1],2.6,1.9,0,2.6,1.9,9.7).s().p("AABAuQgygBgBgKQAAghARgYQAQgWAQgBIABAAIABAAQASAAAPAYQAPAYACAhQAAAKgqAAIgIAAgAgcAeQADgqAYgPQgYAPgDAqg");
	this.shape_3.setTransform(30.6807,68.021,5.9167,5.9156);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(0,0,0,0.424)","rgba(1,49,152,0)"],[0,1],1.5,1.3,0,1.5,1.3,5).s().p("AABAiIgBAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgJAJgMABIgCAAgAgQABQACgMALgGQgLAGgCAMg");
	this.shape_4.setTransform(29.5,20.6707,5.9167,5.9156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.col0 = new lib.ChatterB();
	this.col0.name = "col0";
	this.col0.parent = this;
	this.col0.setTransform(5.65,8.55,0.9992,1,0,0,0,5.2,8.1);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

}).prototype = getMCSymbolPrototype(lib.pawn, new cjs.Rectangle(-0.5,-0.4,62.4,96.7), null);


(lib.Message = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mbox = new lib.mbox();
	this.mbox.name = "mbox";
	this.mbox.parent = this;
	this.mbox.setTransform(82.1,22.1,1,1,0,0,0,82.1,36.3);

	this.timeline.addTween(cjs.Tween.get(this.mbox).wait(1));

}).prototype = getMCSymbolPrototype(lib.Message, new cjs.Rectangle(0,-14.2,164.3,77.3), null);


(lib.leagan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.thumbsup();
	this.instance.parent = this;
	this.instance.setTransform(5.2,131.75,2.2828,1.468,0,-90,90,4,6.2);

	this.instance_1 = new lib.thumbsup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.75,131.55,2.2828,1.5226,90,0,0,4,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.instance_2 = new lib.shoes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.3,165.55,1.0227,1,0,0,180,8.8,15.1);

	this.instance_3 = new lib.shoes();
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.9,164.2,1,1,0,0,0,8.8,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 3
	this.instance_4 = new lib.pawn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.6,85.6,0.9991,0.9995,0,0,0,5.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#990000","#660000"],[0,0.639],0,0,0,0,0,36.2).s().p("AlIAxQglg2AJgxQFkAtFmgmQAFAygpA0QlQgyk6Asg");
	this.shape.setTransform(37.8832,175.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leagan, new cjs.Rectangle(-4.2,77.5,82.8,103.19999999999999), null);


(lib.leaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.161)","rgba(255,255,255,0.149)"],[0,1],-138.4,0,138.5,0).s().p("AElPdQklhQkjBQQhuAEhZA8IAAgnQhZAfhaglQA+gPAAg1QiZAFiYgwIAcgpQhfgGhHgqIAFgXQg7AFhGgXIAUgkQh1AChxgrQBtgnCCADIgEgbQBGgHAqAHIAAgdQBjgNA9AVQBUgCggg7Qhaheh5hPIAogMQhigkhBhFIAjgVQhyg/gGhGQA4A3A7AKIAAgfQAnAQAsgQQgig8htg5IBAgDQhpgXgMhIQAuARAbgRIg8hKIA5AJQgpglgDgqQAeAXAZgPQhShYgfjWQBuCLB2BsIAAg3QA0AfAgA4QApgKgGgxQAzAoAFBYIAQgwQAbBcA4AMQArADAWhWQAuAsgNBMIAZgqQAZA7gCA1IAZgtQAUBNAGBLIAPgrQA+CEAdgFQA4gPgchrQgbhQgsg7QAYALATgLQg8g5gShCIA8AfQgahHgsg4IBCAYQgjhNgsg6IA1AIIhIhlIAjAbQATgIgCgkQgtg8gsghIAagLQgfg8g2g8QBOAtA8A+IAAgiIBGBIIAAgeICRB4QAdgtgHgtIgZAUIgKgoQAegPgKgZIgPgUQgLgmAMgnQAZAuA0AEIAZAAQgKgpAUgRQATgSASASQgMgjAMgjIAcAUIAlhdIAPAbQAkhqBKhFQBLBFAkBqIAPgbIAmBdIAbgUQAMAjgMAjQATgSATASQAUARgKApIAZAAQAzgEAaguQAMAngMAmIgPAUQgJAZAdAPIgKAoIgZgUQgGAtAdAtICRh4IAAAeIBGhIIAAAiQA7g+BOgtQg2A8gfA8IAaALQgsAhgsA8QgDAkATAIIAjgbIhHBlIA0gIQgrA6gjBNIBCgYQgtA4gZBHIA8gfQgSBCg9A5QATALAZgLQgtA7gaBQQgcBrA3APQAeAFA9iEIAPArQAGhLAUhNIAZAtQgCg1AZg7IAZAqQgNhMAugsQAWBWArgDQA4gMAbhcIAQAwQAFhYAzgoQgGAxApAKQAgg4A0gfIAAA3QB2hsBuiLQgfDWhSBYQAZAPAegXQgDAqgpAlIA5gJIg8BKQAbARAugRQgMBIhpAXIBAADQhtA5giA8QAsAQAngQIAAAfQA7gKA4g3QgGBGhyA/IAjAVQhBBFhiAkIAoAMQh5BPhaBeQggA7BUACQA9gVBjANIAAAdQAqgHBGAHIgEAbQCCgDBtAnQhxArh1gCIAUAkQhGAXg7gFIAFAXQhHAqhfAGIAcApQiYAwiZgFQAAA1A+APQhaAlhZgfIAAAnQhZg8htgEg");
	this.shape.setTransform(138.475,105.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.leaf2();
	this.instance.parent = this;
	this.instance.setTransform(138.5,158.8,1,1,0,0,0,138.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.leaf1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.5,105.2,1,1,0,0,0,138.5,105.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AldGNQAchmBagiQEjk+DJk/QAiAKA3geIpiMZQgKguhPAug");
	this.shape_1.setTransform(117.125,222.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf, new cjs.Rectangle(0,0,277,261.8), null);


(lib.Pawnmove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leagan();
	this.instance.parent = this;
	this.instance.setTransform(245.05,7.6,0.8295,0.7269,0,0,0,37.1,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},10).to({scaleX:1.1696,scaleY:0.9002},10).to({scaleX:1,scaleY:1},10).to({scaleX:0.8295,scaleY:0.7269},10).to({scaleX:1,scaleY:1},10).to({scaleX:1.1696,scaleY:0.9002},11).to({regX:37.2,regY:-6.2,scaleX:1.1526,scaleY:0.9101,x:245.2,y:7.75},1).to({regX:37.1,regY:-6.4,scaleX:1,scaleY:1,x:245.05,y:7.6},9).to({scaleX:0.8295,scaleY:0.7269},14).to({scaleX:0.8863,scaleY:0.8179,x:245.15},11).wait(79));

	// Layer 2
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(218,10.9,0.7823,0.7171,0,-0.6718,0,0.1,-88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleY:0.9958,skewX:1.5401,x:217.45},10).to({regX:-0.1,scaleY:0.8954,skewX:3.4185,x:217.1,y:10.95},10).to({regX:0,scaleY:0.9958,skewX:1.5401,x:217.45,y:10.9},10).to({regX:0.1,scaleY:0.7171,skewX:-0.6718,x:218},10).to({regX:0,scaleY:0.9958,skewX:1.5401,x:217.45},10).to({regX:-0.1,scaleY:0.8954,skewX:3.4185,x:217.1,y:10.95},11).to({regX:0,scaleY:0.9958,skewX:1.5401,x:217.45,y:10.9},10).to({regX:0.1,scaleY:0.7171,skewX:-0.6718,x:218},14).to({regY:-88.5,scaleY:0.81,rotation:0.0162,skewX:0,x:217.8,y:10.85},11).wait(79));

	// Layer 3
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(273.05,15.95,0.9155,0.7209,0,0.3093,0,-0.1,-85.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,regY:-85.1,scaleY:1.0118,skewX:-1.5831,x:273.1,y:16.05},10).to({regX:-0.1,scaleY:0.9037,skewX:-3.9939,x:273},10).to({regX:0,scaleY:1.0118,skewX:-1.5831,x:273.1},10).to({regX:-0.1,regY:-85.2,scaleY:0.7209,skewX:0.3093,x:273.05,y:15.95},10).to({regX:0,regY:-85.1,scaleY:1.0118,skewX:-1.5831,x:273.1,y:16.05},10).to({regX:-0.1,scaleY:0.9037,skewX:-3.9939,x:273},11).to({regX:0,scaleY:1.0118,skewX:-1.5831,x:273.1},10).to({regX:-0.1,regY:-85.2,scaleY:0.7209,skewX:0.3093,x:273.05,y:15.95},14).to({scaleY:0.8179,skewX:-0.2672,x:273},11).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.6,11.9,97.00000000000003,182.79999999999998);


(lib.messageLeaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Message
	this.instance = new lib.Message();
	this.instance.parent = this;
	this.instance.setTransform(138.45,162.55,1,1,0,0,0,82.1,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.161)","rgba(255,255,255,0.149)"],[0,1],-138.4,0,138.5,0).s().p("AElPdQklhQkjBQQhuAEhZA8IAAgnQhZAfhaglQA+gPAAg1QiZAFiYgwIAcgpQhfgGhHgqIAFgXQg7AFhGgXIAUgkQh1AChxgrQBtgnCCADIgEgbQBGgHAqAHIAAgdQBjgNA9AVQBUgCggg7Qhaheh5hPIAogMQhigkhBhFIAjgVQhyg/gGhGQA4A3A7AKIAAgfQAnAQAsgQQgig8htg5IBAgDQhpgXgMhIQAuARAbgRIg8hKIA5AJQgpglgDgqQAeAXAZgPQhShYgfjWQBuCLB2BsIAAg3QA0AfAgA4QApgKgGgxQAzAoAFBYIAQgwQAbBcA4AMQArADAWhWQAuAsgNBMIAZgqQAZA7gCA1IAZgtQAUBNAGBLIAPgrQA+CEAdgFQA4gPgchrQgbhQgsg7QAYALATgLQg8g5gShCIA8AfQgahHgsg4IBCAYQgjhNgsg6IA1AIIhIhlIAjAbQATgIgCgkQgtg8gsghIAagLQgfg8g2g8QBOAtA8A+IAAgiIBGBIIAAgeICRB4QAdgtgHgtIgZAUIgKgoQAegPgKgZIgPgUQgLgmAMgnQAZAuA0AEIAZAAQgKgpAUgRQATgSASASQgMgjAMgjIAcAUIAlhdIAPAbQAkhqBKhFQBLBFAkBqIAPgbIAmBdIAbgUQAMAjgMAjQATgSATASQAUARgKApIAZAAQAzgEAaguQAMAngMAmIgPAUQgJAZAdAPIgKAoIgZgUQgGAtAdAtICRh4IAAAeIBGhIIAAAiQA7g+BOgtQg2A8gfA8IAaALQgsAhgsA8QgDAkATAIIAjgbIhHBlIA0gIQgrA6gjBNIBCgYQgtA4gZBHIA8gfQgSBCg9A5QATALAZgLQgtA7gaBQQgcBrA3APQAeAFA9iEIAPArQAGhLAUhNIAZAtQgCg1AZg7IAZAqQgNhMAugsQAWBWArgDQA4gMAbhcIAQAwQAFhYAzgoQgGAxApAKQAgg4A0gfIAAA3QB2hsBuiLQgfDWhSBYQAZAPAegXQgDAqgpAlIA5gJIg8BKQAbARAugRQgMBIhpAXIBAADQhtA5giA8QAsAQAngQIAAAfQA7gKA4g3QgGBGhyA/IAjAVQhBBFhiAkIAoAMQh5BPhaBeQggA7BUACQA9gVBjANIAAAdQAqgHBGAHIgEAbQCCgDBtAnQhxArh1gCIAUAkQhGAXg7gFIAFAXQhHAqhfAGIAcApQiYAwiZgFQAAA1A+APQhaAlhZgfIAAAnQhZg8htgEg");
	this.shape.setTransform(138.475,105.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(243,145,0,0.529)","rgba(255,153,0,0.439)","rgba(255,255,0,0.71)"],[0,0.345,1],-138.4,1.9,138.5,1.9).s().p("AElHFQklhPkjBPQhuAEhZA8IAAgnQhZAghagmQA+gPAAg1QiZAGiYgxIAcgoQhfgHhHgqIAFgXQg7AGhGgXIAUgkQh1AChxgsQBtgmCCACIgEgbQBGgHAqAHIAAgdQBjgNA9AWQBUgCggg8Qhahch5hPIAogNQhigkhBhFIAjgVQhOgrgbguQgNgVgCgWQAbAaAbAQQAeARAfAGIAAggQALAFALACQAUADAWgEIATgGQgNgWgXgWIARgDQDHiEEhB7IACAVIAPgqIAKAVQAPAeANAWQAiA5ATgEQAjgJACgtQABgWgGgfQACAADKBYQDKBXDohSQDphRAFgNQgGAfABAWQABAuAjAJQAUAEAjg7QAMgWAPgeIAJgTIAPAqIACgXQCag+CaANQCaAOAwAsQgbAYgOAZIAIADQAhAKAfgJIALgEIAAAgQAhgGAggUQAZgPAZgYQgCAUgLAUQgaAwhRAsIAjAVQhBBFhiAkIAoANQh5BPhaBcQggA8BUACQA9gWBjANIAAAdQAqgHBGAHIgEAbQCCgCBtAmQhxAsh1gCIAUAkQhGAXg7gGIAFAXQhHAqhfAHIAcAoQiYAxiZgGQAAA1A+APQhaAmhZggIAAAnQhZg8htgEg");
	this.shape_1.setTransform(138.475,159.146);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFF00","#DB5D00","#AF0000","#FFFF00"],[0,0.294,0.62,1],-138.4,0,138.5,0).s().p("AElPdQklhQkjBQQhuAEhZA8IAAgnQhZAfhaglQA+gPAAg1QiZAFiYgwIAcgpQhfgGhHgqIAFgXQg7AFhGgXIAUgkQh1AChxgrQBtgnCCADIgEgbQBGgHAqAHIAAgdQBjgNA9AVQBUgCggg7Qhaheh5hPIAogMQhigkhBhFIAjgVQhyg/gGhGQA4A3A7AKIAAgfQAnAQAsgQQgig8htg5IBAgDQhpgXgMhIQAuARAbgRIg8hKIA5AJQgpglgDgqQAeAXAZgPQhShYgfjWQBuCLB2BsIAAg3QA0AfAgA4QApgKgGgxQAzAoAFBYIAQgwQAbBcA4AMQArADAWhWQAuAsgNBMIAZgqQAZA7gCA1IAZgtQAUBNAGBLIAPgrQA+CEAdgFQA4gPgchrQgbhQgsg7QAYALATgLQg8g5gShCIA8AfQgahHgsg4IBCAYQgjhNgsg6IA1AIIhIhlIAjAbQATgIgCgkQgtg8gsghIAagLQgfg8g2g8QBOAtA8A+IAAgiIBGBIIAAgeICRB4QAdgtgHgtIgZAUIgKgoQAegPgKgZIgPgUQgLgmAMgnQAZAuA0AEIAZAAQgKgpAUgRQATgSASASQgMgjAMgjIAcAUIAlhdIAPAbQAkhqBKhFQBLBFAkBqIAPgbIAmBdIAbgUQAMAjgMAjQATgSATASQAUARgKApIAZAAQAzgEAaguQAMAngMAmIgPAUQgJAZAdAPIgKAoIgZgUQgGAtAdAtICRh4IAAAeIBGhIIAAAiQA7g+BOgtQg2A8gfA8IAaALQgsAhgsA8QgDAkATAIIAjgbIhHBlIA0gIQgrA6gjBNIBCgYQgtA4gZBHIA8gfQgSBCg9A5QATALAZgLQgtA7gaBQQgcBrA3APQAeAFA9iEIAPArQAGhLAUhNIAZAtQgCg1AZg7IAZAqQgNhMAugsQAWBWArgDQA4gMAbhcIAQAwQAFhYAzgoQgGAxApAKQAgg4A0gfIAAA3QB2hsBuiLQgfDWhSBYQAZAPAegXQgDAqgpAlIA5gJIg8BKQAbARAugRQgMBIhpAXIBAADQhtA5giA8QAsAQAngQIAAAfQA7gKA4g3QgGBGhyA/IAjAVQhBBFhiAkIAoAMQh5BPhaBeQggA7BUACQA9gVBjANIAAAdQAqgHBGAHIgEAbQCCgDBtAnQhxArh1gCIAUAkQhGAXg7gFIAFAXQhHAqhfAGIAcApQiYAwiZgFQAAA1A+APQhaAlhZgfIAAAnQhZg8htgEg");
	this.shape_2.setTransform(138.475,105.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AldGNQAchmBagiQEjk+DJk/QAiAKA3geIpiMZQgKguhPAug");
	this.shape_3.setTransform(117.125,222.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.messageLeaf, new cjs.Rectangle(0,0,277,261.8), null);


(lib.leafs2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Leaf10
	this.instance = new lib.leaf();
	this.instance.parent = this;
	this.instance.setTransform(619.25,1,0.1552,0.1754,0,75.0002,-105.0007,138.5,130.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({regY:130.4,scaleY:0.1552,rotation:74.9993,skewX:0,skewY:0,guide:{path:[619.2,1.1,456.2,-71.7,250.4,-33.7,242.4,-32.2,234.5,-30.9]}},14).to({regX:138.4,scaleX:0.1713,rotation:0,skewX:-105.0007,skewY:107.2014,guide:{path:[234.4,-31.1,7.8,6.5,-156,-93.2]}},14).wait(135));

	// Leaf9
	this.instance_1 = new lib.leaf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(559.5,243.1,0.1402,0.1552,29.9978,0,0,138.2,130.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({regX:138.1,scaleX:0.2195,scaleY:0.2274,rotation:-120.0057,guide:{path:[559.5,243.1,358.2,109.5,192.5,66.3]}},13).to({regX:138,regY:130.5,rotation:-240.0029,guide:{path:[192.4,66.1,-13.3,12.6,-164.4,98.2]}},14).wait(130));

	// Leaf8
	this.instance_2 = new lib.leaf();
	this.instance_2.parent = this;
	this.instance_2.setTransform(558.8,96.45,0.1552,0.1552,29.9978,0,0,138.3,130.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({regY:130.5,scaleX:0.2308,scaleY:0.2557,rotation:-75.006,guide:{path:[558.8,93.1,346,94.4,189.4,102.7]}},11).to({regX:138.6,regY:130.2,scaleX:0.0657,scaleY:0.0814,rotation:-255.0057,guide:{path:[189.2,102.7,-101.7,118,-199.9,157.1]}},22).wait(136));

	// Leaf7
	this.instance_3 = new lib.leaf();
	this.instance_3.parent = this;
	this.instance_3.setTransform(562.7,40.9,0.1552,0.1552,180,0,0,138.2,130.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({regX:138.3,regY:130.7,rotation:29.9978,guide:{path:[562.7,41,423.1,3.2,311.2,55.5,257.8,80.6,189.1,88.5]}},10).to({regX:138.2,regY:131.1,scaleY:0.1842,rotation:0,skewX:-57.4436,skewY:-90,guide:{path:[189.1,88.6,110.3,97.7,11.7,84.3,-93.6,69.8,-150.6,-29.2]}},21).wait(131));

	// Leaf6
	this.instance_4 = new lib.leaf();
	this.instance_4.parent = this;
	this.instance_4.setTransform(553.95,-68.7,0.1552,0.1552,29.9978,0,0,138.3,130.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({regX:138.4,rotation:195.0007,guide:{path:[554,-68.6,358.6,7.5,163.2,83.7]}},20).to({regX:138.3,rotation:299.9978,guide:{path:[163.1,83.8,-1.9,148,-166.8,212.3]}},10).wait(127));

	// Leaf5
	this.instance_5 = new lib.leaf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(565.75,161.2,0.1552,0.1552,29.9978,0,0,138.3,130.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({regX:138.2,scaleX:0.2308,scaleY:0.2901,rotation:-135.0043,guide:{path:[565.7,161.2,429.1,34.7,223.1,11.1]}},13).to({regX:138.1,regY:130.9,scaleX:0.1745,scaleY:0.1707,rotation:-240.0068,guide:{path:[223,11.1,200,8.5,176,7.1,-11.2,4,-162.3,37.1]}},15).wait(137));

	// Leaf4
	this.instance_6 = new lib.leaf();
	this.instance_6.parent = this;
	this.instance_6.setTransform(578.95,1.95,0.1552,0.1959,0,67.607,29.9978,138.3,130.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({regY:130.7,scaleX:0.2344,scaleY:0.2675,rotation:149.9965,skewX:0,skewY:0,guide:{path:[578.9,2,406.5,109,222.6,172.8]}},15).to({regX:138,regY:130.2,scaleX:0.2401,scaleY:0.1882,rotation:0,skewX:-45.0033,skewY:-7.7665,guide:{path:[222.5,172.8,38.1,236.7,-157.9,257.1]}},11).wait(133));

	// Leaf3
	this.instance_7 = new lib.leaf();
	this.instance_7.parent = this;
	this.instance_7.setTransform(572.6,183.7,0.1552,0.1552,29.9978,0,0,138.3,130.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).to({regX:138.2,regY:130.6,scaleX:0.2058,scaleY:0.2304,rotation:-45,guide:{path:[572.6,183.7,448,55.2,280.5,-25.7]}},16).to({regX:138.3,regY:131.1,scaleX:0.1145,scaleY:0.1775,rotation:0,skewX:-120.5422,skewY:-55.0643,guide:{path:[280.4,-25.8,163.2,-82.2,25.1,-115.4]}},10).wait(127));

	// Leaf2
	this.instance_8 = new lib.leaf();
	this.instance_8.parent = this;
	this.instance_8.setTransform(584.15,63.05,0.1552,0.1552,15.0007,0,0,138.1,130.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:138.3,rotation:-119.9978,x:174.15},20).to({regX:138.2,scaleX:0.1182,scaleY:0.2345,rotation:0,skewX:138.5581,skewY:168.2203,x:-175.85},20).wait(135));

	// Leaf1
	this.instance_9 = new lib.leaf();
	this.instance_9.parent = this;
	this.instance_9.setTransform(553.7,227,0.1552,0.1552,-29.9957,0,0,138.4,130.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({regX:138.2,regY:130.3,scaleX:0.2271,scaleY:0.2679,rotation:-209.995,guide:{path:[553.7,227.1,351.4,172.1,198.4,86.7]}},19).to({regX:138.5,regY:129.8,scaleX:0.1808,scaleY:0.1629,rotation:-360,skewX:141.0209,skewY:105.8697,guide:{path:[198.4,86.6,44.3,0.5,-59.9,-116.6]}},14).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.6,-151,857.5,427.5);


(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_174 = function() {
		KissDone(this);
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(1));

	// Layer 4
	this.instance = new lib.leafs2();
	this.instance.parent = this;
	this.instance.setTransform(651.05,75,1.9041,2.0609,0,0,0,584.1,63.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({_off:false},0).wait(79));

	// Auch
	this.instance_1 = new lib.auch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(246.1,60,0.0364,0.0441,0,0,0,147.2,-55.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).to({regX:147,regY:-55,scaleX:0.4911,scaleY:0.488,x:260.6,y:53},7).to({alpha:0},5).to({_off:true},1).wait(66));

	// Pawn
	this.instance_2 = new lib.Pawnmove();
	this.instance_2.parent = this;
	this.instance_2.setTransform(250.3,70.55,1,1,0,0,0,249.1,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175));

	// AppleHit
	this.instance_3 = new lib.apple();
	this.instance_3.parent = this;
	this.instance_3.setTransform(249.8,8.75,0.0581,0.0572,30.0066,0,0,224.2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:223.2,regY:7.7,scaleX:0.058,scaleY:0.0571,rotation:0,skewX:0.0153,skewY:-0.1657,x:248.8,y:6.5},20).to({regX:224.2,regY:8,scaleX:0.0581,scaleY:0.0572,rotation:30.0066,skewX:0,skewY:0,x:249.8,y:8.75},20).to({regX:223.2,regY:7.7,scaleX:0.058,scaleY:0.0571,rotation:0,skewX:0.0153,skewY:-0.1657,x:248.8,y:6.5},23).to({regX:224.2,regY:8,scaleX:0.0581,scaleY:0.0572,rotation:30.0066,skewX:0,skewY:0,x:249.8,y:8.75},19).to({x:253.8,y:30.75},7).to({regX:224.1,regY:7.9,rotation:15.0043,x:256.8,y:44.75},7).to({_off:true},1).wait(78));

	// Leaf1
	this.instance_4 = new lib.leaf();
	this.instance_4.parent = this;
	this.instance_4.setTransform(372.4,-46.4,0.176,0.1769,0,149.9958,-29.9993,129.2,273.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:272.9,skewX:135,skewY:-45,y:-53.45},26).to({regY:273.1,skewX:149.9958,skewY:-29.9993,y:-46.4},26).to({regY:273.7,skewX:209.9956,skewY:29.9993,x:404.5,y:280.05},29).wait(94));

	// Tree
	this.instance_5 = new lib.Tree();
	this.instance_5.parent = this;
	this.instance_5.setTransform(299.3,59.1,1,1,0,0,0,152.2,186.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(175));

	// Layer 9
	this.instance_6 = new lib.leaf();
	this.instance_6.parent = this;
	this.instance_6.setTransform(148.4,296.4,0.0815,0.1008,-75.0082,0,0,138.7,130.8);

	this.instance_7 = new lib.leaf();
	this.instance_7.parent = this;
	this.instance_7.setTransform(271.3,238.9,0.1064,0.1156,0,-120.001,59.9973,138.4,130.8);

	this.instance_8 = new lib.leaf();
	this.instance_8.parent = this;
	this.instance_8.setTransform(227.4,273.1,0.0818,0.1121,-30.011,0,0,139,130.2);

	this.instance_9 = new lib.leaf();
	this.instance_9.parent = this;
	this.instance_9.setTransform(163.35,242.05,0.1552,0.1552,29.9978,0,0,138.3,130.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(175));

	// Leaf2
	this.instance_10 = new lib.leaf();
	this.instance_10.parent = this;
	this.instance_10.setTransform(219.45,-35.5,0.1448,0.1769,0,105.0024,-75.0028,139,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(175));

	// Leaf3
	this.instance_11 = new lib.leaf();
	this.instance_11.parent = this;
	this.instance_11.setTransform(139.85,-0.35,0.1769,0.1769,-150.0026,0,0,145,260.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-180.0049,y:2.6},17).to({rotation:-150.0026,y:-0.35},19).to({rotation:-180.0049,y:2.6},21).to({regX:144.7,rotation:-225.007,x:157.95,y:89.8},18).to({regX:144.9,regY:260.7,rotation:-150.0068,x:98.95,y:209.95},18).wait(82));

	// Leaf4
	this.instance_12 = new lib.leaf();
	this.instance_12.parent = this;
	this.instance_12.setTransform(335.4,21,0.0912,0.0912,-150.003,0,0,138.5,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(175));

	// Layer 11
	this.instance_13 = new lib.apple();
	this.instance_13.parent = this;
	this.instance_13.setTransform(214.2,222,0.0535,0.0572,0,-29.9934,150.0058,230.7,235.8);

	this.instance_14 = new lib.apple2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(172,-34.5,0.0644,0.0672,0,14.9926,-165.0056,226.4,236.8);

	this.instance_15 = new lib.apple2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(377.8,268.55,0.0632,0.0672,-30.0129,0,0,226.1,236.2);

	this.instance_16 = new lib.apple2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(315.9,283.85,0.0632,0.0672,44.9816,0,0,226.6,236.3);

	this.instance_17 = new lib.apple();
	this.instance_17.parent = this;
	this.instance_17.setTransform(316.35,63.2,0.0535,0.0572,0,0,180,230.8,236.1);

	this.instance_18 = new lib.apple2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(404.4,62.2,0.0632,0.0672,14.9926,0,0,226.2,235.8);

	this.instance_19 = new lib.apple2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(318.1,-24.95,0.0566,0.0596,0,-0.0147,179.9846,214.7,248.2);

	this.instance_20 = new lib.apple2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(396.15,-70.8,0.0566,0.0596,0,-45,135,226.1,236.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(175));

	// Background
	this.instance_21 = new lib.leaf();
	this.instance_21.parent = this;
	this.instance_21.setTransform(279.6,292.3,0.1552,0.1552,134.996,0,0,138.2,130.5);

	this.instance_22 = new lib.leaf();
	this.instance_22.parent = this;
	this.instance_22.setTransform(339.45,301.35,0.1552,0.1552,29.9978,0,0,138.6,130.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#ACAA00","#E2B500","#D2BA00","#568900"],[0.165,0.49,0.686,1],-318.4,0,0,0.6,0,333.3).s().p("EgzFAKFIAAzNQRYgnQ7gOUAi4gAdAhAABSIAATNg");
	this.shape.setTransform(107.975,272.4085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_22},{t:this.instance_21}]}).wait(175));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFCC00","#B4B300","#669900"],[0,0.341,1],-8.6,5.2,0,-8.6,5.2,88.5).s().p("AjKD/QgRgqiegtIgXgIQgYgIgwALQgxALgDgWQgDgWhhAVQAdiwA/j9QAjDcgICvQAnh5BAhKQg+BhBcCJQBakFBug/QhtBdBnD2QApjCA5gjQA3EQADhVQBoihhtiDQB7CABuDLQA8huBZhqQhLBeBkBiIgPAdQCFggBqAeIAVAqQiHghhpAhIAAAAQhtAYg1gfQjqgag8BOIhbAKQgJALgIAAQgNAAgKgYgAGGjaQAtBIAzBdIg7BsQAWiLg7iGg");
	this.shape_1.setTransform(-151.5,203.439);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFCC00","#B4B300","#669900"],[0,0.341,1],8.9,5.2,0,8.9,5.2,91.3).s().p("ACoEMIhegKQg9hOjyAaQg3AfhwgYIAAAAIgJgCQg+gRhHADQgzADg3ANIAPgdIAvhYIAmhIIAVglQAciPBeg+QglBQgGBSIAAAFQgEA8AMA+QAJAsASAtQAjgdATgdIAHgMQAeg4gcg2QgIgOgLgOIATAXQBDBQAzBTIARAeQBxjLB+iAQhvCDBrChQADBVA5kQQA6AjAqDCQBsj2hyhdQBzA/BcEFQBfiJhBhhQBDBKApB5QgJivAkjcQBBD9AeCwQhlgVgCAWQgDAWgygLQgygLgZAIIgYAIQiiAtgSAqQgLAYgNAAQgJAAgJgLg");
	this.shape_2.setTransform(36.475,198.289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFCC00","#B4B300","#669900"],[0,0.341,1],9.1,5.2,0,9.1,5.2,91.3).s().p("ACqEMIhegKQg9hOjyAaQg3AfhwgYIAAAAIgJgCQhpgeiGAgIAPgdIAvhZIA7hsQAciPBeg+QhUC4BMDCQB/hqhThmQBcBqA+BuQBxjLB+iAQhvCDBrChQADBVA5kQQA6AjAqDCQBsj2hyhdQBPArBECJIgmBIIgvBZIgPAdQA4gNAygDQhrAjgOAiQgLAYgNAAQgJAAgJgLgAGzA7QAUhCgcg3IAAgFQA1A/AkBfQgTAdgjAdQgSgtgJgtgAINglQAGhxAViAQA9DsAeCpQgyhThEhRgAINgfQAdA2gfA3QgBg1ADg4g");
	this.shape_3.setTransform(-50.7375,199.439);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(175));

	// Message
	this.instance_23 = new lib.messageLeaf();
	this.instance_23.parent = this;
	this.instance_23.setTransform(306.7,-93.45,0.1608,0.1639,-135,0,0,138.5,131.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({regX:138.3,regY:130.9,scaleX:0.1606,rotation:0,skewX:-119.9996,skewY:-120.0954,y:-100.5},15).to({regX:138.5,regY:131.2,scaleX:0.1608,rotation:-135,skewX:0,skewY:0,y:-93.45},16).to({regX:138.3,regY:130.9,scaleX:0.1606,rotation:0,skewX:-119.9996,skewY:-120.0954,y:-100.5},17).to({regX:138.5,regY:131.2,scaleX:0.1608,rotation:-135,skewX:0,skewY:0,y:-93.45},20).to({regX:138.3,regY:130.9,scaleX:0.1606,rotation:0,skewX:-119.9996,skewY:-120.0954,y:-100.5},17).to({regX:138.5,regY:131.2,scaleX:0.1608,rotation:-135,skewX:0,skewY:0,y:-93.45},17).to({regX:138.6,scaleX:0.2135,scaleY:0.2466,rotation:-240.0014,guide:{path:[306.6,-94,228.7,-93.5,168.5,-83.2]}},11).to({regX:138.5,regY:131.3,scaleX:0.3491,scaleY:0.3986,rotation:-300.0014,guide:{path:[168.6,-83.2,139.6,-78.2,114.9,-70.9,111.4,-69.9,108,-68.8,79.5,-60,56.7,-47.9]}},11).to({regX:138.7,regY:131.5,scaleX:0.9722,scaleY:1.0745,rotation:-359.9967,guide:{path:[56.6,-47.8,49.4,-44,42.7,-39.8,42.2,-39.5,41.8,-39.2,39,-37.3,36.2,-35.5,-17.3,-0.9,-69.4,18.5]}},14).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-127.6,919.8,464.6);


// stage content:
(lib.Autumn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
		
			if(0) // no sound
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

	// Animation
	this.AnimMc = new lib.Anim();
	this.AnimMc.name = "AnimMc";
	this.AnimMc.parent = this;
	this.AnimMc.setTransform(291,193.5,1,1,0,0,0,79,47.5);

	this.timeline.addTween(cjs.Tween.get(this.AnimMc).wait(1));

	// Dots
	this.instance = new lib.dots();
	this.instance.parent = this;
	this.instance.setTransform(319.4,238.5,1,1,0,0,0,321.4,240.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(313,237.5,350.6,245.5);
// library properties:
lib.properties = {
	id: 'B94B0819DBD5F44899E29BAFC47A92DF',
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
an.compositions['B94B0819DBD5F44899E29BAFC47A92DF'] = {
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
		var w = ksAutumn.properties.width, h = ksAutumn.properties.height;			
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