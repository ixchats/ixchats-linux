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


(lib.Male = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A35B16").s().p("ABICLIgRAHQgZAJgeAAIAAAAQgYAAgVgGQgOgEgMgGQglAtgpgaQAigfgXgyQgQgagFgeIgkAhIAohnQAKgoAfgfQAMgMAOgIQAngbAxAAIAAAAQAyAAAnAbQAOAIAMAMQAfAgALAoIAnBmIgkghQgFAegQAaQgYA8AiAWQgOAJgOAAQgZAAgYgdg");
	this.shape.setTransform(-0.95,-21.9579);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mouth
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgPgKQADAMAIAFQAHAFANgC");
	this.shape_1.setTransform(-0.825,-12.1781);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// brows
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAXAFQAYgMASAQAhAgCQAXgNATAP");
	this.shape_2.setTransform(1.925,-27.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// pupils
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfARQgGgFgBgIQgBgHAFgHQAFgGAIgBQAJgBAGAFQAGAFABAIQABAIgFAGQgFAHgIABIgCAAQgHAAgGgFgAg3AOQgGgFgBgJQgBgHAFgGQAFgGAJgBQAIgBAGAFQAGAFABAIQABAIgFAGQgFAGgIABIgCAAQgHAAgGgEg");
	this.shape_3.setTransform(1.7744,-20.1561);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// eyeback
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("ABDAFQgBAPgIALQgIALgJAAQgLgBgGgMQgGgMACgPQAAgQAJgLQAHgLAKABQAKAAAGANQAGAMgBAPgAgSAAQgBAOgIAMQgIALgJgBQgKgBgGgMQgHgMABgPQABgQAIgKQAIgMAKABQAJABAHAMQAGAMgBAQg");
	this.shape_4.setTransform(1.2755,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApAqQgLAAgGgNQgGgMACgPQAAgQAJgKQAHgLAKAAQAKABAGAMQAGAMgBAPQgBAPgIALQgIALgIAAIgBAAgAgsAkQgKgBgGgMQgHgMABgPQABgQAIgKQAIgMAKABQAJABAHAMQAGAMgBAQQgBAOgIAMQgHAKgJAAIgBAAg");
	this.shape_5.setTransform(1.2755,-20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCEAD").s().p("AgECbQgFAAgFgDIgFgFIACgPQgigGgZgXQgHgHgHgIIgHgKQggguAGg7QAGg7ApglQAoglAzAHIAMACIAJACQAlANAZAlQAgAugGA7QgGA7gpAlQgfAcgkADIgCASQgGAEgFAAIgBAAg");
	this.shape_6.setTransform(-0.7925,-20.3224);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// torso
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("AgtBpIAShwIhIgZIA2hMIAKgKIAIAFQAGAEAHgBQAGABAGgFIABgEQAHABAIAFQALAGAGAHIBEBBIg8AbIAZBsQgjASgdAAQgYAAgVgOg");
	this.shape_7.setTransform(0.25,6.2658);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// armright
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCEAD").s().p("AglB5QgVgNAUgrQAIgvAQglQAWg8ApgqQgEAHACABIg/C+QANAFgFAPQgKACgFgLQgJAMAGALQACALgMAAIgBgBg");
	this.shape_8.setTransform(-5.2313,5.9011);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// armleft
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCEAD").s().p("ABdBCQgDgMgOgEQADALgJAFQgNgJAHgMIinhuQABgCgHgDQBfANBYBPQAqAVgIAYQgFAEgDAAQgEAAgDgFg");
	this.shape_9.setTransform(10.5134,7.5689);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Male, new cjs.Rectangle(-20.5,-38.7,42,56.900000000000006), null);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhWAdQg8gfAchGQAohJBOBUQBPhUAnBJQAdBGg8AfQg7AggcAuQgbgug7ggg");
	this.shape.setTransform(12.75,10.6707);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgsAPQgegPAOgkQAVglAnArQAogrAVAlQAOAkgfAPQgeAQgOAYQgNgYgfgQg");
	this.shape_1.setTransform(12.75,10.6944);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,21.4);


(lib.Female = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("AAICiQhqAehRgsQAKgFAjgOQgqgNgIguQgFgVADgYQgBgSABgVQAEhZA7gXQApgdAmgLIAZgGIAUgBIASABIAZAGQAnAKApAeQA7AXAEBZQABAVgBASQACAYgDAVQgJAugmAQQAeALALAFQgwAagzAAQgkAAglgMg");
	this.shape.setTransform(-1.65,-23.4378);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mouth
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgSAAQAVAOAQgT");
	this.shape_1.setTransform(-0.1,-12.4908);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// brows
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAXABQAVgQAVAMAhAAJQAUgQAWAM");
	this.shape_2.setTransform(-2.075,-28.5648);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// pupils
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag4AUQgGgFgBgIQgBgHAFgHQAGgGAIgBQAIgBAGAFQAHAGABAHQABAIgGAGQgEAHgIABIgDAAQgHAAgGgFgAAfALQgGgFgBgIQgBgIAFgGQAGgHAIAAQAIgBAGAFQAHAFABAIQABAHgGAHQgEAGgJABIgBAAQgHAAgHgEg");
	this.shape_3.setTransform(-0.0756,-21.1006);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// eyeback
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("ABDgGQABAOgFANQgGAMgKABQgKABgIgLQgIgKgCgPQgCgQAGgMQAGgMAKgCQAJgBAJALQAIALACAQgAgSACQACAQgGAMQgGAMgJABQgKABgIgKQgJgLgBgQQgCgPAGgMQAFgMAKgBQAKgBAIALQAIAKACAPg");
	this.shape_4.setTransform(-0.8589,-21.6998);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3AiQgJgLgBgQQgCgPAGgMQAFgMAKgBQAKgBAIALQAIAKACAQQACAPgGANQgGALgJABIgCABQgJAAgHgKgAAdAYQgIgKgCgPQgCgQAGgMQAGgMAKgBQAJgCAJAMQAIAKACAQQABAOgFANQgGAMgKABIgCAAQgJAAgHgKg");
	this.shape_5.setTransform(-0.8589,-21.6998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// blush
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.149)").s().p("AguAgQgYgGgCgNQgDgNAVgOQATgNAegFQAdgFAXAFQAXAGADAOQACAMgTAOQgVANgeAGQgMACgMAAQgPAAgMgDg");
	this.shape_6.setTransform(-0.8299,-16.9489);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// head
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDC197").s().p("AgBCVIAAgQQg3gBgngpQgogqAAg7QgBg7AngrQAogqA5AAQA4AAAoAqQAoArAAA7QABA7goAqQgdAggoAIIAAASQgGAGgIAAQgHAAgIgGg");
	this.shape_7.setTransform(-3.1,-20.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// torso
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9FCC").s().p("AhABmIAWh2QAQhRgIgUQARAMANgMQANgFA4DgQgiAQgfAAQggAAgggQg");
	this.shape_8.setTransform(0.2,6.2065);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// leftarm
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDC197").s().p("AglB5QgVgNAUgrQAVh2BChEQgEAHACABIg/C+QANAFgFAPQgKACgFgLQgJAMAGALQACALgMAAIgBgBg");
	this.shape_9.setTransform(-5.5313,4.1511);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// rightarm
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDC197").s().p("AA5BjQACgNgLgJQgCAMgKAAQgJgMAMgJIhuinQABgBgFgGQBRAxAyBsQAgAkgRASIgHACQgHAAAAgIg");
	this.shape_10.setTransform(5.2479,4.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.Female, new cjs.Rectangle(-20.4,-40.8,37.599999999999994,58.8), null);


// stage content:
(lib.couple_inlove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Love Ya Like A Sister'; // Google API font
			mystage.color = '#FFFFFF'; // Text color
			mystage.shad1 = '#e01616'; // Main shadow color
			mystage.shad2 = '#e01616'; // Alt shadow color
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

	// heart
	this.instance = new lib.heart();
	this.instance.parent = this;
	this.instance.setTransform(58.9,42,0.6825,0.6825,0,14.9966,-165.0034,12.7,10.8);

	this.instance_1 = new lib.heart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.75,41.8,0.4717,0.4717,-14.9973,0,0,12.8,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bench
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#311C0B").s().p("AkuArIgJglIARgtIAUBSgAEVAmIAXhQIAMAlIgLArg");
	this.shape.setTransform(48.025,88.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#442811").s().p("AFGCzIgdhdIgMglIAmgBIArCDgAmGCzIAyiAIAfAAIgRAvIgdBRgAm5ibIAUgCIAKBHIAFAjIAIAvIAFAbIgTAAgAGLgVIALg2IAFgaIAPhOIAQACIghC3IgTABg");
	this.shape_1.setTransform(49.5,79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#742D00").s().p("AndBeIA0AAIATgBIMPgPIATgBIBRgBIgNAqIiZABIgmAAIpSADIggAAIh5ABgAmiATIMrgYIgKA2IsZAQgAmyhWQGkg5GrAjIgOBOQl9ghm6Avg");
	this.shape_2.setTransform(50.75,72.0438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// couple
	this.instance_2 = new lib.Male();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68,65.45,0.8268,0.8268,0,0,180,-6.3,-2.2);

	this.instance_3 = new lib.Female();
	this.instance_3.parent = this;
	this.instance_3.setTransform(32.65,65.45,0.8268,0.8268,0,0,0,-6.2,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,82.7,45.5,14.399999999999991);
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