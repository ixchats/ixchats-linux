(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.fido_hi5 = function(mode,startPosition,loop) {
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

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2AzQgDgEAAgEIAAgaQAAgEADgFQADgCAEAAQAEAAACACQADAFAAAEIAAAaQAAAEgDAEQgCAEgEAAQgEAAgDgEgAAYAzQgCgEAAgEIAAgaQAAgEACgFQADgCAEAAQAEAAADACQACAFAAAEIAAAaQAAAEgCAEQgDAEgEAAQgEAAgDgEgADGgOQgCgDAAgEIAAgUQAAgEACgDQADgDADAAQACAAADADQACADAAAEIAAAUQAAAEgCADQgDADgCAAQgDAAgDgDgACvgOQgDgDAAgEIAAgUQAAgEADgDQACgDACAAQAEAAACADQACADAAAEIAAAUQAAAEgCADQgCADgEAAQgCAAgCgDgAi6gUQgDgDAAgDIAAgUQAAgDADgDQACgCADAAQACAAADACQACADAAADIAAAUQAAADgCADQgDADgCgBQgDABgCgDgAjQgUQgCgDAAgDIAAgUQAAgDACgDQACgCADAAQACAAADACQACADAAADIAAAUQAAADgCADQgDADgCgBQgDABgCgDg");
	this.shape.setTransform(41.625,92.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEA9QgJgCgBgFQgBgFAHgGQAIgGAMgCIABgBQAMgCAJACQAKABAAAFQACAGgIAGQgHAFgNADIgGACIgFAAIgLgBgAh1AVQgGgCgDgHQgCgHADgFQADgGAGgCQAHgDAGADQAGADACAFQADAHgDAGQgDAGgGADIgGABQgDAAgEgCgABogcQgGgDgDgHQgCgHADgFQACgHAHgCQAHgDAGADQAGADACAGQADAHgDAGQgDAHgGACIgGABQgEAAgDgBg");
	this.shape_1.setTransform(47.9547,37.8458);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({y:36.0958},0).wait(2));

	// Layer_13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTBSQgUgFgCgNQgDgMAPgMQARgNAZgGIADgBQAXgEASAEQAUAFADAMQADAMgQANQgQANgZAGIgKACIgQABQgKAAgJgCgAiCAeQgMgIgDgOQgDgNAHgNQAIgMAOgCQAOgEANAIQALAHAEAPQADANgHANQgJAMgOADIgHABQgKAAgJgGgABdgTQgMgIgDgNQgDgOAIgNQAHgMAOgDQAPgEAMAHQAMAIADAQQADANgHAMQgIAMgOAEIgIABQgKAAgJgGg");
	this.shape_2.setTransform(48.425,38.2666);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({y:36.5166},0).wait(2));

	// Layer_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#423932").ss(1,1,1).p("AisDzQBdi5Aah8QAPhHgGg0QgLhmBNgTQBJgSArA2QApAwgGBIQgDAsgMAsQgQA3ghA3Qh2DIhdBH");
	this.shape_3.setTransform(77.1383,39.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F8AF71","#CD986B"],[0.396,0.729],-24.2,32.7,0,-24.2,32.7,35.5).s().p("Ai3EWQArgZgWgKQBdi5Abh8QAOhHgGg0QgKhmBMgTQBJgSArA2QApAwgGBIQgCAsgMAsQgRA3ggA3Qh4DIhbBHQgOgdhOgIgAAijSQgQAOAAATQAAAUAQANQARAOAXAAQAWAAARgOQAQgNAAgUQAAgTgQgOQgRgNgWAAQgXAAgRANgAgQkIQgGAHAAALQAAAKAGAIQAGAIAKAAQAHAAAHgIQAGgIAAgKQAAgLgGgHQgHgHgHAAQgKAAgGAHgAB0kEQgHAGAAAKQAAAJAHAHQAGAGAKAAQAIAAAHgGQAGgHAAgJQAAgKgGgGQgHgGgIAAQgKAAgGAGgAAqkbQgIAIAAAKQAAAKAIAJQAGAHALAAQAKAAAHgHQAHgJAAgKQAAgKgHgIQgHgHgKAAQgLAAgGAHg");
	this.shape_4.setTransform(76.0883,39.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgQgNAAgUQAAgTAQgOQASgMAVAAQAWAAARAMQAQAOAAATQAAAUgQANQgRAOgWAAQgVAAgSgOgAhRgRQgGgIAAgKQAAgLAGgHQAHgHAJAAQAJAAAGAHQAGAHAAALQAAAKgGAIQgGAIgJAAQgJAAgHgIgAAzgRQgHgHAAgJQAAgKAHgGQAHgGAJAAQAIAAAHAGQAGAGAAAKQAAAJgGAHQgHAGgIAAQgJAAgHgGgAgWgjQgIgJAAgKQAAgKAIgIQAGgHALAAQAJAAAHAHQAIAIAAAKQAAAKgIAJQgHAHgJAAQgLAAgGgHg");
	this.shape_5.setTransform(82.55,18.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("Ai/ENQBnjMAdiKQAQhOgGg6QgMhxBVgVQBRgUAvA8QAuA1gHBQQgDAwgNAxQgSA9gkA9QiEDehmBO");
	this.shape_6.setTransform(77.7156,35.7984);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F8AF71","#CD986B"],[0.396,0.729],-26.8,36.2,0,-26.8,36.2,39.3).s().p("AjLE0QAvgcgYgLQBnjMAeiKQAQhOgHg6QgMhxBVgVQBRgUAwA8QAtA1gGBQQgDAwgOAxQgSA9gkA9QiEDehlBOQgQgghWgJgAAmjpQgTAQAAAVQAAAWATAOQASAQAZAAQAZAAASgQQASgOAAgWQAAgVgSgQQgSgOgZAAQgZAAgSAOgAgSklQgHAJAAAMQAAALAHAIQAHAJAKAAQAJAAAHgJQAHgIAAgLQAAgMgHgJQgHgHgJAAQgKAAgHAHgACAkgQgIAHAAALQAAAKAIAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgLgHgHQgHgHgKAAQgKAAgHAHgAAuk5QgJAIAAAMQAAALAJAJQAHAIAMAAQALAAAIgIQAIgJAAgLQAAgMgIgIQgIgIgLAAQgMAAgHAIg");
	this.shape_7.setTransform(76.5656,35.7984);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggBJQgTgPAAgVQAAgWATgPQASgOAYAAQAZAAASAOQASAPAAAWQAAAVgSAPQgSAPgZAAQgYAAgSgPgAhagTQgGgJAAgLQAAgMAGgIQAIgIAKAAQAKAAAHAIQAGAIAAAMQAAALgGAJQgHAJgKAAQgKAAgIgJgAA5gTQgIgHAAgKQAAgLAIgHQAHgHAKAAQAKAAAHAHQAHAHgBALQABAKgHAHQgHAHgKAAQgKAAgHgHgAgYgnQgJgJAAgMQAAgLAJgJQAHgHAMAAQAKAAAIAHQAIAJAAALQAAAMgIAJQgIAIgKAAQgMAAgHgIg");
	this.shape_8.setTransform(83.7,12.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).wait(2));

	// Layer_12
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#423932").ss(1,1,1).p("ACFlUQAMgDAKADQAZAFAUAoQBcACADBMQADBIAkAPQABAAACABQAnAOgLA6QgLA5AdARQAdASgGBBQgCAbgTAVQAQAzgBAiQgJA/g/gMQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQgUgOgCgmQgEgjAQggQAMglgjgmQglglANg9QAHgvgnhBQgng9AdgaQACgDADgCgAitlDQgRgBgMAGQgeAMgOAsQh0AbAUBKQAOBGgoAZQgCAAgCACQgsAYAeA1QAeA2ggAZQggAYAaA+QAKAZAeAPQgHA2ANAgQAcA6BMgdQAVgIAHgKQA0ALAagkQAWgegTgwIgSgeQAVgTgGglQgFgjgegcQgbghAigsQAlgvggg4QgZgqAihKQAdhGgsgSQgDgCgDAAg");
	this.shape_9.setTransform(46.9467,46.7931);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9E451B").s().p("Ak9DgQhGguAigfQBAgwgwgkQgxgmAQhDQAogZgOhGQgUhLB0gaQAOgsAegMQAMgHARABIAGACQAsASgdBGQgiBKAZArQAgA3glAuQgiAuAbAhQAeAcAFAiQAGAlgVAUQgeBOhIguQAjBNgpAEQhDgEANhbgAE1C+QgsA8gohGQgUgPgCglQgEgjAQghQAMgmgjglQglglANg8QAHgvgnhBQgng9AdgbIAFgEQAMgEAKAEQAZAFAUAoQBcABADBNQADBHAkAPQAbA+geAuQgbAvA7AiQAgAVgrA9QAdBVgxASIgDABQgbAAAJhOg");
	this.shape_10.setTransform(47.1081,44.4125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D2808").s().p("AlcDGQgNggAHg2QgegPgKgZQgag+AggXQAggZgeg2Qgeg2AsgYIAEgCQgQBEAxAmQAwAkhAAvQgiAfBGAvQgNBaBDAEQApgDgjhNQBIAtAehOIASAeQATAwgWAeQgaAkg0gLQgHAKgVAIQgZAKgUAAQgpAAgSgngAFICyQgSgEgGgIQgmAWgbgeQgXgXAFg0IAGghQAoBHAsg9QgKBTAfgFQAxgSgdhWQArg7gggWQg7giAbguQAegwgbg9IADABQAnAOgLA6QgLA6AdARQAdASgGBBQgCAagTAVQAQAzgBAiQgIA1guAAQgIAAgKgCg");
	this.shape_11.setTransform(46.9467,57.3556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).wait(2));

	// Layer_6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#423932").ss(1,1,1).p("ABjgzQgnADgNgwQgEAPgGAMQgsBqhrhVQANAkAPAbQAnBIA3AKQAPABAOgDIABgBQADgBADgBQA+gbgHh0QASgCAYgMAiMghQAVgVAegF");
	this.shape_12.setTransform(46.275,55.8475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA3800").s().p("AAhApQg3gKgohHQBcABAgBNIAAAAIAAABQgKACgKAAIgJAAg");
	this.shape_13.setTransform(43.8,61.4225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C0000").s().p("AAtBfQgghNhcgCQgPgbgMgkQBqBVAthpQAFgMAEgPQANAvAngDQAIB0g+AbIgHACg");
	this.shape_14.setTransform(45.5155,55.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#423932").ss(1,1,1).p("ABtg5QgrAEgOg1QgFARgGANQgxB1h1heQANAoARAdQArBQA9ALQARABAPgDIABgBQADgCAEgBQBEgegIiAQAUgBAagNAiaglQAXgWAhgG");
	this.shape_15.setTransform(46.025,55.3475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA3800").s().p("AAlAtQg9gKgshPQBmABAiBVIABAAIgBABQgKACgMAAIgJAAg");
	this.shape_16.setTransform(43.3,61.4975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C0000").s().p("AAyBpQgjhWhmgBQgQgegOgoQB1BeAyh0QAGgOAEgQQAOA1ArgEQAJCAhFAeIgHACg");
	this.shape_17.setTransform(45.1969,55.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).wait(2));

	// Layer_17
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("ABSgpQAxgUA8A0AhdgLQg0gHgtBC");
	this.shape_18.setTransform(47.025,31.0841);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(2).to({y:29.3341},0).wait(2));

	// Layer_15
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9E451B").s().p("AgsBiQgpgSgQgqQgPgpATgpQASgpAqgPQApgQApASQApAUAPApQAQApgTApQgTApgpAPQgTAHgSAAQgWAAgXgKg");
	this.shape_19.setTransform(36.5526,34.3022);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(2).to({y:32.5522},0).wait(2));

	// Layer_11
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#423932").ss(1,1,1).p("Aj+A5QAYBtBcA9QBaA8BmgUQACgBADAAQBpgYA7hgQA5hdgZhtQgZhuhbg9QgpgcgsgJQgSgEgTgCQgVgCgWADQgPABgQADQgRAEgPAGQg3ATgoApQgVAVgQAcQg6BeAZBtg");
	this.shape_20.setTransform(44.6151,37.9444);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-2,-7.8,0,-2,-7.8,40.1).s().p("AiKDjQhcg9gYhtQgZhtA6heQAQgcAVgVQAogpA3gTQAPgGARgEQAQgDAPgBQAWgDAVACQATACASAEQAsAJApAcQBbA9AZBuQAZBtg5BdQg7BghpAYIgFABQgaAFgZAAQhKAAhDgtg");
	this.shape_21.setTransform(44.6151,37.9444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},2).wait(2));

	// Layer_3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#423932").ss(1,1,1).p("Ai1gbQgtgQgKguIAAAgIgUgiQgLAZAQAdIgSgMQgBA4BOAbAi0BHQgbAHgJAPQgDAGAAAIQgCAaAiAKQAjAKAlgYQgbgMgSgSQgDgDgCgDQgJgKgGgMQgFgKgEgKQgDgIAAgJAhLCOQgFgbAFgWQACgIADgHAi1gbQgOAhADAcABACEIgCAUQAiAWgNAaQgVAcg5gOQhEgRgLgyQAAgDgBgCQgWgFgSgIAi1gbQAUgwA2g7QBQg5BFgTQA5gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDQAHAlgTAUQgCADgCACQAeADgHAbQgNAWgkADQhGABgHgiABKAxIgKBTADVAkQgEADgDAEQgZAcglAWQgXAOgbANQgOAGgQAG");
	this.shape_22.setTransform(41.4519,77.0263);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9E451B").s().p("AhZCVQgJgKgGgMQgFgKgEgKQgDgIAAgJQgDgcAOgiQAUgvA2g7QBPg5BGgTQi4CEgSCrIAAAGIgFgGg");
	this.shape_23.setTransform(33.8735,71.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],2.9,-5,0,2.9,-5,39.3).s().p("AgwDWQhFgRgLgyIgBgFQgWgFgSgIQgbgMgSgSIAAgGQASirC5iEQA4gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDIgHAHQgZAcglAWQgXAOgbANIgeAMIAKhTIgKBTIgCAUQAiAWgNAaQgOATgeAAQgPAAgSgFgAiBCOQgCgOAAgMQAAgMACgLIAFgPIgFAPQgCALAAAMQAAAMACAOg");
	this.shape_24.setTransform(46.8783,77.0263);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-86.1,-9.2,0,-86.1,-9.2,23.5).s().p("ABeAZQAbgNAXgNQAkgWAZgcIAHgHQAIAlgTAUIgFAEQAfADgIAbQgNAWgjADIgEABQhDAAgGgigAi7AwQgjgKACgaQABgIADgFQAIgPAbgHQAGAMAJAKIAFAFQASASAbAMQgaARgYAAQgLAAgKgDg");
	this.shape_25.setTransform(41.5185,86.5014);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#9E451B","#D96D39"],[0.396,0.651],-59.4,2.8,-32.4,2.8).s().p("AgrgVIASAMQgQgcALgZIAUAiIAAggQAKAuAsAPQgOAiADAcQhNgcABg4g");
	this.shape_26.setTransform(18.8736,74.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#423932").ss(1,1,1).p("Ai1gbQgtgQgKguIAAAgIgUgiQgLAZAQAdIgSgMQgBA4BOAbAi0BHQgbAHgJAPQgDAGAAAIQgCAaAiAKQAjAKAlgYQgbgMgSgSQgDgDgCgDQgJgKgGgMQgFgKgEgKQgDgIAAgJAhLCOQgFgbAFgWQACgIADgHAi1gbQgOAhADAcABACEIgCAUQAiAWgNAaQgVAcg5gOQhEgRgLgyQAAgDgBgCQgWgFgSgIAi1gbQAUgwA2g7QBQg5BFgTQA5gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDQAHAlgTAUQgCADgCACQAeADgHAbQgNAWgkADQhGABgHgiADVAkQgEADgDAEQgZAcglAWQgXAOgbANQgOAGgQAGABKAxIgKBT");
	this.shape_27.setTransform(41.4519,77.0263);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],2.9,-5,0,2.9,-5,39.3).s().p("AgwDWQhFgRgLgyIgBgFQgWgFgSgIQgbgMgSgSIAAgGQASirC5iEQA4gOAyALQAWAFAVAKQAUAKASAOQAOAQAOAbQALAWAAAWQACA4g6BDIgHAHQgZAcglAWQgXAOgbANIgeAMIAKhTIgKBTIgCAUQAiAWgNAaQgOATgeAAQgPAAgSgFgAiBCOQgCgOAAgMQAAgMACgLIAFgPIgFAPQgCALAAAMQAAAMACAOgAAKCEg");
	this.shape_28.setTransform(46.8783,77.0263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_28},{t:this.shape_23},{t:this.shape_27}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.3,49.9,42.7,50.00000000000001);
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