(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.fido_love = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D11111").s().p("AhVAzQgagwgJgiQgThJAwgIQBLgEATBQQANgdAegLQBQgRAABKQgFB+jKAGQAMgggQgeg");
	this.shape.setTransform(86.4076,54.2654);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({x:89.1576,y:47.2654},0).wait(2).to({x:84.6576,y:35.7654},0).to({_off:true},2).wait(2));

	// Layer_12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#423932").ss(1,1,1).p("AB8kpQgSAAgOAFQgjAKgTAnQiFAVATBEQAPA/gwAUQgDABgCABQg0AUAhAxQAgAwglAVQgmAWAcA4QAKAXAjAOQgKAwANAdQAeA2BZgYQAZgHAHgJQA9ALAgggQAZgZgVgsIgTgbQAZgSgFghQgFgfgigZQgdgfAognQAsgpgjgyQgCgCgBgDQgUgmAng+QAjg9gwgSQgEgBgFgCg");
	this.shape_1.setTransform(29.3184,49.1966);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E451B").s().p("AhRC+QhPgrApgaQBMgqg3giQg3gjAVg8QAwgUgPg/QgThECGgVQASgnAjgKQAOgFASAAIAJADQAxASgkA9QgnA+AUAmIADAFQAkAygsAoQgpAoAdAfQAjAZAEAfQAGAhgaASIgIANQglA0hJgoQAlBHguACQhNgFARhSg");
	this.shape_2.setTransform(31.56,47.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D2808").s().p("AhiCUQgOgdAKgwQgigOgLgXQgbg3AlgWQAmgVghgxQghgxA1gUIAEgCQgVA9A3AjQA3AihMAqQgpAZBPArQgRBSBMAFQAvgCgmhHQBKAoAlg0IAIgNIAUAbQAUAsgYAZQggAgg9gLQgIAJgZAHQgaAHgWAAQgxAAgVglg");
	this.shape_3.setTransform(29.1602,60.4966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},2).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},2).wait(2));

	// Layer_17
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AggAGQAjgVAeAR");
	this.shape_4.setTransform(61.025,32.945);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(8));

	// Layer_14
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjAmQgFgDgBgEQgBgFAFgFQAEgDAHgDQAGAAAFACQAFACABAFQABAFgFAFQgEAEgGABIgFAAQgEAAgDgBgAg1gLQgFgCgCgGQgBgGACgGQADgFAGgBQAFgCAFADQAFACACAGQABAGgCAFQgDAGgGACIgDAAQgDAAgEgCg");
	this.shape_5.setTransform(66.656,43.5381);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(8));

	// Layer_13
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAdA2QgLgGgBgLQgBgLAIgJQAIgKAPgCQANgDAKAGQALAGACALQABAKgJAKQgJAKgNACIgJABQgIAAgHgEgAhFgCQgLgIgBgMQgCgNAIgKQAGgKAMgCQANgBAJAGQAJAIACANQACAMgGALQgIAJgMACIgEABQgJAAgIgGg");
	this.shape_6.setTransform(66.235,43.8683);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(8));

	// Layer_15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E451B").s().p("AgqBSQghgTgKglQgLgkATgiQARgjAkgLQAigLAiATQAgATALAlQAKAkgRAiQgSAjgkALQgOAFgMAAQgVAAgVgNg");
	this.shape_7.setTransform(57.4951,41.6082);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(8));

	// Layer_11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#423932").ss(1,1,1).p("AjmAKQAEBiBDBCQBCBDBbgEQBPgEA6g7QBzgOgXiaIgXAIQABgMgBgLQgEhihChDQgqgqg1gNQgRgFgTgBQgLgBgOAAQgOABgNADQgwAHgnAeQgUAPgRAVQg9BIAEBhg");
	this.shape_8.setTransform(49.6742,44.3279);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-1.9,-7,0,-1.9,-7,33.5).s().p("AifCuQhDhCgEhiQgEhhA9hIQARgVAUgPQAngeAwgHQANgDAOgBQAOAAALABQATABARAFQA1ANAqAqQBCBDAEBiIAAAXIAXgIQAXCahzAOQg6A7hPAEIgKAAQhUAAg/g/g");
	this.shape_9.setTransform(49.6742,44.3279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).wait(2));

	// Layer_5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag6AWQgCgDAAgEIgBgXQAAgEADgDQACgDACAAQADAAACACQACAEAAAEIABAXQAAAEgDADQgCAEgCAAQgDAAgCgEgAhPAXQgCgDAAgEIAAgXQAAgEABgEQACgDADAAQADAAACADQACADAAAEIAAAXQAAAEgCADQgCAEgCAAQgDAAgCgDgAArATQgDgCAAgEIgDgXQgBgEACgEQACgDAEgBQADAAADADQADADAAADIADAXQAAAEgCAEQgCAEgDAAQgDAAgDgDgABFAQQgDgDgBgEIgCgXQgBgEACgDQADgDACgBQAEAAACADQAEADAAADIADAXQAAAEgCAEQgCAEgDAAQgDAAgDgDg");
	this.shape_10.setTransform(48.2042,95.2714);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(8));

	// Layer_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#423932").ss(1,1,1).p("ACGh4IDSAAQABAAAAAAIADAAQBZAAgCA0QAAAeg2ABIjoAAQgIA4hHAwIAAAZQA7gDgFA+QAAAOh+ACQhJABh0gCQgpgSgRgeAkFBAQhNAJhGguIAKAeIglgSQALAXATAQIgWgCQAGAQAYALQBAAgBUgRAkFBAQgBAYAIATQACAGADAFAiRAAQBVgSABBGQgCAlgjAXAkFBAQAHhFBQgzICrhuIAcAAIBTAAQAQAYAKAWQAUAtgFAmAAFCDQAYgiApgFAgmAlIAAA1QApAMgFBBABGg+IAACB");
	this.shape_11.setTransform(44.9013,81.5893);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],4.6,-2.1,0,4.6,-2.1,29).s().p("AiLCmQgpgSgQgeIgGgLQBNAJABhOQABgyBSgvQBSgvAkg8IBTAAQARAYAJAWQAUAtgFAmQgIA4hHAwIAAiBIAACBIAAAZQA8gDgGA+QAAAOh/ACIABgPQAAg0glgKIAAg1IAAA1QAlAKAAA0IgBAPIgtAAQg8AAhTgBgAA6CDQAYgiAogFQgoAFgYAigAgrBwQAigXADglQgCg3g0AAIAAAAIgBAAQgOAAgSADQASgDAOAAIABAAIAAAAQA0AAACA3QgDAlgiAXgAAxCnIAAAAg");
	this.shape_12.setTransform(39.7,81.5893);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-139.2,-46.3,0,-139.2,-46.3,595.1).s().p("AiHAqQAFgmgUgsIDRAAQgMAAgIAFQgJAGAAAHQAAAHAJAGQAJAFANAAQANAAAJgFQAKgGAAgHQAAgHgKgGQgIgFgMAAQBZAAgCAyQAAAfg2ABgABdASQgFACAAADQAAADAFACQAFADAHAAQAHAAAFgDQAFgCAAgDQAAgDgFgCQgFgCgHAAQgHAAgFACgABxgLQgFACAAAEQAAACAFADQAFABAHAAQAHAAAEgBQAFgDAAgCQAAgEgFgCQgEgCgHAAQgHAAgFACg");
	this.shape_13.setTransform(73.4013,73.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9E451B").s().p("AjAB9QgYgMgGgPIAWACQgSgRgLgWIAlARIgLgdQBHAtBMgIIAAADQAAAWAIASQgIgSAAgWIAAgDQAIhHBPgyICrhuIAcAAQgkA9hSAvQhTAtgBAzQgBBOhLgIIAFAKQgeAHgbAAQgyAAgqgVg");
	this.shape_14.setTransform(24.375,79.4093);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAIAiQgFgDAAgDQAAgDAFgCQAFgCAHAAQAHAAAEACQAFACAAADQAAADgFADQgEACgHAAQgHAAgFgCgAAbAEQgEgCAAgCQAAgDAEgCQAFgDAHAAQAHAAAFADQAFACAAADQAAACgFACQgFACgHAAQgHAAgFgCgAgugEQgJgFAAgIQAAgHAJgGQAJgFAMAAIABAAIADAAQALAAAJAFQAIAGAAAHQAAAIgIAFQgJAEgNAAQgNAAgKgEg");
	this.shape_15.setTransform(81.975,73.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#423932").ss(1,1,1).p("AB8h4IDSAAQABAAAAAAIADAAQBZAAgCA0QAAAeg2ABIjoAAQgIA4hHAwIAAAZQA7gDgFA+QAAAOh+ACQhJABh0gCQgpgSgRgeQgBgCAAgBAkPBEQglgKgggWQgbgTgXgdIAAAeIgdgbQADAXAMAWIgUgJQAAARATATQAUATAYAOQAoAWBFALAB8h4QgKgWgQgYIhTAAIgcAAIirBuQhQAzgHBFQAAACAAACQAAAeAKAQQAAAAABABAkFByQABABAAAAAibAAQBVgSABBGQgCAlgjAXAgECDQAXgiApgFAgwAlIAAA1QAqAMgGBBAA8g+IAACBAB8h4QAUAtgFAm");
	this.shape_16.setTransform(45.9263,81.5893);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],4.6,-2.1,0,4.6,-2.1,29).s().p("AiLCmQgpgSgQgeIgCgDQgBgIABAAQBJAHABhMQABgyBSgvQBSgvAkg8IBTAAQARAYAJAWQAUAtgFAmQgIA4hHAwIAAiBIAACBIAAAZQA8gDgGA+QAAAOh/ACIABgPQAAg0glgKIAAg1IAAA1QAlAKAAA0IgBAPIgtAAQg8AAhTgBgAA6CDQAYgiAogFQgoAFgYAigAgrBwQAigXADglQgCg3g0AAIAAAAIgBAAQgOAAgSADQASgDAOAAIABAAIAAAAQA0AAACA3QgDAlgiAXgAAxCnIAAAAgAjGBzIgBgBIgDgHQABAAADAIIAAAAgAjGByIgBAAIABABIAAgBgAjHByIAAAAgAB6BDg");
	this.shape_17.setTransform(39.7,81.5893);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9E451B").s().p("AicBzQgYgNgUgUQgSgTgBgQIAUAJQgMgWgDgZIAdAdIAAggQAXAeAcAUQAfAWAlAKIAAgEQAHhHBPgyICrhuIAdAAQgkA9hTAuQhSAugBAzQgBBMhIgGQgBAAABAHQgDgHgBAAIADAGIABABIgBABQgFAGAOAHQhFgLgogWgAg4CFQgJgPgBgeQABAeAJAPg");
	this.shape_18.setTransform(25.4,79.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#423932").ss(1,1,1).p("ACGh4IDSAAQABAAAAAAIADAAQBZAAgCA0QAAAeg2ABIjoAAQgIA4hHAwIAAAZAkFBAQhNAJhGguIAKAeIglgSQALAXATAQIgWgCQAGAQAYALQBAAgBUgRAkFBAQgBAYAIATQACAGADAFAiRAAQBVgSABBGQgCAlgjAXAkFBAQAHhFBQgzICrhuIAcAAIBTAAQAQAYAKAWQAUAtgFAmAgCCnQhJABh0gCQgpgSgRgeABGg+IAACBAgmAlIAAA1QApAMgFBBAAFCDQAYgiApgFQA7gDgFA+QAAAOh+AC");
	this.shape_19.setTransform(44.9013,81.5893);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],4.6,-2.1,0,4.6,-2.1,29).s().p("AiLCmQgpgSgQgeIgGgLQBNAJABhOQABgyBSgvQBSgvAkg8IBTAAQARAYAJAWQAUAtgFAmQgIA4hHAwIAAiBIAACBIAAAZQA8gDgGA+QAAAOh/ACIABgPQAAg0glgKIAAg1IAAA1QAlAKAAA0IgBAPIgtAAQg8AAhTgBgAA6CDQAYgiAogFQgoAFgYAigAgrBwQAigXADglQgCg3g0AAIAAAAIgBAAQgOAAgSADQASgDAOAAIABAAIAAAAQA0AAACA3QgDAlgiAXgAAxCnIAAAAgAB6BDg");
	this.shape_20.setTransform(39.7,81.5893);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#423932").ss(1,1,1).p("AB8h4IDSAAQABAAAAAAIADAAQBZAAgCA0QAAAeg2ABIjoAAQgIA4hHAwIAAAZAkPBEQglgKgggWQgbgTgXgdIAAAeIgdgbQADAXAMAWIgUgJQAAARATATQAUATAYAOQAoAWBFALAB8h4QgKgWgQgYIhTAAIgcAAIirBuQhQAzgHBFQAAACAAACQAAAeAKAQQAAAAABABAgMCnQhJABh0gCQgpgSgRgeQgBgCAAgBAkFByIABABAibAAQBVgSABBGQgCAlgjAXAA8g+IAACBAgwAlIAAA1QAqAMgGBBAgECDQAXgiApgFQA7gDgFA+QAAAOh+ACAB8h4QAUAtgFAm");
	this.shape_21.setTransform(45.9263,81.5893);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],4.6,-2.1,0,4.6,-2.1,29).s().p("AiLCmQgpgSgQgeIgCgDQgBgIABAAQBJAHABhMQABgyBSgvQBSgvAkg8IBTAAQARAYAJAWQAUAtgFAmQgIA4hHAwIAAiBIAACBIAAAZQA8gDgGA+QAAAOh/ACIABgPQAAg0glgKIAAg1IAAA1QAlAKAAA0IgBAPIgtAAQg8AAhTgBgAA6CDQAYgiAogFQgoAFgYAigAgrBwQAigXADglQgCg3g0AAIAAAAIgBAAQgOAAgSADQASgDAOAAIABAAIAAAAQA0AAACA3QgDAlgiAXgAjGBzIAAAAgAjGByIgBAAIgDgHQABAAADAIIgBgBIABABg");
	this.shape_22.setTransform(39.7,81.5893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_13},{t:this.shape_15},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_13},{t:this.shape_15},{t:this.shape_14},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_13},{t:this.shape_15},{t:this.shape_18},{t:this.shape_22},{t:this.shape_21}]},2).wait(2));

	// Layer_4
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#423932").ss(1,1,1).p("AjshxQAugogRhPICZAAICZAAQAFAjg1AlQAVADAbgMQgFAXgiAVQBICDgPCMQAJgGAJgHQBXgpAthFQABgDABgCIgEAbIgEAjIAAAAIAAAAIAAAAIABgBIAbgmQgHAkgQAgQgDAFgDAFIADgBIAMgFQgeBihoAEQgcABgVgFQgNAKgcACIgeAAQhnAQhAgJIAAgOAEFBQIABgBAjshxQgJAGgHAGIAQALQAVAIAGAKQAZBbBFAIQAuACAbgWQAYgWgYghAj8hlQggAagDAjQARAiAxALQgBAVABATQg1AHAKBbQgLAFgGAOQgLAZAGAdQAZAQBzgQAi4hdQBGgFAmA9QASgIAEgOQATgMgIgcQg3g4hjAXQgWAJgRAKAjdAFQAPAEAegCAjsCMQgRgDgLAGAhwCQQgZAMgJAjIAAAZAgCAVQh1ANAHBuAgjCSQgxgQgcAOAjdAtQAFCFBAAb");
	this.shape_23.setTransform(56.9305,74.2224);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],0,0,0,0,0,28.4).s().p("AgrDmIAAgOQhzAQgZgQQgFgdAKgZQAGgOALgFIABAAIAAAAIABgBQAHgDAIAAIABAAIAAAAIAJABIAAAAIABAAIgBAAIAAAAIgJgBIAAAAIgBAAQgIAAgHADIgBABIAAAAIgBAAQgKhbA2gHQgBgTAAgVIABAAIABAAQALADAPAAIABAAIAAAAIAQgBIABAAIgBAAIgQABIAAAAIgBAAQgPAAgLgDIgBAAIgBAAQgxgLgRgiQADgjAggaIAQALQAVAIAGAKQAaBbBEAIIAJAAIAAAAIABAAQAkAAAYgSIABAAIABgBIABgBQALgKAAgPQAAgOgLgQQALAQAAAOQAAAPgLAKIgBABIgBABIgBAAQgYASgkAAIgBAAIAAAAIgJAAQhEgIgahbQgGgKgVgIIgQgLIAQgMQAvgogShPICZAAQBABYgLAwQgLAxBCAzQA1AwgtBUQgOAdAEA6IgfAAQhDAKgzAAQgaAAgXgDgAgrC/IAAAZIAAgZQAJgjAZgMIABAAIAAgBQAMgGAQAAIAAAAIABAAQAUAAAaAJQgagJgUAAIgBAAIAAAAQgQAAgMAGIAAABIgBAAIAAgLQAAhjBugNQhuANAABjIAAALQgZAMgJAjgAgxDNQhAgbgEiFQAECFBAAbgAAaglQATgIAEgOQANgIAAgRQAAgHgCgIIgCgCIgBgBQgnglg6AAIAAAAIAAAAQgZAAgbAGIgCABQgWAJgRAKQARgKAWgJIACgBQAbgGAZAAIAAAAIAAAAQA6AAAnAlIABABIACACQACAIAAAHQAAARgNAIQgEAOgTAIIAAgBIgCgCIgCgDQghgyg7gBIAAAAIAAAAIgKABIAKgBIAAAAIAAAAQA7ABAhAyIACADIACACIAAABIAAAAg");
	this.shape_24.setTransform(46.5762,74.2224);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#9E451B","#D96D39"],[0.396,0.651],-17.2,0,15.3,0).s().p("Ag3CNQAthUg1gwQhCgzALgxQALgwhAhYICZAAQAGAjg1AlQAVADAagMQgEAXgiAVQBHCDgPCMIASgNQBXgpAthFIgCAWIgFAjIABgBIAcglQgHAjgQAgIgGAKIADgBIgDABIAGgKIgDAJIAMgFQgeBihoAEQgbABgVgFQgNAKgcACQgEg6AOgdgACPBWIABgBIAAgBIAAABIgBAAIAAABgACPBWgACPBVIABAAIgBABg");
	this.shape_25.setTransform(68.65,73.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#423932").ss(1,1,1).p("AjshxQAugogRhPICZAAICZAAQAFAjg1AlQAVADAbgMQgFAXgiAVQBICDgPCMQAJgGAJgHQBXgpAthFQABgDABgCIgEAbIgEAjIAAAAIAAAAIAAAAIABgBIAbgmQgHAkgQAgQgDAFgDAFIADgBIAMgFQgeBihoAEQgcABgVgFQgNAKgcACIgeAAQhnAQhAgJIAAgOAEFBQIABgBAjshxQgJAGgHAGIAQALQAVAIAGAKQAZBbBFAIQAuACAbgWQAYgWgYghAj8hlQggAagDAjQARAiAxALQgBAVABATQg1AHAKBbQgLAFgGAOQgLAZAGAdQAZAQBzgQAi4hdQBGgFAmA9QASgIAEgOQATgMgIgcQg3g4hjAXQgWAJgRAKAjsCMQgRgDgLAGAjdAFQAPAEAegCAgjCSQgxgQgcAOAgCAVQh1ANAHBuQgZAMgJAjIAAAZAjdAtQAFCFBAAb");
	this.shape_26.setTransform(56.9305,74.2224);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],0,0,0,0,0,28.4).s().p("AgrDmIAAgOQhzAQgZgQQgFgdAKgZQAGgOALgFIABAAIAAAAIABgBQAHgDAIAAIABAAIAAAAIAJABIAAAAIABAAIgBAAIAAAAIgJgBIAAAAIgBAAQgIAAgHADIgBABIAAAAIgBAAQgKhbA2gHQgBgTAAgVQgxgLgRgiQADgjAggaIAQALQAVAIAGAKQAaBbBEAIIAJAAIAAAAIABAAQAkAAAYgSIABAAIABgBIABgBQALgKAAgPQAAgOgLgQQALAQAAAOQAAAPgLAKIgBABIgBABIgBAAQgYASgkAAIgBAAIAAAAIgJAAQhEgIgahbQgGgKgVgIIgQgLIAQgMQAvgogShPICZAAQBABYgLAwQgLAxBCAzQA1AwgtBUQgOAdAEA6IgfAAQhDAKgzAAQgaAAgXgDgAgrC/IAAAZIAAgZQAJgjAZgMIAAgLQAAhjBugNQhuANAABjIAAALQgZAMgJAjgAgxDNQhAgbgEiFQAECFBAAbgABDCSQgagJgUAAIgBAAIAAAAQgQAAgMAGIAAABIgBAAIABAAIAAgBQAMgGAQAAIAAAAIABAAQAUAAAaAJgAhZAIIAQgBIABAAIgBAAIgQABIAAAAIgBAAQgPAAgLgDIgBAAIAAAAIgBAAIABAAIAAAAIABAAQALADAPAAIABAAIAAAAgAAaglQATgIAEgOQANgIAAgRQAAgHgCgIIgCgCIgBgBQgnglg6AAIAAAAIAAAAQgZAAgbAGIgCABQgWAJgRAKQARgKAWgJIACgBQAbgGAZAAIAAAAIAAAAQA6AAAnAlIABABIACACQACAIAAAHQAAARgNAIQgEAOgTAIIAAgBIgCgCIgCgDQghgyg7gBIAAAAIAAAAIgKABIAKgBIAAAAIAAAAQA7ABAhAyIACADIACACIAAABIAAAAg");
	this.shape_27.setTransform(46.5762,74.2224);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#423932").ss(1,1,1).p("AjshxQAugogRhPICZAAICZAAQAFAjg1AlQAVADAbgMQgFAXgiAVQBICDgPCMQAJgGAJgHQBXgpAthFQABgDABgCIgEAbIgEAjIABgBIAbgmQgHAkgQAgQgDAFgDAFIADgBIAMgFQgeBihoAEQgcABgVgFQgNAKgcACIgeAAQhnAQhAgJIAAgOAEFBQIAAAAIAAAAIABgBAEFBQIAAAAAjshxQgJAGgHAGIAQALQAVAIAGAKQAZBbBFAIQAuACAbgWQAYgWgYghAj8hlQggAagDAjQARAiAxALQAPAEAegCAi4hdQBGgFAmA9QASgIAEgOQATgMgIgcQg3g4hjAXQgWAJgRAKAjsCMQgRgDgLAGAjdAtQg1AHAKBbQgLAFgGAOQgLAZAGAdQAZAQBzgQAjdAFQgBAVABATQAFCFBAAbAhwCQQgZAMgJAjIAAAZAgCAVQh1ANAHBuAgjCSQgxgQgcAO");
	this.shape_28.setTransform(56.9305,74.2224);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],0,0,0,0,0,28.4).s().p("AgrDmIAAgOQhzAQgZgQQgFgdAKgZQAGgOALgFQgKhbA2gHQgBgTAAgVIABAAIAAAAIABAAQALADAPAAIABAAIAAAAIAQgBIABAAIgBAAIgQABIAAAAIgBAAQgPAAgLgDIgBAAIAAAAIgBAAQgxgLgRgiQADgjAggaIAQALQAVAIAGAKQAaBbBEAIIAJAAIAAAAIABAAQAkAAAYgSIABAAIABgBIABgBQALgKAAgPQAAgOgLgQQALAQAAAOQAAAPgLAKIgBABIgBABIgBAAQgYASgkAAIgBAAIAAAAIgJAAQhEgIgahbQgGgKgVgIIgQgLIAQgMQAvgogShPICZAAQBABYgLAwQgLAxBCAzQA1AwgtBUQgOAdAEA6IgfAAQhDAKgzAAQgaAAgXgDgAgrC/IAAAZIAAgZQAJgjAZgMIABAAIAAgBQAMgGAQAAIAAAAIABAAQAUAAAaAJQgagJgUAAIgBAAIAAAAQgQAAgMAGIAAABIgBAAIAAgLQAAhjBugNQhuANAABjIAAALQgZAMgJAjgAgxDNQhAgbgEiFQAECFBAAbgAihCPIABAAIAAAAIABgBQAHgDAIAAIABAAIAAAAIAJABIAAAAIABAAIgBAAIAAAAIgJgBIAAAAIgBAAQgIAAgHADIgBABIAAAAIgBAAgAAaglQATgIAEgOQANgIAAgRQAAgHgCgIIgCgCIgBgBQgnglg6AAIAAAAIAAAAQgZAAgbAGIgCABQgWAJgRAKQARgKAWgJIACgBQAbgGAZAAIAAAAIAAAAQA6AAAnAlIABABIACACQACAIAAAHQAAARgNAIQgEAOgTAIIAAgBIgCgCIgCgDQghgyg7gBIAAAAIAAAAIgKABIAKgBIAAAAIAAAAQA7ABAhAyIACADIACACIAAABIAAAAg");
	this.shape_29.setTransform(46.5762,74.2224);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#9E451B","#D96D39"],[0.396,0.651],-17.2,0,15.3,0).s().p("Ag3CNQAthUg1gwQhCgzALgxQALgwhAhYICZAAQAGAjg1AlQAVADAagMQgEAXgiAVQBHCDgPCMIASgNQBXgpAthFIgCAWIgFAjIABgBIAcglQgHAjgQAgIgGAKIADgBIgDABIAGgKIgDAJIAMgFQgeBihoAEQgbABgVgFQgNAKgcACQgEg6AOgdgACPBWIABgBIAAgBIAAABIgBAAIABAAIgBABIAAgBg");
	this.shape_30.setTransform(68.65,73.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_25},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.4,68.4,51.4,31);
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