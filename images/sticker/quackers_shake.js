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

	// arms
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7B902").s().p("ACzBHQhIgNgzg6QgdgggGgpQB2CFCkhAQgDASgMASQgdAqg0AAQgNAAgPgDgAkfAgQgNgSgDgSQClBAB1iFQgFApgdAgQg0A6hHANQgPADgOAAQgzAAgdgqg");
	this.shape.setTransform(-1.6,28.5641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D80C").s().p("AAVAaQgFggAKgnQAmhwAtBCQAuBCCBAtQAaAngGAkQg2AVgxAAQhkAAhQhagAkuBfQgHgkAagnQCBgtAuhCQAthCAmBwQAKAngFAgQhQBahkAAQgxAAg1gVg");
	this.shape_1.setTransform(-1.6092,18.5636);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7B902").s().p("AChBHQhIgNg0g6QgcgggGgpQB2CFClhAQgEASgNASQgcAqg0AAQgNAAgPgDgAkNAgQgMgSgEgSQCkBAB3iFQgHApgcAgQgzA6hJANQgOADgOAAQgzAAgdgqg");
	this.shape_2.setTransform(-1.3,28.5641);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8D80C").s().p("AADAaQgEggAJgnQAmhwAtBCQAuBCCBAtQAaAngGAkQg2AVgxAAQhkAAhQhagAkcBfQgHgkAagnQCBgtAuhCQAthCAmBwQAJAngEAgQhQBahkAAQgxAAg1gVg");
	this.shape_3.setTransform(-1.3092,18.5636);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// pupils
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ADdgsIhqBMICCANAjcgsIBqBMIiCAN");
	this.shape_4.setTransform(-1.225,-8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("ADdgsIhqBLICCAOAjcgsIBqBLIiCAO");
	this.shape_5.setTransform(0.275,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(2));

	// hair
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8D80C").s().p("Ah1BGQBKhTAJhFQAHg5AgAfQAgAfgVBfQAkAFAcgWQAfgSAGA1QAFArhXApQg1hGhjAUg");
	this.shape_6.setTransform(5.5636,-52.321);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2).to({x:6.7636,y:-50.821},0).wait(2));

	// snout
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E17D0C").s().p("AhagCQAmADArgYQATgOATAOQAhASAdADQgCAehSADIgJAAQhJAAgPghg");
	this.shape_7.setTransform(-2.35,10.1581);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE9A00").s().p("ABRAuQgdgDghgSQgTgOgSAOQgsAZgmgEQgLgBgLgEQgpgVAQgiQBeAOAagdQAFgIAHgEQADgCADgBQAOgEALAHQAHAEAFAIQAaAdBegOQAQAigpAVQgPAGgRAAIgKgBg");
	this.shape_8.setTransform(-1.3878,5.2878);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E17D0C").s().p("AhagCQAmADArgYQASgOAUAOQAgASAeADQgBAehSADIgKAAQhJAAgPghg");
	this.shape_9.setTransform(-0.85,11.0581);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{x:-1.3878,y:5.2878}},{t:this.shape_7}]}).to({state:[{t:this.shape_8,p:{x:0.1122,y:6.1878}},{t:this.shape_9}]},2).wait(2));

	// overlay
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.749)").s().p("AhABWQgYgRACgmQADglAbgkQAbgkAjgNQAkgMAXARQAYASgCAmQgDAlgaAkQgcAkgjANQgOAFgNAAQgSAAgOgLg");
	this.shape_10.setTransform(-19.2711,-29.0672);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2).to({x:-18.0711,y:-27.8672},0).wait(2));

	// head
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8D80C").s().p("AkADmQhqhfAAiHQAAiHBqhfQBqhfCWAAQCXAABqBfQBqBfAACHQAACHhqBfQhqBgiXAAQiWAAhqhgg");
	this.shape_11.setTransform(-1.675,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4));

	// shadow
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7B902").s().p("Ah4BEQgzgcAAgoQAAgnAzgcQAygcBGAAQBHAAAzAcQAyAcAAAnQAAAogyAcQgzAchHAAQhGAAgygcg");
	this.shape_12.setTransform(-2,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4));

	// feet
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B36711").s().p("AB/ARQgPgzAWgTQAjBMBqgNQgWAUgYAMQgYAMgUAAQgjAAgXglgAjkAqQgYgMgWgUQBqANAjhMQAWATgPAzQgXAlgjAAQgUAAgYgMg");
	this.shape_13.setTransform(-1.35,54.3336);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7911E").s().p("AA+AuQgIhQA4gUQAnhQA5AxQBHg8AjBZQAzAYgWA0QgdA0glAgQhqANgjhNQgWASAPA0Qg6gLgHg1gAiFAoQgjBNhqgNQglgggdg0QgWg0AzgYQAjhZBHA8QA5gxAnBQQA4AUgIBQQgHA1g6ALQAPg0gWgSg");
	this.shape_14.setTransform(-1.35,44.979);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B36711").s().p("AjWAyQgbgKgYgRQBsABAahPQAYAQgJA0QgVAsgpAAQgRAAgTgHgAB1AMQgIg0AYgQQAaBPBrAAQgYARgbAJQgTAIgRAAQgoAAgWgtg");
	this.shape_15.setTransform(-1.425,53.8092);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7911E").s().p("AkJBuQgogcgigxQgdgxAxgdQAZhcBOA0QAzg3AwBLQA6AOAABQQgBA2g4ARQAIg1gYgQQgZBPhoAAIgEAAgACFAeQgZAQAJA1Qg4gSgBg2QABhQA6gNQAwhKAzA2QBOgyAYBcQAxAdgdAyQgjAwgoAbIgBAAQhqAAgZhQg");
	this.shape_16.setTransform(-1.3716,45.1251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).wait(2));

	// body
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8D80C").s().p("Ai7CdQhOhBAAhcQAAhbBOhBQBOhBBtAAQBuAABOBBQBOBBAABbQAABchOBBQhOBBhuAAQhtAAhOhBg");
	this.shape_17.setTransform(-1.85,27.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-64.3,72.7,124);


// stage content:
(lib.quackers_shake = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(93.1,67.5,-2.0999999999999943,31.700000000000003);
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