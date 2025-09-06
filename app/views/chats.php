<!doctype html>
<html lang=en>
   <head>
      <meta http-equiv=Content-Security-Policy content='
         default-src &#39;self&#39;;
         style-src &#39;unsafe-inline&#39; &#39;self&#39; https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css https://www.gstatic.com/; 
         connect-src https://<?php echo DOMAIN ?>/ https://util.<?php echo DOMAIN ?>/;
         img-src &#39;self&#39; https://*.<?php echo DOMAIN ?>/ https://<?php echo DOMAIN ?>/ https://ssl.google-analytics.com/ https://images.weserv.nl/ https://i.imgur.com/ https://i.postimg.cc/ https://u.cubeupload.com/ https://i.ibb.co/ https://i.imgyukle.com/;
         script-src &#39;self&#39; https://<?php echo DOMAIN ?>/
         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js
         https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js
         https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.js
         https://google-analytics.com/ https://google-analytics.com/urchin.js https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.gstatic.com/;
         frame-src &#39;self&#39; https://www.google.com/recaptcha/;
         base-uri &#39;self&#39;;
         object-src &#39;none&#39;;
         form-action https://<?php echo DOMAIN ?>/'>
      <meta charset=utf-8>
      <meta name=viewport content='width=device-width,initial-scale=1,shrink-to-fit=no'>
      <meta name=description content=<?php echo XAT_NAME ?>>
      <title><?php echo XAT_NAME ?> chats</title>
      <script type=application/json id=xjson> {"type":"home","dir":"/content/web/<?php echo DIRVERSION;?>/"} </script>
      <link href=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css rel=stylesheet>
      <link href=/content/web/<?php echo DIRVERSION;?>/direct.css?z rel=stylesheet>
      <link href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap' rel=stylesheet>
      <link rel=manifest href=/content/web/<?php echo DIRVERSION;?>/manifest.json>
      <link rel=icon href=/content/web/<?php echo DIRVERSION;?>/img/favicon.ico>
      <link rel=icon href=/content/web/<?php echo DIRVERSION;?>/img/favicon-32x32.png sizes=32x32 type=image/png>
      <link rel=icon href=/content/web/<?php echo DIRVERSION;?>/img/favicon-16x16.png sizes=16x16 type=image/png>
      <meta name=application-name content=<?php echo XAT_NAME ?>>
      <meta name=theme-color content=#ffffff>
      <link rel=mask-icon href=/content/web/<?php echo DIRVERSION;?>/img/safari-pinned-tab.svg color=#5bbad5>
      <link rel=apple-touch-icon href=/content/web/<?php echo DIRVERSION;?>/img/apple-touch-icon.png sizes=180x180>
      <meta name=apple-mobile-web-app-title content=<?php echo XAT_NAME ?>>
      <meta name=msapplication-config content=/content/web/<?php echo DIRVERSION;?>/img/favicons/browserconfig.xml>
   </head>
   <body class=invisible >
      <nav id=navTop class='navbar navbar-expand-lg navbar-dark fixed-top gradback p-0'>
         <div class=header-flex>
            <div><a class='navbar-brand p-0 m-0 ml-2 peShiner' href=https://<?php echo DOMAIN ?>><img id=navLogo src=/content/web/<?php echo DIRVERSION;?>/img/xatplanet.svg height=60 alt=logo></a></div>
            <div class=logoname-flex>
               <div id=groupName><?php echo XAT_NAME ?> <span data-localize=chats.chatshe >chats</span></div>
               <div id=groupDescription></div>
            </div>
         </div>
         <span id=statnav></span>
      </nav>
      <div class=container>
      <div class='text-center mb-3 xbanner'><iframe title='<?php echo XAT_NAME ?> banner' width=728 height=90 id=promoframe src=/content/web/<?php echo DIRVERSION;?>/apps/ad/ad.html scrolling=no sandbox='allow-scripts allow-same-origin'></iframe></div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light newnav' id=mainNav>
         <a class='navbar-brand newbartitle' href=# data-localize=web.menu>menu</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavChats aria-controls=navbarNavChats aria-expanded=false aria-label='Toggle navigation'><span class='navbar-toggler-icon darktoggle'></span></button>
         <div class='collapse navbar-collapse' id=navbarNavChats>
            <div class=navbar-nav>
               <li class=nav-item><a id=tabcreategroup class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/groups.svg alt=creategroup><span data-localize=chats.creategroup>create group</span></a></li>
               <li class=nav-item><a id=tabeditgroup class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/customize.svg alt=editgroup><span data-localize=chats.editgroup>edit group</span></a></li>
               <li class=nav-item><a id=tabevents class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/events.svg alt=events><span data-localize=chats.events>events</span></a></li>
               <li class=nav-item><a id=tablibrary class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/xatframe.svg alt=xatframe width=21><span data-localize=chats.framelib><?php echo XAT_NAME ?>rame library</span></a></li>
            </div>
         </div>
      </nav>
      <div id=creategroup class='d-none HideDiv'>
         <div id=creategrouphtml>
            <h1><span data-localize=chats.creategroup>create group</span></h1>
            <p><span data-localize=chats.grpinfonew><?php echo XAT_NAME ?> groups are shared chat rooms for a specific purpose. Discuss particular subjects like anime, gaming, music, technology, news and more. Create a chat for your friends, community, country or city.</span><a href=https://<?php echo DOMAIN ?>/ target=_blank rel=noopener class=nodeco data-localize=chats.explore>Explore existing groups</a><a href=https://<?php echo DOMAIN ?>/ target=_blank rel=noopener class=nodeco>.</a></p>
            <div id=creategrouperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form id=createyes class=needs-validation autocomplete=<?php echo XAT_NAME ?>09 novalidate>
               <div class=row>
                  <div class=col-lg>
                     <div class=mb-3>
                        <label for=YourName><span data-localize=chats.yourname>your name</span>:</label><input name=YourName class='form-control form-control-sm' id=YourName maxlength=60 autocomplete=<?php echo XAT_NAME ?>01 autofocus required>
                        <div id=YourNameerr class='invalid-feedback ClrErr'></div>
                        <div class='small inforight'><span data-localize=chats.myname>Name you wish to be addressed by in emails</span></div>
                     </div>
                  </div>
                  <div class=col-lg>
                     <div class=mb-3>
                        <label for=GroupName><span data-localize=chats.groupname>group name</span>:</label><input name=GroupName class='form-control form-control-sm' id=GroupName maxlength=60 autocomplete=<?php echo XAT_NAME ?>06 required>
                        <div id=GroupNameerr class='invalid-feedback ClrErr'></div>
                        <div class='small inforight'><span data-localize=chats.az>A-Z, a-z, 0-9 only (e.g. AllAboutCats)</span></div>
                     </div>
                  </div>
               </div>
               <div class=row>
                  <div class=col-lg>
                     <div class=mb-3>
                        <label for=GroupDescription><span data-localize=chats.desc>group description</span>:</label><input name=GroupDescription class='form-control form-control-sm' id=GroupDescription maxlength=100 autocomplete=<?php echo XAT_NAME ?>05 required>
                        <div id=GroupDescriptionerr class='invalid-feedback ClrErr'></div>
                        <div class='small inforight'>20-50 <span data-localize=chats.letters>letters</span></div>
                     </div>
                  </div>
                  <div class=col-lg>
                     <div class=mb-3>
                        <label for=Tags><span data-localize=chats.tags>tags</span>:</label><input name=Tags class='form-control form-control-sm noread' id=Tags maxlength=128 autocomplete=bcx5>
                        <div class='small inforight'><span><span data-localize=chats.sepcom>Separated by commas</span>.</span><span data-toggle=tooltip data-placement=top class=curs data-html=true title='<span data-localize=&#39;chats.taginfo&#39;>Tags are keywords that help describe your group so that others are able to find it. For example, a racing group may include the following tags: race,nascar,car. If your group is set to a language other than English, it&#39;s recommended to include your language, e.g. Francais or Espanol.</span>'><span data-localize=chats.whatstags>Tags</span>?</span></div>
                     </div>
                  </div>
               </div>
               <div class=row>
                  <div class=col-lg>
                     <div class=mb-3>
                        <label for=gppassword data-localize=chats.pass>password</label>:
                        <div class=input-group>
                           <input type=password name=gppassword class='form-control form-control-sm passInput noread' id=password maxlength=128 autocomplete=new-password2 required>
                           <div class=input-group-append><button class='btn PassReveal searchButton eyeButton viewpassbut' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass></button></div>
                        </div>
                        <div id=passworderr class='invalid-feedback ClrErr'></div>
                        <div class='small inforight'><span data-localize=chats.cgpass>At least 6 letters, case sensitive, A-Z, a-z, 0-9 only.</span><span data-localize=chats.noshare>DO NOT SHARE</span>!</div>
                     </div>
                  </div>
                  <div class=col-lg>
                     <div class=mb-3>
                        <label for=email data-localize=chats.email>email</label>:
                        <input name=text class='form-control form-control-sm noread' id=email maxlength=100 autocomplete=x903 required>
                        <div id=emailerr class='invalid-feedback ClrErr'></div>
                        <div class='small inforight'><span data-localize=chats.mustvalid>This must be a valid email address to activate your group</span></div>
                     </div>
                  </div>
               </div>
               <div class='alert alert-warning small' role=alert>
                  <p><span data-localize=chats.amended>Your group may be removed without warning or amended if</span>:</p>
                  <ul class=mb-0>
                     <li data-localize=chats.validemail>You do not provide a valid e-mail address</li>
                     <li><span data-localize=chats.groupinapp>The group name is inappropriate</span> (<span data-localize=chats.see>see</span><a href=https://<?php echo DOMAIN ?>/terms target=_blank rel=noopener class=nodeco data-localize=chats.termsofsrv>Terms of Service</a>)</li>
                     <li data-localize=chats.groupmod>The group is not used or unmoderated</li>
                  </ul>
               </div>
               <div class=row>
                  <div class=col-lg>
                     <div class=mb-3>
                        <div class='custom-control custom-checkbox'>
                           <input type=checkbox class=custom-control-input id=Agree><label class='custom-control-label cursoric' for=Agree><span data-localize=chats.iagree>I have read and agree to the rules and</span><a class=nodeco target=_blank rel=noopener href=//<?php echo DOMAIN ?>/terms data-localize=chats.termsread>terms</a></label>
                           <div id=Agreeerr class='invalid-feedback ClrErr d-none'></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class=row>
                  <div class=col-lg>
                     <div id=createcap class=ClrDiv></div>
                  </div>
               </div>
               <div class=bottombuttons><button id=createBut type=submit class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/groups.svg alt=create><span data-localize=chats.create>create</span></button></div>
            </form>
         </div>
      </div>
      <div id=editgroup class='d-none HideDiv'>
         <h1><span data-localize=chats.editgrouplogin>edit group login</span></h1>
         <form accept-charset=UTF-8 autocomplete=off class=grouploginform>
            <div id=editgrouperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <div class=row>
               <div class=col-lg-2>
                  <div class=mb-3><label for=edname><span data-localize=chats.groupname>group name</span>:</label></div>
               </div>
               <div class='col-lg-4 groupnamecol'>
                  <div class=mb-3><input name=edname class='form-control form-control-sm d-none noread' id=GroupNameI autocomplete=h108><span id=GroupName></span></div>
               </div>
            </div>
            <div class=row>
               <div class=col-lg-2><label for=edpass data-localize=chats.pass>password</label>: </div>
               <div class=col-lg-4>
                  <div class='input-group mb-3'>
                     <input type=password name=edpass class='form-control form-control-sm passInput' id=Edpassword maxlength=128 autocomplete=new-password autofocus required>
                     <div class=input-group-append><button class='btn PassReveal searchButton eyeButton viewpassbut' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass></button></div>
                  </div>
                  <a id=lostpw class='nodeco lostpass nosel' href=# data-toggle=modal data-target=#lostpwmodal><span data-localize=chats.forgotpw>forgot password</span>?</a>
               </div>
               <div class=col-lg-6>
                  <div class='small inforight'><span data-localize=chats.userlogin>If you're added as main owner, you can log in with your account password</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Owners_Guide#Main_owners target=_blank rel=noopener class=nodeco>wiki</a>) </div>
               </div>
            </div>
            <div class=bottombuttons><button id=grouplogin type=submit class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/groups.svg alt=grouplogin><span data-localize=chats.login>login</span></button></div>
         </form>
         <div class='modal fade' id=lostpwmodal tabindex=-1 role=dialog aria-labelledby=LostPasswordModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=LostPasswordModalTitle data-localize=chats.forgotpw>forgot password</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form class=needs-validation novalidate>
                     <div class=modal-body>
                        <div class='row form-group'>
                           <div class=col-sm-12>
                              <div id=forgotpasserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
                           </div>
                        </div>
                        <div class='row form-group'>
                           <div class=col-sm-12>
                              <p><span data-localize=chats.forgotpass>If you have forgotten your password enter your email below</span>:</p>
                           </div>
                        </div>
                        <div class='row form-group'>
                           <div class=col-sm-11><input name=email id=emailLP class='form-control form-control-sm' maxlength=120 required></div>
                        </div>
                     </div>
                     <div class=modal-footer><a id=SubmitLost href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/save.svg alt=submit><span data-localize=chats.submit>submit</span></a></div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <div id=editgroup_edit class='d-none HideDiv'>
         <h1><span data-localize=chats.editgroup>edit group</span></h1>
         <nav class='navbar navbar-expand-lg navbar-light bg-light newnav'>
            <a class='navbar-brand newbartitle' href=# data-localize=web.menu>menu</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavChatsE aria-controls=navbarNavChatsE aria-expanded=false aria-label='Toggle navigation'><span class='navbar-toggler-icon darktoggle'></span></button>
            <div class='collapse navbar-collapse' id=navbarNavChatsE>
               <div class=navbar-nav>
                  <li class=nav-item><a id=tabreturn class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/return.svg alt=return></a></li>
                  <li class=nav-item><a id=tabappearance class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/paint.svg alt=appearance><span data-localize=chats.appearance>appearance</span></a></li>
                  <li class=nav-item><a id=tabtabs class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/tabs.svg alt=tabs><span data-localize=chats.tabs>tabs</span></a></li>
                  <li class=nav-item><a id=tabsettings class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/community.svg alt=settings><span data-localize=chats.settings>settings</span></a></li>
                  <li class=nav-item><a id=tabgrouppowers class='NavTabs nav-link' href=#><img class='mr-2 powericon' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/powers.svg alt=grouppowers><span data-localize=chats.grouppowers>group powers</span></a></li>
                  <li class=nav-item><a id=tabmainowners class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/mainowner.svg alt=mainowners width=18><span data-localize=chats.mains>main owners</span></a></li>
                  <li class=nav-item><a id=tabmiscellaneous class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/misc.svg alt=miscellaneous width=18><span data-localize=chats.misc>miscellaneous</span></a></li>
                  <li class=nav-item><a id=tabembed class='NavTabs nav-link cursoric' href=#><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/embed2.svg alt=embed width=21></a></li>
               </div>
            </div>
         </nav>
         <div class='modal fade' id=embedmodal tabindex=-1 role=dialog aria-labelledby=EmbedModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered modal-lg embedresp' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=EmbedModalTitle data-localize=chats.embedgrp>embed your group</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <div class=modal-body>
                     <div class='row form-group toembed d-none'>
                        <div class=col-sm-5>
                           <div class='btn-group btn-group-sm' role=group aria-label='Basic example'><button type=button class='btn btn-secondary' id=embsmall data-localize=chats.small>Small</button><button type=button class='btn btn-secondary' id=embmedium data-localize=chats.medium>Medium</button><button type=button class='btn btn-secondary' id=emblarge data-localize=chats.large>Large</button></div>
                        </div>
                     </div>
                     <div class='row form-group'>
                        <div class=col-sm-2><label for=embed_width><span data-localize=chats.width>width</span>:</label></div>
                        <div class=col-sm-3><input name=embed_width class='form-control form-control-sm' id=embed_width maxlength=64 required></div>
                        <div class='col-sm-2 heembed'><label for=embed_height><span data-localize=chats.height>height</span>:</label></div>
                        <div class=col-sm-3><input name=embed_height class='form-control form-control-sm' id=embed_height maxlength=64 required></div>
                     </div>
                     <div class=row>
                        <div class=col-sm-12><textarea class='form-control txembed' rows=3 id=embed_code readonly></textarea></div>
                     </div>
                  </div>
                  <div class=modal-footer><button type=button class='btn btn-primary' id=preview><span data-localize=chats.preview>preview</span></button><button type=button class='btn btn-primary' id=copy data-toggle-sec=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.copied&#39;>Copied</span>!'><span data-localize=chats.copy>copy</span></button></div>
                  <div class='modal-body embedflow d-flex justify-content-center'>
                     <div id=embedpreview></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id=appearance class='d-none HideDiv'>
         <form class=needs-validation novalidate>
            <div id=apperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <h6 class=headbottom data-localize=chats.group>group</h6>
            <div class='row form-group'>
               <div class=col-lg-3><label for=gbackground><span data-localize=chats.outbackground>outer background</span>:</label></div>
               <div class=col-lg-5><input name=color2 class='form-control form-control-sm' id=gbackground maxlength=100></div>
               <div class='col-lg-3 inforighthelp'>
                  <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.bginfo&#39;>Change the background image of the <?php echo XAT_NAME ?> group page</span>. <span data-localize=&#39;chats.require&#39;>Requires a direct image link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https:https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Images&#39; target=&#39;_blank&#39; rel=&#39;noopener&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.permittedimg&#39;>See permitted image providers</span>.</a></p>'>?</span>
                  <div class='oneline transButton' id=button0 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.color&#39;>or add a color instead</span>'><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
               </div>
            </div>
            <div class='row form-group'>
               <div class=col-lg-3><label for=iframegp><?php echo XAT_NAME ?>frame:</label></div>
               <div class=col-lg-5><input name=iframegp class='form-control form-control-sm' id=iframe maxlength=100><a class=cssguidelines href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Xatframe#rules target=_blank rel=noopener data-localize=chats.framerules>See <?php echo XAT_NAME ?>frame rules</a></div>
               <div class='col-lg-3 inforighthelp framecol'>
                  <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.iframedesc&#39;>Change your group style with a <?php echo XAT_NAME ?>frame</span>. <span data-localize=&#39;chats.requirehtml&#39;>Requires a direct html link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https:https://util.<?php echo DOMAIN ?>/wiki/index.php?title=xatframe&#39; target=&#39;_blank&#39; rel=&#39;noopener&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.framewiki&#39;>See wiki for more information</span>.</a></p>'>?</span>
                  <div class=oneline><a href=https://<?php echo DOMAIN ?>/chats#!library target=_blank rel=noopener><button type=button class='btn btn-outline-info btn-sm py-0 framelib'><img class=framebut src=/content/web/<?php echo DIRVERSION;?>/img/navbar/xatframe.svg alt=<?php echo XAT_NAME ?>frame width=21><span data-localize=chats.framelib><?php echo XAT_NAME ?>frame library</span></button></a></div>
               </div>
            </div>
			<span id=gstyle>
                  <hr>
                  <h6 class=headbottom>gstyle</h6>
                  <div class='row form-group'>
                     <div class=col-lg-3> <label><span data-localize=chats.flag>country flag</span>:</label> </div>
                     <div class=col-lg-5>
                        <select id=flag>
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
                           <option value=xat>xat</option>
                           <option value=ye>Yemen</option>
                           <option value=zm>Zambia</option>
                           <option value=zw>Zimbabwe</option>
                        </select>
                     </div>
                     <div class='col-lg-3 inforighthelp'> <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>'data-content='<p data-localize=&#39;chats.flaginfogrp&#39;>Show a country flag next to your group name.</p>'>?</span> </div>
                  </div>
                  <div class='row form-group'>
                     <div class=col-lg-3> <label><span data-localize=chats.navtheme>navbar theme</span>:</label> </div>
                     <div class=col-lg-5>
                        <select id=grad>
                           <option value=navdefault>Default</option>
                           <option value=navplanet>Planet</option>
                           <option value=navspace>Space</option>
                        </select>
                     </div>
                     <div class='col-lg-3 inforighthelp'> <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>'data-content='<p data-localize=&#39;chats.navthemeinfo&#39;>Change the background gradient theme on the navigation bar.</p>'>?</span> </div>
                  </div>
                  <div class='row form-group'id=gFont>
                     <div class=col-lg-3> <label><span data-localize=chats.fontstyle>font style</span>:</label> </div>
                     <div class=col-lg-5>
                        <select id=font>
                           <option value=Inherit>Default</option>
                           <option value='Cabin Sketch'class=xsf11>Cabin Sketch</option>
                           <option value='Comic Sans MS'class=xsf2>Comic Sans MS</option>
                           <option value=Courier class=xsf4>Courier</option>
                           <option value='Freckle Face'class=xsf12>Freckle Face</option>
                           <option value=Griffy class=xsf9>Griffy</option>
                           <option value=Lobster class=xsf6>Lobster</option>
                           <option value=Mansalva class=xsf7>Mansalva</option>
                           <option value=Raleway class=xsf5>Raleway</option>
                           <option value=Rockwell class=xsf1>Rockwell</option>
                           <option value=Stick class=xsf10>Stick</option>
                        </select>
                     </div>
                     <div class='col-lg-3 inforighthelp'> <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>'data-content='<p><span data-localize=&#39;chats.fontstylegrpinfo&#39;>Change text font style for group name and description</span>.</p>'>?</span> </div>
                  </div>
                  <div class='row form-group'id=gGlow>
                     <div class=col-lg-3> <label><span data-localize=chats.glow>glow</span>:</label> </div>
                     <div class=col-lg-5> <input class='form-control form-control-sm'id=glow maxlength=100> </div>
                     <div class='col-lg-3 inforighthelp'>
                        <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>'data-content='<p><span data-localize=&#39;chats.grpglow&#39;>Add a glow around the group name and description</span>.</p>'>?</span> 
                        <div class='oneline transButton'id=button5 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'> <img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/color.svg alt=colorpicker class=imgButton> </div>
                     </div>
                  </div>
               </span>
            <hr>
            <h6 class=headbottom data-localize=chats.chat>chat</h6>
            <div class='row form-group'>
               <div class=col-lg-3><label for=cbackground><span data-localize=chats.innbackground>inner background</span>:</label></div>
               <div class=col-lg-5><input class='form-control form-control-sm' id=cbackground maxlength=100></div>
               <div class='col-lg-3 inforighthelp'>
                  <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.bgchatinfo&#39;>Change the background image of the <?php echo XAT_NAME ?> chat</span>. <span data-localize=&#39;chats.require&#39;>Requires a direct image link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https:https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Images&#39; target=&#39;_blank&#39; rel=&#39;noopener&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.permittedimg&#39;>See permitted image providers</span>.</a></p>'>?</span>
                  <div class='oneline transButton' id=button1 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.color&#39;>or add a color instead</span>'><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
               </div>
            </div>
            <div class='row form-group'>
               <div class=col-lg-3><label for=buttoncolor><span data-localize=chats.button>button color</span>:</label></div>
               <div class=col-lg-5><input class='form-control form-control-sm' id=buttoncolor placeholder=#edfaff maxlength=7></div>
               <div class='col-lg-3 inforighthelp'>
                  <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p class=&#39;mb-0&#39;><span data-localize=&#39;chats.buttoninfo&#39;>Change the chat&#39;s default button color</span>.</p>'>?</span>
                  <div class='oneline transButton' id=button2 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.pickcolor&#39;>pick a color</span>'><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
               </div>
            </div>
            <hr>
            <h6 class=headbottom data-localize=chats.mobile>mobile</h6>
            <div class='row form-group'>
               <div class=col-lg-3><label for=portrait><span data-localize=chats.portrait>portrait background</span>:</label></div>
               <div class=col-lg-5><input class='form-control form-control-sm' id=portrait maxlength=100></div>
               <div class='col-lg-1 inforighthelp'>
                  <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.portraitinfo&#39;>Vertical background image for the <?php echo XAT_NAME ?> mobile app</span>. <span data-localize=&#39;chats.require&#39;>Requires a direct image link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https:https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Images&#39; target=&#39;_blank&#39; rel=&#39;noopener&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.permittedimg&#39;>See permitted image providers</span>.</a></p>'>?</span>
                  <div class='oneline transButton' id=button3 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.color&#39;>or add a color instead</span>'><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
               </div>
            </div>
            <div class='row form-group d-none'>
               <div class=col-lg-3><label for=landscape><span data-localize=chats.landscape>landscape background</span>:</label></div>
               <div class=col-lg-5><input class='form-control form-control-sm' id=landscape maxlength=100></div>
               <div class='col-lg-1 inforighthelp'>
                  <span class=curs tabindex=0 data-toggle=popover data-placement=top title='<span data-localize=&#39;chats.info&#39;>information</span>' data-content='<p><span data-localize=&#39;chats.landscapeinfo&#39;>Horizontal background image for the <?php echo XAT_NAME ?> mobile app</span>. <span data-localize=&#39;chats.require&#39;>Requires a direct image link</span>.</p><p class=&#39;mb-0&#39;><a href=&#39;https:https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Images&#39; target=&#39;_blank&#39; rel=&#39;noopener&#39; class=&#39;nodeco&#39;><span data-localize=&#39;chats.permittedimg&#39;>See permitted image providers</span>.</a></p>'>?</span>
                  <div class='oneline transButton' id=button4 data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.color&#39;>or add a color instead</span>'><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/color.svg alt=colorpicker class=imgButton></div>
               </div>
            </div>
			<div class='row form-group lostpass'id=buyGstyle>
                  <div class='col-lg-12 mt-sm-2'> <img class='mr-2 mb-1'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/star.svg alt=star width=20> <a href=https://<?php echo DOMAIN ?>/store target=_blank rel=noopener data-localize=chats.buygstyle>Unlock more great options with Gstyle power: Country flag, glow and font styles for group name and description. Navbar themes as a bonus included. Buy now!</a> </div>
               </div>
            <div class=bottombuttons>
               <a id=AppearancePreview href=# class='btn btn-info btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/preview.svg alt=preview><span data-localize=chats.preview>preview</span></a><a id=AppearanceSubmit href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/save.svg alt=save><span data-localize=chats.save>save</span></a>
               <p class=inforight data-localize=chats.livechanges>Changes may take up to 30 mins to go live</p>
            </div>
         </form>
      </div>
      <div id=tabs class='d-none HideDiv'>
         <form class=needs-validation novalidate>
            <div id=tabserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <div class='row form-group'>
               <div class=col-lg-4><label for=tabname><span data-localize=chats.tab>tab name</span>:</label><input name=GroupName class='form-control form-control-sm tabin' id=tabname maxlength=32 required></div>
               <div class='col-lg-4 tabsi'><label for=selecttab><span data-localize=chats.selecttab>select tab</span>:</label><select name=Type id=selecttab></select></div>
               <div class=col-lg-3><label for=tabedit class=hidden>edit:</label><a id=newtab class='form-control2 form-control-sm' href=# data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.tabnew&#39;>add new tab</span>'><img class='mr-2 pb-1 cursoric' id=plusicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/plusg.svg alt=tabnew></a><span data-toggle=modal data-target=#removetabmodal class=form-control2><a id=removetab class='form-control2 form-control-sm'href=# data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.tabremove&#39;>remove this tab</span>'><img class='mr-2 pb-1 cursoric' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/remove.svg alt=tabremove></a></span><span data-toggle=modal data-target=#ordertabmodal class=form-control2><a id=ordertab class='form-control2 form-control-sm'href=# data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.taborder&#39;>order tabs</span>'><img class='mr-2 pb-1 cursoric' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/order.svg alt=taborder></a></span><span data-toggle=modal data-target=#backuptabmodal class=form-control2><a id=backuptab class='form-control2 form-control-sm'href=# data-toggle=tooltip data-placement=top data-html=true title='<span data-localize=&#39;chats.tabbackup&#39;>backup all tabs</span>'><img class='mr-2 pb-1 cursoric' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/backup.svg alt=tabbackup></a></span></div>
            </div>
            <div class='modal fade' id=removetabmodal tabindex=-1 role=dialog aria-labelledby=RemoveTabModal aria-hidden=true>
               <div class='modal-dialog modal-dialog-centered' role=document>
                  <div class=modal-content>
                     <div class=modal-header>
                        <h5 class=modal-title id=RemoveTabModalTitle data-localize=chats.tabremove>remove this tab</h5>
                        <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                     </div>
         <form class=needs-validation novalidate><div class='modal-body warning'><p class=pmodal><span data-localize=chats.remtabsure>Are you sure you want to remove this tab</span>?</p></div><div class=modal-footer><a id=remtab href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/remove.svg alt=tabremovesure><span data-localize=chats.remove>remove</span></a></div></form></div></div></div>
         <div class='modal fade' id=ordertabmodal tabindex=-1 role=dialog aria-labelledby=OrderTabModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=OrderTabModalTitle data-localize=chats.taborder>order tabs</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form class=needs-validation novalidate>
                     <div class=modal-body>
                        <div class='row form-group'>
                           <div class=col-sm-12><select multiple id=tabposition class='form-control form-control-sm'></select></div>
                        </div>
                        <div class='row form-group'>
                           <div class='col-sm-8 nosel'><button type=button class='btn btn-outline-secondary' data-option=up><span data-localize=chats.up>up</span></button><button type=button class='btn btn-outline-secondary' data-option=down><span data-localize=chats.down>down</span></button></div>
                        </div>
                     </div>
                     <div class=modal-footer><a id=closetab href=# class='btn btn-secondary btn-large' data-dismiss=modal><img class='mr-2 pb-1 closeicon' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/remove.svg alt=tabmodalclose><span data-localize=chats.close>close</span></a></div>
                  </form>
               </div>
            </div>
         </div>
         <div class='modal fade' id=backuptabmodal tabindex=-1 role=dialog aria-labelledby=BackupTabModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=BackupModalTabTitle data-localize=chats.tabbackup>backup all tabs</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form class=needs-validation novalidate>
                     <div class=modal-body>
                        <div id=backuptabserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
                        <div class='row form-group tabmodaldownl'>
                           <div class='col-sm-8 modallabel'><span data-localize=chats.backupinfo>Create a backup file of all your tabs</span>: </div>
                           <div class='col-sm-4 modalbutop1'><a id=BackupTab href=# class='btn btn-success btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=backup><span data-localize=chats.download>download</span></a></div>
                        </div>
                        <hr class=tabmodaldownl>
                        <div class='row form-group'>
                           <div class=col-sm-12><span data-localize=chats.restoreinfo>Restore your tabs from a backup file</span>: </div>
                        </div>
                        <div class='row form-group'>
                           <div class=col-sm-8>
                              <div class=custom-file><input type=file name=restorefile accept=.xatg class=custom-file-input id=tabbackupselect required><label class=custom-file-label for=tabbackupselect data-localize=chats.xatgfile><span data-localize=chats.select>Select</span> .xatg <span data-localize=chats.file>file</span></label></div>
                           </div>
                           <div class='col-sm-4 modalbutop2'><a id=RestoreTab href=# class='btn btn-primary btn-large d-none'><img class='mr-2 pb-1 restsvg' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=restore><span data-localize=chats.restore>restore</span></a></div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div id=summernote></div>
         <div class=customcss><a class='cssguidelines nosel' href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Special_codes target=_blank rel=noopener data-localize=chats.embed>Embed requires special codes</a></div>
         <div class='tabstopspace bottombuttons'>
            <a id=TabsPreview href=# class='btn btn-info btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/preview.svg alt=preview><span data-localize=chats.preview>preview</span></a><a id=TabsSubmit href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/save.svg alt=save><span data-localize=chats.save>save</span></a>
            <p class=inforight data-localize=chats.livechanges>Changes may take up to 30 mins to go live</p>
         </div>
         </form>
      </div>
      <div id=settings class='d-none HideDiv'>
         <form class=needs-validation novalidate>
            <div id=setsuccess class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <div class='row form-group'>
               <div class=col-lg-3><label for=gname><span data-localize=chats.groupname>group name</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5'><input name=GroupName class='form-control form-control-sm' id=gname maxlength=60 required></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 inforight'><span data-localize=chats.caseonly>You can change case only</span></div>
            </div>
            <div class='row form-group'>
               <div class=col-lg-3><label for=gdescription><span data-localize=chats.desc>group description</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5'><input name=GroupDescription class='form-control form-control-sm' id=gdescription maxlength=100 required></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 inforight'><span>20-50 <span data-localize=chats.letters>letters</span></span></div>
            </div>
            <div class='row form-group'>
               <div class=col-lg-3><label for=gtags><span data-localize=chats.tags>tags</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5'><input name=Tags class='form-control form-control-sm' id=gtags maxlength=128></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 inforight'><span><span data-localize=chats.sepcom>Separated by comma</span>.</span><span data-toggle=tooltip data-placement=top class=curs data-html=true title='<span data-localize=&#39;chats.taginfo&#39;>Tags are keywords that help describe your group so that others are able to find it. For example, a racing group may include the following tags: nascar,car. If your group is set to a language other than English, it&#39;s recommended to include your language, e.g. Francais or Espanol.</span>'><span data-localize=chats.whatstags>Tags</span>?</span></div>
            </div>
            <div class='row form-group grplang'>
               <div class=col-lg-3><label for=chatlang><span data-localize=chats.grplang>language</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5'>
                  <input type=hidden name=Vars value='en;=US'>
                  <select name=Lang id=chatlang>
                     <option value=n0>International / Any</option>
                     <option value=aa>Afar / Afaraf</option>
                     <option value=ab>Abkhazian / ?????</option>
                     <option value=ae>Avestan / avesta</option>
                     <option value=af>Afrikaans / Afrikaans</option>
                     <option value=ak>Akan</option>
                     <option value=am>Amharic / ????</option>
                     <option value=an>Aragonese / Aragonés</option>
                     <option value=ar>Arabic / ????????</option>
                     <option value=as>Assamese / ???????</option>
                     <option value=av>Avaric / ???? ????; ???????? ????</option>
                     <option value=ay>Aymara / aymar aru</option>
                     <option value=az>Azerbaijani / az?rbaycan dili</option>
                     <option value=ba>Bashkir / ??????? ????</option>
                     <option value=be>Belarusian / ??????????</option>
                     <option value=bg>Bulgarian / ????????? ????</option>
                     <option value=bh>Bihari / ???????</option>
                     <option value=bi>Bislama</option>
                     <option value=bm>Bambara / bamanankan</option>
                     <option value=bn>Bengali / ?????</option>
                     <option value=bo>Tibetan / ???????</option>
                     <option value=br>Breton / brezhoneg</option>
                     <option value=bs>Bosnian / bosanski jezik</option>
                     <option value=ca>Catalan / Català</option>
                     <option value=ce>Chechen / ??????? ????</option>
                     <option value=ch>Chamorro / Chamoru</option>
                     <option value=co>Corsican / corsu; lingua corsa</option>
                     <option value=cr>Cree / ???????</option>
                     <option value=cs>Czech / cesky; ceština</option>
                     <option value=cu>Church Slavic / </option>
                     <option value=cv>Chuvash / ????? ?????</option>
                     <option value=cy>Welsh / Cymraeg</option>
                     <option value=da>Danish / dansk</option>
                     <option value=de>German / Deutsch</option>
                     <option value=dv>Divehi / ???????</option>
                     <option value=dz>Dzongkha / ??????</option>
                     <option value=ee>Ewe / ???gb?</option>
                     <option value=el>Greek / ????????</option>
                     <option value=en selected>English</option>
                     <option value=eo>Esperanto / </option>
                     <option value=es>Spanish / español</option>
                     <option value=et>Estonian / Eesti keel</option>
                     <option value=eu>Basque / euskara</option>
                     <option value=fa>Persian / ??????</option>
                     <option value=ff>Fulah / Fulfulde</option>
                     <option value=fi>Finnish / suomen kieli</option>
                     <option value=fl>Filipino</option>
                     <option value=fj>Fijian / vosa Vakaviti</option>
                     <option value=fo>Faroese / Føroyskt</option>
                     <option value=fr>French / français</option>
                     <option value=fy>Western Frisian / Frysk</option>
                     <option value=ga>Irish / Gaeilge</option>
                     <option value=gd>Scottish Gaelic / Gàidhlig</option>
                     <option value=gl>Galician / Galego</option>
                     <option value=gn>Guaraní / Avañe'?</option>
                     <option value=gu>Gujarati / ???????</option>
                     <option value=gv>Manx / Ghaelg</option>
                     <option value=ha>Hausa / ???????</option>
                     <option value=he>Hebrew / ??????</option>
                     <option value=hi>Hindi / ??????; ?????</option>
                     <option value=ho>Hiri Motu / </option>
                     <option value=hr>Croatian / Hrvatski</option>
                     <option value=ht>Haitian / Kreyòl ayisyen</option>
                     <option value=hu>Hungarian / Magyar</option>
                     <option value=hy>Armenian / ???????</option>
                     <option value=hz>Herero / Otjiherero</option>
                     <option value=ia>Interlingua / </option>
                     <option value=id>Indonesian / Bahasa Indonesia</option>
                     <option value=ie>Interlingue / </option>
                     <option value=ig>Igbo / Igbo</option>
                     <option value=ii>Sichuan Yi / ??</option>
                     <option value=ik>Inupiaq / Iñupiaq; Iñupiatun</option>
                     <option value=io>Ido / Ido</option>
                     <option value=is>Icelandic / Íslenska</option>
                     <option value=it>Italian / Italiano</option>
                     <option value=iu>Inuktitut / ??????</option>
                     <option value=ja>Japanese / ???</option>
                     <option value=jv>Javanese / basa Jawa</option>
                     <option value=ka>Georgian / ???????</option>
                     <option value=kg>Kongo / KiKongo</option>
                     <option value=ki>Kikuyu / Gikuyu</option>
                     <option value=kj>Kwanyama / Kuanyama</option>
                     <option value=kk>Kazakh / ????? ????</option>
                     <option value=kl>Kalaallisut / kalaallit oqaasii</option>
                     <option value=km>Khmer / ?????????</option>
                     <option value=kn>Kannada / ?????</option>
                     <option value=ko>Korean / ???; ???</option>
                     <option value=kr>Kanuri / Kanuri</option>
                     <option value=ks>Kashmiri / ???????; ???????</option>
                     <option value=ku>Kurdish / Kurdî; ??????</option>
                     <option value=kv>Komi / ???? ???</option>
                     <option value=kw>Cornish / Kernewek</option>
                     <option value=ky>Kirghiz / ?????? ????</option>
                     <option value=la>Latin / latine; lingua latina</option>
                     <option value=lb>Luxembourgish / Lëtzebuergesch</option>
                     <option value=lg>Ganda / Luganda</option>
                     <option value=li>Limburgish / Limburgs</option>
                     <option value=ln>Lingala / Lingála</option>
                     <option value=lo>Lao / ???????</option>
                     <option value=lt>Lithuanian / lietuviu kalba</option>
                     <option value=lu>Luba-Katanga / </option>
                     <option value=lv>Latvian / latviešu valoda</option>
                     <option value=mg>Malagasy / Malagasy fiteny</option>
                     <option value=mh>Marshallese / Kajin M¸ajel</option>
                     <option value=mi>Maori / te reo Maori</option>
                     <option value=mk>Macedonian / ?????????? ?????</option>
                     <option value=ml>Malayalam / ??????</option>
                     <option value=mn>Mongolian / ??????</option>
                     <option value=mo>Moldavian / ????? ????????????</option>
                     <option value=mr>Marathi / ?????</option>
                     <option value=ms>Malay / bahasa Melayu; ???? ??????</option>
                     <option value=mt>Maltese / Malti</option>
                     <option value=na>Nauru / Ekakairu Naoero</option>
                     <option value=nb>Norwegian Bokmål / Norsk bokmål</option>
                     <option value=nd>North Ndebele / isiNdebele</option>
                     <option value=ne>Nepali / ??????</option>
                     <option value=ng>Ndonga / Owambo</option>
                     <option value=nl>Dutch / Nederlands</option>
                     <option value=nn>Norwegian Nynorsk / Norsk nynorsk</option>
                     <option value=no>Norwegian / Norsk</option>
                     <option value=nr>South Ndebele / Ndébélé</option>
                     <option value=nv>Navajo / Diné bizaad; Dinék'ehjí</option>
                     <option value=ny>Chichewa / chiChewa; chinyanja</option>
                     <option value=oc>Occitan / Occitan</option>
                     <option value=oj>Ojibwa / ????????</option>
                     <option value=om>Oromo / Afaan Oromoo</option>
                     <option value=or>Oriya / ?????</option>
                     <option value=os>Ossetian / ???? æ????</option>
                     <option value=pa>Panjabi / ??????; ???????</option>
                     <option value=pi>Pali / ????</option>
                     <option value=pl>Polish / polski</option>
                     <option value=ps>Pashto / ?????</option>
                     <option value=pt>Portuguese / Português</option>
                     <option value=qu>Quechua / Runa Simi; Kichwa</option>
                     <option value=rm>Raeto-Romance / rumantsch grischun</option>
                     <option value=rn>Kirundi / kiRundi</option>
                     <option value=ro>Romanian / româna</option>
                     <option value=ru>Russian / ??????? ????</option>
                     <option value=rw>Kinyarwanda / Kinyarwanda</option>
                     <option value=ry>Rusyn / ?????????? ????</option>
                     <option value=sa>Sanskrit / ?????????</option>
                     <option value=sc>Sardinian / sardu</option>
                     <option value=sd>Sindhi / ??????; ?????? ??????</option>
                     <option value=se>Northern Sami / Davvisámegiella</option>
                     <option value=sg>Sango / yângâ tî sängö</option>
                     <option value=sh>Serbo-Croatian / ??????????????</option>
                     <option value=si>Sinhalese / ?????</option>
                     <option value=sk>Slovak / slovencina</option>
                     <option value=sl>Slovenian / slovenšcina</option>
                     <option value=sm>Samoan / gagana fa'a Samoa</option>
                     <option value=sn>Shona / chiShona</option>
                     <option value=so>Somali / Soomaaliga; af Soomaali</option>
                     <option value=sq>Albanian / Shqip</option>
                     <option value=sr>Serbian / ?????? ?????</option>
                     <option value=ss>Swati / SiSwati</option>
                     <option value=st>Sotho / seSotho</option>
                     <option value=su>Sundanese / Basa Sunda</option>
                     <option value=sv>Swedish / Svenska</option>
                     <option value=sw>Swahili / Kiswahili</option>
                     <option value=ta>Tamil / ?????</option>
                     <option value=te>Telugu / ??????</option>
                     <option value=tg>Tajik / ??????; togiki; ????????</option>
                     <option value=th>Thai / ???</option>
                     <option value=ti>Tigrinya / ????</option>
                     <option value=tk>Turkmen / Türkmen; ???????</option>
                     <option value=tl>Tagalog / Tagalog</option>
                     <option value=tn>Tswana / seTswana</option>
                     <option value=to>Tonga / faka Tonga</option>
                     <option value=tr>Turkish / Türkçe</option>
                     <option value=ts>Tsonga / xiTsonga</option>
                     <option value=tt>Tatar / ???????; tatarça; ?????????</option>
                     <option value=tw>Twi / Twi</option>
                     <option value=ty>Tahitian / Reo Ma`ohi</option>
                     <option value=ug>Uighur / Uy?urq?; ???????? ?</option>
                     <option value=uk>Ukrainian / ??????????</option>
                     <option value=ur>Urdu / ?????</option>
                     <option value=uz>Uzbek / O'zbek; ?????; ???????</option>
                     <option value=ve>Venda / tshiVen?a</option>
                     <option value=vi>Vietnamese / Ti?ng Vi?t</option>
                     <option value=vo>Volapük / Volapük</option>
                     <option value=wa>Walloon / Walon</option>
                     <option value=wo>Wolof / Wollof</option>
                     <option value=xh>Xhosa / isiXhosa</option>
                     <option value=yi>Yiddish / ???????</option>
                     <option value=yo>Yoruba / Yorùbá</option>
                     <option value=za>Zhuang / Sa? cue??; Saw cuengh</option>
                     <option value=zh>Chinese / ??, ??, ??</option>
                     <option value=zu>Zulu / isiZulu</option>
                  </select>
               </div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 inforight'><span data-localize=chats.settgplang>Language for promotion and lists</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Owners_Guide#General target=_blank rel=noopener class=nodeco>wiki</a>) </div>
            </div>
            <div class='row form-group'>
               <div class=col-lg-3><label for=radiostation><span data-localize=chats.radio>radio station</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5'><input name=Radio class='form-control form-control-sm' id=radiostation maxlength=100 placeholder=https://></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 inforight'><span data-localize=chats.reqhttps>Requires a https url to work with Chrome</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Radio target=_blank rel=noopener class=nodeco>wiki</a>) </div>
            </div>
            <div class='row form-group bdygrp'>
               <div class=col-lg-3><label for=buddygroup><span data-localize=chats.buddygrp>buddy group</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5'><input name=Buddy class='form-control form-control-sm' id=buddygroup maxlength=100></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 inforight'><span data-localize=chats.buddyinfo>Add another group on your chat tab</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Owners_Guide#General target=_blank rel=noopener class=nodeco>wiki</a>) </div>
            </div>
            <hr>
            <h6 class=headbottom data-localize=chats.addopt>additional options</h6>
            <div>
               <div class='row form-group addopt d-none'>
                  <div class='col-lg-3 addoptmobname'><label for=html5only>html5:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=UseHtml5 type=checkbox id=html5only><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.html5desc>Default to HTML5 chat</span><a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Html5 target=_blank rel=noopener class=nodeco><img width=31 class='ml-1 newIcon' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/new.svg alt=preview></a></div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=incognito><span data-localize=chats.incognito>incognito</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=NoList type=checkbox id=incognito><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.incognitoinfo>Don't include this chat box on any lists or charts</span></div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=memberonly><span data-localize=chats.monly>member only</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=members type=checkbox id=memberonly><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.monlyinfo>Make this chat for members only</span></div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=regmemonly><span data-localize=chats.rmonly>reg and member only</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=registered type=checkbox id=regmemonly><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.rmonlyinfo>Make this chat for registered users and members only</span></div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=submemonly><span data-localize=chats.smonly>sub and member only</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=subscribers type=checkbox id=submemonly><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.smonlyinfo>Make this chat for subscribers and members only</span></div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=nostoring><span data-localize=chats.nostoring>no storing</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=NoStore type=checkbox id=nostoring><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.nostoringinfo>Do not store chat messages on any lists or on the chat</span></div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=strictban><span data-localize=chats.strict>stricter banning</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=FussyBan type=checkbox id=strictban><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.strictinfo>Try to stop users unbanning themselves (note: this may gag innocent users)</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Owners_Guide#Additional_options target=_blank rel=noopener class=nodeco>wiki</a>) </div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=nosmiley><span data-localize=chats.nosmiley>empty smiley line</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=NoSmilieLine type=checkbox id=nosmiley><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.nosmileyinfo>Don't display the line of smilies</span></div>
               </div>
               <div class='row form-group addopt'>
                  <div class='col-lg-3 addoptmobname'><label for=nosound><span data-localize=chats.nosound>disable sounds</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=DefNoSound type=checkbox id=nosound><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.nosoundinfo>Turn off default chat box sounds</span></div>
               </div>
               <div class='row form-group lastopt'>
                  <div class='col-lg-3 addoptmobname'><label for=transbg><span data-localize=chats.transbg>transparent background</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=Transparent type=checkbox id=transbg><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.transbginfo>Make chat background image transparent (may require copy/paste embed code)</span></div>
               </div>
               <div class='row form-group d-none'>
                  <div class='col-lg-3 addoptmobname'><label for=livemode><span data-localize=chats.live>live mode</span>:</label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-1'><label class=switch2><input name=Live type=checkbox id=livemode><span class='slider2 round'></span></label></div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 inforight addoptmob'><span data-localize=chats.liveinfo>Make guests watch the chat as spectators</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Live target=_blank rel=noopener class=nodeco>wiki</a>) </div>
               </div>
            </div>
            <div class='bottombuttons maintopspace'>
               <a id=SettingsPreview href=# class='btn btn-info btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/preview.svg alt=preview><span data-localize=chats.preview>preview</span></a><a id=SettingsSubmit href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/save.svg alt=save><span data-localize=chats.save>save</span></a>
               <p class=inforight data-localize=chats.livechanges>Changes may take up to 30 mins to go live</p>
            </div>
         </form>
      </div>
      <div id=grouppowers class='d-none HideDiv remspacesearch'>
         <form class='needs-validation powmartop' novalidate>
            <div id=gpsuccess class='alert alert-success HideDiv ClrErr' role=alert></div>
            <div class=row>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2'><span class=proglab data-localize=chats.assigpow>Assigned powers</span></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10'>
                  <div class='progress progmar'>
                     <div class=progress-bar id=progress role=progressbar aria-valuenow=0 aria-valuemin=0 aria-valuemax=100></div>
                  </div>
               </div>
            </div>
            <div class='row form-group'>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5'>
                  <label for=gpSearch id=sortLabel class=sortLabel></label>
                  <div class=holder data-localize=chats.search>search</div>
                  <input id=gpSearch type=search class='gpsearch form-control form-control-sm' aria-label=search>
               </div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 slitop'>
                  <select id=powfilter>
                     <option value=asg_una data-localize=chats.asgunasg>assigned + unassigned</option>
                     <option value=asg data-localize=chats.assigned>assigned</option>
                     <option value=una data-localize=chats.unassigned>unassigned</option>
                  </select>
               </div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 slitop nosel'><a id=gpexport href=# class='btn btn-outline-info btn-large gpexpimp'><img class='mr-2 pb-1 expsvg' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=gpexport><span data-localize=chats.export>export</span></a><a id=gpimport data-toggle=modal data-target=#importmodal href=# class='btn btn-outline-success btn-large gpexpimp'><img class='mr-2 pb-1 impsvg' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=gpimport><span data-localize=chats.import>import</span></a></div>
            </div>
            <div class='modal fade' id=exportmodal tabindex=-1 role=dialog aria-labelledby=ExportModal aria-hidden=true>
               <div class='modal-dialog modal-dialog-centered' role=document>
                  <div class=modal-content>
                     <div class=modal-header>
                        <h5 class=modal-title id=ExportModalTitle data-localize=chats.exportpow>export powers</h5>
                        <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                     </div>
         <form class=needs-validation novalidate><div class=modal-body><div id=gpexperr class='alert alert-danger HideDiv ClrErr' role=alert></div><div id=gp_list></div></div><div class=modal-footer><a id=exportgpok href=# class='btn btn-info btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=import><span data-localize=chats.export>export</span></a></div></form></div></div></div>
         <div class='modal fade' id=importmodal tabindex=-1 role=dialog aria-labelledby=ImportModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=ImportModalTitle data-localize=chats.importpow>import powers</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form class=needs-validation novalidate>
                     <div class=modal-body>
                        <div id=gpimperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
                        <div class=custom-file id=xatpselect><input type=file name=importgpfile accept=.xatp class=custom-file-input id=importgpfile required><label class=custom-file-label for=importgpfile><span data-localize=chats.select>Select</span> .xatp <span data-localize=chats.file>file</span></label></div>
                        <div id=gp_list_import></div>
                     </div>
                     <div class=modal-footer><a id=importgpok href=# class='btn btn-success btn-large d-none'><img class='mr-2 pb-1 impsvgmod' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=import><span data-localize=chats.import>import</span></a></div>
                  </form>
               </div>
            </div>
         </div>
         <div id=nopowers class=d-none>
            <div class='nosearch proglab' data-localize=chats.noresfound>No results found</div>
         </div>
         <div class='row form-group grppowall' id=checkalldiv>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9'>
               <div class='custom-control custom-checkbox checkAll'><input type=checkbox id=checkall class=custom-control-input><label class='custom-control-label grppow' for=checkall data-localize=chats.powall> activate/deactivate all your group powers at once </label></div>
            </div>
         </div>
         <div id=groups_powers></div>
         <div class=bottombuttons><a id=PowersSubmit href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/save.svg alt=save><span data-localize=chats.save>save</span></a></div>
         </form>
         <div class='modal fade' id=modalGp tabindex=-1 role=dialog aria-labelledby=modalGp aria-hidden=true data-keyboard=false data-backdrop=static>
            <div class='modal-dialog modal-dialog-scrollable modal-dialog-centered widthmodal' role=document>
               <div class=modal-content>
                  <div class='modal-header edcol'>
                     <h5 class=modal-title id=gp_title></h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <div class='modal-body scrollmodal' id=gp_content></div>
                  <div class=modal-footer><button type=button id=gp_default class='btn btn-secondary' data-localize=chats.defaults>Defaults</button><button type=button id=gp_ok class='btn btn-success' data-localize=chats.ok>OK</button></div>
               </div>
            </div>
         </div>
      </div>
      <div id=mainowners class='d-none HideDiv'>
         <form id=mainyes class=needs-validation novalidate>
            <div id=mainerr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <h5 class=headingspace data-localize=chats.newmain>add new main owner</h5>
            <div class='row form-group'>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'><label for=mainuserid><span data-localize=chats.userid>username/id</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'><input name=mainid class='form-control form-control-sm' id=mainuserid maxlength=60 required></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 inforight'><span data-localize=chats.addmain>Add a user as main owner</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Owners_Guide#Main_owners target=_blank rel=noopener class=nodeco>wiki</a>) </div>
            </div>
            <div class='row form-group'>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'><label for=multiple><span data-localize=chats.permissions>permissions</span>:</label></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
                  <select name=permissions id=multiple multiple>
                     <option value=1 data-localize=chats.appearance>appearance</option>
                     <option value=2 data-localize=chats.tabs>tabs</option>
                     <option value=4 data-localize=chats.settings>settings</option>
                     <option value=8 data-localize=chats.grouppowers>group powers</option>
                  </select>
               </div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 inforight'><span data-localize=chats.mainpermpow>Adding selective edit group permissions requires</span> Main <span data-localize=chats.pow>power</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Main target=_blank rel=noopener class=nodeco>wiki</a>) </div>
            </div>
            <div class=maintopspace><button id=add type=submit class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/save.svg alt=add><span data-localize=chats.add>add</span></button></div>
         </form>
         <hr class=hrspace>
         <h5 class=headingspace data-localize=chats.yourmains>your main owners</h5>
         <div class='table-responsive resultsbottom mainownerstable d-none'>
            <table class='table table-bordered table-striped resultsevents'>
               <thead>
                  <tr>
                     <th scope=col>#</th>
                     <th scope=col><span data-localize=chats.username>username</span></th>
                     <th scope=col><span data-localize=chats.permissions>permissions</span></th>
                     <th scope=col><span data-localize=chats.remove>remove</span></th>
                  </tr>
               </thead>
               <tbody id=mainOwnersList></tbody>
            </table>
         </div>
         <div id=errnomain class='HideDiv ClrErr'></div>
         <div class='modal fade' id=remmainmodal tabindex=-1 role=dialog aria-labelledby=RemMainModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=RemMainModalTitle data-localize=chats.demotemain>remove main owner</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form class=needs-validation novalidate>
                     <div class='modal-body warning'>
                        <p class=pmodal><span data-localize=chats.unmainsure>Are you sure you want to remove this main owner</span>?</p>
                     </div>
                     <div class=modal-footer><a id=mainbye href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/remove.svg alt=remove><span data-localize=chats.remove>remove</span></a></div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <div id=miscellaneous class='d-none HideDiv'>
         <form class=needs-validation novalidate>
            <div id=miscsuccess class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <div class='row form-group mobile'>
               <div class=col-lg-3><label for=backupusers data-localize=chats.manage>manage</label>: </div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'><a id=backupusers href=# class='btn btn-outline-success btn-sm'><span data-localize=chats.backup>backup</span></a></div>
               <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 inforight'><span data-localize=chats.reqmanage>To backup/restore users you need</span><a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Manage target=_blank rel=noopener class=nodeco>Manage</a><span data-localize=chats.power>power</span></div>
            </div>
            <div class='modal fade' id=backupusersmodal tabindex=-1 role=dialog aria-labelledby=BackupUsersModal aria-hidden=true>
               <div class='modal-dialog modal-dialog-centered' role=document>
                  <div class=modal-content>
                     <div class=modal-header>
                        <h5 class=modal-title id=BackupUsersModalTitle data-localize=chats.userbackup>backup users</h5>
                        <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                     </div>
         <form class=needs-validation novalidate><div class=modal-body><div id=backupuserserr class='alert alert-danger HideDiv ClrErr' role=alert></div><div class='row form-group'><div class='col-sm-8 modallabel'><span data-localize=chats.chatbackup>Create a backup file of your chat</span>: </div><div class='col-sm-4 modalbutop1'><a id=BackupUsers href=# class='btn btn-success btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=backup><span data-localize=chats.download>download</span></a></div></div><hr><div class='row form-group'><div class=col-sm-12><span data-localize=chats.chatrestore>Restore your chat from a backup file</span>: </div></div><div class='row form-group'><div class=col-sm-8><div class=custom-file><input type=file name=restorefile accept=.xatu class=custom-file-input id=chatbackupselect required><label class=custom-file-label for=chatbackupselect><span data-localize=chats.select>Select</span> .xatu <span data-localize=chats.file>file</span></label></div></div><div class='col-sm-4 modalbutop2'><a id=RestoreUsers href=# class='btn btn-primary btn-large d-none'><img class='mr-2 pb-1 restsvg' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/download.svg alt=restore><span data-localize=chats.restore>restore</span></a></div></div></div></form></div></div></div>
         <div class='row form-group'>
            <div class=col-lg-3><label for=changepw><span data-localize=chats.changepw>change password</span>:</label></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'><a id=changepw href=# class='btn btn-outline-info btn-sm'><span data-localize=chats.change>change</span></a></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 inforight'><span data-localize=chats.changehere>Change your group password here</span></div>
         </div>
         <div class='modal fade' id=pwmodal tabindex=-1 role=dialog aria-labelledby=PasswordModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=PasswordModalTitle data-localize=chats.changepw>change password</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form id=changeyes class=needs-validation novalidate>
                     <div class=modal-body>
                        <div id=changepasserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
                        <div class='row form-group'>
                           <div class=col-sm-4><label for=oldpassword><span data-localize=chats.oldpass>old password</span>:</label></div>
                           <div class=col-sm-7>
                              <div class=input-group>
                                 <input type=password name=password0 class='form-control form-control-sm passInput' id=oldpassword maxlength=64 autocomplete=oldipass required>
                                 <div class=input-group-append><button class='btn PassReveal searchButton eyeButton viewpassbut' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass></button></div>
                              </div>
                           </div>
                        </div>
                        <div class='row form-group'>
                           <div class=col-sm-4><label for=newpassword><span data-localize=chats.newpass>new password</span>:</label></div>
                           <div class=col-sm-7>
                              <div class=input-group>
                                 <input type=password name=password1 class='form-control form-control-sm passInput' id=newpassword maxlength=64 autocomplete=nwpass required>
                                 <div class=input-group-append><button class='btn PassReveal searchButton eyeButton viewpassbut' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass></button></div>
                              </div>
                           </div>
                        </div>
                        <div class='row form-group'>
                           <div class=col-sm-4><label for=confirmpassword><span data-localize=chats.confirmpass>confirm password</span>:</label></div>
                           <div class=col-sm-7>
                              <div class=input-group>
                                 <input type=password name=password2 class='form-control form-control-sm passInput' id=confirmpassword maxlength=64 autocomplete=cnfpass required>
                                 <div class=input-group-append><button class='btn PassReveal searchButton eyeButton viewpassbut' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass></button></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class=modal-footer><button id=NewPass type=submit class='btn btn-info btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/save.svg alt=change><span data-localize=chats.change>change</span></button></div>
                  </form>
               </div>
            </div>
         </div>
         <div class='row form-group'>
            <div class=col-lg-3><label for=deletegroup><span data-localize=chats.getmain>get main</span>:</label></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'><a id=GetMain href=# class='btn btn-outline-warning btn-sm' data-toggle=modal data-target=#getmain><span data-localize=chats.main>main</span></a></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 inforight'><span data-localize=chats.getmaindes>Get your main owner rank back</span></div>
         </div>
         <div class='modal fade' id=getmain tabindex=-1 role=dialog aria-labelledby=getmainModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=getmainModalTitle data-localize=chats.getmain>get main</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <div class=modal-body><span class=proglab><span data-localize=chats.lostmain>Have you lost your main owner rank on the chat</span>? <span data-localize=chats.getback>Get it back here</span>.<span></span></span></div>
                  <div class=modal-footer><button type=button class='btn btn-warning' id=GetMainOk><span data-localize=chats.getmain>get main</span></button></div>
               </div>
            </div>
         </div>
         <hr>
         <div class='row form-group'>
            <div class=col-lg-3><label for=resetchat><span data-localize=chats.resetchat>reset chat</span>:</label></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'><a id=resetchat href=# class='btn btn-outline-secondary btn-sm'><span data-localize=chats.reset>reset</span></a></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 inforight'><span data-localize=chats.resetall>All chat ranks will be reset</span></div>
         </div>
         <div class='modal fade' id=resetmodal tabindex=-1 role=dialog aria-labelledby=ResetModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=ResetModalTitle data-localize=chats.resetchat>reset chat</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form class=needs-validation novalidate>
                     <div class=modal-body>
                        <div id=resetchaterr class='alert alert-danger HideDiv ClrErr' role=alert></div>
                        <p class=warning><span data-localize=chats.note>NOTE</span>: <span data-localize=chats.notereset>This will reset all your chat ranks</span>!</p>
                        <p class=warning><span data-localize=chats.noundone>This cannot be undone unless you have a backup file</span>.</p>
                     </div>
                     <div class=modal-footer><a id=ResetChat href=# class='btn btn-secondary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/safety.svg alt=reset><span data-localize=chats.reset>reset</span></a></div>
                  </form>
               </div>
            </div>
         </div>
         <div class='row form-group'>
            <div class=col-lg-3><label for=deletegroup><span data-localize=chats.deletegroup>delete group</span>:</label></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'><a id=deletegroup href=# class='btn btn-outline-danger btn-sm' data-toggle=modal data-target=#deletemodal><span data-localize=chats.delete>delete</span></a></div>
            <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 inforight'><span><span data-localize=chats.deletegrpinf>To cease managing this group and delete your info</span> (<a class=nodeco target=_blank rel=noopener href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Owners_Guide#Miscellaneous>wiki</a>)</span></div>
         </div>
         <div class='modal fade' id=deletemodal tabindex=-1 role=dialog aria-labelledby=DeleteModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=DeleteModalTitle data-localize=chats.deletegroup>delete group</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form id=delyes class=needs-validation autocomplete=off novalidate>
                     <div class=modal-body>
                        <div id=deletegrouperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
                        <div class='row form-group'>
                           <div class=col-sm-4><label for=grpdelmail data-localize=chats.email>email</label>: </div>
                           <div class=col-sm-7><input name=grpdelmail class='form-control form-control-sm noread' id=grpemail maxlength=64 autocomplete=b933 required></div>
                        </div>
                        <div class='row form-group'>
                           <div class=col-sm-4><label for=grpdelpass><span data-localize=chats.pass>password</span>:</label></div>
                           <div class=col-sm-7>
                              <div class=input-group>
                                 <input type=password name=grpdelpass class='form-control form-control-sm noread' id=grppassword maxlength=64 autocomplete=new-password3 required>
                                 <div class=input-group-append><button class='btn PassReveal searchButton eyeButton viewpassbut' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass></button></div>
                              </div>
                           </div>
                        </div>
                        <div class='row form-group delete nosel'>
                           <div class=col-sm-12>
                              <p><span data-localize=chats.proceeddel>Proceeding will delete your group information and you will lose ownership</span>! <span class=deletelink><a class=nodeco target=_blank rel=noopener href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Owners_Guide#deletechat data-localize=chats.wikidel>More information on wiki</a>.</span></p>
                              <div class='custom-control custom-checkbox'><input type=checkbox id=confirmdelete class=custom-control-input required><label class='custom-control-label confpointer' for=confirmdelete data-localize=chats.confirmdel> I confirm that I want to proceed </label></div>
                           </div>
                        </div>
                        <span class=inforight><span data-localize=chats.emaildel>Clicking delete will send you an email to confirm your deletion one last time</span>.</span>
                     </div>
                     <div class=modal-footer><button id=DeleteGroup type=submit class='btn btn-danger btn-large dltbutton'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/safety.svg alt=delete><span data-localize=chats.delete>delete</span></button></div>
                  </form>
               </div>
            </div>
         </div>
         </form>
      </div>
      <div id=events class='d-none HideDiv'>
         <h1><span data-localize=chats.eventsfor>chat events for</span>: <span id=GroupName></span><span class='text-danger d-none'id=eventsNoGrp data-localize=chats.eventsnogrp>Group does not exist</span></h1>
         <div class='row eventsGrpBg mt-3'>
            <div class=col-md-3><input class='form-control form-control-sm noread' id=EventsGrp autocomplete=off></div>
            <div class=col-md-9>
               <h5 class=groupnamecol><span data-localize=chats.eventsanother>or search for another group</span></h5>
            </div>
         </div>
         <form id=eventsyes class=needs-validation novalidate>
            <p class=mt-4><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/events.svg alt=eventssearch><span data-localize=chats.eventssearch>Search chat events</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Events target=_blank rel=noopener class=nodeco>wiki</a>)</p>
            <div class='row form-group'>
               <div class=col-lg-3><label for=eventsuserid><span data-localize=chats.userid>username/id</span>:</label><input name=search class='form-control form-control-sm evin' id=eventsuserid maxlength=100 autocomplete=off required></div>
               <div class=col-lg-3><label for=eventstype><span data-localize=chats.type>type</span>:</label><select name=Type id=eventstype></select></div>
               <div class=col-lg-3><label for=eventspower><span data-localize=chats.power>power</span>:</label><select name=Power id=eventspower></select></div>
            </div>
            <div><button id=Search type=submit class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/search.svg alt=search><span data-localize=chats.search>search</span></button></div>
         </form>
         <hr>
         <form id=statsyes class=needs-validation novalidate>
            <p class=eventsspace><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eventstats.svg alt=eventstats><span data-localize=chats.eventstats>Chat event statistics</span> (<a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Eventstats target=_blank rel=noopener class=nodeco>wiki</a>)</p>
            <div class='row form-group'>
               <div class=col-lg-3><label for=statsuserid data-localize=chats.userid>username/id</label>:
                  <input type=userid name=search class='form-control form-control-sm evin' id=statsuserid autocomplete=off maxlength=100 required>
               </div>
               <div class=col-lg-3><label for=statstype data-localize=chats.type>type</label>:
                  <select name=Type id=statstype></select>
               </div>
               <div class=col-lg-3><label for=statsdays><span data-localize=chats.days>days</span>:</label><input type=userid name=days class='form-control form-control-sm evin' id=staysdays value=7 maxlength=2 required></div>
            </div>
            <div><button id=Stats type=submit class='btn btn-primary btn-large eventsearch'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/search.svg alt=search><span data-localize=chats.search>search</span></button></div>
         </form>
         <div id=eventserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         <div id=eventsresult class=d-none>
            <h2 data-localize=chats.evresults class=headbottom>Results</h2>
            <div id=evresultcon>
               <div class='table-responsive eventsfo'>
                  <table class='table-bordered table-sm'>
                     <thead>
                        <tr>
                           <th scope=col>#</th>
                           <th scope=col><span data-localize=chats.evtime>Time</span> (GMT)</th>
                           <th scope=col>ID1</th>
                           <th scope=col><span data-localize=chats.evname>Name</span>1</th>
                           <th scope=col width=160><span data-localize=chats.evtype>Type</span></th>
                           <th scope=col>ID2</th>
                           <th scope=col><span data-localize=chats.evname>Name</span>2</th>
                           <th scope=col><span data-localize=chats.evdura>Duration</span></th>
                           <th scope=col><span data-localize=chats.evtext>Text</span></th>
                        </tr>
                     </thead>
                     <tbody id=eventsList></tbody>
                  </table>
               </div>
               <div class='bottombuttons oldres' id=eventsList><a id=olderres href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/search.svg alt='older results'><span data-localize=chats.oldres>older results</span></a></div>
            </div>
         </div>
         <div id=errnoresult class=d-none>
            <div class='nosearch maintopspace' data-localize=chats.noresfound>No results found</div>
         </div>
         <script src=https://www.gstatic.com/charts/loader.js></script>
         <div id=eventstats class='invisible statsvi'>
            <div class='row statsbo'>
               <h2 data-localize=chats.evresults class=headbottom>Results</h2>
               <div class='row espierow1'>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-10'>
                     <div id=datatable class='esdatatab esdatarespo'></div>
                  </div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2'>
                     <div id=piechart_3d_k class='espie espirespo'></div>
                  </div>
               </div>
               <div class='row espierow2'>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                     <div id=barchart_k class=esbarchak></div>
                  </div>
                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                     <div id=barchart_who class=esbarchawho></div>
                  </div>
               </div>
            </div>
         </div>
         <div class='modal fade' id=demotemodmodal tabindex=-1 role=dialog aria-labelledby=DemoteModModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-centered' role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=DemoteModModalTitle data-localize=chats.demotemod>demote moderator</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <form class=needs-validation novalidate>
                     <div class='modal-body warning'>
                        <p class=pmodal><span data-localize=chats.unmodsure>Are you sure you want to demote this moderator</span>?</p>
                     </div>
                     <div class=modal-footer><a id=unmod href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/remove.svg alt=remove><span data-localize=chats.demote>demote</span></a></div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <div id=library class='d-none HideDiv'>
         <h1 data-localize=chats.framelib><?php echo XAT_NAME ?>frame library</h1>
         <div class='row nosel'>
            <div class=col-sm-6><a href='https://forum.<?php echo DOMAIN ?>/submissions/xatframe-submissions/?do=form' target=_blank rel=noopener><button class='btn btn-primary mb-4 mt-2'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/plus.svg alt=submit width=16><span data-localize=chats.submit>submit</span> <?php echo XAT_NAME ?>frame</button></a><a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Xatframe#Library target=_blank rel=noopener><button class='btn btn btn-success mb-4 mt-2' data-localize=web.help>help</button></a></div>
            <div class=col-sm-6>
               <div class='float-right libFil'><a href=# class='btn btn btn-outline-secondary btn-sm mb-4 mt-2' id=num>9-1</a><a href=# class='btn btn btn-outline-info btn-sm mb-4 mt-2 d-none' id=all data-localize=chats.all>all</a><a href=# class='btn btn btn-outline-info btn-sm mb-4 mt-2' id=clickable><img class='mr-1 staric' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/star.svg alt=star width=19><span data-localize=chats.clickable>clickable content</span></a></div>
            </div>
         </div>
         <div class='alert libtop' role=alert><span><img class='mr-1 crownic'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/crown.svg alt=star width=24><span class=topxf><span data-localize=chats.topfive>Top five <?php echo XAT_NAME ?>frame submitters</span>:</span></span><span id=topFive></span></div>
         <div class='alert libinfo d-none' role=alert id=onclickInfo><span data-localize=chats.clickabledesc>These <?php echo XAT_NAME ?>frames have clickable content.</span><a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Xatframe#Clickable_content target=_blank rel=noopener><span data-localize=chats.wikidel>More information on wiki</span>.</a></div>
         <div class=row id=out></div>
      </div>
      <div class='modal fade' id=linkModal tabindex=-1 role=dialog aria-labelledby=linkModal aria-hidden=true>
         <div class='modal-dialog modal-dialog-scrollable modal-dialog-centered widthmodal' role=document>
            <div class=modal-content>
               <div class=modal-header>
                  <h5 class=modal-title id=linkModal>edit link</h5>
                  <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
               </div>
               <div class='modal-body scrollmodal'>
                  <div class='container mb-4 pt-2 pb-2'>
                     <div id=errnolink class=d-none>
                        <div class='alert alert-danger alert-dismissible' role=alert><button class='close closesuc' type=button data-hide=true>×</button><span data-localize=chats.nolink>You have no link set yet. Click the "add" button to add a link</span></div>
                     </div>
                     <div class=row>
                        <div class=col>
                           <div id=link_list></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class=modal-footer><button id=linkSave type=button class='btn btn-success' data-dismiss=modal><span data-localize=chats.save>save</span></button><button id=linkAdd type=button class='btn btn-primary'><span data-localize=chats.addalink>add a link</span></button></div>
            </div>
         </div>
      </div>
	   <div class='modal fade'id=banRulesModal tabindex=-1 role=dialog aria-labelledby=banRulesModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-scrollable modal-dialog-centered widthmodal'role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=banRulesModal data-localize=chats.editbr>edit ban rules</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close> <span aria-hidden=true>×</span> </button> 
                  </div>
                  <div class='modal-body scrollmodal'>
                     <div class='container pt-2'>
                        <div id=errnobr class=d-none>
                           <div class='alert alert-info alert-dismissible'role=alert> <span data-localize=chats.nobanrules>You have no ban rules set yet. Click the "add" button to add a ban rule</span> </div>
                        </div>
                        <div class=row>
                           <div class=col>
                              <div id=br_list></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class=modal-footer> <button id=brSave type=button class='btn btn-success'data-dismiss=modal><span data-localize=chats.save>save</span></button> <button id=brAdd type=button class='btn btn-primary'><span data-localize=chats.addabanrule>add a rule</span></button> </div>
               </div>
            </div>
         </div>
		 <div class='modal fade'id=whitelistModal tabindex=-1 role=dialog aria-labelledby=whitelistModal aria-hidden=true>
            <div class='modal-dialog modal-dialog-scrollable modal-dialog-centered widthmodal'role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=whitelistModal data-localize=chats.editwl>edit whitelist</h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close> <span aria-hidden=true>×</span> </button> 
                  </div>
                  <div class='modal-body scrollmodal'>
                     <div class='container pt-2'>
                        <div id=errnowl class=d-none>
                           <div class='alert alert-info alert-dismissible'role=alert> <span data-localize=chats.nowhitelist>You have no whitelist set yet. Click the "add" button to whitelist links.</span> </div>
                        </div>
                        <div class=row>
                           <div class=col>
                              <div id=wl_list></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class=modal-footer> <button id=wlSave type=button class='btn btn-success'data-dismiss=modal><span data-localize=chats.save>save</span></button> <button id=wlAdd type=button class='btn btn-primary'><span data-localize=chats.addadomain>add a domain</span></button> </div>
               </div>
            </div>
         </div>
      <div id=cookiePopup class='alert alert-dismissible text-center cookiePopup' role=alert>
         <div><span data-localize=web.privacyterms><?php echo XAT_NAME ?> uses <a href=https://<?php echo DOMAIN ?>/privacy target=_blank rel=noopener>cookies</a> and your use is subject to <a href="https://<?php echo DOMAIN ?>/terms" target=_blank rel=noopener>terms</a></span><button id=cookieAgree type=button class='btn btn-primary btn-sm cookieButton' aria-label=accept><span data-localize=web.agree>agree</span></button><button id=cookieSettings type=button class='btn btn-outline-secondary btn-sm cookieButton' aria-label=settings><span data-localize=web.settings>settings</span></button></div>
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
                     <h5 class=modal-title id=inappModalLabel><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/terms.svg alt=terms><span data-localize=web.preferences>privacy preferences</span></h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
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
                           <div class=col><span data-localize=web.grouptabs>group tabs (third party)</span><br><small><span data-localize=web.allowstabs>This option allows third party content to open automatically on all <?php echo XAT_NAME ?> groups.</span><a href=/privacy><span data-localize=web.learnmorethird>Learn more about third party content.</span></a></small></div>
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
      <script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.js></script>
      <link href=/content/js/summernote2/summernote-bs4.css rel=stylesheet>
      <script src=/content/js/summernote2/summernote-bs4.js></script><script src=/content/js/slimselect/slimselect.min.js></script>
      <link href=/content/js/slimselect/slimselect.min.css rel=stylesheet>
      <link href=/content/js/pickr/nano.min.css rel=stylesheet>
      <script src=/content/js/pickr/pickr.min.js></script><script src=/content/web/<?php echo DIRVERSION;?>/lib/jquery.localize.js></script><script src=/content/web/<?php echo DIRVERSION;?>/common.js?z></script><script src=/content/web/<?php echo DIRVERSION;?>/chats.js?ff></script>
