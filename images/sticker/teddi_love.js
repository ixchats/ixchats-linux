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


(lib.hearts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F89A97").s().p("AgsgHQgEgRANgIQAVgNAOAaQAGgcAYAGQAPAEAAASQAAAhgmAdQgqgSgJggg");
	this.shape.setTransform(4.5515,4.2638);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hearts, new cjs.Rectangle(0,0,9.1,8.6), null);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.557)").s().p("AgIAIQgEgDAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(2.1,2.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89A97").s().p("AglgNQAAgNAMgDQAUgFAFAUQAMgSATAJQAKAGgDAMQgIAXgkANQgggVABgXg");
	this.shape_1.setTransform(4.4934,4.376);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA7773").s().p("AgsgTQAAgRAOgEQAYgHAGAcQAOgZAWAMQANAIgEARQgJAggsASQglgdABghgAgZgcQgMADgBANQAAAXAfAVQAlgNAHgXQAEgMgLgGQgSgJgMASQgEgQgOAAIgHABg");
	this.shape_2.setTransform(4.5482,4.28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(0,0,9.1,8.6), null);


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

	// hearts
	this.instance = new lib.hearts();
	this.instance.setTransform(-34,-1.6,0.6593,0.6593,-29.9977,0,0,4.5,4.2);

	this.instance_1 = new lib.hearts();
	this.instance_1.setTransform(-41.95,-11.35,1,1,-14.9992,0,0,4.5,4.2);

	this.instance_2 = new lib.hearts();
	this.instance_2.setTransform(-30.9,-17.5,1,1,0,0,0,4.5,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:-30.9,y:-17.5}},{t:this.instance_1,p:{regY:4.2,scaleX:1,scaleY:1,rotation:-14.9992,x:-41.95,y:-11.35}},{t:this.instance,p:{regX:4.5,scaleX:0.6593,scaleY:0.6593,rotation:-29.9977,x:-34,y:-1.6}}]}).to({state:[{t:this.instance_2,p:{scaleX:0.7143,scaleY:0.7143,x:-31.85,y:-26.35}},{t:this.instance_1,p:{regY:4.1,scaleX:0.4643,scaleY:0.4643,rotation:-14.9981,x:-43.5,y:-13.9}},{t:this.instance,p:{regX:4.4,scaleX:0.4324,scaleY:0.4324,rotation:-29.9974,x:-35.8,y:3}}]},2).wait(2));

	// hearteyes
	this.instance_3 = new lib.heart();
	this.instance_3.setTransform(0.1,-4.05,1.0929,1.0409,0,26.9884,-153.0117,4.5,4);

	this.instance_4 = new lib.heart();
	this.instance_4.setTransform(-15.9,-7.8,1,1,-6.9596,0,0,4.5,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:4.5,regY:4.2,scaleX:1,scaleY:1,rotation:-6.9596,x:-15.9,y:-7.8}},{t:this.instance_3,p:{regX:4.5,scaleX:1.0929,scaleY:1.0409,skewX:26.9884,skewY:-153.0117,x:0.1,y:-4.05}}]}).to({state:[{t:this.instance_4,p:{regX:4.4,regY:4,scaleX:1.3222,scaleY:1.3222,rotation:-10.4549,x:-16.45,y:-8.25}},{t:this.instance_3,p:{regX:4.4,scaleX:1.4891,scaleY:1.4183,skewX:23.4924,skewY:-156.5081,x:-0.15,y:-5.25}}]},2).wait(2));

	// arms
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#916C4B").s().p("AgiBKQgfgJgCgkQgCgrAzglQA0gpAiAaQgkAkAOA/IABAEQgjAogfAAQgIAAgHgDg");
	this.shape.setTransform(-9.0538,12.401);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A87E59").s().p("AhWAtIgBgEQgOg/AkgkQAQgQAZgKQAqgSAMAeQAJAXgGAVQANgJAVAHQAgANgJAhQgTA7hBANQgQAEgOAAQgzAAgLgvg");
	this.shape_1.setTransform(4.3285,11.6391);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#916C4B").s().p("AgbBNQgggHgEgjQgFgrAwgpQAxgsAjAXQghAnASA9IACAEQghAtghAAIgMgCg");
	this.shape_2.setTransform(-9.778,12.9598);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A87E59").s().p("AhTAyIgBgEQgTg9AignQAOgRAZgMQApgVANAdQALAWgEAWQAMgKAVAGQAhAJgGAiQgPA8g/ATQgVAGgQAAQgtAAgOgrg");
	this.shape_3.setTransform(3.6921,11.3842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// mouth
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A87E59").ss(1.5,1,1).p("AgugMQA2ApAngb");
	this.shape_4.setTransform(-10.25,5.4571);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A87E59").ss(1.5,1,1).p("AgugKQA4AmAlgd");
	this.shape_5.setTransform(-10.125,6.0899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(2));

	// nose shine
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.647)").s().p("AgCAJQgJgCgGgFQgGgDABgEQABgEAIgBQAHgBAIADQAKADAGAEQAGADgBAEQgBAEgHABIgGAAQgFAAgGgCg");
	this.shape_6.setTransform(-8.9245,-0.7143);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.647)").s().p("AgBAJQgKgCgGgEQgGgDAAgEQABgEAIgBQAHgBAJACQAKACAGAEQAGADAAAEQgBAEgIABIgHABIgJgCg");
	this.shape_7.setTransform(-9.1749,-0.2627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).wait(2));

	// nose
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgngRQAFgPAPAEIAvANQAPAEgDAPQgFAUgrAGQglgcAGgTg");
	this.shape_8.setTransform(-9.2363,-0.641);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgogPQAEgQAQADIAvAKQAQADgCAQQgEAUgqAIQgmgZADgTg");
	this.shape_9.setTransform(-9.5036,-0.0743);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).wait(2));

	// muzzle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECD5BA").s().p("AgVBTQgqgLgYghIgBgBQgWgfAJghQAKgjAjgRQAlgQApALQArAMAXAgQAXAggJAiQgJAigiAQIgCABQgWAKgXAAQgQAAgRgFg");
	this.shape_10.setTransform(-10.3689,2.4079);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECD5BA").s().p("AgRBVQgqgJgagfIgBgBQgXgeAHgiQAHgjAigTQAkgSAqAIQArAJAZAfQAZAfgHAiQgHAjghASIgCABQgYANgbAAQgMAAgPgDg");
	this.shape_11.setTransform(-10.3938,2.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).wait(2));

	// head
	this.instance_5 = new lib.head();
	this.instance_5.setTransform(-3.05,-5.95,1,1,14.9992,0,0,21.1,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({rotation:11.503,x:-3.55,y:-5.8},0).wait(2));

	// torso
	this.instance_6 = new lib.torso();
	this.instance_6.setTransform(0.05,17.9,1,1,-14.9992,0,0,13.8,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({x:-0.55},0).wait(2));

	// legs
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A87E59").s().p("AhlCXQggAAgdgNQgfgMAZgwQAXgwgHgzQgIg1Aug2IBIBQIgoCHQAeAOgLAlQgEANgYAAIgKAAgABJCPQgWglAbgWIhNiEIAuhmQA8AtAHA5QAIA4AkAsQAmAtgbAUQgYAVgfAJQgOAEgJAAQgNAAgFgIg");
	this.shape_12.setTransform(4.0732,30.6987);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A87E59").s().p("ABACPQgUglAbgWIhIiGIAxhlQA6AvAFA5QAHA5AiAtQAlAtgcAUQgZAUgfAIQgNAEgJAAQgOAAgFgJgAhcCVQggABgegNQgfgLAYgwQAWgxgJgzQgJg1Atg3IBJBOIgkCJQAfANgKAlQgFAPgaAAIgHgBg");
	this.shape_13.setTransform(3.1422,30.8541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},2).wait(2));

	// ears
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A87E59").s().p("ABlBmQgZgWgBghQABghAZgXQAZgXAjAAQAjAAAYAXQAaAXgBAhQAAAhgZAXQgYAXgkABQgigBgZgYgACAAQQgOANABASQgBARAOANQAPANASAAQATAAANgNQAMgMABgSQAAgSgNgMQgNgNgTAAIgCAAQgRAAgOAMgAi1AfQghgKgSgcQgSgcAIggQAJggAegQQAegRAiAKQAiAJASAdQARAdgIAgQgJAfgdAPQgUALgVAAQgMAAgMgDgAi3hTQgQAJgFARQgEARAJAQQAKAQASAFQASADARgIQAPgIAFgRQAFgSgKgPQgJgQgTgEQgGgCgHAAQgLAAgKAFg");
	this.shape_14.setTransform(1.7142,-19.5736);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7D5A33").s().p("ACABMQgOgMABgRQgBgSAOgNQAPgNASABQATAAANAMQANAMAAATQgBARgMANQgNANgTAAQgSgBgPgNgAirgEQgSgFgKgQQgJgPAEgRQAFgSAQgIQAQgJASAFQATAFAJAPQAKAQgFARQgFARgPAJQgLAGgMAAIgMgCg");
	this.shape_15.setTransform(1.7027,-19.5176);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7D5A33").s().p("ACEBEQgOgLAAgRQgCgSANgOQAOgMASgBQATgBAOALQANALABATQABARgLANQgNAOgTABIgCAAQgRAAgPgMgAirAGQgSgEgLgOQgKgPADgRQAEgSAPgKQAQgJASAEQATADAKAPQALAPgEASQgEARgPAJQgLAHgNAAIgKgBg");
	this.shape_16.setTransform(0.3073,-19.7083);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A87E59").s().p("ABrBgQgagVgDggQgBghAXgZQAYgYAigDQAjgCAaAWQAbAWACAhQACAggYAYQgXAZgjADIgGAAQgfAAgYgVgAChgFQgSABgOANQgNANACATQAAAQAOAMQAQAMASgBQATgBANgOQALgNgBgRQgBgSgNgMQgNgKgRAAIgDAAgAiyAqQgigHgUgcQgUgbAHggQAGghAdgRQAegTAhAHQAjAIAUAbQATAdgHAhQgGAegdARQgVAOgYAAQgJAAgJgCgAi8hHQgPAJgEASQgDARAKAPQALAOASAFQATADAPgKQAPgIAEgSQAEgRgLgQQgKgPgTgDIgLgBQgMAAgLAHg");
	this.shape_17.setTransform(0.3266,-19.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-32.2,73.7,78.30000000000001);


// stage content:
(lib.teddi_love = function(mode,startPosition,loop) {
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
	this.instance.setTransform(74.1,63.75,0.9687,0.9687,0,0,0,0.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(77.4,72.6,21.39999999999999,25.700000000000003);
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