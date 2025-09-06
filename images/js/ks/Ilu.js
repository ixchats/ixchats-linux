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
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Au/FeIAAq7Id/AAIAAK7g");
	this.shape.setTransform(81,29,0.844,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mbox, new cjs.Rectangle(0,1,162,56), null);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-1.3,-2,0.2,0.5).s().p("AgfASQgDgFAHgIQAHgHAPgIQAPgJAMAAQAKAAABAEQABAEgIAAQgfAHgRAUQgEAEgCAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape.setTransform(4.9,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-1.3,-2,0.2,0.5).s().p("AgfASQgDgFAHgIQAHgHAPgIQAPgJAMAAQAKAAABAEQABAEgIAAQgfAHgRAUQgEAEgCAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(-8.7,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("ABwhUQgTgTgbAAQgbAAgTATQgNAMgEAQQgCAFAAAGQgBADAAADQAAgDAAgDQgCgXgRgQQgTgTgbAAQgbAAgTATQgRAQgCAXQAAADAAAIQAGAnA7AnQA2AjALAYQABABAAAAQABgCABgCQAMgXAzghQA7gnAGgnQAAgIAAgDQgCgXgRgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0099").s().p("AAABnQgLgYg2gkQg6gmgHgmIAAgMQACgXARgQQATgTAbAAQAcAAASATQARAQACAXIAAAGIABgGIACgLQAEgQANgMQASgTAcAAQAbAAATATQARAQACAXIAAAMQgHAmg6AmQgzAhgMAYIgCAEIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(-14.1,-11.4,28.2,22.8), null);


(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* // The Main Kiss animation goes in here.
		// The green box is temporary, used to scale the animation.
		// You cn make the green box any width and height you need*/
	}
	this.frame_124 = function() {
		KissDone(this);
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(124).call(this.frame_124).wait(1));

	// Text
	this.mbox = new lib.mbox();
	this.mbox.name = "mbox";
	this.mbox.parent = this;
	this.mbox.setTransform(216.6,156.4,1,1,0,0,0,96,53.5);
	this.mbox.alpha = 0;
	this.mbox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mbox).wait(62).to({_off:false},0).to({alpha:1},5).wait(58));

	// Animation
	this.instance = new lib.heart();
	this.instance.parent = this;
	this.instance.setTransform(201.1,233.4);

	this.instance_1 = new lib.heart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(201.1,233.4);

	this.instance_2 = new lib.heart();
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.1,233.4);

	this.instance_3 = new lib.heart();
	this.instance_3.parent = this;
	this.instance_3.setTransform(201.1,233.4);

	this.instance_4 = new lib.heart();
	this.instance_4.parent = this;
	this.instance_4.setTransform(201.1,233.4);

	this.instance_5 = new lib.heart();
	this.instance_5.parent = this;
	this.instance_5.setTransform(201.1,233.4);

	this.instance_6 = new lib.heart();
	this.instance_6.parent = this;
	this.instance_6.setTransform(201.1,233.4);

	this.instance_7 = new lib.heart();
	this.instance_7.parent = this;
	this.instance_7.setTransform(201.1,233.4);

	this.instance_8 = new lib.heart();
	this.instance_8.parent = this;
	this.instance_8.setTransform(201.1,233.4);

	this.instance_9 = new lib.heart();
	this.instance_9.parent = this;
	this.instance_9.setTransform(201.1,233.4);

	this.instance_10 = new lib.heart();
	this.instance_10.parent = this;
	this.instance_10.setTransform(201.1,233.4);

	this.instance_11 = new lib.heart();
	this.instance_11.parent = this;
	this.instance_11.setTransform(201.1,233.4);

	this.instance_12 = new lib.heart();
	this.instance_12.parent = this;
	this.instance_12.setTransform(201.1,233.4);

	this.instance_13 = new lib.heart();
	this.instance_13.parent = this;
	this.instance_13.setTransform(201.1,233.4);

	this.instance_14 = new lib.heart();
	this.instance_14.parent = this;
	this.instance_14.setTransform(201.1,233.4);

	this.instance_15 = new lib.heart();
	this.instance_15.parent = this;
	this.instance_15.setTransform(201.1,233.4);

	this.instance_16 = new lib.heart();
	this.instance_16.parent = this;
	this.instance_16.setTransform(201.1,233.4);

	this.instance_17 = new lib.heart();
	this.instance_17.parent = this;
	this.instance_17.setTransform(201.1,233.4);

	this.instance_18 = new lib.heart();
	this.instance_18.parent = this;
	this.instance_18.setTransform(201.1,233.4);

	this.instance_19 = new lib.heart();
	this.instance_19.parent = this;
	this.instance_19.setTransform(201.1,233.4);

	this.instance_20 = new lib.heart();
	this.instance_20.parent = this;
	this.instance_20.setTransform(201.1,233.4);

	this.instance_21 = new lib.heart();
	this.instance_21.parent = this;
	this.instance_21.setTransform(201.1,233.4);

	this.instance_22 = new lib.heart();
	this.instance_22.parent = this;
	this.instance_22.setTransform(201.1,233.4);

	this.instance_23 = new lib.heart();
	this.instance_23.parent = this;
	this.instance_23.setTransform(201.1,233.4);

	this.instance_24 = new lib.heart();
	this.instance_24.parent = this;
	this.instance_24.setTransform(201.1,233.4);

	this.instance_25 = new lib.heart();
	this.instance_25.parent = this;
	this.instance_25.setTransform(201.1,233.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:201.1,y:233.4}}]}).to({state:[{t:this.instance_1,p:{x:201.1,y:233.4}},{t:this.instance,p:{x:223.3,y:217.3}}]},2).to({state:[{t:this.instance_2,p:{x:201.1,y:233.4}},{t:this.instance_1,p:{x:223.3,y:217.3}},{t:this.instance,p:{x:242.5,y:199.5}}]},2).to({state:[{t:this.instance_3,p:{x:201.1,y:233.4}},{t:this.instance_2,p:{x:223.3,y:217.3}},{t:this.instance_1,p:{x:242.5,y:199.5}},{t:this.instance,p:{x:263.5,y:184.5}}]},2).to({state:[{t:this.instance_4,p:{x:201.1,y:233.4}},{t:this.instance_3,p:{x:223.3,y:217.3}},{t:this.instance_2,p:{x:242.5,y:199.5}},{t:this.instance_1,p:{x:263.5,y:184.5}},{t:this.instance,p:{x:283.5,y:168.5}}]},2).to({state:[{t:this.instance_5,p:{x:201.1,y:233.4}},{t:this.instance_4,p:{x:223.3,y:217.3}},{t:this.instance_3,p:{x:242.5,y:199.5}},{t:this.instance_2,p:{x:263.5,y:184.5}},{t:this.instance_1,p:{x:283.5,y:168.5}},{t:this.instance,p:{x:302.5,y:151.5}}]},2).to({state:[{t:this.instance_6,p:{x:201.1,y:233.4}},{t:this.instance_5,p:{x:223.3,y:217.3}},{t:this.instance_4,p:{x:242.5,y:199.5}},{t:this.instance_3,p:{x:263.5,y:184.5}},{t:this.instance_2,p:{x:283.5,y:168.5}},{t:this.instance_1,p:{x:302.5,y:151.5}},{t:this.instance,p:{x:316.5,y:130.7}}]},2).to({state:[{t:this.instance_7,p:{x:201.1,y:233.4}},{t:this.instance_6,p:{x:223.3,y:217.3}},{t:this.instance_5,p:{x:242.5,y:199.5}},{t:this.instance_4,p:{x:263.5,y:184.5}},{t:this.instance_3,p:{x:283.5,y:168.5}},{t:this.instance_2,p:{x:302.5,y:151.5}},{t:this.instance_1,p:{x:316.5,y:130.7}},{t:this.instance,p:{x:321.5,y:106.5}}]},2).to({state:[{t:this.instance_8,p:{x:201.1,y:233.4}},{t:this.instance_7,p:{x:223.3,y:217.3}},{t:this.instance_6,p:{x:242.5,y:199.5}},{t:this.instance_5,p:{x:263.5,y:184.5}},{t:this.instance_4,p:{x:283.5,y:168.5}},{t:this.instance_3,p:{x:302.5,y:151.5}},{t:this.instance_2,p:{x:316.5,y:130.7}},{t:this.instance_1,p:{x:321.5,y:106.5}},{t:this.instance,p:{x:315.5,y:82.5}}]},2).to({state:[{t:this.instance_9,p:{x:201.1,y:233.4}},{t:this.instance_8,p:{x:223.3,y:217.3}},{t:this.instance_7,p:{x:242.5,y:199.5}},{t:this.instance_6,p:{x:263.5,y:184.5}},{t:this.instance_5,p:{x:283.5,y:168.5}},{t:this.instance_4,p:{x:302.5,y:151.5}},{t:this.instance_3,p:{x:316.5,y:130.7}},{t:this.instance_2,p:{x:321.5,y:106.5}},{t:this.instance_1,p:{x:315.5,y:82.5}},{t:this.instance,p:{x:299.5,y:62.5}}]},2).to({state:[{t:this.instance_10,p:{x:201.1,y:233.4}},{t:this.instance_9,p:{x:223.3,y:217.3}},{t:this.instance_8,p:{x:242.5,y:199.5}},{t:this.instance_7,p:{x:263.5,y:184.5}},{t:this.instance_6,p:{x:283.5,y:168.5}},{t:this.instance_5,p:{x:302.5,y:151.5}},{t:this.instance_4,p:{x:316.5,y:130.7}},{t:this.instance_3,p:{x:321.5,y:106.5}},{t:this.instance_2,p:{x:315.5,y:82.5}},{t:this.instance_1,p:{x:299.5,y:62.5}},{t:this.instance,p:{x:276.3,y:46.5}}]},2).to({state:[{t:this.instance_11,p:{x:201.1,y:233.4}},{t:this.instance_10,p:{x:223.3,y:217.3}},{t:this.instance_9,p:{x:242.5,y:199.5}},{t:this.instance_8,p:{x:263.5,y:184.5}},{t:this.instance_7,p:{x:283.5,y:168.5}},{t:this.instance_6,p:{x:302.5,y:151.5}},{t:this.instance_5,p:{x:316.5,y:130.7}},{t:this.instance_4,p:{x:321.5,y:106.5}},{t:this.instance_3,p:{x:315.5,y:82.5}},{t:this.instance_2,p:{x:299.5,y:62.5}},{t:this.instance_1,p:{x:276.3,y:46.5}},{t:this.instance,p:{x:245.5,y:42.7}}]},2).to({state:[{t:this.instance_12,p:{x:201.1,y:233.4}},{t:this.instance_11,p:{x:223.3,y:217.3}},{t:this.instance_10,p:{x:242.5,y:199.5}},{t:this.instance_9,p:{x:263.5,y:184.5}},{t:this.instance_8,p:{x:283.5,y:168.5}},{t:this.instance_7,p:{x:302.5,y:151.5}},{t:this.instance_6,p:{x:316.5,y:130.7}},{t:this.instance_5,p:{x:321.5,y:106.5}},{t:this.instance_4,p:{x:315.5,y:82.5}},{t:this.instance_3,p:{x:299.5,y:62.5}},{t:this.instance_2,p:{x:276.3,y:46.5}},{t:this.instance_1,p:{x:245.5,y:42.7}},{t:this.instance,p:{x:220.3,y:55.5}}]},2).to({state:[{t:this.instance_12,p:{x:201.1,y:233.4}},{t:this.instance_11,p:{x:223.3,y:217.3}},{t:this.instance_10,p:{x:242.5,y:199.5}},{t:this.instance_9,p:{x:263.5,y:184.5}},{t:this.instance_8,p:{x:283.5,y:168.5}},{t:this.instance_7,p:{x:302.5,y:151.5}},{t:this.instance_6,p:{x:316.5,y:130.7}},{t:this.instance_5,p:{x:321.5,y:106.5}},{t:this.instance_4,p:{x:315.5,y:82.5}},{t:this.instance_3,p:{x:299.5,y:62.5}},{t:this.instance_2,p:{x:276.3,y:46.5}},{t:this.instance_1,p:{x:245.5,y:42.7}},{t:this.instance,p:{x:220.3,y:55.5}}]},2).to({state:[{t:this.instance_13,p:{x:201.1,y:233.4}},{t:this.instance_12,p:{x:223.3,y:217.3}},{t:this.instance_11,p:{x:242.5,y:199.5}},{t:this.instance_10,p:{x:263.5,y:184.5}},{t:this.instance_9,p:{x:283.5,y:168.5}},{t:this.instance_8,p:{x:302.5,y:151.5}},{t:this.instance_7,p:{x:316.5,y:130.7}},{t:this.instance_6,p:{x:321.5,y:106.5}},{t:this.instance_5,p:{x:315.5,y:82.5}},{t:this.instance_4,p:{x:299.5,y:62.5}},{t:this.instance_3,p:{x:276.3,y:46.5}},{t:this.instance_2,p:{x:245.5,y:42.7}},{t:this.instance_1,p:{x:220.3,y:55.5}},{t:this.instance,p:{x:201.1,y:72.3}}]},2).to({state:[{t:this.instance_14,p:{x:201.1,y:233.4}},{t:this.instance_13,p:{x:223.3,y:217.3}},{t:this.instance_12,p:{x:242.5,y:199.5}},{t:this.instance_11,p:{x:263.5,y:184.5}},{t:this.instance_10,p:{x:283.5,y:168.5}},{t:this.instance_9,p:{x:302.5,y:151.5}},{t:this.instance_8,p:{x:316.5,y:130.7}},{t:this.instance_7,p:{x:321.5,y:106.5}},{t:this.instance_6,p:{x:315.5,y:82.5}},{t:this.instance_5,p:{x:299.5,y:62.5}},{t:this.instance_4,p:{x:276.3,y:46.5}},{t:this.instance_3,p:{x:245.5,y:42.7}},{t:this.instance_2,p:{x:220.3,y:55.5}},{t:this.instance_1,p:{x:201.1,y:72.3}},{t:this.instance,p:{x:181.9,y:55.5}}]},2).to({state:[{t:this.instance_15,p:{x:201.1,y:233.4}},{t:this.instance_14,p:{x:223.3,y:217.3}},{t:this.instance_13,p:{x:242.5,y:199.5}},{t:this.instance_12,p:{x:263.5,y:184.5}},{t:this.instance_11,p:{x:283.5,y:168.5}},{t:this.instance_10,p:{x:302.5,y:151.5}},{t:this.instance_9,p:{x:316.5,y:130.7}},{t:this.instance_8,p:{x:321.5,y:106.5}},{t:this.instance_7,p:{x:315.5,y:82.5}},{t:this.instance_6,p:{x:299.5,y:62.5}},{t:this.instance_5,p:{x:276.3,y:46.5}},{t:this.instance_4,p:{x:245.5,y:42.7}},{t:this.instance_3,p:{x:220.3,y:55.5}},{t:this.instance_2,p:{x:201.1,y:72.3}},{t:this.instance_1,p:{x:181.9,y:55.5}},{t:this.instance,p:{x:156.5,y:42.7}}]},2).to({state:[{t:this.instance_16,p:{x:201.1,y:233.4}},{t:this.instance_15,p:{x:223.3,y:217.3}},{t:this.instance_14,p:{x:242.5,y:199.5}},{t:this.instance_13,p:{x:263.5,y:184.5}},{t:this.instance_12,p:{x:283.5,y:168.5}},{t:this.instance_11,p:{x:302.5,y:151.5}},{t:this.instance_10,p:{x:316.5,y:130.7}},{t:this.instance_9,p:{x:321.5,y:106.5}},{t:this.instance_8,p:{x:315.5,y:82.5}},{t:this.instance_7,p:{x:299.5,y:62.5}},{t:this.instance_6,p:{x:276.3,y:46.5}},{t:this.instance_5,p:{x:245.5,y:42.7}},{t:this.instance_4,p:{x:220.3,y:55.5}},{t:this.instance_3,p:{x:201.1,y:72.3}},{t:this.instance_2,p:{x:181.9,y:55.5}},{t:this.instance_1,p:{x:156.5,y:42.7}},{t:this.instance,p:{x:126.5,y:46.5}}]},2).to({state:[{t:this.instance_17,p:{x:201.1,y:233.4}},{t:this.instance_16,p:{x:223.3,y:217.3}},{t:this.instance_15,p:{x:242.5,y:199.5}},{t:this.instance_14,p:{x:263.5,y:184.5}},{t:this.instance_13,p:{x:283.5,y:168.5}},{t:this.instance_12,p:{x:302.5,y:151.5}},{t:this.instance_11,p:{x:316.5,y:130.7}},{t:this.instance_10,p:{x:321.5,y:106.5}},{t:this.instance_9,p:{x:315.5,y:82.5}},{t:this.instance_8,p:{x:299.5,y:62.5}},{t:this.instance_7,p:{x:276.3,y:46.5}},{t:this.instance_6,p:{x:245.5,y:42.7}},{t:this.instance_5,p:{x:220.3,y:55.5}},{t:this.instance_4,p:{x:201.1,y:72.3}},{t:this.instance_3,p:{x:181.9,y:55.5}},{t:this.instance_2,p:{x:156.5,y:42.7}},{t:this.instance_1,p:{x:126.5,y:46.5}},{t:this.instance,p:{x:104.3,y:61.7}}]},2).to({state:[{t:this.instance_18,p:{x:201.1,y:233.4}},{t:this.instance_17,p:{x:223.3,y:217.3}},{t:this.instance_16,p:{x:242.5,y:199.5}},{t:this.instance_15,p:{x:263.5,y:184.5}},{t:this.instance_14,p:{x:283.5,y:168.5}},{t:this.instance_13,p:{x:302.5,y:151.5}},{t:this.instance_12,p:{x:316.5,y:130.7}},{t:this.instance_11,p:{x:321.5,y:106.5}},{t:this.instance_10,p:{x:315.5,y:82.5}},{t:this.instance_9,p:{x:299.5,y:62.5}},{t:this.instance_8,p:{x:276.3,y:46.5}},{t:this.instance_7,p:{x:245.5,y:42.7}},{t:this.instance_6,p:{x:220.3,y:55.5}},{t:this.instance_5,p:{x:201.1,y:72.3}},{t:this.instance_4,p:{x:181.9,y:55.5}},{t:this.instance_3,p:{x:156.5,y:42.7}},{t:this.instance_2,p:{x:126.5,y:46.5}},{t:this.instance_1,p:{x:104.3,y:61.7}},{t:this.instance,p:{x:87.1,y:83.5}}]},2).to({state:[{t:this.instance_19,p:{x:201.1,y:233.4}},{t:this.instance_18,p:{x:223.3,y:217.3}},{t:this.instance_17,p:{x:242.5,y:199.5}},{t:this.instance_16,p:{x:263.5,y:184.5}},{t:this.instance_15,p:{x:283.5,y:168.5}},{t:this.instance_14,p:{x:302.5,y:151.5}},{t:this.instance_13,p:{x:316.5,y:130.7}},{t:this.instance_12,p:{x:321.5,y:106.5}},{t:this.instance_11,p:{x:315.5,y:82.5}},{t:this.instance_10,p:{x:299.5,y:62.5}},{t:this.instance_9,p:{x:276.3,y:46.5}},{t:this.instance_8,p:{x:245.5,y:42.7}},{t:this.instance_7,p:{x:220.3,y:55.5}},{t:this.instance_6,p:{x:201.1,y:72.3}},{t:this.instance_5,p:{x:181.9,y:55.5}},{t:this.instance_4,p:{x:156.5,y:42.7}},{t:this.instance_3,p:{x:126.5,y:46.5}},{t:this.instance_2,p:{x:104.3,y:61.7}},{t:this.instance_1,p:{x:87.1,y:83.5}},{t:this.instance,p:{x:80.5,y:106.5}}]},2).to({state:[{t:this.instance_20,p:{x:201.1,y:233.4}},{t:this.instance_19,p:{x:223.3,y:217.3}},{t:this.instance_18,p:{x:242.5,y:199.5}},{t:this.instance_17,p:{x:263.5,y:184.5}},{t:this.instance_16,p:{x:283.5,y:168.5}},{t:this.instance_15,p:{x:302.5,y:151.5}},{t:this.instance_14,p:{x:316.5,y:130.7}},{t:this.instance_13,p:{x:321.5,y:106.5}},{t:this.instance_12,p:{x:315.5,y:82.5}},{t:this.instance_11,p:{x:299.5,y:62.5}},{t:this.instance_10,p:{x:276.3,y:46.5}},{t:this.instance_9,p:{x:245.5,y:42.7}},{t:this.instance_8,p:{x:220.3,y:55.5}},{t:this.instance_7,p:{x:201.1,y:72.3}},{t:this.instance_6,p:{x:181.9,y:55.5}},{t:this.instance_5,p:{x:156.5,y:42.7}},{t:this.instance_4,p:{x:126.5,y:46.5}},{t:this.instance_3,p:{x:104.3,y:61.7}},{t:this.instance_2,p:{x:87.1,y:83.5}},{t:this.instance_1,p:{x:81.5,y:106.5}},{t:this.instance,p:{x:86.5,y:131.3}}]},2).to({state:[{t:this.instance_21,p:{x:201.1,y:233.4}},{t:this.instance_20,p:{x:223.3,y:217.3}},{t:this.instance_19,p:{x:242.5,y:199.5}},{t:this.instance_18,p:{x:263.5,y:184.5}},{t:this.instance_17,p:{x:283.5,y:168.5}},{t:this.instance_16,p:{x:302.5,y:151.5}},{t:this.instance_15,p:{x:316.5,y:130.7}},{t:this.instance_14,p:{x:321.5,y:106.5}},{t:this.instance_13,p:{x:315.5,y:82.5}},{t:this.instance_12,p:{x:299.5,y:62.5}},{t:this.instance_11,p:{x:276.3,y:46.5}},{t:this.instance_10,p:{x:245.5,y:42.7}},{t:this.instance_9,p:{x:220.3,y:55.5}},{t:this.instance_8,p:{x:201.1,y:72.3}},{t:this.instance_7,p:{x:181.9,y:55.5}},{t:this.instance_6,p:{x:156.5,y:42.7}},{t:this.instance_5,p:{x:126.5,y:46.5}},{t:this.instance_4,p:{x:104.3,y:61.7}},{t:this.instance_3,p:{x:87.1,y:83.5}},{t:this.instance_2,p:{x:81.5,y:106.5}},{t:this.instance_1,p:{x:86.5,y:131.3}},{t:this.instance,p:{x:100.3,y:151.5}}]},2).to({state:[{t:this.instance_22,p:{x:201.1,y:233.4}},{t:this.instance_21,p:{x:223.3,y:217.3}},{t:this.instance_20,p:{x:242.5,y:199.5}},{t:this.instance_19,p:{x:263.5,y:184.5}},{t:this.instance_18,p:{x:283.5,y:168.5}},{t:this.instance_17,p:{x:302.5,y:151.5}},{t:this.instance_16,p:{x:316.5,y:130.7}},{t:this.instance_15,p:{x:321.5,y:106.5}},{t:this.instance_14,p:{x:315.5,y:82.5}},{t:this.instance_13,p:{x:299.5,y:62.5}},{t:this.instance_12,p:{x:276.3,y:46.5}},{t:this.instance_11,p:{x:245.5,y:42.7}},{t:this.instance_10,p:{x:220.3,y:55.5}},{t:this.instance_9,p:{x:201.1,y:72.3}},{t:this.instance_8,p:{x:181.9,y:55.5}},{t:this.instance_7,p:{x:156.5,y:42.7}},{t:this.instance_6,p:{x:126.5,y:46.5}},{t:this.instance_5,p:{x:104.3,y:61.7}},{t:this.instance_4,p:{x:87.1,y:83.5}},{t:this.instance_3,p:{x:81.5,y:106.5}},{t:this.instance_2,p:{x:86.5,y:131.3}},{t:this.instance_1,p:{x:100.3,y:151.5}},{t:this.instance,p:{x:118.5,y:168.5}}]},2).to({state:[{t:this.instance_23,p:{x:201.1,y:233.4}},{t:this.instance_22,p:{x:223.3,y:217.3}},{t:this.instance_21,p:{x:242.5,y:199.5}},{t:this.instance_20,p:{x:263.5,y:184.5}},{t:this.instance_19,p:{x:283.5,y:168.5}},{t:this.instance_18,p:{x:302.5,y:151.5}},{t:this.instance_17,p:{x:316.5,y:130.7}},{t:this.instance_16,p:{x:321.5,y:106.5}},{t:this.instance_15,p:{x:315.5,y:82.5}},{t:this.instance_14,p:{x:299.5,y:62.5}},{t:this.instance_13,p:{x:276.3,y:46.5}},{t:this.instance_12,p:{x:245.5,y:42.7}},{t:this.instance_11,p:{x:220.3,y:55.5}},{t:this.instance_10,p:{x:201.1,y:72.3}},{t:this.instance_9,p:{x:181.9,y:55.5}},{t:this.instance_8,p:{x:156.5,y:42.7}},{t:this.instance_7,p:{x:126.5,y:46.5}},{t:this.instance_6,p:{x:104.3,y:61.7}},{t:this.instance_5,p:{x:87.1,y:83.5}},{t:this.instance_4,p:{x:81.5,y:106.5}},{t:this.instance_3,p:{x:86.5,y:131.3}},{t:this.instance_2,p:{x:100.3,y:151.5}},{t:this.instance_1,p:{x:118.5,y:168.5}},{t:this.instance,p:{x:140.5,y:184.5}}]},2).to({state:[{t:this.instance_24,p:{x:201.1,y:233.4}},{t:this.instance_23,p:{x:223.3,y:217.3}},{t:this.instance_22,p:{x:242.5,y:199.5}},{t:this.instance_21,p:{x:263.5,y:184.5}},{t:this.instance_20,p:{x:283.5,y:168.5}},{t:this.instance_19,p:{x:302.5,y:151.5}},{t:this.instance_18,p:{x:316.5,y:130.7}},{t:this.instance_17,p:{x:321.5,y:106.5}},{t:this.instance_16,p:{x:315.5,y:82.5}},{t:this.instance_15,p:{x:299.5,y:62.5}},{t:this.instance_14,p:{x:276.3,y:46.5}},{t:this.instance_13,p:{x:245.5,y:42.7}},{t:this.instance_12,p:{x:220.3,y:55.5}},{t:this.instance_11,p:{x:201.1,y:72.3}},{t:this.instance_10,p:{x:181.9,y:55.5}},{t:this.instance_9,p:{x:156.5,y:42.7}},{t:this.instance_8,p:{x:126.5,y:46.5}},{t:this.instance_7,p:{x:104.3,y:61.7}},{t:this.instance_6,p:{x:87.1,y:83.5}},{t:this.instance_5,p:{x:81.5,y:106.5}},{t:this.instance_4,p:{x:86.5,y:131.3}},{t:this.instance_3,p:{x:100.3,y:151.5}},{t:this.instance_2,p:{x:118.5,y:168.5}},{t:this.instance_1,p:{x:140.5,y:184.5}},{t:this.instance,p:{x:161.5,y:199.5}}]},2).to({state:[{t:this.instance_25},{t:this.instance_24,p:{x:223.3,y:217.3}},{t:this.instance_23,p:{x:242.5,y:199.5}},{t:this.instance_22,p:{x:263.5,y:184.5}},{t:this.instance_21,p:{x:283.5,y:168.5}},{t:this.instance_20,p:{x:302.5,y:151.5}},{t:this.instance_19,p:{x:316.5,y:130.7}},{t:this.instance_18,p:{x:321.5,y:106.5}},{t:this.instance_17,p:{x:315.5,y:82.5}},{t:this.instance_16,p:{x:299.5,y:62.5}},{t:this.instance_15,p:{x:276.3,y:46.5}},{t:this.instance_14,p:{x:245.5,y:42.7}},{t:this.instance_13,p:{x:220.3,y:55.5}},{t:this.instance_12,p:{x:201.1,y:72.3}},{t:this.instance_11,p:{x:181.9,y:55.5}},{t:this.instance_10,p:{x:156.5,y:42.7}},{t:this.instance_9,p:{x:126.5,y:46.5}},{t:this.instance_8,p:{x:104.3,y:61.7}},{t:this.instance_7,p:{x:87.1,y:83.5}},{t:this.instance_6,p:{x:81.5,y:106.5}},{t:this.instance_5,p:{x:86.5,y:131.3}},{t:this.instance_4,p:{x:100.3,y:151.5}},{t:this.instance_3,p:{x:118.5,y:168.5}},{t:this.instance_2,p:{x:140.5,y:184.5}},{t:this.instance_1,p:{x:161.5,y:199.5}},{t:this.instance,p:{x:180.9,y:217.3}}]},2).wait(73));

	// bigheart
	this.instance_26 = new lib.heart();
	this.instance_26.parent = this;
	this.instance_26.setTransform(201.5,137.6,7.441,7.281);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(52).to({_off:false},0).to({alpha:1},8).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188,222.9,26.3,20.9);


// stage content:
(lib.Ilu = function(mode,startPosition,loop) {
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
	id: '521778276EDC334C8B2F5A59E6A0FA6F',
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
an.compositions['521778276EDC334C8B2F5A59E6A0FA6F'] = {
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