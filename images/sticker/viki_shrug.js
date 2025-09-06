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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ABKh3IAAgBQAkg6hiBMIAAAAIgRAPQgxAugaAeQgZAeADA9IANBCQBNgVAPgfQARgfAugPQAFgQgZABQgBAAgBAAQgXACgMALABKh3QAegOgMAdIgHAIQAbgEgOAQIhWBjIgDAfABKh3Ig2BHQgfAlALBEQADgGAGgFABVhgIhGBS");
	this.shape.setTransform(14.5632,10.1077);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0D2C7").s().p("AgcgOIA0hIQAfgNgMAdIgHAIQAbgEgOAQIhWBjIgDAfQgGAFgEAGQgLhFAhgkgAgiATIBGhRg");
	this.shape_1.setTransform(19.5219,6.7421);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF2E7").s().p("AhcBQQgEg9AageQAZgeAxguIASgPIgBAAQBihMgjA6IAAABIg2BHQgfAlAKBEQADgGAGgFQANgLAXgCIACAAQAZgBgFAQQguAPgRAfQgPAfhNAVg");
	this.shape_2.setTransform(13.5955,10.1077);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handright, new cjs.Rectangle(3.3,-5.5,22.599999999999998,31.2), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABhANQgSgagpABAhgANQATgbAoAC");
	this.shape.setTransform(-0.6,-4.5289);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({y:-5.0289},0).wait(3).to({y:-4.5289},0).wait(27));

	// hairtop
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB4CDQgbglgBgQQAAgQgSgCQgRgCgUgQIgMgSQgQgZgTgJQgYgLgeANQgNAGgNAIQARASgeAUQgeAUgWASQgbACgegWIAdhJQAwhuBcgaQAvgNAhAgQBoADAmBAQAsBNgrA/IADALQANAEALgSQAQAqgfATQgVAPgRAAQgUAAgOgVg");
	this.shape_1.setTransform(1.4083,-9.9487);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(36));

	// eyelashes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.2,1,1).p("AAiAKQAKgYAYACQAYACAIAYQAIAAAGgEAghAKQgJgYgYACQgZACgHAYQgIAAgHgE");
	this.shape_2.setTransform(-0.775,-0.9545);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36));

	// pupils
	this.instance = new lib.pupils();
	this.instance.setTransform(-0.7,0.9,1,1,0,0,0,8.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgPABQAQgEAPAF");
	this.shape_3.setTransform(-0.425,11.3435);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(36));

	// nose
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6CCC4").s().p("AgSgDIAGgEIAaAAIAFAEIgTALg");
	this.shape_4.setTransform(-0.625,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(36));

	// eyes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFFFF").s().p("AAsAWQgJgJABgNQgBgMAJgJQAJgJANAAQANAAAKAJQAJAJAAAMQAAANgJAJQgKAJgNAAQgNAAgJgJgAhYAWQgIgJgBgNQABgMAIgJQAKgJANAAQAMAAAJAJQAKAJgBAMQABANgKAJQgJAJgMAAQgNAAgKgJg");
	this.shape_5.setTransform(-0.85,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(36));

	// Layer_3
	this.instance_1 = new lib.eyeshadow();
	this.instance_1.setTransform(-1,-1.95,0.903,0.6472,0,0,0,11.7,4.9);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF2E7").s().p("AgdCjQg6gXghhMQg6ibCChNIBrAAQBtBAgpCbQgdBYhAAXQgSAHgQAAQgPAAgOgGg");
	this.shape_6.setTransform(-0.4463,-0.9745);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(36));

	// neck
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CCC4").s().p("AgnAEQAFgLACgOQABgNgCgPIBDAAQgCAPABANQABAOAHALIgpAug");
	this.shape_7.setTransform(-0.4,19.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36));

	// hairbottom
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlUCMQANA5BEgbQALhPA0guQAYgWAigOQgDgHAAgEQAEgjgXgLIgGgDQgTgMgIgZQgSg4AUhEIBVAAQBMg3ANg8ICOBaIA7gKIAFAOQAfBPgVBCQgKAcgXAMQgYALAEAjIAAAOQAdANAWAUQA1AtAKBQQBEAbANg5QAFB5lWBDQldhDAFh5g");
	this.shape_8.setTransform(-0.6619,17.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-25.1,68.1,75.6);


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

	// ?
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.247)").ss(1,1,1).p("AgugZIAAglQAxgTAnAcQAVARgKAWQgJATgvgFIgIARIgWgEIAFgeQApgBgHgKQgGgIguALgAgTAxQAAAHgGAGQgFAHgHACQgIABgFgEQgFgEAAgHQAAgIAFgHQAFgGAIgBQAHgCAFAEQAGAEAAAIg");
	this.shape.setTransform(31.875,-18.9016);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B72527").s().p("AgyBEQgFgEAAgHQAAgIAFgHQAFgGAIgBQAHgCAFAEQAGAEAAAIQAAAHgGAGQgFAHgHACIgEAAQgFAAgEgDgAghANIAFgeQApgBgHgKQgGgIguALIAAglQAxgTAnAcQAVARgKAWQgJATgvgFIgIARg");
	this.shape_1.setTransform(31.875,-18.9016);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.247)").ss(1,1,1).p("Ag/gjIAAgzQBDgZA2AmQAcAYgOAdQgMAbhBgHIgKAXIgfgGIAHgpQA4gCgIgMQgJgMg/APgAgbBCQAAAKgHAJQgHAJgKACQgKACgIgFQgHgGAAgKQAAgKAHgJQAIgJAKgCQAKgCAHAFQAHAGAAAKg");
	this.shape_2.setTransform(31.8806,-18.8733);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B72527").s().p("AhFBdQgHgGAAgKQAAgKAHgJQAIgJAKgCQAKgCAHAFQAHAGAAAKQAAAKgHAJQgHAJgKACIgFABQgHAAgGgEgAguARIAHgpQA4gCgIgMQgJgMg/APIAAgzQBDgZA2AmQAcAYgOAdQgMAbhBgHIgKAXg");
	this.shape_3.setTransform(31.8806,-18.8733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[]},3).wait(20));

	// body
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("ABkicQgEAMgEAMIgIAfQgTBYAlAjABXhwQgCAGgBAFAhkAVQgHAHgJAFQhFAmgvBvIHRAAQgvhvhFgmQgIgFgHgGABHi1IhHBKIhFhGAhiicQAFAMAHAeQAYBigmAlIBlBTIBlhS");
	this.shape_4.setTransform(-1.175,33.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6CCC4").s().p("AhFgZIgBgEIABAAIACAAQAagDAEgLIBKAFQAFAGAaADIADAAIhHBJg");
	this.shape_5.setTransform(-1.1625,18.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjoBQQAvhtBFgmQAJgFAHgHIBlBRIBlhQQAHAGAIAFQBFAmAvBtg");
	this.shape_6.setTransform(-1.175,43.7875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#810817").s().p("AhlA8QAngmgZhhQgHgdgEgNIAcgZIAAABIABADIBEBGIBHhJIADAAQAZACABAXIgHAXIgGAVIgCAKQgTBXAlAkIhmBSgAhjh0IABgBQAEANAHAdIgMgpgAhih1IAAAAg");
	this.shape_7.setTransform(-1.1375,29.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(36));

	// armleft
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(1,1,1).p("AA3hWQgUALgMA4IgXAsIgXgdIgBAAQgShBgkgbIgqAUQAZAgANAdQANAcAIAJIABAAIBBBLIBSh8IAFgFAA3hWIAAAAAA3hWIAAAAIAAAAABXgbIADAAAB4gbQABgLgEgNQgFgSgIgJQgJgNgoAF");
	this.shape_8.setTransform(-18.7472,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#810817").s().p("Ag8AWIgBAAQgIgJgNgcQgNgdgZggIAqgUQAkAbASBBIABAAIAXAcIAXgsQAMg3AUgLIAAAAQAogFAJANQAIAJAFASQAEAMgBAMQgLgJgMgIIgFAMIgFAFIhSB8gABXgbIAFgFIgCAFgAA3hWIAAAAIAAAAgAA3hWg");
	this.shape_9.setTransform(-18.7472,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(1,1,1).p("AB4gbQABgLgEgNQgFgSgIgJQgKgNgnAFIAAABQgUALgMA3IgXAsIgXgdIgBAAQgShBgkgbIgqAUQAZAgANAdQANAcAIAJIABAAIBBBLIBSh8IAFgFABXgbIADAA");
	this.shape_10.setTransform(-18.7472,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#810817").s().p("Ag8AWIgBgBQgIgIgNgcQgNgdgZghIAqgTQAkAbASBBIABAAIAXAdIAXgsQAMg3AUgMIAAAAQAngGAKAOQAIAJAFASQAEANgBALQgLgJgMgIIgFALIgFAGIhSB8gABXgbIAFgGIgCAGgABcghg");
	this.shape_11.setTransform(-18.7472,22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("AA3hWQgUALgMA4IgXAsIgXgdIgBAAQgShBgkgbIgqAUQAZAgANAdQANAcAIAJIABAAIBBBLIBSh8IAFgFAA3hWIAAAAAA3hWIAAAAIAAAAAB4gbQABgLgEgNQgFgSgIgJQgJgNgoAFABXgbIADAA");
	this.shape_12.setTransform(-18.7472,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},6).to({state:[{t:this.shape_9},{t:this.shape_12}]},3).wait(27));

	// hand
	this.instance = new lib.handright();
	this.instance.setTransform(32,12.95,0.6165,0.6165,0,96.5732,-83.4268,9,11.1);

	this.instance_1 = new lib.handright();
	this.instance_1.setTransform(-34.85,12.95,0.6165,0.6165,-96.5732,0,0,9,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:12.95}},{t:this.instance,p:{y:12.95}}]}).to({state:[{t:this.instance_1,p:{y:11.65}},{t:this.instance,p:{y:11.65}}]},6).to({state:[{t:this.instance_1,p:{y:12.95}},{t:this.instance,p:{y:12.95}}]},3).wait(27));

	// arm
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(1,1,1).p("Ah3gbQgBgLAEgNQAFgSAIgJQAKgOAnAGIAAABQAUALAMA2IAXAsIAXgcIABAAQAShBAkgbIAqATQgZAggNAeQgNAcgIAJIgBAAIhBBLIhSh8IgFgFAhWgbIgDAA");
	this.shape_13.setTransform(16.3972,23.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#810817").s().p("AhWgbIgFgGIgFgLQgMAIgLAJQgBgLAEgNQAFgSAIgJQAKgOAnAGIAAAAQAUAMAMA3IAXAsIAXgdIABAAQAShBAkgbIAqATQgZAhgNAdQgNAcgIAIIgBABIhBBLgAhZgbIgCgGIAFAGgAhbghg");
	this.shape_14.setTransform(16.3972,23.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(1,1,1).p("Ah3gbQgBgLAEgNQAFgSAIgJQAKgNAnAFIAAABQAUALAMA3IAXAsIAXgdIABAAQAShBAkgbIAqAUQgZAggNAdQgNAcgIAJIgBAAIhBBLIhSh8IgFgFAhWgbIgDAA");
	this.shape_15.setTransform(16.3972,22.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#810817").s().p("AhWgbIgFgFIgFgMQgMAIgLAJQgBgMAEgMQAFgSAIgJQAKgOAnAGIAAABQAUALAMA2IAXAsIAXgcIABAAQAShBAkgbIAqATQgZAggNAeQgNAcgIAIIgBABIhBBLgAhZgbIgCgFIAFAFgAhbggg");
	this.shape_16.setTransform(16.3972,22.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_14},{t:this.shape_13}]},3).wait(27));

	// head
	this.instance_2 = new lib.head();
	this.instance_2.setTransform(-1.15,-5.8,1,1,0,0,0,-0.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-30.1,88.8,82.9);


// stage content:
(lib.viki_shrug = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(52.5,51.05,0.9683,0.9683,0,0,0,-0.1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(58.2,64.1,36,29.900000000000006);
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