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


(lib.zzz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6699FF").ss(2,1,1).p("AA/AAQAAAZgSASQgRARgZAAQgYAAgWgKQgWgLAEgeQADgeATgTQASgTAYAAQAZAAARASQASARAAAYg");
	this.shape.setTransform(6.276,6.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,204,255,0.647)").s().p("AgrAyQgWgLAEgeQADgeATgTQASgTAYAAQAZAAARASQASARAAAYQAAAZgSASQgRARgZAAQgYAAgWgKg");
	this.shape_1.setTransform(6.276,6.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zzz, new cjs.Rectangle(-1,-1,14.6,14.1), null);


// stage content:
(lib.mythy_relax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Crafty Girls'; // Google API font
			mystage.color = '#FFB6C1'; // Text color
			mystage.shad1 = '#C71585'; // Main shadow color
			mystage.shad2 = '#C71585'; // Alt shadow color
			mystage.shadow = '-1px -1px 0px $2, 2px 2px 0 $1, 2px -2px 0 $1, -2px 2px 0 $1, -2px -2px 0 $1, 2px 0px 0 $1, 0px 2px 0 $1, -2px 0px 0 $1, 0px -2px 0 $1'; // shadow
			//text-shadow: -1px -1px 0px #E97178, 2px 2px 0 #E34C55, 2px -2px 0 #E34C55, -2px 2px 0 #E34C55, -2px -2px 0 #E34C55, 2px 0px 0 #E34C55, 0px 2px 0 #E34C55, -2px 0px 0 #E34C55, 0px -2px 0 #E34C55;
			mystage.spacing =  '0.05'; // letter spacing in em's
			mystage.transform = 'rotate(-5deg)'; // transform
			//mystage.texty = 70; // text y offset in px (for text at bottom)
		
			StickerInit(mystage);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23));

	// zzz
	this.instance = new lib.zzz();
	this.instance.parent = this;
	this.instance.setTransform(53.45,29.85,1,1,0,0,180,6.2,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.4333,scaleY:1.4333,skewY:0,x:55.75,y:28.1},4).wait(14).to({scaleX:1,scaleY:1,skewY:180,x:53.45,y:29.85},4).wait(1));

	// brows
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAjAFQAwARAGAoAhXg9QA0gCASAj");
	this.shape.setTransform(78.2,24.9446);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23));

	// tophair
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgEgLQAXANAfAKQAfALABAqAgEgLQgRgdATgYQANApAtASQAoANgOA5QiJgPgdhJQAcAaAcAIQASAEASgDQAkgDAmA4AgcALQgdgfAIgaQATATAaAQ");
	this.shape_1.setTransform(77.7429,20.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F8DB9").s().p("AANAMQgegKgXgNQgRgeATgXQAOApAsATQAoAMgPA5QAAgqgggLg");
	this.shape_2.setTransform(81.3665,20.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C183D1").s().p("AgGADQgTADgSgFQgdgfAIgZQATATAaAQQAXAOAfAJQAfALABAqQgmg4gjADg");
	this.shape_3.setTransform(79.2385,21.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9A8FD").s().p("AhSgsQAcAbAcAIQASAFARgEQAlgDAlA3QiJgOgchKg");
	this.shape_4.setTransform(77.55,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgEgLQgRgdATgYQANApAtASQAoANgOA5AgEgLQAXANAfAKQAfALABAqQiJgPgdhJQAcAaAcAIQASAEASgDQAkgDAmA4AgcALQgdgfAIgaQATATAaAQ");
	this.shape_5.setTransform(77.7429,20.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_4},{t:this.shape_5}]},22).wait(1));

	// horn
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAegOIgChTIgXBAQAFAFAGAFQAHAFAHAEgAAhBRIgBguIgCgxAgUAqIgMAiQANAPAOAEQATAHATgOIAAgHAgIAGQAHAJAJAHQAKAIAOAFAgUAqQAIAMAMAKQAPAKASAHAgIAGIgMAkAAFghIgNAn");
	this.shape_6.setTransform(80.75,15.514);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEC489").s().p("AgeBNIANgiQAIAMAMALIgFAeQgOgEgOgPgAgRArIAMgkQAGAJAJAHIgHArQgMgLgIgMgAAKAXIAAAAgAgFAHIANgnIALAKIgLgKIAXg/IgMBJIgJAtQgJgHgGgJg");
	this.shape_7.setTransform(80.475,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4E0AB").s().p("AgTBfIAGgfQAOAKATAHIAAAHQgNAKgNAAQgGAAgHgDgAgNBAIAIgqQAJAIAOAFIACAuQgTgHgOgKgAgNBAIAAAAgAgFAWIAHgtIAMhKIADBTIgPgJIAPAJIABAxQgOgFgJgIgAgFAWIAAAAg");
	this.shape_8.setTransform(82.125,15.514);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AAegOIgChTIgXBAQAFAFAGAFQAHAFAHAEgAAhBRIgBguAgUAqIgMAiQANAPAOAEQATAHATgOIAAgHAgIAGQAHAJAJAHQAKAIAOAFIgCgxAgUAqQAIAMAMAKQAPAKASAHAgIAGIgMAkAAFghIgNAn");
	this.shape_9.setTransform(80.75,15.514);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4E0AB").s().p("AgTBfIAGgfIAIgqQAJAIAOAFIACAuQgTgHgOgKQAOAKATAHIAAAHQgNAKgNAAQgGAAgHgDgAgFAWIAHgtIAMhKIADBTIgPgJIAPAJIABAxQgOgFgJgIgAgFAWIAAAAg");
	this.shape_10.setTransform(82.125,15.514);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_10},{t:this.shape_9}]},22).wait(1));

	// pupils
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(2,1,1).p("AgZgMQgsACgEgiABKAsQgzADgGgq");
	this.shape_11.setTransform(76.5,29.907);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(23));

	// nostrils
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYAkQgGgCgBgDQgBgFADgEQADgEAFgBQAGgCAFACQAFAAACAFQACAEgDADQgDAEgGADIgGABIgFgBgAgpgLQgEgFABgGQAAgGADgFQADgDAEAAQAEAAADAFQAEAEgBAGQAAAHgDAEQgDAEgEAAQgEAAgDgFg");
	this.shape_12.setTransform(62.0472,31.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(23));

	// head
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#9999CC").ss(2,1,1).p("AglgJQAoAhAjgZ");
	this.shape_13.setTransform(62.125,38.2133);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CCCCCC").ss(2,1,1).p("ABpCLQAhhGAVg4QAmhhhdgtQgqgWg/AfIhJAmQgWgogmAXQg0AiAZAwQAJARAPAJQAKAyA6AGQAOgDAPACQAbAEAUAVQAdASAWgEQAVgEAPgb");
	this.shape_14.setTransform(72.135,36.3727);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA6BnQAVgEAPgbQgPAbgVAEQgWAEgdgSQgUgVgbgEQgPgCgOADQg6gGgKgyIADACIABABIAAAAIABABQAUAPATAAIAAAAIABAAQAPAAAOgKIABAAIAAgBIABAAIgBAAIAAABIgBAAQgOAKgPAAIgBAAIAAAAQgTAAgUgPIgBgBIAAAAIgBgBIgDgCQgPgJgJgRQgZgwA0giQAmgXAWAoIBJgmQA/gfAqAWQBdAtgmBhQgVA4ghBGQgggIgPgcgAiJAJIAAAAg");
	this.shape_15.setTransform(72.135,36.3727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},22).wait(1));

	// body
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#690505").ss(2,1,1).p("Ag6gBIALAPQAaAJAPgPQAIgHAFgOIgOgVAA7gVQgNgEgNgGQgeAVAIAgQANAIAQAF");
	this.shape_16.setTransform(57.025,56.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CCCCCC").ss(2,1,1).p("AD9hVIgBABIgbA5QATgiAJgYIAHgQQghhEhTAEQgzB1hngJIgRgWIgfggQgbAIgIAcQiSgGgUCIQgBAOAFAMQALAZAhAUQATAMAcAKIBNASQDgALBAicQAIgTAQgdACZAQQhFALgvgPAAIAAQgIgHgJgHAiHBsQgTATgKAVAhdhLIAgAzAD8hUQhcBKhogi");
	this.shape_17.setTransform(57.3227,58.9309);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9D4A4F").s().p("AALAWQgIggAegVIAaAKIgTA4QgQgFgNgIgAgvAOIgLgPIAzghIAOAVQgFAOgIAHQgKAJgNAAQgIAAgKgDg");
	this.shape_18.setTransform(57.025,56.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhXCmIhNgSQAKgVATgTQgTATgKAVQgcgKgTgMQghgUgLgZQgFgMABgOQAUiICSAGQAIgcAbgIIAfAgIARAWQBnAJAzh1QBTgEAhBEIgHAQIgBABIABgBQgJAYgTAiIAbg5IgbA5QgQAdgIATQg7CRjHAAIgeAAgABkAVQAXAAAagEIAEgBIgEABQgaAEgXAAIgBAAIAAAAQgjAAgbgJIATg4QAgALAfAAIAAAAIABAAQBEgBA/gxIABgBIgBABQg/AxhEABIgBAAIAAAAQgfAAgggLIgagKQgeAVAIAhQANAHAQAFQAbAJAjAAIAAAAIABAAgAAIAAIgRgOIARAOgAg9gYIALAQQAaAIAPgOQAJgHAEgPIgOgVgAg9gYIgggzgADhgbg");
	this.shape_19.setTransform(57.3227,58.9309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},22).wait(1));

	// feet
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#690505").ss(2,1,1).p("AhDg9IgQA9QATAUAggGIAJgfAAXAFQgJATgCAUQAbAYAjgHIAKgo");
	this.shape_20.setTransform(38.525,73.1303);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9D4A4F").s().p("AAEAsQACgUAJgTIBNARIgQgBIgKAoQgIABgIAAQgZAAgVgSgAhbAAIAQg9QALAZAhATIgJAfIgNABQgXAAgPgPg");
	this.shape_21.setTransform(39.325,73.1303);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},22).wait(1));

	// ears
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAIAzQAtg1A4AYQgXBFhCAEgAgyAGQAUhDgzghQguA5AhA5g");
	this.shape_22.setTransform(85.5192,21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAIAyQAtgzA4AXQgXBFhCAEgAhRheQAzAigUBBIgsAPQghg5Aug5g");
	this.shape_23.setTransform(85.5192,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_23},{t:this.shape_22}]},22).wait(1));

	// sidehair
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AAjjbQAxBXgKAzAAPhZQAQg4gDgnIAHgjIAJg6QBABFgMBFQgBAaA4AOQgLAqhCgYQgCAOgIALQgUAqAzA6QgagBgggfQgDAVgHAYQgJAiAbAcQgkgIgKgYQgEATgNAPQgPAiAnArQgNAHgcgVQgBAagNAYQgFATAaAZQgiABhYhsIBDgzQAIgMAHgMQAcgzAVgsQAWA6gEAcAAPhZQAdBCgHAjAhEBgQAiA6gBAeAgTABQAWgwAMgq");
	this.shape_24.setTransform(80.775,54.6251);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5FA2AB").s().p("Ag8gPIBCgzIAPgYQAiA5gBAfQgBAZgNAYQgFATAaAZIgBAAQghAAhXhqg");
	this.shape_25.setTransform(71.775,73.3501);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7AED6C").s().p("AgEBUQABgfghg4QAcg0AUgrQAXA6gFAbQgFATgMAOQgOAiAnArQgEACgFAAQgNAAgUgPg");
	this.shape_26.setTransform(77.6,64.6641);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5F05E").s().p("AgNBIQAEgbgWg5QAXgyAKgqQAdBDgGAjQgEAUgGAZQgKAiAcAcQgkgJgKgYg");
	this.shape_27.setTransform(82.05,56.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAD46A").s().p("AgRBjQAHgjgdhBQAQg4gEgoIAHgiQAxBXgLAyQgCAOgHAKQgTArAyA7QgbgBgeggg");
	this.shape_28.setTransform(86.3,45.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F87A4F").s().p("AgSBeQAKgzgxhWIAJg7QBABGgNBDQAAAaA3APQgHAbgdAAQgRAAgXgJg");
	this.shape_29.setTransform(90.05,37.0614);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("ABKhRQgCAOgIALQgUAqAzA6QgagBgggfQgDAVgHAYQgJAiAbAcQgkgIgKgYQgEATgNAPQgPAiAnArQgNAHgcgVQgBAagNAYQgFATAaAZQgiABhYhsIBDgzQAIgMAHgMQAcgzAVgsQAWA6gEAcAAjjbIAJg6QBABFgMBFQgBAaA4AOQgLAqhCgYAAPhZQAQg4gDgnIAHgjQAxBXgKAzAAPhZQAdBCgHAjAhEBgQAiA6gBAeAgTABQAWgwAMgq");
	this.shape_30.setTransform(80.775,54.6251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_30}]},22).wait(1));

	// tail
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("AAZiDQghAaATBDQAEAmgsADQgggDgBgfQgCgkAqgVQg5gUguA4Qg4BNBKBHQBHA/BjgfQBjgegNhsQgNgtgfgbQgXgUAmgkg");
	this.shape_31.setTransform(30.7452,85.1001);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#71CFF3").s().p("AhrBhQhKhIA4hNQAug4A5AUQgqAVACAkQABAfAgADQAsgDgEglQgThDAhgbIBfgGQgmAjAXAUQAfAbANAtQANBshjAeQghALgeAAQg8gBgvgpg");
	this.shape_32.setTransform(30.7452,85.1001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},22).wait(1));

	// moon
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#7B8757").ss(3,1,1).p("AE0mYQEEFKj2FnQhzCJjXgJQlcgxhUjrQGYEXDsljQCSjbgqjug");
	this.shape_33.setTransform(56.9358,44.2999);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCEF45").s().p("AgIGZQlcgxhUjrQGYEXDsljQCSjbgqjvQEEFLj2FnQhsCBjGAAIgYgBg");
	this.shape_34.setTransform(56.9358,44.2999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_34},{t:this.shape_33}]},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.3,51.9,41.3,48.1);
// library properties:
lib.properties = {
	id: 'B1069FE8785B7C4AAF6DA2E392B3701B',
	width: 100,
	height: 100,
	fps: 12,
	color: "#999999",
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;