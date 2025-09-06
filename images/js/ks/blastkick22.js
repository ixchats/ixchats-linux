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


(lib.pback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AADH+QlNgHgEg/QgDjTBzicQBmiLBsgKQhcAAhChAQhBg/AAhaQAAhZBBhAQBCg/BcAAQBbAABBA/QBCBAAABZQAABahCA/Qg7A6hOAGQB2AABiCbQBjCdANDVQADA9kWAAIg5AAg");
	this.shape.setTransform(33.4716,51.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pback, new cjs.Rectangle(0,0,67,102.1), null);


(lib.col2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADH+QlNgHgEg/QgDjTBzicQBmiLBsgKQhcAAhChAQhBg/AAhaQAAhZBBhAQBCg/BcAAQBbAABBA/QBCBAAABZQAABahCA/Qg7A6hOAGQB2AABiCbQBjCdANDVQADA9kWAAIg5AAg");
	this.shape.setTransform(33.4716,51.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.col2, new cjs.Rectangle(0,0,67,102.1), null);


(lib.boxtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.008)").s().p("A4YDwIAAnfMAwxAAAIAAHfg");
	this.shape.setTransform(156.05,24.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxtext, new cjs.Rectangle(0,0,312.1,48.1), null);


(lib.bback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("AghEyIAeglIAEAAQgZgBglgVQgqgZglgpQhfhrAEiTQAChjBChBQBEhEBfAAQBhAABEBEQBFBFgBBfQgCCXhaBpQgjAogoAYQglAVgZABIAeAlg");
	this.shape.setTransform(23.2445,30.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bback, new cjs.Rectangle(0,0,46.5,61.3), null);


(lib.handobj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAaQgIgNAEgSQAIgPAQgMIASgPIAIAUIANgFIAIAPIgHAEIAIAQIgEADIAHAUIgRAMQgOAIgTACQgQgNgFgJg");
	this.shape.setTransform(3.8443,4.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handobj, new cjs.Rectangle(0,0,7.7,9.6), null);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mbox = new lib.boxtext();
	this.mbox.name = "mbox";
	this.mbox.parent = this;
	this.mbox.setTransform(156.1,24,1,1,0,0,0,156.1,24);

	this.timeline.addTween(cjs.Tween.get(this.mbox).wait(1));

}).prototype = getMCSymbolPrototype(lib.t0, new cjs.Rectangle(0,0,312.1,48.1), null);


(lib.GreenPawn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.412)","rgba(1,49,152,0)"],[0,1],16.7,12.1,0,16.7,12.1,62.1).s().p("AADElQlNgHgEg/QgDjTBzibQBmiMBsgKIADAAIAQAAQB2AABiCcQBjCcANDVQADA+kWAAIg5gBg");
	this.shape.setTransform(-0.0284,21.7037);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.424)","rgba(1,49,152,0)"],[0,1],9.8,8,0,9.8,8,32.6).s().p("AADDZIgDAAQhbAAhChAQhBhAAAhZQAAhYBBhAQBChABbAAQBcAABBBAQBCBAAABYQAABZhCBAQg7A5hOAHIgRAAg");
	this.shape_1.setTransform(-1.325,-29.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgMhMQhcAAhChAQhBg/AAhaQAAhZBBhAQBCg/BcAAQBbAABBA/QBCBAAABZQAABahCA/Qg7A6hOAGQB2AABiCbQBjCdANDVQADBDlPgGQlNgHgEg/QgDjTBzicQBmiLBsgKgAgJhMIgDAA");
	this.shape_2.setTransform(-0.0284,0.0287);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgWkhQANhTBIgjAhYGYQAUkPCdhj");
	this.shape_3.setTransform(-10.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 4
	this.col0 = new lib.pback();
	this.col0.name = "col0";
	this.col0.parent = this;
	this.col0.setTransform(0,0,1,1,0,0,0,33.5,51);

	this.timeline.addTween(cjs.Tween.get(this.col0).wait(1));

}).prototype = getMCSymbolPrototype(lib.GreenPawn, new cjs.Rectangle(-35,-52.5,70,105.1), null);


(lib.Balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgJk2QgXCMAZCBQAJAtARAqQAtBygZBiQgbBfg7hM");
	this.shape.setTransform(1.2112,91.6062);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.008)"],[0,1],0,0,0,0,0,9.9).s().p("AhQBRIgFgFQgSgXAHgkQAHgnAigiQAhgiAogHQAogHAYAXQAXAYgHAoQgIAoghAhQgiAignAHIgQACIgCAAQgcAAgSgSg");
	this.shape_1.setTransform(-8.3663,13.5099);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,18.3,0,-18.2).s().p("Ag4AaQg4hmALhsIAlAGIAFAGQATASAdAAQgkDDCWCQQhng4g4hng");
	this.shape_2.setTransform(-10.548,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,18.3,0,-18.2).s().p("AAJipIBdgPQALBsg4BmQg4BnhnA4QCbiVgsjNg");
	this.shape_3.setTransform(10.948,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 1
	this.bcol = new lib.bback();
	this.bcol.name = "bcol";
	this.bcol.parent = this;
	this.bcol.setTransform(0.2,30.6,1,1,0,0,0,23.2,30.6);

	this.timeline.addTween(cjs.Tween.get(this.bcol).wait(1));

}).prototype = getMCSymbolPrototype(lib.Balloon, new cjs.Rectangle(-23,0,46.5,123.7), null);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.412)","rgba(1,49,152,0)"],[0,1],16.7,12.1,0,16.7,12.1,62.1).s().p("AADElQlNgHgEg/QgDjTBzibQBmiMBsgKIADAAIAQAAQB2AABiCcQBjCcANDVQADA+kWAAIg5gBg");
	this.shape.setTransform(-0.0284,21.7037);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.424)","rgba(1,49,152,0)"],[0,1],9.8,8,0,9.8,8,32.6).s().p("AADDZIgDAAQhbAAhChAQhBhAAAhZQAAhYBBhAQBChABbAAQBcAABBBAQBCBAAABYQAABZhCBAQg7A5hOAHIgRAAg");
	this.shape_1.setTransform(-1.325,-29.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgMhMQhcAAhChAQhBg/AAhaQAAhZBBhAQBCg/BcAAQBbAABBA/QBCBAAABZQAABahCA/Qg7A6hOAGQB2AABiCbQBjCdANDVQADBDlPgGQlNgHgEg/QgDjTBzicQBmiLBsgKgAgJhMIgDAA");
	this.shape_2.setTransform(-0.0284,0.0287);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgWkhQANhTBIgjAhYGYQAUkPCdhj");
	this.shape_3.setTransform(-10.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_3
	this.col1 = new lib.col2();
	this.col1.name = "col1";
	this.col1.parent = this;
	this.col1.setTransform(0,0,1,1,0,0,0,33.5,51);

	this.timeline.addTween(cjs.Tween.get(this.col1).wait(1));

}).prototype = getMCSymbolPrototype(lib.a, new cjs.Rectangle(-35,-52.5,70,105.1), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAOgbIANgFIAIAPIgHAEIAIAQIgEADIgWAMAAgAGIAHAUIgRAMQgOAIgTACQgQgNgFgJQgIgNAEgSQAIgPAQgMIASgPIAIAUQgDACgSANAAcgNQgQAJgLAG");
	this.shape.setTransform(0.1443,0.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.handobj();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.8,1,1,0,0,0,3.9,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-4.7,-5,9.7,11.6), null);


(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* include "../blast.as"
		
		//Options.TextCols = [0x000001]; // Text colors (optional - default is white
		
		////////// TEST ////////////
		Args = {WW:728, HH:486};
		Args.Cols = [0x000080, 0xFF0000];
		Args.Text = ["Mike","Ackirbachu"]; // Pwned name, Owner name
		Go(Args);
		/////// END TEST ////////////
		*/
	}
	this.frame_135 = function() {
		KissDone(this);
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(135).call(this.frame_135).wait(1));

	// !
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhIGFIAAiIICRAAIAACIgAgfCsIgklQIAAjhICIAAIAADhIgkFQg");
	this.shape.setTransform(73.125,-136.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},6).wait(121));

	// hand
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-247.65,11.45,6.104,6.104,33.5395,0,0,0.1,0.8);

	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,23.45,6.104,6.104,33.5395,0,0,0.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},18).to({state:[]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({x:-4.7},7).to({x:19.3,y:23.45},3).wait(1).to({rotation:0,skewX:-33.5395,skewY:146.4605,x:19.8},0).wait(1).to({x:36.6,y:20.3},0).wait(6).to({scaleX:6.1039,scaleY:6.1039,skewX:-25.8333,skewY:154.1667,x:38.2,y:4.7},4).to({scaleX:6.104,scaleY:6.104,skewX:-33.5395,skewY:146.4605,x:36.6,y:20.3},4).to({scaleX:6.1039,scaleY:6.1039,skewX:-40.8323,skewY:139.1677,x:42.75,y:9.4},4).to({scaleX:6.104,scaleY:6.104,skewX:-33.5395,skewY:146.4605,x:36.6,y:20.3},3).to({skewX:-25.564,skewY:154.436,x:78.9,y:-338.45},4).wait(28).to({scaleX:1.951,scaleY:1.951,skewX:-25.5642,skewY:154.4358,x:-400.25,y:-90.45},0).to({scaleX:0.9072,scaleY:0.9072,skewX:-40.5629,skewY:139.4371,x:93.75,y:-169.1},18).to({_off:true},1).wait(37));

	// balloon
	this.instance_2 = new lib.Balloon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-248.15,-63.3,1.8674,1.8674,0,0,0,0.4,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({x:-5.2},7).to({x:18.8,y:-51.3},3).wait(2).to({x:35.6,y:-54.45},0).wait(6).to({rotation:7.7058,x:47.25,y:-69.5},4).to({rotation:0,x:35.6,y:-54.45},4).to({rotation:-7.2932,x:32.25,y:-64.6},4).to({rotation:0,x:35.6,y:-54.45},3).to({rotation:7.9752,x:88.3,y:-412.65},4).wait(28).to({regX:0.5,regY:61.7,scaleX:0.5968,scaleY:0.5968,rotation:7.9737,x:-397.15,y:-114.1},0).to({regX:0.8,regY:61.8,scaleX:0.2775,scaleY:0.2775,rotation:-7.0234,x:92.3,y:-180.1},18).to({_off:true},1).wait(37));

	// name
	this.instance_3 = new lib.t0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(71.55,105.45,1,1,0,0,0,156.1,24);

	this.Text0 = new lib.t0();
	this.Text0.name = "Text0";
	this.Text0.parent = this;
	this.Text0.setTransform(71.55,105.45,1,1,0,0,0,156.1,24);
	this.Text0._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.Text0}]},48).to({state:[{t:this.Text0}]},4).to({state:[{t:this.Text0}]},1).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.Text0).wait(48).to({_off:false},0).to({y:-218.55},4).wait(1).to({y:-361.55},0).wait(83));

	// Mod pawn
	this.instance_4 = new lib.a();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-280.05,4.6,1.5491,1.5873,0,0,0,2.5,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({x:-33.55},7).wait(114));

	// Green Pawn
	this.instance_5 = new lib.GreenPawn();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.8,1.05,1.5492,1.5872);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.447)").s().p("AgGAJIhnA3IBjg/IhxghIBzAZIg3hnIA/BjIAihvIgaBxIBng3IhjA/IBwAiIhygaIA3BoIg/hkIgiBwg");
	this.shape_1.setTransform(97.95,-171.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAPIiQBqICHh0IiwgaICyANIhqiQIB0CIIAaiwIgNCxICQhpIiIB0ICwAaIixgNIBpCPIh0iHIgaCwg");
	this.shape_2.setTransform(97.9583,-171.1583);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAWIi4CcICriqIjwgSIDxABIici4ICqCrIASjwIgBDxIC4icIirCqIDwASIjxgBICcC4IiqisIgSDxg");
	this.shape_3.setTransform(97.9667,-171.1167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAcIjfDPIDPjfIkxgMIExgLIjPjfIDfDPIALkxIAMExIDfjPIjPDfIExALIkxAMIDPDfIjfjPIgMExg");
	this.shape_4.setTransform(97.975,-171.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAeIi3DtIClj7IkrAnIEmg9Ijti3ID7ClIgnkrIA9EnIC3juIilD7IErgnIkmA9IDtC3Ij7ikIAnEqg");
	this.shape_5.setTransform(98,-171.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.447)").s().p("AgBAfIiPENIB6kXIkkBZIEchvIkNiPIEYB6IhZkkIBuEdICPkOIh6EYIEkhZIkcBuIENCPIkXh6IBZEkg");
	this.shape_6.setTransform(98.025,-171.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},33).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},28).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({rotation:7.4544,x:78.2,y:-9.05},4).to({rotation:1.0031,x:77.2,y:0.2},4).to({regY:0.1,rotation:-7.4967,x:77.45,y:-12.5},4).to({rotation:0.2033,x:76.1,y:3.1},3).to({rotation:7.9421,x:118.7,y:-352},4).wait(28).to({scaleX:0.4948,scaleY:0.5069,rotation:7.9416,x:-386.95,y:-94.2},0).to({regX:0.2,regY:-0.2,scaleX:0.2257,scaleY:0.2312,rotation:-7.0575,x:99.15,y:-172.45},18).to({_off:true},1).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.4,-532.6,640,662.1);


// stage content:
(lib.blastkick22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
		
			if(0) // no sound
			if(mystage.Args == undefined || mystage.Args.Vol > 0)
			{
				mystage.SoundLoaded = function(event) {  
					mystage.SoundsLoading = false; // start timeline
					mystage.visible = true;
					}
				
				mystage.visible = false;
				mystage.SoundsLoading = true; // stop updating (timeline)
				RegisterSounds(["Engine1wav.mp3"], mystage.SoundLoaded);
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

	// Animation
	this.AnimMc = new lib.Anim();
	this.AnimMc.name = "AnimMc";
	this.AnimMc.parent = this;
	this.AnimMc.setTransform(443.75,287.05,1,1,0,0,0,79,47.5);

	this.timeline.addTween(cjs.Tween.get(this.AnimMc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390.7,304.2,201.59999999999997,64.90000000000003);
// library properties:
lib.properties = {
	id: 'B94B0819DBD5F44899E29BAFC47A92DF',
	width: 728,
	height: 486,
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
an.compositions['B94B0819DBD5F44899E29BAFC47A92DF'] = {
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