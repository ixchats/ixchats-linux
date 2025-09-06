(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.fido_cry = function(mode,startPosition,loop) {
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

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69B3CB").s().p("AEcCiQgEgEAAgGQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgFAAQgGAAgEgEgAkuCiQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAFAEQADAEAAAFQAAAGgDAEQgFAEgGAAQgFAAgEgEgAElB0QgUgFgNgKQgNgJACgIQACgHAQgCQAQgBAUAGQAUAEANAKQANAJgBAIQgCAHgRACIgIAAQgNAAgPgEgAlIB4QgQgCgDgHQgCgIAOgJQANgKAUgEQAUgGAQABQARACABAHQADAIgOAJQgMAKgVAFQgPAEgNAAIgIAAgAGMA+QgQgGAAgKQAAgJAQgHQAOgHAWABQAUgBAPAHQAQAHAAAJQAAAKgQAGQgPAIgUAAQgWAAgOgIgAnSA+QgPgGgBgKQABgJAPgHQAPgHAUABQAWgBAPAHQAPAHAAAJQAAAKgPAGQgPAIgWAAQgUAAgPgIgAFdh0QAhgNAIAoQAGAciIBGQAThaBGgjgAmFhZQAIgoAhANQBHAjASBaQiIhGAGgcgAGnh6QgIgHAAgLQAAgKAIgIQAHgHALAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgLAAgHgIgAnKh6QgIgHAAgLQAAgKAIgIQAHgHALAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgLAAgHgIg");
	this.shape.setTransform(51.35,17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69B3CB").s().p("ADBBDQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEgAjTBDQgEgEAAgFQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgGAAgEgEgADKAWQgVgGgMgJQgNgJACgHQACgIAQgBQAPgCAVAGQAUAFANAJQANAJgCAHQgCAIgQABIgIABQgNAAgPgEgAjtAZQgQgBgCgIQgCgHANgJQANgJAUgFQAVgGAPACQARABABAIQADAHgOAJQgMAJgVAGQgPAEgNAAIgIgBgAEwggQgPgGAAgJQAAgKAPgHQAPgGAVAAQAVAAAPAGQAPAHAAAKQAAAJgPAGQgPAIgVAAQgVAAgPgIgAl3ggQgPgGAAgJQAAgKAPgHQAPgGAVAAQAVAAAPAGQAPAHAAAKQAAAJgPAGQgPAIgVAAQgVAAgPgIg");
	this.shape_1.setTransform(50.725,31.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

	// Layer_8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAQQgTgCgagIIABgBQACgCAEAAIAoAAQACAAADACQADABAAADQAAADgDACQgDADgDgBgAgTgCQgEAAgCgCQgDgDAAgCQAAgDADgCQACgBAEAAIAnAAQADAAADABQADACAAADQAAACgDADQgDACgCAAg");
	this.shape_2.setTransform(82.35,96.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAQQgTgCgagJIABgBQACgBAEAAIAnAAQAEAAADABQACACAAAEQAAACgCACQgDACgEAAgAgTgCQgEAAgCgCQgDgDAAgCQAAgCADgDQACgCAEABIAnAAQAEgBADACQACADAAACQAAACgCADQgDACgEAAg");
	this.shape_3.setTransform(54.3,99.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2).wait(2));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#423932").ss(1,1,1).p("AAUAlQABAMAHAJQAIAJAMAAQALAAAIgJQAIgJAAgMAgohjQAIAUAgAPIBeArQA9AjgVA5QgVA0hmgoIiVg1");
	this.shape_4.setTransform(77.1328,87.8776);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8AF71").s().p("AALBTIiVg1QAfgMAVgRQAzgmgFg+QAIAUAgAPIBeArQA9AjgVA5QgMAdgmAAQgdAAgsgRgAAwBDQALAAAIgJQAIgJAAgMQAAAMgIAJQgIAJgLAAQgMAAgIgJQgHgJgBgMQABAMAHAJQAIAJAMAAIAAAAg");
	this.shape_5.setTransform(77.1328,87.8776);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:77.1328,y:87.8776}},{t:this.shape_4,p:{x:77.1328,y:87.8776}}]}).to({state:[{t:this.shape_5,p:{x:49.0828,y:91.2276}},{t:this.shape_4,p:{x:49.0828,y:91.2276}}]},2).wait(2));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#423932").ss(1,1,1).p("AhCAPQgYAXAKA/QA4AsBegkQAmh2hChFQAGgigjgMQgegCgaAcQgiAtALBEQAFAlASAsAAqhOQgJgKgLgJ");
	this.shape_6.setTransform(36.7108,79.9858);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8AF71").s().p("AhQBlQgKg/AYgXQAFAlASAsQgSgsgFglQgLhEAigtQAagcAeACQAjAMgGAiQBCBFgmB2QgqAQgiAAQgrAAgfgYgAAqhOQgJgKgLgJQALAJAJAKg");
	this.shape_7.setTransform(36.7108,79.9858);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#423932").ss(1,1,1).p("AhCAPQAFAlASAsAAqhOQgJgKgLgJAhCAPQgYAXAKA/QA4AsBegkQAmh2hChFQAGgigjgMQgegCgaAcQgiAtALBEg");
	this.shape_8.setTransform(76.6108,76.1358);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:36.7108,y:79.9858}},{t:this.shape_6}]}).to({state:[{t:this.shape_7,p:{x:76.6108,y:76.1358}},{t:this.shape_8}]},2).wait(2));

	// Layer_12
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#423932").ss(1,1,1).p("ABelSQALgEALABQAZAFAXAlQBcgEAIBJQAIBEAlAMQACAAABABQAoALgHA5QgGA5AeAPQAeAOgBBAQAAAZgSAVQAUAwAAAhQgDA+hAgIQgSgDgHgHQgkAYgegcQgXgVAAgyIAFgfQgWgNgGgkQgGghAPghQAJgkglgiQgogiAIg7QAFgugug7Qgpg5AagcQACgCADgCgAi6kxQgPABgMAGQgcAMgNArQhuAdAUBHQAQBDgnAZQgCAAgBACQgrAYAeAyQAeA0geAYQgeAYAaA8QALAYAdANQgFA1AMAeQAcA5BIgeQAVgIAGgKQAzAJAYgkQATgcgTgvIgSgcQAVgUgHgjQgFgigfgZQgZggAfgsQAhgugfg0QgYgpAehJQAbhEgqgQQgDgCgEgBg");
	this.shape_9.setTransform(52.991,61.6841);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9E451B").s().p("Ak1DkQhEgrAggeQA8gwgugjQgwgjAOhBQAngZgQhDQgUhHBugdQANgrAcgMQAMgGAPgBIAHADQAqAQgbBEQgeBJAYApQAfA0ghAtQgfAtAZAgQAfAZAFAiQAHAjgVAUQgaBNhHgsQAkBLgoAEQhAgDAKhYgAE1CgQgnA+gshBQgWgNgGgkQgGghAPghQAJglglghQgogiAIg7QAFgugug7Qgpg5AagcIAFgEQALgEALABQAZAFAXAlQBcgEAIBJQAIBEAlAMQAfA6gZAwQgYAuA8AcQAiATgnA8QAkBRgwAUIgFABQgZAAADhKg");
	this.shape_10.setTransform(52.7625,59.3639);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D2808").s().p("AlUDSQgMgfAFg1QgdgNgLgYQgag7AegYQAegYgegzQgeg0ArgYIADgCQgOBCAwAjQAuAkg8AvQggAdBEArQgKBZBAACQAogEgkhKQBHArAahNIASAdQATAugTAdQgYAjgzgIQgGAJgVAIQgZAKgUAAQglAAgSgkgAFNCbQgSgDgHgIQgkAYgegbQgXgWAAgxIAFggQAsBBAng9QgEBQAfgHQAwgUgkhRQAng7gigUQg8gcAYgvQAZgvgfg6IADABQAoALgHA4QgGA6AeAOQAeAPgBBAQAAAagSATQAUAwAAAhQgDA3gzAAIgNAAg");
	this.shape_11.setTransform(52.991,71.2452);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#423932").ss(1,1,1).p("ABblIQALgDAKABQAYAFAWAjQBagEAHBHQAIBCAkAMQACAAABABQAnAKgHA3QgGA4AdAOQAdAOAAA+QgBAYgRAUQAUAvAAAgQgEA8g9gIQgSgCgHgIQgjAYgdgbQgWgVAAgwIAEgeQgUgNgGgiQgGghAOggQAJgigkgiQgnghAIg5QAFgsgsg6Qgpg3AagbQACgCADgCgAi0knQgPAAgMAGQgbAMgMAqQhrAbATBGQAQBBgmAXQgCABgBABQgpAYAdAwQAcAygdAYQgcAXAZA6QAKAXAcANQgFAzAMAeQAbA3BGgeQAVgHAFgJQAxAIAYgjQATgbgTgtIgRgcQAUgTgHgiQgFghgegYQgYgfAegrQAggsgegzQgYgoAehGQAahCgpgPQgCgCgEgBg");
	this.shape_12.setTransform(53.0159,61.7288);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9E451B").s().p("AkrDdQhCgqAfgcQA6gvgsgiQgvgiAOg/QAlgYgPhBQgUhFBrgcQANgpAbgNQAMgFAOgBQAEABADACQApAQgbBBQgdBHAXAnQAfAzghAsQgeAsAZAeQAdAZAFAgQAHAjgUATQgZBKhFgqQAjBIgnAEQg+gCAKhWgAErCbQglA8grg/QgVgNgGgiQgFggAOggQAJgkglggQgmghAHg5QAFgsgsg6Qgog3AagbIAEgEQALgEAKABQAZAFAWAjQBZgDAIBGQAIBDAjALQAeA5gYAuQgXAsA7AbQAgATglA6QAiBPguATIgFABQgZAAADhIg");
	this.shape_13.setTransform(52.7938,59.4889);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D2808").s().p("AlKDLQgMgdAFg0QgcgMgKgXQgZg6AcgXQAdgXgcgyQgdgyApgXIADgCQgOBAAvAiQAtAig6AuQggAcBDAqQgKBWA+ACQAmgEgihIQBEAqAahKIARAbQATAtgTAcQgYAigxgIQgFAJgVAIQgYAKgTAAQgkAAgSgkgADqCIQgWgUAAgwIAEgfQArA/Amg8QgDBOAegHQAugTgjhPQAmg5ghgTQg7gbAYgtQAYgugeg5IADABQAnALgHA3QgGA3AdAPQAdAOAAA+QgBAZgRATQAUAuAAAgQgEA8g9gHQgSgDgHgHQgQALgPAAQgRAAgQgPg");
	this.shape_14.setTransform(53.0159,70.9899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).wait(2));

	// Layer_17
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("ACqANQg5gOgWgvAhggeQgOAog6An");
	this.shape_15.setTransform(51.85,39.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("ACeAMQg1gNgVgrAhagcQgNAlg2Ak");
	this.shape_16.setTransform(52.05,40.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},2).wait(2));

	// Layer_16
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,1,1).p("ACSgLQgrg7gkBNAhBATQgsg6gkBN");
	this.shape_17.setTransform(53.025,46.6464);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("ACIgLQgog2giBHAg9ARQgpg2ghBI");
	this.shape_18.setTransform(53.125,46.3556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_18}]},2).wait(2));

	// Layer_14
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSALQgJgDAAgFQgBgFAIgEQAIgEAMgBQALgCAIAEQAJABAAAGQABAEgIAFQgIAEgLABIgIABQgHAAgFgCg");
	this.shape_19.setTransform(53.2749,50.1556);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRAKQgIgDAAgEQgBgFAHgDQAIgEALgBQAKgCAIAEQAIABAAAFQABAEgIAEQgHAEgKABIgJABIgKgCg");
	this.shape_20.setTransform(53.3749,49.6096);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},2).wait(2));

	// Layer_13
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgnAYQgRgHgBgLQgCgLAQgKQARgKAYgDQAXgCASAHQASAGABAMQABALgQAKQgQAKgYACIgNABQgQAAgNgFg");
	this.shape_21.setTransform(53.2213,50.9138);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkAXQgQgHgBgLQgCgJAPgKQAQgJAWgDQAWgCARAHQAQAGABALQABAJgPAKQgPAJgWACIgNABQgPAAgLgEg");
	this.shape_22.setTransform(53.3211,50.3145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},2).wait(2));

	// Layer_10
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#423932").ss(1,1,1).p("AgKiHIAFAwQAFgBADABQBNgBAhBjQAgBiggADQghADgtgpQgnghgkAwQgGAIgHALQgaAogWgQQgRgQgGgUQgJgdANgmQA3hrA8gJ");
	this.shape_23.setTransform(54.3945,63.3909);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC2E00").s().p("AgSAaQgRgPgGgTQAngoAsAgIgNATQgSAcgPAAQgHAAgHgFg");
	this.shape_24.setTransform(46.05,73.9125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660200").s().p("AAjA+QgnghgkAwQgtghgnAoQgJgdANgmQA3hrA8gJQAFgBADABQBNgBAhBkQAgBhggADIgEAAQggAAgqgmg");
	this.shape_25.setTransform(54.3945,64.5739);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#423932").ss(1,1,1).p("AgFhFQAFgBADABQBHgBAfBOQAeBOgeADQgfABgqggQgkgagiAmQgFAHgGAIQgZAggUgNQgQgMgGgQQgIgXAMgfQAzhTA4gIgAgKhrIAFAm");
	this.shape_26.setTransform(54.415,62.4649);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EC2E00").s().p("AgQAVQgRgMgFgPQAkggApAaIgLAOQgSAXgOAAQgHAAgFgEg");
	this.shape_27.setTransform(46.65,70.7695);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660200").s().p("AAgAxQgkgagiAmQgqgagkAgQgIgXAMgfQAzhTA4gIIAIAAQBHgBAfBPQAeBNgeADIgDAAQgeAAgogfg");
	this.shape_28.setTransform(54.415,63.395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).wait(2));

	// Layer_15
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9E451B").s().p("Ag0BWQgkgVgKgpQgKgoAWgkQAWgkApgKQAogKAkAWQAkAWAJApQAKAogVAkQgWAkgpAKQgNADgLAAQgbAAgZgQg");
	this.shape_29.setTransform(41.4025,43.5333);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E451B").s().p("AgxBQQghgUgJglQgJglAUgiQAVgiAlgJQAmgJAiAUQAhAVAJAmQAJAlgUAhQgVAigmAJQgLADgLAAQgZAAgYgPg");
	this.shape_30.setTransform(42.3142,43.4451);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},2).wait(2));

	// Layer_11
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#423932").ss(1,1,1).p("AjzAYQAKBpBPBDQBPBEBkgKQBlgKBBhSQBAhRgLhoQgKhphOhEQgygqg8gMQgTgEgWAAQgNgBgPACQgQABgPAEQg1ALgqAjQgWARgSAXQhABSAKBog");
	this.shape_31.setTransform(51.3314,53.8079);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],-1,-7.5,0,-1,-7.5,37.7).s().p("AiaDEQhPhDgKhpQgKhoBAhSQASgXAWgRQAqgjA1gLQAPgEAQgBQAPgCANABQAWAAATAEQA8AMAyAqQBOBEAKBpQALBohABRQhBBShlAKIgZABQhVAAhFg7g");
	this.shape_32.setTransform(51.3314,53.8079);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},2).wait(2));

	// Layer_6
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#423932").ss(1,1,1).p("AiBCjQDpAvCOhUQBkg7gghfQg+i2j0AmQgiAFgnAKQhZAggzA6QgbAegQAlQgcANgOAWQgkALAGAnQAJAiBAAIQAdAWAkgEQAXAQAeACgAjdBUQAbA7BBAU");
	this.shape_33.setTransform(40.845,77.0478);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#F8AF71","#A1744E"],[0.396,0.729],3.5,1,0,3.5,1,33.4).s().p("AiBCjQhBgUgbg7QAbA7BBAUQgegCgXgQQgkAEgdgWQhAgIgJgiQgGgnAkgLQAOgWAcgNQAQglAbgeQAKBMAkgLQAzgSgBg9QBGgFAvhWQD0gmA+C2QAgBfhkA7QhbA2iBAAQhHAAhUgRg");
	this.shape_34.setTransform(40.845,77.0478);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9E451B").s().p("AhqATQAzg5BZggQAmgJAjgGQgvBWhGAFQABA8gzASQgFACgEAAQgcAAgJhDg");
	this.shape_35.setTransform(30.9,68.2868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_34},{t:this.shape_35},{t:this.shape_33}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.1,50.6,46.49999999999999,51.699999999999996);
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