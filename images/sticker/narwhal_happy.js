(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.narwhal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// horn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFD89").s().p("AgegQIAegfQAFAtAaAMIgQAmQgogegFgig");
	this.shape.setTransform(40.625,-13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6F798").s().p("AgbgLIAggiQADAeAUAJIgXA0QgagNgGgsg");
	this.shape_1.setTransform(43.275,-17.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83E1FB").s().p("AgSgFIAZgcQABATAMAHIgRApQgTgKgCgdg");
	this.shape_2.setTransform(45.75,-21.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5C3F3").s().p("AhQA/IAfghQAFAkApAdIgDALQgwgEgagngAAng+IAqgrIgdBFQgLgHgCgTg");
	this.shape_3.setTransform(42.5,-18.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},2).wait(2));

	// eyes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AgiAQQABgMAJgJQAKgKAOAAQAPAAAKAKQAJAJABAM");
	this.shape_4.setTransform(27.8,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

	// blush
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.447)").s().p("AgjAUQgOgIAAgMQAAgLAOgJQAPgJAUABQAUgBAPAJQAPAJAAALQAAAMgPAIQgPAKgUgBQgUABgPgKg");
	this.shape_5.setTransform(22.65,5.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4));

	// mouth
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#227685").ss(2,1,1).p("AgqgUIBLgWQAOAkgFAWQgFARgRAJQgYAGgRgWQgNgQgIgeg");
	this.shape_6.setTransform(39.4256,6.8905);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAAQAdgaAiAQQgFAQgRAJIgKACQgRAAgOgRg");
	this.shape_7.setTransform(40.425,9.5025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqgMIBLgVQAOAjgFAWQgjgQgcAbQgNgRgIgeg");
	this.shape_8.setTransform(39.4256,6.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#227685").ss(2,1,1).p("AglAJQAsALAfgf");
	this.shape_9.setTransform(38.9,3.8047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9}]},2).wait(2));

	// topfin
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#79CBC7").s().p("AhZAzIAbgZQAChGAmgWIBxAiQgOBRg8AMQgeAGgWAAQglAAgRgQg");
	this.shape_10.setTransform(6.95,40.0497);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4));

	// overlay
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(170,170,170,0.098)","rgba(255,255,255,0.447)"],[0.341,0.663],16.1,25.7,-13.2,-25.1).s().p("Aj7C1QhrAigrg2QgZgjg1APQAJhGBSABQAuAOBFgGQAZgaA9gHQAvg0A3ARQgkAPgFAoQAFAQgbApQBWgrBEi/QAuh7BrgnQBogmBxA5QB5A/gUCyQgNBmhLBGQgmgegmAeQhdBThwAmQgtAHgrAAQieAAhxhrg");
	this.shape_11.setTransform(-1.0832,12.3392);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(170,170,170,0.098)","rgba(255,255,255,0.447)"],[0.341,0.663],16,34.5,-15.7,-34.1).s().p("AhhEQIgZgDQg/gLg8ggQhfA8g3goQgigcgvAcQgJhGBPgUQAwACBBgYQARggA6gWQAfhAA6AEQgeAYAFAnQAJAPgQAuQAbgXAtgwIAAAAQAzg+Arh5QAth7BrgnQBogmByA5QB5A/gUCyQgNBmhMBGQgmgeglAeQhdBThwAmQguAHgrAAQg9AAg2gQg");
	this.shape_12.setTransform(-0.9042,12.3412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).wait(2));

	// body
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABBg0QAlgeAmAeQhFA+h4AkQgvAOgrAIQBwgmBchSg");
	this.shape_13.setTransform(23.775,33.6187);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#79CBC7").s().p("Aj7C1QhrAigrg2QgZgjg1APQAJhGBSABQAuAOBFgGQAZgaA9gHQAvg0A3ARQgkAPgFAoQAFAQgbApQBWgrBEi/QAuh7BrgnQBogmBxA5QB5A/gUCyQgNBmhLBGQgmgegmAeQhdBThwAmQgtAHgrAAQieAAhxhrg");
	this.shape_14.setTransform(-1.0832,12.3392);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#79CBC7").s().p("AhhEQIgZgDQg/gLg8ggQhfA8g3goQgigcgvAcQgJhGBPgUQAwACBBgYQARggA6gWQAfhAA6AEQgeAYAFAnQAJAPgQAuQAbgXAtgwIAAAAQAzg+Arh5QAth7BrgnQBogmByA5QB5A/gUCyQgNBmhMBGQgmgeglAeQhdBThwAmQguAHgrAAQg9AAg2gQg");
	this.shape_15.setTransform(-0.9042,12.3412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_15},{t:this.shape_13}]},2).wait(2));

	// rightfin
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#79CBC7").s().p("Ag4AMIA0giIA9AfQgaAOgfAAQgaAAgegLg");
	this.shape_16.setTransform(31,34.7093);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-28.7,99.7,75.5);


// stage content:
(lib.narwhal_happy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Aladin'; // Google API font
			mystage.color = '89cff0'; // Text color
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

	// layer_1
	this.instance = new lib.narwhal();
	this.instance.parent = this;
	this.instance.setTransform(50.25,59.15,0.9805,0.9805,0,0,0,0.9,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.2,72.1,47.8,24.10000000000001);
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