(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.heartanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heart
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF0501").s().p("AgvglQAMgQASAHQAFACAEAFQAFAEADAIQAIgPAJgEQASgHANAQQAdAphNAtQhMgtAdgpg");
	this.shape.setTransform(17.9633,0.1161);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF0501").s().p("AhgALQANgPASAGQAEACAFAFQAEAEAEAIQAJgPAJgEQASgGAMAPQAcAqhMAtQhNgtAdgqgAABhWQAMgPASAHQAFACAEAEQAFAFAEAHQAIgPAJgDQASgHANAPQAdAqhNAsQhMgsAcgqg");
	this.shape_1.setTransform(13.0883,-1.9089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:-1.9089}}]},2).to({state:[{t:this.shape_1,p:{y:-9.9089}}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(4).to({_off:false,x:8.2133,y:-13.1839},0).wait(2).to({y:-19.4339},0).wait(2).to({x:17.9633,y:4.1161},0).wait(1));

	// heartpieces
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF0501").s().p("AgIBBQgEgDAAgFQAAgEAEgDQADgDAFAAQADAAADADQADADAAAEQAAAFgDADQgDADgDAAQgFAAgDgDgAhAAgQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAAxAXQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAhAgpQgDgEAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDADgEAAQgFAAgEgDgAAkgtQgEgEAAgGQAAgFAEgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEAEQgEADgFAAQgFAAgEgDg");
	this.shape_2.setTransform(7.275,-20.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF0501").s().p("AgJAzQgEgDAAgGQAAgFAEgDQADgEAGAAQAEAAADAEQAFADAAAFQAAAGgFADQgDAFgEAAQgGAAgDgFgAgzAaQgEgEAAgFQAAgFAEgDQADgFAGAAQAFAAAEAFQADADAAAFQAAAFgDAEQgEAEgFAAQgGAAgDgEgAAiAUQgDgEAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDADgGAAQgFAAgEgDgAgzgeQgEgDAAgGQAAgEAEgEQADgEAGAAQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAQgGAAgDgFgAAZghQgDgDAAgGQAAgFADgDQAEgEAFgBQAGABADAEQAEADAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(19.8,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF0501").s().p("AgJAzQgEgDAAgGQAAgFAEgDQADgEAGAAQAEAAAEAEQADADAAAFQAAAGgDADQgEAFgEAAQgGAAgDgFgAgzAaQgEgEAAgFQAAgFAEgDQADgFAGAAQAFAAADAFQAEADAAAFQAAAFgEAEQgDAEgFAAQgGAAgDgEgAAjAUQgFgEAAgFQAAgFAFgEQADgDAGAAQAFAAADADQAEAEAAAFQAAAFgEAEQgDADgFAAQgGAAgDgDgAgzgeQgEgDAAgGQAAgEAEgEQADgEAGAAQAFAAADAEQAEAEAAAEQAAAGgEADQgDAFgFAAQgGAAgDgFgAAaghQgFgDAAgGQAAgFAFgDQADgEAGgBQAFABADAEQAEADAAAFQAAAGgEADQgDAEgFAAQgGAAgDgEg");
	this.shape_4.setTransform(7.05,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:7.275,y:-20.125}}]}).to({state:[]},2).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_2,p:{x:19.875,y:-20.025}}]},2).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-26.9,26.2,35.9);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arms
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("AA1gRQCFg7BEAlQA5AfgTA4QgWBCh1gCQhOgBgxgOQhBgShCgHQARgLARgKAA1gRQhOgMg+gvQhOg7hJAoQhOAsAbA4QAkBHBagIIBcgRQBEgsA4gYg");
	this.shape.setTransform(-7.0459,31.6578);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0E3C0").s().p("ACZBwQhOgBgxgOQhBgShCgHIAigVQBEgsA4gYQCFg7BEAlQA5AfgTA4QgVBAhvAAIgHAAgAkhAFQgbg4BOgsQBJgoBOA7QA+AvBOAMQg4AYhEAsIhcARIgRABQhNAAgghAgAA1gRIAAAAg");
	this.shape_1.setTransform(-7.0459,31.6578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("AA1gRQCFg7BEAlQA5AfgTA4QgWBCh1gCQhOgBgxgOQhBgShCgHQARgLARgKQBEgsA4gYQhOgMg+gvQhOg7hJAoQhOAsAbA4QAkBHBagIIBcgR");
	this.shape_2.setTransform(-7.0459,31.6578);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0E3C0").s().p("ACZBwQhOgBgxgOQhBgShCgHIAigVIhcARQhaAIgkhHQgbg4BOgsQBJgoBOA7QA+AvBOAMQg4AYhEAsQBEgsA4gYQCFg7BEAlQA5AfgTA4QgVBAhvAAIgHAAg");
	this.shape_3.setTransform(-7.0459,31.6578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// nose
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3A9C1").s().p("AgigFQADgQATgHIASgEQAUAAAIAPQACAagbAYQgkgMgHgag");
	this.shape_4.setTransform(-1.8432,14.6742);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

	// shine
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhvBNQgGgFABgHQgBgIAFgGQAEgEAHgBQAIAAAGAEQAEAGABAHQAAAHgEAGQgGAFgIAAIgBAAQgGAAgEgEgABjAbQgHgEgBgGQgCgHAEgGQAEgGAHgBQAGgBAHACQAGADACAHQACAHgEAHQgEAHgHABIgDABQgFAAgFgEgAhzAMQgJgIgBgLQgBgMAJgJQAIgJAMgBQAMAAAIAIQAKAIABANQAAALgJAJQgIAKgLAAQgMAAgJgJgAA6gaQgLgGgDgLQgEgLAHgLQAHgLALgEQAMgCAKAGQAKAIAEAKQACAMgFAKQgGALgMADIgHABQgIAAgHgFg");
	this.shape_5.setTransform(-3.8356,5.6275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiCBDQgGgFAAgHQAAgIAEgGQAFgEAHgBQAHAAAGAEQAFAGABAHQgBAHgEAGQgFAFgIAAIgCAAQgFAAgEgEgAhgAMQgJgIgBgLQgBgMAJgJQAIgJAMgBQAMAAAIAIQAKAIABANQAAALgJAJQgIAKgLAAQgMAAgJgJgABvANQgHgEgBgGQgCgGAEgHQADgGAHgCQAGgBAIADQAGAEABAHQADAFgFAHQgDAHgIACIgDAAQgFAAgEgDgAApgQQgLgGgDgLQgEgLAHgLQAHgLALgEQAMgCAKAGQAKAIAEAKQACAMgFAKQgGALgMADIgIABQgHAAgHgFg");
	this.shape_6.setTransform(-3.9079,5.6275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).wait(2));

	// pupils
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiHBIQgVgTgBgcQgBgaATgVQATgUAcgBQAbgBAVASQAVAUABAaQABAcgSAUQgTAVgcABIgFAAQgZAAgTgSgAAuAaQgUgTgCgbQgCgcASgUQATgUAcgBQAcgCAVATQAUATACAcQACAcgUAUQgSAUgcABIgCAAQgbAAgTgSg");
	this.shape_7.setTransform(-4.2414,5.2786);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

	// eyeback
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AikBfQgcgbgCgmQgBgmAYgcQAbgdAmgBQAmgBAdAaQAcAaACAmQACAngZAcQgaAbgmABIgFABQgkAAgbgYgAApAqQgcgZgCgmQgCgmAZgdQAagcAmgBQAmgCAdAaQAdAaABAoQACAkgZAdQgaAbgmACIgEABQgkAAgbgag");
	this.shape_8.setTransform(-4.1197,5.1502);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

	// Layer_17
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("ADlg9IhDA2IBUgDAjtAJIBLArIhTAK");
	this.shape_9.setTransform(-2.55,9.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4));

	// mouth
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.647)").ss(2,1,1).p("AgrADQAxAbAmgq");
	this.shape_10.setTransform(0.125,22.6207);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4));

	// head
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("AE/AwQADBghUBIQhUBJh8AFQh8AHhYhAQhbhAgEhhQgCgiAKggQhRiTA2hQQBeAVBFA+QA/ggBRgEQAegCAdAEQAzhRBVgtQBAA6gYCMQBGA8ADBUg");
	this.shape_11.setTransform(-9.411,2.255);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3A9C1").s().p("AjxgRQA9AGAsArQgPAKgNAMQgaAXgSAXQglgsAEhJgACOgPQAgg1BAgfQALBIgQAuQgqgZgxgJg");
	this.shape_12.setTransform(-12.6288,-12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0E3C0").s().p("Ai2DtQhbhAgEhhQgCgiAKggQhRiTA2hQQBeAVBFA+QA/ggBRgEQAegCAdAEQAzhRBVgtQBAA6gYCMQBGA8ADBUQADBghUBIQhUBJh8AFIgXABQhtAAhQg6gAjwguQASgXAagXQANgLAPgKQgsgsg9gHQgEBKAlAsgABuiiQAxAKAqAZQAQgugLhJQhAAfggA1g");
	this.shape_13.setTransform(-9.411,2.255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,-28.2,65.9,72.1);


// stage content:
(lib.luvcat_dreamy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Aladin'; // Google API font
			mystage.color = '#BC3440'; // Text color
			mystage.shad1 = '#ffffff'; // Main shadow color
			mystage.shad2 = '#ffffff'; // Alt shadow color
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

	// hearts
	this.instance = new lib.heartanim();
	this.instance.parent = this;
	this.instance.setTransform(64.25,40.25,1,1,0,0,0,12,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// anim
	this.instance_1 = new lib.anim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.5,67.15,0.7414,0.7414,0,0,0,-4.9,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.8,74.3,-1.0999999999999943,24.400000000000006);
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