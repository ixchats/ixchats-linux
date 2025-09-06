(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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


(lib.feet = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B36711").s().p("ABfAmQgkgggKg+QBVBeCbguQg4AyhJAOIgOABQgeAAgVgTgAigA4QhIgOg4gyQCbAuBVheQgJA+glAgQgVATgeAAIgPgBg");
	this.shape.setTransform(34.35,21.6272);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7911E").s().p("AAxAwQgEgeAAgkQAEhxBlA4QBnhXAKCAQB8AShDBPQgOASgRAPQgzAPgsAAQhYAAg5g/gAkgBgQgQgPgPgSQhDhPB8gSQAJiABpBXQBjg4AFBxQABAkgFAeQg5A/hYAAQgsAAgzgPg");
	this.shape_1.setTransform(34.35,11.1365);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B36711").s().p("ABUAmQghgjgEg+QBMBlCeggQg8AuhKAGIgEABQgkAAgXgZgAiRA9QhJgFg/gtQCgAdBLhmQgDA+ghAkQgXAagkAAIgEgBg");
	this.shape_2.setTransform(34.4,21.8042);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7911E").s().p("AAvAhQgCgfAEgkQAQhwBeBBQBwhMgDCAQB6AdhKBJQgRAQgRAOQgmAHghAAQhqAAg6hNgAkYBoQgRgNgRgQQhLhJB5geQgEiABxBLQBdhDAQBwQAFAkgBAeQg6BQhtAAQggAAgjgGg");
	this.shape_3.setTransform(34.3752,12.5297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,28.1);


(lib.donut = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#66CC66").ss(3,1,1).p("Agng/IAngNAgKBNIAygN");
	this.shape.setTransform(15.55,3.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(3,1,1).p("Ag8iTIALgdAAnCIIAWAp");
	this.shape_1.setTransform(0.375,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhWiKIAAAVACQhDIArAPAgDhiIAqgJAi6CLIAjgf");
	this.shape_2.setTransform(-0.925,-2.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFF00").ss(3,1,1).p("AB/g9IAfAfAidg6IAnALAgHAlIApAZ");
	this.shape_3.setTransform(-0.75,7.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(3,1,1).p("Ai1hkIAYAcAAVhuIAxgNACGgNIAwAJAitB8IA8gK");
	this.shape_4.setTransform(4.325,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9999").ss(3,1,1).p("Ahah9IAqAFABBB+IAage");
	this.shape_5.setTransform(-11.8,7.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF3366").ss(3,1,1).p("AjJhlIAtgTAClhvIAlgaABmCKIAUgm");
	this.shape_6.setTransform(-1.15,-2.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D0200").s().p("AjKChQhShSAAh1QAAh2BShVIACgBQAqArA+goQBZBuBhhtQBAAoArguIAEADQBUBVAAB2QAAB1hUBSQhTBUh2AAQh2AAhUhUgAg0hbQgVAVAAAgQAAAfAVAUQAWAWAeAAQAfAAAWgWQAWgUAAgfQAAgggWgVQgWgWgfAAQgeAAgWAWg");
	this.shape_7.setTransform(-0.075,3.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.donut, new cjs.Rectangle(-28.5,-20.8,56.9,49.1), null);


(lib.arms = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8D80C").s().p("AD9BtQhyhMALhJQAKhLBEgDQBGABAfA+QA7B0hPAzQgNAHgNAAQgPAAgPgKgAk0BwQhPgzA7h0QAfg+BGgBQBEADAKBLQALBJhyBMQgPAKgPAAQgNAAgNgHg");
	this.shape.setTransform(35.425,11.9086);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arms, new cjs.Rectangle(0,0,70.9,23.8), null);


(lib.animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// snout
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE9A00").s().p("ABRAuQgdgDghgSQgTgOgSAOQgsAZgmgEQgLgBgLgEQgpgVAQgiQBeAOAagdQAFgIAHgEQADgCADgBQAOgEALAHQAHAEAFAIQAaAdBegOQAQAigpAVQgPAGgRAAIgKgBg");
	this.shape.setTransform(-1.3878,-2.5122);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// arms
	this.instance = new lib.arms();
	this.instance.setTransform(-2.2,19.65,1,1,0,0,0,35.4,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:11.55},4).wait(2).to({regY:12,rotation:-3.7182,x:-2.8,y:11.6},0).wait(2).to({regY:11.9,rotation:0,x:-2.2,y:11.55},0).wait(7).to({y:19.65},4).wait(2));

	// feet
	this.instance_1 = new lib.feet();
	this.instance_1.setTransform(-2.5,45.65,1,1,0,0,0,34.4,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// donuts
	this.instance_2 = new lib.donut();
	this.instance_2.setTransform(-1.8,25.5,0.783,0.783,0,0,0,-0.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:17.4},4).wait(2).to({rotation:-3.7173,x:-2.1,y:17.35},0).wait(2).to({rotation:0,x:-1.8,y:17.4},0).wait(7).to({y:25.5},4).wait(2));

	// snoutbottom
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E17D0C").s().p("AhagCQAmADArgYQATgOATAOQAhASAdADQgCAehSADIgJAAQhJAAgPghg");
	this.shape_1.setTransform(-2.35,2.3581);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(24));

	// pupilshine
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACTATQgHgHgBgMQABgKAHgHQAIgJALAAQAMAAAHAJQAIAHAAAKQAAAMgIAHQgHAIgMAAQgLAAgIgIgAi4ATQgJgHAAgMQAAgKAJgHQAIgJAKAAQAMAAAIAJQAIAHgBAKQABAMgIAHQgIAIgMAAQgKAAgIgIg");
	this.shape_2.setTransform(-3.75,-18.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},7).wait(17));

	// pupils
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABxA1QgXgWAAgfQAAgeAXgWQAVgWAgAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQggAAgVgWgAjaA1QgWgWAAgfQAAgeAWgWQAWgWAfAAQAgAAAWAWQAWAWgBAeQABAfgWAWQgWAWggAAQgfAAgWgWg");
	this.shape_3.setTransform(-1.45,-15.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ABXANQBHgzBHAzAjkANQBHgzBHAz");
	this.shape_4.setTransform(-1.75,-14.4157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},7).wait(17));

	// hair
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8D80C").s().p("Ah1BGQBKhTAJhFQAHg5AgAfQAgAfgVBfQAkAFAcgWQAfgSAGA1QAFArhXApQg1hGhjAUg");
	this.shape_5.setTransform(5.5636,-52.321);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(24));

	// overlay
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.749)").s().p("AhABWQgYgRACgmQADglAbgkQAbgkAjgNQAkgMAXARQAYASgCAmQgDAlgaAkQgcAkgjANQgOAFgNAAQgSAAgOgLg");
	this.shape_6.setTransform(-19.2711,-33.8672);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(24));

	// head
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8D80C").s().p("AkADmQhqhfAAiHQAAiHBqhfQBqhfCWAAQCXAABqBfQBqBfAACHQAACHhqBfQhqBgiXAAQiWAAhqhgg");
	this.shape_7.setTransform(-1.675,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(24));

	// shadow
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7B902").s().p("Ah4BEQgzgcAAgoQAAgnAzgcQAygcBGAAQBHAAAzAcQAyAcAAAnQAAAogyAcQgzAchHAAQhGAAgygcg");
	this.shape_8.setTransform(-2,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(24));

	// body
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8D80C").s().p("Ai7CdQhOhBAAhcQAAhbBOhBQBOhBBtAAQBuAABOBBQBOBBAABbQAABchOBBQhOBBhuAAQhtAAhOhBg");
	this.shape_9.setTransform(-1.85,27.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-64.3,73.6,123.6);


// stage content:
(lib.quackers_eat = function(mode,startPosition,loop,reversed) {
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
			mystage.color = '#DC143C'; // Text color
			mystage.shad1 = '#FFD45C'; // Main shadow color
			mystage.shad2 = '#FFD45C'; // Alt shadow color
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
	this.instance = new lib.animation();
	this.instance.setTransform(67,58,0.6589,0.6589,0,0,0,-1.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(93.1,67.5,-2.0999999999999943,31.400000000000006);
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