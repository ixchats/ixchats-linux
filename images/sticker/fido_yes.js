(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.fido_yes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Baloo Thambi'; // Google API font
			mystage.color = '#FFECD9'; // Text color
			mystage.shad1 = '#E34C55'; // Main shadow color
			mystage.shad2 = '#E97178'; // Alt shadow color
			mystage.shadow = '-1px -1px 0px $2, 2px 2px 0 $1, 2px -2px 0 $1, -2px 2px 0 $1, -2px -2px 0 $1, 2px 0px 0 $1, 0px 2px 0 $1, -2px 0px 0 $1, 0px -2px 0 $1'; // shadow
			//text-shadow: -1px -1px 0px #E97178, 2px 2px 0 #E34C55, 2px -2px 0 #E34C55, -2px 2px 0 #E34C55, -2px -2px 0 #E34C55, 2px 0px 0 #E34C55, 0px 2px 0 #E34C55, -2px 0px 0 #E34C55, 0px -2px 0 #E34C55;
			mystage.spacing =  '0.05'; // letter spacing in em's
			mystage.transform = 'rotate(-5deg)'; // transform
			//mystage.texty = 70; // text y offset in px (for text at bottom)
		
			StickerInit(mystage);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#423932").ss(1,1,1).p("AgIhLQABgCABgBQAZgpAogEQAKgBAKABQAdAEAZAaQAhAiAFA1QAGAzgZAoQgZApgpAEQgdADgZgQQgCgBgCgCQgIgGgIgIQgDgDgDgEQgUgZgHgiQgBgBAAgBQgCgJgBgKAgIhLQgUiIAqgPQASgGAQAKQAfATAABQAirCkICSiXQgBgIAAgIQAAgBAAgBQAAgnASgfAhkDlICAhz");
	this.shape.setTransform(61.6496,54.572);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-106,-10.7,0,-106,-10.7,418.4).s().p("AirCkICSiXIADATIABACQAHAiAUAZIAGAHIAQAOIiABzQhKgCADg/gAAgB1QAsgogMgQQgOgLgLAKIghAhQgUgZgHgiIgBgCQA7gdgIgSQgLgOgNAGIgfASQAAgnASgfIACgDQAZgpAogEIAEAAIACAAIABAAIAAAAIALAAIACAAQAdAEAZAaQAhAiAFA1QAGAzgZAoQgZApgpAEIgJAAQgYAAgVgNgAgWAgIAAAAgAAOjiQASgGAQAKQAfATAABQIgCAAIgLAAIAAAAIgBAAIgCAAIgEAAQgoAEgZApIgCADQgUiIAqgPgABPh7IAAAAg");
	this.shape_1.setTransform(61.6437,54.572);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJBFIgPgOIgGgHIAggiQALgJANALQAMAQgsAnIgDgCgAgtggIgBgQIAAgDIAhgSQANgGAJAOQAIAUg7AdIgDgUg");
	this.shape_2.setTransform(63.5786,59.11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#423932").ss(1,1,1).p("ABnihQAmAFAhAiQArAtAHBFQAHBEggA0QghA1g2AFQglAEghgVQgDgBgCgCQgLgIgKgKQgEgFgEgEQgaghgKgtQgBgBAAgBQgDgNgBgNQgCgLAAgKQAAgCAAgBQAAgyAYgpQACgDABgCQAgg0A2gGQANgBAMABgAgLhiQgaizA4gTQAXgIAVANQAoAZAABpAjgDXIC/jGAiEEsICpiW");
	this.shape_3.setTransform(66.587,49.3858);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALBaQgKgIgKgKIgIgJIArgsQAOgNASAPQAQAVg6AzIgFgDgAg7gqIgBgWIAAgDIAqgXQARgIANASQAKAZhNAnIgEgag");
	this.shape_4.setTransform(69.1241,55.3519);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-138.9,-13.9,0,-138.9,-13.9,548).s().p("AjgDXIC/jGIAEAaIABACQAKAtAaAhIAIAJQAKAKALAIIipCWQhggCAEhTgAAqCZQA5gzgQgVQgRgPgPANIgrAsQgaghgKgtIgBgCQBNgngLgYQgNgSgRAIIgqAXQAAgyAYgpQgaizA4gTQAXgIAVANQAoAZAABpQAmAFAhAiQArAtAHBFQAHBEggA0QghA1g2AFIgMABQgfAAgbgSgABOihQg2AGggA0IgDAFIADgFQAgg0A2gGIACgBIADAAIAFAAIAAAAIAAAAIAMABIADAAIgDAAIgMgBIAAAAIAAAAIgFAAIgDAAIgCABIAAAAgAgdArIAAAAg");
	this.shape_5.setTransform(66.5809,49.3858);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).wait(7));

	// Layer_12
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("AAPlHQAJgEAKgBQAXABAZAcQBRgSASBAQASA6AiAGQACgBABAAQAlAEADA0QADAzAdAIQAdAJAIA4QAEAWgMAUQAZAoAFAdQAHA3g5ADQgRABgIgGQgbAagfgTQgXgPgIgsIgBgdQgVgIgKgeQgLgdAIgeQACgigmgYQgogYgDg1QgDgpgxguQgsgsASgcQACgCACgDgAjjj9QgNACgJAHQgXAQgFAnQhdArAdA8QAYA4geAcQgCAAgBACQgiAbAjApQAiAogXAaQgWAbAgAwQANATAbAIQAEAvAQAZQAhAtA8glQAQgLAEgJQAuAAAQgjQANgcgZgnIgUgWQAPgUgLgeQgKgdgfgSQgbgXAVgtQAWgsgkgqQgbggAPhFQAOhAgogIQgDgBgEAAg");
	this.shape_6.setTransform(37.4395,58.8773);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E451B").s().p("Aj4DuQhDgbAYggQAug0gvgXQgvgYACg8QAegbgYg4Qgdg8BdgrQAFgnAXgQQAJgHANgCIAHABQAoAIgOBAQgPBFAbAgQAkAqgWAsQgVAtAbAXQAfASAKAdQALAegPAUQgLBIhFgcQArA9giAJIgKABQgwAAgEhIgAEeBTQgZA8gxgzQgVgIgKgeQgLgdAIgeQACgigmgYQgogYgDg1QgDgpgxguQgtgsATgcIAEgFQAJgEAKgBQAXABAZAcQBRgSASBAQASA6AiAGQAlAugPAuQgPAsA6AQQAhAMgYA6QArBCgnAZIgHABQgUAAgIg9g");
	this.shape_7.setTransform(36.4487,56.5866);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D2808").s().p("AkMDvQgQgZgEgvQgbgIgNgTQgggwAWgbQAXgagignQgjgpAigcIADgCQgCA8AvAXQAvAXguA0QgYAgBDAbQAFBPA5gIQAigJgrg9QBFAcALhIIAUAWQAZAngNAcQgQAjguAAQgEAJgQALQgbARgWAAQgaAAgSgZgADqBYQgXgPgIgsIgBgdQAxAzAZg7QAJBGAagLQAngZgrhBQAYg7ghgMQg6gQAPgsQAPguglguIADgBQAlAEADA0QADAzAdAIQAdAJAIA4QAEAXgMAUQAZAoAFAcQAHA3g5ADQgRABgIgGQgQAPgRAAQgMAAgNgIg");
	this.shape_8.setTransform(37.4395,65.7773);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_6}]},2).wait(7));

	// Layer_17
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AhagCQg1AYgDA1ACTg7Qg2gcgkAZ");
	this.shape_9.setTransform(33.725,49.6283);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AAsgHQg6gNgdAg");
	this.shape_10.setTransform(45.125,47.2663);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:33.725,y:49.6283}}]}).to({state:[{t:this.shape_9,p:{x:33.425,y:47.9783}},{t:this.shape_10}]},2).wait(7));

	// Layer_14
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADA0QgCgEAGgFQAGgGAKgEQAKgEAHABQAJAAACAEQACAFgGAFQgGAGgKAEQgKADgIAAQgIAAgCgFgAhcAmQgGgCgCgFQgDgFACgFQABgGAFgCQAFgDAGABQAFACADAFQACAFgBAGQgCAFgFADQgDACgDAAIgEgBgABVgdQgFgBgDgFQgDgGACgFQACgGAFgDQAFgCAFABQAGACACAFQADAFgBAFQgCAGgFADQgDACgDAAIgFgBg");
	this.shape_11.setTransform(34.4743,52.1607);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdASQgCgEAGgFQAGgGAKgDQAKgEAHABQAJAAACADQACAFgGAFQgGAGgKAEQgKADgIAAQgIAAgCgFgAhCAEQgGgCgCgEQgDgFACgFQABgGAFgCQAFgDAGABQAFACADAFQACAFgBAGQgCAEgFADQgDACgDAAIgEgBg");
	this.shape_12.setTransform(31.585,53.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).wait(7));

	// Layer_13
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDBNQgRgCgDgJQgEgKALgNQAMgMAUgIQAUgIARACQARACAEAKQADAJgLANQgMAMgUAIQgTAGgPAAIgDAAgAhlAvQgMgFgEgLQgEgMAFgMQAFgJAMgEQALgEALAEQALAFAEALQAEALgEAMQgGALgLAEQgFACgFAAQgGAAgGgDgABPgUQgMgFgEgLQgEgLAFgMQAFgKALgFQALgEALAEQALAGAFAMQAEALgFALQgFALgLAEQgFACgFAAQgGAAgGgDg");
	this.shape_13.setTransform(34.8303,52.4934);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AATArQgRgCgDgJQgEgKAKgNQANgLAUgIQAUgIARACQARACAFAKQADAIgMANQgMAMgUAIQgSAGgPAAIgEAAgAhPANQgLgFgEgKQgFgMAGgMQAEgKAMgEQALgEAMAEQAKAFAFAMQAEALgFAMQgFAKgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_14.setTransform(32.2798,54.2434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},2).wait(7));

	// Layer_7
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#423932").ss(1,1,1).p("AA5glQgWAGgNgaQgBAJgCAIQgPBBhGglQALASAMAPQAeAmAhgBQAJgBAHgDIABAAQABgBACgCQAhgWgQhCQALgCAMgKAhPgBQAKgPARgF");
	this.shape_15.setTransform(36.45,64.9253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA3800").s().p("AgngRQA1gJAaApQgHAEgJABIgBAAQggAAgeglg");
	this.shape_16.setTransform(36.075,68.7959);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C0000").s().p("AAnA4Qgagqg2AJQgMgPgLgSQBGAlAQhBQABgIABgJQANAbAWgHQARBDghAVIgEADg");
	this.shape_17.setTransform(36.25,64.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#423932").ss(1,1,1).p("AA/gpQgYAGgPgdQAAAKgCAJQgRBJhPgqQANAVANAQQAiArAlgBQAKgBAIgEIAAAAQACgBACgCQAlgYgThKQAMgDAOgLAhZgCQAMgQATgG");
	this.shape_18.setTransform(35.45,64.3253);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA3800").s().p("AgsgTQA8gKAdAuQgIADgKACIgBAAQgkAAgigpg");
	this.shape_19.setTransform(35.05,68.6626);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9C0000").s().p("AArA/Qgdgvg8AKQgNgRgMgUQBOAqARhKQACgJABgKQAOAeAZgHQASBKgkAZIgEADg");
	this.shape_20.setTransform(35.2111,64.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).wait(7));

	// Layer_15
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9E451B").s().p("AgZBXQgkgKgSgiQgSghALgjQALgkAhgSQAhgSAjALQAkALASAhQASAhgLAiQgLAlghASQgUALgWAAQgMAAgOgEg");
	this.shape_21.setTransform(24.775,51.2152);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(2).to({x:24.475,y:49.5652},0).wait(7));

	// Layer_11
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#423932").ss(1,1,1).p("AjSA7QAZBbBQAuQBPAxBXgZQBYgYAshTQAshRgZhZQgahbhPgwQgzgeg2gBQgRAAgTADQgMACgOADQgNAEgNAFQgtATggAkQgQATgMAXQgtBSAaBag");
	this.shape_22.setTransform(33.1917,50.7861);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-2,-6.4,0,-2,-6.4,33.7).s().p("AhpDEQhQgugZhbQgahaAthSQAMgXAQgTQAggkAtgTQANgFANgEQAOgDAMgCQATgDARAAQA2ABAzAeQBPAwAaBbQAZBZgsBRQgsBThYAYQgdAIgdAAQg4AAg0ggg");
	this.shape_23.setTransform(33.1917,50.7861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_23},{t:this.shape_22}]},2).wait(7));

	// Layer_1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAwAdQgDgDAAgDIAAgVQAAgCADgEQACgCAEAAQADAAADACQADAEAAACIAAAVQAAADgDADQgDADgDAAQgEAAgCgDgAAUAdQgDgDAAgDIAAgVQAAgCADgEQACgCAEAAQADAAADACQADAEAAACIAAAVQAAADgDADQgDADgDAAQgEAAgCgDgAjEAOQgDgDAAgDIAAgUQAAgEADgDQACgDAEAAQADAAADADQADADAAAEIAAAUQAAADgDADQgDAEgDAAQgEAAgCgEgAC4AEQgCgDAAgCIAAgVQAAgEACgDQADgCADgBQAEABADACQADADAAAEIAAAVQAAACgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_24.setTransform(39.025,93.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(9));

	// Layer_3
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#423932").ss(1,1,1).p("ABJBvQCGADAJgZQAMgcg4geQAPgmgrgoQADg3gvgeIjvADQg6A0AKA+QACALAEALQgYAbALAfQgZAHACAXQACAWAdABICZAAQAHAGAKADQAoAMApgNQAGgIACgHgAi1AdIAeAWAhhgiQAMAvAfANQgFBFAaAXABDgiQACAXgSAPQANAegFAPQgEAIgKADQAOAJgCAMQAVAMgFASACLgdQgaAPgJAX");
	this.shape_25.setTransform(38.9373,84.1505);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9E451B").s().p("AAIg4QAmAUgFAYQgGAehKAnQgKg9A5g0g");
	this.shape_26.setTransform(24.1309,76.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],0,0,0,0,0,31).s().p("AgQB/QgKgDgHgGQgWgUAAg0IABgUQgfgNgMgvQAMAvAfANIgBAUQAAA0AWAUIiZAAQgdgBgCgWQgCgXAZgHQgLgfAYgbQgEgLgCgLQBLgnAGgfQAFgYgmgUIDvgDQAvAegDA3QArAogPAmQA4AegMAcQgJAZiGgDIABgHQAAgNgRgKIAAgDQAAgKgMgIQAKgDAEgIQABgEAAgFQAAgOgJgWQAQgNAAgTIAAgGIAAAGQAAATgQANQAJAWAAAOQAAAFgBAEQgEAIgKADQAMAIAAAKIAAADQARAKAAANIgBAHQgCAHgGAIQgVAHgWAAQgTAAgTgGgAiXAzIgegWgABoAJQAJgXAagPQgaAPgJAXg");
	this.shape_27.setTransform(38.9373,84.1505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).wait(7));

	// Layer_6
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0E80D4").s().p("AjkCqIAijbIg+hqQBEgmgohyQCiCJCpi4QgfDcC5BRQiSCHBuCvQivg0hlCVQgbhiiShWg");
	this.shape_28.setTransform(74.15,47);
	this.shape_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(2).to({_off:false},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.7,61.6,50.2,36.9);
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