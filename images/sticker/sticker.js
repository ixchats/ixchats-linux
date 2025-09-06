
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, ctext, Args, FileName, mystage, font;
function init() {
	Args = window.location.href.split('#');
	var s = Args[0].split('s=');
	FileName = s[1];

	let json = document.getElementById('xjson');
	if(json) json = JSON.parse(json.innerHTML);
	if(json && json.file) FileName = json.file;

	Args = Args[1] ? decodeURIComponent(Args[1]) : '';
	Args = Args.split('#');

	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("B1069FE8785B7C4AAF6DA2E392B3701B"); ////////////////////////////////////////////
	var lib=comp.getLibrary();
	handleComplete({},comp);
}

function StickerInit(s) // called from sticker
{
	mystage = s; // stash parms

	font = 'Permanent Marker';
	if(mystage.font) font = mystage.font.replace(/[^0-9a-zA-Z ]/g, '');

	var url = "https://fonts.googleapis.com/css?family="+font.replace(/ /g, '+');

	loadCSS(url, StickerInit2);
}

function StickerInit2(zz) // when css loaded
{
    ctext = document.getElementById("ctext");
	doCss();
	doText();	
}

function doCss()
{
	if(!ctext) return;

	var color = doCol(Args[1]);
	if(!color && mystage.color) color = mystage.color.replace(/[^0-9a-zA-Z#]/g, '');
	if(!color) color = '#bc2e1e'; 

	var shad1 = doCol(Args[2]);
	var shad2 = shad1;
	if(!shad1 && mystage.shad1) 
	{
		shad1 = mystage.shad1.replace(/[^0-9a-zA-Z#]/g, '');
		if(mystage.shad2) shad2 = mystage.shad2.replace(/[^0-9a-zA-Z#]/g, '');
		if(!shad2) shad2 = shad1;
	}
	if(!shad2) shad2 = '#5dabcd'; // Background
	if(!shad1) shad1 = '#378ab4'; // Intermediate background

	var shadow = mystage.shadow;
	if(!shadow) shadow = '0 1px 0px $1, 1px 0 0px $2, 1px 2px 1px $1, 2px 1px 1px $2, 2px 3px 2px $1';
	shadow = shadow.replace(/\$1/g, shad1);
	shadow = shadow.replace(/\$2/g, shad2);

	var transform = 'rotate(-5deg)';
	if(mystage.transform) transform = mystage.transform;

	ctext.style.fontFamily = "'"+font+"', cursive";
    ctext.style.fontSize = '24px';
    ctext.style.lineHeight = '1.2em';
    ctext.style.marginTop = '0.3em';
    ctext.style.marginLeft = '0.3em';
    ctext.style.display = 'inline-block';
    ctext.style.userSelect = 'none';
    ctext.style.color = color;
    if(mystage.texty)
    	ctext.style.paddingTop = mystage.texty+'px';
    if(mystage.spacing) 
    	ctext.style.letterSpacing = mystage.spacing +'em';
    ctext.style.textShadow = shadow;
    ctext.style.transform = transform;
}
/*
function loadCSS(url, callback){
    var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;

    document.getElementsByTagName('head')[0].appendChild(link);

    var img = document.createElement('img');
        img.onerror = function(){
            if(callback) callback(link);
        }
        img.src = url;
}
*/
function loadCSS(url, callback){
    fetchInject([url]).then(() => {
      callback();
    })
}

// FetchInject
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).fetchInject=t()}(this,function(){"use strict";const e=function(e,t,n,r,o,c,i){c=t.createElement(n),i=t.getElementsByTagName(n)[0],c.appendChild(t.createTextNode(r.text)),c.onload=o(r),i?i.parentNode.insertBefore(c,i):t.head.appendChild(c)};return function(t,n){if(!arguments.length)return Promise.reject(new ReferenceError("Failed to execute 'fetchInject': 1 argument required but only 0 present."));if(arguments[0]&&arguments[0].constructor!==Array)return Promise.reject(new TypeError("Failed to execute 'fetchInject': argument 1 must be of type 'Array'."));if(arguments[1]&&arguments[1].constructor!==Promise)return Promise.reject(new TypeError("Failed to execute 'fetchInject': argument 2 must be of type 'Promise'."));const r=[],o=n?[].concat(n):[],c=[];return t.forEach(e=>o.push(window.fetch(e).then(e=>[e.clone().text(),e.blob()]).then(e=>Promise.all(e).then(e=>{r.push({text:e[0],blob:e[1]})})))),Promise.all(o).then(()=>(r.forEach(t=>{c.push({then:n=>{t.blob.type.includes("text/css")?e(window,document,"style",t,n):e(window,document,"script",t,n)}})}),Promise.all(c)))}});

function doCol(a)
{
	if(!a) return a;
	var color1 = a.replace(/[^0-9a-zA-Z]/g, '');
	var color2 = a.replace(/[^0-9a-fA-F]/g, '');
	if(color1 == color2 && color1.length == 6)
		return '#' + color1; // hex color
	return color1; // color eg red
}

function doText()
{
	var t = Args[0];
    if(!t) // no text
    {
    	s = FileName.split('_');
    	t = s[1]; // default text
    }
    t = decodeURIComponent(t);
    //t = t.replace(/\s+/g, '_'); // spaces to _
    setTextNode(ctext, t);
    var f = Math.sqrt(98*35/(ctext.clientWidth*ctext.clientHeight));
    var n = 5; // max loops
    while(ctext.clientWidth > 98 || ctext.clientHeight > 35)
    {
    	ctext.style.fontSize = parseInt(2400*f)/100+'px';
    	f *= 0.9;
    	if(n-- < 0) break;
    }
    // t = t.replace(/_/g, ' '); // _ back to spaces
    // setTextNode(ctext, t);
}

function setTextNode(node, str)
{
  if(!node) return;
  while(node.firstChild)
    node.removeChild( node.firstChild );
  if(str)
    node.appendChild( document.createTextNode(str));
}

function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib[FileName]();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
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
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

init();
