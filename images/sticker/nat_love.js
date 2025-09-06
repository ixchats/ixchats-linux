(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.nat_love = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.mydone)
		{
			this.mydone	= true;
			
			var mystage = this.mysatage = {};
			mystage.font = 'Permanent Marker'; // Google API font
			mystage.color = '#bc2e1e'; // Text color
			mystage.shad1 = '#378ab4'; // Main shadow color aka $1
			mystage.shad2 = '#5dabcd'; // Alt shadow color aka $2
			//mystage.shadow = '-1px -1px 0px $2, 2px 2px 0 $1, 2px -2px 0 $1, -2px 2px 0 $1, -2px -2px 0 $1, 2px 0px 0 $1, 0px 2px 0 $1, -2px 0px 0 $1, 0px -2px 0 $1'; // shadow
			mystage.shadow = '0 1px 0px $1, 1px 0 0px $2, 1px 2px 1px $1, 2px 1px 1px $2, 2px 3px 2px $1';
			//text-shadow: -1px -1px 0px #E97178, 2px 2px 0 #E34C55, 2px -2px 0 #E34C55, -2px 2px 0 #E34C55, -2px -2px 0 #E34C55, 2px 0px 0 #E34C55, 0px 2px 0 #E34C55, -2px 0px 0 #E34C55, 0px -2px 0 #E34C55;
			mystage.spacing =  '0.05'; // letter spacing in em's
			mystage.transform = 'rotate(-5deg)'; // transform
			//mystage.texty = 70; // text y offset in px (for text at bottom)
		
			StickerInit(mystage);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#423932").ss(1,1,1).p("AhQBxQDJgGAFh+QAAhKhQASQgeAKgNAdQgThPhKAEQgxAIAUBIQAJAiAaAwQAQAegMAgg");
	this.shape.setTransform(79.3454,49.4904);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D11111").s().p("AhUAzQgagwgJgiQgUhIAxgIQBKgEATBPQANgdAegKQBQgSAABKQgFB+jJAGQAMgggQgeg");
	this.shape_1.setTransform(79.3454,49.4904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#423932").ss(1,1,1).p("AhwCcQEXgIAHiuQAAhnhuAZQgqAOgSAoQgahuhnAGQhDALAaBkQANAvAkBDQAWApgRAsg");
	this.shape_2.setTransform(80.6245,44.9869);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D11111").s().p("Ah1BHQgkhDgNgvQgahkBDgLQBngGAaBuQASgoAqgOQBugZAABnQgHCukXAIQARgsgWgpg");
	this.shape_3.setTransform(80.6245,44.9869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// Layer_12
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#423932").ss(1,1,1).p("AC6AiQAIATgigDIgtAAQglgHgbghIjYgHQgVgHgGgUQAKgXAfgCIC5ATQAqgFAaAHQAVgPAUAEQAOADghAZQAKAFAXgBQAwABgQAVIgBAAQAKADgMAQgAClAOIgbAAAClAOIAVAAQACAAAAABgACRAiIApAA");
	this.shape_4.setTransform(53.0157,65.5399);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE1C9").s().p("ACgAyIgtAAQglgHgbghIjYgHQgVgHgGgUQAKgXAfgCIC5ATQAqgFAaAHQAVgPAUAEQAOADghAZQAKAFAXgBQAwABgQAVIgBAAIgCgBIgVAAIgbAAIAbAAIAXABQAKADgMAQQAHAQgaAAIgHAAgAC6AiIgpAAgAClAOIAVAAIACABgAClAOg");
	this.shape_5.setTransform(53.0157,65.5399);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("ACkAiQAHATgegDIgoAAQghgHgXghIi+gHQgTgHgFgUQAJgXAbgCICjATQAlgFAXAHQASgPASAEQAMADgdAZQAJAFAUgBQAqABgNAVIgBAAQAIADgKAQgACRAOIATAAQABAAABABIgVgBIgYAAAB/AiIAlAA");
	this.shape_6.setTransform(50.6642,65.5399);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE1C9").s().p("ACNAyIgoAAQghgHgXghIi+gHQgTgHgFgUQAJgXAbgCICjATQAlgFAXAHQASgPASAEQAMADgdAZQAJAFAUgBQAqABgNAVIgBAAIgCgBIgTAAIAVABQAIADgKAQQAGAQgXAAIgGAAgACkAiIglAAgACRAOIgYAAgACRAOIATAAIACABg");
	this.shape_7.setTransform(50.6642,65.5399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).wait(2));

	// Layer_9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.749)").s().p("AgpgIQgOgdAVgKQAVgMANAjQAGgjAXALQAYALgHAcQgFAbghAiQgmghgLgbg");
	this.shape_8.setTransform(48.7043,65.242);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

	// Layer_6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#423932").ss(1.5,1,1).p("AgngTQgCAQALAMQAKANARACQAPACANgLQANgKACgPQAAgDAAgCQgpAIglgRQgBACAAADg");
	this.shape_9.setTransform(49.934,46.6654);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAYQgRgCgKgNQgLgMACgQIABgFQAlARApgIIAAAFQgCAPgNAKQgLAKgNAAIgEgBg");
	this.shape_10.setTransform(49.934,46.6654);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#423932").ss(1.5,1,1).p("Ag3gbQgEAXAPASQAPASAYADQAWADASgQQATgOACgWQAAgEABgDQg8AMg0gZQAAADAAAEg");
	this.shape_11.setTransform(50,46.6993);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAjQgYgDgPgSQgOgSADgXIAAgHQA0AZA8gMIgBAHQgDAWgSAOQgPANgTAAIgGAAg");
	this.shape_12.setTransform(50,46.6993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},2).wait(2));

	// Layer_7
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.447)").s().p("ABGAkQgEAAgDgKQgEgKAAgOQAAgNAEgKQADgKAFAAQAEAAAEAKQACAKAAANQAAAOgDAKQgDAKgEAAIgBAAgAhKAgQgDgBgCgKQgDgLACgNQACgOAFgJQAEgKAEABQAEAAACALQACAKgBAOQgCANgEAKQgFAJgEAAIgBAAg");
	this.shape_13.setTransform(50.96,36.0749);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(4));

	// Layer_2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#423932").ss(1,1,1).p("ACZkqIAAgUAhwgqIgBgFAhCh3QghAHgZAIQgbAigBAZQAGASADAGQAFAMARABAhVDnIAAgqIAAjcIgkAXQAJgPAAgTIgWAMABlDjIAgBIQAHARhNAAQhhAHhVgKIAihSQBjgoBXAkgAANhuQAzAAAiA0IAAAAQgFAKgFANQgIAWgMAUIgBgFIAAgBIgGgfIgLgbAgwiAIAAgMIApAGIAAAQIAAAPQAQAOAIgDQgBgLgDgHAgwiAIgTAAQAAAFABAEAgHhnIgGgEQgQAZgKgFQgYgHgDgZAgNhrIgjgVAgHh2QAOgEAGAMABlC9IAAAmABig6IADD3ABEAHIAhC2");
	this.shape_14.setTransform(48.675,67.5191);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.749)").s().p("AhdgJQBkgsBXAsIAAAmQhXgjhkAmg");
	this.shape_15.setTransform(49.4,87.3875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252525").s().p("Ag7CfIAAjcIgkAYQAJgPAAgSIAAgCIgWAMIAWgMIAAACQAAASgJAPQgRgCgFgMQgDgGgGgSQACgZAagiQAZgIAhgHIgBgJIAUAAIAhAWIAAAAIgCADIgBABIAAAAIgBABIgBACQgIAMgHABIgBAAIAAAAIgEAAQgYgIgDgZQADAZAYAIIAEAAIAAAAIABAAQAHgBAIgMIABgCIABgBIAAAAIABgBIACgDIAAAAIAGADIAAgPQAQgEAFAMQADAIABAKIgDABIAAAAIgDgBQgFgBgGgEIgBAAIgFgFIgCgBIACABIAFAFIABAAQAGAEAFABIADABIAAAAIADgBQgBgKgDgIQAzABAjAzIAAAAIgKAYQgJAVgLAVIgBgFIgBgBIgFggIgMgbIAMAbIAFAgIABABIABAFIAgC1QhXgshjAsgAhWhIIgBgFgAhfglIAAAAg");
	this.shape_16.setTransform(46.05,70.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CD8021").s().p("Ah+AwIAihRQBjgnBXAkIAgBHQAHAQhNAAQgoADglAAQg3AAgygGg");
	this.shape_17.setTransform(49.354,93.9608);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B99673").s().p("AAOAPIghgVIAAgLIAnAFIAAAPIAAAPg");
	this.shape_18.setTransform(45.85,55.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEE1C9").s().p("AgPg5QALgVAIgWIAKgXIACD3g");
	this.shape_19.setTransform(57.125,74.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#423932").ss(1,1,1).p("ACZkqIAAgUAhwgqIgBgFAhCh3QghAHgZAIQgbAigBAZQAGASADAGQAFAMARABAhVDnIAAgqIAAjcIgkAXQAJgPAAgTIgWAMABlDjIAgBIQAHARhNAAQhhAHhVgKIAihSQBjgoBXAkgAANhuQAzAAAiA0IAAAAQgFAKgFANQgIAWgMAUIgBgFIAAgBIgGgfIgLgbAgwiAIAAgMIApAGIAAAQIAAAPQAQAOAIgDQgBgLgDgHAgwiAIgTAAQAAAFABAEAgHhnIgGgEIgjgVAgNhrQgQAZgKgFQgYgHgDgZAgHh2QAOgEAGAMABlC9IAAAmABig6IADD3ABEAHIAhC2");
	this.shape_20.setTransform(48.675,67.5191);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#252525").s().p("Ag7CfIAAjcIgkAYQAJgPAAgSIAAgCIgWAMIAWgMIAAACQAAASgJAPQgRgCgFgMQgDgGgGgSQACgZAagiQAZgIAhgHIgBgJIAUAAIAhAWIAGADIABABIABAAIAFAFIABAAQAGAEAFABIADABIAAAAIADgBQgBgKgDgIQAzABAjAzIAAAAIgKAYQgJAVgLAVIgBgFIgBgBIgFggIgMgbIAMAbIAFAgIABABIABAFIAgC1QhXgshjAsgAhWhIIgBgFgAgIh0QAHgBAIgMIABgCIABgBIAAAAIABgBIACgDIgCADIgBABIAAAAIgBABIgBACQgIAMgHABIgBAAIAAAAIgEAAQgYgIgDgZQADAZAYAIIAEAAIAAAAIABAAgAhfglIAAAAgAAlh6QgFgBgGgEIgBAAIgFgFIgBAAIgBgBIAAgPQAQgEAFAMQADAIABAKIgDABIAAAAIgDgBg");
	this.shape_21.setTransform(46.05,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_21},{t:this.shape_15},{t:this.shape_17},{t:this.shape_18},{t:this.shape_19},{t:this.shape_20}]},2).wait(2));

	// Layer_8
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1.5,1,1).p("ACAATQgmgwgvAdAh/AMQAmgzAwAj");
	this.shape_22.setTransform(50.525,26.5299);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(2).to({y:25.5299},0).wait(2));

	// Layer_5
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("ABwApIAJgKQABg7gygIQgGAEgFAGAhvAhIgJgKQAEg8AygDQAGADAEAH");
	this.shape_23.setTransform(50.526,33.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABaAlQADgJABgNQAFgvgmgGQAFgGAGgEQAyAIgBA7IgJAKIgdAZQAEgFADgMgAhvAVIgJgKQAEg9AygDQAGADAEAIQgnADACAvQAAAOACAJQADAMAEAEg");
	this.shape_24.setTransform(50.526,34.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#112E33").s().p("AAyAfIgCgLQgDgjAQgUQAmAFgFAvQgBAOgDAJQgTgSgVAJgAhdAKQgCguAngDQAPAVgHAjIgCAKQgUgLgVASQgCgKAAgOg");
	this.shape_25.setTransform(50.546,34.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#21DBD3").s().p("ABJASQgQgDgGgZQAVgJATATQgDAKgEAFIgDACQgCACgDAAIgDgBgAhRAKIgCgBQgEgFgDgKQAVgSATALQgHAYgPACIgCAAQgEAAgDgDg");
	this.shape_26.setTransform(50.45,38.4914);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_26},{t:this.shape_23}]},2).wait(2));

	// Layer_10
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9999").s().p("ABmAnQgRgEgLgMQgLgLABgMQACgNAOgGQANgFARAEQASAEALALQALAMgBAMQgDANgNAGQgIADgJAAQgGAAgIgCgAhtATQgSgBgLgJQgLgJACgMQABgMAOgJQANgIATABQASAAALAKQALAJgCANQgBAMgOAHQgNAIgRAAIgCAAg");
	this.shape_27.setTransform(49.5503,43.1037);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(4));

	// Layer_3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#423932").ss(1,1,1).p("AjnDFQADA4BpANQBvAKCcA/IgHhGQAYAYArgFQgbgYAJgiQAYAiA0gEQAlAOghBDQAKAAAKgBQACAAABAAQBPgJAShDQAWhOh5g2QgjgOAAgiQBAAmAsgsQAegiAeAZQADgMgEgVQgNhEh0AfQhYAWgYg+IAZg1IgeAJIAAAAIgBAAIABAAACFjAIgIgGIgVgiIgDAZQg4gZg4AEIgbgeIgEAcQgrAFghAMIgBAhIgIDLIgCAgQgogbgWgcQgLgOgIgOACyicIgtgkQACACABADQAIAOAGAPQAQAkAGAlIgBgBQAAABAAAAQABAKAAAKQAAAigQAcQgFAHgHAJIgLA0IgGAYIgRgsQgBABgCABQgFADgGADQhUAshwg6QgOgHgNgJACyicIAPAKQg6jzjcA+QgDABgEACQheAhgnBFQgcAxgCBBIgcATIATAWQiQADgMBvQgBAtA6AZQBAAegVA0QgWA3BSAUQgEgqAagbQAEgEADgEQATgZghgfQgPgPgJgMQgXgfATgRACyicIgFBHAh2jVQgCAAgBABQgMAEgKAFACQANQgNASgVAO");
	this.shape_28.setTransform(48.1634,46.9459);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AF9885").s().p("AiGAcIABggQAhgMArgFIAEgcIAbAeQA4gEA4AYIADgYIAVAhIAIAGIADAFQAIAOAGAPQiGg/iHApg");
	this.shape_29.setTransform(49.675,26.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#54355F").s().p("AD1BaQg0AEgYgiQgJAiAbAYQgrAFgZgYIAHBGQibhAhvgJQhpgNgDg4QASgZghgeQgPgPgJgMQA+gcAQhXQAXAdAoAaIABgfQANAIAPAIQBwA6BUgsIALgHIADgBIAQAsIAGgZQDiDGhGBNIgCAAIgUABQAghDgkgOg");
	this.shape_30.setTransform(49.9187,63.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A76DBD").s().p("ACFBBIALgzIgLAzIgGAZIgRgsQAVgPANgRIAMgRQAQgcAAghQAAgKgBgKIACAAIAAgBIAegIIgZA1QAYA+BYgWQB0gfANBDQAEAVgDANQgegageAjQgsArhAglQAAAhAjAPQB5A2gWBOQgSBChPAJQBFhMjhjHgAlADHQAVg0hAgdQg6gaABgsQAMhvCQgDIgTgXIAcgSQAChCAcgwQAnhFBegiIAHgDQDcg+A6D0IgPgLIgtgjIgIgGIgVgiIgDAZQg4gag4AEIgbgeIgEAdQgrAFghAMIgDAAIgWAKIAWgKIADAAIgBAgIgIDMIgCAfQgogbgWgcQgLgOgIgOQAIAOALAOQgQBXg+AbQgMgQAAgNQAAgLAIgIQgIAIAAALQAAANAMAQQAJAMAPAPQAhAfgTAaIgHAHQgaAbAEAqQhSgUAWg3gACshVQgGglgQgjQgGgPgIgPIgDgEIAtAjIgFBHgAh2jUg");
	this.shape_31.setTransform(48.1634,46.8709);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEE1C9").s().p("Ah6BmQgOgHgNgJIAIjLQCIgqCFBAQAPAkAHAlIAAAAIgCAAIABgBIABABIgBgBIgBABQACAKgBAKQABAhgQAcIgMARQgNASgVAOIgDABIgLAHQglATgpAAQg2AAhAghg");
	this.shape_32.setTransform(50.4,40.6497);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A56137").s().p("AAAAAIAAAAIAAAAg");
	this.shape_33.setTransform(65.425,38.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#423932").ss(1,1,1).p("AjnDFQADA4BpANQBvAKCcA/IgHhGQAYAYArgFQgbgYAJgiQAYAiA0gEQAlAOghBDQAKAAAKgBQACAAABAAQBPgJAShDQAWhOh5g2QgjgOAAgiQBAAmAsgsQAegiAeAZQADgMgEgVQgNhEh0AfQhYAWgYg+IAZg1IgeAJACFjAIgIgGIgVgiIgDAZQg4gZg4AEIgbgeIgEAcQgrAFghAMIgBAhIgIDLIgCAgQgogbgWgcQgLgOgIgOACyicIgtgkQACACABADQAIAOAGAPQAQAkAGAlIABAAIAAAAIgBAAIgBgBQAAABAAAAQABAKAAAKQAAAigQAcQgFAHgHAJIgLA0IgGAYIgRgsQgBABgCABQgFADgGADQhUAshwg6QgOgHgNgJACyicIAPAKQg6jzjcA+QgDABgEACQheAhgnBFQgcAxgCBBIgcATIATAWQiQADgMBvQgBAtA6AZQBAAegVA0QgWA3BSAUQgEgqAagbQAEgEADgEQATgZghgfQgPgPgJgMQgXgfATgRACyicIgFBHAh2jVQgCAAgBABQgMAEgKAFACQANQgNASgVAO");
	this.shape_34.setTransform(48.1634,46.9459);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_31},{t:this.shape_29},{t:this.shape_33},{t:this.shape_32},{t:this.shape_30},{t:this.shape_34}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.1,61.9,43.99999999999999,38.50000000000001);
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