(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.nat_no = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Permanent Marker'; // Google API font
			mystage.color = '#bc2e1e'; // Text color
			mystage.shad1 = '#378ab4'; // Main shadow color aka $1
			mystage.shad2 = '#5dabcd'; // Alt shadow color aka $2
			//mystage.shadow = '-1px -1px 0px $2, 2px 2px 0 $1, 2px -2px 0 $1, -2px 2px 0 $1, -2px -2px 0 $1, 2px 0px 0 $1, 0px 2px 0 $1, -2px 0px 0 $1, 0px -2px 0 $1'; // shadow
			mystage.shadow = '0 1px 0px $1, 1px 0 0px $2, 1px 2px 1px $1, 2px 1px 1px $2, 2px 3px 2px $1';
			//text-shadow: -1px -1px 0px #E97178, 2px 2px 0 #E34C55, 2px -2px 0 #E34C55, -2px 2px 0 #E34C55, -2px -2px 0 #E34C55, 2px 0px 0 #E34C55, 0px 2px 0 #E34C55, -2px 0px 0 #E34C55, 0px -2px 0 #E34C55;
			mystage.spacing =  '0.05'; // letter spacing in em's
			mystage.transform = 'rotate(-5deg)'; // transform
			//mystage.texty = 70; // text y offset in px (for text at bottom)
		
			StickerInit(mystage);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(46.25,49.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJALQgEgFAAgGQAAgFAEgFQAFgEAEAAQAGAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgGAAQgEAAgFgEg");
	this.shape_1.setTransform(45.575,50.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(3));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#423932").ss(1,1,1).p("AggDCIgZgxIBBimIBChKIAvgeQAHgOgOAAIgpANIASgVIAdgVQALgTgUACIg1AmIAug0QAGgRgSAEIg/A3QgDAAgDgCQgEgFgBgKQgCgKgKAEQgGAIAAALQAAAKABAKQgEAMAAAWIh1EFQgMAxAmAJQAlAIAZgag");
	this.shape_2.setTransform(32.9276,46.7745);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE1C9").s().p("AheDUQgmgJAMgxIB1kFQAAgWAEgMIgBgUQAAgLAGgIQAKgEACAKQABAKAEAFQADACADAAIA/g3QASgEgGARIguA0IA1gmQAUgCgLATIgdAVIgSAVIApgNQAOAAgHAOIgvAeIhCBKIhBCmIAZAxQgTAUgaAAQgIAAgJgCg");
	this.shape_3.setTransform(32.9276,46.7745);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#423932").ss(1,1,1).p("AgtC4IgTgrIBJiiIBGhGIAwgcQAIgNgNgCIgqAMIATgVIAegTQAMgTgVACIg3AjIAxgyQAHgQgSACIhCA1QgDgBgDgCQgDgFgBgLQgBgKgLAEQgHAIgBAKQAAALABAKQgFAMgBAWIiCD+QgOAxAlAKQAlAKAXggg");
	this.shape_4.setTransform(33.6424,46.8008);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE1C9").s().p("AhpDOQglgKAOgxICCj+QABgWAFgMIgBgVQABgKAHgIQALgEABAKQABALADAFQADACADABIBCg1QASgCgHAQIgxAyIA3gjQAVgCgMATIgeATIgTAVIAqgMQANACgIANIgwAcIhGBGIhJCiIATArQgSAZgaAAQgIAAgIgDg");
	this.shape_5.setTransform(33.6424,46.8008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).wait(3));

	// Layer_14
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("Ag/jMIhOAgIg+gOQACALADAKQAMAsAaAnQAPAWAUAVIAlgeIAACOIgeCeIDdAAIAXjtACHjIQA6BEALBWIgSAJIg8AfABFjmIALAuACHjIIg3AQIAQAhIhEgKIAphFAgGjFIAiAkIgwATIABg9IANAGIgHgIQAogGAqgTACHjIIgPB0IAPAwIgJAeAC6glIhTEMAg/jMIALBmIgkAhAgTjLIgsgB");
	this.shape_6.setTransform(46.675,75.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#252525").s().p("Ah2DnIAeieIAAiOIglAeQgUgVgPgWQgagngMgsIgFgVIA+AOIBOggIALBmIgkAhIAkghIgLhmIAsABIgBA9IAwgTIBEAKIgQghIAQAhIhEgKIAphFIALAuIA3gQIgPB0IAPAwIgJAeIgXDtgACHgkIgPgwIAPh0QA6BEALBWIgSAJIg8AfgAgTjLIANAGIAiAkIgwATgAAcihg");
	this.shape_7.setTransform(46.675,75.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B99673").s().p("AgigBIgHgHQApgGAqgTIgqBDg");
	this.shape_8.setTransform(49.45,56.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE1C9").s().p("AgRhnIA7gfIhTENg");
	this.shape_9.setTransform(61.15,85.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_9},{t:this.shape_6}]},3).wait(3));

	// Layer_7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AAWACQA6AIAtgiAh8ARQA4ATAyga");
	this.shape_10.setTransform(42.85,37.9011);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AAUACQA2AIApgiAhzARQA0ATAuga");
	this.shape_11.setTransform(42.45,38.9011);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},3).wait(3));

	// Layer_8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.5,1,1).p("ACEgRQgfgEgcALQgdAKgagTAAUglQgCABgCADAiDAmQASgPAPgPQAQgOAMgCQAMgBACAA");
	this.shape_12.setTransform(42.65,33);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1.5,1,1).p("AB5gMQgbgEgbALQgbAJgYgSAAYgqQgDABgBADAh4ArQAQgOAOgQQAOgPAMgBQAKgBACAA");
	this.shape_13.setTransform(42.25,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},3).wait(3));

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#423932").ss(1,1,1).p("AjriCIgLAPQgZj5DkgOQAFABAEAAQBMABA2AfQAPAJANAMQArAkAWA+IAiAIIgKAbQAOgEAOgDQBxgaArBaQAQAqgvArQgyAxAlAqQAmAthHAtQgJgqgjgQQgFgCgDgDQgagSAVgoQAJgRAFgPQAKglgWgJAjMiyIAFgIIAJgnIALAXQAnglAwgRQAHgCAGgCIAOglIAOAaQArgKAiAAQABABABgBQANAAAMACABxg7IALAcQAYgeAMgeQADgGACgHQAHgRABgPAhpAmQACABACAAQAGACAGAAQBdAOBYhcQALgKAKgMAAakZIAMAeIBLDAAjMiyQAAADgBADQgDAQgBAQQgDAnAGAkIgBAAAEMBFQAOA2hdAuQhmAvh+BvIgRhEQgPAegqAJQASgfgUgdQgMAngyAOQgeAaA1A0QgKADgJACQgCABgBAAQhPASglg5QgvhCBghbQAdgagMgfQgwA4g3gbQgogWgTAhQgIgJgDgWQgKhFB4gKQBZgGAEhCIgqgrIAfgCIABABIAAgBIABAAQAAABAAAAQABADABACIAAABQAJAgAUAXQgQgSgHgZIgGgMAjriCIAcBBAjriCIAfgwAjLg7IgDgFAiugDIAKAKQAIAHAJAGIAcAsIAOAVIAAgvAiTAUQASALAYAH");
	this.shape_14.setTransform(50.9412,50.8924);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AF9885").s().p("Ah3AvIABgGIAFgJIAJglIALAVQAngjAwgRIAMgEIAOglIAOAaQArgLAjABIAMAeQhCADg6AYQhDAbg4A3QABgQADgPg");
	this.shape_15.setTransform(42.325,28.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#54355F").s().p("AiXhGIAOAVIAAgvIAEABIALACQBfAOBXhdQALgKAJgMIAMAcQAYgeAMgeIAFgNIAGAKQAqBEA/AFQgFAPgIASQgVAoAZASQAPA2hdAtQhnAvh+BvIgQhEQgQAegqAJQATgfgVgdQgLAngzAOQgdAaA1A0IgUAFIgCABQhbgxCUkFg");
	this.shape_16.setTransform(54.1926,64.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A76DBD").s().p("AkkFQQgvhCBghbQAdgagMgfQgwA4g3gbQgogWgTAhQgIgJgDgWQgKhFB4gKQBZgGAEhCIgqgrIAfgCIgchBIAfgwIgBAGQgDAQgBAQQgDAnAGAkIgBAAIABABIADAFIAAABQAJAgAUAXIAKAKQAIAHAJAGIAcAsQiUEGBbAxQgTAEgRAAQg0AAgcgrgAEUBKIgIgFQgagSAVgoQAJgRAFgPQg/gFgqhEIgHgKQAHgRABgPQgBAPgHARIgFANQgMAegYAeIgLgcIhLjAIgMgeIABAAIABAAQANAAAMACQgMgCgNAAIgBAAIgBAAQgiAAgrAKIgOgaIgOAlIgNAEQgwARgnAlIgLgXIgJAnIgFAIIgfAwIgLAPQgZj5DkgOIAJABQBMABA2AfQAPAJANAMQArAkAWA+IAiAIIgKAbIAcgHQBxgaArBaQAQAqgvArQgyAxAlAqQAmAthHAtQgJgqgjgQgAEVgVQADgMAAgJQAAgTgPgGQAPAGAAATQAAAJgDAMgAh3BAIgcgsQASALAYAHIAAAvgAjOhAIABAAIACAFgAjMiyIAAAAgAAakZIAAAAg");
	this.shape_17.setTransform(50.9412,50.8924);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEE1C9").s().p("AgoCSIgMgDIgEAAQgYgHgSgMQgJgGgIgHIgKgKQgPgSgIgaIgGgMIAAAAIgCgFIAAgBIgBAAQgGglADgmQA4g4BEgbQA5gYBCgDIBLC+QgKANgLAKQhMBQhRAAQgMAAgMgBgAiaAtIAGAMQAIAaAPASQgUgXgJghgAidAnIAAAAIABAAIAAABg");
	this.shape_18.setTransform(46.0105,40.436);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A56137").s().p("AAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(30.175,44.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_15},{t:this.shape_18},{t:this.shape_16},{t:this.shape_19},{t:this.shape_14}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.9,62,32.1,37.900000000000006);
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