(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib.Male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgCAhIAAgJIAGAAIAAAJgAgBARIgBgJIgFgHIgGgIQgBgDAAgEQAAgIAEgFQAEgFAGAAQAHAAAEAGQAEAFAAAKIgGAAQAAgGgBgDQgCgFgGAAQgEAAgCADQgCADAAAEQAAAEACACIACAEIACADQADAEACAEIABALg");
	this.shape.setTransform(23.925,-26.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgBAVIAAgGIADAAIAAAGgAAAAKIgBgFIgDgFIgEgEIAAgFQAAgEACgEQADgDADAAQAEABADADQACADAAAGIgDAAIgBgFQgBgEgEAAQAAAAAAABQgBAAgBAAQAAAAAAABQgBAAAAABIgBAEIAAAEIACACIABACIADAFIAAAGg");
	this.shape_1.setTransform(22.825,-26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

	// arml
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D3227").s().p("AAYA3QgNgWg6hHIAUgSIAkAyIAPgQIAYBEQgBALgLAAQgFAAgHgCg");
	this.shape_2.setTransform(5.125,6.1258);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCEAD").s().p("AgBASQgigXAOgTQAMgHACAJQgBALAMAGQgBgKAKgEQAKAJgJAKIAMAKIgUASIgHgKg");
	this.shape_3.setTransform(-0.2792,-0.6031);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D3227").s().p("AgogfIASgQIAYAZIAPgQIAYBEQAAAOgRAEIhAhPg");
	this.shape_4.setTransform(5.8504,7.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCEAD").s().p("AgBASQgigXAOgTQAMgHACAJQgBALAMAGQgBgKAKgEQAGAGAAAPQACgBAFAJIgCADIgSAPIgHgKg");
	this.shape_5.setTransform(1.1708,1.7469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(2));

	// wingr
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhAiQgDAZgegCQgYgCAKgXIgBACQg7AZAKgxQgyAeAIgiQBEh0B2BfQAdAWgBAXQAAAYgfAFIgCAAQgqAAAAgZg");
	this.shape_6.setTransform(-20.1613,-29.703);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVBOQgYgWAMgWQgOAUgOgRQgNgOARgPIgCABQgugHAfglQgrABAWgZQBfhDATCNQAEAhgMAUQgJANgLAAQgGAAgGgDg");
	this.shape_7.setTransform(-17.8223,-30.1209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).wait(2));

	// mouth
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AATACQgTgHgSAH");
	this.shape_8.setTransform(2.175,-6.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

	// moustache
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CFA64B").s().p("AixgKQA+AoAigoQAmgsAtApQAjgxAvAjQAoAhA2g0QghBwiNg5Qg4AmgrAAQg0AAgeg5g");
	this.shape_9.setTransform(1.9,-11.0358);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4));

	// beard
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2BA62").s().p("AhcgaQBghMBZAzQgIBBhAA7QgehFhTgeg");
	this.shape_10.setTransform(0.075,-3.77);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2BA62").s().p("AhcgrQBghNBZAzQgIBChQBdQgOhnhTgeg");
	this.shape_11.setTransform(0.075,-2.02);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).wait(2));

	// headband
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D3227").s().p("Ah/AfQgHgGgBgLIAAgBQgBgKAFgHQAEgIAJgBIDngXQAJgBAGAGQAHAHABALIAAAAQABALgFAHQgFAIgJABIjnAXIgCAAQgHAAgFgGg");
	this.shape_12.setTransform(-2.9492,-28.4207);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4));

	// hair
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2BA62").s().p("AhLDFIgNh9Qg0gigBgmQAAibBigtQB8gzAtB+QiggngkBGQgnBGAzBIIARCogABrAqIAjg3IgDDDIgcAXg");
	this.shape_13.setTransform(-2.7501,-15.5347);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(4));

	// brows
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAYADQAWgNAUANAhBAEQAWgOAVAN");
	this.shape_14.setTransform(0.85,-23.7189);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(2).to({y:-24.1189},0).wait(2));

	// pupils
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag0APQgEgEgBgFQgBgGAEgEQAEgEAGgBQAGgBAEAEQAFAEABAFQAAAGgEAEQgDAFgGABIgCAAQgFAAgEgEgAAjAGQgFgDAAgFQgBgGAEgFQAEgEAFgBQAGAAAFADQAEAEABAGQABAFgEAEQgEAFgGABIgBAAQgFAAgEgEg");
	this.shape_15.setTransform(2.0497,-18.3253);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(2).to({y:-17.8753},0).wait(2));

	// eyes
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAVgBQABALAIAIQAGAHAJAAQAKgBAGgKQAFgJgBgLQgBgMgIgIQgHgHgJABQgJABgGAJQgFAJABAMgAhAAGQABAMAIAIQAHAIAJgBQAJgBAGgJQAGgJgBgMQgCgLgHgIQgHgHgKABQgJABgGAIQgFAJABALg");
	this.shape_16.setTransform(1.3416,-18.5507);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3AaQgIgIgBgMQgBgLAFgJQAGgIAJgBQAKgBAHAHQAHAIACALQABAMgGAJQgGAJgJABIgCAAQgIAAgGgHgAAeASQgIgIgBgLQgBgMAFgJQAGgJAJgBQAJgBAHAHQAIAIABAMQABALgFAJQgGAKgKABIgBAAQgIAAgGgHg");
	this.shape_17.setTransform(1.3416,-18.5507);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).wait(2));

	// torso
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A59A9F").s().p("AhFBmQAdglALhSIABgSIgKAWIgrgQIAghOIAKgKIAHAEQANAIAMgJIAAgDQAIAAAIAFQALAHAGAHIA4A7IgcAhQAFAjABBJQgiAQgfAAQghAAgfgQg");
	this.shape_18.setTransform(0.725,6.2125);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(4));

	// head
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCEAD").s().p("AABCZIgFgEIAAgQQg2gCgngrQgngqAAg7QABg7ApgqQAogpA4ABQA5ABAnArQAoArgCA8QAAA6gpAqQgeAfgoAHIAAASQgHAGgHAAQgFAAgFgCg");
	this.shape_19.setTransform(-1.7973,-19.4101);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(4));

	// wingl
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhiAtQgEgWAWgbQBah0BXBlQAOAfg0gTQATAtg9gNQAMATgWAHQgaAHgHgXQAEAZgqAHIgDAAQgaAAgFgWg");
	this.shape_20.setTransform(12.5853,-32.6638);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoBOQgNgRgBgkQgDiRBnAsQAYAUgqAIQAjAggrARQARAMgKAQQgOAUgOgRQAOAUgVAcQgIAHgHAAQgIAAgJgJg");
	this.shape_21.setTransform(10.4584,-30.1317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},2).wait(2));

	// feet
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#982B27").s().p("AhBATQgHAAgFgGQgGgFAAgIQAAgGAGgGQAFgFAHAAIAqAAQAHAAAFAFQAGAGAAAGQAAAIgGAFQgFAGgHAAgAAYASQgHAAgFgFQgGgGAAgHQAAgHAGgFQAFgGAHAAIAqAAQAHAAAFAGQAGAFAAAHQAAAHgGAGQgFAFgHAAg");
	this.shape_22.setTransform(-2,34.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(4));

	// legs
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5D3227").s().p("AAPBOQgOhNAahPIAqgJQgHCLAHAcQgDAIgMAAQgOAAgZgKgAhEA3QABgsAuhgIAwAHQgfBIgSBYQgNAEgKAAQgYAAABgfg");
	this.shape_23.setTransform(-2.1393,25.9264);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(4));

	// armr
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D3227").s().p("AgqBZQAIgrAOgkQAWg7ApgpQgDAGABABIg5Cvg");
	this.shape_24.setTransform(-4.675,2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCEAD").s().p("AgJAfQgVgNAVgqIABgGIAZACIgFAQQAMAFgFAOQgKACgEgKQgIALAFALQACAKgMAAIgBAAg");
	this.shape_25.setTransform(-8.0599,14.9386);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_24},{t:this.shape_25}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-39.4,56.4,75.6);


// stage content:
(lib.magnus_think = function(mode,startPosition,loop,reversed) {
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
			mystage.color = '#afccce'; // Text color
			mystage.shad1 = '#222222'; // Main shadow color
			mystage.shad2 = '#222222'; // Alt shadow color
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
	this.instance = new lib.Male();
	this.instance.setTransform(63.4,59.1,1.0104,1.0104,0,0,0,-6.4,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(88.6,71.2,7,26.299999999999997);
// library properties:
lib.properties = {
	id: '8F6504BFFD572E4F939766561DC746C6',
	width: 100,
	height: 100,
	fps: 12,
	color: "#666666",
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;