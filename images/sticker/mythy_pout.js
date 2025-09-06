(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.mythy_pout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Crafty Girls'; // Google API font
			mystage.color = '#FFB6C1'; // Text color
			mystage.shad1 = '#C71585'; // Main shadow color
			mystage.shad2 = '#C71585'; // Alt shadow color
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

	// rightarm
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("AASiBQhNArAJDZIBmAAIAAib");
	this.shape.setTransform(49.1484,82.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyCDQgJjZBNgrIAiBoIAACcg");
	this.shape_1.setTransform(49.1484,82.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// sidehair
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgCikQgGARgBASQgKA9hVAXQAZAUAxgKQgMAagJAeQgOAsgrAKQAmASAagQQgKAXABAaQgIAvg/AQQAIASAmABQgQAcgEAkQgIAYgoAHQAdAbAxgTQAShpA4gdQABgUACgTQAHhMAMg/Qg8AsgMAiAB8kYQhmA3gYA9AA3h+QAXhHAcgpIASgqIAXgkQhhgLgiBTQgQAdg7gdQgSA2BLAaAAJCKQhEAkgTAiAAcgBQALhHAQg2QhEAxgRAq");
	this.shape_2.setTransform(49.65,58.5902);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5FA2AB").s().p("AhNBKQAogGAIgYQAEgkAQgcQASgiBFgjIgDAmQg5AegSBnQgTAIgRAAQgYAAgRgQg");
	this.shape_3.setTransform(42.775,81.4295);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7AED6C").s().p("AhLBWQA/gQAIgvQgBgYAIgYQANgiA8gtQgLBAgHBLQhEAkgTAiQgmAAgIgTg");
	this.shape_4.setTransform(44.775,68.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5F05E").s().p("AhRBgQArgKAPgsQAJgeALgaQAQgqBFgxQgQA2gLBGQg7AtgNAiQgMAIgPAAQgRAAgUgKg");
	this.shape_5.setTransform(46.9,56.4389);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAD46A").s().p("AhxBvQBUgXALg9QAAgSAHgQQAYg9Blg3IgRAqQgcApgYBGQhDAxgRAqQgRADgOAAQgbAAgQgNg");
	this.shape_6.setTransform(50.575,42.8778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F87A4F").s().p("AhlgDQA8AcAQgcQAhhTBhALIgXAkQhlA2gYA+QhMgbASg1g");
	this.shape_7.setTransform(53.8017,34.4106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// ears
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAEAtQgUhXhOgGQgQBcBKAtgAAOAyQgShYA7gxQBEBBgoBK");
	this.shape_8.setTransform(63.8477,21.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhegwQBOAGAUBXIgoAsQhKgtAQhcgAAOAyQgShYA7gyQBEBCgoBKQgJAFgQAAQgSAAgagHg");
	this.shape_9.setTransform(63.8477,21.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// brows
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ABNAYQhMhPhNA2");
	this.shape_10.setTransform(72.675,30.574);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// tophair
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AAcgDQAogRgCgoQguAgg8gQQg0gPgcBEQCbBQBWgsQgxAHgkgOQgXgJgQgSQgjgehSAcAAcgDQgjgEgngNQgqgNggAqAAkAmQA2gLAKggQghAFgngD");
	this.shape_11.setTransform(76.325,23.6588);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F8DB9").s().p("AgNgSQA9APAtgfQADAmgpARQgjgDgngNQgpgMggAqQAchFAzAQg");
	this.shape_12.setTransform(73.5823,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C183D1").s().p("AAHAEQgjgehRAcQAfgqAqANQAmANAkAEQAnAEAhgGQgJAgg3ALQgXgJgQgSg");
	this.shape_13.setTransform(75.3,24.3991);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E9A8FD").s().p("Ah4gRQBSgeAjAgQAQAQAXAKQAkANAxgHQgfAQgnAAQhGAAhlgyg");
	this.shape_14.setTransform(76.325,26.4455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// horn
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAygaQgJgBgJgCQgLgDgLgEIBWhBIguBLIgeAuQgOgBgNgEQgRgEgRgJIAzgmAgFA8IgYApQgbgBgPgMQgXgOgBggIAHgFIAvgjAgFA8QgTACgUgEQgWgHgWgOAAUAUIgZAo");
	this.shape_15.setTransform(79.425,19.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEC489").s().p("AhTBZIAcgfIADABIAAAAIAAAAIABAAQALACALAAIABAAIAAAAIALAAIgYAoQgbgBgPgLgAgdA9QgLAAgLgCIgBAAIAAAAIAAAAIgDgBIAkgqQAOADANABIgZApIgLAAIAAAAIgBAAgAAIAUQgNgBgOgDIAngsIBAhIIguBKIgSgCIASACIgeAuIAAAAgAgTAQIAAAAg");
	this.shape_16.setTransform(80.6,19.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4E0AB").s().p("AhfAxIAHgGQAWAPAWAHIgbAeQgXgOgBgggAhYArIAvgiIAzgnIAWAIIgWgIIBWhAIhABIIgnAsQgRgFgRgIQARAIARAFIglArQgWgHgWgPgAAKgeIAAAAg");
	this.shape_17.setTransform(79.425,18.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// eye
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(2,1,1).p("ABAgKQgDgSgMgNQgBgCgCgBQgDgEgFgEQgRgMgVAAQgUAAgRAMQgFAEgEAEQgOAOgEAUQAFACAEABQABAAAAAAAhAgGIAAACQAAACAAACQAAAcASASQAUATAaAAQAbAAATgTQACgBABgCQAQgSAAgZQAAgDAAgEQAAgBgBgCAhAgKQAAACAAABQAAAAAAAAIAAABQAFABAFABQBFAEAigGQAJgCAGgC");
	this.shape_18.setTransform(73.45,39.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAKQgIgHAAgLQAAgFACgEQAzAIAAABQAAALgIAHQgIAIgLAAQgKAAgIgIg");
	this.shape_19.setTransform(70.325,40.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("Ag2AdIAAgCIgBgBIgIgDQADgUAPgNIAIgIQARgMAUAAQAVAAARAMIAIAIIADADQAMAMADASIgPAEQgTAEgeAAQgXAAgfgCg");
	this.shape_20.setTransform(73.425,35.746);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnATQgSgSAAgbIAAgFIgOgDIAOABIAAACIAAgCIAJACQBGAFAigHIAOgEIABAEIAAAHQAAAZgPARIgEADQgSATgcAAQgZAAgUgTgAgygVQAAAMAIAHQAHAIALgBQALABAJgIQAGgHAAgMQAAgBgygIQgCAEAAAFgAg5ghIAAAAIAAgBIAAgDIAJADIAAABIAAACIgJgCg");
	this.shape_21.setTransform(72.8,41.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// nostrils
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAQQgGgDgFgHQgEgFAAgGQAAgHAEgDQAFgCAGACQAHADAEAFQAFAHAAAFQAAAHgFADQgCACgEAAIgFgBg");
	this.shape_22.setTransform(88.825,48.5521);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// head
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#9999CC").ss(2,1,1).p("AAqAMQgbgag4AE");
	this.shape_23.setTransform(80.725,55.5242);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CCCCCC").ss(2,1,1).p("AjcBmQAUhjAUhKQAkiDCDAXQA8AKArBSIAvBeQA2gYAVA0QAdBLg/AfQgXALgXgBQgEA5hWgsQglgVgPgJQgfgQgnAFQgrgCgUgVQgTgVAEgo");
	this.shape_24.setTransform(71.6939,41.624);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAqCkIg0geQgfgQgnAFQgrgCgUgVQgQgRAAgeIABgOIgBAOQAAAeAQARQgmARgngPQAUhjAUhKQAkiDCDAXQA8AKArBSIAvBeQA2gYAVA0QAdBLg/AfQgXALgXgBQgXgYguAAIAAAAIAAAAIgNABIgBAAIABAAIANgBIAAAAIAAAAQAuAAAXAYQgCAggdAAQgWAAglgTgACECXIAAAAg");
	this.shape_25.setTransform(71.6939,41.624);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// body
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CCCCCC").ss(2,1,1).p("ABZiRQg5BtAkBsQBcAqAJCHIg7AAIkMAAQgZhnAnh1QAFhcANhNQADgTADgSQBYicB5C8g");
	this.shape_26.setTransform(61.6867,69.6429);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DBDBDB").s().p("ABZD5QgGhghDhFQgegvAQhJQAJhciegMIAGglQBZicB4C8Qg4BtAjBsQBcAqAJCHg");
	this.shape_27.setTransform(63.75,69.6429);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiADDQgZhnAnh0QAFhdAMhNQCeAMgJBcQgRBKAfAuQBDBFAGBgg");
	this.shape_28.setTransform(58.7367,75.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(1));

	// arm
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAiA+QhMgnAKhU");
	this.shape_29.setTransform(70.7728,78.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84,58.1,10.799999999999997,38.800000000000004);
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