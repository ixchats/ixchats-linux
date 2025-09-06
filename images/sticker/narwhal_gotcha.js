(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.narwhal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// horn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFD89").s().p("AggAAIAWgRQANAPAegEIgPAYIgFAAQgVAAgYgSg");
	this.shape.setTransform(2.675,-5.462);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6F798").s().p("AgeAGIAfgXQAJALAVgEIgRAbIgNABQgUAAgLgMg");
	this.shape_1.setTransform(4.6,-7.8994);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83E1FB").s().p("AgVAFIAYgSQAGAGANgCIgOAVIgJACQgNAAgHgJg");
	this.shape_2.setTransform(6.85,-10.1984);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5C3F3").s().p("Ag8AcIAFgFQAcAWAXgDIgQAaQgegLgKgdgAAWgkIAngfIgUAjIgGABQgIAAgFgFg");
	this.shape_3.setTransform(4.95,-7.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},2).wait(1));

	// frontfin
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#79CBC7").s().p("Ag3ArQAAhGBvgYIgOBSQgsAVgbAAQgRAAgJgJg");
	this.shape_4.setTransform(-22.675,14.4691);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

	// eyeshine
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.647)").s().p("AgBAJQgEgBgCgDQgCgEABgDQABgEADgBQAEgCADAAQADACACADQADADgBADQgCAFgDACIgEABIgCgBg");
	this.shape_5.setTransform(-5.4024,2.715);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAOQgGgBgDgGQgDgGACgEQABgHAFgCQAGgDAFABQAGACACAFQAEAFgCAFQgCAGgFAEQgDACgEAAIgDgBg");
	this.shape_6.setTransform(-2.4918,1.2525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).wait(1));

	// eye
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066A7").s().p("AgHAeQgMgEgHgLQgGgLADgLQAEgMALgHQALgGALADQAMAEAHALQAGAKgDAMQgDAMgLAGQgIAFgIAAIgHgBg");
	this.shape_7.setTransform(-3.6218,1.9221);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(3));

	// mouth
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#227685").ss(2,1,1).p("AAIgjQgdAeAXAp");
	this.shape_8.setTransform(-11.3333,-1.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(3));

	// overlay
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(170,170,170,0.098)","rgba(255,255,255,0.447)"],[0.341,0.663],-14.5,-9.3,12.2,6.1).s().p("AhQCcIgJgJQhUhyAyiQQAzh+hDABQAYgcAggJQCNglBECEQAlBGgsBFQgsBEhIAUQhHATAkA8QBagGAPA7QgcgEgLAKQgUATgngPQAKAlgpATQgQALAEAYQg2gyAqhMg");
	this.shape_9.setTransform(-6.2174,20.4688);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(170,170,170,0.098)","rgba(255,255,255,0.447)"],[0.341,0.663],-5.1,-29.7,16.7,-7.9).s().p("Ag0gnIgGgKQgGgRgFgSIAAAAIBEASIACANQBZASgBA8QgagLgNAHQgYANgigaQAAAngsAIQgTAGgCAYQgng+A8g+g");
	this.shape_10.setTransform(-10.3465,40.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(170,170,170,0.098)","rgba(255,255,255,0.447)"],[0.341,0.663],-14.5,-1.8,12.2,13.6).s().p("AhuC9Qg4hmArh7QAzh+hDACQAYgdAggIQCNglBECDQAlBHgsBDQgsBFhHATQhFATAXBBg");
	this.shape_11.setTransform(-6.2163,12.9438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).wait(1));

	// body
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#79CBC7").s().p("AhQCcIgJgJQhUhyAyiQQAzh+hDABQAYgcAggJQCNglBECEQAlBGgsBFQgsBEhIAUQhHATAkA8QBagGAPA7QgcgEgLAKQgUATgngPQAKAlgpATQgQALAEAYQg2gyAqhMg");
	this.shape_12.setTransform(-6.2174,20.4688);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjAgQgRhLAQhRQAJgnAXgcQBCgBg0B+QgwCQBTByQg+hBgShfg");
	this.shape_13.setTransform(-19.6879,15.9991);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaClQgqg8gOhJQgRhMAQhQQAKgoAVgbQBDgCgzB+QgqB7A3BmIAAAAIAAADQAFAQAGAQIgOgcg");
	this.shape_14.setTransform(-20.2129,16.0491);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#79CBC7").s().p("AhdCeIgGgLQgGgPgFgRIAAgCIAAgBQg4hlArh7QAzh+hDABQAYgcAggJQCNglBECEQAlBGgsBFQgsBEhIAUQhAARAPA2IAHAYQBYATgBA8QgagLgNAHQgXANgjgZQAAAmgsAIQgTAHgCAYQgng/A8g+g");
	this.shape_15.setTransform(-6.2162,20.5688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).wait(1));

	// backfin
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#79CBC7").s().p("AgZAXQAQguAjgJIgIA8QgPAFgIAAQgPAAgFgKg");
	this.shape_16.setTransform(-25.8,5.9941);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-14.6,39.5,63.5);


// stage content:
(lib.narwhal_gotcha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Aladin'; // Google API font
			mystage.color = '#89cff0'; // Text color
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBD8DC").s().p("AgDBjQgEAAgEgDQgDgEAAgEIAAiuQAAgFADgEQAEgDAEAAIAGAAQAFAAAEADQADAEAAAFIAACuQAAAEgDAEQgEADgFAAg");
	this.shape.setTransform(43.75,41.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CBD8DC").s().p("AgDBZQgEAAgEgDQgDgDAAgEIAAicQAAgFADgDQAEgDAEAAIAGAAQAFAAAEADQADADAAAFIAACcQAAAEgDADQgEADgFAAg");
	this.shape_1.setTransform(43.75,40.6875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBD8DC").s().p("AgDBPQgEAAgEgDQgDgDAAgDIAAiKQAAgEADgDQAEgDAEAAIAGAAQAFAAAEADQADADAAAEIAACKQAAADgDADQgEADgFAAg");
	this.shape_2.setTransform(43.75,39.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBD8DC").s().p("AgDBEQgEAAgEgCQgDgDAAgDIAAh3QAAgDADgDQAEgCAEAAIAGAAQAFAAAEACQADADAAADIAAB3QAAADgDADQgEACgFAAg");
	this.shape_3.setTransform(43.75,38.6125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBD8DC").s().p("AgDA6QgEAAgEgCQgDgCAAgDIAAhlQAAgCADgDQAEgCAEAAIAGAAQAFAAAEACQADADAAACIAABlQAAADgDACQgEACgFAAg");
	this.shape_4.setTransform(43.75,37.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBD8DC").s().p("AgDAvQgEAAgEgBQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAhTQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAEgBAEAAIAGAAQAFAAAEABQADACAAACIAABTQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgEABgFAAg");
	this.shape_5.setTransform(43.75,36.5375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBD8DC").s().p("AgDAlQgEAAgEgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAhBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAEgCAEAAIAGAAQAFAAAEACQAAAAABAAQABABAAAAQABAAAAABQAAAAAAAAIAABBQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAAAABQgEABgFAAg");
	this.shape_6.setTransform(43.75,35.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CBD8DC").s().p("AgCAvQgGAAgDgBQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAhTQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQADgBAGAAIAFAAQAFAAADABQAEACAAACIAABTQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBABQgDABgFAAg");
	this.shape_7.setTransform(44.0833,36.5375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBD8DC").s().p("AgCA6QgFAAgEgCQgDgCAAgDIAAhlQAAgCADgDQAEgCAFAAIAGAAQAEAAAEACQADADAAACIAABlQAAADgDACQgEACgEAAg");
	this.shape_8.setTransform(44.4167,37.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBD8DC").s().p("AgDBEQgFAAgDgCQgDgDAAgDIAAh3QAAgDADgDQADgCAFAAIAGAAQAFAAADACQAEADAAADIAAB3QAAADgEADQgDACgFAAg");
	this.shape_9.setTransform(44.75,38.6125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBD8DC").s().p("AgCBPQgFAAgEgDQgDgDAAgDIAAiKQAAgEADgDQAEgDAFAAIAFAAQAFAAADADQAEADAAAEIAACKQAAADgEADQgDADgFAAg");
	this.shape_10.setTransform(45.0833,39.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBD8DC").s().p("AgDBZQgEAAgEgDQgDgDAAgEIAAicQAAgFADgDQAEgDAEAAIAHAAQAEAAAEADQADADAAAFIAACcQAAAEgDADQgEADgEAAg");
	this.shape_11.setTransform(45.4167,40.6875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBD8DC").s().p("AgDBjQgFAAgDgDQgDgEAAgEIAAiuQAAgFADgEQADgDAFAAIAGAAQAFAAADADQAEAEAAAFIAACuQAAAEgEAEQgDADgFAAg");
	this.shape_12.setTransform(45.75,41.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},6).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	// Layer_4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#93AAB5").s().p("Ag1A2QgWgXAAgfQAAgfAWgWQAWgWAfAAQAfAAAWAWQAXAWAAAfQAAAfgXAXQgWAWgfAAQgfAAgWgWgAgZgZQgLALAAAOQAAAPALALQALALAOgBQAPABAKgLQAKgLAAgPQAAgOgKgLQgKgLgPABQgOgBgLALg");
	this.shape_13.setTransform(83.4,74.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#667680").s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgLAOABQAPgBAKALQALALAAAOQAAAPgLALQgKALgPgBQgOABgKgLg");
	this.shape_14.setTransform(83.35,74.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(24));

	// Layer_2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#642111").s().p("ACdEtQAkh0AOiLQANiJgnhVQhFiDioACQhaAChTAfQgYAIgCgLQgBgLATgHQEPhkCTCdQA2A6ALBJQARB1gNCLQgSC1gvABQgggBAEgfg");
	this.shape_15.setTransform(69.7512,60.4045);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(24));

	// Layer_5
	this.instance = new lib.narwhal();
	this.instance.parent = this;
	this.instance.setTransform(46.05,70.6,0.8901,0.8901,0,0,0,-8.7,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:57},6).wait(6).to({x:48.05,y:70.6},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.5,77.1,16.799999999999997,21.700000000000003);
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