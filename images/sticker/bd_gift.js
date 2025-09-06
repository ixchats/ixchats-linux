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



// stage content:
(lib.bd_gift = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// lhand
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8A4A01").ss(1,1,1).p("AA0ArQANgJAFgcQAEghgigHIgegIQAVgGACgVQAAgegegDQgcgCgaAlQgSAXgBAzQABAVAGARQAVA7BNAAQAbgHgKg2gAAJAmQAbANAQgIAAKgqIgPgF");
	this.shape.setTransform(20.6711,70.5949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEFD3").s().p("Ag/AtQgGgRgBgVQABgzASgXQAaglAcACQAeADAAAeQgCAVgVAGIAeAIQAiAHgEAhQgFAcgNAJIgBAAQgGADgHAAIgBAAIgBAAQgKgBgNgFIgBAAIgCgCIgBAAIABAAIACACIABAAQANAFAKABIABAAIABAAQAHAAAGgDIABAAQAKA2gbAHQhNAAgVg7gAAKgqIgPgFg");
	this.shape_1.setTransform(20.6711,70.5949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8A4A01").ss(1,1,1).p("AAvAvQAOgHAJgbQAIghghgLIgdgMIgPgHAAQgrQAWgDAEgVQAEgdgegHQgbgGgfAiQgUAUgHA0QgDATAEATQAOA8BMAKQAcgEgDg2AAFAlQAYAQASgG");
	this.shape_2.setTransform(16.08,66.5306);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDEFD3").s().p("AhEAjQgEgTADgTQAHg0AUgUQAfgiAbAGQAeAHgEAdQgEAVgWADIgPgHIAPAHIAdAMQAhALgIAhQgJAbgOAHIgBAAQgFACgFAAIAAAAIgBAAQgLgBgNgHIgCgBIgBgBIAAAAIgDgCIADACIAAAAIABABIACABQANAHALABIABAAIAAAAQAFAAAFgCIABAAQADA2gcAEQhMgKgOg8g");
	this.shape_3.setTransform(16.08,66.5306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// rarm
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8A4A01").ss(1,1,1).p("Ag+AXQgbgIAAgUQADgeAngBQAmABAdAmIALgIQAAgFAAgFQgFg6gvg/QABgcAYgDQBmAgAnB+QAKAkgvAoQgaAWg8AcQghA5hlgHQgigJAUg2QgRgJgCgcQgCgjAsgEIApgFIAUgDAAjBPQgEAVgJARAhGBoQglALgTgL");
	this.shape_4.setTransform(71.0934,79.7835);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDEFD3").s().p("AhdBmQgigKAUg1QgRgKgCgcQgCghAsgFIApgEQgbgIAAgWQADgeAnAAQAlAAAeAnIALgJIAAgJQBEgFAJBWQgaAXg8AcQAJgRAEgVQgEAVgJARQgfAyhTAAIgUAAgAhTAsQANAAASgFIABgBIgBABQgSAFgNAAIgBAAIAAAAQgOAAgJgFQAJAFAOAAIAAAAIABAAgAgrgpIAUgEgAApA0IAAAAg");
	this.shape_5.setTransform(69.1725,86.3335);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F89320").s().p("AgeAjQgFg5gwg/QABgcAZgDQBlAgAnB9QAKAlgvAnQgJhXhDAFg");
	this.shape_6.setTransform(77.2959,74.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8A4A01").ss(1,1,1).p("AgoACQgVgUALgSQARgZAiASQAhATAHAwIAOgDQACgEADgEQAXg1gMhOQAOgZAYAKQBKBNgaCAQgJAmg8AMQgiAHhBgEQg5AhhWg2QgYgZArglAhWBFQgmgIgLgTQgKgRALgZQAPgeApARIAmAPIATAGAASBiQgOAQgPAL");
	this.shape_7.setTransform(62.3799,76.9431);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDEFD3").s().p("Ah6A9QgYgZArgkQgKgRALgaQAPgeApARIAmAQQgVgVALgSQARgZAiASQAhATAHAxIAOgDIAFgIQA9AbghBRQgiAHhCgEQAQgLAOgQQgOAQgQALQgVAMgZAAQgrAAg1ghgAg2AaQgmgIgLgSQALASAmAIgAAKgiIgSgGg");
	this.shape_8.setTransform(59.1826,81.2075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F89320").s().p("AgzAUQAYg1gNhOQAPgYAXAJQBJBNgaCBQgIAlg8AMQAhhRg9gcg");
	this.shape_9.setTransform(73.538,76.1673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).wait(2));

	// bow
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DB4879").s().p("AgUAxQgTgCACgYQgmAPgBgTQgCgTAWgGQgDgWAPgGQAPgGAKAKQAKAKAEgOQADgNATgBQAOABAGASQAZgLAMARQAMAXgiACQATAIgGATQgJASgrgOQgMAQgUAAIgBAAg");
	this.shape_10.setTransform(47.337,58.4508);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BD1E54").s().p("AgeBJQgcgCADglQg4AYgCgdQgCgdAfgKQgEgfAWgJQAXgJAOAPQAPAOAGgUQAFgVAcgBQAVADAJAaQAmgRARAaQARAigyADQAdAMgIAcQgOAchAgVQgSAXgeAAIgCAAgAgUAxQAVAAAMgQQArAOAJgSQAGgTgTgIQAigCgMgXQgMgRgZALQgGgSgOgBQgTABgDANQgEAOgKgKQgKgKgPAGQgPAGADAWQgWAGACATQABATAmgPQgCAYATACg");
	this.shape_11.setTransform(47.341,58.477);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB4879").s().p("AgXAvQgSgCADgZQgnANAAgTQAAgSAWgGQgCgVAQgFQAPgFAJAKQAJALAFgOQADgNAUAAQAOADAFASQAagKALASQAKAYgjgBQATAKgHASQgKASgqgRQgLAOgTAAIgEgBg");
	this.shape_12.setTransform(40.3368,57.7105);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BD1E54").s().p("AgjBHQgbgEAFglQg5AUAAgdQgBgbAggJQgCgfAXgIQAXgIANAQQAOAQAHgVQAGgUAdABQAVAEAGAbQAogPAPAcQAPAigzAAQAdAOgKAbQgPAbg/gZQgRAUgcAAIgHAAgAgXAvQAVACANgPQAqARAKgSQAHgSgTgKQAjABgKgYQgLgSgaAKQgFgSgOgDQgUAAgDANQgFAOgJgLQgJgKgPAFQgQAFACAVQgWAGAAASQAAATAngNQgDAZASACg");
	this.shape_13.setTransform(40.3303,57.7399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).wait(2));

	// gift
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#960D3C").s().p("AgWBlIAAj5IABAAIAsA1IgBAAIAADzg");
	this.shape_14.setTransform(26.75,82.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#657624").s().p("AAWCbIAAjzIAAAAIAvA4IgFDmgAhEA9IAAkCIAvA4IgCAAIAAD5g");
	this.shape_15.setTransform(26.825,81.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#90A833").s().p("Ai7hOIC+glIhPD8Ih0APgABEh/IAAAAIB+gZIhrELIhoAPg");
	this.shape_16.setTransform(52.55,86.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BFDE46").s().p("AinA9IC4gkIA0A4Ii+AlgABOAOICLgaIArA4Ih+AYgAkDgvIGLhGIAtA6ImJBEg");
	this.shape_17.setTransform(45.9,66.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BE0F4B").s().p("AAHh3IBBgNIABAAIhVEBIg8AIg");
	this.shape_18.setTransform(52.1,87.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2155B").s().p("AAPAPIi4AkIgtg0IGJhEIAkAuIiLAaIA5A3IhCAMg");
	this.shape_19.setTransform(46.075,67.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BE0F4B").s().p("AAPh2IBCgJIAAAAIhlD7Ig9AEg");
	this.shape_20.setTransform(43.25,86.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#90A833").s().p("Ai1hZIC/gZIhfD2Ih1AIgABNh6IB+gRIh7EEIhpAHg");
	this.shape_21.setTransform(43.725,86.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#657624").s().p("AAMCdIAQjzIAAAAIAsA7IgUDlgAhHA4IARkBIAqA7IgBAAIgQD5g");
	this.shape_22.setTransform(18.3,79.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#960D3C").s().p("AgcBkIAQj5IABAAIAoA4IAAAAIgQDzg");
	this.shape_23.setTransform(18.225,80.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BFDE46").s().p("AirAyIC6gYIAwA7Ii/AYgACCBMIg1g6ICMgSIAnA8Ih+AQgAj/hAIGOgsIApA8ImMArg");
	this.shape_24.setTransform(38.375,66.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2155B").s().p("AANAIIi6AYIgpg3IGMgrIAhAxIiMARIA1A6IhDAJg");
	this.shape_25.setTransform(38.575,67.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).wait(2));

	// eyeback
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(51,51,51,0.447)").ss(1,1,1).p("Ai8gtQAJgjAbgUQAcgSAgAIQAgAJAPAdQAPAfgKAkQgIAjgdASQgcAUgegIQghgJgPgeQgPgdAJgkQAAAAABgBQBTgPA4BEAC3BCQgLAWgTANQgcASgggIQgfgHgPgfQgOgbAGggQABgDAAgDQAKgjAbgUQAdgRAfAGQAgAJAOAfQAQAdgJAlQgDAKgEAIgAAnAOQBegnAyBb");
	this.shape_26.setTransform(55.118,36.6857);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C47315").s().p("ABdBvQgfgHgPgfQgOgbAGggQAcgMAYAAIABAAIAAAAQA4AAAjBAQgLAWgTANQgTAMgVAAQgKAAgKgCgAC3BCQgjhAg4AAIAAAAIgBAAQgYAAgcAMIABgGQAKgjAbgUQAdgRAfAGQAgAJAOAfQAQAdgJAlIgHASIAAAAgAiHA8QghgJgPgeQgPgdAJgkIABgBQAPgDAOAAIABAAIAAAAQA/ABAsA1IACACIgCgCQgsg1g/gBIAAAAIgBAAQgOAAgPADQAJgjAbgUQAcgSAgAIQAgAJAPAdQAPAfgKAkQgIAjgdASQgUAOgVAAQgIAAgJgCg");
	this.shape_27.setTransform(55.118,36.6857);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(51,51,51,0.447)").ss(1,1,1).p("AjCgPQAEgkAYgYQAZgWAgADQAhAEAUAaQATAcgEAkQgCAlgaAWQgYAYgggDQghgEgUgbQgTgbADgkQAAAAAAgBQBRgcBBA6AC+AlQgHAXgRAQQgZAWgggEQgggCgUgcQgRgYAAghQAAgDAAgCQAEgkAZgZQAZgVAgABQAhAEATAcQAUAcgDAkQgCALgDAJgAAoAHQBXg0A/BS");
	this.shape_28.setTransform(54.6673,37.1118);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C47315").s().p("ABtBeQgggCgUgcQgRgYAAghIADgBIABgBIABAAIAAgBQAfgRAcAAIABAAIAAAAQAuABAmAvIABACQgHAXgRAQQgVATgbAAIgJgBgAh9BQQghgEgUgbQgTgbADgkIAAgBQAagJAZAAIAAAAIAAAAQAxAAAqAjIAAABIABABIABAAIABABIABABIgBgBIgBgBIgBAAIgBgBIAAgBQgqgjgxAAIAAAAIAAAAQgZAAgaAJQAEgkAYgYQAZgWAgADQAhAEAUAaQATAcgEAkQgCAlgaAWQgWAWgbAAIgHgBgAC+AlIgBgCQgmgvgugBIAAAAIgBAAQgcAAgfARIAAABIgBAAIgBABIgDABIAAgFQAEgkAZgZQAZgVAgABQAhAEATAcQAUAcgDAkQgCALgDAJIAAAAg");
	this.shape_29.setTransform(54.6673,37.1118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},2).wait(2));

	// brows
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAqAdQCLhzAkCiQg5hUh2AlgAjYgSQBpiCBJClQhYhUhaAxg");
	this.shape_30.setTransform(56.975,24.7251);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AApAdQB4iHA9CaQhFhKhwA3gAjdAWQBUiQBiCYQhkhGhSA+g");
	this.shape_31.setTransform(55.025,24.3098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},2).wait(2));

	// nose
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("AgagSQAPADALAGQACAAABACQACAAACACQAMADAMAHQgBAUgmgHQgfgVANgPg");
	this.shape_32.setTransform(52.9975,43.7925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B54068").s().p("AgIASQgfgVANgPQAPADALAGQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAEACQAMADAMAHQgBAOgVAAQgIAAgJgBg");
	this.shape_33.setTransform(52.9975,43.7925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AgcgQQAOABANAEQABAAACABQABAAADABQAMACAOAGQABATgmgBQgigRALgQg");
	this.shape_34.setTransform(53.6183,44.6774);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B54068").s().p("AgFARQgigRALgQQAOABANAEIADABIAEABQAMACAOAGQABASgiAAIgEAAg");
	this.shape_35.setTransform(53.6183,44.6774);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},2).wait(2));

	// mouth
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("AgXgKQAEACAFADQANAFARgBQAUgCAZgJQAPgDAWgJAgXgKQgCBEAhALQADAAADABQAEAAADAAQAUACAHgKQAagbgNgvAAQgBQgFAgAKAnAgWhEQgQAfAYAgAhghFQACAqBHAR");
	this.shape_36.setTransform(53.85,52.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAApIgFAAIgGgBQgigLABhEIAJAFQANAFASgBQgCALAAAMQAAAWAGAaQgGgaAAgWQAAgMACgLQATgCAagIQANAugaAbQgGAIgOAAIgIAAg");
	this.shape_37.setTransform(55.8885,55.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AAnBAQAUAAAGgLQAVgggUgrQAOgFAUgNAgSgIQAKBFAiAEQACAAAEAAQAEAAADgBAgSgIQAFACAFACQANADARgDQABAgAQAkAAWgEQAUgFAYgNAhjg2QAJApBIAFAgZhAQgLAhAcAb");
	this.shape_38.setTransform(55.075,52.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgBAsQgkgFgJhEIAKADQANADASgDQAAAhAPAkIgGABIgFAAgAAKArQgPgkAAghQATgEAXgNQAVArgWAgQgGAKgUABIAAAAg");
	this.shape_39.setTransform(57.9253,55.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_39},{t:this.shape_38}]},2).wait(2));

	// head
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#8A4A01").ss(1,1,1).p("AA8j6QjvgUhUDpQg0CAB9BTQB2BQCngBQB/gBAmhuQAihcgahaQgfhthSg/Qgoghg3gFg");
	this.shape_40.setTransform(57.3576,40.2964);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F89320").s().p("Ai+CuQh9hTA0iAQBUjpDvAUQA3AFAoAhQBSA/AfBtQAaBagiBcQgmBuh/ABIgEAAQikAAh1hPg");
	this.shape_41.setTransform(57.3576,40.2964);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#8A4A01").ss(1,1,1).p("AAOj5QjwASguDyQgfCHCIA/QCCA8ClgbQB9gUAThzQAUhggohVQgvhnhbgxQgtgag3ADg");
	this.shape_42.setTransform(58.0215,39.5958);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F89320").s().p("AinDRQiIg/AfiHQAujyDwgSQA3gDAtAaQBbAxAvBnQAoBVgUBgQgTBzh9AUQgzAIgwAAQhqAAhagpg");
	this.shape_43.setTransform(58.0215,39.5958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_43},{t:this.shape_42}]},2).wait(2));

	// torso
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#8A4A01").ss(1,1,1).p("ABMBFQAph7gohDQhRghhIA2QgsBIA3ChQAAAAABAB");
	this.shape_44.setTransform(60.8337,75.6145);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDEFD3").s().p("AgcBRQgughAahvQAMgiBKARQAoBjgoAsQgYAYgVAAQgLAAgKgGg");
	this.shape_45.setTransform(59.4148,73.4556);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F89320").s().p("AglCOQgFgBgGgCIgGgDIgHgGIgDgDIgBgCQg3ihAshHQBIg2BRAgQAoBEgpB7QgQArgeARIgLAGQgQAIgNAEQgLACgJAAIgHAAgAg+hcQgaBvAuAhQAfARAjgjQAogrgohkQgYgGgSAAQgkAAgIAXg");
	this.shape_46.setTransform(60.8337,76.387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).wait(4));

	// earleftinn
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDEFD3").s().p("AgqBsQgahjAmiEQAIgeAMACQASgDARA0QAbBdACBYQgBBFgoAEIgJABQgkAAgKgtg");
	this.shape_47.setTransform(84.9839,52.299);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(4));

	// earleft
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#8A4A01").ss(1,1,1).p("AB2kSIAwAGQA5ANAqBQIAZA1QBSDwgsCRQgRA0hGgEQgwgDgRg1Qgrh0A0keIgJg8AhVjOIgDguQgehuhpBiQh4DkABBlQABBmArAVQA/AeAjgoQBhh2ARj8IABgDIAAgF");
	this.shape_48.setTransform(60.3931,46.0182);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F89320").s().p("ADxE3QgwgDgRg1Qgrh0A0keIgJg8Ig6hDIAwAGQA5ANAqBQIAZA1QBSDwgsCRQgQAwg+AAIgJAAgAkqC8QgrgVgBhmQgBhlB4jkQBphiAeBuIADAuIAAAGIAAAFIgBADQgRD8hhB2QgUAXgeAAQgVAAgbgNg");
	this.shape_49.setTransform(60.3931,46.0182);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#8A4A01").ss(1,1,1).p("ACUkMIAwAKQA3ASAkBSIAUA4QA/D1g4CNQgWAzhFgKQgwgHgNg2Qggh3BLkZIgFg9Ag8jaIACgtQgWhxhwBaQiKDZgIBlQgIBmApAYQA9AjAnglQBphuAnj6IABgH");
	this.shape_50.setTransform(59.5652,47.5048);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F89320").s().p("ADfFFQgwgHgNg2Qggh3BLkZIgFg9Ig0hHIAwAKQA3ASAkBSIAUA4QA/D1g4CNQgSArgzAAQgLAAgLgCgAkxCeQgpgYAIhmQAIhlCKjZQBwhaAWBxIgCAtIAAAHIgBAHQgnD6hpBuQgUATgaAAQgYAAgegRg");
	this.shape_51.setTransform(59.5652,47.5048);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).to({state:[{t:this.shape_51},{t:this.shape_50}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(58,63.6,37.8,38.199999999999996);
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