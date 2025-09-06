(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.mythy_hangon = function(mode,startPosition,loop) {
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

	// hand
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#690505").ss(2,1,1).p("Aiig1QAVAEASgKQAXgFgDAUQgEALgLAEQA4AhgkAoQghAhg0hKQgTgmAogSgACkgrQgUACgRgKQgWgIABAVQADALAMAFQg7AeAiApQAeAkA5hGQAWgmgpgUg");
	this.shape.setTransform(50.8953,58.7723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D4A4F").s().p("ABgAxQgigpA7geQgMgFgDgLQgBgVAWAIQARAKAUgCQApAUgWAmQgmAugaAAQgNAAgKgMgAi3ADQgTgmAogSQAVAEASgKQAXgFgDAUQgEALgLAEQA4AhgkAoQgKAKgMAAQgbAAgkgzg");
	this.shape_1.setTransform(50.8953,58.7723);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{y:58.7723}},{t:this.shape,p:{y:58.7723}}]}).to({state:[{t:this.shape_1,p:{y:58.7223}},{t:this.shape,p:{y:58.7223}}]},2).wait(2));

	// clouds
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("AFmhCQgygmg6AvQgigIgQAiQgqALAIAkQAEAaAsAIQAdAzBLgaQA9AQAQgnQA2gIgPgwQgKgZgnABQgKgZgRgNgAlkhCQAygmA5AvQAigIAQAiQArALgIAkQgFAagsAIQgdAzhLgaQg8AQgRgnQg2gIAPgwQAKgZAoABQAJgZASgNg");
	this.shape_2.setTransform(50.175,86.421);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADWAyQgsgIgEgaQgIgkAqgLQAQgiAiAIQA6gvAyAmQARANAKAZQAngBAKAZQAPAwg2AIQgQAng9gQQgZAJgVAAQgnAAgTgigAk9BLQg8AQgRgnQg2gIAPgwQAKgZAoABQAJgZASgNQAygmA5AvQAigIAQAiQArALgIAkQgFAagsAIQgTAignAAQgUAAgagJg");
	this.shape_3.setTransform(50.175,86.421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{y:86.421}},{t:this.shape_2,p:{y:86.421}}]}).to({state:[{t:this.shape_3,p:{y:86.371}},{t:this.shape_2,p:{y:86.371}}]},2).wait(2));

	// tophair
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAYAYQgPgGgLgMQgYgUg4ATAASgDQAdgMgCgbQgfAVgpgKQgkgLgTAvAASgDQgXgEgbgIQgcgIgWAcQBoA+A9gmQgiAFgZgKQAmgHAHgWQgYAFgbgDg");
	this.shape_4.setTransform(55.725,32.122);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F8DB9").s().p("AgIgMQApAKAfgVQACAagdAMQgYgDgagJQgcgHgWAcQATguAkAKg");
	this.shape_5.setTransform(53.8316,30.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C183D1").s().p("AAEACQgXgUg4ATQAWgcAcAJQAaAIAYADQAbADAYgEQgHAVgmAIQgPgHgMgMg");
	this.shape_6.setTransform(55.025,32.4537);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9A8FD").s().p("AhSgNQA4gUAYAVQALAMAPAFQAZAKAigFQgXAOgeAAQgvAAhBglg");
	this.shape_7.setTransform(55.725,34.0342);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAQgBQAbgPgGgbQgcAZgqgGQgkgFgOAwAAZAZQAkgMAFgWQgXAHgbABQgXgBgcgFQgdgEgTAeQBvAxA4gtQghAJgagHQgPgEgNgLQgagRg2Aa");
	this.shape_8.setTransform(53.725,31.0454);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C183D1").s().p("AAFACQgZgQg2AZQATgeAdAEQAbAFAYACQAbgCAXgGQgFAWgkAMQgPgFgOgLg");
	this.shape_9.setTransform(52.825,31.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9A8FD").s().p("AhTgEQA2gbAaASQANALAPADQAaAHAhgIQgbAVgoAAQgqAAg6gZg");
	this.shape_10.setTransform(53.725,33.4104);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3F8DB9").s().p("AgKgLQAqAGAcgaQAGAbgbAPQgYgBgbgFQgdgFgTAgQAOgxAkAGg");
	this.shape_11.setTransform(51.4465,29.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).wait(2));

	// horn
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAFgUIAtg6IgRA5QgGABgGABQgHAAgJgBgAAXAOQgKADgKAAQgLAAgMgDIAZgiAANAuIgJAgQgSADgLgEQgSgGgGgVIADgFIAagfAANAuQgNAFgNABQgQgBgRgGAAXAOIgKAgAAhgVIgKAj");
	this.shape_12.setTransform(55,26.7643);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DEC489").s().p("AglBNIAMgZQAPgBAKgFIgIAgIgOABQgJAAgGgCgAgIARQAIAAAKgDIgKAgQgKAFgPABgAAJgTIAMgCIgLAjQgKADgIAAgAAmhOIgRA5IgMACg");
	this.shape_13.setTransform(56.2,26.7643);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4E0AB").s().p("AgxAzIADgEQARAFAQABIgMAZQgSgGgGgVgAguAvIAZggQANAEALAAIgQAiQgQgBgRgFgAADATIAAAAgAgVAPIAagiIABABIAJAAIABAAIAAAAIACAAIADAAIgDAAIgCAAIAAAAIgBAAIgJAAIgBgBIAtg6IgdA7IgSAlQgLAAgNgEg");
	this.shape_14.setTransform(55,26.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAggWQgGABgGABQgHACgIAAIAlhAIgKA8IgHAjIgFAiQgLAGgOACQgQACgRgEAAZANQgJAEgJACQgLABgNgCIAWgkAAUAvIgFAgQgRAFgMgCQgSgEgJgUIADgFIAVgj");
	this.shape_15.setTransform(52,26.0036);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEC489").s().p("AgcBSIAKgbQAOgCALgGIgGAgQgLAEgKAAIgIgBgAgFATQAIgCAJgEIgFAiQgLAGgOACgAAHgUIAMgCIgHAjQgJAEgIACgAAdhSIgKA8IgMACg");
	this.shape_16.setTransform(53.325,26.0036);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4E0AB").s().p("AgpA7IADgGIAVgiIAPABIAAAAIAAAAIAEAAIABgBIADAAIABAAIgMAlIgBAAIgIAAIAAAAIgBAAQgKAAgLgCIAAAAIgBAAIgBgBIABABIABAAIAAAAQALACAKAAIABAAIAAAAIAIAAIABAAIgJAaQgSgEgJgTgAgCAUIgPgBIAWglQAIAAAHgBQgHABgIAAIAlg/IgWA+IgNAmIgBAAIgDAAIgBABIgEAAIAAAAIAAAAgAAHATg");
	this.shape_17.setTransform(52,25.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).wait(2));

	// pupils
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(2,1,1).p("ABGgPIgdAXIAhAHAhCgSIAxAcIg4AJ");
	this.shape_18.setTransform(53.15,42.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").ss(2,1,1).p("ABBgZIgZAZIAhAEAhGgMIA0AWIg2AQ");
	this.shape_19.setTransform(52.4,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},2).wait(2));

	// nostrils
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAdALQgDgDAAgEQAAgEADgEQADgEAFgCQAEgBAEABQACACAAAFQAAADgCAFQgEAEgEACIgFABIgDgBgAgjALQgFgCgDgEQgDgFAAgDQAAgFADgCQADgBAFABQAFACACAEQAEAEAAAEQAAAEgEADIgDABIgEgBg");
	this.shape_20.setTransform(61.825,49.0125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiAQQgEgBgEgEQgEgEAAgFQgBgDADgDQADgCAEABQAGABADAEQAEADABAFQAAAEgDADQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEAAgAAeAIQgDgCgBgFQgBgEADgEQADgEAEgDQAEgCAEABQADACABAEQAAAFgCAEQgDAFgEACIgFABIgDAAg");
	this.shape_21.setTransform(61.6008,47.4365);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},2).wait(2));

	// head
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#9999CC").ss(2,1,1).p("AAiAGQgmgZgdAZ");
	this.shape_22.setTransform(57.05,53.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CCCCCC").ss(2,1,1).p("AiVBdQAKhZAOgyQAYhZBaAQQApAGAeA5IAgA/QAkgPAPAjQAUAzgrAWQgQAHgQgBQghAfgsgaQgJgKgLgGQgVgLgaADQgegBgJgGQgRgXACgb");
	this.shape_23.setTransform(52.715,43.9717);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALBvQgJgKgLgGQgVgLgaADQgegBgJgGQgPgUAAgYIAAgGIAAAGQAAAYAPAUQgZgCgdAPQAKhZAOgyQAYhZBaAQQApAGAeA5IAgA/QAkgPAPAjQAUAzgrAWQgQAHgQgBQgSARgVAAQgSAAgUgMgABNBoQgngagdAaQAPgNARAAQARAAATANg");
	this.shape_24.setTransform(52.715,43.9717);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#9999CC").ss(2,1,1).p("AAWAAQgagNgRAT");
	this.shape_25.setTransform(57.575,52.9325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CCCCCC").ss(2,1,1).p("AiRBvQgChZAIgzQAOhcBaAFQAqACAkA0IAoA8QAigVATAhQAaAxgoAaQgPAKgQAAQgdAjgvgUQgLgJgLgEQgWgJgZAGQgeADgKgFQgUgVAAgc");
	this.shape_26.setTransform(52.9142,43.4907);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPBuQgLgJgLgEQgWgJgZAGQgeADgKgFQgUgVAAgcQAAAcAUAVQgZABgaASQgChZAIgzQAOhcBaAFQAqACAkA0IAoA8QAigVATAhQAaAxgoAaQgPAKgQAAQgSAWgaAAQgPAAgRgHgAAYBkIABgBQAKgKAMAAIABAAIAAAAQAIAAAKAEIAAAAIACABIABABIgBgBIgCgBIAAAAQgKgEgIAAIAAAAIgBAAQgMAAgKAKIgBABg");
	this.shape_27.setTransform(52.9142,43.4907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).wait(2));

	// arm
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CCCCCC").ss(2,1,1).p("AhThMQg+BOAwBMIgaACQhDg6AbhFQAfgqAxANgACsACQgRgxgzgC");
	this.shape_28.setTransform(49.077,55.5108);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjgvQAegqAxANQg9BOAvBMIgaACQhDg6AchFg");
	this.shape_29.setTransform(36.302,55.5108);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CCCCCC").ss(2,1,1).p("AhbhJQg0BVA2AzIgXAMQhKglAThJQAZgtAzAHgACrgaQgWgvg0AE");
	this.shape_30.setTransform(49.7059,56.2719);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgkgjQAZgtAxAHQgyBVA1AzIgXAMQhJglAThJg");
	this.shape_31.setTransform(36.6559,56.2719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},2).wait(2));

	// ears
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAbATQAVg5A1ADQAEA/g3AYgAglAVQgGg9gzgLQgVA8AtAlg");
	this.shape_32.setTransform(51.0676,30.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAbATQAVg5A1ADQAEA/g3AYgAhegzQAzALAGA9IghAZQgtglAVg8g");
	this.shape_33.setTransform(51.0676,30.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CCCCCC").ss(2,1,1).p("AAgANQANg8A2gDQAMA/g0AegAggAWQgMg7g1gFQgNA9AxAgg");
	this.shape_34.setTransform(48.4273,30.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhhgqQA1AFAMA7IgdAdQgxggANg9gAAgANQANg8A2gDQAMA+g0Afg");
	this.shape_35.setTransform(48.4273,30.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},2).wait(2));

	// rainbow
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4AC0E9").s().p("ADvB/QgLhJg5g2QhHhFhkAAQhjAAhHBFQg5A2gLBJIg8AAQAMhhBKhGQBYhWB8AAQB9AABYBWQBKBGAMBhg");
	this.shape_36.setTransform(49.225,71.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8E554").s().p("AErCQQgNhghJhHQhZhVh8AAQh9AAhXBVQhLBHgLBgIgmAAQAMhvBVhQQBjhgCMgBQCMABBjBgQBWBQAMBvg");
	this.shape_37.setTransform(49.25,69.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FB9C34").s().p("AFRCeQgMhvhVhRQhkhgiMAAQiLAAhjBgQhWBRgMBvIgdAAQANh7BdhYQBshoCXAAQCYAABsBoQBeBYAMB7g");
	this.shape_38.setTransform(49.225,68.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F65CA3").s().p("AFuCtQgMh7hehZQhshoiYAAQiXAAhsBoQhdBZgNB7IgfAAQAMiHBnhiQB0hwClAAQCkAAB1BwQBnBiANCHg");
	this.shape_39.setTransform(49.225,66.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F8E554").s().p("AErCRQgNhhhJhGQhZhWh8AAQh9AAhXBWQhLBGgLBhIgmAAQAMhwBVhRQBjhgCMAAQCMAABjBgQBWBRAMBwg");
	this.shape_40.setTransform(49.25,69.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F65CA3").s().p("AFuCtQgMh7hehZQhshniYAAQiXAAhsBnQhdBZgNB7IgfAAQAMiHBnhiQB0hwClAAQCkAAB1BwQBnBiANCHg");
	this.shape_41.setTransform(49.225,66.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38,p:{y:68.425}},{t:this.shape_37},{t:this.shape_36,p:{y:71.575}}]}).to({state:[{t:this.shape_38,p:{y:68.375}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_36,p:{y:71.525}}]},2).wait(2));

	// feet
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#690505").ss(2,1,1).p("AhNgxQAMAAAKALQAIALAAAQIAAAXQAAAQgIALQgKALgMAAQgMAAgKgLQgJgLAAgQIAAgXQAAgQAJgLQAKgLAMAAgABPgxQAMAAAJALQAJALAAAQIAAAXQAAAQgJALQgJALgMAAQgNAAgIgLQgKgLAAgQIAAgXQAAgQAKgLQAIgLANAAg");
	this.shape_42.setTransform(48.85,85.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9D4A4F").s().p("AA6AnQgKgLAAgQIAAgXQAAgQAKgLQAIgLANAAQAMAAAJALQAJALgBAQIAAAXQABAQgJALQgJALgMAAQgNAAgIgLgAhjAnQgIgLgBgQIAAgXQABgQAIgLQAKgLAMAAQAMAAAKALQAIALAAAQIAAAXQAAAQgIALQgKALgMAAQgMAAgKgLg");
	this.shape_43.setTransform(48.85,85.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#690505").ss(2,1,1).p("AhSgoQAMgBALAKQAJAKACAPIADAXQABAQgHAMQgIAMgMABQgNABgJgJQgLgLgCgQIgCgXQgCgPAIgMQAIgMAMgBgABJg5QAMgBAKAKQAKAKACAPIACAXQACAQgHAMQgIAMgMABQgNABgKgKQgKgJgCgQIgDgYQgBgOAIgNQAHgMANgBg");
	this.shape_44.setTransform(51.0761,85.1252);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4A4F").s().p("AhdAyQgLgLgCgQIgCgXQgCgPAIgMQAIgMAMgBQAMgBALAKQAJAKACAPIADAXQABAQgHAMQgIAMgMABIgDAAQgLAAgIgIgAA9AgQgKgJgCgQIgDgYQgBgOAIgNQAHgMANgBQAMgBAKAKQAKAKACAPIACAXQACAQgHAMQgIAMgMABIgDAAQgLAAgJgJg");
	this.shape_45.setTransform(51.0761,85.1252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42}]}).to({state:[{t:this.shape_45},{t:this.shape_44}]},2).wait(2));

	// body
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CCCCCC").ss(2,1,1).p("ABIh1QgFAEAQAoQATAtAGBqIgmAAQg3BQh1hQQgOhJAYhg");
	this.shape_46.setTransform(48.9637,75.6375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DBDBDB").s().p("AA2DGQgEhNgrg2QgOgcACgnQALAAAyACQgFADAQAoQATAuAGBrgAhbiSQA0hqBEB1QgvgXhJAMg");
	this.shape_47.setTransform(50.575,63.6988);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhTBPQgOhJAYhgQAvgWA3gGQgCAoAPAbQArA2AEBMQgbAogsAAQgqAAg7gog");
	this.shape_48.setTransform(47.0637,75.5125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#CCCCCC").ss(2,1,1).p("AA3h5QgFAFAUAmQAZArARBpIgmAEQguBVh8hCQgXhIANhk");
	this.shape_49.setTransform(50.487,74.5722);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DBDBDB").s().p("AAMBCQgSgagCgoQAMgBAxgCQgFADAVAnQAYAqARBqIgmAFQgMhMgwgygAAMiJQgygRhHATQAnhuBSBsg");
	this.shape_50.setTransform(50.65,62.8311);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhNBbQgXhIANhkQAtgZA2gMQACAoASAZQAxAyAMBLQgaAvgzAAQgmAAg3gcg");
	this.shape_51.setTransform(48.587,74.7972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},2).wait(2));

	// tail
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,1,1).p("ABFArQg6AqgRgyQBLg+glhTQgKAdgXAFQhbAJAJB2QAIA+BcgDQA5gDAKg1g");
	this.shape_52.setTransform(38.2095,86.1569);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6BCAEB").s().p("AhTAzQgJh2BbgJQAXgFAKgdQAlBThLA+QARAyA6gqIAPALQgKA1g5ADIgIABQhUAAgIg8g");
	this.shape_53.setTransform(38.2095,86.1569);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2,1,1).p("ABFAlQg1AwgWgwQBEhGguhOQgHAegWAHQhaASAWB2QAPA8BbgNQA4gJAFg2g");
	this.shape_54.setTransform(40.9339,86.415);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6BCAEB").s().p("AhRA+QgWh2BagSQAWgHAHgeQAuBOhEBGQAWAwA1gwIARAJQgFA2g4AJQgRADgMAAQhAAAgNgyg");
	this.shape_55.setTransform(40.9339,86.415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.shape_55},{t:this.shape_54}]},2).wait(2));

	// sidehair
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("ABKg+IAWgsQhNAOgXA0QgNASgsgSQgOAhA4AQQgFAKAAAMQgIAlg/APQATAMAkgFQgEAIgEAJAAXAgQARgrAWgZIAMgaQhKAigTAlAAIBYQAHgfAIgZQgyAfgNAb");
	this.shape_56.setTransform(36.125,43.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E5F05E").s().p("AgbAUQANgZAygfQgIAZgIAeQgcAGgbANIAIgSg");
	this.shape_57.setTransform(34.85,50.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FAD46A").s().p("AhUBFQA/gPAHglQABgMAFgJQASgmBLgiIgNAaQgVAZgRArQgyAfgNAbQgLABgKAAQgVAAgNgIg");
	this.shape_58.setTransform(35.05,44.6864);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F87A4F").s().p("AhMAIQAsASAMgSQAYgzBMgOIgVAsQhLAhgSAmQg4gRAOghg");
	this.shape_59.setTransform(37.685,38.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("ABSg8IAdgoQhOABghAvQgPAPgogZQgUAeA0AaQgGAJgDALQgNAkhBAEQAQAPAlABQgGAGgHAZAAPAYQAYgoAagVIARgXQhRAUgYAiAgJBNQALgeANgXQg3AVgRAZ");
	this.shape_60.setTransform(36.35,44.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E5F05E").s().p("AgdAHQARgXA3gWQgNAYgMAcQgeABgeAYQAIgZAFgHg");
	this.shape_61.setTransform(33.55,50.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F87A4F").s().p("AhQgIQAoAYAQgPQAgguBOgBIgdAoQhPATgZAiQg1gaAUgdg");
	this.shape_62.setTransform(38.8241,39.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FAD46A").s().p("AhfAxQBAgDAOgkQACgKAHgKQAYgiBQgUIgRAXQgZAVgYAnQg3AWgSAYQgkgBgQgPg");
	this.shape_63.setTransform(34.9,44.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.5,66.8,39.400000000000006,31.799999999999997);
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