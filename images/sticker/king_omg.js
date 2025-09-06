(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.king_omg = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36));

	// shock
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ECC60F").ss(2,1,1).p("Ak4hvIAzAsAlFBOIAvgSAlRgUIA1AKAkfCuIAnghAEQhPIAsgdADdiBIAmgsAEMBDIA5AXAEigFIAwAE");
	this.shape.setTransform(49.325,64.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ECC60F").ss(2,1,1).p("AFvBcIBPAfAGOgHIBCAFAF1htIA9goAm+BrIBBgYAnPgcIBKAOAmKDvIA1guAmsiZIBGA9AEviyIA1g8");
	this.shape_1.setTransform(49.275,64.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},2).to({state:[]},2).wait(13));

	// eyeoverlay
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABRALQgEgFAAgGQAAgGAEgFQAFgFAHAAQAHAAAFAFQAFAFAAAGQAAAGgFAFQgFAGgHAAQgHAAgFgGgAhoALQgFgFAAgGQAAgGAFgFQAFgFAHAAQAHAAAFAFQAEAFAAAGQAAAGgEAFQgFAGgHAAQgHAAgFgGg");
	this.shape_2.setTransform(55.225,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgAfQgHgFgCgJQgBgIAGgHQAEgGAIgBQAJgCAHAFQAHAEABAIQABAJgEAHQgFAHgJABIgEABQgGAAgFgEgABJACQgGgEgCgIQgBgIAFgHQAFgHAJgCQAHgBAHAFQAIAFABAIQABAJgFAHQgFAGgIABIgEAAQgGAAgGgEg");
	this.shape_3.setTransform(53.7834,38.009);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhbAtQgHgEgDgJQgCgHAEgIQADgHAIgDQAJgDAHAEQAIAEACAIQADAIgEAHQgEAIgJADIgGABQgEAAgFgCgABJgHQgIgEgCgJQgCgIADgHQAEgIAIgDQAIgCAHAEQAJAEACAIQADAIgFAIQgEAIgHACIgIABQgEAAgEgCg");
	this.shape_4.setTransform(52.2767,38.5647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},19).to({state:[{t:this.shape_4}]},2).wait(15));

	// pupils
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A36B00").s().p("ABNAcQgMgMAAgQQAAgQAMgLQAMgMAQAAQARAAALAMQALALAAAQQAAAQgLAMQgLAMgRAAQgQAAgMgMgAiEAcQgMgMAAgQQAAgQAMgLQAMgMARAAQAQAAAMAMQALALAAAQQAAAQgLAMQgMAMgQAAQgRAAgMgMg");
	this.shape_5.setTransform(55.15,40.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A36B00").s().p("Ah/A5QgRgNgDgUQgEgUAMgPQANgRAUgDQAUgEAQANQARALADATQADAUgLARQgMARgUAEIgJAAQgPAAgNgJgABGAXQgQgMgDgTQgEgUAMgRQANgQAUgEQAUgDAQAMQARAMADAUQADAVgLAPQgMARgUADIgJABQgPAAgOgKg");
	this.shape_6.setTransform(53.8665,39.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A36B00").s().p("Ah1BLQgTgKgGgTQgGgUAJgRQAKgSAUgHQATgGASAKQASAJAGASQAGAUgJASQgIATgUAGQgIADgIAAQgLAAgLgGgABJANQgSgKgGgSQgGgUAJgSQAKgSATgGQAUgHARAKQATAJAGATQAGAUgJASQgJASgTAGQgIADgIAAQgLAAgMgGg");
	this.shape_7.setTransform(52.4789,39.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},19).to({state:[{t:this.shape_7}]},2).wait(15));

	// brows
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ADIAAQhIgahXAlAjHAAQBIgZBPAi");
	this.shape_8.setTransform(53.925,31.063);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AC9gbQhNgchMBIAi8AkQBBgyBXAn");
	this.shape_9.setTransform(50.825,25.5719);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AC3g6QhRgPhBBRAi2A9QA5g8BcAb");
	this.shape_10.setTransform(45.7,25.3024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},19).to({state:[{t:this.shape_10}]},2).wait(15));

	// eyeback
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AglgVQAAAkgbAbQgaAbgmAAQglAAgbgbQgagbAAgkQAAgaANgVICbAAQANAVAAAagADbgVQAAAkgaAbQgbAbglAAQgmAAgagbQgbgbAAgkQAAgaANgVICbAAQANAVAAAag");
	this.shape_11.setTransform(53.775,41.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABBAqQgbgaAAglQAAgaANgVICbAAQANAVAAAaQAAAlgaAaQgbAbglAAQgmAAgagbgAjAAqQgagaAAglQAAgaANgVICbAAQANAVAAAaQAAAlgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_12.setTransform(53.775,41.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgSADQAGAlgWAfQgWAfglAGQglAGgfgWQgegWgGglQgGgkAVgfQAWgeAlgGQAlgHAfAWQAfAWAGAkgADHggQAGAkgXAfQgVAfglAGQglAGgfgWQgfgWgGgkQgGglAWgfQAWgeAlgHQAlgGAeAWQAgAWAGAlg");
	this.shape_13.setTransform(53.0477,38.6988);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AihBcQgegWgGglQgGgkAVgfQAWgeAlgGQAlgHAfAWQAfAWAGAkQAGAlgWAfQgWAfglAGIgQABQgcAAgYgRgAA4A4QgfgWgGgkQgGglAWgfQAWgeAlgHQAlgGAeAWQAgAWAGAlQAGAkgXAfQgVAfglAGIgRABQgcAAgXgRg");
	this.shape_14.setTransform(53.0477,38.6988);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(51,51,51,0.647)").ss(1,1,1).p("AgRAGQALAkgSAiQgQAhgkAMQgkALgigRQghgRgLgkQgMgjARgiQARghAkgLQAjgMAiARQAiARAMAjgAC/g9QAMAjgSAiQgQAhgkAMQgkAMgigSQghgRgMgjQgLgkARghQARghAjgMQAlgMAhARQAiARALAkg");
	this.shape_15.setTransform(49.863,39.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiSBzQghgRgLgkQgMgkARghQARghAkgLQAjgMAiARQAiARAMAiQALAlgSAhQgQAigkALQgOAFgPAAQgUAAgVgKgAA/AvQghgSgMgiQgLgkARgiQARggAjgNQAlgLAhARQAiARALAkQAMAjgSAiQgQAhgkAMQgPAEgOAAQgVAAgUgKg");
	this.shape_16.setTransform(49.863,39.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},19).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).wait(15));

	// mouth
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AgqAAIBVAA");
	this.shape_17.setTransform(55.125,57.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AAqgGQACAIgMAIQgLAIgRADQgRADgNgEQgNgEgCgJQgBgHALgJQALgIASgDQAQgCANADQAOAFABAIg");
	this.shape_18.setTransform(57.0997,55.2372);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAUQgNgEgCgJQgBgHALgJQALgIASgDQAQgCANADQAOAFABAIQACAIgMAIQgLAIgRADIgOABQgJAAgHgCg");
	this.shape_19.setTransform(57.0997,55.2372);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("AAbgnQAKAQgDAXQgDAVgLARQgLARgNABQgOAAgIgPQgJgQABgYQACgVAMgSQALgQANgBQAPAAAIAQg");
	this.shape_20.setTransform(56.3003,56.9008);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaApQgJgQABgYQACgVAMgSQALgQANgBQAPAAAIAQQAKAQgDAXQgDAVgLARQgLARgNABIgBAAQgNAAgIgPg");
	this.shape_21.setTransform(56.3003,56.9008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},19).to({state:[{t:this.shape_21},{t:this.shape_20}]},2).wait(15));

	// noseoverlay
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.647)").s().p("AgPAIQgHgDAAgFQAAgDAHgDQAHgEAIAAQAKAAAGAEQAHADgBADQABAFgHADQgGADgKAAQgIAAgHgDg");
	this.shape_22.setTransform(57,47.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.647)").s().p("AgNAKQgHgCgBgFQgBgDAGgEQAGgFAKgBQAIgCAHADQAHABAAAFQABADgGAFQgGAEgJACIgGABIgJgCg");
	this.shape_23.setTransform(56.3802,46.504);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.647)").s().p("AgMANQgHgCgCgEQgBgFAGgDQAFgGAJgDQAIgDAHACQAHAAABAFQACAEgFAFQgGAFgIADQgGACgGAAIgEAAg");
	this.shape_24.setTransform(54.3096,46.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},19).to({state:[{t:this.shape_24}]},2).wait(15));

	// nose
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgxAWIAAgDQAAgRAPgKQAPgNATAAQAVAAAPANQAOAKAAARIAAADg");
	this.shape_25.setTransform(56.1,47.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgwAXQgDgQANgNQAMgPAVgDQATgEARAKQAQAJACAQIABADIhhAQIgBgDg");
	this.shape_26.setTransform(55.7792,46.9796);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AguAbQgFgPAKgPQAKgRAUgGQASgHASAIQASAHAFAQIABACIheAeIgBgDg");
	this.shape_27.setTransform(54.0194,47.4241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},19).to({state:[{t:this.shape_27}]},2).wait(15));

	// muzzle
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8E9A9").s().p("AhaBBQgmgbABgmQgBgmAmgaQAmgcA0AAQA2AAAkAcQAnAaAAAmQAAAmgnAbQgkAcg2AAQg0AAgmgcg");
	this.shape_28.setTransform(53.8,55.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8E9A9").s().p("AhNBQQgqgUgHgmQgGglAhghQAhgiA0gJQA0gIApAVQAqAUAGAnQAGAkghAhQggAhg1AJQgPACgOAAQgiAAgdgOg");
	this.shape_29.setTransform(54.4823,54.4896);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8E9A9").s().p("AhBBaQgsgNgMgkQgMgmAcgkQAbgmAygRQAygQAsAPQAsAOAMAlQAMAkgbAlQgbAlgzAQQgbAJgXAAQgXAAgVgHg");
	this.shape_30.setTransform(53.6377,54.7568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},19).to({state:[{t:this.shape_30}]},2).wait(15));

	// headoverlay
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],0.1,-7.4,0,0.1,-7.4,27.8).s().p("AhiDZIgTgOIgRgLIgBgBQjHikCDjCQBNhmBMAdQAaAKAYAYIAGgFQAPgOARgIIADgCIALgFIABAAQBLgcBMBlQCDDBjFCiIgCADIgNAKIgYAQQgqAfg5AAQg4AAgqgfg");
	this.shape_31.setTransform(51.1948,43.2302);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],-0.8,-6.8,0,-0.8,-6.8,27.8).s().p("Ag7DsIgUgKIgTgJQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQjgiABijVQA7hyBQAQQAbAGAdAUQABgEADgDQAOgQANgKIADgDIALgHIABAAQBFgoBcBYQChCqioC/IgCACIgLANIgVATQglAmg5AJQgQADgPAAQgkAAgigRg");
	this.shape_32.setTransform(49.6109,42.2593);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],-1.7,-6.1,0,-1.7,-6.1,27.8).s().p("AgVD4IgWgIIgUgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQjwheBBjhQAph5BSAEQAbABAgAQQABgEACgEQALgRANgMIADgEIAJgIIABAAQA9gyBoBJQC5CQiKDWIgCADIgJAOIgSAWQgeAqg4ASQgbAJgbAAQgYAAgXgHg");
	this.shape_33.setTransform(46.8111,42.8658);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},19).to({state:[{t:this.shape_33}]},2).wait(15));

	// head
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F6BE66").s().p("AhiDZIgTgOIgRgLIgBgBQjHikCDjCQBNhmBMAdQAaAKAYAYIAGgFQAPgOARgIIADgCIALgFIABAAQBLgcBMBlQCDDBjFCiIgCADIgNAKIgYAQQgqAfg5AAQg4AAgqgfg");
	this.shape_34.setTransform(51.1948,43.2302);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F6BE66").s().p("Ag7DsIgUgKIgTgJQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQjgiABijVQA7hyBQAQQAbAGAdAUQABgEADgDQAOgQANgKIADgDIALgHIABAAQBFgoBcBYQChCqioC/IgCACIgLANIgVATQglAmg5AJQgQADgPAAQgkAAgigRg");
	this.shape_35.setTransform(49.6109,42.2593);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F6BE66").s().p("AgVD4IgWgIIgUgGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQjwheBBjhQAph5BSAEQAbABAgAQQABgEACgEQALgRANgMIADgEIAJgIIABAAQA9gyBoBJQC5CQiKDWIgCADIgJAOIgSAWQgeAqg4ASQgbAJgbAAQgYAAgXgHg");
	this.shape_36.setTransform(46.8111,42.8658);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},19).to({state:[{t:this.shape_36}]},2).wait(15));

	// ears
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2AC57").s().p("AC7A+QgXgJgJgYQgJgYAKgZQAJgZAXgMQAXgNAXAKQAXAJAJAXQAJAYgJAYQgKAagXAMQgOAHgNAAQgKAAgJgDgADGgfQgNAHgEAOQgGANAFANQAFANANAFQAMAFAMgIQAMgGAFgOQAGgNgFgNQgFgNgMgFQgGgBgFAAQgHAAgHADgAjoA6QgWgMgKgaQgJgYAIgYQAKgXAWgJQAXgKAXANQAXAMAJAZQAKAZgJAYQgJAYgXAJQgJADgKAAQgNAAgOgHgAjdgeQgLAEgFAMQgEAMAEAMQAFANAMAGQALAGALgFQAMgEAEgMQAFgLgFgMQgEgNgMgGQgHgEgHAAQgEAAgFACg");
	this.shape_37.setTransform(50.9436,28.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FAE4AD").s().p("ADFAhQgNgFgFgNQgFgNAGgNQAEgOANgGQAMgGANAEQAMAFAFANQAFANgGANQgFAOgMAGQgHAEgHAAQgFAAgFgCgAjdAdQgMgGgFgNQgEgMAEgMQAFgMALgEQAMgEALAFQAMAHAEAMQAFAMgFAMQgEAMgMAEQgFACgFAAQgGAAgGgDg");
	this.shape_38.setTransform(51.0388,28.67);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FAE4AD").s().p("AjVBDQgNgEgHgMQgGgMACgMQADgNAKgGQALgGAMADQANAFAGAMQAHALgDANQgCAMgLAGQgGAEgHAAIgJgBgADIACQgOgCgHgLQgHgNADgOQADgPALgIQALgIANACQANADAIAMQAGAMgDAPQgDAOgLAIQgIAGgJAAIgGgBg");
	this.shape_39.setTransform(47.3126,28.3301);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2AC57").s().p("AjbBgQgYgHgOgYQgMgYAEgZQAFgYAVgMQAVgNAZAIQAZAIAMAXQAPAYgGAYQgFAagVAMQgMAIgOAAQgKAAgKgEgAjfAHQgKAGgCANQgDAMAHAMQAHAMAMAEQANAEAKgHQALgGACgMQADgNgHgLQgHgMgNgFIgIgBQgIAAgHAEgADDAfQgYgFgNgXQgMgUAFgbQAFgbAUgPQAVgQAYAFQAYAFANAWQANAWgFAbQgGAagUAPQgQAMgSAAIgLgBgAC/g+QgMAIgCAPQgEAOAIANQAGALAOACQANADALgIQALgIADgOQADgPgHgMQgHgMgNgDIgGAAQgKAAgIAGg");
	this.shape_40.setTransform(47.196,28.4375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FAE4AD").s().p("AjJBiQgNgCgIgKQgJgMABgMQABgNAJgHQAKgIAMACQAOACAIALQAIAKgBANQAAANgKAHQgHAGgKAAIgFAAgADGgaQgOgBgIgKQgKgLACgPQAAgPAKgKQAKgJANAAQAOABAJALQAHAKAAAPQgBAPgJAKQgJAJgLAAIgDAAg");
	this.shape_41.setTransform(42.6713,29.895);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E2AC57").s().p("AjKCBQgZgEgRgWQgQgVAAgbQACgYATgQQATgPAZAEQAaAEAQAWQASAVgCAZQgBAbgTAPQgOALgUAAIgLAAgAjbApQgJAHAAANQgBAMAIAMQAJAKAMACQAOACAJgIQAKgHAAgNQAAgNgIgKQgIgLgOgCIgEgBQgKAAgIAHgADGACQgYgBgRgTQgPgUABgbQABgbASgSQARgTAaABQAYACAQATQARAVgCAaQgCAcgSASQgRAQgWAAIgDAAgACzhZQgJAKgBAPQgBAPAJALQAIAKAOABQANACAKgLQAJgKABgPQABgPgIgKQgJgLgNgBQgOAAgKAJg");
	this.shape_42.setTransform(42.5063,29.9896);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_40},{t:this.shape_39}]},19).to({state:[{t:this.shape_42},{t:this.shape_41}]},2).wait(15));

	// mane
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#834C14").s().p("AiVDyQhoAHgIhuQgjgPgBgtQhXhQBchMQgCgmAfgYQANhhBlgDQAZghArAHQAfgnA3AAQAtAAAgAnQArgHAZAhQBkADANBhQAgAYgCAmQBcBMhXBQQgBAtgkAPQgHBuhogHQg8A/haAAQhZAAg8g/g");
	this.shape_43.setTransform(47.9059,40.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#935E28").s().p("AisEYQh5AIgJiAQgpgQgBg1QhkhcBrhYQgDgsAlgcQAPhwB0gDQAcgnAyAJQAlgtA/AAQA0AAAlAtQAygJAcAnQBzADAQBwQAmAcgEAsQBrBYhlBcQgBA1goAQQgKCAh4gIQhGBIhhAAQhtAAhFhIgAAAEvQBaAAA8g/QBoAIAHhvQAkgOABguQBXhPhchNQACgmgggXQgNhihkgDQgZghgrAIQgggngtgBQg3ABgfAnQgrgIgZAhQhlADgNBiQgfAXACAmQhcBNBXBPQABAuAjAOQAIBvBogIQA8A/BZAAg");
	this.shape_44.setTransform(47.9184,40.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#834C14").s().p("AhsEHQhlAYgahsQglgIgJgtQhjhBBPhaQgIglAagcQgDhiBjgUQATglAsABQAYgsA3gJQAtgIAlAiQApgPAeAdQBjgNAdBdQAjATAFAlQBnA8hJBdQAHAtghAUQALBuhoALQgxBHhYAPQgTAEgTAAQhBAAg3gpg");
	this.shape_45.setTransform(46.2565,40.8145);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#935E28").s().p("Ah8ExQh2Abgeh8QgrgKgJg0QhyhLBahoQgKgqAggiQgDhxBygWQAVgrAzAAQAdgyA/gLQAzgIArAmQAwgQAiAhQBygQAjBsQApAVAEAsQB3BGhTBrQAHA0glAXQALB/h3ANQg6BShgAQQgZAEgYAAQhNAAg9gtgAAyErQBYgPAxhIQBogKgLhuQAhgUgHgtQBJhdhng8QgFgmgjgSQgdhehjAOQgegdgpAOQglghgtAHQg3AJgYAsQgsAAgTAlQhjATADBiQgaAdAIAlQhPBZBjBCQAJAsAlAJQAaBrBlgYQBGA0BYgOg");
	this.shape_46.setTransform(46.2898,40.9585);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#834C14").s().p("AhEESQhhAngphnQgmgDgPgqQhsgyBBhmQgNgiAVggQgRhhBfghQAOgoArgGQARgvA1gRQArgOArAcQAlgVAiAZQBggdArBZQAlANAKAkQBwAsg7BoQAOAqgeAZQAbBshlAZQgmBOhVAcQgjALggAAQgxAAgugZg");
	this.shape_47.setTransform(43.4854,42.6369);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#935E28").s().p("AhOE9QhxAtgwh3QgsgDgRgyQh8g5BLh1QgRgoAbgmQgUhvBugnQAOgtAzgIQAUg2A9gTQAxgQAyAfQAsgXAnAbQBuggAyBmQAsAOAKArQCBA0hDB3QAPAxghAdQAdB8h0AeQgtBZhcAeQgsAPgpAAQg3AAgzgcgABdEeQBVgcAmhOQBlgZgbhsQAegZgOgqQA7hohwgsQgKgkglgNQgrhZhgAdQgigZglAVQgrgcgrAOQg1ARgRAvQgrAGgOAoQhfAhARBhQgVAgANAiQhBBmBsAyQAPAqAmADQApBnBhgnQBMApBWgbg");
	this.shape_48.setTransform(43.5609,42.8191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_46},{t:this.shape_45}]},19).to({state:[{t:this.shape_48},{t:this.shape_47}]},2).wait(15));

	// bellymiddle
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F8E9A9").s().p("AhwB0IAAjMQAAgbAcAAICqAAQAbAAAAAbIAADMg");
	this.shape_49.setTransform(50.45,68.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8E9A9").s().p("Ah/hGQgEgaAbgFICogcQAbgEAEAaIAiDJIjeAlg");
	this.shape_50.setTransform(53.4934,68.0923);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8E9A9").s().p("AiJgzQgIgaAbgJIChg0QAagJAIAaIA/DBIjWBGg");
	this.shape_51.setTransform(54.7482,68.4938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},19).to({state:[{t:this.shape_51}]},2).wait(15));

	// feet2
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E2AC57").s().p("Ah4BJIgPgIIBOhsIAMAMQAOAUggAsQgdAogWAAIgGAAgAA4ArIgOgIIBNhrIAMALQAPAVggArQgdApgWAAIgHgBg");
	this.shape_52.setTransform(59.5261,89.6454);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990000").s().p("AifgkIAugHQBAgNAhAbIhOBrQgvgagShYgAARhBIAugIQBBgMAgAaIhNBsQgvgbgThXg");
	this.shape_53.setTransform(55.425,88.2997);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AicgLIAtgOQA+gWAkAVIg9B2QgygTgghUgAAOhCIAtgOQA+gWAkAVIg9B2QgygTgghUg");
	this.shape_54.setTransform(58.825,87.9312);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E2AC57").s().p("AhuBaIgPgGIA8h2IAOAKQARASgaAwQgXAwgXAAIgEAAgAA8AiIgPgFIA8h2IAOAKQARARgZAxQgYAwgXAAIgEgBg");
	this.shape_55.setTransform(63.9603,88.7611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53},{t:this.shape_52}]},19).to({state:[{t:this.shape_55},{t:this.shape_54}]},2).wait(15));

	// bellyoverlay
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],0,-15.8,0,15.8).s().p("Ah1CSQgogBAAgsIAAjKQAAgrAogBIDsAAQAnABAAArIAADKQAAAsgnABg");
	this.shape_56.setTransform(47.55,71.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],-2.6,-15.6,2.6,15.5).s().p("AiKB+IgijHQgHgrAngHIDqgnQAmgGAHArIAiDHQAHAsgnAGIjpAnIgKABQgeAAgGgmg");
	this.shape_57.setTransform(50.9256,71.2992);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0.247)","rgba(0,0,0,0.149)"],[0.384,0.816],-4.9,-15.1,4.8,14.9).s().p("Ah2CRIg/jAQgNgqAlgMIDhhJQAlgMAOApIA+DAQAOArglAMIjhBJQgJADgHAAQgZAAgKghg");
	this.shape_58.setTransform(52.6018,71.9075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56}]}).to({state:[{t:this.shape_57}]},19).to({state:[{t:this.shape_58}]},2).wait(15));

	// belly
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990000").s().p("Ah1AeQgogBAAgrIAAgPIE7AAIAAAPQAAArgnABg");
	this.shape_59.setTransform(47.55,83.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F6BE66").s().p("AidB0IAAi7QAAgsAoAAIDsAAQAnAAAAAsIAAC7g");
	this.shape_60.setTransform(47.55,68.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990000").s().p("AiaAOIgDgOIE3gzIADAOQAHArgnAHIjpAnIgKAAQgeAAgGgmg");
	this.shape_61.setTransform(52.5288,82.4418);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F6BE66").s().p("AiqgvQgHgrAngHIDqgnQAmgGAHArIAfC4Ik3A0g");
	this.shape_62.setTransform(50.7467,68.6573);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#990000").s().p("AiVAoIgFgOIEshhIAFAOQANArglAMIjhBIQgIACgHAAQgZAAgLggg");
	this.shape_63.setTransform(55.6554,82.442);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F6BE66").s().p("AiwgYQgOgpAmgNIDhhJQAlgMANAqIA6CxIksBig");
	this.shape_64.setTransform(52.1963,69.5654);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.shape_62},{t:this.shape_61}]},19).to({state:[{t:this.shape_64},{t:this.shape_63}]},2).wait(15));

	// legs
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#990000").s().p("AAJAvQgGg0AdgpIBWAAQAeApgGA0gAiNAvQgGg0AdgpIBWAAQAeApgGA0g");
	this.shape_65.setTransform(47.6086,87.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E2AC57").s().p("AALgDIgCgQICFAAIgCAQQgIAXg3AAQg6AAgIgXgAiLgDIgCgQICFAAIgDAQQgHAXg6AAQg3AAgIgXg");
	this.shape_66.setTransform(47.6125,94.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65}]}).to({state:[]},19).wait(17));

	// arms
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E2AC57").s().p("ADSBZQgXgHgCglIAAgcQgKg/hOAIQgGhFBkAVQBPAvgKBfQgCAkgeAAQgIAAgKgDgAkDA4QgKhfBPgvQBkgVgGBFQhNgIgLA/IAAAcQgCAlgXAHQgKADgIAAQgdAAgDgkg");
	this.shape_67.setTransform(47.6253,76.6732);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E2AC57").s().p("Aj+B7QgwgEAMgtQAZhcBbgQQBlAPgfA9QhFghggA3IgJAbQgQAggWAAIgCAAgACRAMQhegoAug1QA6AzAvguIAPgXQAXgdAXAHQAuASgYAnQgsBNhQAAIgQgBg");
	this.shape_68.setTransform(53.5834,72.7772);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E2AC57").s().p("AkUB0QAKhgBYgcQBmAAgVBBQhKgXgXA8IgFAbQgLAkgXACIgGABQgqAAAFgsgABThfQBCArAng1IAMgZQASggAYAEQAwAKgSArQgjBbhcAFQhjgaAlg8g");
	this.shape_69.setTransform(55.4508,72.9623);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67}]}).to({state:[{t:this.shape_68}]},19).to({state:[{t:this.shape_69}]},2).wait(15));

	// tailtipoverlay
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#905D2F").s().p("AgTAjQgbgkAYgqQACAoAfACQAeABgIAWQgVAWgOAAQgKAAgHgJg");
	this.shape_70.setTransform(17.2978,80.8945);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#905D2F").s().p("AgOAkQggghAQgsQAJAnAfgDQAdgEgDAWQgTAdgRAAQgGAAgIgGg");
	this.shape_71.setTransform(22.6769,85.7733);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#905D2F").s().p("AgIAjQgkgbAJguQAOAlAegIQAdgIAAAXQgPAhgTAAQgFAAgHgEg");
	this.shape_72.setTransform(26.7269,90.6002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70}]}).to({state:[{t:this.shape_71}]},19).to({state:[{t:this.shape_72}]},2).wait(15));

	// tailtip
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6B4421").s().p("AggAzQgog4Awg6QgJA3AwADQAuACgMAiQgfAhgXAAQgPAAgMgNg");
	this.shape_73.setTransform(18.0945,80.0924);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6B4421").s().p("AgYA0QgygxAnhAQgBA4AxgGQAsgFgFAjQgcArgZAAQgMAAgLgKg");
	this.shape_74.setTransform(23.4081,84.9063);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6B4421").s().p("AgRA0Qg3gpAchFQAIA4AvgNQArgMAAAjQgXAzgcAAQgJAAgLgHg");
	this.shape_75.setTransform(27.4055,89.7307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73}]}).to({state:[{t:this.shape_74}]},19).to({state:[{t:this.shape_75}]},2).wait(15));

	// tail
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C6913E").s().p("AhjAPIAAgdQBoBGBThpIAMA1QgoAig1ALIgNABQgtAAgwgjg");
	this.shape_76.setTransform(29.175,82.4945);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C6913E").s().p("AheAlIgFgdQByA1BBh2IAUAzQgiAogyATQgQAFgQAAQglAAgpgVg");
	this.shape_77.setTransform(34.525,84.5919);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C6913E").s().p("AhXA2IgKgcQB5AkAuh+IAcAvQgcAtgvAaQgXALgcAAQgcAAgfgLg");
	this.shape_78.setTransform(38.35,87.0938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76}]}).to({state:[{t:this.shape_77}]},19).to({state:[{t:this.shape_78}]},2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.9,55.6,44.800000000000004,42.199999999999996);
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