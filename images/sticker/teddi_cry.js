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
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("Ag0BLQgVgfAAgsQAAgrAVghQAWgeAeAAQAeAAAXAeQAVAhAAArQAAAsgVAfQgXAggeABQgegBgWggg");
	this.shape.setTransform(20.325,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA8C63").s().p("AhhB0QgogwAAhEQAAhEAogxQApgvA4gBQA5ABApAvQAoAxAABEQAABEgoAwQgpAyg5AAQg4AAgpgyg");
	this.shape_1.setTransform(13.825,16.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.torso, new cjs.Rectangle(0,0,27.7,33.1), null);


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


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crying
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84A8D7").s().p("AEACcQgNgSgBgUIAbAWQAMAIgGAKQgEAFgFAAQgFAAgFgHgAC/CUQgKgVAFgUIAYAdQAJAKgIAIQgFADgEAAQgGAAgFgJgAENBJIgSgXQASAAAQAMQAKAJgKAHIgGABQgFAAgFgGgAjkgYQgCgRASgFIAvgQQgMAcgZASQgIAEgGAAQgJAAgDgMgAkRhYQgVgCAHgRQAHgNAQAGIApANQgWANgaAAIgCAAgAjQiNQgLgEABgKQADgMANAIQAPAKAHARg");
	this.shape.setTransform(2.15,4.0579);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#84A8D7").s().p("AEaDCQgNgSgBgUIAbAWQAMAIgGAKQgEAFgFAAQgFAAgFgHgAC3C2QgKgUAFgVIAYAdQAJALgIAIQgFADgEAAQgGAAgFgKgAFGBVIgSgXQASAAAPAMQALAJgLAHIgFABQgFAAgFgGgAkYAbQgCgRASgFIAugPQgMAbgZARQgHAFgGAAQgJAAgDgMgAlKhPQgVgCAHgRQAHgNAQAGIApANQgWANgaAAIgCAAgAj8izQgKgEAAgKQAEgMAMAIQAPAKAHARg");
	this.shape_1.setTransform(2.25,3.8579);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[]},2).wait(2));

	// leg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A87E59").s().p("AgnCkQgigIAQg7QAPg5gTg5QgMgmALgqQAGgvAugTQAtgTAVA3QAOAKgjDQQAlAKgEAtQgDASglADQgMACgNAAQgUAAgWgFg");
	this.shape_2.setTransform(-13.9183,32.747);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(6));

	// arms
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A87E59").s().p("AAxB6QBLg6gxhSQgXgnAzgYQA6gZAfBAQAgBGhdBGQgnAcgZAAQgKAAgIgEgAi/BFQgTgVAWgwQBKiCB0AFQAwAEgHAzQgEAhhGAdQhXAiggAlQgMAPgLAAQgJAAgJgJg");
	this.shape_3.setTransform(6.8039,3.4242);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A87E59").s().p("AAiB8QBSgvglhXQgQgrA1gQQA9gRAVBEQAWBKhmA4QgkATgYAAQgOAAgKgHgAjEAlQgQgYAcgrQBdh3BxAWQAvALgOAyQgJAfhJATQhbAVglAgQgNALgKAAQgKAAgIgLg");
	this.shape_4.setTransform(6.6035,4.468);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_4}]},2).wait(2));

	// mouth
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#302831").s().p("AgmgFQAYghAvAOQAMAMgMAMIgYAAQgBAdgTAAIgBAAQgYAAgCgig");
	this.shape_5.setTransform(8,9.9772);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A87E59").ss(1,1,1).p("AgdgNQAnAEATAX");
	this.shape_6.setTransform(8.65,11.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A87E59").ss(1,1,1).p("AgbgRQAmAJARAa");
	this.shape_7.setTransform(7.25,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).wait(2));

	// nose shine
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.647)").s().p("AgCAJQgIgCgEgFQgGgDABgEQABgEAHgBQAGgBAHADQAIADAFAEQAGADgBAEQgBAEgHABIgEAAQgFAAgFgCg");
	this.shape_8.setTransform(11.8005,3.4357);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.647)").s().p("AALAMQgGABgHgEQgIgEgEgFQgFgEABgEQACgEAHABQAGAAAHADQAHAEAFAEQAFAFgCAEQgCADgFAAIgBAAg");
	this.shape_9.setTransform(11.7875,4.8247);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.647)").s().p("AAJANQgGAAgGgFQgIgEgDgFQgFgFACgEQACgDAHABQAHABAGADIALAJQAEAGgCADQgCADgEAAIgDAAg");
	this.shape_10.setTransform(11.0411,5.5239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).wait(2));

	// nose
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghgRQAEgPANAEIAoANQANAEgCAPQgFAUgkAGQgggcAFgTg");
	this.shape_11.setTransform(11.5364,3.509);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfgTQAGgPAMAGIAnATQAMAFgFAPQgHATglABQgcgfAIgTg");
	this.shape_12.setTransform(11.5975,4.6643);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPAfQgYghAJgTQAIgOAMAHIAkAXQALAGgGAPQgIAPgaAAIgMAAg");
	this.shape_13.setTransform(10.8701,5.1868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).wait(2));

	// muzzle
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECD5BA").s().p("AgSBTQgkgLgVghQgTggAHghQAJgjAegRQAggQAjALQAkAMAVAgQATAggIAiQgIAjgeAQQgTAKgUAAQgNAAgPgFg");
	this.shape_14.setTransform(10.5622,6.5579);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECD5BA").s().p("AgeBQQgigQgQgjQgOgiAMghQANghAhgNQAhgLAhAQQAjARAQAiQAOAigMAiQgNAhghAMQgOAFgOAAQgTAAgUgKg");
	this.shape_15.setTransform(10.125,7.7406);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECD5BA").s().p("AgmBNQgggUgMglQgLgjAQgfQAQggAigKQAhgHAhATQAgAVAMAkQALAjgQAgQgQAfgiAJQgKADgKAAQgXAAgXgOg");
	this.shape_16.setTransform(9.075,8.2325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).wait(2));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(9.05,-5.15,1,1,14.9992,0,0,21.1,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:21,rotation:23.1833,x:10.15,y:-4.05},0).wait(2).to({regX:21.1,regY:19.8,rotation:29.1411,x:10.45,y:-3.5},0).wait(2));

	// torso
	this.instance_1 = new lib.torso();
	this.instance_1.setTransform(-2.7,18.3,1,1,29.9992,0,0,13.8,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6));

	// legs
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#66FF00").ss(1,1,1).p("AAAglIAAAVIABA2");
	this.shape_17.setTransform(-10.15,27.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A87E59").s().p("AgcBiQgGg9gmgyQgZgggEgtIgFABIAFgGQgCgXAEgZIAcALIAUgYQAQAUAKAVIAnAPIArChQAmgDAMAtQAEASghAQQgfARgjADIgFAAQgeAAgFg7gAhqhLIABABIAAA2g");
	this.shape_18.setTransform(0.5418,33.715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).to({state:[{t:this.shape_18},{t:this.shape_17}]},2).to({state:[{t:this.shape_18},{t:this.shape_17}]},2).wait(2));

	// ears
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A87E59").s().p("ACbB8QghgJgSgdQgTgdAJgfQAIgfAegRQAfgQAhAJQAjAJARAcQASAegIAgQgJAfgeAQQgTAKgVAAQgMAAgMgDgACYAKQgQAIgFASQgFARALAPQAKAQASAFQASAFARgJQAPgJAEgRQAFgRgJgPQgKgQgSgFQgGgCgHAAQgLAAgLAGgAjDAeQgigJgSgcQgSgdAJgfQAIggAegRQAegQAiAJQAiAJASAdQASAegJAgQgJAegdAQQgUAKgVAAQgLAAgMgDgAjGhTQgQAIgFASQgEARAKAPQAJAQASAFQASAEARgIQAQgJAEgRQAFgRgKgQQgJgPgTgFQgGgCgHAAQgLAAgKAGg");
	this.shape_19.setTransform(12.5,-18.3147);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7D5A33").s().p("AClBZQgSgFgKgQQgKgQAEgRQAFgRARgJQARgIARAFQATAFAJAPQAJAPgFASQgEARgPAJQgLAFgLAAQgHAAgGgBgAi6gEQgSgFgJgQQgKgQAFgRQAFgRAPgJQARgIASAFQASAEAKAQQAJAPgFASQgEARgQAIQgLAGgMAAIgMgBg");
	this.shape_20.setTransform(12.492,-18.2533);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7D5A33").s().p("ACWBvQgRgIgHgRQgIgQAHgRQAHgRARgFQATgGAQAHQASAIAHAQQAHAQgIARQgHAQgQAHQgIADgIAAQgJAAgKgEgAi3gfQgRgIgHgRQgIgQAHgRQAIgQAQgHQASgFARAHQARAHAHARQAIAQgIARQgHAQgQAGQgJAEgIAAQgJAAgJgEg");
	this.shape_21.setTransform(15.5819,-16.528);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A87E59").s().p("ACICRQgggOgOgfQgOgfANgeQANgeAhgMQAggLAgAOQAgAMANAgQAOAfgNAfQgNAeggALQgPAFgPAAQgRAAgRgHgACVAgQgRAFgHARQgHARAIAQQAHARARAIQASAIARgHQAQgHAHgQQAIgRgHgQQgHgQgSgIQgJgEgKAAQgIAAgIADgAjGACQgggNgNgfQgOgfANgeQANgeAggNQAggMAgAOQAhAOAOAfQAMAggNAfQgMAeggAKQgPAFgPAAQgSAAgRgHgAi4hvQgQAHgIAQQgHARAIAQQAHARARAIQARAHASgHQAQgGAHgQQAIgRgIgQQgHgRgRgHQgKgEgKAAQgHAAgIACg");
	this.shape_22.setTransform(15.5809,-16.6196);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7D5A33").s().p("ACKB+QgQgJgGgSQgGgRAIgQQAKgQARgEQATgEAQAJQAQAJAGASQAFAQgJARQgJAPgRAFQgGABgGAAQgLAAgLgGgAizgyQgQgJgFgSQgGgRAJgQQAIgPASgFQASgEAQAJQARAJAFARQAGASgJAPQgJAQgRAEQgHACgHAAQgLAAgKgGg");
	this.shape_23.setTransform(17.042,-15.3128);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A87E59").s().p("AB4CfQgfgSgKggQgLggAQgdQAQgdAigJQAigHAeARQAfAQAJAhQALAhgQAdQgRAcggAIQgLADgLAAQgWAAgUgLgACRAvQgRAEgKAQQgIAQAGARQAGASAQAJQARAKARgFQARgFAJgPQAJgRgFgQQgGgSgQgJQgLgGgNAAIgLABgAjFgRQgegSgKggQgLggAQgdQAQgdAhgJQAhgIAfARQAfARAKAhQAKAhgRAdQgPAcggAIQgMADgLAAQgWAAgUgLgAiriBQgSAFgIAPQgJAQAGARQAFASAQAJQAQAJATgFQARgEAJgQQAJgPgGgSQgFgRgRgJQgMgGgMAAIgKABg");
	this.shape_24.setTransform(17.025,-15.4111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-32.3,73.69999999999999,82);


// stage content:
(lib.teddi_cry = function(mode,startPosition,loop) {
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
	this.instance.setTransform(63.65,62.15,0.9259,0.9259,0,0,0,0.7,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(88.2,74,10.5,24.700000000000003);
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