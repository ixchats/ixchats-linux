(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.narwhal_dead = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// horn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFD89").s().p("AgOAXQAMgagXgmIApAHQARAdgMAvg");
	this.shape.setTransform(17.7276,68.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6F798").s().p("AgWAIQAKgSgRgYIAtAFQAXAlgNAbg");
	this.shape_1.setTransform(13.5951,67.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83E1FB").s().p("AgRACQAEgLgKgOIAkAFQARAYgKASg");
	this.shape_2.setTransform(9.2102,65.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5C3F3").s().p("ABGAwQAMgwgQgcIArAFQADAuggAfgAhqgxIgCgEIAxAIQALAOgFAMg");
	this.shape_3.setTransform(12.792,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},1).wait(1));

	// frontfin
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#79CBC7").s().p("AiHBdQgEgoAggKQBigXBXA/QgsAdhdALIgVACQgwAAgHgggAAAgKQAoggAJhSIBDAbQAdASgLAyQgNAzhOABQhAgFAVgcg");
	this.shape_4.setTransform(47.9488,75.9118);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#79CBC7").s().p("AiIBSQABgnAggHQBkgNBQBHQgvAZhdACIgCAAQhDAAgEgngAAFAAQAlgmgDhSIBHARQAeAPgDAyQgGA0hOANIgNAAQgxAAAOgbg");
	this.shape_5.setTransform(47.943,75.8753);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_5}]},1).wait(1));

	// eye
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066A7").ss(2,1,1).p("AACg1IASggIALgVAgQhRIAkgEIAbgDAgfAxIAJAYIAMAiAguBBIAYAIIAiAN");
	this.shape_6.setTransform(26.375,70.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0066A7").ss(2,1,1).p("AACgxIARgfIAKgUAgOhMIAhgEIAZgDAgcAuIAIAXIALAgAgrA9IAXAIIAfAM");
	this.shape_7.setTransform(26.4,70.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_7}]},1).wait(1));

	// mouth
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#227685").ss(2,1,1).p("Ag0B8QAigSgFggQgMhDA4gqQAqgjgNg0");
	this.shape_8.setTransform(34.6286,71.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#227685").ss(2,1,1).p("AguBtQAegQgFgcQgKg7AxglQAlgfgLgu");
	this.shape_9.setTransform(34.6613,71.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_9}]},1).wait(1));

	// overlay
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(170,170,170,0.098)","rgba(255,255,255,0.447)"],[0.341,0.663],-11.3,25.9,7,-23).s().p("Al2CcQgUgQAUgYQhFjRC0hAQBdghB5A+QBTArA8BJQAjAmAvAVQAmhRBBABQgPAQAMATQALAUgKAoQAegMApAGQAoAAAFgbQANB4hwAQIi3AAQBhgZgZgdQjNiLhiAFQiDADACCCQABAtAjAPIgOAAQhlAAgugOg");
	this.shape_10.setTransform(59.3466,70.0801);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(170,170,170,0.098)","rgba(255,255,255,0.447)"],[0.341,0.663],-7.5,15.9,7.2,-15.6).s().p("ADjCiIh5AAQBhgagZgdQjNiKhiAFQiDACACCCQABAtAjAPQhwABgxgOQgUgRAUgXQhFjRC0hBQBdghB5A+QBTArA8BJQAjAnAvAVQAAgCAMgFQAxhIA+AKQgQAOAIAUQAJAWgPAmQAfgIAoAMQAnAFAJgaQgDB5hyAAg");
	this.shape_11.setTransform(59.829,70.4268);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_11}]},1).wait(1));

	// body
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#79CBC7").s().p("Al2CcQgUgQAUgYQhFjRC0hAQBdghB5A+QBTArA8BJQAjAmAvAVQAmhRBBABQgPAQAMATQALAUgKAoQAegMApAGQAoAAAFgbQANB4hwAQIi3AAQBhgZgZgdQjNiLhiAFQiDADACCCQABAtAjAPIgOAAQhlAAgugOg");
	this.shape_12.setTransform(59.3466,70.0801);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjaAlQgCiCCDgDQBhgFDOCLQAZAdhhAZIjMAAQhDAEg1ABQgjgPgBgtg");
	this.shape_13.setTransform(56.237,77.3663);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#79CBC7").s().p("ADjCiIh5AAQBhgagZgdQjNiKhiAFQiDACACCCQABAtAjAPQhwABgxgOQgUgRAUgXQhFjRC0hBQBdghB5A+QBTArA8BJQAjAnAvAVQAAgCAMgFQAxhIA+AKQgQAOAIAUQAJAWgPAmQAfgIAoAMQAnAFAJgaQgDB5hyAAg");
	this.shape_14.setTransform(59.829,70.4268);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.9,103.1,47.9,-14.699999999999989);
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