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


(lib.tlip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ATmLZQgFgPgOgUQgjgyD1jPIjNB9QhaBNgxAkQgxAlBJnCQh4FUg6gFQhHgHgogaQgfgQAdhgQA4jABQi3Ig0BLQhTgKgpBaQgfBDgkA9QhCByhVBkQg9gJg+gHQADhRAdhQIAFgLQAwh7BDj7QheCugPA5IgIAeIgQA2IhYDbIgCAEIhHgHIgCgEIAWiqIABgCIADgFIABgCIABgCIACgBIADgFIACgCQBwidAJknQhkD7hHCfQg4B+haBjIgegCIAAp+IgoFAQgWCohaCSIhVgBQgLgSgFgUQgFgRgBgSIAAgBIAAgCIAAgBQgJjTAQmkQg2FQgpB9QgTA8gKA+QgCAPgEANQgEASgGAOIgEAJIgBACIgBABIhHA5IgOACIgWABIgKAAIgJgBQglgFgWgZQixjSADkoQABiTg4iIQAtFogJFqQgCBJg9AdQg9AdhFgNQgyg4gghCQgTgogWgnQAHBdAkBVQAEALADALIhpAAQhRg8g+hQIgOgRQAhBfATBkQkbAfiLAoQkRBOkgiiQkgiiGvlAQGwk/EOkbQEOkcGTgDQGUgDCrETIGyjmQDGhpEICnQEJCmGGGTQGGGSE9HcQjGAmjSAAQkUAAkohCg");
	this.shape.setTransform(8.4,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tlip, new cjs.Rectangle(-215,-155.9,446.8,159), null);


(lib.mbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* // Text will be placed in this box
		// Must have instance name: mbox
		
		//You can change  the shape and size of this
		// make it alphe 0 for invisible*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Aw0FeIAAq7MAhlAAAIADK7g");
	this.shape.setTransform(107.7,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mbox, new cjs.Rectangle(0,0,215.3,70), null);


(lib.llip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArzK6Qp+kIrErcQG5o+HMAkQADASgCAjQgCAlgFA1IgCBqIgUB3QBukPAqhAIAKAAIAAHcQAEhrByiHQAug1AugkQAogfAVgEQBaAvBWAkQAXAsAABEQAABxg8D0QgtC1gtCIIAAABIAEAAQEUpyBchSQA0AMAyAHQAFAQABAXIAGAxQAEAkAAAjIAABVIABCDQAAAQgIARQgnBWhKFiQCbi1A0kXQAtj2AchxQAWAeAXAAQAwAAAQgeQASgeAvAAQBDAAArA/QAmA4AbB3QAiCVA4HEIAKAAQAKgtAFmoQAFmsgKg+QBIgSA4gfIAFgDIA0gRIAUgBQAfAAATAPQAVAQAgA1QArBIDbH4IABhGQAHi1h6j6Qh6j6DEAzIAAgUIBLAAIARABQEjAeEPCGQEOCGEdDxQr5LZrZDjQlTBqk9AAQlxAAlWiNg");
	this.shape.setTransform(9.2,81.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.llip, new cjs.Rectangle(-201,-2,420.4,167.9), null);


(lib.kissa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.llip();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-0.5,0.049,0.049,0,0,0,210.2,84.1);

	this.instance_1 = new lib.tlip();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,-1.5,0.049,0.049,0,0,0,223.4,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kissa, new cjs.Rectangle(-21,-13.1,22,16.6), null);


(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* // The Main Kiss animation goes in here.
		// The green box is temporary, used to scale the animation.
		// You cn make the green box any width and height you need*/
	}
	this.frame_12 = function() {
		PlaySound(this, "kiss");
	}
	this.frame_49 = function() {
		KissDone(this);
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(37).call(this.frame_49).wait(1));

	// Text
	this.mbox = new lib.mbox();
	this.mbox.name = "mbox";
	this.mbox.parent = this;
	this.mbox.setTransform(196.7,143,1,1,0,0,0,107.7,35);
	this.mbox.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mbox).wait(24).to({alpha:1},0).wait(26));

	// Animation
	this.instance = new lib.kissa();
	this.instance.parent = this;
	this.instance.setTransform(208,160.1,1,1,0,0,0,-10,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:17.37,scaleY:15.22,x:198.7,y:161},12).to({scaleX:13.39,scaleY:16.99,x:198.6,y:160.8},6).to({scaleX:17.37,scaleY:15.22,x:198.7,y:161},6).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89,108,215.3,69.9);


// stage content:
(lib.Lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{f1:0});

	// timeline functions:
	this.frame_0 = function() {
		mystage = this;
		mystage.TextCol = 0x000000; // <- Set text color here
		
		if(!mystage.doneInit)
		{
		
			mystage.LocalInit = function()
			{
			  // debug stuff - dont remove
			  if(HugKissDebug)
			  {
				mystage.Args = {WW:640, HH:480};
				mystage.Args.Message = "The message will go here#yt"
				mystage.Args.Vol = 100;
				//DebugGo(mystage);	
			  }
			  
			  // custom code
			}
			/*
		
			function Tick(e) // empty function if no custom code
			{
		
			}
			*/
		
			mystage.LocalGo = function() // empty function if no custom code
			{
			  //mystageInfo.RoundAvs = true; // uncomment if you want circular Avatars
			  
		
			}
		
			KissInit(mystage);
			
			// If hug has NO sound all this can be deleted:
		
			if(mystage.Args == undefined || mystage.Args.Vol > 0)
			{
				mystage.SoundLoaded = function(event) {  
					mystage.SoundsLoading = false; // start timeline
					mystage.visible = true;
					}
				
				mystage.visible = false;
				mystage.SoundsLoading = true; // stop updating (timeline)
				RegisterSounds(["kiss.mp3"], mystage.SoundLoaded);
			}
		
		
		}
		
		
		/* import flash.display.MovieClip;
		sWidth = 640; // width of this design
		sHeight = 480; // height of this design
		include "kiss.as"
		
		var TextCol = 0xFFFFFF; // <- Set text color here
		var TextCol2 = 0xFFFFFF; // <- Set text border color (if used)
		var TextType = 0; // Set to 4 for outlined text
		
		////////// TEST ////////////
		Args = {WW:640, HH:480};
		Args.Message = "The message will go here"
		Go(Args);
		/////// END TEST ////////////
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Dots
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgyEglfIAKAAEAx7AlgIAKAA");
	this.shape.setTransform(320.5,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Animation
	this.AnimMc = new lib.Anim();
	this.AnimMc.name = "AnimMc";
	this.AnimMc.parent = this;
	this.AnimMc.setTransform(159.5,167.6,1.597,1.597,0,0,0,99.4,103.8);

	this.timeline.addTween(cjs.Tween.get(this.AnimMc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,239,643,482);
// library properties:
lib.properties = {
	id: '7434312CBDBDFE4FA2556D7578A78FCC',
	width: 640,
	height: 480,
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
an.compositions['7434312CBDBDFE4FA2556D7578A78FCC'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;