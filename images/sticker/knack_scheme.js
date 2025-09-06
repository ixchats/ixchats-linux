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
	mask.graphics.p("AmZGYQg7AAAAhpIAApdQAAhpA7AAIMzAAQA7AAAABpIAAJdQAABpg7AAg");
	mask.setTransform(-1.7,-7.4132);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AA9AAQAAAZgSASQgSASgZAAQgZAAgSgSQgRgSAAgZQAAgYARgSQASgSAZAAQAZAAASASQASASAAAYg");
	this.shape.setTransform(2.45,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgqArQgSgSAAgZQAAgYASgSQARgSAZAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgZAAgRgSg");
	this.shape_1.setTransform(2.45,0.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:2.45,y:0.55}},{t:this.shape,p:{x:2.45,y:0.55}}]}).to({state:[{t:this.shape_1,p:{x:1.7,y:1.15}},{t:this.shape,p:{x:1.7,y:1.15}}]},3).wait(4));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ACXg5QAtA8i0AoQi0AoAFhGQDJgCBthEg");
	this.shape_2.setTransform(-0.1338,-0.3404);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.447)").s().p("AifANQDJgCBthEQAtA8i0AoQhBAPgpAAQhIAAADgtg");
	this.shape_3.setTransform(-0.1338,-0.3404);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-0.1338,y:-0.3404}},{t:this.shape_2,p:{x:-0.1338,y:-0.3404}}]}).to({state:[{t:this.shape_3,p:{x:-0.8817,y:0.1157}},{t:this.shape_2,p:{x:-0.8817,y:0.1157}}]},3).wait(4));

	// Layer_19
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("Ag/gDQgJgDgNAAQguAGgEAJQgGAOAVAEIA2ADIAAAAIAGAAQAEAIAFAHQAFAIAHAIQAPAaAVAQQASATAhgJQBBgVAlgmACJgKQg3Azg2AMIgTgsQgHgsgUgxQgJgRgNgIQgngMglANQgKANAWAKIAeALQAWAHAJAXQgcgRgbgBQgfgCgRAKQgIANANAIIAzAFQANACAOAXAgzABQgFgCgHgC");
	this.shape_4.setTransform(0.3858,21.9805);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#886139").s().p("AgDBnQgVgQgPgaIgMgQIgJgPIgGAAIAPAPIAMAQIgbgfIAAAAIAAAAIg2gDQgVgEAGgOQAEgJAugGQANAAAJADQgOgXgNgCIgzgFQgNgIAIgNQARgKAfACQAbABAcARQgJgXgWgHIgegLQgWgKAKgNQAlgNAnAMQANAIAJARQAUAxAHAsIATAsQA2gMA3gzIANBAQglAmhBAVQgLADgJAAQgTAAgMgNgAgzABQgFgCgHgCQAHACAFACg");
	this.shape_5.setTransform(0.3858,21.9805);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("Ag/gDQgJgDgNAAQguAGgEAJQgGAOAVAEIA2ADIABAAIAFAAQAEAIAFAIQAFAHAHAIQAPAaAVAQQASATAhgJQBBgVAlgmACJgKQg3Azg2AMIgTgsQgHgsgUgxQgJgRgNgIQgngMglANQgKANAWAKIAeALQAWAHAJAXQgcgRgbgBQgfgCgRAKQgIANANAIIAzAFQANACAOAXAgzABQgFgCgHgC");
	this.shape_6.setTransform(-0.8142,21.176);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#886139").s().p("AgDBnQgVgQgPgaIgMgPQgFgIgEgIIgFAAIAOAQIAMAPIgbgfIABAAIgBAAIg2gDQgVgEAGgOQAEgJAugGQANAAAJADQgOgXgNgCIgzgFQgNgIAIgNQARgKAfACQAbABAcARQgJgXgWgHIgegLQgWgKAKgNQAlgNAnAMQANAIAJARQAUAxAHAsIATAsQA2gMA3gzIANBAQglAmhBAVQgLADgJAAQgTAAgMgNgAgzABQgFgCgHgCQAHACAFACg");
	this.shape_7.setTransform(-0.8142,21.176);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ACJgKQg3Azg2AMIgTgsQgHgsgUgxQgJgRgNgIQgngMglANQgKANAWAKIAeALQAWAHAJAXQgcgRgbgBQgfgCgRAKQgIANANAIIAzAFQANACAOAXQgJgDgNAAQguAGgEAJQgGAOAVAEIA2ADIAAAAIAGAAQAEAIAFAHQAFAIAHAIQAPAaAVAQQASATAhgJQBBgVAlgmAgzABQgFgCgHgC");
	this.shape_8.setTransform(0.3858,21.9805);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ACJgKQg3Azg2AMIgTgsQgHgsgUgxQgJgRgNgIQgngMglANQgKANAWAKIAeALQAWAHAJAXQgcgRgbgBQgfgCgRAKQgIANANAIIAzAFQANACAOAXQgJgDgNAAQguAGgEAJQgGAOAVAEIA2ADIABAAIAFAAQAEAIAFAIQAFAHAHAIQAPAaAVAQQASATAhgJQBBgVAlgmAgzABQgFgCgHgC");
	this.shape_9.setTransform(-0.8142,21.176);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_5},{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_9}]},2).wait(1));

	// Layer_20
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgEhBIAegLQAJgSgUgGQgagGgcAOQgRAKADASIAIAVQgLAGgKAMQgLANALAQQAJANAUAEQgLAGgKALQgMAVAZAVQAcAYArgBAgrgGQAmgHAFgPQACgRgQgDQgRgDgOAIAgXA2QAbgIAIgOQACgSgPgBQgUgCgQAKAgVg8IARgFAA/BFQASg1gQgZIADg7QgLgRgZAQIgMBAIgYg8");
	this.shape_10.setTransform(-15.3243,21.6479);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#886139").s().p("AA9CAQgLgHgQgRQgKgMgNgRQgrAAgcgYQgZgVAMgUQAKgLALgGQgUgDgJgNQgLgRALgNQAKgMALgGIABgBIABAAIAAAAQAKgFAKAAIAAAAIABAAIAIAAQAOADAAANIAAAFQgFAPgmAGQAmgGAFgPIAAgFQAAgNgOgDIgIAAIgBAAIAAAAQgKAAgKAFIAAAAIgBAAIgBABIgIgWQgDgSARgJQAcgOAaAFQAUAGgJASIgeAMIgRAFIARgFIAYA8IAMhBQAZgQALASIgDA6QAQAagSA1IAnA/QgCAbgNAAQgFAAgGgDgAgCADQgIAPgcAIQAcgIAIgPIAAgDQAAgNgOgBIgBAAIgGgBIAAAAIAAAAQgQABgNAHQANgHAQgBIAAAAIAAAAIAGABIABAAQAOABAAANIAAADg");
	this.shape_11.setTransform(-13.8439,24.4716);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgEhBIAegLQAJgSgUgGQgagGgcAOQgRAKADASIAIAVQgLAGgKAMQgLANALAQQAJANAUAEAgrgGQAmgHAFgPQACgRgQgDQgRgDgOAIAgVg8IARgFAA/BFQASg1gQgZIADg7QgLgRgZAQIgMBAIgYg8AgXA2QAbgIAIgOQACgSgPgBQgUgCgQAKQgLAGgKALQgMAVAZAVQAcAYArgB");
	this.shape_12.setTransform(-14.3243,22.9479);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#886139").s().p("AA9CAQgLgHgQgRQgLgMgMgRQgrAAgcgYQgZgVAMgUQAKgLALgGIABAAIABgBIABAAQAMgGANgBIABAAIAAAAIADABIABAAIACAAIABAAQAOABAAANIAAADQgIAPgcAIQAcgIAIgPIAAgDQAAgNgOgBIgBAAIgCAAIgBAAIgDgBIAAAAIgBAAQgNABgMAGIgBAAIgBABIgBAAQgUgDgJgNQgLgRALgNQAKgMALgGIAAAAIADgCQAJgEAKAAIAAAAIABAAIAIAAQAOADAAANIAAAFQgFAPgmAGQAmgGAFgPIAAgFQAAgNgOgDIgIAAIgBAAIAAAAQgKAAgJAEIgDACIAAAAIgIgWQgDgSARgJQAcgOAaAFQAUAGgJASIgeAMIgRAFIARgFIAYA8IAMhBQAZgQALASIgDA6QAQAagSA1IAnA/QgCAbgNAAQgFAAgGgDg");
	this.shape_13.setTransform(-12.8439,25.7681);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgEhBIAegLQAJgSgUgGQgagGgcAOQgRAKADASIAIAVQgLAGgKAMQgLANALAQQAJANAUAEQgLAGgKALQgMAVAZAVQAcAYArgBAA/BFQASg1gQgZIADg7QgLgRgZAQIgMBAIgYg8AgrgGQAmgHAFgPQACgRgQgDQgRgDgOAIAgXA2QAbgIAIgOQACgSgPgBQgUgCgQAKAgVg8IARgF");
	this.shape_14.setTransform(-15.3243,21.6479);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgEhBIAegLQAJgSgUgGQgagGgcAOQgRAKADASIAIAVQgLAGgKAMQgLANALAQQAJANAUAEQgLAGgKALQgMAVAZAVQAcAYArgBAgrgGQAmgHAFgPQACgRgQgDQgRgDgOAIAA/BFQASg1gQgZIADg7QgLgRgZAQIgMBAIgYg8AgVg8IARgFAgXA2QAbgIAIgOQACgSgPgBQgUgCgQAK");
	this.shape_15.setTransform(-14.3243,22.9479);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#886139").s().p("AA9CAQgLgHgQgRQgLgMgMgRQgrAAgcgYQgZgVAMgUQAKgLALgGQgUgDgJgNQgLgRALgNQAKgMALgGIAAAAIADgCQAJgEAKAAIAAAAIABAAIAIAAQAOADAAANIAAAFQgFAPgmAGQAmgGAFgPIAAgFQAAgNgOgDIgIAAIgBAAIAAAAQgKAAgJAEIgDACIAAAAIgIgWQgDgSARgJQAcgOAaAFQAUAGgJASIgeAMIAYA8IAMhBQAZgQALASIgDA6QAQAagSA1IAnA/QgCAbgNAAQgFAAgGgDgAgCADQgIAPgcAIQAcgIAIgPIAAgDQAAgNgOgBIgBAAIgCAAIgBAAIgDgBIAAAAIgBAAQgNABgMAGIgBAAIgBABIgBAAIABAAIABgBIABAAQAMgGANgBIABAAIAAAAIADABIABAAIACAAIABAAQAOABAAANIAAADgAgkhYIARgFg");
	this.shape_16.setTransform(-12.8439,25.7681);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_11},{t:this.shape_14}]},2).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).wait(1));

	// mouth
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAiASQAYgLAOgQQgFARgLAMQggAhgugJQgVgGgPgNQgLgKgIgOQBnAgA0hOQAAAUgGAQAg6AZQAVAIAUgB");
	this.shape_17.setTransform(1.2,7.3214);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAsQgUgGgPgNIACABIACAAQAQAGAPAAIABAAIAAAAIACAAIADAAIgDAAIgCAAIAAAAIgBAAQgPAAgQgGIgCAAIgCgBQgLgKgIgOQBnAgAzhOQABAUgGAQQgFARgLAMQgaAaghAAQgJAAgLgCgAAiASQAYgLAOgQQgOAQgYALgAg6AZIAAAAg");
	this.shape_18.setTransform(1.2,7.3214);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AhSAkQgQgOgLgVQCSAwBJhzQAAAdgIAYQgIAYgPATQguAvhCgNQgcgJgVgTQAdALAcgBAAwAZQAigPAUgX");
	this.shape_19.setTransform(1.15,6.9744);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggBAQgegJgUgTIAEACQAZAIAXAAIAAAAIAAAAIAEAAIABAAIgBAAIgEAAIAAAAIAAAAQgXAAgZgIIgEgCQgQgOgLgVQCSAwBIhzQABAdgIAYQgUAXgiAPQAigPAUgXQgIAYgPATQgkAlgvAAQgOAAgOgDgABmgNIAAAAg");
	this.shape_20.setTransform(1.15,6.9744);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAtAZQAigNAWgXQgJAYgRASQgvAthBgQQgdgLgTgTQgQgPgJgUQCPA1BOhvQgBAdgJAXAhVAeQAdAMAbAB");
	this.shape_21.setTransform(0.375,7.6463);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglA8QgdgLgTgTQAdAMAbABQgbgBgdgMQgQgPgJgUQCPA1BOhvQgBAdgJAXQgJAYgRASQgjAhgrAAQgRAAgRgEgAAtAZQAigNAWgXQgWAXgiANgAhVAeIAAAAg");
	this.shape_22.setTransform(0.375,7.6463);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AhKAgQgOgNgJgSQCBApBChjQAAAZgHAVQgHAVgOAQQgpApg6gLQgagIgTgQQAbAJAYgBAAqAWQAfgNASgU");
	this.shape_23.setTransform(1.1,6.9248);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdA4QgagIgTgQIAEABIAAAAIABAAQAWAHATAAIABAAIAAAAIAEAAIgEAAIAAAAIgBAAQgTAAgWgHIgBAAIAAAAIgEgBQgOgNgJgSQCBApBChjQAAAZgHAVQgSAUgfANQAfgNASgUQgHAVgOAQQggAggqAAQgMAAgNgCgABbgLIAAAAg");
	this.shape_24.setTransform(1.1,6.9248);

	var maskedShapeInstanceList = [this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).wait(3));

	// eyeline
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AAngLQAng+AlAjAhyAnQA2gQA4AcIgCgs");
	this.shape_25.setTransform(-3.225,-10.5449);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AAogPQAqg8AjAkAh0AlQA2gOA3AfIAAgs");
	this.shape_26.setTransform(-3.3,-10.6153);

	var maskedShapeInstanceList = [this.shape_25,this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},3).wait(4));

	// pupils
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7B0000").s().p("AhVAjQgGgEgBgIQgBgHAEgGQAEgGAHgBQAIgCAGAFQAFAEABAHQACAIgEAGQgEAFgIACIgCAAQgGAAgFgDgAA6ADQgIgEgCgJQgCgJAGgIQAFgIAKgBQAJgCAHAGQAIAFACAJQACAJgGAIQgFAHgKABIgEAAQgHAAgFgEg");
	this.shape_27.setTransform(-1.085,-5.8061);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7B0000").s().p("AhWAfQgGgFgBgIQgBgGAFgGQAEgGAHAAQAIgBAGAEQAFAEABAHQABAIgEAGQgFAFgHABIgCAAQgGAAgFgDgAA6AGQgIgFgBgJQgBgJAGgIQAFgHAKgBQAJgBAHAGQAIAFABAJQACAKgHAGQgFAIgKABIgCAAQgIAAgGgFg");
	this.shape_28.setTransform(-1.429,-5.5294);

	var maskedShapeInstanceList = [this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},3).wait(4));

	// eyes
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("ABwgUQAEAUgJASQgJARgRADQgQADgOgOQgPgNgDgVQgEgWAJgSQAJgRAQgDQARgDAOAOQAOAOAEAWgAglAGQAEAHABAIQADARgKANQgJAOgRACQgQADgOgJQgNgKgDgRQgDgQAJgOQAFgFAFgE");
	this.shape_29.setTransform(-1.262,-6.6413);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhfA9QgNgKgDgRQgDgQAJgOQAFgFAFgEQAdAAAdALQAEAHABAIQADARgKANQgJAOgRACIgIABQgMAAgKgHgAAzAbQgPgNgDgVQgEgWAJgSQAJgRAQgDQARgDAOAOQAOAOAEAWQAEAUgJASQgJARgRADIgFABQgOAAgLgMg");
	this.shape_30.setTransform(-1.262,-6.6413);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("ABxgOQADAUgKARQgKARgQADQgRABgNgOQgOgOgDgVQgDgWAKgSQAKgRARgBQAQgDAOAPQANAOADAXgAglAFQADAHABAIQADARgMANQgJANgRABQgQADgOgKQgNgLgCgRQgCgQAKgNQAFgFAGgE");
	this.shape_31.setTransform(-1.5906,-6.3684);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhiA5QgNgLgCgRQgCgQAKgNQAFgFAGgEQAcABAdANQADAHABAIQADARgMANQgJANgRABIgGABQgNAAgLgIgAAyAeQgOgOgDgVQgDgWAKgSQAKgRARgBQAQgDAOAPQANAOADAXQADAUgKARQgKARgQADIgDAAQgPAAgMgNg");
	this.shape_32.setTransform(-1.5906,-6.3684);

	var maskedShapeInstanceList = [this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},3).wait(4));

	// darkshadow
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.447)").s().p("AhsBNQgVgPgEgZQgEgYAOgUQAPgVAYgEQAZgEAVAPQAUAOAFAYQAEAZgPAUQgPAVgYAFIgLABQgSAAgQgMgAAoAsQgWgTgFgcQgFgeAPgZQANgYAZgFQAZgEAVATQAWASAFAeQAFAdgOAYQgOAZgZAEIgJABQgUAAgRgPg");
	this.shape_33.setTransform(-1.2625,-6.6185);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.447)").s().p("AhwBHQgUgPgCgZQgEgZAQgTQAPgUAZgDQAZgDAUAQQAUAPADAYQADAZgQAUQgQAUgYAEIgHAAQgUAAgSgOgAAmAuQgVgUgDgdQgEgeAQgYQAOgYAagDQAYgDAVAUQAVATADAfQAEAcgPAYQgQAYgYADIgIAAQgVAAgRgQg");
	this.shape_34.setTransform(-1.5741,-6.3281);

	var maskedShapeInstanceList = [this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_34}]},3).wait(4));

	// noseshine
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.647)").s().p("AgSARQgKgEgBgHQgBgHAIgIQAIgHAMgCQALgCAKAEQAKAFABAIQABAGgHAGQgIAIgNACIgGABQgIAAgHgDg");
	this.shape_35.setTransform(1.494,-0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.647)").s().p("AgTAQQgKgEAAgIQgCgHAJgHQAIgHAMgBQAMgCAKAFQAJAFABAIQABAHgIAGQgIAHgNABIgFABQgIAAgIgEg");
	this.shape_36.setTransform(0.9152,0.125);

	var maskedShapeInstanceList = [this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},3).wait(4));

	// nose
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgmAmQgUgKgEgRQgCgRAQgQQAQgQAagEQAZgFAUAKQAVAKACASQAEAQgQAQQgQAQgaAEIgPACQgRAAgOgHg");
	this.shape_37.setTransform(-0.1,0.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgoAkQgUgLgCgRQgCgRARgQQARgOAagEQAZgDAUALQAUALACASQACAQgQAQQgSAOgZAEIgKAAQgUAAgQgIg");
	this.shape_38.setTransform(-0.75,1.325);

	var maskedShapeInstanceList = [this.shape_37,this.shape_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37}]}).to({state:[{t:this.shape_38}]},3).wait(4));

	// hatball
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AAdgEQABACAAACQAAAJgGAIQgGAKgNACQgMADgKgHQgIgHgDgJQAAgCgBgCQgCgMAHgKQAHgJANgDQAMgCAJAHQAKAHACANg");
	this.shape_39.setTransform(-9.9966,-36.8906);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B9B9B9").s().p("AgRAZQgIgHgDgJIgBgEQgCgMAHgKQAHgJANgDQAMgCAJAHQAKAHACANIABAEQAAAJgGAIQgGAKgNACIgFABQgJAAgIgFg");
	this.shape_40.setTransform(-9.9966,-36.8906);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AAegDQAAACAAABQAAAKgGAJQgHAJgOACQgLACgKgIQgHgHgDgJQAAgCgBgCQgBgNAHgJQAIgJAMgCQAMgBAKAHQAJAHACANg");
	this.shape_41.setTransform(-8.8257,-36.9672);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B9B9B9").s().p("AgSAYQgHgHgDgJIgBgEQgBgNAHgJQAIgJAMgCQAMgBAKAHQAJAHACANIAAADQAAAKgGAJQgHAJgOACIgEAAQgJAAgIgGg");
	this.shape_42.setTransform(-8.8257,-36.9672);

	var maskedShapeInstanceList = [this.shape_39,this.shape_40,this.shape_41,this.shape_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},3).wait(4));

	// hat
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AB5gEQADACABACQAZAfgXAhQh/gqhtBTQgggUAFguQAEgIAHgIAB5gEQgJgvgtgLQhRgTglgXIgRADQgBAmgoAhQgaAVAKAgQAcghBagNQBPgPAxAig");
	this.shape_43.setTransform(-3.5698,-23.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B9B9B9").s().p("AiIABQAEgIAHgIQAcghBagOQBPgOAxAiIAEADQAZAggXAgQh/gphtBTQgggVAFgtg");
	this.shape_44.setTransform(-3.5698,-19.8918);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhpAKQAoggABgmIARgDQAlAXBRATQAtALAJAuQgxgihPAPQhaANgcAiQgKghAagVg");
	this.shape_45.setTransform(-3.9789,-27.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AB7AFQgHgvgsgNQhQgXgkgYIgSACQgCAmgqAfQgaAUAIAfAB7AFQADACABACQAXAggYAgQh+gwhwBOQgfgWAHgtQAEgIAIgIQAdgfBbgJQBQgLAvAkg");
	this.shape_46.setTransform(-3.2259,-23.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhoAJQAqgeACgmIASgCQAkAYBQAYQAsAMAHAvQgvgkhQALQhbAJgdAgQgIghAagUg");
	this.shape_47.setTransform(-3.4428,-28.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B9B9B9").s().p("AiIgDQAEgIAIgIQAdggBbgJQBQgLAvAlIAEAEQAXAfgYAgQh+gvhwBNQgfgWAHgsg");
	this.shape_48.setTransform(-3.2259,-19.8774);

	var maskedShapeInstanceList = [this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},3).wait(4));

	// head
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgujNQhTANgNA3Qg8EGBUA0QBGAqBGgNQBLgMA0g/QA+hNiQjjQgfgvhSAPg");
	this.shape_49.setTransform(0.3064,-3.4989);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#886139").s().p("Ah2CxQhUg0A8kGQANg3BTgNQBSgPAfAvQCQDjg+BNQg0A/hLAMQgQADgPAAQg3AAg2ggg");
	this.shape_50.setTransform(0.3064,-3.4989);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AghjOQhTAJgQA2QhJEDBSA4QBDAtBIgJQBLgJA3g8QBChKiGjqQgdgwhSALg");
	this.shape_51.setTransform(-0.4203,-3.1541);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#886139").s().p("Ah7CsQhSg4BJkDQAQg2BTgJQBSgLAdAwQCGDqhCBKQg3A8hLAJQgNABgLAAQg7AAg4glg");
	this.shape_52.setTransform(-0.4203,-3.1541);

	var maskedShapeInstanceList = [this.shape_49,this.shape_50,this.shape_51,this.shape_52];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_52},{t:this.shape_51}]},3).wait(4));

	// ears
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AENhYQhoAugrBSAENhYQiUAQgJBjQAEAIAGAFAENhYQgEBIhUAvQgpAVgSgMAkMADQBxAIBFBAAkMADQAcBDBeARQAuAGAOgSAkMADQCRghApBaQgBAJgDAG");
	this.shape_53.setTransform(-4.475,-17.5888);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A28360").s().p("AiSBXQhegRgchDQBxAIBFBAQgLAOgbAAQgKAAgMgCgAB6AoQArhSBoguQgEBIhUAvQgaAOgRAAQgKAAgGgFg");
	this.shape_54.setTransform(-4.475,-17.5888);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#886139").s().p("AkMAKQCRghApBaQgBAIgDAHQhFhAhxgIgABwAiQAJhjCUgQQhoAtgrBTQgGgFgEgIg");
	this.shape_55.setTransform(-4.475,-18.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AEPhOQgIBHhVArQgqATgSgNAEPhOQiUAJgOBiQAEAIAFAFAEPhOQhpApgwBPAkOgMQCSgcAlBdQgBAIgEAGAkOgMQAZBDBdAVQAtAJAPgSAkOgMQBxAMBBBD");
	this.shape_56.setTransform(-4.05,-17.0861);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#886139").s().p("AkOgGQCSgcAmBdQgCAIgEAGQhBhDhxgMgABtAjQAOhiCUgJQhpApgwBPQgGgFgDgIg");
	this.shape_57.setTransform(-4.05,-17.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A28360").s().p("AiXBMQhegVgZhDQBxAMBBBDQgKAMgXAAQgMAAgOgDgAB2AqQAwhPBpgpQgIBHhVArQgZAMgRAAQgLAAgHgGg");
	this.shape_58.setTransform(-4.05,-17.0861);

	var maskedShapeInstanceList = [this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},3).wait(4));

	// antlers
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AB2ArQA5gTAIgiQg3gWgDgPQgBgDAAgCQgDgTAfAIIAzAMQAUABgFgPQAAgCgBgBQgCgHgBgGIAhAtIASgTIAeAwQgCAAgCABQgcAJgmgIQgkA2g6ANgAgxA9Qg8gEgRggQAlgbAIgPQADgEAAgEQAAgagfARIguAaQgUAGABgRQACgXgIgVQgGgUgUATIgPAqQgKARgKgJQgNgUgDgaQgWgIgLAZQgKAfAOAeIAAAAQAPAjApACQAfADAjgSQAvAsA8gCg");
	this.shape_59.setTransform(-8.8212,-33.5207);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#613E1D").s().p("AikAoQgjASgfgDQgpgCgPgjIAAAAQgOgeAKgfQALgZAWAIQADAaANAUQAKAJAKgRIAPgqQAUgTAGAUQAIAVgCAXQgBARAUgGIAugaQAfgRAAAaQAAAEgDAEQgIAPglAbQARAgA8AEIgIAVIgFAAQg5AAgtgqgAB2ArQA5gTAIgiQg3gWgDgPIgBgFQgDgTAfAIIAzAMQAUABgFgPIgBgDIgDgNIAhAtIASgTIAeAwIgEABQgcAJgmgIQgkA2g6ANg");
	this.shape_60.setTransform(-8.8212,-33.5207);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ABzAzQA6gRAJgiQg1gXgDgQQAAgDgBgCQgBgTAeAJIAyAPQAVACgFgQQAAgBAAgBQgDgHAAgHIAfAvIATgSIAcAxQgCAAgCAAQgdAJgmgLQgnA1g6ALgAg1A9Qg7gHgQghQAmgZAJgOQADgFAAgDQACgaggAPIgvAYQgUAFACgRQADgXgHgWQgGgUgVASIgRAqQgKAQgKgKQgMgUgBgaQgWgJgNAZQgLAeAMAeIABABQANAjApAEQAfAEAjgQQAtAvA8ABg");
	this.shape_61.setTransform(-7.738,-33.7513);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#613E1D").s().p("AinAiQgjAQgfgEQgpgEgNgjIgBgBQgMgeALgeQANgZAWAJQABAaAMAUQAKAKAKgQIARgqQAVgSAGAUQAHAWgDAXQgCARAUgFIAvgYQAggPgCAaQAAADgDAFQgJAOgmAZQAQAhA7AHIgJAVQg8gBgtgvgABzAzQA6gRAJgiQg1gXgDgQIgBgFQgBgTAeAJIAyAPQAVACgFgQIAAgCQgDgHAAgHIAfAvIATgSIAcAxIgEAAQgdAJgmgLQgnA1g6ALg");
	this.shape_62.setTransform(-7.738,-33.7513);

	var maskedShapeInstanceList = [this.shape_59,this.shape_60,this.shape_61,this.shape_62];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.shape_62},{t:this.shape_61}]},3).wait(4));

	// scarf
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ABkguQAnCmgpAZQgZAOgfgFQAUhIgChTQgSBcgbAuQgmgGgRgbQAkhHAUg9ABkguQgqAQgqACQhmAFglgkQgEgEgDgEQgTgeAVgvQB6BfCIhqQAUA/gTAYQgEAFgEAEQgKAIgNAFg");
	this.shape_63.setTransform(0.2991,24.0547);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAqCaQAUhIgChTQgSBcgbAuQgmgGgRgbQAkhHAUg9QhmAFglgkIgHgIQgTgeAVgvQB6BfCIhqQAUA/gTAYIgIAJQgKAIgNAFQgqAQgqACQAqgCAqgQQAnCmgpAZQgTALgXAAIgOgCg");
	this.shape_64.setTransform(0.2991,24.0547);

	var maskedShapeInstanceList = [this.shape_63,this.shape_64];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63}]}).wait(7));

	// body_shade
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A28360").s().p("Ag9BsQgZgsAAhAIABgYQAEgwAUgkQAagtAjAAQAkAAAZAtQAVAkAEAwIABAYQAABAgaAsQgZAugkAAQgjAAgagug");
	this.shape_65.setTransform(0.25,20.525);

	var maskedShapeInstanceList = [this.shape_65];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(7));

	// body
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ACqAAQAABNgyA2QgxA3hGAAQhGAAgyg3Qgyg2AAhNQAAgwAVgoQALgXASgUQAyg2BGAAQBGAAAxA2QASAUALAXQAVAoAAAwg");
	this.shape_66.setTransform(0.1,26.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#886139").s().p("Ah3CDQgxg2AAhNQgBgwAVgoQALgXASgUQAyg2BGAAQBGAAAxA2QASAUALAXQAUAoAAAwQAABNgxA2QgxA3hGAAQhGAAgyg3g");
	this.shape_67.setTransform(0.1,26.975);

	var maskedShapeInstanceList = [this.shape_66,this.shape_67];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66}]}).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-42.9,63.3,76.3);


// stage content:
(lib.knack_scheme = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(60.3,60.4,0.9333,0.9333,0,0,0,-1.6,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(66.5,69.6,37.5,38);
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