(function () {
  'use strict';

  // Copyright xat 2018

function xInt(a) { return (a = parseInt(a)), isNaN(a) ? 0 : a; } //ugh!

  let Version = '2.19';  

  let ReleaseMode = 0; // (ReleaseMode)  Will be replaced by (true) during php babel process 

  let app;
  let delayedRender = []; //render commands that we have to delay while we preload
  let TextStyle = {};     //global text styles
  var sound = {};         //global sounds
  let TweenPath = {};     //global tween paths
  let CountDown = {};     //global active countdowns
  let wide = false;       // stat in narrow mode

  document.addEventListener("DOMContentLoaded", main);

  function main() {
    PIXI.utils.skipHello();
    app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb, antialias: true, resolution:window.devicePixelRatio, autoResize:true});
    document.body.appendChild(app.view);

    // Register php extension as an image
    let Resource = PIXI.loaders.Resource;
    Resource.setExtensionXhrType('php', Resource.XHR_RESPONSE_TYPE.BLOB);
    Resource.setExtensionLoadType('php', Resource.LOAD_TYPE.IMAGE);

    render({name:'versionstyle', type:'TextStyle', style: {fontSize: 12, fill: '#ffffff'}});
    render({name:'version', type:'Text', x:15, y:10, text:'v'+Version, style:'versionstyle'});

    //animate update ticker
    app.ticker.add(function(delta) {
        try{
          PIXI.tweenManager.update();
        }
        catch(e) {
          console.log('tween fail :-(', e, PIXI.tweenManager.tweens);
          PIXI.tweenManager.tweens.length = 0;
        }

        //update countdown timers
        for(let c in CountDown) {
          let o = getChildByNameRecursive(app.stage, c);
          if(o!==null) {
            let time = Math.max(CountDown[c].duration - Math.floor((Date.now()-CountDown[c].start)/1000), 0);
            if(o.text != time)
              o.text = time;
            if(time===0)
             delete CountDown[c];
          } 
        }
    });
  }

  let render = function _render(j) { //  function render(j) {

    //recursively render if we get an array of commands
    if(j instanceof Array) {
      for(let a in j)
        _render(j[a]);
      return;
    }

    //console.log(j);

    if(String(j.type)==='TextStyle') {
      TextStyle[String(j.name)] = new PIXI.TextStyle(j.style); /*sanitize*/
      return;
    }

    if(String(j.type)==='TweenPath') {
      TweenPath[String(j.name)] = new PIXI.tween.TweenPath();
      TweenPath[String(j.name)].closed = true;

      for(let a=0;a<j.commands.length;a++) {
        switch(String(j.commands[a][0])) {
          case 'arc': TweenPath[String(j.name)].arc(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5], j.commands[a][6]); break;
          case 'arcTo': TweenPath[String(j.name)].arcTo(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5]); break;
          case 'bezierCurveTo': TweenPath[String(j.name)].bezierCurveTo(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5], j.commands[a][6]); break;
          case 'lineTo': TweenPath[String(j.name)].lineTo(j.commands[a][1], j.commands[a][2]); break;
          case 'moveTo': TweenPath[String(j.name)].moveTo(j.commands[a][1], j.commands[a][2]); break;
          case 'quadraticCurveTo': TweenPath[String(j.name)].quadraticCurveTo(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4]); break;
        }          
      }

      //console.log(String(j.name), TweenPath[String(j.name)]);
      return;
    }

    if(String(j.type)==='Canvas') {
      let w = 425;
      if(j.size == 600)
      {
        if(wide) return;
        w = 600;
      }
      else // narrow
        if(!wide) return;

      const canvas = app.view;
      const h = 600;//s.innerHeight;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      canvas.width = w;
      canvas.height = h;
      app.renderer.resize(w, h);

      Send(13, 0, w); // tell web to resize frame
    }

    if(String(j.type)==='Sound') {

      // sanitize, audies only
      // if(ReleaseMode) //zzz
      //   if(!j.src.match(/^https:\/\/xat.com\/content\/sounds\/audies\/[a-z\.]+$/))
      //     { ErrMsg("*Err* bad Sound"); return; }

      if(j.action==='preload')
      {
        j.audie = j.audie.replace(/[^a-z0-9]/g, ''); // sanitize
        if(!j.audie) return;

        j.src = ['https://xat.com/content/sounds/audies/'+j.audie+'.webm', 'https://xat.com/content/sounds/audies/'+j.audie+'.mp3'];

        sound[String(j.name)] = new Howl({ src: j.src, /*sanitize*/ preload:true });
      }
      else if(sound[String(j.name)]!==undefined)
      {
        j.src = undefined;
        sound[String(j.name)].play();
      }
      return;
    }

    if(String(j.type)==='Sheet')
    {
        //preload
        let myloader = new PIXI.loaders.Loader(); //do i need to keep a handle on this?
        myloader.add(String(GetPixiJson(j.load))).load(onPIXILoad); // load json
        return;
    }

    let o = getChildByNameRecursive(app.stage, String(j.name));

    if(j.destroy===true) {
      if(!o) return;
      o.parent.removeChild(o);
      destroyTweens(o);
      o.destroy({children:true, /*texture:true, baseTexture:true*/});
      return;
    }

    if(j.destroyChildren===true) {
      if(!o) return;
      let children = o.removeChildren();
      destroyTweens(children);
      for(let c in children)
        children[c].destroy({children:true, /*texture:true, baseTexture:true*/});
      return;
    }

    if(o===null || o.placeholder===true) { //if it doesnt exist OR if it exists and is a placeholder
      switch(String(j.type)) {
        case 'Container':
        o = new PIXI.Container();
        break;
        case 'Sprite':        
        //if(ReleaseMode) // zzz
        {
          // if(!j.width) { ErrMsg("*Err* no width"); return; }
          // if(!j.height) { ErrMsg("*Err* no height"); return; }
          // o = GetImageSrc(j.imageUrl, j.width, j.height);
          // if(!o) { ErrMsg("*Err* image not valid"); return; }
          // o = PIXI.Sprite.fromImage(o); // use getimage
          if(j.imageUrl) j.imageUrl = GetImageSrc2(j.imageUrl);
        }
        
        {
          if(j.imageUrl!==undefined)          
            o = PIXI.Sprite.fromImage(j.imageUrl);
          else if(j.texture != undefined)
          {
            if(PIXI.utils.TextureCache[j.texture]) //if we have the texture
            {
              if(o===null) //if we have no holder
                o = PIXI.Sprite.from(PIXI.utils.TextureCache[j.texture]);
              else //we already have a placeholder
              {
                //update the placeholder texture
                o.setTexture(PIXI.utils.TextureCache[j.texture]);
                o.placeholder = false;
                return;
              }
            }
            else
            {
              delayedRender.push(j);
              //make the sprite without any texture as a placeholder
              o = new PIXI.Sprite();
              o.placeholder = true;
            }
          }
        }
        o.anchor.set(0.5); //center the anchor point by default
        break;
        case 'Text':
        o = new PIXI.Text();
        o.anchor.set(0.5); //center the anchor point by default
        break;
        case 'Graphics':
        o = new PIXI.Graphics();
        break;
        case 'StripSprite': { //combine with AnimatedSprite

          if(j.smilie) // request for smiley
          {
            // 20 30 90 160 standard smiley sizes
            let w = j.size;
            //if(!j.height > w) w = j.height;
            if(w < 25) w = 20;
            else if(w < 40) w = 30;
            else if(w < 100) w = 90;
            else w = 160;
            j.load = iMux('GetStrip6.php?c=s_' + escape(j.smilie) + '_' + w, 's'); // note lowwer case s for multiple frames
          }

          //see if we have the base texture
          if(PIXI.utils.TextureCache[j.load]!==undefined)
          {
            let frames = [];
            //if(ReleaseMode) // zzz
            //  j.load = GetImageSrc(j.load, j.width, j.height);
            
            let f = Math.floor(PIXI.utils.TextureCache[j.load].width/PIXI.utils.TextureCache[j.load].height);

            for(let i=0;i<f;i++) {
              var texture = new PIXI.Texture(PIXI.utils.TextureCache[j.load], new PIXI.Rectangle(PIXI.utils.TextureCache[j.load].height*i, 0, PIXI.utils.TextureCache[j.load].height, PIXI.utils.TextureCache[j.load].height));
              frames.push(texture);
            }

            o = new PIXI.extras.AnimatedSprite(frames);
            o.anchor.set(0.5); //center the anchor point by default
            o.play();
          } else {
            //preload
            let myloader = new PIXI.loaders.Loader(); //do i need to keep a handle on this?
            myloader.add(String(GetImageSrc(j.load))).load(onPIXILoad);
            delayedRender.push(j);
          }
        }
        break;
        case 'AnimatedSprite': {
          //https://www.codeandweb.com/free-sprite-sheet-packer
          //https://www.codeandweb.com/texturepacker

          // if(ReleaseMode) // zzz
          //   j.load = 'https://pixijs.io/examples/required/assets/basics/fighter.json';

          // if(j.load &&  j.load.substr(10,9 ) != '.xat.com/')
          //   j.load = iMux('PixiJson.json?z2&U='+j.load); // use proxy

            //j.load = iMux('PixiJson.php'); // use proxy
            //j.load = iMux('fighter.json'); // use proxy
            //j.load = 'https://xat.com/content/temp/fighter.php?z2'; // use proxy

          // if(j.load.substr(0, 27) != 'https://pixijs.io/examples/') return;
          // if(j.load.search('..') < 0) return;

          //j.load = j.load +"?z1";

          if(j.load) j.load = GetPixiJson(j.load);

          //see if we have the textures we need
          let ok = true;
          for (let i = 0;i<j.frames.length;i++)
            if(PIXI.utils.TextureCache[j.frames[i]]===undefined) {
              ok = false;
              break;
            }

          if(ok) {
            let frames = [];

            //magically works since the spritesheet was loaded with the pixi loader
            for (let i = 0;i<j.frames.length;i++)
              frames.push(PIXI.Texture.fromFrame(j.frames[i]));

            o = new PIXI.extras.AnimatedSprite(frames);
            o.anchor.set(0.5); //center the anchor point by default
            o.play();
          } else {
            //preload
            let myloader = new PIXI.loaders.Loader(); //do i need to keep a handle on this?
            myloader.add(String(j.load)).load(onPIXILoad);
            delayedRender.push(j);
            return;
          }
        }
        break;
        case 'Barchart': {
          o = createBarChart(0, 0, j.chartWidth!==undefined? j.chartWidth : 400, j.chartHeight!=undefined?j.chartHeight:200, j.values, j.maxes);
        }
        break;
      }

      if(!o) return;

      o.name = j.name;

      let t = (j.parent!==undefined) ? getChildByNameRecursive(app.stage, String(j.parent)) : app.stage;
      if(t!==null)
        t.addChild(o);
    }

    //PIXI.Container
    if(j.x!==undefined) o.x = Number(j.x);
    if(j.y!==undefined) o.y = Number(j.y);
    if(j.width!==undefined) o.width = Number(j.width);
    if(j.height!==undefined) o.height = Number(j.height);
    if(j.alpha!==undefined) o.alpha = Number(j.alpha);
    if(j.rotation!==undefined) o.rotation = Number(j.rotation);
    if(j.visible!==undefined) o.visible = (j.visible===true);
    if(j.scale!==undefined) {
      if(j.scale.x!==undefined) o.scale.x = Number(j.scale.x);
      if(j.scale.y!==undefined) o.scale.y = Number(j.scale.y);        
    }
    if(j.buttonMode!==undefined) o.buttonMode = (j.buttonMode===true);
    if(j.interactive!==undefined) o.interactive = (j.interactive===true);

    //--PIXI.Graphics
    if(String(j.type)==='Graphics') {
      for(let a=0;a<j.commands.length;a++) {
        switch(String(j.commands[a][0])) {
          case 'arc': o.arc(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5], j.commands[a][6]); break;
          case 'arcTo': o.arcTo(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5]); break;
          case 'beginFill': o.beginFill(j.commands[a][1], j.commands[a][2]); break;
          case 'bezierCurveTo': o.bezierCurveTo(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5], j.commands[a][6]); break;
          case 'drawRect': o.drawRect(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4]); break;
          case 'drawRoundedRect': o.drawRoundedRect(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5]); break;
          case 'drawCircle': o.drawCircle(j.commands[a][1], j.commands[a][2], j.commands[a][3]); break;
          case 'endFill': o.endFill(); break;
          case 'lineStyle': o.lineStyle(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4]); break;
          case 'lineTo': o.lineTo(j.commands[a][1], j.commands[a][2]); break;
          case 'moveTo': o.moveTo(j.commands[a][1], j.commands[a][2]); break;
          case 'quadraticCurveTo': o.quadraticCurveTo(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4]); break;
          case 'drawEllipse': o.drawEllipse(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4]); break;
          case 'drawPolygon': o.drawPolygon(j.commands[a][1]); break;
          case 'drawStar': o.drawStar(j.commands[a][1], j.commands[a][2], j.commands[a][3], j.commands[a][4], j.commands[a][5], j.commands[a][6]); o.closePath(); break;
        }
      }
    }

    //--PIXI.Sprite
    if(j.tint!==undefined) o.tint = Number(j.tint);
    if(j.anchor!==undefined) {
      if(j.anchor.x!==undefined) o.anchor.x = Number(j.anchor.x);
      if(j.anchor.y!==undefined) o.anchor.y = Number(j.anchor.y);        
    }

    //----PIXI.Text
    if(j.text!==undefined) o.text = String(j.text);
    if(j.style!==undefined) o.style = TextStyle[String(j.style)];
    if(j.countDown!==undefined)
      CountDown[String(j.name)] = {start:Date.now(), duration:Number(j.text)};

    //----PIXI.extras.AnimatedSprite
    if(j.animationSpeed!==undefined)
      o.animationSpeed = Number(j.animationSpeed);

    //tween
    if(j.tween!==undefined) {
      //https://themoonrat.github.io/pixi-tween/docs/index.html
      //https://github.com/themoonrat/pixi-tween

      let tween = PIXI.tweenManager.createTween(o);
      if(j.tween.easing!==undefined)
        j.tween.easing = nameToEasing(j.tween.easing);
      if(j.tween.path!==undefined)
        j.tween.path = TweenPath[String(j.tween.path)];
      tween.config(j.tween);
      //console.log(tween);
      //tween.on('start', () => { console.log('tween started') });
      //tween.on('repeat', ( loopCount ) => { console.log('loopCount: ' + loopCount) });
      tween.start();
    }

    //draggable
    if(j.draggable!==undefined)
      o.draggable = (j.draggable===true);

    //setup the event listeners
    if(j.interactive!==undefined || j.draggable!==undefined) {
      o.removeAllListeners();
      if(o.interactive && o.draggable) {
        o.on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
      }
      else if(o.interactive)
        o.on('pointerdown', onClick);
    }
  }

  function onPIXILoad(loader, resources) {
    //console.log('onPIXILoad', loader, resources);

    //do any delayed renders waiting on a load (animated sprite)
    for(let o in resources)
      for(let i = delayedRender.length-1;i>=0;i--)
        if(resources[o].name===delayedRender[i].load) {
          render(delayedRender[i]);
          delayedRender.splice(i,1);
        }

    //see if any textures have arrived, and do those delayed renders as well (sprite)
    for(let i = delayedRender.length-1;i>=0;i--)
      if(PIXI.utils.TextureCache[delayedRender[i].texture]) {
        render(delayedRender[i]);
        delayedRender.splice(i,1);
      }      
  }

  function onClick(e) {
    //console.log('onClick:', j);
    let j = {name:this.name, action:'click'};
    tx(BotId, j);
  }

  function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
  }

  function onDragEnd() {
    if(this.dragging===true) {
      this.alpha = 1;
      this.dragging = false;
      this.data = null;
      let j = {name:this.name, action:'dragEnd', x:this.x, y:this.y};
      tx(BotId, j);
      console.log('onDragEnd', j);
    }
    else {
      console.log('onDragEnd: not dragging so ignore');
    }
  }

  function onDragMove() {
    if(this.dragging) {
      let newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }

  let getChildByNameRecursive = function _getChildByNameRecursive(c, name) {
    for(let a=0;a<c.children.length;a++) {
      if(c.children[a].name===name)
        return c.children[a];

      if(c.children[a].children.length>0) {
        let r = _getChildByNameRecursive(c.children[a], name);
        if(r!==null) return r;
      }
    }

    return null;
  }

  let destroyTweens = function _destroyTweens(o) {
    if(Array.isArray(o))
      Object.values(o).forEach( c => { _destroyTweens(c); });        
    else {
      Object.values(PIXI.tweenManager.getTweensForTarget(o)).forEach( t => {
        if(o.children.length>0) _destroyTweens(o.children);
        console.log('removeTween', t);

        //yuk: wipe out the tweens now by messing with the library
        //the library doesnt acually remove the tween until after it has done a final update on an object we have deleted
        //and fails when the tweened object doesnt exist
        //(OR we could have our own objectsToDelete and delay destroy that until the final tween has been completed)
        PIXI.tweenManager.removeTween(t); 
        if(PIXI.tweenManager._tweensToDelete.length) {
          for (let i = 0; i < PIXI.tweenManager._tweensToDelete.length; ++i)
            PIXI.tweenManager._remove(PIXI.tweenManager._tweensToDelete[i]);
          PIXI.tweenManager._tweensToDelete.length = 0;
        }
      });
    }
  }

  //---------- custom display objects ----------

  function createBarChart(boxX, boxY, boxWidth, boxHeight, barV, barM) {
    let graphics = new PIXI.Graphics();

    let bcol = [0x0057C0, 0xFF9E00, 0xFF1010, 0x0FA73D, 0x850FA3, 0x12AA96, 0xFF00FF, 0x808080, 0x800000, 0x004040, 0x000060, 0x81B907];
    let num = barV.length > bcol.length ? bcol.length : barV.length;
    let b = ((boxWidth / num) * 50) / 100; //small width
    let c = ((boxWidth / num) * 60) / 100; //big bar width
    let g = ((boxWidth / num) * -30) / 100; //bar gap
    let j = (c * 233) / 1000;
    let k = j;
    let t = ((b+c+g) * 233) / 1000;

    let BiggestBar = 0;
    let i;

    //find the biggest bar
    for(i=0;i<num;i++)
      if(barM[i]>=barM[BiggestBar])
        BiggestBar = i;

    let maxBarHeight = boxHeight - (BiggestBar * t) - j - k;
    let d = new Array();
    
    let biggest = barM[BiggestBar];
    if (biggest < 1) biggest = 1;
    for(i=0;i<num;i++)
      d[i] = (barV[i] * maxBarHeight) / biggest;
    
    for(i=(num-1);i>=0;i--) {           
      // Stash coords of slope text
      //?slopeXY[i*2]   = boxX + (b+c+g)*i+b+2*c/3;
      //?slopeXY[i*2+1] = boxY + boxHeight-j-(t*i) + boxHeight/70;
      //?slopeX = b;
      
      graphics.lineStyle(0);

      graphics.beginFill(dark(bcol[i], 40));
      graphics.moveTo((b+c+g)*i, boxHeight-j-(t*i));
      graphics.lineTo((b+c+g)*i, boxHeight-d[i]-j-(t*i));
      graphics.lineTo(((b+c+g)*i)+b, boxHeight-d[i]-(t*i));
      graphics.lineTo(((b+c+g)*i)+b, boxHeight-(t*i));
      graphics.lineTo((b+c+g)*i, boxHeight-j-(t*i));
      graphics.endFill();

      //let matrix = {};
      //matrix.x = -boxWidth/2 + (b+c+g)*(i+1);
      //matrix.y = -d[BiggestBar]/4 -d[i]*3/4 -(t*i);
      
      let colors = [];
      colors[0] = dark(bcol[i], -70);
      colors[1] = bcol[i];
      graphics.beginFill(colors[1]);
      //ctx.beginGradientFill(fillType, colors, alphas, ratios, matrix);
      graphics.moveTo(((b+c+g)*i)+b, boxHeight-(t*i));
      graphics.lineTo(((b+c+g)*i)+b, boxHeight-d[i]-(t*i));
      graphics.lineTo(((b+c+g)*i)+b+c, boxHeight-d[i]-k-(t*i));
      graphics.lineTo(((b+c+g)*i)+b+c, boxHeight-k-(t*i));
      graphics.lineTo(((b+c+g)*i)+b, boxHeight-(t*i));
      graphics.endFill();

      graphics.beginFill(dark(bcol[i], -50));
      graphics.moveTo((b+c+g)*i, boxHeight-d[i]-j-(t*i));
      graphics.lineTo(((b+c+g)*i)+c, boxHeight-d[i]-j-k-(t*i));
      graphics.lineTo(((b+c+g)*i)+b+c, boxHeight-d[i]-k-(t*i));
      graphics.lineTo((b+c+g)*i+b, boxHeight-d[i]-(t*i));
      graphics.lineTo((b+c+g)*i, boxHeight-d[i]-j-(t*i));
      graphics.endFill();  

      graphics.lineStyle(1, bcol[i]);
      graphics.moveTo((b+c+g)*i, boxHeight-j-(t*i));
      graphics.lineTo((b+c+g)*i, boxHeight-d[i]-j-(t*i));
      graphics.lineTo(((b+c+g)*i)+c, boxHeight-d[i]-j-k-(t*i));
      graphics.lineTo(((b+c+g)*i)+b+c, boxHeight-d[i]-k-(t*i));
      graphics.lineTo(((b+c+g)*i)+b+c, boxHeight-k-(t*i));
      graphics.lineTo(((b+c+g)*i)+b, boxHeight-(t*i));
      graphics.lineTo((b+c+g)*i, boxHeight-j-(t*i));
    }

    return graphics;
  }

  //---------- utility function ----------

  //convert a name to an easing function
  function nameToEasing(name) {
    switch(name) {
      case 'inBack': return PIXI.tween.Easing.inBack();
      case 'inBounce': return PIXI.tween.Easing.inBounce();
      case 'inCirc': return PIXI.tween.Easing.inCirc();
      case 'inCubic': return PIXI.tween.Easing.inCubic();
      case 'inElastic': return PIXI.tween.Easing.inElastic();
      case 'inExpo': return PIXI.tween.Easing.inExpo();
      case 'inOutBack': return PIXI.tween.Easing.inOutBack();
      case 'inOutBounce': return PIXI.tween.Easing.inOutBounce();
      case 'inOutCirc': return PIXI.tween.Easing.inOutCirc();
      case 'inOutCubic': return PIXI.tween.Easing.inOutCubic();
      case 'inOutElastic': return PIXI.tween.Easing.inOutElastic();
      case 'inOutExpo': return PIXI.tween.Easing.inOutExpo();
      case 'inOutQuad': return PIXI.tween.Easing.inOutQuad();
      case 'inOutQuart': return PIXI.tween.Easing.inOutQuart();
      case 'inOutQuint': return PIXI.tween.Easing.inOutQuint();
      case 'inOutSine': return PIXI.tween.Easing.inOutSine();
      case 'inQuad': return PIXI.tween.Easing.inQuad();
      case 'inQuart': return PIXI.tween.Easing.inQuart();
      case 'inQuint': return PIXI.tween.Easing.inQuint();
      case 'inSine': return PIXI.tween.Easing.inSine();
      case 'linear': return PIXI.tween.Easing.linear();
      case 'outBack': return PIXI.tween.Easing.outBack();
      case 'outBounce': return PIXI.tween.Easing.outBounce();
      case 'outCirc': return PIXI.tween.Easing.outCirc();
      case 'outCubic': return PIXI.tween.Easing.outCubic();
      case 'outElastic': return PIXI.tween.Easing.outElastic();
      case 'outExpo': return PIXI.tween.Easing.outExpo();
      case 'outQuad': return PIXI.tween.Easing.outQuad();
      case 'outQuart': return PIXI.tween.Easing.outQuart();
      case 'outQuint': return PIXI.tween.Easing.outQuint();
      case 'outSine': return PIXI.tween.Easing.outSine();
      default: return undefined;
    }
  }

  //make a color darker (or lighter)
  function dark(col, pc) {
    let r, g, b;

    r = col >> 16;
    g = (col >> 8) & 0xFF;
    b = col & 0xFF;
    if(pc >= 0)
    {
      r = (r * (100-pc)) / 100 ;     
      g = (g * (100-pc)) / 100 ;     
      b = (b * (100-pc)) / 100 ;     
    }
    else
    {
      r = r - 256 * pc / 100;  
      g = g - 256 * pc / 100;  
      b = b - 256 * pc / 100;  
      if (r > 255) r = 255;
      if (g > 255) g = 255;
      if (b > 255) b = 255;
    }
    return Math.floor((r << 16) + (g << 8) + b);
  }

  //---------- communication ----------

  //who am i (for debug)
  let BotId = parseInt(window.location.search.substr(1)); //used in onDragEnd and onClick

  let tc = 0;
  let connected = false;
  let ch = 60002;
  let Bot = 0;//110110; // sloom
  let xConfig = { origin : 'https://xat.com' };

  function tx(user, obj) {
    //console.log('canvastx:', user, obj);
    let str = JSON.stringify(obj);
    let e = LZString.compressToBase64(str);
    //console.log('canvastx:', user, e);
    Send(ch, user, e);
  }

  function rx(user, str) {
    //console.log('canvasrx:', user, str);
    let d = LZString.decompressFromBase64(str);
    let j = JSON.parse(d);
    //console.log('canvasrx:', user, j);
    let b = xInt(user); // get bot Id from packet, temp, zzz
    if(!BotId && b > 0) BotId = b;
    render(j);
  }

  function tick(event) {       
    //try to connect once per second for 15 seconds
    if((!connected)&&(tc%12==0)&&(tc<450))
      Send(1, 0, "");

    tc++;
  }

  function Send(channel, user, msg) {
    //console.log("Send: " + channel + " " + user + " " + msg);

    let Obj = {channel:channel, user:user, msg:msg, tobox:1};
    parent.postMessage(JSON.stringify(Obj), (ReleaseMode) ? xConfig.origin : '*');
  }

  function Receive(channel, user, msg) {
    //console.log("Recieve: " + channel + " " + user + " " + msg);
    
    if(channel==1) { //successful connect
      console.log("connected!");
      connected = true;
      Send(ch, 0, "");
    }
    //else if(channel==2) //change of tab
    //{
    //  tab = user;
    //}
    else if(channel==ch && msg.length>0) { // do something
      rx(user, msg);
    }
  }

  function onMessage(event) {
    if(event.origin !== xConfig.origin && (ReleaseMode)) {
      console.log("onMessage Bad Origin=", event.origin, event);
      return;
    }

    let d = JSON.parse(event.data);  
    Receive(d.channel, d.user, d.msg);
  }

  window.addEventListener('message', onMessage, false);
  window.setInterval(tick, 83);

  //---------- release mode functions, uses xatlib ----------

  let sanitize = new RegExp('[^0-9a-zA-Z_\\-\\.:/]', 'g');

  function GetPixiJson(urlin)
  {
      //if(urlin &&  urlin.substr(10,9 ) == '.xat.com/') return urlin;
      return iMux('PixiJson.json?z2&U='+urlin); // use proxy
  }

  function GetImageSrc2(urlin, w, h)
  {
    //return(urlin);
    if(urlin.substr(0, 25) == 'https://images.weserv.nl/') return urlin;

    return  "https://images.weserv.nl/?url="+encodeURIComponent(urlin);
  }

  function GetImageSrc(urlin, w, h)
  {
    // if(urlin &&  urlin.substr(10,9 ) == '.xat.com/') return urlin;

    // return iMux('ProxyImage.php?url='+urlin); // use proxy

      if(urlin.search('\\.\\.') >= 0) return;
      let ii;
      let url = urlin.split('/');
      switch(url[2])
      {
        case 'i.imgur.com' : 
          ii = url[3].replace(sanitize, ''); // sanitize
          ii = 'https://i.imgur.com/'+ii;
          break;
        case 'i.postimg.cc' : 
          ii = url[3]+'/'+url[4];
          ii = ii.replace(sanitize, ''); // sanitize
          ii = 'https://i.postimg.cc/'+ii;
          break;
        case 'xat.com' : 
          if(url[0] = 'https:' && url[1] == '') return urlin.replace(sanitize, '');
          break;
        case 's0.xat.com' :  // smilies
        case 's1.xat.com' : 
          return urlin;
        }
      if(!ii) return '';
      return SafeImage(ii, xInt(w), xInt(h), 0, 1);
  }

  function ErrMsg(msg) // send them a helpful error message
  {
    tx(BotId, msg);
    console.log(msg);
  }

function iMux(u, prefix)
{ // mux images between i0 and i1
  if(!prefix) prefix = 'i';
  var t = u.substr(-10); // last 10 chars
  var i = 0;
    
  for(var n=0; n<10; n++)
    i += t.charCodeAt(n);
    
  return 'https://'+prefix+(i&1)+'.xat.com/web_gear/chat/'+u;
}

function SafeImage(Url, w, h)
// if not trusted site proxy it
{
  let Animated = 's';

  if(Url.length == 0) return '';
  var u = parse_url(Url);
  if(!u)
  {
    if(Url.charAt(0) == '/')
      Url = 'https:'+Url;
    else
      Url = 'https://'+Url;
    u = parse_url(Url);
    if(!u) return '';
  }

  if(!u['host']) return '';
  if(u['host'].indexOf('xat.com') >= 0 && u['path'].indexOf('GetImage') > 0) return Url;

  if(w == h)
  {
    w = h = calcAvSize(w); // clamp to approved sizes
  }
    
  return iMux('GetImage6.php?'+Animated+'&W='+w+'&H='+h+'&U='+Url); // use proxy
}

}());