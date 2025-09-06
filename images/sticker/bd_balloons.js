(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.yellowballoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUA3QgIhEAygp");
	this.shape.setTransform(3.7898,8.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AB+AAQAAA0glAkQglAmg0AAQgzAAglgmQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzg");
	this.shape_1.setTransform(12.575,12.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhYBYQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAkQglAmg0AAQgzAAglgmg");
	this.shape_2.setTransform(12.575,12.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgYAEIARAPQATgDANgOIgHgUQgSARgYAFg");
	this.shape_3.setTransform(17.775,24.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgYAEQAYgFASgRIAHAUQgNAOgTADg");
	this.shape_4.setTransform(17.775,24.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowballoon, new cjs.Rectangle(-1,-1,27.2,28.2), null);


(lib.redballoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgWA2QgGhDA0go");
	this.shape.setTransform(4.0895,8.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AB+AAQAAA0glAkQglAmg0AAQgzAAglgmQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzg");
	this.shape_1.setTransform(12.575,12.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhYBYQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAkQglAmg0AAQgzAAglgmg");
	this.shape_2.setTransform(12.575,12.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgYAEIARAPQATgDANgOIgHgUQgSARgYAFg");
	this.shape_3.setTransform(17.775,24.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgYAEQAYgFASgRIAHAUQgNAOgTADg");
	this.shape_4.setTransform(17.775,24.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redballoon, new cjs.Rectangle(-1,-1,27.2,28.2), null);


(lib.purpleballoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgqAoQAWhAA/gP");
	this.shape.setTransform(6.4,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AB+AAQAAA0glAkQglAmg0AAQgzAAglgmQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzg");
	this.shape_1.setTransform(12.575,12.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900CC").s().p("AhYBYQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAkQglAmg0AAQgzAAglgmg");
	this.shape_2.setTransform(12.575,12.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgYAEIARAPQATgDANgOIgHgUQgSARgYAFg");
	this.shape_3.setTransform(17.775,24.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9900CC").s().p("AgYAEQAYgFASgRIAHAUQgNAOgTADg");
	this.shape_4.setTransform(17.775,24.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purpleballoon, new cjs.Rectangle(-1,-1,27.2,28.2), null);


(lib.greenballoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgqAoQAWhAA/gP");
	this.shape.setTransform(6.4,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AB+AAQAAA0glAkQglAmg0AAQgzAAglgmQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzg");
	this.shape_1.setTransform(12.575,12.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61BD44").s().p("AhYBYQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAkQglAmg0AAQgzAAglgmg");
	this.shape_2.setTransform(12.575,12.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgYAEIARAPQATgDANgOIgHgUQgSARgYAFg");
	this.shape_3.setTransform(17.775,24.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#61BD44").s().p("AgYAEQAYgFASgRIAHAUQgNAOgTADg");
	this.shape_4.setTransform(17.775,24.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greenballoon, new cjs.Rectangle(-1,-1,27.2,28.2), null);


(lib.blueballoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgSA3QgLhDAygq");
	this.shape.setTransform(3.8854,9.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AB+AAQAAA0glAkQglAmg0AAQgzAAglgmQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzg");
	this.shape_1.setTransform(12.575,12.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AhYBYQglgkAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAkQglAmg0AAQgzAAglgmg");
	this.shape_2.setTransform(12.575,12.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgYAEIARAPQATgDANgOIgHgUQgSARgYAFg");
	this.shape_3.setTransform(17.775,24.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AgYAEQAYgFASgRIAHAUQgNAOgTADg");
	this.shape_4.setTransform(17.775,24.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueballoon, new cjs.Rectangle(-1,-1,27.2,28.2), null);


(lib.bloons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.greenballoon();
	this.instance.setTransform(-16.8,-18.9,0.8394,0.8394,0,0,0,12.7,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.6,rotation:-11.9904,x:-20.7,y:-16.8},6).to({regX:12.7,rotation:0,x:-16.8,y:-18.9},6).wait(1));

	// Layer_3
	this.instance_1 = new lib.purpleballoon();
	this.instance_1.setTransform(-14.3,-30.1,0.7319,0.7319,4.8031,0,0,12.9,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:12.8,rotation:-8.4055,x:-17.65,y:-31.65},6).to({regX:12.9,rotation:4.8031,x:-14.3,y:-30.1},6).wait(1));

	// Layer_4
	this.instance_2 = new lib.redballoon();
	this.instance_2.setTransform(-0.2,-33.05,1.0355,1.0355,26.7546,0,0,12.7,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:12.6,rotation:19.5255,x:-1.3,y:-37.65},6).to({regX:12.7,rotation:26.7546,x:-0.2,y:-33.05},6).wait(1));

	// Layer_5
	this.instance_3 = new lib.blueballoon();
	this.instance_3.setTransform(14.85,-35,0.7319,0.7319,59.5218,0,0,12.8,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.7318,scaleY:0.7318,rotation:67.9637,x:18.55,y:-34.85},6).to({scaleX:0.7319,scaleY:0.7319,rotation:59.5218,x:14.85,y:-35},6).wait(1));

	// Layer_6
	this.instance_4 = new lib.yellowballoon();
	this.instance_4.setTransform(13.9,-21,0.8962,0.8962,52.9687,0,0,12.7,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:59.7092,x:18.8,y:-20.75},6).to({rotation:52.9687,x:13.9,y:-21},6).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag6huQAhAmAZArQAmBBAVBL");
	this.shape.setTransform(-7.4,0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag7hsQAjAjAYArQAnBAAVBL");
	this.shape_1.setTransform(-7.5,0.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag8hrQAlAgAYArQAnBAAVBM");
	this.shape_2.setTransform(-7.6,0.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Ag9hpQAnAcAZArQAmBBAVBL");
	this.shape_3.setTransform(-7.7,1.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ag+hoQApAaAYArQAnBAAVBM");
	this.shape_4.setTransform(-7.8,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("Ag/hmQArAWAZArQAmBBAVBL");
	this.shape_5.setTransform(-7.9,1.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AhAhkQAtATAYArQAnBAAVBL");
	this.shape_6.setTransform(-8,1.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AgbiZQAXBPAOBYQALBDAHBJ");
	this.shape_7.setTransform(-4.25,-3.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgfifQAfBaAOBYQALBDAHBK");
	this.shape_8.setTransform(-4.7,-4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgkikQAoBkAPBZQALBDAHBJ");
	this.shape_9.setTransform(-5.15,-4.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgoipQAwBvAPBYQALBDAHBJ");
	this.shape_10.setTransform(-5.6,-5.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AgtivQA6B6APBYQALBEAHBJ");
	this.shape_11.setTransform(-6.075,-5.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Agxi0QBDCFAOBYQALBDAHBJ");
	this.shape_12.setTransform(-6.525,-6.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("Ag2i6QBMCQAPBYQALBEAHBJ");
	this.shape_13.setTransform(-6.975,-6.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_10
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AADiVIgFEr");
	this.shape_14.setTransform(-0.8,-5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AgDCbIAHk1");
	this.shape_15.setTransform(-0.75,-5.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgDCfIAHk9");
	this.shape_16.setTransform(-0.7,-5.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AgECjIAJlF");
	this.shape_17.setTransform(-0.65,-6.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AgECoIAJlP");
	this.shape_18.setTransform(-0.6,-6.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AgFCsIALlX");
	this.shape_19.setTransform(-0.55,-7.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AAGivIgLFf");
	this.shape_20.setTransform(-0.5,-7.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// Layer_11
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAniEQggBEgTBLQgQA7gKA/");
	this.shape_21.setTransform(2.775,-3.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AgrCPQAKg/AQg7QAThKAqhZ");
	this.shape_22.setTransform(3.275,-4.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AgwCZQAKg/AQg7QAUhKAzht");
	this.shape_23.setTransform(3.775,-5.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("Ag1CjQAJg/ARg7QAUhKA9iB");
	this.shape_24.setTransform(4.3,-6.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("Ag6CuQAJg/AQg7QAVhLBHiW");
	this.shape_25.setTransform(4.8,-7.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("Ag/C4QAJhAAQg7QAVhKBRiq");
	this.shape_26.setTransform(5.3,-8.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("ABFjBQhbC+gVBLQgQA7gJA/");
	this.shape_27.setTransform(5.8,-9.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Layer_12
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AAyhqQggAsgXAvQgdA6gPBA");
	this.shape_28.setTransform(3.925,-0.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("Ag0BsQAPhAAdg6QAXgvAmgu");
	this.shape_29.setTransform(4.225,-0.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("Ag3BtQAPhAAdg6QAXgvAsgw");
	this.shape_30.setTransform(4.525,-0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("Ag6BuQAPhAAdg6QAXgwAygx");
	this.shape_31.setTransform(4.825,-1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("Ag9BvQAPhAAdg6QAXgvA4g0");
	this.shape_32.setTransform(5.125,-1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AhABvQAPhAAdg5QAXgwA+g0");
	this.shape_33.setTransform(5.425,-1.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("ABEhvQhEA2gXAwQgdA5gPBA");
	this.shape_34.setTransform(5.725,-1.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

	// strings
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AAAAJQgHgmgBghQgBAIgDAKQAAAAAAABQABACALAyQAFAWAIAg");
	this.shape_35.setTransform(-0.175,16.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-54.8,68.5,78.4);


(lib.balloon_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bloons();
	this.instance.setTransform(37.75,68.1,1.1564,1.2482,18.7089,0,0,-1.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-1.4,regY:-0.8,scaleX:1.1006,scaleY:1.337,rotation:18.7087,x:37.1,y:65.95},9).to({regX:-1.6,regY:-1,scaleX:1.1564,scaleY:1.2482,rotation:18.7089,x:37.75,y:68.1},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.8,0.4,70.5,97.69999999999999);


(lib.anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.balloon_anim();
	this.instance.setTransform(44.8,-7,1,1,0,0,0,46.1,53.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// eyeoverlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABVAMQgEgFABgHQgBgGAEgFQAFgFAFABQAGgBAEAFQAEAFABAGQgBAHgEAFQgEAEgGAAQgFAAgFgEgAhoAMQgFgFABgHQgBgGAFgFQAFgFAGABQAHgBAFAFQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(4.25,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// pupils
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A36B00").s().p("ABTAcQgKgMAAgQQAAgQAKgLQAKgMAOAAQAOAAAKAMQAKALAAAQQAAAQgKAMQgKAMgOAAQgOAAgKgMgAiBAdQgLgMAAgRQAAgPALgMQALgMARAAQAPAAALAMQALALAAAQQAAAQgLAMQgLAMgPAAQgRAAgLgLg");
	this.shape_1.setTransform(4,-9.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// brows
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ADAATQg3g7hVAoAi/AUQBDhABaAp");
	this.shape_2.setTransform(6.625,-20.9811);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

	// eyeback
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgOAAQAAAmgaAaQgaAagmAAQglAAgbgaQgagaAAgmQAAglAagaQAbgaAlAAQAmAAAaAaQAaAaAAAlgADDAAQAAAmgXAaQgWAaggAAQggAAgXgaQgWgaAAgmQAAglAWgaQAXgaAgAAQAgAAAWAaQAXAaAAAlg");
	this.shape_3.setTransform(6.625,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA/BAQgWgaAAgmQAAglAWgaQAXgaAgAAQAgAAAWAaQAXAaAAAlQAAAmgXAaQgWAaggAAQggAAgXgagAioBAQgagaAAgmQAAglAagaQAbgaAlAAQAmAAAaAaQAaAaAAAlQAAAmgaAaQgaAagmAAQglAAgbgag");
	this.shape_4.setTransform(6.625,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(4));

	// mouth
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("Ag9gJQA7AoBAgo");
	this.shape_5.setTransform(8.375,7.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4));

	// noseoverlay
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.647)").s().p("AgPAIQgGgEgBgEQABgDAGgEQAGgDAJAAQAJAAAHADQAGAEAAADQAAAEgGAEQgHADgJAAQgJAAgGgDg");
	this.shape_6.setTransform(9.1,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4));

	// nose
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxAWIAAgDQAAgRAPgKQAPgNATAAQAUAAAQANQAOAKAAARIAAADg");
	this.shape_7.setTransform(8.2,-2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

	// muzzle
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8E9A9").s().p("AhZBCQgngcAAglQAAgnAngbQAlgbA0AAQA1AAAmAbQAmAbgBAnQABAlgmAcQgmAbg1AAQg0AAglgbg");
	this.shape_8.setTransform(3.8,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

	// headoverlay
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],5.5,0.3,0,5.5,0.3,27.4).s().p("AhiDhIgTgOIgRgMIgBgBQjHijCDjCQA2hIA8gMQA/gWAzAVIAHADQAFACAGAGQAHAFAPAZQAOghAVgBQA0ADA0BLQCDDBjFCiIgCACIgNAKIgYARQgqAeg5AAQg4AAgqgeg");
	this.shape_9.setTransform(1.1948,-7.5188);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4));

	// head
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6BE66").s().p("AhiDhIgTgOIgRgMIgBgBQjHijCDjCQA2hIA8gMQA/gWAzAVIAHADQAFACAGAGQAHAFAPAZQAOghAVgBQA0ADA0BLQCDDBjFCiIgCACIgNAKIgYARQgqAeg5AAQg4AAgqgeg");
	this.shape_10.setTransform(1.1948,-7.5188);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4));

	// ears
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2AC57").s().p("AC7A9QgXgIgJgZQgJgXAKgZQAJgZAXgMQAXgMAXAIQAXAKAJAXQAJAYgJAZQgKAZgXAMQgOAHgNAAQgKAAgJgEgADGgfQgNAHgEANQgGANAFANQAFAOANAEQAMAFAMgGQAMgHAFgNQAGgNgFgNQgFgNgMgFQgGgCgFAAQgHAAgHADgAjoA6QgWgMgKgZQgJgZAIgYQAKgXAWgKQAXgIAXAMQAXAMAJAZQAKAZgJAXQgJAZgXAIQgJAEgKAAQgNAAgOgHgAjdgeQgLAFgFAMQgEALAEAMQAFANAMAHQALAFALgEQAMgFAEgMQAFgMgFgMQgEgMgMgHQgHgDgHAAQgEAAgFACg");
	this.shape_11.setTransform(0.9436,-21.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAE4AD").s().p("ADFAhQgNgFgFgNQgFgNAGgNQAEgOANgGQAMgGANAEQAMAFAFANQAFANgGANQgFAOgMAGQgHAEgHAAQgFAAgFgCgAjdAdQgMgGgFgNQgEgMAEgMQAFgMALgEQAMgEALAFQAMAHAEAMQAFAMgFAMQgEAMgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_12.setTransform(1.0388,-21.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(4));

	// mane
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#834C14").s().p("AiVDyQhoAHgIhuQgjgPgBgtQhXhQBchMQgCgmAfgYQANhhBlgDQAZghArAHQAfgnA3AAQAtAAAgAnQArgHAZAhQBkADANBhQAgAYgCAmQBcBMhXBQQgBAtgkAPQgHBuhogHQg8A/haAAQhZAAg8g/g");
	this.shape_13.setTransform(-2.0941,-9.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#935E28").s().p("AisEZQh5AHgJh/QgpgSgBg0QhkhcBrhYQgDgsAlgcQAPhwB0gDQAcgmAyAIQAlgtA/AAQA0AAAlAtQAygIAcAmQBzADAQBwQAmAcgEAsQBrBYhlBcQgBA0goASQgKB/h4gHQhGBHhhAAQhtAAhFhHgAAAEvQBaAAA8g/QBoAIAHhvQAkgPABgtQBXhPhchNQACglgggZQgNhghkgDQgZgigrAHQgggmgtAAQg3AAgfAmQgrgHgZAiQhlADgNBgQgfAZACAlQhcBNBXBPQABAtAjAPQAIBvBogIQA8A/BZAAg");
	this.shape_14.setTransform(-2.0816,-9.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(4));

	// bellymiddle
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8E9A9").s().p("AhwB0IAAjMQAAgbAbAAICrAAQAbAAAAAbIAADMg");
	this.shape_15.setTransform(0.45,18.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(4));

	// bellyoverlay
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],0,-15.8,0,15.8).s().p("Ah2CSQgnAAAAgtIAAjJQAAgtAnABIDtAAQAngBAAAtIAADJQAAAtgnAAg");
	this.shape_16.setTransform(-2.45,21.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(4));

	// belly
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("Ah2AeQgnAAAAgsIAAgPIE7AAIAAAPQAAAsgnAAg");
	this.shape_17.setTransform(-2.45,33.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F6BE66").s().p("AidB0IAAi7QAAgsAnAAIDtAAQAnAAAAAsIAAC7g");
	this.shape_18.setTransform(-2.45,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(4));

	// legs
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AAJAwQgGg1AdgqIBWAAQAdAqgFA1gAiNAwQgGg1AdgqIBWAAQAdAqgFA1g");
	this.shape_19.setTransform(-2.3889,37.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2AC57").s().p("AALgDIgCgQICFAAIgCAQQgIAXg3AAQg6AAgIgXgAiLgDIgCgQICFAAIgDAQQgHAXg6AAQg3AAgIgXg");
	this.shape_20.setTransform(-2.375,44.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(4));

	// arms
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2AC57").s().p("AlFBGQgKhfBQgvQBkgVgHBFQhNgIgKA/IAAAcQgDAlgWAHQgKADgJAAQgdAAgDgkgADCAOQjZgrBtgyQB4A1ArgoIAPgUQAXgaASAKQAkAWgYAkQgmA+g5AAQgNAAgPgEg");
	this.shape_21.setTransform(4.1702,25.2812);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(4));

	// tailtipoverlay
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#905D2F").s().p("AgTAjQgbgkAYgqQACAoAfACQAeABgIAWQgVAWgOAAQgKAAgHgJg");
	this.shape_22.setTransform(-32.7022,30.8945);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#905D2F").s().p("AAAAhQgogVABguQAUAiAcgOQAbgNAFAYQgKAmgVAAQgFAAgFgCg");
	this.shape_23.setTransform(-32.3512,39.2692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},3).wait(1));

	// tailtip
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6B4421").s().p("AggAzQgog4Awg6QgJA3AwADQAuACgMAiQgfAhgXAAQgPAAgMgNg");
	this.shape_24.setTransform(-31.9055,30.0924);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B4421").s().p("AgFAzQg/ggAQhIQARA1AsgVQAqgUAGAlQgQA6ggAAQgHAAgHgDg");
	this.shape_25.setTransform(-31.803,38.3529);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},3).wait(1));

	// tail
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C6913E").s().p("AhjAPIAAgdQBoBGBThpIAMA1QgoAig1ALIgNABQgtAAgwgjg");
	this.shape_26.setTransform(-20.825,32.4945);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C6913E").s().p("AhNBIIgPgaQB9ANAYiEIAkApQgTAxgqAiQggAXguAAQgPAAgQgCg");
	this.shape_27.setTransform(-21.25,33.172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-53.6,122.4,100);


// stage content:
(lib.bd_balloons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Aladin'; // Google API font
			mystage.color = '#f5bd3d'; // Text color
			mystage.shad1 = '#222222'; // Main shadow color
			mystage.shad2 = '#222222'; // Alt shadow color
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
	this.instance = new lib.anim();
	this.instance.setTransform(53.65,57.1,0.7702,0.7702,0,0,0,25.1,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(52.4,71.1,44.199999999999996,27.200000000000003);
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
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;