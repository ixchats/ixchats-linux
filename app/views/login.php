<!doctype html>
<html lang=en>
   <head>
      <meta http-equiv=Content-Security-Policy content='
         default-src &#39;self&#39;;
         style-src &#39;self&#39; https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css; 
         connect-src &#39;self&#39; https://<?php echo DOMAIN ?>/ https://www.xatech.com/ https://xat.wiki/;
         img-src &#39;self&#39; https://*.<?php echo DOMAIN ?>/ https://<?php echo DOMAIN ?>/ https://images.weserv.nl/ https://i.imgur.com/ https://ssl.google-analytics.com/;
         script-src &#39;self&#39; https://<?php echo DOMAIN ?>/
         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js
         https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js;
         frame-src &#39;self&#39; https://www.google.com/recaptcha/;
         base-uri &#39;self&#39; ;
         object-src https://www.xatech.com/ https://<?php echo DOMAIN ?>/ https://www.<?php echo DOMAIN ?>/;
         form-action https://<?php echo DOMAIN ?>/'>
      <meta charset=utf-8>
      <meta name=viewport content='width=device-width,initial-scale=1,shrink-to-fit=no'>
      <meta name=description content=<?php echo XAT_NAME ?>>
      <title><?php echo XAT_NAME ?> login</title>
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
               <div id=groupName><?php echo XAT_NAME ?> <span data-localize=login.login >login</span></div>
               <div id=groupDescription></div>
            </div>
         </div>
         <span id=statnav></span>
      </nav>
      <div class=container>
      <div class='text-center mb-3 xbanner'><iframe title='<?php echo XAT_NAME ?> banner' width=728 height=90 id=promoframe src=/content/web/<?php echo DIRVERSION;?>/apps/ad/ad.html scrolling=no sandbox='allow-scripts allow-same-origin allow-top-navigation'></iframe></div>
      <h1 data-localize=web.loginpanel id=panel><?php echo XAT_NAME ?> account panel</h1>
      <nav class='navbar navbar-expand-lg navbar-light bg-light newnav'>
         <a class='navbar-brand newbartitle' href=# data-localize=web.menu>menu</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavLogin aria-controls=navbarNavLogin aria-expanded=false aria-label='Toggle navigation'><span class='navbar-toggler-icon darktoggle'></span></button>
         <div class='collapse navbar-collapse' id=navbarNavLogin>
            <div class=navbar-nav>
               <li class=nav-item><a id=tablogin class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/settings.svg alt=login><span id=loginlab data-localize=login.login>login</span><span id=settingslab class=d-none data-localize=mob1.settings>settings</span></a></li>
               <li class=nav-item><a id=tablost class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/order.svg alt='lost password/username' width=18><span data-localize=login.lost>lost password/username</span></a></li>
               <li class=nav-item><a id=tabchangename class='NotLogin HideDiv NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/order.svg alt='change name' width=18><span data-localize=login.chgnamebut>change username</span></a></li>
               <li class=nav-item><a id=tabchangepass class='NotLogin HideDiv NavTabs nav-link' href=#><img class='mr-2 cngpass' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/order.svg alt='change password' width=18><span data-localize=login.changepass>change password</span></a></li>
               <li class=nav-item><a id=tabdelete class='NotLogin HideDiv NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/close.svg alt=delete><span data-localize=login.delete>delete</span></a></li>
               <li class=nav-item><a id=tabgroup class='NotLogin HideDiv NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/groups.svg alt=group><span data-localize=login.group>group</span></a></li>
               <li class=nav-item><a id=tabquiz class='NotLogin HideDiv NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/help.svg alt=quiz><span data-localize=login.quiz>quiz</span></a></li>
               <li class=nav-item><a id=tabregister class='NotLogin HideDiv NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=register><span data-localize=login.regid>register for a <?php echo XAT_NAME ?> id</span></a></li>
               <li class=nav-item><a id=tablogout class='NotLogin HideDiv NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=logout><span data-localize=web.logout>logout</span></a></li>
            </div>
         </div>
      </nav>
      <div id=CommonDiv>
         <div class=mb-3>
            <label for=username data-localize=buy.xatname><?php echo XAT_NAME ?> username:</label><input class=form-control id=username required>
            <div id=usernameerr class=invalid-feedback></div>
         </div>
         <div class=mb-3>
            <label for=password><span data-localize=buy.password>password</span>:</label>
            <div class=input-group>
               <input type=password class='form-control passInput is-invalid' id=password required>
               <div class=input-group-append><button id=passviewbut class='btn searchButton eyeButton' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass></button></div>
            </div>
            <div id=passworderr class=invalid-feedback></div>
         </div>
         <div class='custom-control custom-checkbox d-none HideDiv'>
            <input type=checkbox class=custom-control-input id=agreeterms><label class=custom-control-label for=agreeterms data-localize=buy.iagree>I have read and agree to the rules and <a href=//<?php echo DOMAIN ?>/terms>terms</a>.</label>
            <div id=agreetermserr class=invalid-feedback></div>
         </div>
      </div>
      <div id=delete class='d-none HideDiv Dialog'>
         <h2><span data-localize=login.delete>delete</span><span id=DeleteName></span></h2>
         <div id=deleteerr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         <form class=needs-validation novalidate>
            <div class=pb-2><span data-localize=login.unreg>Click this button to become un-registered (delete username</span>: <span id=DeleteName2></span>).</div>
            <a id=butdelete href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/close.svg><span data-localize=login.delete>delete</span><span id=DeleteNameBut></span></a>
            <div class='pt-2 text-danger' data-localize=login.loseall>IMPORTANT: You will lose all <?php echo XAT_NAME ?>s, subscriber days, powers and marriages etc.</div>
         </form>
      </div>
      <div id=login class='d-none HideDiv Dialog'>
         <h2><span data-localize=login.loginid>log in with a <?php echo XAT_NAME ?> id</span></h2>
         <div id=loginerr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         <form class=needs-validation novalidate>
            <div id=loginextra class=pt-3>
               <div id=loginextra2 class='pb-1 ClrDiv'></div>
               <div class=pb-3 data-localize=login.securitywarn><font color=#FF0000>Please ensure your browser is on <?php echo DOMAIN ?>.<br><b>IMPORTANT: <?php echo XAT_NAME ?> will NEVER ask you for your email password.</b><br> Only use your email password to log in to your email. Please read the <a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Phishing>Phishing info page</a>.</font></div>
               <a id=butlogin href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=account><span data-localize=login.login>login</span></a>
            </div>
         </form>
      </div>
      <div id=logout class='d-none HideDiv Dialog'>
         <div id=Logout1>
            <h2><span data-localize=mob2.confirmlogout>Please confirm you want to log out.</span></h2>
            <div class=pt-3><a id=butlogout href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg><span data-localize=web.logout>logout</span></a></div>
         </div>
         <div id=Logout2 class='d-none HideDiv'>
            <h2><span data-localize=login.loggedout>You have logged out</span>.</h2>
            <div id=LogoutEmbederr class=ClrDiv></div>
         </div>
      </div>
      <div id=settings class='d-none HideDiv Dialog'>
         <div id=LoginFailed class='d-none HideDiv'>
            <h3 data-localize=login.logfail>login failed</h3>
         </div>
         <div id=LoginOk class='d-none HideDiv'>
            <h4><span data-localize=login.loginas>Login as</span><span id=regname></span><span id=closewin data-localize=login.closewin>successful.<br>Please close all chat windows. %s DO NOT SHARE YOUR LOGIN DETAILS OR YOU WILL LOCK YOURSELF OUT OF THE CHAT</span></h4>
         </div>
         <div id=embed></div>
         <h3 data-localize=login.seurityset>security settings</h3>
         <div id=delsuccesserr class='alert alert-success HideDiv ClrErr' role=alert></div>
         <div id=settingserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         <div id=helderr class='pb-0 pt-0 alert alert-warning HideDiv ClrErr' role=alert></div>
         <div id=reserveerr class='pb-0 pt-0 alert alert-info HideDiv ClrErr' role=alert></div>
         <form class=needs-validation novalidate>
            <div><b><span data-localize=web.accprot>Account protection. Relogin if you change:</span></b></div>
            <div class=pl-4>
               <div class=form-check><label class=form-check-label><input id=procountry value=1 type=radio class=form-check-input name=protection><span data-localize=web.country>1 - Country</span></label></div>
               <div class=form-check><label class=form-check-label><input id=proisp value=2 type=radio class=form-check-input name=protection><span data-localize=web.isp>2 - Internet provider</span></label></div>
               <div class=form-check><label class=form-check-label><input id=proip value=3 type=radio class=form-check-input name=protection><span data-localize=web.ipadd>3 - IP address</span></label></div>
            </div>
            <div class='pl-4 pb-3'><span data-localize=web.accsecdesc>The above options give you some extra protection against unauthorized access. The higher the number the more protection but the more often you will need to relogin with your email.</span><a rel=noopener target=_blank href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Account_protection>Wiki</a></div>
            <div class='custom-control custom-checkbox'><input type=checkbox class=custom-control-input id=DelMobs><label class=custom-control-label for=DelMobs data-localize=login.delmobs>Delete all mobile devices</label></div>
            <div class='custom-control custom-checkbox pb-3'><input type=checkbox class=custom-control-input id=ResetApiKey><label class=custom-control-label for=ResetApiKey><span data-localize=login.resetkey>Reset/Display API key</span>: <span id=ApiKey></span></label></div>
            <div class='row pb-3'><a id=butquiz href=#><span data-localize=login.runquiz>Click to run quiz and get free Tickle power (days needed).</span></a></div>
            <div class=row><a id=butsettings href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg><span data-localize=login.updatesec>update security settings</span></a></div>
         </form>
      </div>
      <div id=group class='d-none HideDiv Dialog'>
         <div class=pt-3 id=PowerAssignments></div>
      </div>
      <div id=quiz class='d-none HideDiv Dialog'>
         <h3><?php echo XAT_NAME ?> quiz</h3>
         <div id=quizDesc>
            <p data-localize=quiz.desc>To get <a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Tickle rel=noopener target=_blank>Tickle</a> power for free, you need to complete the quiz below and answer each of the questions correctly.</p>
            <button type=button class='btn btn-primary' id=start_quiz><span data-localize=quiz.start>start quiz</span></button>
         </div>
         <div class='pro d-none'>
            <div class=row>
               <div class=col-12>
                  <div class='progress mb-3'>
                     <div class=progress-bar id=progress role=progressbar aria-valuenow=0 aria-valuemin=0 aria-valuemax=100>0%</div>
                  </div>
               </div>
            </div>
         </div>
         <div id=successmessageerr class='alert alert-success HideDiv ClrErr' role=alert></div>
         <div id=waitmessageerr class='alert alert-warning d-none HideDiv ClrErr' role=alert></div>
         <div id=wronganswererr class='alert alert-danger d-none HideDiv ClrErr' role=alert></div>
         <div id=quizForm class=d-none>
            <div class='row mb-3'>
               <div class=col-12>
                  <div id=question_image></div>
               </div>
            </div>
            <div class=mainForm>
               <div class=row>
                  <div class=col-12>
                     <h5 class='pb-1 pt-2' id=question_string></h5>
                  </div>
               </div>
               <div class=row>
                  <div class=col-12>
                     <div id=answers_list></div>
                  </div>
               </div>
            </div>
            <div class='row mt-3'>
               <div class=col-12>
                  <div id=moreinfoerr class='alert alert-success HideDiv ClrErr quizClass' role=alert></div>
               </div>
            </div>
            <div class='row mt-2'>
               <div class=col-12>
                  <div class=float-right>
                     <button type=button class='btn btn-primary d-none' id=next disabled><span data-localize=quiz.next>next</span></button>
                     <div class='mainCountdown d-none'><span data-localize=quiz.continuein>Continue in</span><span id=countdown></span></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id=register class='d-none HideDiv Dialog'>
         <h2><span data-localize=login.become><?php echo XAT_NAME ?> - become a registered user</span></h2>
         <div id=registererr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         <div id=regdoneerr class='alert alert-success HideDiv ClrErr' role=alert></div>
         <form id=regform class=needs-validation novalidate>
            <div class=mb-3>
               <label for=id>id:</label>
               <div class=input-group><input class=form-control id=id disabled></div>
            </div>
            <div class=mb-3>
               <label for=registername><span data-localize=buy.xatname><?php echo XAT_NAME ?> username:</span></label><input class=form-control id=registername>
               <div id=registernameerr class=invalid-feedback></div>
               <div class=small>(<span data-localize=login.len10>10-18 letters a-z, A-Z and 0-9</span>)</div>
            </div>
            <div class=mb-3>
               <label for=regpass><span data-localize=buy.password>password:</span></label>
               <div class=input-group>
                  <input type=password class='form-control passInput' id=regpass required>
                  <div class=input-group-append><button class='btn PassReveal searchButton eyeButton' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass2></button></div>
               </div>
               <div id=regpasserr class=invalid-feedback></div>
               <div class=small>(<span data-localize=login.len6>At least 3 letters, case sensitive, 0-9,A-Z,a-z only</span>)</div>
               <div class=small><span data-localize=login.notsame>PLEASE DO NOT USE THE SAME PASSWORD AS YOUR EMAIL!</span></div>
            </div>
            <div class=mb-3>
               <label for=regpass2><span data-localize=login.confirmpass>confirm password</span>:</label>
               <div class=input-group>
                  <input type=password class='form-control passInput' id=regpass2 required>
                  <div class=input-group-append><button class='btn PassReveal searchButton eyeButton' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass3></button></div>
               </div>
               <div id=regpas2serr class=invalid-feedback></div>
            </div>
            <div class=mb-3>
               <label for=regemail><span>email:</span></label><input class=form-control id=regemail>
               <div id=regemailerr class=invalid-feedback></div>
            </div>
            <div id=registercap class=ClrDiv></div>
            <div id=registercaperr class='invalid-feedback d-block'></div>
            <div class='custom-control custom-checkbox mt-2'>
               <input type=checkbox class=custom-control-input id=registerterms><label class=custom-control-label for=registerterms data-localize=buy.am14>I am 14 years or older and I agree to the <a href=//<?php echo DOMAIN ?>/terms rel=noopener target=_blank>Terms of Service</a></label>
               <div id=registertermserr class=invalid-feedback></div>
            </div>
            <div class=pt-2><a id=butregister href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg><span data-localize=login.register>register</span></a></div>
         </form>
      </div>
      <div id=lost class='d-none HideDiv Dialog'>
         <h2><span data-localize=login.forgothead>if you have forgotten your password or username use this form</span></h2>
         <div id=losterr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         <div id=lostokerr class='alert alert-success HideDiv ClrErr' role=alert></div>
         <form class=needs-validation novalidate>
            <div id=lostcap class=ClrDiv></div>
            <div id=lostextra class=pt-3>
               <div class=mb-3>
                  <label for=lostemail>email:</label><input class=form-control id=lostemail required>
                  <div id=lostemailerr class=invalid-feedback></div>
               </div>
               <a id=butlost href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg><span data-localize=login.forgotpass>forgot password</span></a>
            </div>
         </form>
      </div>
      <div id=changepass class='d-none HideDiv Dialog'>
         <h2><span data-localize=login.changepass>change password</span></h2>
         <div id=changepasserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         <div id=changepassokerr class='alert alert-success HideDiv ClrErr' role=alert></div>
         <form id=cpform class=needs-validation novalidate>
            <div id=cpnouser>
               <label for=cpname data-localize=buy.xatname><?php echo XAT_NAME ?> username:</label><input class=form-control id=cpname disabled>
               <div id=cpnameerr class=invalid-feedback></div>
               <label class=mt-3 for=cppass><span data-localize=login.old>old</span><span data-localize=buy.password>password</span>:</label>
               <div class=input-group>
                  <input type=password class='form-control passInput' id=cppass required>
                  <div class=input-group-append><button class='btn PassReveal searchButton eyeButton' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass4></button></div>
               </div>
               <div id=cppasserr class=invalid-feedback></div>
            </div>
            <label class=mt-3 for=cppass1><span data-localize=login.new>new</span><span data-localize=buy.password>password</span>:</label>
            <div class=input-group>
               <input type=password class='form-control passInput' id=cppass1 required>
               <div class=input-group-append><button class='btn PassReveal searchButton eyeButton' type=button><img class=viewpassicon src=/content/web/<?php echo DIRVERSION;?>/img/navbar/eye.svg alt=viewpass5></button></div>
            </div>
            <div id=cppass1err class=invalid-feedback></div>
            <a id=butchangepass href=# class='mt-3 btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=account><span data-localize=login.changepass>change password</span></a>
         </form>
      </div>
      <div id=changename class='d-none HideDiv Dialog'>
         <h2><span data-localize=login.chgnamebut>change username</span>: <span id=ChangeName></span></h2>
         <form class=needs-validation novalidate>
            <div class=mb-3>
               <label for=newname data-localize=buy.xatname><?php echo XAT_NAME ?> username:</label><input class=form-control id=newname required>
               <div id=newnameerr class=invalid-feedback></div>
               <div class=small>(<span data-localize=login.max18>10-18 letters a-z, A-Z and 0-9</span>)</div>
            </div>
            <a id=butchangename href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/settings.svg><span data-localize=login.chgnamebut>change username</span></a>
            <div class='pt-2 text-danger'><span data-localize=login.oldname>WARNING: You might lose your old name if you do this. You can only change your name every 7 days</span>.</div>
         </form>
      </div>
      <div id=cookiePopup class='alert alert-dismissible text-center cookiePopup' role=alert>
         <div><span data-localize=web.privacyterms><?php echo XAT_NAME ?> uses <a href=https://<?php echo DOMAIN ?>/privacy rel=noopener target=_blank>cookies</a> and your use is subject to <a href=https://<?php echo DOMAIN ?>/terms rel=noopener target=_blank>terms</a></span><button id=cookieAgree type=button class='btn btn-primary btn-sm cookieButton' aria-label=accept><span data-localize=web.agree>agree</span></button><button id=cookieSettings type=button class='btn btn-outline-secondary btn-sm cookieButton' aria-label=settings><span data-localize=web.settings>settings</span></button></div>
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
      <script src=https://google-analytics.com/urchin.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js></script><script src=/content/web/<?php echo DIRVERSION;?>/lib/jquery.localize.js></script><script src=/content/web/<?php echo DIRVERSION;?>/common.js?z></script><script src=/content/web/<?php echo DIRVERSION;?>/login.js?z3></script>
