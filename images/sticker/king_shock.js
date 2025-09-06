(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.king_shock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Boogaloo'; // Google API font
			mystage.color = '#FF0000'; // Text color
			mystage.shad1 = '#333333'; // Main shadow color
			mystage.shad2 = '#333333'; // Alt shadow color
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

	// eyeoverlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABhALQgFgFABgGQgBgGAFgFQAFgFAHAAQAGAAAGAFQAEAFAAAGQAAAGgEAFQgGAGgGAAQgHAAgFgGgAh4ALQgEgFgBgGQABgGAEgFQAFgFAHAAQAHAAAFAFQAEAFAAAGQAAAGgEAFQgFAGgHAAQgHAAgFgGg");
	this.shape.setTransform(47.15,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABiAoQgIgBgFgHQgEgGACgHQACgIAGgEQAGgEAIABQAHACAFAHQAEAGgBAHQgCAIgHAEQgEADgFAAIgEgBgAhogEQgHgBgFgHQgEgGABgHQACgIAHgFQAGgDAHABQAIACAEAGQAEAGgCAIQgBAHgHAFQgEADgFAAIgEgBg");
	this.shape_1.setTransform(51.2163,37.3108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(16));

	// pupils
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A36B00").s().p("ABcAcQgLgMAAgQQAAgQALgLQAMgMARAAQAQAAAMAMQALALAAAQQAAAQgLAMQgMAMgQAAQgRAAgMgMgAiUAcQgLgMAAgQQAAgQALgLQAMgMARAAQAQAAAMAMQALALAAAQQAAAQgLAMQgMAMgQAAQgRAAgMgMg");
	this.shape_2.setTransform(47.075,40.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A36B00").s().p("ABpBFQgTgFgKgPQgKgQAFgRQAEgRAPgLQAPgJATAEQARAEALAOQAJAQgEARQgEASgPAKQgLAIgNAAIgJgBgAh7ASQgSgEgKgPQgJgQAEgSQAEgSAPgKQAPgJASAEQASAFAKAOQAKAQgEASQgEAQgQALQgKAHgMAAIgLgBg");
	this.shape_3.setTransform(50.975,38.2186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},8).wait(16));

	// brows
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AD1AdQhDhXhjAsAjzAdQBDhXBiAs");
	this.shape_4.setTransform(47.35,30.5667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("ADvBIQgvhjhpAVAjughQBUhHBXBA");
	this.shape_5.setTransform(54.3,28.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5,p:{y:28.783}}]},8).to({state:[{t:this.shape_5,p:{y:27.033}}]},2).wait(14));

	// eyeback
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("ADkAAQAAAkgaAaQgaAagkAAQgkAAgagaQgagaAAgkQAAgjAagaQAagaAkAAQAkAAAaAaQAaAaAAAjgAgzAAQAAAkgaAaQgaAagkAAQgkAAgagaQgagaAAgkQAAgjAagaQAagaAkAAQAkAAAaAaQAaAaAAAjg");
	this.shape_6.setTransform(47.475,40.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABOA+QgagaAAgkQAAgjAagaQAagaAkAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgkAAgagagAjJA+QgagaAAgkQAAgjAagaQAagaAkAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgkAAgagag");
	this.shape_7.setTransform(47.475,40.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgigHQgJAmgiAWQghAWgogJQgngIgVgjQgWghAIgnQAJgoAigWQAigVAnAJQAnAIAWAjQAWAhgJAogADhAzQgJAngiAVQgiAWgogJQgngJgVghQgXgiAJgnQAIgnAjgWQAigVAnAIQAnAJAXAiQAVAhgIAog");
	this.shape_8.setTransform(52.94,39.223);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABsB8QgngJgVghQgXgiAJgnQAIgnAjgWQAigVAnAIQAnAJAXAiQAVAhgIAoQgJAngiAVQgZAQgbAAQgLAAgLgDgAiWBCQgngIgVgjQgWghAIgnQAJgoAigWQAigVAnAJQAnAIAWAjQAWAhgJAoQgJAmgiAWQgYAPgbAAQgLAAgLgCg");
	this.shape_9.setTransform(52.94,39.223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},8).wait(16));

	// mouth
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AghAAIBDAA");
	this.shape_10.setTransform(47.975,58.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AAnAGQgEAagOASQgOASgPgCQgQgCgKgWQgIgVAEgaQAEgbAOgSQAPgSAOADQARADAJAUQAIAVgEAbg");
	this.shape_11.setTransform(48.6866,60.2386);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBCQgQgCgKgWQgIgVAEgaQAEgbAOgSQAPgSAOADQARADAJAUQAIAVgEAbQgEAagOASQgMAQgOAAIgDAAg");
	this.shape_12.setTransform(48.6866,60.2386);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AAnAEQgEATgOAMQgOANgPgBQgQgCgKgPQgIgPAEgSQAEgUAOgMQAPgNAOACQARACAJAOQAIAPgEATg");
	this.shape_13.setTransform(48.6866,60.119);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAvQgQgCgKgPQgIgPAEgSQAEgUAOgMQAPgNAOACQARACAJAOQAIAPgEATQgEATgOAMQgMAMgOAAIgDAAg");
	this.shape_14.setTransform(48.6866,60.119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},8).to({state:[{t:this.shape_14},{t:this.shape_13}]},2).wait(14));

	// noseoverlay
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.647)").s().p("AgPAIQgGgDgBgFQABgDAGgEQAHgDAIAAQAKAAAGADQAGAEAAADQAAAFgGADQgGADgKAAQgIAAgHgDg");
	this.shape_15.setTransform(48.35,47.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.647)").s().p("AgBAKQgJgCgGgEQgGgEABgEQABgEAHgBQAHgCAJACQAJACAFAEQAGADgBAFQgBAEgHACIgGAAIgJgBg");
	this.shape_16.setTransform(51.5495,47.9321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},8).wait(16));

	// nose
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgxAWIAAgDQAAgRAPgKQAPgNATAAQAVAAAPANQAOAKAAARIAAADg");
	this.shape_17.setTransform(47.45,47.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgwAGIAAgDQADgPARgIQARgKAUAFQATAEANAQQALANgEAQIAAAEg");
	this.shape_18.setTransform(50.3047,48.1802);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_18}]},8).wait(16));

	// muzzle
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8E9A9").s().p("AhZBBQgmgbAAgmQAAgmAmgaQAlgcA0AAQA1AAAmAcQAmAagBAmQABAmgmAbQgmAcg1AAQg0AAglgcg");
	this.shape_19.setTransform(47.55,55.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8E9A9").s().p("AgUBsQg0gNgegqQgfgoAJgrQAJgtArgXQAqgWAzANQA0ANAeApQAfAogJAtQgIAsgsAWQgbAPgfAAQgRAAgSgFg");
	this.shape_20.setTransform(49.0335,56.953);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},8).wait(16));

	// headoverlay
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],0.1,-7.4,0,0.1,-7.4,27.8).s().p("AhiDZIgTgOIgRgLIgBgBQjHikCDjCQBNhmBMAdQAaAKAYAYIAGgFQAPgOARgIIADgCIALgFIABAAQBLgcBMBlQCDDBjFCiIgCADIgNAKIgYAQQgqAfg5AAQg4AAgqgfg");
	this.shape_21.setTransform(47.6948,43.2302);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],1.3,-6.5,0,1.3,-6.5,27.8).s().p("Ag6D5Qg2gLgjgnIgPgSIgOgPIgBgBQigjKCriiQBhhTBEAsQAWAQAUAdQADgDAEgBQARgKASgEIAEgCIAMgDIABABQBPgLA0BzQBWDZjjB0IgDABIgOAIQgNAEgOAHQgdAMggAAQgVAAgWgFg");
	this.shape_22.setTransform(52.3019,42.415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},8).wait(16));

	// head
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6BE66").s().p("AhiDZIgTgOIgRgLIgBgBQjHikCDjCQBNhmBMAdQAaAKAYAYIAGgFQAPgOARgIIADgCIALgFIABAAQBLgcBMBlQCDDBjFCiIgCADIgNAKIgYAQQgqAfg5AAQg4AAgqgfg");
	this.shape_23.setTransform(47.6948,43.2302);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F6BE66").s().p("Ag6D5Qg2gLgjgnIgPgSIgOgPIgBgBQigjKCriiQBhhTBEAsQAWAQAUAdQADgDAEgBQARgKASgEIAEgCIAMgDIABABQBPgLA0BzQBWDZjjB0IgDABIgOAIQgNAEgOAHQgdAMggAAQgVAAgWgFg");
	this.shape_24.setTransform(52.3019,42.415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_24}]},8).wait(16));

	// ears
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2AC57").s().p("AC+A+QgXgJgJgYQgJgYAKgZQAJgZAXgMQAXgNAXAKQAXAJAJAXQAJAYgJAYQgKAagXAMQgOAHgNAAQgKAAgJgDgADJgfQgNAHgEAOQgGANAFANQAFANANAFQAMAFAMgIQAMgGAFgOQAGgNgFgNQgFgNgMgFQgGgBgFAAQgHAAgHADgAjrA6QgWgMgKgaQgJgYAIgYQAKgXAWgJQAXgKAXANQAXAMAJAZQAKAZgJAYQgJAYgXAJQgJADgKAAQgNAAgOgHgAjggeQgLAEgFAMQgEAMAEAMQAFANAMAGQALAGALgFQAMgEAEgMQAFgLgFgMQgEgNgMgGQgHgEgHAAQgEAAgFACg");
	this.shape_25.setTransform(47.7436,28.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAE4AD").s().p("ADIAhQgNgFgFgNQgFgNAGgNQAEgOANgGQAMgGANAEQAMAFAFANQAFANgGANQgFAOgMAGQgHAEgHAAQgFAAgFgCgAjgAdQgMgGgFgNQgEgMAEgMQAFgMALgEQAMgEALAFQAMAHAEAMQAFAMgFAMQgEAMgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_26.setTransform(47.8388,28.67);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FAE4AD").s().p("AC7BLQgLgHgCgOQgDgOAJgMQAIgNANgEQAOgCALAGQAKAHADAPQABANgIAMQgIANgMAEIgJABQgJAAgHgFgAjigTQgKgJgCgOQgCgNAHgLQAIgLALgCQAMgBAKAHQALAKABANQACAOgHAKQgGALgNABIgGABQgJAAgHgGg");
	this.shape_27.setTransform(55.2646,29.0883);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2AC57").s().p("ACsBnQgVgOgEgZQgDgaAPgXQAOgVAZgHQAZgIAUAOQAVANAEAZQADAagOAWQgQAXgYAHQgJACgIAAQgQAAgMgIgADJANQgNAEgHANQgJAMACAOQACAOAMAHQAKAIAOgEQANgEAIgNQAIgMgCgNQgCgPgLgHQgIgFgKAAIgHABgAjzAHQgUgPgDgcQgEgaAOgWQAOgVAYgEQAYgEAUARQAUARAEAaQAEAcgPAVQgOAVgXADIgKABQgTAAgQgOgAjWhNQgLACgHALQgHALACANQACAOAJAJQAKAIAMgDQANgBAGgLQAHgKgBgOQgCgNgKgKQgJgGgLAAIgDAAg");
	this.shape_28.setTransform(55.249,28.8967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},8).wait(16));

	// mane
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#834C14").s().p("AiVDyQhoAHgIhuQgjgPgBgtQhXhQBchMQgCgmAfgYQANhhBlgDQAZghArAHQAfgnA3AAQAtAAAgAnQArgHAZAhQBkADANBhQAgAYgCAmQBcBMhXBQQgBAtgkAPQgHBuhogHQg8A/haAAQhZAAg8g/g");
	this.shape_29.setTransform(47.9059,40.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#935E28").s().p("AisEYQh5AIgJiAQgpgQgBg1QhkhcBrhYQgDgsAlgcQAPhwB0gDQAcgnAyAJQAlgtA/AAQA0AAAlAtQAygJAcAnQBzADAQBwQAmAcgEAsQBrBYhlBcQgBA1goAQQgKCAh4gIQhGBIhhAAQhtAAhFhIgAAAEvQBaAAA8g/QBoAIAHhvQAkgOABguQBXhPhchNQACgmgggXQgNhihkgDQgZghgrAIQgggngtgBQg3ABgfAnQgrgIgZAhQhlADgNBiQgfAXACAmQhcBNBXBPQABAuAjAOQAIBvBogIQA8A/BZAAg");
	this.shape_30.setTransform(47.9184,40.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#834C14").s().p("AgvEsQhZgOgyhIQhogKALhuQghgUAGgtQhIhcBng9QAEglAigTQAdheBkANQAegcApANQAlghA2AJQAsAHAaAsQArgBAUAlQBiAUgCBhQAbAdgIAlQBPBZhjBBQgIAtgmAJQgZBshmgYQg3AphBAAQgSAAgSgDg");
	this.shape_31.setTransform(54.5806,40.8271);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#935E28").s().p("AgxFbQhsgSg5hRQh5gMAMh/QgmgYAIg0QhUhqB3hGQAEgsApgWQAhhsBzAQQAigiAwAQQArgmA+AKQA0AJAdAyQAzAAAWAqQBxAWgCBxQAgAhgKArQBbBohyBLQgJAzgrAKQgeB9h1gbQhAAvhIAAQgUAAgUgDgAjsi2QgjATgEAlQhnA9BJBcQgHAtAhAUQgKBuBoAKQAxBIBZAOQBXAOBGg0QBlAYAahsQAlgJAIgtQBjhBhPhZQAIglgbgdQAChhhigUQgTglgsABQgZgsgsgHQg3gJglAhQgogNgfAcQgMgBgLAAQhQAAgZBSg");
	this.shape_32.setTransform(54.5318,41.0404);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},8).wait(16));

	// foot
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2AC57").s().p("AgFApQg9gIgEgWIAAgOQAEguBIAIQBOAMgPAsIgFAOQgJAOghAAQgMAAgPgCg");
	this.shape_33.setTransform(38.1261,85.6199);
	this.shape_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(8).to({_off:false},0).wait(16));

	// bellymiddle
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8E9A9").s().p("AhwB0IAAjMQAAgbAbAAICqAAQAcAAAAAbIAADMg");
	this.shape_34.setTransform(47.45,68.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8E9A9").s().p("Ah/BeIAhjIQAEgbAbAEICoAbQAbAFgEAbIghDIg");
	this.shape_35.setTransform(49.4821,68.4179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},8).wait(16));

	// bellyoverlay
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],0,-15.8,0,15.8).s().p("Ah1CSQgogBAAgsIAAjKQAAgrAogBIDsAAQAnABAAArIAADKQAAAsgnABg");
	this.shape_36.setTransform(47.55,71.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],2.6,-15.6,-2.5,15.5).s().p("ABeCjIjpgmQgngGAHgsIAgjHQAHgsAnAGIDqAmQAmAHgHArIggDHQgGAngeAAIgKgBg");
	this.shape_37.setTransform(49.3256,71.1305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},8).wait(16));

	// belly
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("Ah1AeQgogBAAgrIAAgPIE7AAIAAAPQAAArgnABg");
	this.shape_38.setTransform(47.55,83.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F6BE66").s().p("AidB0IAAi7QAAgsAoAAIDsAAQAnAAAAAsIAAC7g");
	this.shape_39.setTransform(47.55,68.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("ABuAzIjpgmQgngGAHgrIACgPIE3AzIgCANQgHAngeAAIgJgBg");
	this.shape_40.setTransform(47.7467,82.3168);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F6BE66").s().p("AirBXIAfi5QAHgrAnAGIDpAmQAnAGgHAsIgfC4g");
	this.shape_41.setTransform(49.4788,68.4886);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_41},{t:this.shape_40}]},8).wait(16));

	// legs
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990000").s().p("AAJAvQgGg0AdgpIBWAAQAeApgGA0gAiNAvQgGg0AdgpIBWAAQAeApgGA0g");
	this.shape_42.setTransform(47.6086,87.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E2AC57").s().p("AALgDIgCgQICFAAIgCAQQgIAXg3AAQg6AAgIgXgAiLgDIgCgQICFAAIgDAQQgHAXg6AAQg3AAgIgXg");
	this.shape_43.setTransform(47.6125,94.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E2AC57").s().p("AgEAYQg5gJgEgYIAAgQICDAVIgFAPQgIAPgeAAQgMAAgPgCg");
	this.shape_44.setTransform(53.4375,94.6306);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990000").s().p("AhEAiQAEg1AjgjIBUANQAWAsgOA0g");
	this.shape_45.setTransform(53.7067,88.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).to({state:[{t:this.shape_45},{t:this.shape_44}]},8).wait(16));

	// arms
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E2AC57").s().p("ADSBZQgXgHgCglIAAgcQgKg/hOAIQgGhFBkAVQBPAvgKBfQgCAkgeAAQgIAAgKgDgAkDA4QgKhfBPgvQBkgVgGBFQhNgIgLA/IAAAcQgCAlgXAHQgKADgIAAQgdAAgDgkg");
	this.shape_46.setTransform(47.6253,76.6732);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E2AC57").s().p("ADyCMQgXgDgKgkIgFgbQgXg9hKAXQgUhCBmABQBXAeAJBhQAGAqgqAAIgHAAgAjJhBIgbAHQglAGgMgUQgXgqAsgPQBbggBBBDQArBchFAJQgKhMhBAEg");
	this.shape_47.setTransform(46.735,73.4563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46}]}).to({state:[{t:this.shape_47}]},8).wait(16));

	// tailtipoverlay
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#905D2F").s().p("AggAWQgIgWAegBQAfgCACgoQAYAqgbAkQgHAJgKAAQgOAAgVgWg");
	this.shape_48.setTransform(79.6523,80.8945);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#905D2F").s().p("AgjAOQgEgXAfAEQAeADAJgnQAQAsggAhQgIAGgHAAQgRAAgSgcg");
	this.shape_49.setTransform(79.4325,85.8393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_49}]},8).wait(16));

	// tailtip
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6B4421").s().p("AgwAfQgMgiAugCQAwgDgJg3QAwA6goA4QgMANgPAAQgXAAgfghg");
	this.shape_50.setTransform(78.8555,80.0924);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6B4421").s().p("AgzAUQgGgkAtAFQAwAGAAg4QAnA/gyAyQgLAKgMAAQgZAAgcgqg");
	this.shape_51.setTransform(78.7244,84.9615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},8).wait(16));

	// tail
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C6913E").s().p("AgGAxQg1gLgogiIAMg1QBTBpBohGIAAAdQgwAjgtAAIgNgBg");
	this.shape_52.setTransform(67.775,82.4945);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C6913E").s().p("AgPA1QgygTgjgoIAVgzQBBB1Bzg1IgGAdQgqAWgkAAQgRAAgPgFg");
	this.shape_53.setTransform(67.6,84.7035);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52}]}).to({state:[{t:this.shape_53}]},8).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.6,55.6,34.9,41.699999999999996);
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