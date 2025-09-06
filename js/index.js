//<page>.js, script runs on this page only

//page main, entry point
function pmain()
{
    //console.log("pmain");

    $.getJSON("//rxat.ro/json/promo.php?c="+config.cb60, function(o) { config.xpromo = o; pupdate(); })
     .fail(function() { /*console.log("failed to load promo");*/ } );

    $("#featured,#popular,#supported,#games").click(function(e) { clist(this, "p1", e.target.id); return false; });
    $("#p1,#p2,#p3,#p4,#p5").click(function(e) { clist(this, e.target.id); return false; });
    $("#prev, #pprev, #next, #pnext").click(function(e)
    {
        clist(this, e.target.id);
        $("html, body").animate({ scrollTop: $('#groups').offset().top });
        return false;
    });
    $("#featured").click();

    $.getScript("//rxat.ro/js/twitter.js?"+config.xcb_js, function() {
        getTwitters('twitters', { 
           id: 'xat', 
           clearContents: true, 
           count: 3, 
           ignoreReplies: true,
           template: '<span>"%text%"</span> <span class="time"><a href="//twitter.com/%user_screen_name%/statuses/%id%">%time%</a></span>'
        });
	});

    //$('#myCarousel').carousel('cycle'); //we dont want the carosel to cycle as startup
}

//page update, the config has changed
function pupdate()
{
    //console.log("pupdate");

    //load the list
    if(config.lang && config.loadlist)
    {
        var s = "//rxat.ro/json/lists/";
        if(config.list=="games")
            s += config.list; //there is only one games list
        else
          s += parseInt(config.page) + "_" + (config.loadlistfail ? "en" : config.lang) + "_" + config.list;
        s += ".php?v="+config.xcb_js;
        $.getJSON(s, function(o) { config.xlist = o; pupdate(); })
         .fail(function()
         {
             if(config.loadlistfail!=true)
             {
                 //console.log("failed to load list, trying en");
                 config.loadlistfail = true;
                 config.loadlist = true;
                 pupdate();
             }
         });
        config.loadlist = false;
        config.listdone = false;
    }

    //render the promo
    if(config.lang && config.xpromo && !config.promodone)
    {
        xpromo('#promo', config.xpromo);
        config.promodone = true;
    }

    //render list
    if(config.xlist && !config.listdone)
    {
        xlist('#thumbs', config.xlist);
        listdone = true;
    }

    //everything is done to localize
    if(config.lang && config.promodone && !config.localizedone)
    {
        localize(config.lang);
        config.localizedone = true;
    }
}

function clist(d,id,l)
{
    po = {"p1":0,"p2":1,"p3":2,"p4":3,"p5":4,'prev':'-','pprev':'-','next':'+','pnext':'+'};
    if(l!=null) { config.list=l; config.page=0; };
    if(po[id]=="+") config.page++;
    else if(po[id]=="-") config.page--;
    else config.page = po[id];
    if(config.page<0) config.page=config.numPages-1;
    else if(config.page>config.numPages-1) config.page=0;
    $(d).parent().addClass("active").siblings().removeClass("active");
    $("#p"+(config.page+1)).parent().addClass("active").siblings().removeClass("active");
    config.loadlist = true;

    pupdate();
}

function xlist(d,o)
{
    var s = '<ul class="thumbnails">';
    for(var i in o)
        if(o[i].l==null)
		{
		    o[i].g = o[i].g.replace(/\s/g, '');
            s += '<li class="span2">' +
                 '  <div class="thumbnail">' +
                 '      <a href="//rxat.ro/'+o[i].g+'">' +
                 '    <h3>' + o[i].g + '</h3>' +
                 '    <div class="pic">' +
                 '        <img class="pic" src="'+o[i].a+'" alt="">' +
                 '    </div>' +
                 '    <p>' + o[i].d + (o[i].t!=null ? '<br><b>(' + o[i].t + ')</b>' : '') + '</p>' +
                 '    <h3 class="users">' + o[i].n + ' <img src="//rxat.ro/images/b_groups.gif" height="24" width="24" alt=""></h3>' +
                 '      </a>' +
                 '  </div>' +
                 '</li>';
		}
        else if(o[i].l!=null)
        {
            config.numPages = o[i].l;
            for(var i=1;i<=5;i++)
               if(i>config.numPages)
                 $("#p"+i).hide();
               else
                 $("#p"+i).show();
        }
    s+= '</ul>';

    $(d).html(s);
}

function xpromo(d,o)
{
    var cl = $.cookie('lang');
	if(cl && cl!=null && cl !="null") $.cookie('clang', null, { domain: config.cookieDomain, path:'/' });
	
    var l = (o[config.lang] && o[config.lang].length>0) ? config.lang : "n0";	
    var r = Math.floor(Math.random()*o[l].length);
	var fv = 'id='+parseInt(o[l][r].i)+'&gn='+o[l][r].n+'&xc=8240';
	if(cl && cl!=null && cl !="null") fv += '&lg='+cl;
	if(config.cookiedecline) fv += '&cd=1';
    var s = '';
    s+='<div class="xatbox">';
    s+= '<embed src=//rxat.ro/web_gear/chat/chat.swf quality=high bgcolor=#000000 wmode=transparent width=540 height=405 name=chat FlashVars="'+fv+'" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="//rxat.ro/update_flash.php" />';
    s+='</div>';
    s+= '<a href="//rxat.ro/'+o[l][r].n+'">'+o[l][r].n+'</a> <small>(<span data-localize="index.notrun">Note: this chat is not run by xat</span>)</small><br><br>';
    s+= '<span data-localize="index.promotedgroups">Promoted groups</span>: ';
    for(var i in o[l])
        s += '<a href="//rxat.ro/'+o[l][i].n+'">'+o[l][i].n+'</a> | ';
    s += '<a href="//rxat.ro/web_gear/chat/promotion.php"><span data-localize="index.promomine">Promote my group</span></a>'
	//console.log(s);
    $(d).html(s);
}

