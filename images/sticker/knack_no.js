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

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmZGNQg7AAAAhmIAApNQAAhmA7AAIMzAAQA7AAAABmIAAJNQAABmg7AAg");
	mask.setTransform(-1.7,-8.467);

	// hatball
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AAeAAQAAACAAACQgBAKgHAHQgJAJgNAAQgMAAgJgJQgHgHgBgKQAAgCAAgCQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMg");
	this.shape.setTransform(-3.05,-37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9B9B9").s().p("AgVAVQgHgHgBgKIAAgEQAAgMAIgJQAKgIALAAQANAAAIAIQAJAJAAAMIAAAEQgBAKgIAHQgIAJgNAAQgLAAgKgJg");
	this.shape_1.setTransform(-3.05,-37.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(36));

	// hat
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("Ah4AOQAigbBZACQBSgBAqApQADADABABQATAkgcAdQh4g/h3BAQgdgaAMgsQAGgIAIgHgAB/AdQgBgvgqgSQhNghghgdIgRAAQgHAmgtAaQgdAQAEAg");
	this.shape_2.setTransform(0.3338,-24.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B9B9B9").s().p("AiGgNQAGgJAIgGQAigcBZACQBSgBAqAqIAEAEQATAjgcAcQh4g+h3A/QgdgaAMgqg");
	this.shape_3.setTransform(0.3338,-20.5317);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAXQhZgCgiAcQgEghAdgQQAtgZAHgmIARAAQAhAdBNAgQAqASABAwQgqgqhSABg");
	this.shape_4.setTransform(0.6254,-28.35);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(36));

	// mouth
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgoAPQAogeApAC");
	this.shape_5.setTransform(6.675,10.6465);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(36));

	// eyeline
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AB/gaQgGAGgGAEQgmAhgqAJQgJABgJAAAh+gaQAGAGAFAEQAnAhAqAJQAJABAJAA");
	this.shape_6.setTransform(0.5,-10.75);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(14).to({y:-10.25},0).wait(6).to({y:-10.75},0).wait(16));

	// pupils
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7B0000").s().p("AA6AOQgGgGAAgIQAAgHAGgGQAFgGAIAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgIAAgFgGgAhVAOQgFgGAAgIQAAgHAFgGQAGgGAIAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_7.setTransform(0.475,-7.525);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(14).to({y:-7.425},0).wait(6).to({y:-7.525},0).wait(16));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(1,1,1).p("AAjACQADALAHAKQANARARAAQASAAANgRQAMgRAAgXQAAgMgDgKAgiACQgDALgHAKQgMARgSAAQgSAAgNgRQgMgRAAgXQAAgMADgK");
	this.shape_8.setTransform(0.475,-8.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAtAXQgHgKgDgLQAqgIAmghQADAKAAAMQAAAXgMARQgNARgSAAQgRAAgNgRgAhpAXQgMgRAAgXQAAgMADgKQAnAhApAIQgDALgHAKQgMARgSAAQgSAAgNgRg");
	this.shape_9.setTransform(0.475,-8.375);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(36));

	// darkshadow
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.447)").s().p("AAjAtQgSgSAAgZQAAgYASgSQASgSAZAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgZAAgSgSgAh4ApQgSgSAAgYQAAgZASgSQASgSAZAAQAZAAASASQASASAAAZQAAAYgSASQgSASgZAAQgZAAgSgSg");
	this.shape_10.setTransform(0.475,-7.925);

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(36));

	// noseshine
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.647)").s().p("AgUANQgJgFAAgIQAAgGAJgGQAJgGALAAQANAAAJAGQAIAGAAAGQAAAIgIAFQgJAGgNAAQgLAAgJgGg");
	this.shape_11.setTransform(2.275,0.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.647)").s().p("AgRALQgIgEAAgHQAAgFAIgFQAIgFAJAAQALAAAHAFQAIAFAAAFQAAAHgIAEQgHAFgLAAQgJAAgIgFg");
	this.shape_12.setTransform(2.025,1.125);

	var maskedShapeInstanceList = [this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},19).to({state:[{t:this.shape_11}]},3).wait(14));

	// nose
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgsAfQgSgNgBgSQABgRASgNQATgNAZAAQAaAAATANQASANAAARQAAASgSANQgTANgaAAQgZAAgTgNg");
	this.shape_13.setTransform(0.5,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglAaQgQgLAAgPQAAgOAQgLQAPgLAXAAQAVAAAQALQAQALAAAOQAAAPgQALQgQALgVAAQgXAAgPgLg");
	this.shape_14.setTransform(0.55,1.925);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},19).to({state:[{t:this.shape_13}]},3).wait(14));

	// head
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AAAjQQhTgBgWA0QhoD4BKBBQA+A1BIAAQBLAAA+g1QBKhBhoj4QgWg0hUABg");
	this.shape_15.setTransform(0.375,-3.101);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#886139").s().p("AiHCcQhKhBBoj4QAWg0BTABQBUgBAWA0QBoD4hKBBQg+A1hLAAQhIAAg+g1g");
	this.shape_16.setTransform(0.375,-3.101);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(36));

	// antlers
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ABrBLQA8gKANghQgygfgBgPQAAgCAAgCQABgUAdANIAwAVQAUAEgCgQQgBgBAAgBQgBgHAAgHIAZAxIAVgPIAWA0QgCAAgCAAQgeAFgkgPQgtAwg7AEgAg8BAQg7gOgLgjQApgUALgNQADgEAAgEQAFgaghAMIgyARQgVADAEgQQAGgWgEgXQgDgVgXAQIgWAnQgMAPgJgLQgKgWACgaQgUgMgQAYQgOAcAIAhQAAAAAAAAQAJAkAoAKQAeAHAlgMQAoA0A7AIg");
	this.shape_17.setTransform(-2.268,-35.2778);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#613E1D").s().p("ABrBLQA8gKANghQgygfgBgPIAAgEQABgUAdANIAwAVQAUAEgCgQIgBgCIgBgOIAZAxIAVgPIAWA0IgEAAQgeAFgkgPQgtAwg7AEgAirAXQglAMgegHQgogKgJgkIAAAAQgIghAOgcQAQgYAUAMQgCAaAKAWQAJALAMgPIAWgnQAXgQADAVQAEAXgGAWQgEAQAVgDIAygRQAhgMgFAaQAAAEgDAEQgLANgpAUQALAjA7AOIgMATQg7gIgog0g");
	this.shape_18.setTransform(-2.268,-35.2778);

	var maskedShapeInstanceList = [this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(36));

	// scarf
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AAQgcQhmAFglgkQgEgEgDgEQgTgeAVgvQB6BfCIhqQAUA/gTAYQgEAFgEAEQgKAIgNAFQgqAQgqACgABkguQAnCmgpAZQgZAOgfgFQAUhIgChTQgSBcgbAuQgmgGgRgbQAkhHAUg9");
	this.shape_19.setTransform(0.2991,24.0547);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAqCaQAUhIgChTQgSBcgbAuQgmgGgRgbQAkhHAUg9QAqgCAqgQQgqAQgqACQhmAFglgkIgHgIQgTgeAVgvQB6BfCIhqQAUA/gTAYIgIAJQgKAIgNAFQAnCmgpAZQgTALgXAAIgOgCg");
	this.shape_20.setTransform(0.2991,24.0547);

	var maskedShapeInstanceList = [this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(36));

	// arms
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ABiiPQBCANAiA9QAhA8ADBqQABAMAAAMQgDAWggABQggABACgYQAAgMABgMQgChhgng4AhiiPQhBANgiA9QghA8gDBqQgBAMAAAMQACAWAgABQAgABgBgYQgBgMAAgMQAChhAng4");
	this.shape_21.setTransform(0.275,25.027);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#886139").s().p("ACqB5IABgYQgChhgng4IgghXQBCANAiA9QAhA8ADBqIABAYQgDAWggABIgCAAQgeAAACgXgAjICQQgggBgCgWIABgYQADhqAhg8QAig9BBgNIgfBXQgnA4gCBhIABAYQABAXgdAAIgDAAg");
	this.shape_22.setTransform(0.275,25.027);

	var maskedShapeInstanceList = [this.shape_21,this.shape_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(36));

	// body_shade
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A28360").s().p("Ag9BsQgZgsAAhAIABgYQAEgwAUgkQAagtAjAAQAkAAAZAtQAVAkAEAwIABAYQAABAgaAsQgZAugkAAQgjAAgagug");
	this.shape_23.setTransform(0.25,20.525);

	var maskedShapeInstanceList = [this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(36));

	// body
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ACqAAQAABNgyA2QgxA3hGAAQhGAAgyg3Qgyg2AAhNQAAgwAVgoQALgXASgUQAyg2BGAAQBGAAAxA2QASAUALAXQAVAoAAAwg");
	this.shape_24.setTransform(0.1,26.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#886139").s().p("Ah3CDQgxg2AAhNQgBgwAVgoQALgXASgUQAyg2BGAAQBGAAAxA2QASAUALAXQAUAoAAAwQAABNgxA2QgxA3hGAAQhGAAgyg3g");
	this.shape_25.setTransform(0.1,26.975);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).wait(36));

	// ears
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AERg1QgQBFhaAgQgsAPgRgQAERg1QiUgKgaBgQADAIAEAGAERg1QhuAbg5BJAkQg2QCUgJAaBgQgCAIgFAGAkQg2QAQBFBaAhQAsAOARgPAkQg2QBuAbA5BK");
	this.shape_26.setTransform(0.2,-17.242);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A28360").s().p("ABqAvQA5hKBtgbQgPBGhbAgQgVAHgPAAQgPAAgJgIgAimAvQhZgggRhFQBuAbA5BJQgJAJgPAAQgPAAgWgIg");
	this.shape_27.setTransform(0.2,-17.1996);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#886139").s().p("ABjAlQAZhgCUAKQhtAbg5BJQgFgGgCgIgAkQgyQCUgJAaBgQgCAIgFAGQg5hKhugbg");
	this.shape_28.setTransform(0.2,-17.6424);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AEfgMQiGhBg8BPQgBAIACAIAEfgMQgqA5hfgEQgugDgKgUAEfgMQhwgQhRAuAkegQQAoA7BggBQAugCAKgUAkegQQCIg8A6BRQAAAIgCAHAkegQQBwgNBQAx");
	this.shape_29.setTransform(0.2,-17.6835);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#886139").s().p("AkdgFQCHg8A6BRQABAIgDAHQhQgxhvANgABdANQA8hPCGBBQhwgQhRAuQgBgIAAgIg");
	this.shape_30.setTransform(0.2,-18.7843);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A28360").s().p("AkdgbQBvgNBQAxQgKAUguACIgDAAQheAAgmg6gACWAeQgugDgKgUQBRgvBwAQQgnA2hWAAIgMAAg");
	this.shape_31.setTransform(0.2,-16.5333);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AERg1QhuAbg5BJAERg1QiUgKgaBgQADAIAEAGAERg1QgQBFhaAgQgsAPgRgQAkQg2QBuAbA5BKAkQg2QAQBFBaAhQAsAOARgPAkQg2QCUgJAaBgQgCAIgFAG");
	this.shape_32.setTransform(0.2,-17.242);

	var maskedShapeInstanceList = [this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},7).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_32}]},4).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-45.8,62.199999999999996,77.1);


// stage content:
(lib.knack_no = function(mode,startPosition,loop,reversed) {
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
			mystage.font = 'Chau Philomene One'; // Google API font
			mystage.color = '#ff0000'; // Text color
			mystage.shad1 = '#333333'; // Main shadow color
			mystage.shad2 = '#333333'; // Alt shadow color
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
	this.instance.setTransform(59.3,60.4,0.9333,0.9333,0,0,0,-1.6,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(65.5,69.7,37.5,37.89999999999999);
// library properties:
lib.properties = {
	id: '8F6504BFFD572E4F939766561DC746C6',
	width: 100,
	height: 100,
	fps: 12,
	color: "#666666",
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