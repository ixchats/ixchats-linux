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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(170,0,0,0.898)","#FFFFFF","#FFFFFF","rgba(196,0,0,0.898)"],[0,0.31,0.765,1],-227,0,227,0).s().p("EgjdAEsQJylDpykUMBG7AAAQosErIsEsg");
	this.shape.setTransform(-3,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(252,224,241,0)","rgba(254,47,51,0.475)","#FF0000","rgba(254,79,83,0.396)","rgba(252,233,244,0)"],[0,0.09,0.471,0.878,1],-228,-0.4,228.1,-0.4).s().p("EgjoAAEIAAgOMBHRAAAIAAAOQx0AHx1AAQxzAAx1gHg");
	this.shape_1.setTransform(-0.8,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(252,224,241,0)","rgba(254,47,51,0.475)","rgba(255,0,0,0.988)","rgba(254,79,83,0.396)","rgba(252,233,244,0)"],[0,0.09,0.471,0.878,1],-223,62.7,233.1,62.7).s().p("EgjsAALIAAgMUAjugASAjrAASIAAAMg");
	this.shape_2.setTransform(-5.7,-35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-234.2,-36.5,461.6,65.3), null);


(lib.mcRibbonAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// ribon3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Anmg5IKVhyIE4DFIoeCTg");
	this.shape.setTransform(-267.4,-13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqygQIRnjEID+CqIu2D/g");
	this.shape_1.setTransform(-247,-18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("At1AXIYwkTIC7CQI08Fpg");
	this.shape_2.setTransform(-227.4,-22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AwRA2IeblRICIB6I50G9g");
	this.shape_3.setTransform(-211.8,-25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AyhBRMAjUgGHIBvBjI+VILg");
	this.shape_4.setTransform(-196.4,-27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("A2uCYMAtdgIVIAABaMgmvAKgg");
	this.shape_5.setTransform(-170.5,-31.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AzbBvMAjDgGGIAAgdID0AAIAABNMgh/AIcg");
	this.shape_6.setTransform(-125.5,-40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AvyCbIbxk1IAAipID0AAIAAC+I7nHJg");
	this.shape_7.setTransform(-102.2,-53.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AsOCAIUojlIAAiqID0AAIAAC/I1hFgg");
	this.shape_8.setTransform(-79.3,-58.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ApYBrIO9imIAAiqID0AAIAAC7IwpEPg");
	this.shape_9.setTransform(-61.1,-62.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Am7BbIKDhvIAAiqID0AAIAAC+IsIC/g");
	this.shape_10.setTransform(-45.5,-66.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AlIBPIGdhJIAAioID0AAIAAC3Io9COg");
	this.shape_11.setTransform(-34,-69.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AjGBCICZgbIAAipIDzAAIAAC8IgPgBIk+BKg");
	this.shape_12.setTransform(-20.9,-72.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ah5BGIAAiLIDzAAIAACLg");
	this.shape_13.setTransform(-13.2,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},22).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// ribon2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BB0000").s().p("AkAg/ICkh6IFdCuIijDFg");
	this.shape_14.setTransform(-82.4,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BB0000").s().p("AlIADIFUj/IE9CFIk0F0g");
	this.shape_15.setTransform(-75.2,-5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BB0000").s().p("AmLBHIIImHIEPBpIm5IYg");
	this.shape_16.setTransform(-68.4,-12.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BB0000").s().p("AnJCHIKxoHIDiBTIo0Kug");
	this.shape_17.setTransform(-62.3,-19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BB0000").s().p("AoBCxIMgpbIDjAeIqlM3g");
	this.shape_18.setTransform(-56.7,-23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BB0000").s().p("AoWDmIM9pxIAAhUIDwAAIAABUIrPNrg");
	this.shape_19.setTransform(-54.6,-28.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BB0000").s().p("AnED7IKan2IAAiuIDvAAIAACuIosKlg");
	this.shape_20.setTransform(-46.4,-42.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BB0000").s().p("AlsDNIHplwIAAiuIDwAAIAACuImcH1g");
	this.shape_21.setTransform(-37.5,-51.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BB0000").s().p("AkSCYIE1jpIAAiuIDwAAIAACuIkVFRg");
	this.shape_22.setTransform(-28.5,-59.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BB0000").s().p("Ai9BjICMhpIAAivIDvAAIAACvIibC8g");
	this.shape_23.setTransform(-20.1,-67.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BB0000").s().p("AiGBUIAegXIAAitIDuAAIAACtIgpA0g");
	this.shape_24.setTransform(-14.5,-74.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BB0000").s().p("Ah3AtIAAhZIDvAAIAABZg");
	this.shape_25.setTransform(-13,-81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},16).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[]},2).wait(7));

	// ribon1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AoUAaIHii8IJHClIsCCgg");
	this.shape_26.setTransform(169.8,-4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ArThRIFviXIQ4ExIsCCgg");
	this.shape_27.setTransform(150.7,-11.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AteidIELiBIWyGdIsCCgg");
	this.shape_28.setTransform(136.7,-17.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AvajnIDnhfIbNHtIsCCgg");
	this.shape_29.setTransform(124.4,-21.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AwhkOICthVIeWInIsCCgg");
	this.shape_30.setTransform(117.2,-24.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Axpk7ICkg9MAgvAJRIsCCgg");
	this.shape_31.setTransform(110,-26.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AuWkxIDRgTIZcHNIniC8g");
	this.shape_32.setTransform(72.8,-34.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Aq7i2IAAhzIDwAAIAABzISHFIIlvCYg");
	this.shape_33.setTransform(45,-49.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("An+hXIAAivIDwAAIAACvIMNDcIkMCBg");
	this.shape_34.setTransform(26.1,-59.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AlwgeIAAiuIDwAAIAACuIHxCMIjnBfg");
	this.shape_35.setTransform(11.9,-65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AkMADIAAiuIDxAAIAACuIEoBUIiuBVg");
	this.shape_36.setTransform(1.9,-68.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ai/AkIAAitIDvAAIAACtICQApIikA9g");
	this.shape_37.setTransform(-5.8,-71.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AiFBKIAAiuIDvAAIAACuIAcAIIjQATg");
	this.shape_38.setTransform(-11.6,-75.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F5EEEE").s().p("Ah3AeIAAg7IDvAAIAAA7g");
	this.shape_39.setTransform(-13,-82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},8).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcHeartRays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.5,1,1).p("AAusnQALgLAAgPQAAgPgKgKQgKgKgPAAQgPAAgJAKQgLgKgOAAQgPAAgKAKQgKAKAAAPQAAAPALALIAxAxgAA8pOQAAgOgJgJQgJgKgOAAQgOAAgIAKQgJgKgOAAQgNAAgKAKQgJAJAAAOQAAANAKALIAtAsIAtgsQAJgLAAgNgAgKmHQgNAAgIAIQgIAJAAANQAAAMAJAKIAoApIApgpQAJgKAAgMQAAgNgJgJQgIgIgMAAQgNAAgIAIQgJgIgLAAgAA1h2QAIgJAAgLQAAgLgIgJQgHgHgLAAQgMAAgGAHQgJgHgKAAQgMAAgHAHQgHAJAAALQAAALAIAJIAlAlgAAWCSIAggiQAIgHAAgKQAAgLgIgHQgGgGgKAAQgKAAgGAGQgIgGgJAAQgJAAgHAGQgHAHAAALQAAAKAIAHgAAoEkQgIAAgGAGQgHgGgIAAQgIAAgGAGQgGAGAAAKQAAAIAHAHIAcAdIAcgdQAHgHAAgIQAAgKgHgGQgFgGgJAAgAA3HwQgFgFgHAAQgIAAgEAFQgGgFgHAAQgIAAgFAFQgFAFAAAJQAAAHAFAGIAaAZIAXgZQAGgGAAgHQAAgJgFgFgAANK/IAVAVIAUgVQAEgFAAgGQAAgHgEgEQgFgFgFAAQgHAAgDAFQgFgFgGAAQgGAAgFAFQgEAEAAAHQAAAGAFAFgAAjM/QgFAAgDAEQgEADAAAGQAAAFAEAEIARAQIAPgQQAEgEAAgFQAAgGgDgDQgDgEgFAAQgFAAgDAEQgEgEgFAAg");
	this.shape.setTransform(1.1,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcHeartRays, new cjs.Rectangle(-6.2,-62.6,14.6,175.9), null);


(lib.mcHeart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF2727").ss(0.3,1,1).p("AATgqQgLAAgIAIQgHgIgLAAQgMAAgIAIQgIAIAAAMQAAALAJAIIAlAmIAmgmQAJgIAAgLQAAgMgIgIQgIgIgMAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#8C0000","#FF0000"],[0,0.749],0,0,0,0,0,15.6).s().p("AglAFQgJgIAAgLQAAgMAIgIQAIgIAMAAQALAAAHAIQAIgIALAAQAMAAAIAIQAIAIAAAMQAAALgJAIIgmAmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcHeart, new cjs.Rectangle(-5.6,-5.2,11.4,10.6), null);


(lib.mbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(219,0,0,0)").s().p("AyPHJIAAuRMAkeAAAIAAORg");
	this.shape.setTransform(116.8,40.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mbox, new cjs.Rectangle(0,-5.1,233.5,91.4), null);


(lib.dots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9A0000").ss(1,1,1).p("EgyGglfIAAAPEAyHAlgIAAgR");
	this.shape.setTransform(320.7,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dots, new cjs.Rectangle(-1,-1,643.3,482), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Message
	this.mbox = new lib.mbox();
	this.mbox.name = "mbox";
	this.mbox.parent = this;
	this.mbox.setTransform(-153,-268.7);

	this.timeline.addTween(cjs.Tween.get(this.mbox).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C60000").ss(4,1,1).p("ALpgnQujCxouFMQDDoKjDmhQLpFvLeA1g");
	this.shape.setTransform(221.4,-215.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#870000","#FF0000"],[0,0.89],-74.5,0,74.5,0).s().p("AronVQLpFvLeA1IAKAKQujCxouFMQDDoKjDmhg");
	this.shape_1.setTransform(221.4,-215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(6.1,-185.4,0.711,1.69,0,0,0,55.6,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C60000").ss(4,1,1).p("AlqAPIAWAAQk7h1jCkZQHUCYHYhQQASALARALQC4B6CCCsQANARALAQQgBgGgBgGIACACQgViiBJiQQABgCABgCQBcCgDwBvIhJA7QiuCRiDC/IhogSQhtgniHAqQBUhjgChpQABg3gVg4QAAAAAAgBQgBAAAAgBQAAgBgBAAQAAgCgBgCIgGACQgBAAAAAAQkYBbg4C8QjshDkwBXQBfjBDziBAlUAaQgMgFgMgE");
	this.shape_2.setTransform(-287.9,-214.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFwFuQhtgniHAqQBUhjgChpQABg3gVg4IgBgBIAAgBIgBgCIgBgDIgGACIgBAAQkYBbg4C8QjshDkwBXQBfjBDziBIAWAAIgYgJIACgCIAWAAQk7h1jCkZQHUCYHYhQIAjAWQC4B6CCCsIAYAhIgCgMIACACQgViiBJiQIACgEQBcCgDwBvIhJA7QiuCRiDC/gAEoAcIAAAAIADAAIACAAIADAAIACAAIgGgBg");
	this.shape_3.setTransform(-287.9,-214.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF0000","#FF9393"],[0,0.553],-131.2,-19.6,40.6,-19.6).s().p("AgLgQIAVAUIACAMIgXggg");
	this.shape_4.setTransform(-242.6,-212.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AADAAIgDAAIgBAAIgDAAIAAAAIAEAAIAFAAIgCAAg");
	this.shape_5.setTransform(-257.8,-212);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAFDE1").s().p("AgBgEIABAEIABABIAAABIABABIAAACg");
	this.shape_6.setTransform(-269.4,-209.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#8C0000","#BC0000","#FF0000"],[0,0.525,1],-215.8,0,215.9,0).ss(4,1,1).p("EAhbAAAMhC1AAA");
	this.shape_7.setTransform(-5.9,-215.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-273.8,672.8,110.7);


(lib.mcRaysAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hearts
	this.instance = new lib.mcHeartRays();
	this.instance.parent = this;
	this.instance.setTransform(-229,112.7,1.425,1.425,-113.9,0,0,-0.1,-0.3);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.mcHeartRays();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-205.4,155.6,1.425,1.425,-124.8,0,0,0,-0.1);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.mcHeartRays();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-171.8,193.6,1.425,1.425,-136,0,0,0.1,-0.2);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.mcHeartRays();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-131.3,224.8,1.425,1.425,-147.2,0,0,0,-0.1);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.mcHeartRays();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-85.3,247.4,1.425,1.425,-158.6,0,0,-0.1,-0.1);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.mcHeartRays();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-34.2,258.5,1.427,1.427,-170.5,0,0,0,-0.1);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.mcHeartRays();
	this.instance_6.parent = this;
	this.instance_6.setTransform(15.2,260.9,1.427,1.427,179.5,0,0,0,-0.1);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.mcHeartRays();
	this.instance_7.parent = this;
	this.instance_7.setTransform(66.9,252.6,1.427,1.427,167.5,0,0,0.1,-0.1);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.mcHeartRays();
	this.instance_8.parent = this;
	this.instance_8.setTransform(112.9,233.8,1.427,1.427,156.5,0,0,0.1,-0.1);
	this.instance_8.alpha = 0.301;

	this.instance_9 = new lib.mcHeartRays();
	this.instance_9.parent = this;
	this.instance_9.setTransform(156.7,207.7,1.427,1.427,144.5,0,0,0.1,-0.1);
	this.instance_9.alpha = 0.301;

	this.instance_10 = new lib.mcHeartRays();
	this.instance_10.parent = this;
	this.instance_10.setTransform(193.9,173.4,1.427,1.427,133.5);
	this.instance_10.alpha = 0.301;

	this.instance_11 = new lib.mcHeartRays();
	this.instance_11.parent = this;
	this.instance_11.setTransform(223.6,131.6,1.427,1.427,122.5,0,0,0,-0.1);
	this.instance_11.alpha = 0.301;

	this.instance_12 = new lib.mcHeartRays();
	this.instance_12.parent = this;
	this.instance_12.setTransform(244.8,83.4,1.427,1.427,111.5);
	this.instance_12.alpha = 0.301;

	this.instance_13 = new lib.mcHeartRays();
	this.instance_13.parent = this;
	this.instance_13.setTransform(254.4,34.6,1.427,1.427,100.5);
	this.instance_13.alpha = 0.301;

	this.instance_14 = new lib.mcHeartRays();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-252.3,60.2,1.427,1.427,0,-105.7,74.3,0.1,-0.1);
	this.instance_14.alpha = 0.301;

	this.instance_15 = new lib.mcHeartRays();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-260.2,11,1.427,1.427,0,-95.7,84.3,-0.1,-0.1);
	this.instance_15.alpha = 0.301;

	this.instance_16 = new lib.mcHeartRays();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-257.7,-41.2,1.427,1.427,0,-83.7,96.3,0,-0.2);
	this.instance_16.alpha = 0.301;

	this.instance_17 = new lib.mcHeartRays();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-243.8,-88.9,1.427,1.427,0,-72.7,107.3,0.1,-0.1);
	this.instance_17.alpha = 0.301;

	this.instance_18 = new lib.mcHeartRays();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-222.6,-135.3,1.427,1.427,0,-60.7,119.3,0,-0.1);
	this.instance_18.alpha = 0.301;

	this.instance_19 = new lib.mcHeartRays();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-192.6,-175.9,1.427,1.427,0,-49.7,130.3,0,-0.1);
	this.instance_19.alpha = 0.301;

	this.instance_20 = new lib.mcHeartRays();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-154.3,-209.9,1.427,1.427,0,-38.7,141.3,0,-0.1);
	this.instance_20.alpha = 0.301;

	this.instance_21 = new lib.mcHeartRays();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-108.7,-236.5,1.427,1.427,0,-27.7,152.3);
	this.instance_21.alpha = 0.301;

	this.instance_22 = new lib.mcHeartRays();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-61.2,-251.3,1.427,1.427,0,-16.7,163.3);
	this.instance_22.alpha = 0.301;

	this.instance_23 = new lib.mcHeartRays();
	this.instance_23.parent = this;
	this.instance_23.setTransform(258.5,-15.3,1.428,1.428,89,0,0,0,-0.1);
	this.instance_23.alpha = 0.301;

	this.instance_24 = new lib.mcHeartRays();
	this.instance_24.parent = this;
	this.instance_24.setTransform(252,-64.4,1.428,1.428,79,0,0,0,-0.1);
	this.instance_24.alpha = 0.301;

	this.instance_25 = new lib.mcHeartRays();
	this.instance_25.parent = this;
	this.instance_25.setTransform(234.5,-113.9,1.428,1.428,67,0,0,0,-0.2);
	this.instance_25.alpha = 0.301;

	this.instance_26 = new lib.mcHeartRays();
	this.instance_26.parent = this;
	this.instance_26.setTransform(207.4,-155.7,1.428,1.428,56,0,0,0,-0.1);
	this.instance_26.alpha = 0.301;

	this.instance_27 = new lib.mcHeartRays();
	this.instance_27.parent = this;
	this.instance_27.setTransform(173.8,-193.9,1.428,1.428,44);
	this.instance_27.alpha = 0.301;

	this.instance_28 = new lib.mcHeartRays();
	this.instance_28.parent = this;
	this.instance_28.setTransform(133.3,-224.3,1.428,1.428,33);
	this.instance_28.alpha = 0.301;

	this.instance_29 = new lib.mcHeartRays();
	this.instance_29.parent = this;
	this.instance_29.setTransform(86.8,-245.8,1.428,1.428,22);
	this.instance_29.alpha = 0.301;

	this.instance_30 = new lib.mcHeartRays();
	this.instance_30.parent = this;
	this.instance_30.setTransform(35.5,-258,1.428,1.428,11);
	this.instance_30.alpha = 0.301;

	this.instance_31 = new lib.mcHeartRays();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-14.3,-258.7,1.428,1.428);
	this.instance_31.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// rays
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0.6)","rgba(255,255,255,0.702)","rgba(255,255,255,0.4)","rgba(255,255,255,0)"],[0,0.286,0.49,1],0,0,0,0,0,413.6).s().p("AAAE2IgegCMgEzAxpQiwgPirgfMAJwgw+IgdgHMgOcAv2QipgyiihDMATJguLIgbgOMgXfAsIQiZhUiShjMAbvgphIgXgSMgfmAmmQiDhuh9h9MAjPgjQIgTgVMgmhAfsQhxiIhiiOMApggbvIgQgaMgsBAXoQhWiahCiiMAuLgTIIgKgdMgvzAOmQgxinggitMAw+gJwIgFgdMgxnAE+QgPisAAixMAx1AAAIABgeMgxogEzQAPiwAgiqMAw+AJvIAGgdMgv1gOcQAxipBDiiMAuLATIIAOgbMgsHgXeQBSiZBliSMApgAbvIATgXMgmngfmQBuiDB9h9IABAAMAjPAjOIAXgUMgfugmfQCIhyCPhhMAbuApfIAagPMgXogsCQCbhVChhDMATJAuNIAcgKMgOlgvzQCngyCtggMAJwAw+IAdgFMgE9gxnIFbgPMAAAAx1IAeABMAE0gxoQCwAPCpAgMgJvAw+IAeAHMAObgv2QCoAxCiBCMgTIAuNIAbAMMAXfgsGQCYBSCSBkMgbuAphIAXASMAflgmmQCEBuB9B+IABAAMgjPAjPIATAXMAmhgfuQBxCJBiCOMgphAbwIAQAZMAsCgXpQBVCaBDCjMguNATHIALAdMAvygOmQAxCnAiCuMgw+AJvIAEAeMAxngE+QAPCqABCyMgx2AAAIAAAdMAxoAE0QgQCwgfCrMgw+gJwIgHAeMAv2AObQgxCphDCgMguNgTIIgNAbMAsIAXgQhTCYhjCSMgpigbvIgSAYMAmnAfkQhuCEh+B/MgjPgjRIgBAAIgWAUMAftAmhQiIBxiOBjMgbvgphIgZAPMAXoAsCQibBVihBDMgTIguLIgcAKMAOlAvzQinAwitAiMgJwgw+IgeADMAE+AxoIldAQg");
	this.shape.setTransform(0.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcRaysAni, new cjs.Rectangle(-349.5,-351,700,700.2), null);


(lib.mcHeartBlurAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mcHeart();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-4.4,9.6,8.9);


(lib.mcBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_180 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(180).call(this.frame_180).wait(1));

	// rays n Hearts
	this.rays_mc = new lib.mcRaysAni();
	this.rays_mc.name = "rays_mc";
	this.rays_mc.parent = this;
	this.rays_mc.setTransform(0.5,38.5,1.337,1.297);
	this.rays_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rays_mc).to({rotation:-5.8,alpha:1},9).to({rotation:-111.8},171).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-466.9,-416.8,936.1,908.1);


(lib.mcHearts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mcHeartBlurAni();
	this.instance.parent = this;
	this.instance.setTransform(-41.4,11.7,0.5,0.5,-30);

	this.instance_1 = new lib.mcHeartBlurAni();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,-14.9,0.5,0.5,-110);

	this.instance_2 = new lib.mcHeartBlurAni();
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.2,-34.7,0.5,0.5,120);

	this.instance_3 = new lib.mcHeartBlurAni();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17.6,-21.4,0.6,0.6,160);

	this.instance_4 = new lib.mcHeartBlurAni();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-43.1,-8.3,0.7,0.7,-20);

	this.instance_5 = new lib.mcHeartBlurAni();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-46.7,-48.6,0.7,0.7,120);

	this.instance_6 = new lib.mcHeartBlurAni();
	this.instance_6.parent = this;
	this.instance_6.setTransform(38.1,-37.8,0.6,0.6,20);

	this.instance_7 = new lib.mcHeartBlurAni();
	this.instance_7.parent = this;
	this.instance_7.setTransform(24.1,40.6,0.6,0.6,-130);

	this.instance_8 = new lib.mcHeartBlurAni();
	this.instance_8.parent = this;
	this.instance_8.setTransform(28.4,31.4,0.6,0.6,20);

	this.instance_9 = new lib.mcHeartBlurAni();
	this.instance_9.parent = this;
	this.instance_9.setTransform(6,-24.3,0.6,0.6,160);

	this.instance_10 = new lib.mcHeartBlurAni();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-56.7,-54.6,0.9,0.9,30);

	this.instance_11 = new lib.mcHeartBlurAni();
	this.instance_11.parent = this;
	this.instance_11.setTransform(28.3,-58.6,0.6,0.6,-20);

	this.instance_12 = new lib.mcHeartBlurAni();
	this.instance_12.parent = this;
	this.instance_12.setTransform(57.6,-19.3,0.8,0.8,-20);

	this.instance_13 = new lib.mcHeartBlurAni();
	this.instance_13.parent = this;
	this.instance_13.setTransform(52.8,-29.4,0.8,0.8,120);

	this.instance_14 = new lib.mcHeartBlurAni();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-11,-46.4,0.4,0.4,-80);

	this.instance_15 = new lib.mcHeartBlurAni();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-16.7,-50.8,0.7,0.7,50);

	this.instance_16 = new lib.mcHeartBlurAni();
	this.instance_16.parent = this;
	this.instance_16.setTransform(15.3,-51.8,0.7,0.7,-50);

	this.instance_17 = new lib.mcHeartBlurAni();
	this.instance_17.parent = this;
	this.instance_17.setTransform(58.5,-54.2,0.7,0.7,30);

	this.instance_18 = new lib.mcHeartBlurAni();
	this.instance_18.parent = this;
	this.instance_18.setTransform(52,-57.2,0.9,0.9,-100);

	this.instance_19 = new lib.mcHeartBlurAni();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-75.3,-38.5,0.4,0.4,-80);

	this.instance_20 = new lib.mcHeartBlurAni();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-63.2,-33.6,0.6,0.6,120);

	this.instance_21 = new lib.mcHeartBlurAni();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-56.4,-33.7,0.6,0.6,160);

	this.instance_22 = new lib.mcHeartBlurAni();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-27.5,-36.2,0.5,0.5,-100);

	this.instance_23 = new lib.mcHeartBlurAni();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-40.9,-29.8,0.9,0.9,-160);

	this.instance_24 = new lib.mcHeartBlurAni();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-37.5,-36.4,0.6,0.6,-20);

	this.instance_25 = new lib.mcHeartBlurAni();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-51.3,-58.6,0.7,0.7,-20);

	this.instance_26 = new lib.mcHeartBlurAni();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-29,-59,0.6,0.6,20);

	this.instance_27 = new lib.mcHeartBlurAni();
	this.instance_27.parent = this;
	this.instance_27.setTransform(35.2,-18,0.6,0.6,10);

	this.instance_28 = new lib.mcHeartBlurAni();
	this.instance_28.parent = this;
	this.instance_28.setTransform(19.8,-29.8,0.7,0.7,-100);

	this.instance_29 = new lib.mcHeartBlurAni();
	this.instance_29.parent = this;
	this.instance_29.setTransform(25.8,-35.1,0.7,0.7,-100);

	this.instance_30 = new lib.mcHeartBlurAni();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-19.7,-28.8,0.7,0.7,-100);

	this.instance_31 = new lib.mcHeartBlurAni();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-8.5,-20.9,0.7,0.7,-100);

	this.instance_32 = new lib.mcHeartBlurAni();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-58.6,-21.3,1.2,1.2,-80);

	this.instance_33 = new lib.mcHeartBlurAni();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-50.3,-28.6,0.7,0.7,-20);

	this.instance_34 = new lib.mcHeartBlurAni();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-53.7,-46.9,0.7,0.7,-20);

	this.instance_35 = new lib.mcHeartBlurAni();
	this.instance_35.parent = this;
	this.instance_35.setTransform(55.8,-43.8,0.7,0.7,-20);

	this.instance_36 = new lib.mcHeartBlurAni();
	this.instance_36.parent = this;
	this.instance_36.setTransform(39.2,-28.6,0.7,0.7,-20);

	this.instance_37 = new lib.mcHeartBlurAni();
	this.instance_37.parent = this;
	this.instance_37.setTransform(32.7,1,0.7,0.7,120);

	this.instance_38 = new lib.mcHeartBlurAni();
	this.instance_38.parent = this;
	this.instance_38.setTransform(13.7,-46.1,0.7,0.7,120);

	this.instance_39 = new lib.mcHeartBlurAni();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-20,-36.4,0.7,0.7,120);

	this.instance_40 = new lib.mcHeartBlurAni();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-36.9,-14.4,0.7,0.7,120);

	this.instance_41 = new lib.mcHeartBlurAni();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-68.9,-18.3,0.7,0.7,120);

	this.instance_42 = new lib.mcHeartBlurAni();
	this.instance_42.parent = this;
	this.instance_42.setTransform(46.5,-48,0.9,0.9,-160);

	this.instance_43 = new lib.mcHeartBlurAni();
	this.instance_43.parent = this;
	this.instance_43.setTransform(21.5,-14.5,0.9,0.9,-160);

	this.instance_44 = new lib.mcHeartBlurAni();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-29.8,-11.1,0.9,0.9,-160);

	this.instance_45 = new lib.mcHeartBlurAni();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-4.4,-24.9,0.6,0.6,20);

	this.instance_46 = new lib.mcHeartBlurAni();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-17.6,-43.2,0.6,0.6,20);

	this.instance_47 = new lib.mcHeartBlurAni();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-42.7,-41.7,0.6,0.6,20);

	this.instance_48 = new lib.mcHeartBlurAni();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-23.9,-16.4,0.6,0.6,20);

	this.instance_49 = new lib.mcHeartBlurAni();
	this.instance_49.parent = this;
	this.instance_49.setTransform(18.8,-21.8,0.6,0.6,20);

	this.instance_50 = new lib.mcHeartBlurAni();
	this.instance_50.parent = this;
	this.instance_50.setTransform(59.6,-26.8,0.6,0.6,20);

	this.instance_51 = new lib.mcHeartBlurAni();
	this.instance_51.parent = this;
	this.instance_51.setTransform(67.8,-19.3,0.6,0.6,20);

	this.instance_52 = new lib.mcHeartBlurAni();
	this.instance_52.parent = this;
	this.instance_52.setTransform(75.4,-13.4,0.8,0.8,-20);

	this.instance_53 = new lib.mcHeartBlurAni();
	this.instance_53.parent = this;
	this.instance_53.setTransform(70.6,1.1,0.6,0.6,120);

	this.instance_54 = new lib.mcHeartBlurAni();
	this.instance_54.parent = this;
	this.instance_54.setTransform(70.4,-5.9,1.1,1.1,40);

	this.instance_55 = new lib.mcHeartBlurAni();
	this.instance_55.parent = this;
	this.instance_55.setTransform(51.7,2.5,0.7,0.7,40);

	this.instance_56 = new lib.mcHeartBlurAni();
	this.instance_56.parent = this;
	this.instance_56.setTransform(12,3.1,0.6,0.6,160);

	this.instance_57 = new lib.mcHeartBlurAni();
	this.instance_57.parent = this;
	this.instance_57.setTransform(17.3,10,0.8,0.8,50);

	this.instance_58 = new lib.mcHeartBlurAni();
	this.instance_58.parent = this;
	this.instance_58.setTransform(-51.1,-2.7,0.7,0.7,120);

	this.instance_59 = new lib.mcHeartBlurAni();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-72,-6.9,1,1,-80);

	this.instance_60 = new lib.mcHeartBlurAni();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-74.8,-16.4,0.9,0.9,-160);

	this.instance_61 = new lib.mcHeartBlurAni();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-71.4,0.3,0.7,0.7,-130);

	this.instance_62 = new lib.mcHeartBlurAni();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-52.9,4.2,0.7,0.7,-100);

	this.instance_63 = new lib.mcHeartBlurAni();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-31.4,7.3,0.8,0.8);

	this.instance_64 = new lib.mcHeartBlurAni();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-48.6,9.7,0.7,0.7,20);

	this.instance_65 = new lib.mcHeartBlurAni();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-29.8,-2.5,0.7,0.7,-20);

	this.instance_66 = new lib.mcHeartBlurAni();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-21.6,11,1.2,1.2,-80);

	this.instance_67 = new lib.mcHeartBlurAni();
	this.instance_67.parent = this;
	this.instance_67.setTransform(-11.8,5.5,0.9,0.9,180);

	this.instance_68 = new lib.mcHeartBlurAni();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-2.5,11.5,0.7,0.7,-100);

	this.instance_69 = new lib.mcHeartBlurAni();
	this.instance_69.parent = this;
	this.instance_69.setTransform(1.3,18.8,0.7,0.7,-10);

	this.instance_70 = new lib.mcHeartBlurAni();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-27.7,46.4,0.5,0.5,-140);

	this.instance_71 = new lib.mcHeartBlurAni();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-7.7,-3.7,0.7,0.7,20);

	this.instance_72 = new lib.mcHeartBlurAni();
	this.instance_72.parent = this;
	this.instance_72.setTransform(1.9,-4.8,1,1,120);

	this.instance_73 = new lib.mcHeartBlurAni();
	this.instance_73.parent = this;
	this.instance_73.setTransform(9.7,-9,0.6,0.6,160);

	this.instance_74 = new lib.mcHeartBlurAni();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-15,-13.4,0.9,0.9,-20);

	this.instance_75 = new lib.mcHeartBlurAni();
	this.instance_75.parent = this;
	this.instance_75.setTransform(12.9,-16.7,0.9,0.9);

	this.instance_76 = new lib.mcHeartBlurAni();
	this.instance_76.parent = this;
	this.instance_76.setTransform(28.9,-2.5,0.7,0.7,10);

	this.instance_77 = new lib.mcHeartBlurAni();
	this.instance_77.parent = this;
	this.instance_77.setTransform(47.4,-7.5,0.7,0.7,-20);

	this.instance_78 = new lib.mcHeartBlurAni();
	this.instance_78.parent = this;
	this.instance_78.setTransform(43.7,11.2,0.5,0.5,-110);

	this.instance_79 = new lib.mcHeartBlurAni();
	this.instance_79.parent = this;
	this.instance_79.setTransform(51.7,11.2,0.7,0.7,10);

	this.instance_80 = new lib.mcHeartBlurAni();
	this.instance_80.parent = this;
	this.instance_80.setTransform(48.3,26.5,0.6,0.6,20);

	this.instance_81 = new lib.mcHeartBlurAni();
	this.instance_81.parent = this;
	this.instance_81.setTransform(53.5,19.2,0.9,0.9,130);

	this.instance_82 = new lib.mcHeartBlurAni();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-20.2,38.9,0.5,0.5,-30);

	this.instance_83 = new lib.mcHeartBlurAni();
	this.instance_83.parent = this;
	this.instance_83.setTransform(9.9,38.3,0.6,0.6,-100);

	this.instance_84 = new lib.mcHeartBlurAni();
	this.instance_84.parent = this;
	this.instance_84.setTransform(1.1,40.6,0.6,0.6,-130);

	this.instance_85 = new lib.mcHeartBlurAni();
	this.instance_85.parent = this;
	this.instance_85.setTransform(-1.7,26,0.9,0.9,-130);

	this.instance_86 = new lib.mcHeartBlurAni();
	this.instance_86.parent = this;
	this.instance_86.setTransform(5.6,30.8,0.9,0.9,-90);

	this.instance_87 = new lib.mcHeartBlurAni();
	this.instance_87.parent = this;
	this.instance_87.setTransform(22.5,19.6,0.9,0.9);

	this.instance_88 = new lib.mcHeartBlurAni();
	this.instance_88.parent = this;
	this.instance_88.setTransform(-0.2,53.2,0.6,0.6,130);

	this.instance_89 = new lib.mcHeartBlurAni();
	this.instance_89.parent = this;
	this.instance_89.setTransform(-5.8,47.5,1.1,1.1,130);

	this.instance_90 = new lib.mcHeartBlurAni();
	this.instance_90.parent = this;
	this.instance_90.setTransform(39.8,32.4,1.1,1.1,-100);

	this.instance_91 = new lib.mcHeartBlurAni();
	this.instance_91.parent = this;
	this.instance_91.setTransform(30.8,38.5,1,1,90);

	this.instance_92 = new lib.mcHeartBlurAni();
	this.instance_92.parent = this;
	this.instance_92.setTransform(6.7,48.5,0.9,0.9,-130);

	this.instance_93 = new lib.mcHeartBlurAni();
	this.instance_93.parent = this;
	this.instance_93.setTransform(-20.2,30.6,0.703,0.702,-90);

	this.instance_94 = new lib.mcHeartBlurAni();
	this.instance_94.parent = this;
	this.instance_94.setTransform(-13.1,59.5,0.5,0.5,-170);

	this.instance_95 = new lib.mcHeartBlurAni();
	this.instance_95.parent = this;
	this.instance_95.setTransform(-56.6,17.1,0.703,0.702,180);

	this.instance_96 = new lib.mcHeartBlurAni();
	this.instance_96.parent = this;
	this.instance_96.setTransform(-48.1,25.8,0.703,0.702,-130);

	this.instance_97 = new lib.mcHeartBlurAni();
	this.instance_97.parent = this;
	this.instance_97.setTransform(-41.1,30.8,1.2,1.2,110);

	this.instance_98 = new lib.mcHeartBlurAni();
	this.instance_98.parent = this;
	this.instance_98.setTransform(-22.2,22.6,0.9,0.9,30);

	this.instance_99 = new lib.mcHeartBlurAni();
	this.instance_99.parent = this;
	this.instance_99.setTransform(-48.9,18.3,0.9,0.9,-100);

	this.instance_100 = new lib.mcHeartBlurAni();
	this.instance_100.parent = this;
	this.instance_100.setTransform(-29.3,28.6,0.6,0.6,180);

	this.instance_101 = new lib.mcHeartBlurAni();
	this.instance_101.parent = this;
	this.instance_101.setTransform(12,59.6,0.703,0.702,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcHearts, new cjs.Rectangle(-80.3,-62.6,160.5,125.3), null);


(lib.mcHeartAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Heart4
	this.instance = new lib.mcHeartBlurAni();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:4.06,scaleY:3.88,x:99.8,y:-222.2},24,cjs.Ease.get(1)).wait(14));

	// Heart4
	this.instance_1 = new lib.mcHeartBlurAni();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:4.01,scaleY:3.93,skewX:-31,skewY:-29,x:76.1,y:-194.9},24,cjs.Ease.get(1)).wait(13));

	// Heart4
	this.instance_2 = new lib.mcHeartBlurAni();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:4.06,scaleY:3.88,x:-89.8,y:-222.3},23,cjs.Ease.get(1)).wait(15));

	// Heart4
	this.instance_3 = new lib.mcHeartBlurAni();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({scaleX:3.89,scaleY:4.05,rotation:-90,x:-12.8,y:-174.7},25,cjs.Ease.get(1)).wait(10));

	// Heart4
	this.instance_4 = new lib.mcHeartBlurAni();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:4.01,scaleY:3.93,skewX:31,skewY:29,x:-66.4,y:-196.3},24,cjs.Ease.get(1)).wait(14));

	// Heart4
	this.instance_5 = new lib.mcHeartBlurAni();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:2.27,scaleY:2.37,rotation:90,x:-51.9,y:-217.7},22,cjs.Ease.get(1)).wait(16));

	// Heart4
	this.instance_6 = new lib.mcHeartBlurAni();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:3.76,scaleY:3.75,skewX:46.2,skewY:43.8,x:159,y:-193.7},25,cjs.Ease.get(1)).wait(13));

	// Heart4
	this.instance_7 = new lib.mcHeartBlurAni();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:4.26,scaleY:4.43,skewX:80.4,skewY:79.6,x:24.9,y:-172.1},22,cjs.Ease.get(1)).wait(16));

	// Heart4
	this.instance_8 = new lib.mcHeartBlurAni();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({scaleX:2.43,scaleY:2.52,rotation:-90,x:62.2,y:-217.7},21,cjs.Ease.get(1)).wait(15));

	// Heart4
	this.instance_9 = new lib.mcHeartBlurAni();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:4.41,scaleY:4.41,skewX:-46.2,skewY:-43.8,x:-146.7,y:-192.9},25,cjs.Ease.get(1)).wait(13));

	// Heart4
	this.instance_10 = new lib.mcHeartBlurAni();
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({scaleX:3.01,scaleY:2.93,skewX:-149,skewY:-151,x:-109.4,y:-182.4},24,cjs.Ease.get(1)).wait(11));

	// Heart4
	this.instance_11 = new lib.mcHeartBlurAni();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},0).to({scaleX:3.8,scaleY:3.72,skewX:-148.9,skewY:-151,x:176.8,y:-161.1},24,cjs.Ease.get(1)).wait(12));

	// Heart4
	this.instance_12 = new lib.mcHeartBlurAni();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:3.51,scaleY:3.44,skewX:149,skewY:151,x:118.9,y:-180.1},30,cjs.Ease.get(1)).wait(8));

	// Heart4
	this.instance_13 = new lib.mcHeartBlurAni();
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({scaleX:3.78,scaleY:3.7,skewX:148.9,skewY:151.1,x:-166.8,y:-161.2},25,cjs.Ease.get(1)).wait(9));

	// Heart4
	this.instance_14 = new lib.mcHeartBlurAni();
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({scaleX:3.97,scaleY:3.97,skewX:-46.2,skewY:-43.8,x:3.8,y:-125.5},26,cjs.Ease.get(1)).wait(8));

	// Heart4
	this.instance_15 = new lib.mcHeartBlurAni();
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({scaleX:3.2,scaleY:3.3,skewX:-109.2,skewY:-110.8,x:-63.3,y:-157.2},28,cjs.Ease.get(1)).wait(6));

	// Heart4
	this.instance_16 = new lib.mcHeartBlurAni();
	this.instance_16.parent = this;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).to({scaleX:3.19,scaleY:3.31,skewX:99.6,skewY:100.4,x:74.9,y:-156.3},29,cjs.Ease.get(1)).wait(6));

	// Heart4
	this.instance_17 = new lib.mcHeartBlurAni();
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({scaleX:3.7,scaleY:3.73,skewX:-128.8,skewY:-131.2,x:117.5,y:-139.6},26,cjs.Ease.get(1)).wait(8));

	// Heart4
	this.instance_18 = new lib.mcHeartBlurAni();
	this.instance_18.parent = this;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({_off:false},0).to({scaleX:3.47,scaleY:3.5,skewX:128.8,skewY:131.2,x:-106,y:-141.5},30,cjs.Ease.get(1)).wait(6));

	// Heart4
	this.instance_19 = new lib.mcHeartBlurAni();
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({_off:false},0).to({scaleX:3.87,scaleY:4.02,skewX:-99.6,skewY:-100.4,x:-134.5,y:-109.7},28,cjs.Ease.get(1)).wait(3));

	// Heart4
	this.instance_20 = new lib.mcHeartBlurAni();
	this.instance_20.parent = this;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({_off:false},0).to({scaleX:2.96,scaleY:3.08,rotation:-90,x:-36.5,y:-102.9},26,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_21 = new lib.mcHeartBlurAni();
	this.instance_21.parent = this;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).to({scaleX:4.09,scaleY:4.27,rotation:90,x:144.8,y:-109.4},31,cjs.Ease.get(1)).wait(3));

	// Heart4
	this.instance_22 = new lib.mcHeartBlurAni();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,1.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({_off:false},0).to({scaleX:3.18,scaleY:3.32,rotation:90,x:46.9,y:-102.2},31,cjs.Ease.get(1)).wait(2));

	// Heart4
	this.instance_23 = new lib.mcHeartBlurAni();
	this.instance_23.parent = this;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(6).to({_off:false},0).to({scaleX:3.7,scaleY:3.73,skewX:-128.8,skewY:-131.2,x:-140.8,y:-75.8},29,cjs.Ease.get(1)).wait(3));

	// Heart4
	this.instance_24 = new lib.mcHeartBlurAni();
	this.instance_24.parent = this;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(4).to({_off:false},0).to({scaleX:2.96,scaleY:3.08,skewX:-80.4,skewY:-79.6,x:108.1,y:-89.4},29,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_25 = new lib.mcHeartBlurAni();
	this.instance_25.parent = this;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(6).to({_off:false},0).to({scaleX:3.18,scaleY:3.32,rotation:90,x:-96.6,y:-90},28,cjs.Ease.get(1)).wait(4));

	// Heart4
	this.instance_26 = new lib.mcHeartBlurAni();
	this.instance_26.parent = this;
	this.instance_26.setTransform(0,0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(5).to({_off:false},0).to({scaleX:3.7,scaleY:3.73,skewX:128.8,skewY:131.2,x:151.8,y:-75.4},30,cjs.Ease.get(1)).wait(3));

	// Heart4
	this.instance_27 = new lib.mcHeartBlurAni();
	this.instance_27.parent = this;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).to({scaleX:4.27,scaleY:4.09,rotation:180,x:-76.8,y:-52.9},27,cjs.Ease.get(1)).wait(4));

	// Heart4
	this.instance_28 = new lib.mcHeartBlurAni();
	this.instance_28.parent = this;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(3).to({_off:false},0).to({scaleX:2.73,scaleY:2.84,rotation:90,x:86.7,y:-115.4},30,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_29 = new lib.mcHeartBlurAni();
	this.instance_29.parent = this;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(8).to({_off:false},0).to({scaleX:3.24,scaleY:3.26,skewX:-128.8,skewY:-131.2,x:-18.1,y:-51.7},26,cjs.Ease.get(1)).wait(4));

	// Heart4
	this.instance_30 = new lib.mcHeartBlurAni();
	this.instance_30.parent = this;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(8).to({_off:false},0).to({scaleX:2.82,scaleY:2.76,skewX:31,skewY:29,x:69,y:-71.2},25,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_31 = new lib.mcHeartBlurAni();
	this.instance_31.parent = this;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(8).to({_off:false},0).to({scaleX:3.5,scaleY:3.47,skewX:138.8,skewY:141.2,x:30.5,y:-51.9},25,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_32 = new lib.mcHeartBlurAni();
	this.instance_32.parent = this;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(3).to({_off:false},0).to({scaleX:2.82,scaleY:2.76,skewX:-149,skewY:-151,x:15.5,y:-83.2},27,cjs.Ease.get(1)).wait(8));

	// Heart4
	this.instance_33 = new lib.mcHeartBlurAni();
	this.instance_33.parent = this;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(10).to({_off:false},0).to({scaleX:4.73,scaleY:4.55,skewX:169.6,skewY:170.4,x:93.3,y:-50.7},21,cjs.Ease.get(1)).wait(7));

	// Heart4
	this.instance_34 = new lib.mcHeartBlurAni();
	this.instance_34.parent = this;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(11).to({_off:false},0).to({scaleX:3.75,scaleY:3.68,skewX:-31,skewY:-29,x:52.4,y:-21.2},20,cjs.Ease.get(1)).wait(7));

	// Heart4
	this.instance_35 = new lib.mcHeartBlurAni();
	this.instance_35.parent = this;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(12).to({_off:false},0).to({scaleX:3.72,scaleY:3.72,skewX:46.2,skewY:43.8,x:-19.6,y:-14.3},21,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_36 = new lib.mcHeartBlurAni();
	this.instance_36.parent = this;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(12).to({_off:false},0).to({scaleX:3.18,scaleY:3.32,rotation:-90,x:-64.5,y:-6.7},21,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_37 = new lib.mcHeartBlurAni();
	this.instance_37.parent = this;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(14).to({_off:false},0).to({scaleX:4.09,scaleY:4.27,rotation:90,x:-37.3,y:17.5},20,cjs.Ease.get(1)).wait(4));

	// Heart4
	this.instance_38 = new lib.mcHeartBlurAni();
	this.instance_38.parent = this;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(15).to({_off:false},0).to({scaleX:4.1,scaleY:4.26,skewX:-99.6,skewY:-100.4,x:51.3,y:14.9},18,cjs.Ease.get(1)).wait(5));

	// Heart4
	this.instance_39 = new lib.mcHeartBlurAni();
	this.instance_39.parent = this;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(16).to({_off:false},0).to({scaleX:4.74,scaleY:4.55,x:5,y:56.1},18,cjs.Ease.get(1)).wait(4));

	// all hearts
	this.instance_40 = new lib.mcHearts();
	this.instance_40.parent = this;
	this.instance_40.setTransform(0.7,-77.1);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(19).to({_off:false},0).to({scaleX:2.37,scaleY:2.27,x:6.6,y:-94.1,alpha:1},13,cjs.Ease.get(-1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-4.4,9.7,8.9);


(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		PlaySound(this, "arrowhit");
	}
	this.frame_180 = function() {
		KissDone(this);
		stop();
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(65).call(this.frame_180).wait(1));

	// Arrow
	this.instance = new lib.Tween1();
	this.instance.parent = this;
	this.instance.setTransform(75.1,283.1,0.949,1,0,0,0,294.7,-218.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({regX:298.2,regY:-218.1,x:729.4,y:283.7},4).to({rotation:3.7},2).to({rotation:-4,x:729.3},2).to({rotation:2},2).to({rotation:-2.1},2).to({rotation:0.5},2).to({rotation:-0.6},2).to({rotation:0,x:729.4},2).wait(52));

	// heart animation
	this.instance_1 = new lib.mcHeartAnimation();
	this.instance_1.parent = this;
	this.instance_1.setTransform(404.7,191.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(142));

	// ribbon animation
	this.instance_2 = new lib.mcRibbonAni();
	this.instance_2.parent = this;
	this.instance_2.setTransform(414.2,281.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(177));

	// background
	this.instance_3 = new lib.mcBackground();
	this.instance_3.parent = this;
	this.instance_3.setTransform(412.1,72.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-560.7,227.9,638.8,110.7);


// stage content:
(lib.Valentine = function(mode,startPosition,loop) {
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

	// Dots
	this.instance = new lib.dots();
	this.instance.parent = this;
	this.instance.setTransform(320.1,240,1,1,0,0,0,320.7,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Animation
	this.AnimMc = new lib.Anim();
	this.AnimMc.name = "AnimMc";
	this.AnimMc.parent = this;
	this.AnimMc.setTransform(-88,108);

	this.timeline.addTween(cjs.Tween.get(this.AnimMc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.7,239.5,1290,481);
// library properties:
lib.properties = {
	id: 'A1126613F6775B409BAF7DC325D0C4EA',
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
an.compositions['A1126613F6775B409BAF7DC325D0C4EA'] = {
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