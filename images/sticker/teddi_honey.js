(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
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


(lib.torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AhEBPQgcghAAguQAAguAcgiQAdggAnAAQAoAAAdAgQAcAiAAAuQAAAugcAhQgdAjgogBQgnABgdgjg");
	this.shape.setTransform(11.525,12.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA8C63").s().p("AhhB0QgogwAAhEQAAhEAogxQApgvA4gBQA5ABApAvQAoAxAABEQAABEgoAwQgpAyg5AAQg4AAgpgyg");
	this.shape_1.setTransform(13.825,16.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.torso, new cjs.Rectangle(0,0,27.7,33.1), null);


(lib.stick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDC960").s().p("Ah6ArICZhGIBHgtIAVAgIhxAsIhwBFg");
	this.shape.setTransform(12.325,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stick, new cjs.Rectangle(0,0,24.7,14.6), null);


(lib.nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("AgCAJQgJgCgGgFQgGgDABgEQABgEAIgBQAHgBAIADQAKADAGAEQAGADgBAEQgBAEgHABIgGAAQgFAAgGgCg");
	this.shape.setTransform(4.3755,2.9357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgngRQAFgPAPAEIAvANQAPAEgDAPQgFAUgrAGQglgcAGgTgAgKgLQgIABgBAEQgBAEAGADQAGAFAIACQAKADAIgBQAHgBABgEQABgEgGgDQgGgEgKgDQgFgCgGAAIgEAAg");
	this.shape_1.setTransform(4.0637,3.009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(0,0,8.2,6), null);


(lib.muzzle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECD5BA").s().p("AgVBTQgqgLgYghQgXggAJghQAKgjAjgRQAlgQApALQArAMAXAgQAXAggJAiQgJAjgkAQQgWAKgXAAQgQAAgRgFg");
	this.shape.setTransform(10.4353,8.8079);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muzzle, new cjs.Rectangle(0,0,20.9,17.6), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A87E59").ss(1,1,1).p("AgugQQAnA0A2gc");
	this.shape.setTransform(4.725,1.7447);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF99A1").s().p("AgdgQIAsgHQAOAGABATQgCATgSADIgEAAQgUAAgPgog");
	this.shape_1.setTransform(7.85,5.0912);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-1,-1,11.8,8.6), null);


(lib.honey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4B84A").s().p("AgcCUQAvgwgaijQgOgzgYAOIAygoQAdgUAMAmQgYA2AXDYg");
	this.shape.setTransform(4.575,14.7664);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.honey, new cjs.Rectangle(0,0,9.2,29.6), null);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("Ah4BgQgzgoAAg4QAAg3AzgnQAygoBGAAQBHAAAzAoQAxAnAAA3QAAA4gxAoQgzAnhHAAQhGAAgygng");
	this.shape.setTransform(21.2,26.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA8C63").s().p("AiUCNQg+g6gBhTQABhRA+g7QA+g6BWAAQBYAAA9A6QA/A7gBBRQABBTg/A6Qg9A6hYAAQhWAAg+g6g");
	this.shape_1.setTransform(21.15,19.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,42.3,39.9), null);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCAdQgEgBgCgEQgCgEABgFQAAgEAEgCQAFgDAEACQAEABADAEQACAEgBAEQgBAFgEACIgGACIgDgBgAhIgHQgFgBgBgEQgCgEABgFQABgEAEgCQAEgDAFACQAEABACAEQACAEgBAEQgBAEgEADIgGACIgDgBg");
	this.shape.setTransform(9.35,4.3667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA+AuQgLgDgGgJQgGgLADgLQADgMAKgEQALgHALADQALADAGAKQAGAKgDAMQgDALgKAGQgHADgHAAIgIgBgAA7AGQgEACgBAEQgBAFACAEQACAEAEABQAFABAEgCQAEgCABgFQABgEgCgEQgCgEgFgBIgDgBQgDAAgCACgAhMAJQgMgDgGgJQgFgKADgLQADgMAKgGQAKgGAMADQALADAGALQAGAKgDALQgDAKgLAHQgGADgHAAIgIgBgAhPgeQgEACgBAEQgBAFACAEQACAEAFABQAEABAEgCQAEgDABgEQABgEgCgEQgCgEgEgBIgDgBQgDAAgDACg");
	this.shape_1.setTransform(9.8221,4.695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,19.7,9.4), null);


(lib.ears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D5A33").s().p("AClBZQgSgFgKgQQgKgQAEgRQAFgRARgJQARgIARAFQATAFAJAPQAJAPgFASQgEARgPAJQgLAFgLAAQgHAAgGgBgAi6gEQgSgFgJgQQgKgQAFgRQAFgRAPgJQARgIASAFQASAEAKAQQAJAPgFASQgEARgQAIQgLAGgMAAIgMgBg");
	this.shape.setTransform(25.992,12.7967);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A87E59").s().p("ACbB8QghgJgSgdQgTgdAJgfQAIgfAegRQAfgQAhAJQAjAJARAcQASAegIAgQgJAfgeAQQgTAKgVAAQgMAAgMgDgACYAKQgQAIgFASQgFARALAPQAKAQASAFQASAFARgJQAPgJAEgRQAFgRgJgPQgKgQgSgFQgGgCgHAAQgLAAgLAGgAjDAeQgigJgSgcQgSgdAJgfQAIggAegRQAegQAiAJQAiAJASAdQASAegJAgQgJAegdAQQgUAKgVAAQgLAAgMgDgAjGhTQgQAIgFASQgEARAKAPQAJAQASAFQASAEARgIQAQgJAEgRQAFgRgKgQQgJgPgTgFQgGgCgHAAQgLAAgKAGg");
	this.shape_1.setTransform(26,12.7353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ears, new cjs.Rectangle(0,0,52,25.5), null);


(lib.arml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87E59").s().p("AgYBKQg+ghgEhGQgFg/A5gKQA4gKgBBCQgBBBBJAqQAKAqgoABQgsgJgngVg");
	this.shape.setTransform(9.1219,10.4342);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arml, new cjs.Rectangle(0,0,18.3,20.9), null);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// armr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87E59").s().p("AhWAkQgCglAygPQBGgZACgtQANgWATAMQAZARgFAvQgRBwhSASQgMADgLAAQgwAAgChBg");
	this.shape.setTransform(6.9614,20.3573);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	// honey
	this.instance = new lib.honey();
	this.instance.setTransform(-9.5,5.7,1,1,0,0,0,4.5,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleY:0.621,y:11.3},6).wait(12).to({scaleY:1,y:5.7},6).wait(9));

	// stick
	this.instance_1 = new lib.stick();
	this.instance_1.setTransform(-21.65,0.9,1,1,0,0,0,12.3,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regY:7.2,rotation:14.9992,x:-21.7,y:7.9},6).wait(12).to({regY:7.3,rotation:0,x:-21.65,y:0.9},6).wait(9));

	// pottop
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4B84A").s().p("AgpALQgRgFAAgGQAAgFARgFQASgEAXAAQAYAAASAEQARAFAAAFQAAAGgRAFQgSAEgYAAQgXAAgSgEg");
	this.shape_1.setTransform(-8.65,21.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C532F").s().p("AhCASQgbgHAAgLQAAgKAbgIQAcgHAmgBQAnABAcAHQAbAIAAAKQAAALgbAHQgcAJgngBQgmABgcgJgAgpgKQgRAFAAAFQAAAGARAFQASAEAXABQAYgBASgEQARgFAAgGQAAgFgRgFQgSgEgYAAQgXAAgSAEg");
	this.shape_2.setTransform(-8.65,21.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(36));

	// potshine
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA8F60").s().p("AgXAVQgKgJAAgMQAAgLAKgJQAKgIANAAQAOAAAKAIQAJAJABALQgBAMgJAJQgKAIgOAAQgNAAgKgIg");
	this.shape_3.setTransform(-12.55,29.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(36));

	// pot
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#825A31").s().p("AhDBAQgdgbAAglQAAglAdgbQAcgbAnABQAogBAcAbQAdAbAAAlQAAAlgdAbQgcAbgoAAQgnAAgcgbg");
	this.shape_4.setTransform(-8.675,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(36));

	// eyes
	this.instance_2 = new lib.eyes();
	this.instance_2.setTransform(0.05,-6.25,1,1,0,0,0,9.8,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({rotation:-8.961,x:0.3,y:-5.9},4).wait(11).to({rotation:0,x:0.05,y:-6.25},4).wait(2));

	// mouth
	this.instance_3 = new lib.mouth();
	this.instance_3.setTransform(-3.15,6.8,1,1,0,0,0,4.7,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({rotation:-8.961,x:-0.85,y:7.45},4).wait(11).to({rotation:0,x:-3.15,y:6.8},4).wait(2));

	// nose
	this.instance_4 = new lib.nose();
	this.instance_4.setTransform(-1.7,1.05,1,1,0,0,0,4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({rotation:-8.961,x:-0.35,y:1.6},4).wait(11).to({rotation:0,x:-1.7,y:1.05},4).wait(2));

	// muzzle
	this.instance_5 = new lib.muzzle();
	this.instance_5.setTransform(-2.7,4.1,1,1,0,0,0,10.5,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({rotation:-8.961,x:-0.9,y:4.75},4).wait(11).to({rotation:0,x:-2.7,y:4.1},4).wait(2));

	// head
	this.instance_6 = new lib.head();
	this.instance_6.setTransform(0.2,-6.4,1,1,14.9992,0,0,21.1,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({rotation:6.0375,x:0.35,y:-6.05},4).wait(11).to({rotation:14.9992,x:0.2,y:-6.4},4).wait(2));

	// arml
	this.instance_7 = new lib.arml();
	this.instance_7.setTransform(-20.3,3.65,1,1,0,0,0,9.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({regX:9,regY:10.3,scaleY:0.9122,rotation:-37.7459,x:-21.85,y:8.2},6).wait(12).to({regX:9.1,regY:10.4,scaleY:1,rotation:0,x:-20.3,y:3.65},6).wait(9));

	// feet
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA8C63").s().p("AA0gBQgDgpAzgYQAagGAfAOQAogsAkAUQAfARgNA4QgCgggYgDQgWAAgOARQg3A+ANA3IgDAAQgcAAhAhbgAiSBZQANg2g3g/QgOgQgWgBQgYAEgCAgQgNg5AfgRQAkgTAoArQAfgOAaAHQAzAXgDApQhABbgcAAIgDAAg");
	this.shape_5.setTransform(-0.375,33.0379);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBA889").s().p("AC9gxQAOgRAWAAQAYADACAgIgBADQggBVhHALQgNg3A3g+gAj5gcIgBgDQACggAYgEQAWABAOAQQA3A/gNA2QhHgKgghVg");
	this.shape_6.setTransform(-0.375,35.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(36));

	// torso
	this.instance_8 = new lib.torso();
	this.instance_8.setTransform(0.05,17.9,1,1,8.7451,0,0,13.8,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36));

	// ears
	this.instance_9 = new lib.ears();
	this.instance_9.setTransform(3.65,-19.6,1,1,0,0,0,26,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({rotation:-8.961,x:1.75,y:-19.65},4).wait(11).to({rotation:0,x:3.65,y:-19.6},4).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-36.2,65.2,78.30000000000001);


// stage content:
(lib.teddi_honey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
		this.clearAllSoundStreams();
		 
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Oswald'; // Google API font
			mystage.color = '#FFFFFF'; // Text color
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

	// anim
	this.instance = new lib.anim();
	this.instance.setTransform(69.4,66.7,1,1,0,0,0,0.7,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(84.8,74.2,13.600000000000009,24.39999999999999);
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;