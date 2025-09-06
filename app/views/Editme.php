 <!doctype html>
 <html lang=en>
   <head>
     <meta charset=utf-8>
     <meta http-equiv=Content-Security-Policy content='default-src &#39;self&#39;;
    style-src &#39;self&#39;
		https://<?php echo DOMAIN; ?>/
		https://*.<?php echo DOMAIN; ?>/
		https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css
		https://www.gstatic.com/
		https://fonts.googleapis.com/

		&#39;unsafe-inline&#39;; connect-src &#39;self&#39;
		https://<?php echo DOMAIN; ?>/
		https://*.<?php echo DOMAIN; ?>/
		https://www.xatech.com/
		https://xat.wiki/
		https://xat.me/;
    img-src
		&#39;self&#39;
		https://*.<?php echo DOMAIN; ?>/
		https://<?php echo DOMAIN; ?>/
		https://xat.wiki/
		https://images.weserv.nl/

		https://i.imgur.com/
		https://u.cubeupload.com/
		https://i.ibb.co/
		https://i.imgyukle.com/
		https://img.xatblog.net/
		https://i.ytimg.com/;
    script-src
		&#39;self&#39;
		https://<?php echo DOMAIN; ?>/
		https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
		https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js
		https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js
		https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.js
		https://www.gstatic.com/

		https://xat.me/;
    frame-src
		&#39;self&#39;
		https://www.google.com/recaptcha/

		https://*.github.io/
		https://xatradio.com/
		https://facebook.com/
		https://www.facebook.com/
		https://www.youtube.com/
		https://youtube.com/
		https://*.spotify.com/
		https://spotify.com/;
    base-uri
		&#39;self&#39;;
    object-src
		&#39;self&#39;
		https://<?php echo DOMAIN; ?>/
		https://www.<?php echo DOMAIN; ?>/
		https://www.xatech.com/;
	form-action
		&#39;self&#39;
		https://<?php echo DOMAIN; ?>/;
	font-src
		&#39;self&#39;
		https://fonts.gstatic.com/'>
     <meta name=viewport content='width=device-width,initial-scale=1,shrink-to-fit=no'>
     <meta name=description content='Visit oxatspace profile'>
     <meta name=format-detection content='telephone=no'>
     <title>xatspace</title>
     <script type=application/json id=xjson>
       {
         "type": "home",
         "dir": "/content/web/ < ? php echo DIRVERSION; ? > /"}
     </script>
     <link href=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css rel=stylesheet>
     <link href=/content/web/ <?php echo DIRVERSION; ?>/direct.css rel=stylesheet>
     <link rel=manifest href=/content/web/ <?php echo DIRVERSION; ?>/manifest.json>
     <link rel=icon href=/content/web/ <?php echo DIRVERSION; ?>/img/favicon.ico>
     <link rel=icon href=/content/web/ <?php echo DIRVERSION; ?>/img/favicon-32x32.png sizes=32x32 type=image/png>
     <link rel=icon href=/content/web/ <?php echo DIRVERSION; ?>/img/favicon-16x16.png sizes=16x16 type=image/png>
     <meta name=application-name content=xat>
     <meta name=theme-color content=#ffffff>
     <link rel=mask-icon href=/content/web/ <?php echo DIRVERSION; ?>/img/safari-pinned-tab.svg color=#5bbad5>
     <link rel=apple-touch-icon href=/content/web/ <?php echo DIRVERSION; ?>/img/apple-touch-icon.png sizes=180x180>
     <meta name=apple-mobile-web-app-title content=xat>
     <meta name=msapplication-config content=/content/web/ <?php echo DIRVERSION; ?>/img/favicons/browserconfig.xml>
   </head><iframe id=meFrame sandbox='allow-scripts allow-popups allow-same-origin allow-popups-to-escape-sandbox'></iframe>
   <body class='invisible nosel' id=outerback>
     <div id=meLogo><a class='navbar-brand p-0 m-0 ml-2'><img id=navLogo src=/content/web/ <?php echo DIRVERSION; ?>/img/xatplanet.svg height=50 alt=logo></a></div>
     <nav id=navTop class='navbar navbar-expand-md navbar-dark fixed-top gradback p-0 navMe'>
       <div class=header-flex>
         <div><a class='navbar-brand p-0 m-0 ml-2' href=https:// <?php echo DOMAIN; ?>><img id=navLogo src=/content/web/ <?php echo DIRVERSION; ?>/img/xatplanet.svg height=50 alt=logo></a></div>
       </div><span id=statnav></span>
     </nav>
     <div class='content font-weight-bold text-light' id=loading>
       <div><span id=xsName></span><span class=mr-3><span data-localize=chats.loading>xatspace loading</span>..</span><span class='spinner-border spinner-border-sm' role=status><span class=sr-only></span></span></div>
     </div>
     <div class=container>
       <div class='text-light justify-content-center pt-5 font-weight-bold text-center d-none' id=noUser>
         <div class='display-2 mb-3'>404 :(</div>
         <div class='display-5 mt-5 text-break' data-localize=chats.nouser>This user does not exist in our universe yet.</div>
       </div>
       <div id=show class='d-none HideDiv meInner bordercolor'>
         <div class='row justify-content-md-center ml-2 mr-2 smcenter'>
           <div class='col-xl-3 col-lg-4 col-md-5 col-sm-6 align-self-center'><a id=marrieda target=_blank><img class='married rounded-circle nosel d-none' src=/content/web/ <?php echo DIRVERSION; ?>/img/xatspace/heart.svg height=35 alt=heart id=married data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.married&#39;>Married with</span>'></a><a id=homea target=_blank><img class='married rounded-circle nosel d-none xshome' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/home.svg height=35 alt=home id=home data-toggle=tooltip data-placement=top data-html=true></a><a id=bffa target=_blank><img class='married rounded-circle nosel d-none' src=/content/web/ <?php echo DIRVERSION; ?>/img/xatspace/bff.svg height=35 alt=bff id=bff data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.bff&#39;>BFF with</span>'></a><a id=verifieda target=_blank><img class='married rounded-circle nosel verified d-none' src=/content/web/ <?php echo DIRVERSION; ?>/img/xatspace/sky.svg height=35 alt=verified id=verified data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.verified&#39;>Verified</span>'></a><a id=celebritya target=_blank><img class='married rounded-circle nosel verified d-none' src=/content/web/ <?php echo DIRVERSION; ?>/img/xatspace/cyan.svg height=35 alt=celebrity id=celebrity data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.celebrity&#39;>Celebrity</span>'></a><a id=gobig></a></div>
           <div class='col-xl-3 col-lg-4 col-md-5 col-sm-6 ml-xl-3 userinfo align-self-center'>
             <div class=row>
               <div class=col-12>
                 <h3 class='textcolor text-break d-inline' id=nickName></h3><img class='flag d-none nosel' alt=flag id=setflag data-toggle=tooltip data-placement=top data-html=true>
               </div>
               <div class='col-12 mt-2 mb-1'>
                 <h6 class='textcolor text-break' id=idReg></h6>
               </div>
               <div class='col-12 mb-n1 d-none' id=forumPar>
                 <h6 class='text-break mb-3'><a id=forumLink class='d-none xsbuttons butx nosel textcolor font-italic' target=_blank data-toggle=tooltip data-placement=top data-html=true><img class=xsrocket src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/ss.svg width=30 alt=rocket><span id=forumInner></span></a></h6>
               </div>
             </div>
             <div class='row d-none' id=viewsocial>
               <div class='col-xl-12 col-lg-12 col-md-10 col-sm-10'>
                 <div id=socialLinks class='mt-1 socials nosel socialic'><a id=groupLink class='d-none grp' target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/groups.svg alt=group></a><a id=instagramLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/instagram.svg alt=instagram></a><a id=facebookLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/facebook.svg alt=facebook></a><a id=twitterLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/twitter.svg alt=twitter></a><a id=youtubeLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/youtube.svg alt=youtube></a><a id=snapchatLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/snapchat.svg alt=snapchat></a><a id=steamLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/steam.svg alt=steam></a><a id=twitchLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img class=twitch src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/twitch.svg alt=twitch></a><a id=spotifyLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/spotify.svg alt=spotify></a><a id=pinterestLink class=d-none target=_blank data-toggle=tooltip data-placement=top data-html=true><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/pinterest.svg alt=pinterest></a></div>
               </div>
             </div>
           </div>
         </div><span id=noInfo class=d-none>
           <hr class='mehr hrcol'>
           <p class='d-none justify-content-center randomtxt random1 text-center display-6 text-break' data-localize=chats.random1>Oh wow. Empty? People always have something to say. Ask this user to update their xatspace.</p>
           <p class='d-none justify-content-center randomtxt random2 text-center display-6 text-break' data-localize=chats.random2>Oh no! It's all blank. Error? No. Tell this user to update their xatspace!</p>
           <p class='d-none justify-content-center randomtxt random3 text-center display-6 text-break' data-localize=chats.random3>Nothing interesting here ... yet. Why don't you tell this user to update their xatspace?</p>
           <div class='text-center mb-3'><span data-localize=chats.follow class='display-6 followtxt'>Follow xat on</span></div>
           <div class='followxs text-center'><a href=https:// <?php echo DOMAIN; ?>/twitter target=_blank><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/twitter_white.svg alt=twitter></a><a href=https:// <?php echo DOMAIN; ?>/facebook target=_blank><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/facebook_white.svg alt=facebook></a><a href=https:// <?php echo DOMAIN; ?>/instagram target=_blank><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/instagram_white.svg alt=instagram></a></div>
         </span><span id=aboutParent>
           <hr class='mehr hrcol'>
           <div class='row ml-4 mr-4 pt-3 text-center'>
             <div class=col-12>
               <h5 class='textcolor nosel' id=aboutheading data-localize=chats.aboutme>About Me</h5>
               <p id=about class=text-break></p>
             </div>
           </div>
         </span><span id=mediaParent>
           <div class='row ml-4 mr-4 mt-4 text-center'>
             <div class=col-12>
               <p id=media class=text-break></p>
             </div>
           </div>
         </span>
       </div>
       <div class='modal fade' id=imgmodal role=dialog tabindex=-1 aria-labelledby=ImgModal aria-hidden=true>
         <div class='modal-dialog modal-dialog-centered modal-md'>
           <div class='modal-content border-0'>
             <div class=modal-body><img src='' class='previewimg w-100'></div>
           </div>
         </div>
       </div>
       <div id=edit class='d-none HideDiv'>
         <h1>xatspace <span data-localize=chats.login>login</span></h1>
         <form accept-charset=UTF-8 autocomplete=off class=grouploginform id=meFormLogin>
           <div id=loginErr class='alert alert-danger HideDiv ClrErr' role=alert></div>
           <div class=row>
             <div class=col-lg-2>
               <div class=mb-3><label><span data-localize=chats.username>username</span>:</label></div>
             </div>
             <div class='col-lg-4 usernamecol'>
               <div class=mb-3><input class='form-control form-control-sm noread' id=meUsername autocomplete=off maxlength=128 required><span id=usernameSet></span></div>
             </div>
           </div>
           <div class=row>
             <div class=col-lg-2><label data-localize=chats.pass>password</label>: </div>
             <div class=col-lg-4>
               <div class=input-group><input type=password class='form-control form-control-sm' id=mePassword maxlength=128 required>
                 <div class=input-group-append><button class='btn PassReveal searchButton eyeButton viewpassbut' type=button><img class=viewpassicon src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/eye.svg alt=viewpass></button></div>
               </div>
             </div>
           </div>
           <div class=bottombuttons><button id=grouplogin type=submit class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/account.svg alt=login><span data-localize=chats.login>login</span></button></div>
         </form>
       </div>
       <div id=meedit class='d-none HideDiv'>
         <h1>xatspace <span data-localize=chats.edit>edit</span></h1>
         <hr>
         <form class=needs-validation id=editform novalidate>
           <div id=editerr class='alert alert-danger HideDiv ClrErr' role=alert></div><span data-toggle=popover title=zz></span>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.outbackground>outer background</span>:</label></div>
             <div class=col-lg-5><input class='form-control form-control-sm zz' id=meback maxlength=100></div>
             <div class='col-lg-3 inforighthelp'><span class=curs tabindex=0 data-toggle=popover data-placement=bottom title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.changeback&#39;>Change the background image of your xatspace</span>. <span data-localize=&#39;chats.require&#39;>Requires a direct image link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https://xat.wiki/Images&#39; target=&#39;_blank&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.permittedimg&#39;>See permitted image providers</span>.</a></p>'>?</span>
               <div class='oneline transButton' id=button0 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.color&#39;>or add a color instead</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
           </div><span class='hasMe d-none'>
             <div class='row form-group'>
               <div class=col-lg-3><label for=iframegp>xatframe:</label></div>
               <div class=col-lg-5><input name=iframegp class='form-control form-control-sm zz' id=xatframe maxlength=100 autocomplete=off><a class=cssguidelines href=https://xat.wiki/Xatframe#rules target=_blank data-localize=chats.framerules>See xatframe rules</a></div>
               <div class='col-lg-3 inforighthelp framecol'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.xsxatframe&#39;>Change your xatspace background with a xatframe</span>. <span data-localize=&#39;chats.requirehtml&#39;>Requires a direct html link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https://xat.wiki/xatframe&#39; target=&#39;_blank&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.framewiki&#39;>See wiki for more information</span>.</a></p>'>?</span>
                 <div class=oneline><a href=https:// <?php echo DOMAIN; ?>/chats#!library target=_blank><button type=button class='btn btn-outline-info btn-sm py-0 framelib'><img class=framebut src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/xatframe.svg alt=xatframe width=21><span data-localize=chats.framelib>xatframe library</span></button></a></div>
               </div>
             </div>
           </span>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.innbackground>inner background</span>:</label></div>
             <div class=col-lg-5><input class='form-control form-control-sm' id=meback2 maxlength=100></div>
             <div class='col-lg-3 inforighthelp'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.changeback&#39;>Change the background image of your xatspace</span>. <span data-localize=&#39;chats.require&#39;>Requires a direct image link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https://xat.wiki/Images&#39; target=&#39;_blank&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.permittedimg&#39;>See permitted image providers</span>.</a></p>'>?</span>
               <div class='oneline transButton' id=button1 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.color&#39;>or add a color instead</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
           </div>
           <hr>
           <div class='row form-group'>
             <div class=col-lg-3><label data-localize=chats.noinner>transparent inner:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=noinner><span class='slider2 round'></span></label></div>
             <div class='col-lg-2 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.noinnerinfo&#39;>Make the inner xatspace background transparent</span>.</p>'>?</span></div>
             <div class=col-lg-2><label data-localize=chats.onlyxf>hide inner:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=onlyxf><span class='slider2 round'></span></label></div>
             <div class='col-lg-3 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.hideinner&#39;>If enabled only the outer background or xatframe will be visible, no other content</span>.</p>'>?</span></div>
           </div>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.innershad>inner shadow</span>:</label></div>
             <div class=col-lg-2><input class='form-control form-control-sm' id=innershad maxlength=100></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.shacolinfo&#39;>Add a shadow around the inner background</span>.</p>'>?</span>
               <div class='oneline transButton' id=button10 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
             <div class=col-lg-2><label><span data-localize=chats.avashad>avatar shadow</span>:</label></div>
             <div class=col-lg-2><input class='form-control form-control-sm' id=avashad maxlength=100></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.avashainfo&#39;>Add a shadow around the avatar</span>.</p>'>?</span>
               <div class='oneline transButton' id=button11 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
           </div>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.bordercol>border color</span>:</label></div>
             <div class=col-lg-2><input class='form-control form-control-sm' id=bordercolor maxlength=100></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.bordercolinfo&#39;>Add and change border colors</span>.</p>'>?</span>
               <div class='oneline transButton' id=button3 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
             <div class=col-lg-2><label data-localize=chats.noborders>no borders:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=noborder><span class='slider2 round'></span></label></div>
             <div class='col-lg-3 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.noborderinfo&#39;>Remove the borders around the inner background</span>.</p>'>?</span></div>
           </div>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.textcol>text color</span>:</label></div>
             <div class=col-lg-2><input class='form-control form-control-sm' id=txtcolor maxlength=100></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.textcolnfo&#39;>Change all text colors, excluding About me and Media content</span>.</p>'>?</span>
               <div class='oneline transButton' id=button2 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
             <div class=col-lg-2><label data-localize=chats.fontall>everywhere:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=colorall><span class='slider2 round'></span></label></div>
             <div class='col-lg-3 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.fontallinfo&#39;>Apply the chosen text font style on the About me and Media content too</span>.</p>'>?</span></div>
           </div>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.fontstyle>font style</span>:</label></div>
             <div class=col-lg-2><select id=font>
                 <option value=Inherit selected>Default</option>
                 <option value='Archivo Narrow' class=xsf13>Archivo Narrow</option>
                 <option value='Cabin Sketch' class=xsf11>Cabin Sketch</option>
                 <option value='Comic Sans MS' class=xsf2>Comic Sans MS</option>
                 <option value=Courier class=xsf4>Courier</option>
                 <option value='Dancing Script' class=xsf8>Dancing Script</option>
                 <option value='Freckle Face' class=xsf12>Freckle Face</option>
                 <option value=Griffy class=xsf9>Griffy</option>
                 <option value=Impact class=xsf3>Impact</option>
                 <option value=Lobster class=xsf6>Lobster</option>
                 <option value=Mansalva class=xsf7>Mansalva</option>
                 <option value=Raleway class=xsf5>Raleway</option>
                 <option value=Rockwell class=xsf1>Rockwell</option>
                 <option value=Stick class=xsf10>Stick</option>
               </select></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.fontstyleinfo&#39;>Change text font style, excluding About me and Media content</span>.</p>'>?</span></div>
             <div class=col-lg-2><label data-localize=chats.fontall>everywhere:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=fontall><span class='slider2 round'></span></label></div>
             <div class='col-lg-3 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.fontallinfo&#39;>Apply the chosen text font style on the About me and Media content too</span>.</p>'>?</span></div>
           </div>
           <hr><span class='hasMe d-none'>
             <div class='row form-group'>
               <div class=col-lg-3><label><span data-localize=chats.customname>custom name</span>:</label></div>
               <div class=col-lg-2><input class='form-control form-control-sm' id=customNick maxlength=30></div>
               <div class='col-lg-1 inforighthelp'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.customusrinfo&#39;>Replace the default chat nickname</span>.</p>'>?</span></div>
               <div class=col-lg-2><label><span data-localize=chats.nameglow>name glow</span>:</label></div>
               <div class=col-lg-2><input class='form-control form-control-sm' id=nameglow maxlength=100></div>
               <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.nameglowinfo&#39;>Add a glow around the nickname</span>.</p>'>?</span>
                 <div class='oneline transButton' id=button12 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
               </div>
             </div>
           </span>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.customava>custom avatar</span>:</label></div>
             <div class=col-lg-5><input class='form-control form-control-sm' id=customAvatar maxlength=100></div>
             <div class='col-lg-3 inforighthelp'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.customavainfo&#39;>Replace the default chat avatar (also GIFs are supported)</span>. <span data-localize=&#39;chats.require&#39;>Requires a direct image link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https://xat.wiki/Images&#39; target=&#39;_blank&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.permittedimg&#39;>See permitted image providers</span>.</a></p>'>?</span></div>
           </div>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.flag>country flag</span>:</label></div>
             <div class=col-lg-5><select id=flag>
                 <option value=''>None</option>
                 <option value=af>Afghanistan</option>
                 <option value=ax>Aland Islands</option>
                 <option value=al>Albania</option>
                 <option value=dz>Algeria</option>
                 <option value=as>American Samoa</option>
                 <option value=ad>Andorra</option>
                 <option value=ao>Angola</option>
                 <option value=ai>Anguilla</option>
                 <option value=ag>Antigua and Barbuda</option>
                 <option value=ar>Argentina</option>
                 <option value=am>Armenia</option>
                 <option value=aw>Aruba</option>
                 <option value=au>Australia</option>
                 <option value=at>Austria</option>
                 <option value=az>Azerbaijan</option>
                 <option value=bs>Bahamas</option>
                 <option value=bh>Bahrain</option>
                 <option value=bd>Bangladesh</option>
                 <option value=bb>Barbados</option>
                 <option value=es-pv>Basque Country</option>
                 <option value=by>Belarus</option>
                 <option value=be>Belgium</option>
                 <option value=bz>Belize</option>
                 <option value=bj>Benin</option>
                 <option value=bm>Bermuda</option>
                 <option value=bt>Bhutan</option>
                 <option value=bo>Bolivia</option>
                 <option value=ba>Bosnia and Herzegovina</option>
                 <option value=bw>Botswana</option>
                 <option value=br>Brazil</option>
                 <option value=bn>Brunei Darussalam</option>
                 <option value=bg>Bulgaria</option>
                 <option value=bf>Burkina Faso</option>
                 <option value=cv>Cabo Verde</option>
                 <option value=kh>Cambodia</option>
                 <option value=cm>Cameroon</option>
                 <option value=ca>Canada</option>
                 <option value=es-ct>Catalonia</option>
                 <option value=ky>Cayman Islands</option>
                 <option value=cl>Chile</option>
                 <option value=cn>China</option>
                 <option value=cc>Cocos (Keeling) Islands</option>
                 <option value=co>Colombia</option>
                 <option value=km>Comoros</option>
                 <option value=cd>Congo</option>
                 <option value=cr>Costa Rica</option>
                 <option value=ci>Cote d Ivoire</option>
                 <option value=hr>Croatia</option>
                 <option value=cu>Cuba</option>
                 <option value=cy>Cyprus</option>
                 <option value=cz>Czechia</option>
                 <option value=dk>Denmark</option>
                 <option value=dj>Djibouti</option>
                 <option value=do>Dominican Republic</option>
                 <option value=dm>Dominica</option>
                 <option value=tl>East Timor</option>
                 <option value=ec>Ecuador</option>
                 <option value=eg>Egypt</option>
                 <option value=sv>El Salvador</option>
                 <option value=en>England</option>
                 <option value=gq>Equatorial Guinea</option>
                 <option value=er>Eritrea</option>
                 <option value=ee>Estonia</option>
                 <option value=sz>Eswatini</option>
                 <option value=et>Ethiopia</option>
                 <option value=eu>European Union</option>
                 <option value=fk>Falkland Islands</option>
                 <option value=fo>Faroe Islands</option>
                 <option value=fj>Fiji</option>
                 <option value=fi>Finland</option>
                 <option value=fr>France</option>
                 <option value=pf>French Polynesia</option>
                 <option value=ga>Gabon</option>
                 <option value=gm>Gambia</option>
                 <option value=ge>Georgia</option>
                 <option value=de>Germany</option>
                 <option value=gh>Ghana</option>
                 <option value=gi>Gibraltar</option>
                 <option value=gr>Greece</option>
                 <option value=gl>Greenland</option>
                 <option value=gd>Grenada</option>
                 <option value=gu>Guam</option>
                 <option value=gt>Guatemala</option>
                 <option value=gg>Guernsey</option>
                 <option value=gw>Guinea-Bissau</option>
                 <option value=gn>Guinea</option>
                 <option value=gy>Guyana</option>
                 <option value=ht>Haiti</option>
                 <option value=hn>Honduras</option>
                 <option value=hk>Hong Kong</option>
                 <option value=hu>Hungary</option>
                 <option value=is>Iceland</option>
                 <option value=in>India</option>
                 <option value=id>Indonesia</option>
                 <option value=ir>Iran</option>
                 <option value=iq>Iraq</option>
                 <option value=ie>Ireland</option>
                 <option value=cq>Island of Sark</option>
                 <option value=im>Isle of Man</option>
                 <option value=il>Israel</option>
                 <option value=it>Italy</option>
                 <option value=jm>Jamaica</option>
                 <option value=jp>Japan</option>
                 <option value=je>Jersey</option>
                 <option value=jr>Jolly Roger</option>
                 <option value=jo>Jordan</option>
                 <option value=kz>Kazakhstan</option>
                 <option value=ke>Kenya</option>
                 <option value=xk>Kosovo</option>
                 <option value=kw>Kuwait</option>
                 <option value=kg>Kyrgyzstan</option>
                 <option value=la>Laos</option>
                 <option value=lv>Latvia</option>
                 <option value=lb>Lebanon</option>
                 <option value=ls>Lesotho</option>
                 <option value=lr>Liberia</option>
                 <option value=ly>Libya</option>
                 <option value=li>Liechtenstein</option>
                 <option value=lt>Lithuania</option>
                 <option value=lu>Luxembourg</option>
                 <option value=mo>Macao</option>
                 <option value=mg>Madagascar</option>
                 <option value=mw>Malawi</option>
                 <option value=my>Malaysia</option>
                 <option value=mv>Maldives</option>
                 <option value=ml>Mali</option>
                 <option value=mt>Malta</option>
                 <option value=mh>Marshall Islands</option>
                 <option value=mr>Mauritania</option>
                 <option value=mu>Mauritius</option>
                 <option value=mx>Mexico</option>
                 <option value=fm>Micronesia</option>
                 <option value=md>Moldova</option>
                 <option value=mc>Monaco</option>
                 <option value=mn>Mongolia</option>
                 <option value=me>Montenegro</option>
                 <option value=ma>Morocco</option>
                 <option value=mz>Mozambique</option>
                 <option value=mm>Myanmar</option>
                 <option value=na>Namibia</option>
                 <option value=nr>Nauru</option>
                 <option value=np>Nepal</option>
                 <option value=an>Netherlands Antilles</option>
                 <option value=nl>Netherlands</option>
                 <option value=nc>New Caledonia</option>
                 <option value=nz>New Zealand</option>
                 <option value=ni>Nicaragua</option>
                 <option value=ng>Nigeria</option>
                 <option value=ne>Niger</option>
                 <option value=nu>Niue</option>
                 <option value=nf>Norfolk Island</option>
                 <option value=kp>North Korea</option>
                 <option value=mk>North Macedonia</option>
                 <option value=mp>Northern Mariana Islands</option>
                 <option value=no>Norway</option>
                 <option value=om>Oman</option>
                 <option value=pk>Pakistan</option>
                 <option value=pw>Palau</option>
                 <option value=ps>Palestine</option>
                 <option value=pa>Panama</option>
                 <option value=pg>Papua New Guinea</option>
                 <option value=py>Paraguay</option>
                 <option value=pe>Peru</option>
                 <option value=ph>Philippines</option>
                 <option value=pl>Poland</option>
                 <option value=pt>Portugal</option>
                 <option value=pr>Puerto Rico</option>
                 <option value=qa>Qatar</option>
                 <option value=redcross>Red Cross</option>
                 <option value=ro>Romania</option>
                 <option value=ru>Russia</option>
                 <option value=rw>Rwanda</option>
                 <option value=kn>Saint Kitts and Nevis</option>
                 <option value=lc>Saint Lucia</option>
                 <option value=vc>Saint Vincent and the Grenadines</option>
                 <option value=ws>Samoa</option>
                 <option value=sm>San Marino</option>
                 <option value=st>Sao Tome and Principe</option>
                 <option value=sa>Saudi Arabia</option>
                 <option value=gb-sct>Scotland</option>
                 <option value=sn>Senegal</option>
                 <option value=rs>Serbia</option>
                 <option value=sc>Seychelles</option>
                 <option value=sl>Sierra Leone</option>
                 <option value=sg>Singapore</option>
                 <option value=sk>Slovakia</option>
                 <option value=si>Slovenia</option>
                 <option value=so>Somalia</option>
                 <option value=za>South Africa</option>
                 <option value=kr>South Korea</option>
                 <option value=es>Spain</option>
                 <option value=lk>Sri Lanka</option>
                 <option value=sd>Sudan</option>
                 <option value=sr>Suriname</option>
                 <option value=se>Sweden</option>
                 <option value=ch>Switzerland</option>
                 <option value=sy>Syria</option>
                 <option value=tw>Taiwan</option>
                 <option value=tj>Tajikistan</option>
                 <option value=tz>Tanzania</option>
                 <option value=th>Thailand</option>
                 <option value=tg>Togo</option>
                 <option value=tk>Tokelau</option>
                 <option value=to>Tonga</option>
                 <option value=tt>Trinidad and Tobago</option>
                 <option value=tn>Tunisia</option>
                 <option value=tr>Turkey</option>
                 <option value=tm>Turkmenistan</option>
                 <option value=tc>Turks and Caicos Islands</option>
                 <option value=tv>Tuvalu</option>
                 <option value=ug>Uganda</option>
                 <option value=ua>Ukraine</option>
                 <option value=ae>United Arab Emirates</option>
                 <option value=gb>United Kingdom</option>
                 <option value=us>United States of America</option>
                 <option value=uy>Uruguay</option>
                 <option value=uz>Uzbekistan</option>
                 <option value=vu>Vanuatu</option>
                 <option value=ve>Venezuela</option>
                 <option value=vn>Vietnam</option>
                 <option value=vg>Virgin Islands</option>
                 <option value=vi>Virgin Islands of the United States</option>
                 <option value=gb-wls>Wales</option>
                 <option value=ye>Yemen</option>
                 <option value=zm>Zambia</option>
                 <option value=zw>Zimbabwe</option>
               </select></div>
             <div class='col-lg-3 inforighthelp'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p data-localize=&#39;chats.flaginfo&#39;>Show a country flag next to your name.</p>'>?</span></div>
           </div>
           <div id=noHideMarried class='row form-group d-none'>
             <div class=col-lg-3><label data-localize=chats.nomarried>hide bff/married:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=nomarried><span class='slider2 round'></span></label></div>
             <div class='col-lg-2 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.nomarriedinfo&#39;>Do not show bff or married status on your xatspace</span>.</p>'>?</span></div>
             <div class=col-lg-2><label><span data-localize=chats.backcol>back color</span>:</label></div>
             <div class=col-lg-2><input class='form-control form-control-sm' id=backcolor maxlength=100></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.backcolorinfo&#39;>Change the background color behind the bff/married icon</span>.</p>'>?</span>
               <div class='oneline transButton' id=button4 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
           </div>
           <div id=noVerified class='row form-group d-none'>
             <div class=col-lg-3><label data-localize=chats.noverified>hide verified:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=noverified><span class='slider2 round'></span></label></div>
             <div class='col-lg-2 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.noverifiedinfo&#39;>Do not show verified or celebrity status on your xatspace</span>.</p>'>?</span></div>
             <div class=col-lg-2><label><span data-localize=chats.backcol>back color</span>:</label></div>
             <div class=col-lg-2><input class='form-control form-control-sm' id=backcolor2 maxlength=100></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.backcolor2info&#39;>Change the background color behind the verified/celebrity icon</span>.</p>'>?</span>
               <div class='oneline transButton' id=button5 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
           </div>
           <div class='row form-group'>
             <div class=col-lg-3><label data-localize=chats.hidehomepage>hide homepage:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=nohompage><span class='slider2 round'></span></label></div>
             <div class='col-lg-2 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.nohomeinfo&#39;>Do not show the hompage on your xatspace (if added)</span>.</p>'>?</span></div>
             <div class=col-lg-2><label><span data-localize=chats.backcol>back color</span>:</label></div>
             <div class=col-lg-2><input class='form-control form-control-sm' id=backcolor4 maxlength=100></div>
             <div class='col-lg-1 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.backcolor4info&#39;>Change the background color behind the homepage icon</span>.</p>'>?</span>
               <div class='oneline transButton' id=button9 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
             </div>
           </div>
           <div class='row form-group'>
             <div class=col-lg-3><label><span data-localize=chats.socialmedia>social media</span>:</label></div>
             <div class='col-lg-3 mb-sm-3'><a id=socialmodal href=# class='btn btn-primary btn-sm py-0 editmid' data-toggle=modal data-target=#socialModal><img class='mr-2 editcen' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/pencil.svg alt=edit><span data-localize=chats.edit>edit</span></a></div>
             <div class=col-lg-2><label><span data-localize=chats.icandbut>icons and buttons</span>:</label></div>
             <div class=col-lg-3><a id=iconmodal href=# class='btn btn-primary btn-sm py-0 editmid' data-toggle=modal data-target=#iconModal><img class='mr-2 editcen' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/pencil.svg alt=edit><span data-localize=chats.edit>edit</span></a></div>
           </div>
           <div class='row form-group lostpass' id=buyMe>
             <div class='col-lg-12 mt-sm-2'><img class='mr-2 mb-1' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/star.svg alt=star width=20><a href=https:// <?php echo DOMAIN; ?>/store target=_blank rel=noopener data-localize=chats.buymepow>Unlock more great options with ME power: xatframe, hide menu, custom name and name glow. Buy now!</a></div>
           </div>
           <div class='modal fade bd-example-modal-lg' id=socialModal tabindex=-1 role=dialog aria-labelledby=socialModal aria-hidden=true data-keyboard=false data-backdrop=static>
             <div class='modal-dialog modal-dialog-centered modal-lg' role=document>
               <div class=modal-content>
                 <div class=modal-header>
                   <h5 class=modal-title id=SocialModalTitle data-localize=chats.linksocial>link social media</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                 </div>
                 <form id=delyes class=needs-validation autocomplete=off novalidate>
                   <div class=modal-body><span data-localize=chats.socialinfo>Show your social media on your xatspace. Simply add the name or ID of your social media webpage in the fields.</span><a href=https://xat.wiki/xatspace#Social target=_blank rel=noopener data-localize=chats.wikidel>More information on wiki</a>. <div id=socialmediaerr class='alert alert-danger HideDiv ClrErr socialInputs mt-4' role=alert></div>
                     <div class='row form-group mt-4'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/instagram.svg alt=instagram></div>
                       <div class='col-md-12 col-lg-5'><label for=instagram>instagram.com/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=instagramInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/facebook.svg alt=facebook></div>
                       <div class='col-md-12 col-lg-5'><label for=facebook>facebook.com/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=facebookInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/twitter.svg alt=twitter width=23></div>
                       <div class='col-md-12 col-lg-5'><label for=twitter>twitter.com/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=twitterInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/youtube.svg alt=youtube></div>
                       <div class='col-md-12 col-lg-5'><label for=youtube>youtube.com/channel/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=youtubeInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/snapchat.svg alt=snapchat></div>
                       <div class='col-md-12 col-lg-5'><label for=snapchat>snapchat.com/add/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=snapchatInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/steam.svg alt=steam></div>
                       <div class='col-md-12 col-lg-5'><label for=steam>steamcommunity.com/profiles/ <span data-localize=chats.or>or</span> /id/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=steamInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/twitch.svg alt=twitch width=21></div>
                       <div class='col-md-12 col-lg-5'><label for=twitch>twitch.tv/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=twitchInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/spotify.svg alt=spotify></div>
                       <div class='col-md-12 col-lg-5'><label for=spotify>open.spotify.com/user/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=spotifyInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/pinterest.svg alt=pinterest width=21></div>
                       <div class='col-md-12 col-lg-5'><label for=pinterest>pinterest.com/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=pinterestInp maxlength=200 required></div>
                     </div>
                     <hr>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/groups.svg alt=group width=23 class=xatgroup></div>
                       <div class='col-md-12 col-lg-5'><label for=group> <?php echo DOMAIN; ?>/(group)</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=groupInp maxlength=200 required></div>
                     </div>
                     <div class='row form-group'>
                       <div class=col-sm-1><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/xatplanet.svg alt=xat class=xatforum></div>
                       <div class='col-md-12 col-lg-5'><label for=xat>forum. <?php echo DOMAIN; ?>/profile/</label></div>
                       <div class='col-md-12 col-lg-6'><input class='form-control form-control-sm' id=forumInp maxlength=200 required></div>
                     </div>
                   </div>
                   <div class=modal-footer><button id=socialSave type=submit class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/save.svg alt=save><span data-localize=chats.ok>OK</span></button></div>
                 </form>
               </div>
             </div>
           </div>
           <div class='modal fade bd-example-modal-lg xsmodal' id=iconModal tabindex=-1 role=dialog aria-labelledby=iconModal aria-hidden=true>
             <div class='modal-dialog modal-dialog-centered modal-lg' role=document>
               <div class=modal-content>
                 <div class=modal-header>
                   <h5 class=modal-title id=IconModalTitle data-localize=chats.icandbut>icon and buttons</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                 </div>
                 <form>
                   <div class='row mt-2 ml-0 mr-0'>
                     <div class=col-lg-4><label><span data-localize=chats.socialbackcol>social back color</span>:</label></div>
                     <div class=col-lg-4><input class='form-control form-control-sm' id=backcolor3 maxlength=100></div>
                     <div class='col-lg-4 inforighthelp'><span class='curs modalpop' tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.socialbackcolinf&#39;>Change the background color behind the social media icons</span>.</p>'>?</span>
                       <div class='oneline transButton' id=button6 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class='imgButton modalBut'></div>
                     </div>
                   </div>
                   <div class='row mt-3 ml-0 mr-0'>
                     <div class=col-lg-4><label><span data-localize=chats.butcol>button back color</span>:</label></div>
                     <div class=col-lg-4><input class='form-control form-control-sm' id=butcolback maxlength=100></div>
                     <div class='col-lg-4 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.butcolinfo&#39;>Change the background color in the forum button</span>.</p>'>?</span>
                       <div class='oneline transButton' id=button7 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class='imgButton modalBut'></div>
                     </div>
                   </div>
                   <div class='row form-group mt-3 ml-0 mr-0'>
                     <div class=col-lg-4><label><span data-localize=chats.butcol2>button text color</span>:</label></div>
                     <div class=col-lg-4><input class='form-control form-control-sm' id=butcoltext maxlength=100></div>
                     <div class='col-lg-4 inforighthelp mt-sm-2 mb-sm-3'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.butcol2info&#39;>Change the text color in the forum button</span>.</p>'>?</span>
                       <div class='oneline transButton' id=button8 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/color.svg alt=colorpicker class='imgButton modalBut'></div>
                     </div>
                   </div>
                   <div id=noHome class='row form-group ml-0 mr-0'>
                     <div class=col-lg-4><label data-localize=chats.nobut>no button icon:</label></div>
                     <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=nobut><span class='slider2 round'></span></label></div>
                     <div class='col-lg-2 inforighthelp ml-3 helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.nobutinfo&#39;>Hide the icon in the forum button (if added)</span>.</p>'>?</span></div>
                   </div>
                   <div id=noHome class='row form-group ml-0 mr-0'>
                     <div class=col-lg-4><label data-localize=chats.nobuttons>no button:</label></div>
                     <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=nobutton><span class='slider2 round'></span></label></div>
                     <div class='col-lg-3 inforighthelp ml-3 helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.nobuttonsinfo&#39;>Do not show a button around the forum button (if added)</span>.</p>'>?</span></div>
                   </div>
                 </form>
               </div>
             </div>
           </div>
           <h4 class='mb-3 mt-4' data-localize=chats.aboutme>About me</h4>
           <div id=summernote></div>
           <div id=hideHead class='row form-group mt-4'>
             <div class=col-lg-3><label data-localize=chats.hideheading>hide heading:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=hideHeading><span class='slider2 round'></span></label></div>
             <div class='col-lg-3 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.hideheadinginfo&#39;>Hide the About me heading that appears above the content on your xatspace. This option is irrelevant if there&#39;s no About Me content set.</span></p>'>?</span></div>
           </div>
           <div id=noEditInfo class='row form-group d-none'>
             <div class=col-lg-3><label data-localize=chats.hidedefault>hide default messages:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=hideDefault><span class='slider2 round'></span></label></div>
             <div class='col-lg-3 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.defaultinfo&#39;>If you have no About Me or Media content set, your xatspace shows default messages. You can hide these.</span></p>'>?</span></div>
           </div>
           <h4 class='mt-3 mb-3' data-localize=chats.xsmedia>Media</h4>
           <div id=summernote2></div>
           <div class=text-right><a class='cssguidelines nosel' href=https://xat.wiki/Special_codes target=_blank data-localize=chats.embed>Embed requires special codes</a></div>
           <div id=z class='row form-group'>
             <div class=col-lg-3><label data-localize=chats.invisible>invisible media:</label></div>
             <div class='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1'><label class=switch2><input type=checkbox id=invisible><span class='slider2 round'></span></label></div>
             <div class='col-lg-3 inforighthelp helpsmall'><span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.invisibleinfo&#39;>If enabled, Media content will become invisible, avoiding space to be occupied. Useful if for example, Media is only used for autoplayed youtube music in the background.</span></p>'>?</span></div>
           </div>
           <div class='mt-5 bottombuttons'><a id=TabsPreview href=# class='btn btn-info btn-large'><img class='mr-2 pb-1' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/preview.svg alt=preview><span data-localize=chats.preview>preview</span></a><a id=TabsSubmit href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/save.svg alt=save><span data-localize=chats.save>save</span></a><a id=export data-toggle=modal data-target=#exportModal href=# class='btn btn-outline-info btn-large float-right'><img class='mr-2 pb-1 expimp' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/xsexport.svg alt=save><span data-localize=chats.export>export</span>/<span data-localize=chats.import>import</span></a>
             <p class=inforight data-localize=chats.livechanges>Changes may take up to 30 mins to go live</p>
           </div>
           <div class='modal fade' id=exportModal tabindex=-1 role=dialog aria-labelledby=exportModal aria-hidden=true>
             <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                 <div class=modal-header>
                   <h5 class=modal-title id=ImportModalTitle><span data-localize=chats.export>export</span> / <span data-localize=chats.import>import</span> xatspace</h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                 </div>
                 <form class=needs-validation novalidate>
                   <div class=modal-body>
                     <div data-localize=chats.expimpinfo class=mb-4>Export your current xatspace design and import at any time.</div>
                     <div id=xsimperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
                     <div class='row form-group'>
                       <div class=col-4><label data-localize=chats.filename>file name:</label></div>
                       <div class=col-8><input class='form-control form-control-sm' id=filename maxlength=100></div>
                     </div><a id=exportok href=# class='btn btn-info btn-large float-right mb-4'><img class='mr-2 pb-1' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/download.svg alt=export><span data-localize=chats.export>export</span></a>
                     <div class=custom-file id=xatpselect><input type=file name=import accept=.xatme class=custom-file-input id=import required><label class=custom-file-label for=import><span data-localize=chats.select>Select</span> .xatme <span data-localize=chats.file>file</span></label></div><a id=importok href=# class='btn btn-info btn-large float-right mt-3 mb-4'><img class='mr-2 pb-1 impsvgmod' src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/download.svg alt=import><span data-localize=chats.import>import</span></a>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </form>
       </div>
     </div>
     <div id=cookiePopup class='alert alert-dismissible text-center cookiePopup' role=alert>
       <div><span data-localize=web.privacyterms>xat uses <a href=https:// <?php echo DOMAIN; ?>/privacy rel=noopener target=_blank>cookies</a> and your use is subject to <a href=https:// <?php echo DOMAIN; ?>/terms rel=noopener target=_blank>terms</a></span><button id=cookieAgree type=button class='btn btn-primary btn-sm cookieButton' aria-label=accept><span data-localize=web.agree>agree</span></button><button id=cookieSettings type=button class='btn btn-outline-secondary btn-sm cookieButton' aria-label=settings><span data-localize=web.settings>settings</span></button></div>
     </div>
     <div id=embedDialog></div>
     <div id=sendMessageDialog></div>
     <div id=inappDialog></div>
     <div id=termsDialog></div>
     <div id=privacyDialog>
       <div class='modal fade' id=privacyModal tabindex=-1 role=dialog aria-labelledby=privacyModalLabel aria-hidden=true>
         <div class='modal-dialog mw-100 w-75' role=document>
           <div class=modal-content>
             <div class=modal-header>
               <h5 class=modal-title id=inappModalLabel><img class=mr-2 src=/content/web/ <?php echo DIRVERSION; ?>/img/navbar/terms.svg alt=terms><span data-localize=web.preferences>privacy preferences</span></h5><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
             </div>
             <div class=modal-body>
               <div id=privacyGroupFrame class='alert alert-danger d-none' role=alert>
                 <h4 class=text-center><span data-localize=web.triedtab>you tried to open a group tab</span></h4>
                 <p><strong id=privacyGroupUrl></strong><span data-localize=web.tabblocked>has been blocked due to your privacy preferences. Opening this tab is the same as visiting a third party website. You can 'allow this time' or change your 'group tabs' privacy preferences below.</span></p>
                 <div class='d-flex p-1 justify-content-end'><button id=privacyGroupButton type=button class='btn btn-primary'><span data-localize=web.allow>allow this time</span></button></div>
               </div>
               <div class='container card mb-4 pt-2 pb-2'>
                 <div class=row>
                   <div class=col><span data-localize=web.necessary>necessary cookies</span><br><small><span data-localize=web.operate>These are necessary for this service to operate. They mainly store your preferences and settings.</span><a href=/privacy><span data-localize=web.learnmorenec>Learn more about necessary cookies.</span></a></small></div>
                   <div class='col-ms-auto mr-2'><label class=switch><input id=privacyNecessary type=checkbox checked><span class='slider round'></span></label></div>
                   <div class='w-100 mb-3'></div>
                   <div class=col><span data-localize=web.performance>performance cookies</span><br><small><span data-localize=web.optional>These are used to improve the performance of the service. The service can operate without these.</span><a href=/privacy><span data-localize=web.learnmoreper>Learn more about performance cookies.</span></a></small></div>
                   <div class='col-ms-auto mr-2'><label class=switch><input id=privacyPerformance type=checkbox checked><span class='slider round'></span></label></div>
                   <div class='w-100 mb-3'></div>
                   <div class=col><span data-localize=web.grouptabs>group tabs (third party)</span><br><small><span data-localize=web.allowstabs>This option allows third party content to open automatically on all xat groups.</span><a href=/privacy><span data-localize=web.learnmorethird>Learn more about third party content.</span></a></small></div>
                   <div class='col-ms-auto mr-2'><label class=switch><input id=privacyGroups type=checkbox><span class='slider round'></span></label></div>
                 </div>
               </div>
             </div>
             <div class=modal-footer><button id=openPolicy type=button class='btn btn-info' data-dismiss=modal><span data-localize=web.policy>privacy policy</span></button><button id=privacyClose type=button class='btn btn-primary'><span data-localize=web.close>close</span></button></div>
           </div>
         </div>
       </div>
     </div>
     <div id=languageDialog></div>
     <script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script>
     <script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js></script>
     <script src=https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js></script>
     <link href=/content/js/summernote3/summernote-bs4.min.css rel=stylesheet>
     <script src=/content/js/summernote3/summernote-bs4.min.js></script>
     <script src=/content/js/slimselect/slimselect.min.js></script>
     <link href=/content/js/slimselect/slimselect.min.css rel=stylesheet>
     <link href=/content/js/pickr/nano.min.css rel=stylesheet>
     <script src=/content/js/pickr/pickr.min.js></script>
     <script src=/content/web/ <?php echo DIRVERSION; ?>/lib/jquery.localize.js></script>
     <script src=/content/web/ <?php echo DIRVERSION; ?>/common.js></script>
     <script src=/content/web/ <?php echo DIRVERSION; ?>/box/www/Avatars.js></script>
     <script src=/content/web/ <?php echo DIRVERSION; ?>/xatspace.js?2></script>
