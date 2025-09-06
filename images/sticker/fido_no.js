(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.fido_no = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#423932").ss(1,1,1).p("ABalhQAPgDANADQAfAGAYApQB1ACgCBPQAABJAsAQQACAAACABQAxAOgSA9QgSA8AkARQAkASgLBEQgFAbgaAVQASA1gFAjQgOBBhQgNQgXgDgIgJQgxAWgigfQgZgYAIg1IALgiQgZgPgCgmQgDgkAYgiQASgmgqgnQgtgnATg+QAOgwgwhEQgrg/AmgcQADgCAEgCgAjHk+QgMgBgKAEQgZALgOAsQhdASAKBOQAIBJgiAVQgCABgBABQglAVAUA4QAUA6gaAWQgbAXARBCQAGAaAXARQgJA3AIAiQASA/A+gYQASgHAFgJQAqAPAXgjQASgcgMg0IgMgfQASgTgDgmQgBgkgXgeQgSgkAdgsQAggtgWg7QgQguAfhJQAchFghgWQgDgCgDgBg");
	this.shape.setTransform(46.3226,39.7211);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D2808").s().p("Al5DJQgIgiAJg3QgXgRgGgaQgRhCAbgWQAagWgUg6QgUg5AlgVIADgCQgRBEAkArQAkAqg2ArQgdAdA1A0QgQBdA1AJQAgAAgXhTQA3A2AchOIAMAfQAMA0gSAcQgXAjgqgPQgFAJgSAHQgRAGgNAAQglAAgNgtgAEqC2QgXgDgIgJQgxAWgigfQgZgYAIg1IALgiQAtBJA8g/QgSBWApgGQA/gSgfhZQA7g8gogXQhJgjAngvQAogxgfhAIAEABQAxAOgSA9QgSA8AkASQAkASgLBEQgFAagaAVQASA1gFAjQgMA2g6AAQgLAAgNgCg");
	this.shape_1.setTransform(46.3226,50.6461);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E451B").s().p("AlVDnQg1g1AdgcQA2gtgjgpQglgrAShDQAhgWgIhJQgJhNBdgTQAOgrAYgLQAKgFAMABIAGAEQAhAWgbBFQgfBJAQAuQAVA7gfAsQgeAsATAkQAWAeACAlQACAmgSASQgcBOg2g1QAXBSghAAQg0gJAPhcgAEeDBQg8A+gthIQgZgQgCgmQgDgkAZgiQASgngrglQgsgnATg/QAOgwgwhDQgrhAAlgbIAHgFQAPgDANADQAgAGAXApQB2ACgDBPQAABJAtAQQAeBBgoAwQgmAvBIAiQAoAYg6A9QAfBZhAASIgFAAQgiAAAQhQg");
	this.shape_2.setTransform(45.9994,37.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#423932").ss(1,1,1).p("ABdlhQAPgDAOADQAgAGAYApQB5ACgCBPQAABJAuAQQACAAACABQAyAOgTA9QgSA8AlARQAlASgMBEQgEAbgbAVQASA1gFAjQgPBBhSgNQgYgDgIgJQgyAWgjgfQgagYAIg1IALgiQgZgPgCgmQgDgkAZgiQASgmgrgnQgugnATg+QAPgwgyhEQgsg/AngcQADgCAEgCgAjNk+QgMgBgLAEQgZALgOAsQhgASAKBOQAIBJgjAVQgCABgBABQgmAVAVA4QAVA6gcAWQgbAXARBCQAGAaAYARQgJA3AIAiQATA/BAgYQASgHAFgJQArAPAYgjQATgcgNg0IgMgfQASgTgCgmQgCgkgXgeQgTgkAegsQAhgtgXg7QgQguAghJQAchFgigWQgCgCgEgBg");
	this.shape_3.setTransform(47.5472,39.7211);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9E451B").s().p("Ak5FMQg2gJAQhcQg3g1AegcQA4gtglgpQgmgrAShEQAjgVgIhJQgKhNBggTQAOgrAZgLQALgFAMABIAGAEQAiAWgcBFQggBJAQAuQAXA7ghAsQgeAsATAkQAXAeACAlQACAmgSASQgdBOg4g1QAXBSghAAIAAAAgAEnDBQg+A+gvhIQgZgQgCgmQgDgkAZgiQASgngrglQgugnATg/QAPgwgyhDQgshAAngbIAHgFQAPgDAOADQAgAGAYApQB5ACgCBPQAABJAuAQQAfBBgpAwQgoAvBLAiQApAYg8A9QAgBZhCASIgFAAQgjAAARhQg");
	this.shape_4.setTransform(47.224,37.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D2808").s().p("AmEDJQgIgiAJg3QgYgRgGgaQgRhCAbgWQAcgWgVg6QgVg5AmgVIADgCQgSBEAmArQAlApg4AsQgeAcA3A1QgQBcA2AKQAhAAgXhTQA4A1AdhNIAMAfQANA0gTAcQgYAjgrgPQgFAJgSAHQgSAGgOAAQgmAAgNgtgAEzC2QgYgDgIgJQgyAWgjgfQgagYAIg1IALgiQAvBJA+g/QgSBWApgGQBCgSgghZQA8g8gpgXQhLgjAogvQApgxgfhAIAEABQAyAOgTA9QgSA8AlASQAlASgMBEQgEAagbAVQASA1gFAjQgNA2g8AAQgLAAgNgCg");
	this.shape_5.setTransform(47.5472,50.6461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).wait(2));

	// Layer_17
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("ABZglQAeAiBIAPAi+AmQA+gIAdgu");
	this.shape_6.setTransform(41.375,37.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2).to({x:43.625,y:37.875},0).wait(2));

	// Layer_14
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSA4QgJgDgBgFQgBgGAKgEQAHgFAMgCQAMgCAKADQAJACABAGQAAAFgIAFQgIAFgNACIgJABQgHAAgFgCgAh8AAQgEgDAAgHQAAgHAEgFQAGgFAHAAQAGAAAFAFQAFAFAAAHQAAAHgFADQgFAFgGAAQgHAAgGgFgABkgdQgEgEAAgHQAAgHAEgFQAGgFAHAAQAGAAAFAFQAFAFAAAHQAAAHgFAEQgFAFgGAAQgHAAgGgFg");
	this.shape_7.setTransform(41.1,43.9194);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA4QgJgDgBgFQgBgGAKgEQAHgFAMgCQAMgCAKADQAJACABAGQAAAFgIAFQgIAFgNACIgJABQgGAAgGgCgAh8AAQgEgDAAgHQAAgHAEgFQAGgFAHAAQAGAAAFAFQAFAFAAAHQAAAHgFADQgFAFgGAAQgHAAgGgFgABkgdQgEgEAAgHQAAgHAEgFQAGgFAHAAQAGAAAFAFQAFAFAAAHQAAAHgFAEQgFAFgGAAQgHAAgGgFg");
	this.shape_8.setTransform(43.35,44.3194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},2).wait(2));

	// Layer_13
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBLQgTgGgCgMQgCgNARgLQARgMAYgDQAagEAUAHQATAGABANQACAMgQALQgRAMgaADIgRACQgPAAgMgFgAiGAPQgLgJgCgNQgCgPAIgMQAKgLAOgCQAOgCALAJQAMAJACAOQACAOgJALQgIAMgOACIgGAAQgLAAgKgHgABcgQQgLgJgCgOQgCgPAIgLQAKgLAOgCQAOgCALAIQAMAJACAOQACAOgJAMQgIAMgOACIgGABQgLAAgKgIg");
	this.shape_9.setTransform(40.6482,44.2663);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2).to({x:42.8982,y:44.6663},0).wait(2));

	// Layer_15
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9E451B").s().p("AhLBMQgggfAAgtQAAgrAgghQAfgfAsAAQAtAAAfAfQAgAhAAArQAAAtggAfQgfAggtAAQgsAAgfggg");
	this.shape_10.setTransform(51.45,36.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9E451B").s().p("AhLBMQgggfAAgtQAAgrAgghQAggfArAAQAsAAAgAfQAgAhAAArQAAAtggAfQggAggsAAQgrAAggggg");
	this.shape_11.setTransform(53.45,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).wait(2));

	// Layer_11
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#423932").ss(1,1,1).p("AECgjQAQBuhBBYQhABahrAPQhqAPhYhFQhWhDgPhvQgQhuBAhaQApg4A7gbQATgJAWgFQAPgEAQgDQARgCAQAAQA5gCA0AZQAaANAZATQBXBFAPBvg");
	this.shape_12.setTransform(44.8231,32.0038);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-0.8,-8,0,-0.8,-8,40.1).s().p("AicDWQhWhDgPhvQgQhuBAhaQApg4A7gbQATgJAWgFQAPgEAQgDQARgCAQAAQA5gCA0AZQAaANAZATQBXBFAPBvQAQBuhBBYQhABahrAPQgTADgTAAQhUAAhIg5g");
	this.shape_13.setTransform(44.8231,32.0038);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).wait(2));

	// Layer_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABRAdQgEgEAAgGIAAgeQAAgFAEgFQADgEAFAAQAEAAADAEQAEAFAAAFIAAAeQAAAGgEAEQgDAEgEAAQgFAAgDgEgAAtAdQgDgEAAgGIAAgeQAAgFADgFQADgEAFAAQAEAAAEAEQADAFAAAFIAAAeQAAAGgDAEQgEAEgEAAQgFAAgDgEgAg8AWQgEgEAAgGIAAgfQAAgFAEgEQADgEAFAAQAEAAADAEQAEAEAAAFIAAAfQAAAGgEAEQgDAEgEAAQgFAAgDgEgAhgAWQgDgEAAgGIAAgfQAAgFADgEQADgEAFAAQAEAAAEAEQADAEAAAFIAAAfQAAAGgDAEQgEAEgEAAQgFAAgDgEg");
	this.shape_14.setTransform(39.325,93.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(4));

	// Layer_4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#423932").ss(1,1,1).p("AjjhxQAvgogShPICZAAICZAAQAFAjg1AlQAVADAbgMQgFAXgiAVQBKCGgRCJQBghGAchdIAIA+IARgtQADApgLApIANgKQgEBmhjAgQgtAOgegKQgNALgdACIgeAAQhnAQhAgJIAAgOAjjhxQgJAGgHAGIAQALQAVAIAGAKQAZBbBFAIQAuACAbgWQAYgWgYghAjzhlQggAagDAjQARAiAxALQgBAVABATQg1AHAKBbQgLAFgGAOQgLAZAGAdQAZAQBzgQAivhdQBGgFAmA9QASgIAEgOQATgMgIgcQg3g4hjAXQgWAJgRAKAjUAFQAPAEAegCAjjCMQgRgDgLAGAhnCQQgZAMgJAjIAAAZAgaCSQgxgQgcAOAAGAVQh0ANAHBuAjUAtQAFCFBAAb");
	this.shape_15.setTransform(56.0055,74.2224);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9E451B").s().p("AgtCNQAshUg0gwQhDgzALgxQAMgwhBhYICaAAQAFAjg1AlQAVADAbgMQgFAXgiAVQBJCGgRCJQBghGAchdIAIA+IARgtQADApgLApIANgKQgEBnhjAfQgtAPgdgLQgNALgdACQgDg6AOgdg");
	this.shape_16.setTransform(67.725,73.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],0,0,0,0,0,28.4).s().p("AgrDmIAAgOQhzAQgZgQQgFgdAKgZQAGgOALgFIABAAIAAAAIABgBQAHgDAIAAIABAAIAAAAIAJABIAAAAIABAAIgBAAIAAAAIgJgBIAAAAIgBAAQgIAAgHADIgBABIAAAAIgBAAQgKhbA2gHQAECFBAAbQhAgbgEiFQgBgTAAgVQgxgLgRgiQADgjAggaIAQALQAVAIAGAKQAaBbBEAIIAJAAIAAAAIABAAQAkAAAYgSIABAAIABgBIABgBQALgKAAgPQAAgOgLgQQALAQAAAOQAAAPgLAKIgBABIgBABIgBAAQgYASgkAAIgBAAIAAAAIgJAAQhEgIgahbQgGgKgVgIIgQgLIAQgMQAvgogShPICZAAQBABYgLAwQgLAxBCAzQA1AwgtBUQgOAdAEA6IgfAAQhDAKgzAAQgaAAgXgDgAgrC/IAAAZIAAgZQAJgjAZgMIABAAIAAgBQAMgGAQAAIAAAAIABAAQAUAAAaAJQgagJgUAAIgBAAIAAAAQgQAAgMAGIAAABIgBAAIAAgLQAAhjBugNQhuANAABjIAAALQgZAMgJAjgAhZAIIAQgBIABAAIgBAAIgQABIAAAAIgBAAQgPAAgLgDIgBAAIAAAAIgBAAIABAAIAAAAIABAAQALADAPAAIABAAIAAAAgAAaglQATgIAEgOQANgIAAgRQAAgHgCgIIgCgCIgBgBQgnglg6AAIAAAAIAAAAQgZAAgbAGIgCABQgWAJgRAKQARgKAWgJIACgBQAbgGAZAAIAAAAIAAAAQA6AAAnAlIABABIACACQACAIAAAHQAAARgNAIQgEAOgTAIIAAgBIgCgCIgCgDQghgyg7gBIAAAAIAAAAIgKABIAKgBIAAAAIAAAAQA7ABAhAyIACADIACACIAAABIAAAAgAgJCQIAAAAg");
	this.shape_17.setTransform(46.5762,74.2224);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#423932").ss(1,1,1).p("AjshxQAugogRhPICZAAICZAAQAFAjg1AlQAVADAbgMQgFAXgiAVQBICDgPCMQAJgGAJgHQBXgpAthFQABgDABgCIgEAbIgEAjIAAAAIAAAAIAAAAIABgBIAbgmQgHAkgQAgQgDAFgDAFIADgBIAMgFQgeBihoAEQgcABgVgFQgNAKgcACIgeAAQhnAQhAgJIAAgOAEFBQIABgBAjshxQgJAGgHAGIAQALQAVAIAGAKQAZBbBFAIQAuACAbgWQAYgWgYghAj8hlQggAagDAjQARAiAxALQgBAVABATQg1AHAKBbQgLAFgGAOQgLAZAGAdQAZAQBzgQAi4hdQBGgFAmA9QASgIAEgOQATgMgIgcQg3g4hjAXQgWAJgRAKAjdAFQAPAEAegCAjsCMQgRgDgLAGAhwCQQgZAMgJAjIAAAZAgCAVQh1ANAHBuAgjCSQgxgQgcAOAjdAtQAFCFBAAb");
	this.shape_18.setTransform(56.9305,74.2224);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9E451B").s().p("Ag3CNQAthUg1gwQhCgzALgxQALgwhAhYICZAAQAGAjg1AlQAVADAagMQgEAXgiAVQBHCDgPCMIASgNQBXgpAthFIgCAWIgFAjIAAABIABgBIAAgBIAcglQgHAjgQAgIgGAKIADgBIAMgFQgeBihoAEQgbABgVgFQgNAKgcACQgEg6AOgdg");
	this.shape_19.setTransform(68.65,73.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],0,0,0,0,0,28.4).s().p("AgrDmIAAgOQhzAQgZgQQgFgdAKgZQAGgOALgFIABAAIAAAAIABgBQAHgDAIAAIABAAIAAAAIAJABIAAAAIABAAIgBAAIAAAAIgJgBIAAAAIgBAAQgIAAgHADIgBABIAAAAIgBAAQgKhbA2gHQgBgTAAgVIABAAIABAAQALADAPAAIABAAIAAAAIAQgBIABAAIgBAAIgQABIAAAAIgBAAQgPAAgLgDIgBAAIgBAAQgxgLgRgiQADgjAggaIAQALQAVAIAGAKQAaBbBEAIIAJAAIAAAAIABAAQAkAAAYgSIABAAIABgBIABgBQALgKAAgPQAAgOgLgQQALAQAAAOQAAAPgLAKIgBABIgBABIgBAAQgYASgkAAIgBAAIAAAAIgJAAQhEgIgahbQgGgKgVgIIgQgLIAQgMQAvgogShPICZAAQBABYgLAwQgLAxBCAzQA1AwgtBUQgOAdAEA6IgfAAQhDAKgzAAQgaAAgXgDgAgrC/IAAAZIAAgZQAJgjAZgMIABAAIAAgBQAMgGAQAAIAAAAIABAAQAUAAAaAJQgagJgUAAIgBAAIAAAAQgQAAgMAGIAAABIgBAAIAAgLQAAhjBugNQhuANAABjIAAALQgZAMgJAjgAgxDNQhAgbgEiFQAECFBAAbgAAaglQATgIAEgOQANgIAAgRQAAgHgCgIIgCgCIgBgBQgnglg6AAIAAAAIAAAAQgZAAgbAGIgCABQgWAJgRAKQARgKAWgJIACgBQAbgGAZAAIAAAAIAAAAQA6AAAnAlIABABIACACQACAIAAAHQAAARgNAIQgEAOgTAIIAAgBIgCgCIgCgDQghgyg7gBIAAAAIAAAAIgKABIAKgBIAAAAIAAAAQA7ABAhAyIACADIACACIAAABIAAAAg");
	this.shape_20.setTransform(46.5762,74.2224);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#9E451B","#D96D39"],[0.396,0.651],-31.7,-10.4,0.8,-10.4).s().p("AADAKIgDAJIgCABIAFgKgAgBgSIAAAAIAAAAgAAAgTIgBABIAAAAg");
	this.shape_21.setTransform(83.2375,84.1125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.1,53.2,36.99999999999999,45.39999999999999);
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