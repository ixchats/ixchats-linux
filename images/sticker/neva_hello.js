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


(lib.snowhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhFAAIAGgZQA8AgBJgJIgHAZQgWADgUAAQg4AAgigag");
	this.shape.setTransform(0.625,0.8344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhAAxQgngOAIgTQAIgUAaAEIgCAHQAuAlBWgNIAEgNQAbADgDAdQgXANgyAAQgxAAgngOgAg5gRIAKgrQBCgKBFAgIgMArQgQADgQAAQg2AAgvgZg");
	this.shape_1.setTransform(0.0267,0.006);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowhat, new cjs.Rectangle(-9.7,-6.3,19.5,12.7), null);


(lib.handl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3BD00").s().p("AgvAoQgchFBEghQAhgMAQAqQAJAggWAQQAJAHAQgHQAKAigzANQgKACgIAAQgbAAgPgZg");
	this.shape.setTransform(5.5641,6.5249);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handl, new cjs.Rectangle(0,0,11.2,13.1), null);


(lib.arml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B5D42").s().p("AANCIIAAgYIg3hgQgkgwAhgiIBJhPIAJASIhDBXQgEAIAEAIIBEB5IAYAPIgYAhg");
	this.shape.setTransform(6.1734,14.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arml, new cjs.Rectangle(0,0,12.4,29.1), null);


(lib.snowman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handl
	this.instance = new lib.handl();
	this.instance.parent = this;
	this.instance.setTransform(-12,-25.05,1,1,0,0,0,5.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({rotation:-35.9896,x:-27.95,y:-22.7},6).wait(13).to({rotation:0,x:-12,y:-25.05},6).wait(4));

	// hand
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3BD00").s().p("Ag2ARQADgfAbgJQgGgJgSAAQADgjA0AGQApAEAHAnQABBKhJAHQglgBAAgtg");
	this.shape.setTransform(17.5265,29.5997);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36));

	// hat
	this.instance_1 = new lib.snowhat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-27.2,1.5201,1.5201);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({rotation:-35.9896,x:-19.4,y:-31.5},6).wait(13).to({rotation:0,x:0.1,y:-27.2},6).wait(4));

	// mouth
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgzgJQA1AoAygo");
	this.shape_1.setTransform(0.15,-8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(36));

	// nose
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF6023").s().p("AgQgQIAuATIgwAOQgVgUAXgNg");
	this.shape_2.setTransform(1.2989,-12.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36));

	// eyes
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAtADQAYgWAbAWAhfAJQAYgWAbAW");
	this.shape_3.setTransform(0.375,-14.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(36));

	// buttons
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBnQgGgFABgIQgBgIAGgFQAGgGAGAAQAHAAAGAGQAFAFABAIQgBAIgFAFQgGAGgHAAQgGAAgGgGgAgMACQgGgEABgIQgBgHAGgGQAGgFAGAAQAHAAAGAFQAFAGABAHQgBAIgFAEQgGAGgHAAQgGAAgGgGgAgMhMQgGgFABgIQgBgIAGgFQAGgGAGAAQAHAAAGAGQAFAFABAIQgBAIgFAFQgGAGgHAAQgGAAgGgGg");
	this.shape_4.setTransform(1.55,16.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(36));

	// body
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E2E2").s().p("AiMFPQg8g5AAhTQAAhQA2g4QgSgkgBgrQABhIAxgzQAQgQASgKQhYDXCpAbQgXAJgTARQgsAnAAA4QAAA4AsAmQArAoA/AAQA+AAAsgoQAUgRALgVQgOAwgnAlQg8A7hVAAQhTAAg8g7gAhbiyQgpgqAAg7QAAg8ApgqIANgMQg4BlA1B7IgKgJg");
	this.shape_5.setTransform(-1.7,13.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhaFQQgsgmAAg4QAAg4AsgnQATgRAXgJQipgbBYjXQg1h7A4hlQAlgeAxAAQA6AAApAqQApAqAAA8QAAA7gpAqIgNALQAPAKAOAOQAyAzAABHQAAAsgTAkQAhAjANAqQAIAcAAAfQAAAdgHAaQgLAVgUARQgsAog/AAQg9AAgsgog");
	this.shape_6.setTransform(3.1213,8.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},7).to({state:[{t:this.shape_6},{t:this.shape_5}]},6).to({state:[{t:this.shape_6},{t:this.shape_5}]},19).wait(4));

	// arml
	this.instance_2 = new lib.arml();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-18.5,-5.9,1,1,0,0,0,6.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({regY:14.5,rotation:-35.9896,x:-22.05,y:-3.45},6).wait(13).to({regY:14.6,rotation:0,x:-18.5,y:-5.9},6).wait(4));

	// arm
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B5D42").s().p("AAGB9IAshmQABgJgFgGIhhhkIgbgIIAOgmIAbACIAGAYIBOBNQAwAlgYArIgyBeg");
	this.shape_7.setTransform(15.6502,13.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-48,60.6,101);


// stage content:
(lib.neva_hello = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Chau Philomene One'; // Google API font
			mystage.color = '#dcf3ff'; // Text color
			mystage.shad1 = '#257ca3'; // Main shadow color
			mystage.shad2 = '#257ca3'; // Alt shadow color
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

	// arm
	this.instance = new lib.snowman();
	this.instance.parent = this;
	this.instance.setTransform(66,58.9,0.8743,0.8743,0,0,0,-1.9,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.1,69.6,-7.799999999999997,28.60000000000001);
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