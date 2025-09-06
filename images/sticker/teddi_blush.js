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
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AhEBQQgcghAAgvQAAguAcghQAdgiAnAAQAoAAAdAiQAcAhAAAuQAAAvgcAhQgdAhgoAAQgnAAgdghg");
	this.shape.setTransform(13.825,11.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA8C63").s().p("AhhB0QgogwAAhEQAAhEAogxQApgvA4gBQA5ABApAvQAoAxAABEQAABEgoAwQgpAyg5AAQg4AAgpgyg");
	this.shape_1.setTransform(13.825,16.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.torso, new cjs.Rectangle(0,0,27.7,33.1), null);


(lib.rightleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87E59").s().p("AgkCPQghgGgBgRQAAgrAigGIAAiYIBahCQAdBFgWA1QgWA1AKA4QAKA5ghAEQgNADgNAAQgSAAgSgFg");
	this.shape.setTransform(7.0745,14.7663);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightleg, new cjs.Rectangle(0,0,14.2,29.6), null);


(lib.nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("AAAAIQgKgBgHgDQgGgDAAgDQAAgDAIgCQAHgBAJABQAKABAHADQAGADAAADQgBADgHABIgMABIgEAAg");
	this.shape.setTransform(4.5501,2.1229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgogKQADgOAPABIAxAFQAPACgBAOQgCARgpAJQgogSACgQgAgLgJQgHACgBADQAAADAHACQAGAEAJABQAKAAAIgBQAHgBAAgEQABgCgHgEQgGgDgKgBIgGAAIgLABg");
	this.shape_1.setTransform(4.1233,2.3927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(0,0,8.3,4.8), null);


(lib.muzzle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECD5BA").s().p("AgJBEQgrgEgdgXQgbgWAEgcQAFgdAhgRQAigRAqAFQAsAEAcAWQAbAXgEAbQgEAdgiARQgbAOgiAAIgPgBg");
	this.shape.setTransform(10.5308,6.9149);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muzzle, new cjs.Rectangle(0,0,21.1,13.9), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A87E59").ss(1,1,1).p("AgmAJQAzAUAags");
	this.shape.setTransform(3.9,1.5577);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-1,-1,9.8,5.1), null);


(lib.leftleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87E59").s().p("AgpCOQgggLAVg2QATg1gMg3QgMg6Aqg9IBMBRIgcCVQAgAMgHAqQgFARghAAIgJAAQgaAAgagJg");
	this.shape.setTransform(6.13,15.1398);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftleg, new cjs.Rectangle(0,0,12.3,30.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABGATQgFAAgDgEQgCgDAAgFQABgEADgDQADgCAFAAQAFABADADQADADgBAFQAAAEgEADQgDACgEAAIgBAAgAhIADQgFgBgCgCQgDgEABgFQAAgEAEgDQADgDAFABQAEAAAEAEQACADAAAFQgBAEgDADQgEACgDAAIgCAAg");
	this.shape.setTransform(9.525,3.4256);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABFAlQgMgCgHgIQgIgKABgLQACgLAJgIQAJgHAMABQAMABAIAKQAHAIgCAMQgBAMgJAHQgIAGgKAAIgDAAgAA7gCQgDACgBAFQAAAEACAEQADADAFABQAEAAAEgCQAEgDAAgFQABgEgDgDQgDgEgFAAIgBAAQgEAAgDACgAhJAUQgMgCgIgIQgHgKABgKQABgMAKgIQAJgHAMABQAMACAHAJQAIAKgCAMQgBAKgJAIQgIAFgJAAIgEAAgAhSgSQgEACAAAFQgBAEADAEQACADAFAAQAFABAEgCQADgDABgFQAAgEgCgDQgEgEgEgBIgCAAQgEAAgCADg");
	this.shape_1.setTransform(10.0324,3.6692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,20.1,7.4), null);


(lib.ears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D5A33").s().p("ACjBEQgSgCgMgOQgMgOACgRQACgSAPgKQAQgLASACQATACAMAOQALANgCASQgDASgNAKQgNAKgPAAIgHgBgAitARQgSgCgMgOQgMgNADgRQACgSAOgLQAPgLASACQATACAMAOQAMAOgCASQgDASgOAJQgNAKgPAAIgGgBg");
	this.shape.setTransform(25.2938,10.5319);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A87E59").s().p("ACfBpQgigEgWgbQgWgaAEggQADggAcgVQAbgUAjAEQAjAEAWAaQAVAagDAhQgEAggbAUQgYARgcAAIgLAAgACMgHQgPAKgCASQgCARAMAOQAMAOASACQATADAQgMQANgKADgSQACgSgLgNQgMgOgTgCIgGgBQgPAAgNAKgAixA2QgjgEgWgbQgVgYAEghQADghAbgVQAcgUAiAEQAjAFAXAZQAVAbgDAhQgEAfgbAUQgYASgcAAIgLgBgAjEg6QgOALgCASQgDARAMANQAMAOASACQATADAPgMQAOgJADgSQACgSgMgOQgMgOgTgCIgFgBQgPAAgNAKg");
	this.shape_1.setTransform(25.2931,10.5237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ears, new cjs.Rectangle(0,0,50.6,21.1), null);


(lib.blush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC6941").s().p("AB0AeQgKgFgCgKQgBgJAHgHQAHgIAMgCQAMgCAJAFQAKAFACAIQACAJgIAJQgHAHgMADIgGAAQgHAAgIgDgAiOALQgLgEgFgJQgGgJAEgJQAEgIAKgDQALgDALAFQALAEAFAKQAFAJgEAHQgDAJgKADIgIABQgHAAgHgDg");
	this.shape.setTransform(16.2769,3.3258);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blush, new cjs.Rectangle(0,0,32.6,6.7), null);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye shine
	this.instance = new lib.eyes();
	this.instance.setTransform(-0.6,-2.05,1,1,0,0,0,10.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10,rotation:-6.1966,x:-0.75,y:-0.55},7).wait(8).to({regX:10.1,rotation:0,x:-0.6,y:-2.05},7).wait(14));

	// mouth
	this.instance_1 = new lib.mouth();
	this.instance_1.setTransform(1.45,9.6,1,1,0,0,0,3.9,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-6.1966,x:2.6,y:10.8},7).wait(8).to({rotation:0,x:1.45,y:9.6},7).wait(14));

	// nose shine
	this.instance_2 = new lib.nose();
	this.instance_2.setTransform(-0.9,4.7,1,1,0,0,0,4.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4,rotation:-6.1966,x:-0.35,y:6.15},7).wait(8).to({regX:4.1,rotation:0,x:-0.9,y:4.7},7).wait(14));

	// blush
	this.instance_3 = new lib.blush();
	this.instance_3.setTransform(-0.75,5.05,1,1,0,0,0,16.2,3.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-6.1966,x:-0.1,y:6.5,alpha:1},7).wait(8).to({rotation:0,x:-0.75,y:5.05,alpha:0},7).wait(14));

	// muzzle
	this.instance_4 = new lib.muzzle();
	this.instance_4.setTransform(-1.1,6.25,1,1,0,0,0,10.5,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-6.1966,x:-0.3,y:7.7},7).wait(8).to({rotation:0,x:-1.1,y:6.25},7).wait(14));

	// head
	this.instance_5 = new lib.head();
	this.instance_5.setTransform(0.35,-6.35,1,1,6.6955,0,0,21.1,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0.4983,x:-0.2,y:-4.9},7).wait(8).to({rotation:0.4983},0).to({rotation:6.6955,x:0.35,y:-6.35},7).wait(14));

	// ears
	this.instance_6 = new lib.ears();
	this.instance_6.setTransform(2.95,-21.1,1,1,0,0,0,25.3,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:25.2,rotation:-6.1966,x:0.7,y:-19.85},7).wait(8).to({regX:25.3,rotation:0,x:2.95,y:-21.1},7).wait(14));

	// torso
	this.instance_7 = new lib.torso();
	this.instance_7.setTransform(0,17.85,1,1,0,0,0,13.8,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

	// legr
	this.instance_8 = new lib.rightleg();
	this.instance_8.setTransform(5.8,33.65,1,1,0,0,0,7,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:3.9916,x:5.45},7).wait(8).to({rotation:0,x:5.8},7).wait(14));

	// legl
	this.instance_9 = new lib.leftleg();
	this.instance_9.setTransform(-7.7,32.6,1,1,0,0,0,6.1,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:6,rotation:-3.212,x:-7.5},7).wait(8).to({regX:6.1,rotation:0,x:-7.7},7).wait(14));

	// arms
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A87E59").s().p("ABjBtQgWgPAQgwQAWhCgMg1IAlgqQApAiAKBBQALBLgpAsQgQAQgRAAQgOAAgPgKgAivBTQgggzAYhIQAWg9AggRIArAmQgVAyAKBFQAHAxgZAMQgMAFgLAAQgVAAgQgWg");
	this.shape.setTransform(0.201,18.6463);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-33,53.8,81.9);


// stage content:
(lib.teddi_blush = function(mode,startPosition,loop) {
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
	this.instance.setTransform(67.1,64.5,0.9043,0.9043,0,0,0,0.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(95.7,76.7,-3.799999999999997,22.299999999999997);
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