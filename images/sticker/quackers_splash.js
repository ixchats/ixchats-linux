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

	// pupilshine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACTATQgHgHgBgMQABgKAHgIQAIgIALAAQAMAAAHAIQAIAIAAAKQAAAMgIAHQgHAIgMAAQgLAAgIgIgAi4ATQgJgHAAgMQAAgKAJgIQAIgIAKAAQAMAAAIAIQAIAIgBAKQABAMgIAHQgIAIgMAAQgKAAgIgIg");
	this.shape.setTransform(-3.75,-13.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({y:-5.6},0).wait(1));

	// pupils
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABxA1QgXgWAAgfQAAgeAXgWQAVgWAgAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQggAAgVgWgAjaA1QgWgWAAgfQAAgeAWgWQAWgWAfAAQAgAAAWAWQAWAWgBAeQABAfgWAWQgWAWggAAQgfAAgWgWg");
	this.shape_1.setTransform(-1.45,-10.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({y:-3.325},0).wait(1));

	// hair
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8D80C").s().p("Ah1BGQBKhTAJhFQAHg5AgAfQAgAfgVBfQAkAFAcgWQAfgSAGA1QAFArhXApQg1hGhjAUg");
	this.shape_2.setTransform(1.3636,-53.521);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({y:-48.121},0).wait(1));

	// snout
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E17D0C").s().p("AhagCQAmADArgYQATgOATAOQAhASAdADQgCAehSADIgJAAQhJAAgPghg");
	this.shape_3.setTransform(-2.35,6.5581);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE9A00").s().p("ABRAuQgdgDghgSQgTgOgSAOQgsAZgmgEQgLgBgLgEQgpgVAQgiQBeAOAagdQAFgIAHgEQADgCADgBQAOgEALAHQAHAEAFAIQAaAdBegOQAQAigpAVQgPAGgRAAIgKgBg");
	this.shape_4.setTransform(-1.3878,1.6878);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D44F37").s().p("AgmASQgPghgygOQAyACAqgQQAGgDAFAAQAGAAAFADQArAQAygCQgyAOgPAhQgJAYgeAFQgdgFgJgYg");
	this.shape_5.setTransform(-1.6,15.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE9A00").s().p("AhGA2Qgtg3gugSQgwgRA/gKQA+gJAsgbQAXgOARAAQATAAAWAOQAsAbA+AJQA/AKgvARQgvASgsA3QgcAigsAJQgrgJgbgigAgmAjQAJAXAdAGQAegGAJgXQAPgjAygNQgyADgrgQQgFgDgGgBQgFABgFADQgqAQgzgDQAyANAPAjg");
	this.shape_6.setTransform(-1.6046,13.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).wait(1));

	// overlay
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.749)").s().p("AhABWQgYgRACgmQADglAbgkQAbgkAjgNQAkgMAXARQAYASgCAmQgDAlgaAkQgcAkgjANQgOAFgNAAQgSAAgOgLg");
	this.shape_7.setTransform(-19.2711,-33.2672);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2).to({y:-27.8672},0).wait(1));

	// head
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8D80C").s().p("AkADmQhqhfAAiHQAAiHBqhfQBqhfCWAAQCXAABqBfQBqBfAACHQAACHhqBfQhqBgiXAAQiWAAhqhgg");
	this.shape_8.setTransform(-1.675,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(2).to({y:-12.4},0).wait(1));

	// shadow
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7B902").s().p("Ah4BEQgzgcAAgoQAAgnAzgcQAygcBGAAQBHAAAzAcQAyAcAAAnQAAAogyAcQgzAchHAAQhGAAgygcg");
	this.shape_9.setTransform(-2,12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7B902").s().p("Ah4BQQgzghAAgvQAAguAzghQAyghBGAAQBHAAAzAhQAyAhAAAuQAAAvgyAhQgzAhhHAAQhGAAgyghg");
	this.shape_10.setTransform(-2,15.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},2).wait(1));

	// body
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8D80C").s().p("Ai7CdQhOhBAAhcQAAhbBOhBQBOhBBtAAQBuAABOBBQBOBBAABbQAABchOBBQhOBBhuAAQhtAAhOhBg");
	this.shape_11.setTransform(-1.85,27.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(2).to({y:28.875},0).wait(1));

	// arms
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7B902").s().p("ACqhpQB9A0AXBDQALArgYAaQgYAXgWAAQAKh+hjhVgAkwBTQgYgaALgrQAXhDB9g0QhjBVAKB+QgWAAgYgXg");
	this.shape_12.setTransform(-1.8,21.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2).to({y:23.45},0).wait(1));

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66B6FD").s().p("AhDDDQhQgkh7gDQhsAAAMhDQALgoAlgTQAkgYhGgRQh8gMA3g5QFojKFBByQBxgQACAuQACAugmAkQgmAlA3ARQBnAfgZA/QgYA2i1gEQhngGg5AvQghAbgnAAQgeAAgigPg");
	this.shape_13.setTransform(-2.3902,36.9222);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66B6FD").s().p("AhHDJQhUgeiDAGQhzAIAMhDQAMgpAogWQAmgbhLgMQiDgEA6g7QF/jlFVBaQB4gZACAvQACAtgoAnQgoAoA6ANQBtAYgbBAQgZA4jAAJQhtACg9AzQgoAhgvAAQgcAAgegLg");
	this.shape_14.setTransform(-2.4035,36.8027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-65.5,93.2,123.5);


// stage content:
(lib.quackers_splash = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(62,58,0.6589,0.6589,0,0,0,-1.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(82.7,66.7,7.799999999999997,31.39999999999999);
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