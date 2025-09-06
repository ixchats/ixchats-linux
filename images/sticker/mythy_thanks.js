(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.mythy_thanks = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6EC1B").s().p("AD2ErIgZARIAJgcIgXgTIAdgBIAKgdIALAdIAeABIgYATIAIAcgADtheIgZASIAJgdIgYgTIAeAAIAKgdIAKAdIAfAAIgZATIAJAdgAj2kAIgYASIAIgdIgYgSIAfgBIAJgdIALAdIAeABIgYASIAIAdg");
	this.shape.setTransform(70.95,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4FBDC1").s().p("AAAAVIgYASIAJgeIgYgRIAegBIAJgdIAKAdIAeABIgXARIAIAeg");
	this.shape_1.setTransform(19.325,40.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E20376").s().p("AkqEFIgYARIAIgdIgYgTIAegBIAKgcIALAcIAeABIgYATIAIAdgAErjZIgaARIAJgdIgYgSIAfgBIAKgdIAKAdIAeABIgYASIAJAdg");
	this.shape_2.setTransform(48.7,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6EC1B").s().p("Aj6B4IgUAOIAHgYIgVgQIAagBIAIgYIAJAYIAaABIgUAQIAHAYgAD7hTIgWAPIAIgZIgUgPIAZgBIAJgYIAIAYIAaABIgVAPIAIAZg");
	this.shape_3.setTransform(50.025,31.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E20376").s().p("AAAASIgUAPIAHgZIgUgOIAZgBIAIgZIAJAZIAZABIgUAOIAHAZg");
	this.shape_4.setTransform(89.525,66.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4FBDC1").s().p("ADMBWIgVAPIAHgZIgTgQIAZAAIAIgZIAIAZIAbAAIgVAQIAIAZgAjMgxIgVANIAHgYIgUgPIAagBIAIgYIAJAYIAZABIgUAPIAHAYg");
	this.shape_5.setTransform(68.275,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).wait(2));

	// glow
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(2,1,1).p("AGShIIh4BBAFFCeIBhAAAEdDdIBRAlAAZj/IAIBpADEgmIBHg6ADvj8IhWClAi/kLIAlBCAlkhlICgBwAmlCHICxAHAjXh2IBSBhAkqApIA7AWAihEMIA1guAEHBbIBQgg");
	this.shape_6.setTransform(54.125,43.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(2,1,1).p("AFUg+IhHAlAETCFIBSAAAAVjYIACA0ADKjWIg/B0AC3grIArgnAkthWICHBeAj8AhIAdAMAlkBxIBgAGAi1hSIA4AsADeBMIBEgbAD/DCIA3AX");
	this.shape_7.setTransform(54.425,43.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},2).wait(2));

	// rightarm
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(2,1,1).p("AgShzQBRAngJDAIhsAAIAAiJ");
	this.shape_8.setTransform(74.6243,83.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2B0IAAiJIAkheQBRAngJDAg");
	this.shape_9.setTransform(74.6243,83.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{y:83.775}},{t:this.shape_8,p:{y:83.775}}]}).to({state:[{t:this.shape_9,p:{y:83.975}},{t:this.shape_8,p:{y:83.975}}]},2).wait(2));

	// tophair
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgfAgQAVgJAOgPQAfgbBIAZQiHBQhOgxQAsAHAfgMQgwgLgJgcQAeAGAjgEQAegEAjgLQAlgLAcAlAgXgFQgkgPACgjQAoAcA2gOQAtgOAZA9");
	this.shape_10.setTransform(47.725,31.552);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3F8DB9").s().p("AARAFQgiALgfADQgkgPACgiQApAcA1gOQAugNAZA8QgdglglALg");
	this.shape_11.setTransform(50.1697,29.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C183D1").s().p("AhhgLQAeAGAigEQAggEAigLQAkgLAdAkQhIgYgfAaQgOAPgVAJQgwgKgJgcg");
	this.shape_12.setTransform(48.65,32.0003);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E9A8FD").s().p("AhqANQAsAGAfgMQAVgIAOgPQAfgbBIAZQhVAxg9AAQgmAAgdgSg");
	this.shape_13.setTransform(47.725,34.0386);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C183D1").s().p("AhhgLQAeAFAigDQAggEAigLQAkgLAdAkQhIgYgfAbQgOAPgVAIQgwgKgJgcg");
	this.shape_14.setTransform(48.65,32.2003);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F8DB9").s().p("AARAEQgiALgfAFQgkgQACgiQApAdA1gPQAugNAZA8QgdgkglAJg");
	this.shape_15.setTransform(50.1697,29.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{y:34.0386}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:31.552}}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{y:34.2386}},{t:this.shape_10,p:{y:31.752}}]},2).wait(2));

	// horn
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgqgbQAIABAHABQAKAAALgBIg6hLIAWBKIAOAuIAMApIAMApQAWAEAQgGQAXgHAIgbIgFgGIgggpAgQA8QAQAGASAAQAUAAAWgHAgcATQAMADANAAQAPAAAQgEIgigs");
	this.shape_16.setTransform(48.675,24.6342);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEC489").s().p("AALBlIgLgpQAPAGASAAQgSAAgPgGIgNgpQANADAMAAIAVAsIARAhQgKADgLAAQgJAAgJgBgAgNATIgOguIAQACIAXAvQgMAAgNgDgAgbgbIgWhKIAmBMIgQgCg");
	this.shape_17.setTransform(47.125,24.6342);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4E0AB").s().p("AASBEQAUgBAWgHQgWAHgUABIgVgtIgYgvIglhMIA6BLIgQABIgFAAIAFAAIAQgBIAiAtIgCAAIgCABIgBAAIgMACIgBAAIgJAAIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAIAJAAIABAAIAMgCIABAAIACgBIACAAIAgAoIAFAHQgIAagXAIgAgGgZg");
	this.shape_18.setTransform(48.675,24.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18,p:{y:24.475}},{t:this.shape_17,p:{y:24.6342}},{t:this.shape_16,p:{y:24.6342}}]}).to({state:[{t:this.shape_18,p:{y:24.675}},{t:this.shape_17,p:{y:24.8342}},{t:this.shape_16,p:{y:24.8342}}]},2).wait(2));

	// eye
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").ss(2,1,1).p("AAOAOQApg4A1A4AhrAOQAig4ArA4");
	this.shape_19.setTransform(52.125,42.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(2).to({y:42.6625},0).wait(2));

	// nostrils
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAmAOQgFgDAAgGQAAgFAFgFQADgGAGgCQAGgCAEACQAEADAAAGQAAAFgEAFQgEAGgGACIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAguAOQgGgCgEgGQgEgFAAgFQAAgGAEgDQAEgCAGACQAGACAEAGQAEAFAAAFQAAAGgEADQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFgBg");
	this.shape_20.setTransform(39.8,53.3944);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(2).to({y:53.5944},0).wait(2));

	// head
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#9999CC").ss(2,1,1).p("AglAVQA8AEAPgu");
	this.shape_21.setTransform(43.925,58.4157);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CCCCCC").ss(2,1,1).p("ADEBeQgShYgShBQggh0h0AUQg1AJgmBJIgpBSQgwgUgTAuQgZBCA3AcQAVAKAUgCQArAnA5ggQAMgNAOgIQAbgPAiAFQAngCASgTQAQgSgEgk");
	this.shape_22.setTransform(51.8618,46.8614);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ah0CJIABAAIAAAAIAIAAIAAAAIAAAAQA0AAAOgpIAAgCIAAACQgOApg0AAIAAAAIAAAAIgIAAIAAAAIgBAAQgUACgVgKQg3gcAZhCQATguAwAUIAphSQAmhJA1gJQB0gUAgB0QASBBASBYQgkANgggPQANgPAAgaIgBgNIABANQAAAagNAPQgSATgnACQgigFgbAPQgOAIgMANQgaAPgWAAQgcAAgYgWgAh0CJIAAAAg");
	this.shape_23.setTransform(51.8618,46.8614);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ah0CJIABAAIAAAAIAIAAIAAAAIABAAQAzAAAOgpIAAgBIAAgBIAAABIAAABQgOApgzAAIgBAAIAAAAIgIAAIAAAAIgBAAQgUACgVgKQg3gcAZhCQATguAwAUIAphSQAmhJA1gJQB0gUAgB0QASBBASBYQgkANgggPQANgPAAgaIgBgNIABANQAAAagNAPQgSATgnACQgigFgbAPQgOAIgMANQgaAPgWAAQgcAAgYgWgAh0CJIAAAAg");
	this.shape_24.setTransform(51.8618,47.0614);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22,p:{y:46.8614}},{t:this.shape_21,p:{y:58.4157}}]}).to({state:[{t:this.shape_24},{t:this.shape_22,p:{y:47.0614}},{t:this.shape_21,p:{y:58.6157}}]},2).wait(2));

	// ears
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAxAbQAHhPBDgPQAaBOg6AwgAgiAZQgbhLhFAEQgGBSBIAgg");
	this.shape_25.setTransform(53.7554,29.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiCguQBFgEAbBLIgeArQhIggAGhSgAAxAbQAHhPBDgPQAaBOg6Awg");
	this.shape_26.setTransform(53.7554,29.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26,p:{y:29.125}},{t:this.shape_25,p:{y:29.125}}]}).to({state:[{t:this.shape_26,p:{y:29.325}},{t:this.shape_25,p:{y:29.325}}]},2).wait(2));

	// body
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CCCCCC").ss(2,1,1).p("AhOiAQAyBggfBfQhSAmgHB4IA0AAIDtAAQAWhbgjhpQgEhRgMhEQgCgRgDgQQhOiKhrCng");
	this.shape_27.setTransform(60.7283,72.0855);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DBDBDB").s().p("AiCDdQAIh4BRgmQAghfgyhgQBrinBOCKIAFAhQiLAKAIBSQANBAgZAqQg9A9gFBWg");
	this.shape_28.setTransform(58.875,72.0855);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah6CtQAFhVA8g+QAbgpgPhBQgIhSCLgKQAMBEAEBTQAjBngWBbg");
	this.shape_29.setTransform(63.3283,76.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah6CtQAFhWA8g8QAbgqgPhAQgIhSCLgLQAMBEAEBSQAjBogWBbg");
	this.shape_30.setTransform(63.3283,77.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28,p:{y:72.0855}},{t:this.shape_27,p:{y:72.0855}}]}).to({state:[{t:this.shape_28,p:{y:72.2855}},{t:this.shape_30},{t:this.shape_27,p:{y:72.2855}}]},2).wait(2));

	// sidehair
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("ABVDCQAQAYAEAfQAJAUAoAHQgeAWgygPQgThbg5gZQgBgRgCgQQgIhDgLg3QA9AnANAeQAKAUgCAWQAJApBBANQgIAQgnABgAg1hfQgXg9gegjIgRgkQBpAvAYA2QAHAOAAAPQALA1BXATQgaASgxgJQAKAWALAbQAPAlAsAIQgnARgbgOAh7jjIgeg9QBqAVAiBHQARAZA9gZQASAvhNAXAgYAMQgMg8gRgvQBHArASAkAgFCGQBGAeAUAe");
	this.shape_31.setTransform(73.325,61.6411);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5FA2AB").s().p("AAABHQgShag6gZIgDghQBHAfATAdQAQAXAEAfQAJAVAoAGQgSAOgYAAQgSAAgUgHg");
	this.shape_32.setTransform(80.725,82.7661);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7AED6C").s().p("Ag7AfQgHhCgMg3QA+AnAOAeQAIAUgBAVQAJApBBANQgJAQgnABQgUgehGgeg");
	this.shape_33.setTransform(78.675,71.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E5F05E").s().p("AATBVQgOgeg8gmQgMg8gRgvQBHArARAkIAWAwQAPAmAsAIQgVAIgSAAQgPAAgMgGg");
	this.shape_34.setTransform(76.45,61.1963);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FAD46A").s().p("AAqBoQgSgkhGgrQgXg8gegjIgSgkQBpAvAYA1QAIAOAAAPQAKA1BYATQgSAMgbAAQgOAAgRgDg");
	this.shape_35.setTransform(72.675,49.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F87A4F").s().p("AhQgTIgeg9QBqAVAhBGQASAZA9gZQASAvhNAXQgZg2hogug");
	this.shape_36.setTransform(69.0283,40.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAD46A").s().p("AAqBoQgSgkhGgrQgXg8gegjIgSgkQBpAvAYA2QAIANAAAPQAKA1BYATQgSAMgbAAQgOAAgRgDg");
	this.shape_37.setTransform(72.675,49.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36,p:{y:40.825}},{t:this.shape_35},{t:this.shape_34,p:{y:61.1963}},{t:this.shape_33,p:{y:71.925}},{t:this.shape_32,p:{y:82.7661}},{t:this.shape_31,p:{y:61.6411}}]}).to({state:[{t:this.shape_32,p:{y:82.9661}},{t:this.shape_33,p:{y:72.125}},{t:this.shape_36,p:{y:41.025}},{t:this.shape_37},{t:this.shape_34,p:{y:61.3963}},{t:this.shape_31,p:{y:61.8411}}]},2).wait(2));

	// hand
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#690505").ss(2,1,1).p("ABSATQAGgkgIgXQgJgYgVAEQgOAKgEAPQhAhDgsBAQgjA5B4AxQA+AOALg/g");
	this.shape_38.setTransform(27.7219,73.8433);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9D4A4F").s().p("AAJBEQh4gxAjg5QAshABABDQAEgPAOgKQAVgEAJAYQAIAXgGAkQgJAzgsAAQgJAAgLgCg");
	this.shape_39.setTransform(27.7219,73.8433);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#690505").ss(2,1,1).p("ABHAmQAPgjgCgYQgDgZgWgBQgPAHgIANQgvhQg5AzQgwAxBqBLQA4AcAZg6g");
	this.shape_40.setTransform(29.6698,66.8991);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9D4A4F").s().p("AgKBEQhqhLAwgxQA5gzAvBQQAIgNAPgHQAWABADAZQACAYgPAjQgRAngfAAQgQAAgRgJg");
	this.shape_41.setTransform(29.6698,66.8991);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_41},{t:this.shape_40}]},2).wait(2));

	// arm
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CCCCCC").ss(2,1,1).p("AB9gxQiABHhkhWIgVA7QBRBaBsgZQBEgigIhLg");
	this.shape_42.setTransform(43.1469,79.6194);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ah8gFIAVg7QBkBWCAhHQAIBLhEAiQgYAFgWAAQhQAAg/hGg");
	this.shape_43.setTransform(43.1469,79.6194);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CCCCCC").ss(2,1,1).p("AB/gLQhcA2h+h7IgjA1QA6BqBuABQBLgQAKhLg");
	this.shape_44.setTransform(43.525,75.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ah+gbIAjg1QB+B7Bcg2QgKBLhLAQQhuAAg6hrg");
	this.shape_45.setTransform(43.525,75.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).to({state:[{t:this.shape_45},{t:this.shape_44}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.9,60.8,38.800000000000004,35.8);
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