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
	this.shape.graphics.f("#C50500").s().p("AA4AMQgEgFAAgHQAAgGAEgFQAEgFAGAAQAFAAAEAFQAEAFAAAGQAAAHgEAFQgEAFgFAAQgGAAgEgFgAhKAMQgEgFAAgHQAAgGAEgFQAEgFAGAAQAFAAAEAFQAEAFAAAGQAAAHgEAFQgEAFgFAAQgGAAgEgFg");
	this.shape.setTransform(8.325,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pupils, new cjs.Rectangle(0.4,0.5,15.9,3.4), null);


(lib.handright = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAfgnIAqgeQASgPABgLQABgLgMACIhpA8IhDBoIArAtIAPgOQA4gTAgg/QARgcgXgCIAAACIgTAYIgUAGIgNAEAACgWIAEARIACgFIAGgKIAFgKIAMgJQAHAAAFAGQADAFADAJAAGgFIAEAQAASgGIACgKQANgCAKgPAASgGIAIAEAAIgKIAKAEAAUgQIgGgE");
	this.shape.setTransform(13.5083,11.1027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF2E7").s().p("AhbA8IBDhoIBpg8QAMgCgBALQgBALgSAPIgqAeIgMAJIgFAKIgGAKIgCAFIACgFIAKAEIACgKIgGgEIAFgKIAMgJQAHAAAFAGQgKAPgNACQANgCAKgPQADAFADAJIAAgCQAXACgRAcQggA/g4ATIgPAOgAgDAPIANgEgAAeAFIgUAGIAUgGIATgYgAAKALIgEgQgAAagCIgIgEgAAGgFIgEgRg");
	this.shape_1.setTransform(13.5083,11.1027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handright, new cjs.Rectangle(3.3,-0.4,20.4,23), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABhgBQgfgJgfAbAhggQQAggEAaAf");
	this.shape.setTransform(2.775,-3.9475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	// hairtop
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB/CFQgYgnABgQQABgRgSgDQgQgEgTgQQgGgJgFgKQgNgagUgLQgWgNgfALQgNAEgPAJQAQASgfARQggASgXAQQgbAAgzgRQALgrAshCQAshDBOgSQBOgSAfAjQBnAKAiBEQAlBQgvA8IABALQANAFANgRQAMArggARQgUALgQAAQgWAAgOgXg");
	this.shape_1.setTransform(2.3868,-8.1507);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(36));

	// eyelashes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.2,1,1).p("AAiAIQAKgQAXADQAYAEAFARQAJAAAGgCAggADQgJgSgXAAQgYAAgIAPQgIAAgGgC");
	this.shape_2.setTransform(2.95,0.555);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36));

	// pupils
	this.instance = new lib.pupils();
	this.instance.setTransform(1.3,1.9,0.979,0.9999,0,4.3489,4.5386,8.3,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({x:4.2,y:2.1},6).wait(15).to({x:1.3,y:1.9},6).wait(1));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.7,1,1).p("AAegCIAEACQgCAEAGAIQgaAHgrABIgHgBIgIgJQgGgIAEgGAAvgPQAJAGgQgBIgKAIQgRACgTABQgKAAgIgBQgBgDgDgCIgLAJIgJgIAAogKIhAgIQgTAGgFAI");
	this.shape_3.setTransform(2.161,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghATIgIgKQgGgHAEgGIAJAIIALgJQADABABAEIASABQATgBARgBQgRABgTABIgSgBQgBgEgDgBIgLAJIgJgIQAFgJATgFIBAAIIgKAJIAEABQgCAEAGAHQgaAIgrAAg");
	this.shape_4.setTransform(1.6605,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(36));

	// nose
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6CCC4").s().p("AgRgEIAGgDIAYACIAGAEIgTAJg");
	this.shape_5.setTransform(2.65,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(36));

	// eyes
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFFFF").s().p("AA/AbQgNgBgIgHQgIgHABgJQAAgIAKgFQAJgGANABQAMABAJAHQAHAHAAAIQgBAJgJAFQgIAFgKAAIgEAAgAhCAQQgMgBgJgGQgIgHABgIQABgJAJgGQAJgGAMABQANABAIAIQAJAGgBAJQgBAIgJAGQgIAEgKAAIgEAAg");
	this.shape_6.setTransform(2.821,1.6255);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(36));

	// blush
	this.instance_1 = new lib.eyeshadow();
	this.instance_1.setTransform(2.9,-1.1,0.884,0.6472,0,4.3474,4.5384,11.6,4.9);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// head
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF2E7").s().p("AgsCiQg3gcgchNQgtifCHhEIBrAJQBoBIg1CYQgkBVhCASQgPAFgNAAQgTAAgQgJg");
	this.shape_7.setTransform(1.8506,-0.2795);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36));

	// neck
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6CCC4").s().p("AgnAEQAFgLACgOQABgNgCgPIBDAAQgCAPABANQABAOAHALIgpAug");
	this.shape_8.setTransform(-0.4,19.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(36));

	// hairbottom
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AlUCMQANA5BEgbQALhPA0guQAYgWAigOQgDgHAAgEQAEgjgXgLIgGgDQgTgMgIgZQgSg4AUhEIBVAAQBMg3ANg8ICOBaIA7gKIAFAOQAfBPgVBCQgKAcgXAMQgYALAEAjIAAAOQAdANAWAUQA1AtAKBQQBEAbANg5QAFB5lWBDQldhDAFh5g");
	this.shape_9.setTransform(-0.6619,17.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-23.7,68.1,74.2);


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

	// !
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.239)").ss(1,1,1).p("AAGg+QgjBKAHAHQAJAHAPgKIAyhFQAJgPgTgCQgdgGgHAOgAgNA4QAAAHgGAFQgGAFgJAAQgIAAgGgFQgGgFAAgHQAAgGAGgFQAGgFAIAAQAJAAAGAFQAGAFAAAGg");
	this.shape.setTransform(27.6223,-22.7878);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B72427").s().p("AgwBEQgGgFAAgHQAAgGAGgFQAGgFAIAAQAJAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgJAAQgIAAgGgFgAgWATQgHgHAjhKQAHgOAdAGQATACgJAPIgyBFQgIAGgHAAQgFAAgEgDg");
	this.shape_1.setTransform(27.6223,-22.7878);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.239)").ss(1,1,1).p("AAIhSQgvBiAKAJQAMAKAUgOIBBhcQAMgTgYgDQgmgIgKATgAgSBKQAAAKgIAFQgHAHgMAAQgKAAgJgHQgHgFAAgKQAAgIAHgHQAJgGAKAAQAMAAAHAGQAIAHAAAIg");
	this.shape_2.setTransform(30.9723,-22.7914);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B72427").s().p("AhABZQgHgFAAgKQAAgIAHgHQAJgGAKAAQAMAAAHAGQAIAHAAAIQAAAKgIAFQgHAHgMAAQgKAAgJgHgAgdAZQgKgJAvhiQAKgTAmAIQAYADgMATIhBBcQgLAIgKAAQgGAAgFgEg");
	this.shape_3.setTransform(30.9723,-22.7914);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[]},2).wait(28));

	// hands
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.7,1,1).p("AguAdQgFACgCgLIAxhHIAsAJQAEAjAKAVQgGAOgVgXQgRAzgSgEIAHgeQgcAjgDgUQgNAIgBgQQAGgDAJgR");
	this.shape_4.setTransform(-21.575,44.2362);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF2E7").s().p("AgIA0IAHgeQgcAjgDgUQgNAIgBgQQAGgDAJgRQgJARgGADQgFACgCgLIAxhHIAsAJQAEAjAKAVQgGAOgVgXQgQAvgRAAIgCAAg");
	this.shape_5.setTransform(-21.575,44.2362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(36));

	// body
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("ABkicQgEAMgEAMIgIAfQgTBYAlAjABXhwQgCAGgBAFAhkAVQgHAHgJAFQhFAmgvBvIHRAAQgvhvhFgmQgIgFgHgGABHi1IhHBKIhFhGAhkAVIBlBTIBlhSAhWhyQAZBignAl");
	this.shape_6.setTransform(-1.175,33.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CCC4").s().p("AhEgZIgCgDIACgBIABAAQAbgDAEgLIBKAFQAEAGAbADIADAAIhIBJg");
	this.shape_7.setTransform(-1.25,18.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjoBQQAvhtBFgmQAJgFAHgHIBlBRIBlhQQAHAGAIAFQBFAmAvBtg");
	this.shape_8.setTransform(-1.175,43.7875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#810817").s().p("AhlA8QAngmgZhhQgFgUgHgWQgFgWAggCIADACIBEBHIBHhKIADABQAZACABAWIgHAXIgGAVIgCALQgTBXAlAkIhmBSg");
	this.shape_9.setTransform(-1.1375,29.7625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(36));

	// armleft
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(1,1,1).p("ABMh+QgLgFgMAAQgTgBgLAEQgWAHgGBJIgVA9QgsAygFA8IApAJQANgmAUgYQALgPAGgaIAlhM");
	this.shape_10.setTransform(-14.525,27.9659);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#810817").s().p("AhLB7QAFg8AsgyIAVg9QAGhJAWgHQALgEATABQAMAAALAFQgMAGgLAJIAABAIglBMQgGAagLAPQgUAYgNAmg");
	this.shape_11.setTransform(-14.525,27.9659);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(36));

	// hand
	this.instance = new lib.handright();
	this.instance.setTransform(29.7,11.8,0.6032,0.6076,0,30.6119,33.7488,9.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:9,scaleX:0.6166,scaleY:0.6166,rotation:41.1399,skewX:0,skewY:0,x:36.75,y:13.9},0).wait(4).to({regX:9.1,scaleX:0.6032,scaleY:0.6076,rotation:0,skewX:30.6119,skewY:33.7488,x:29.7,y:11.8},0).wait(2).to({regX:9,scaleX:0.6166,scaleY:0.6166,rotation:41.1399,skewX:0,skewY:0,x:36.75,y:13.9},0).wait(28));

	// arm
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("ABwAFQgYADgQAMQgGAGgJACQgCAAgDAAAA0AdQgCgBgCAAIiCALAhvAoQgBgLAEgNQAEgRAHgKQAMgTBFAPIA2gBQAhgeAlAJ");
	this.shape_12.setTransform(15.5639,16.8723);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#810817").s().p("AhsAQQAEgRAHgKQAMgTBFAPIA2gBQAhgeAlAJIAEAqQgYADgQAMQgGAGgJACIgFAAIAAABIgEgBIiCALIgHgRQgLAIgLAKQgBgLAEgNg");
	this.shape_13.setTransform(15.5639,16.8723);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(1,1,1).p("AiOAhQgBgLAEgNQAFgRAIgJQANgSBIARIBAABQA+gZA7APIgFApQgpAAgdAKQgSAHgbgDIiIAF");
	this.shape_14.setTransform(18.5472,17.3688);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#810817").s().p("Ah3AQQgMAIgLAJQgBgLAEgNQAFgRAIgJQANgSBIARIBAABQA+gZA7APIgFApQgpAAgdAKQgSAHgbgDIiIAFg");
	this.shape_15.setTransform(18.5472,17.3688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).wait(28));

	// head
	this.instance_1 = new lib.head();
	this.instance_1.setTransform(-1.15,-5.8,1,1,0,0,0,-0.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-33.4,83.4,86.19999999999999);


// stage content:
(lib.viki_point = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(54.8,51.05,0.9683,0.9683,0,0,0,-0.1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(70.4,63.7,23.39999999999999,30.299999999999997);
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