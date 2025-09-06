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


(lib.tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("AAxg6QgFAEgGAEQhdBQBABTIghBcQhthDAUh6QAMhLA8g+QAqgqBBgkQA6gVgHBKQgFAlg/Azg");
	this.shape.setTransform(11.7379,20.4765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007AD4").s().p("AhPgYQAMhNA9g9QAbA3A+AHIgKAJQhdBQA/BSIgiBcQhshDAUh4g");
	this.shape_1.setTransform(8.295,24.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004374").s().p("AhPAKQArgpBAgkQA6gVgHBKQgFAkg/AzQg+gIgcg3g");
	this.shape_2.setTransform(15.5179,7.2765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tail, new cjs.Rectangle(-1,-1,25.5,43), null);


// stage content:
(lib.max_sleep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Henny Penny'; // Google API font
			mystage.color = '#FFFFFF'; // Text color
			mystage.shad1 = '#007AD4'; // Main shadow color
			mystage.shad2 = '#007AD4'; // Alt shadow color
			mystage.shadow = '-1px -1px 0px $2, 2px 2px 0 $1, 2px -2px 0 $1, -2px 2px 0 $1, -2px -2px 0 $1, 2px 0px 0 $1, 0px 2px 0 $1, -2px 0px 0 $1, 0px -2px 0 $1'; // shadow
			//text-shadow: -1px -1px 0px #E97178, 2px 2px 0 #E34C55, 2px -2px 0 #E34C55, -2px 2px 0 #E34C55, -2px -2px 0 #E34C55, 2px 0px 0 #E34C55, 0px 2px 0 #E34C55, -2px 0px 0 #E34C55, 0px -2px 0 #E34C55;
			mystage.spacing =  '0.05'; // letter spacing in em's
			mystage.transform = 'rotate(-5deg)'; // transform
			//mystage.texty = 70; // text y offset in px (for text at bottom)
		
			StickerInit(mystage);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36));

	// ears
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("ABkABQBCgwBXAMQAMAmgUAkAhjABQhCgwhXAMQgMAmAUAk");
	this.shape.setTransform(46.075,38.832);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007AD4","#5DBAFF"],[0,1],0.4,47.8,0.4,-3.7).s().p("ABkABQBCgwBXAMQAMAmgUAkgAj8gjQBXgMBCAwIiRAmQgUgkAMgmg");
	this.shape_1.setTransform(46.075,38.832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(36));

	// pupils
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRARQgIgHAAgKQAAgJAIgHQAHgHAKAAQALAAAHAHQAIAHAAAJQAAAKgIAHQgHAHgLAAQgKAAgHgHg");
	this.shape_2.setTransform(62.5,55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(24).to({_off:false},0).wait(12));

	// eyeback
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#007AD4","#005595"],[0,1],4,10.8,4,-17.7).s().p("AAvA6QgZgYAAgiQAAghAZgYQAYgZAiAAQAiAAAYAZQAYAYAAAhQAAAigYAYQgYAYgiAAQgiAAgYgYgAijA6QgXgYAAgiQAAghAXgYQAZgZAiAAQAiAAAYAZQAZAYgBAhQABAigZAYQgYAYgiAAQgiAAgZgYg");
	this.shape_3.setTransform(46.8,55.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8ArQgNgMgGgPICWhDQAJARAAAUIAAAHIiDA7IgJgJg");
	this.shape_4.setTransform(57.575,56.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#007AD4","#005595"],[0,1],4,10.8,4,-17.7).s().p("AA4BDICDg8QgCAdgWAWQgYAYgiAAQgbAAgWgPgAiiA6QgYgYAAgiQAAghAYgYQAYgZAiAAQAiAAAYAZQAZAYAAAhQAAAigZAYQgYAYgiAAQgiAAgYgYgAAXAAQAAghAYgYQAYgZAiAAQAiAAAYAZQAKAJAGAMIiXBDQgFgPAAgQg");
	this.shape_5.setTransform(46.7875,55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},24).wait(12));

	// noseline
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("AAABAIAAh/");
	this.shape_6.setTransform(46.8,74.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(36));

	// mouth
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(2,1,1).p("AhdgLQAvAuAuguQAvAuAvgu");
	this.shape_7.setTransform(46.775,81.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36));

	// whiskers
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.647)").ss(2,1,1).p("AkVBIQBHhIBrgTAkjgKQBTg7BsgBAEkgIQhSg8hrgEAEVBJQhGhJhpgV");
	this.shape_8.setTransform(46.8,75.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(36));

	// blush
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(245,151,223,0.749)").s().p("ABQAyQgXgUAAgeQAAgdAXgUQAXgWAhABQAhgBAXAWQAXAUAAAdQAAAegXAUQgXAWghgBQghABgXgWgAi/AyQgXgUAAgeQAAgdAXgUQAXgWAhABQAggBAXAWQAYAUAAAdQAAAegYAUQgXAWgggBQghABgXgWg");
	this.shape_9.setTransform(46.925,72.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(36));

	// noseshine
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAFQgHgCAAgDQAAgCAHgDQAGgCAJABQAJgBAHACQAHADAAACQAAADgHACQgHADgJAAQgJAAgGgDg");
	this.shape_10.setTransform(46.8,64.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(36));

	// nose
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgugXIBdAAQgLAggkAOQgkgKgKgkg");
	this.shape_11.setTransform(46.85,65.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(36));

	// head
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("AleBzQAUhSBNg+QBKg8BggRQAogIArAAQAyAAAsAKQBZASBGA5QBOA+AUBS");
	this.shape_12.setTransform(46.525,45.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#007AD4","#5DBAFF"],[0,1],0.5,10.2,0.5,-25.1).s().p("AhMEYQgUgDgSgFIgMgDIgLgDQg/gWg1gqQg2gtgag1QgYgyAAg5QAAgfAHgdQAUhSBNg/QBKg8BggSQA9BHAcB1QAch1A8hEQBZASBGA5QBOA/AUBSQAHAdAAAfQAAA5gYAyQgaA1g3AtQg0AqghAWIgiAGIgXAFQg8AJgzAAQgnABglgHg");
	this.shape_13.setTransform(46.525,63.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004374").s().p("AhYhZQAogHAsgBQAxAAAsAKQg8BFgcB0Qgch1g9hGg");
	this.shape_14.setTransform(47.025,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(36));

	// body
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(51,51,51,0.647)").ss(2,1,1).p("AHPAAQAACbiIBuQiHBvjAAAQi/AAiIhvQiHhuAAibQAAiaCHhvQCIhuC/AAQDAAACHBuQCIBvAACag");
	this.shape_15.setTransform(50.575,60);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#007AD4","#0092FF"],[0,1],0.2,6.3,0.2,-22.2).s().p("AlHEJQiHhuAAibQAAibCHhtQCIhuC/gBQDAABCHBuQCIBtAACbQAACbiIBuQiHBujAABQi/gBiIhug");
	this.shape_16.setTransform(50.575,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(36));

	// tail
	this.instance = new lib.tail();
	this.instance.parent = this;
	this.instance.setTransform(39,13.1,1,1,0,0,0,11.8,20.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({regX:11.6,skewX:-27.4945,skewY:152.5055,x:25.2,y:21.4,alpha:1},0).to({scaleX:0.9999,scaleY:0.9999,skewX:43.4907,skewY:223.4907,x:76.8,y:20.85},6).to({scaleX:1,scaleY:1,skewX:85.9827,skewY:265.9827,x:79.85,y:39.35},3).wait(1).to({skewX:11.0004,skewY:191.0004,x:56.3,y:11.1,alpha:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.3,37.7,48.8,60.89999999999999);
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