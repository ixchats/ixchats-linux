<!doctype html> 
<html lang=en>
   <head>
      <meta charset=utf-8>
      <meta http-equiv=Content-Security-Policy content='
         default-src 
         &#39;self&#39;;
         style-src 
         &#39;self&#39;
         https://<?php echo DOMAIN ?>/
         https://*.<?php echo DOMAIN ?>/
         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css
         https://www.gstatic.com/
         https://fonts.googleapis.com/;
         connect-src
         &#39;self&#39;
         https://<?php echo DOMAIN ?>/
         https://*.<?php echo DOMAIN ?>/
         https://www.xatech.com/
         https://xat.wiki/
         img-src 
         &#39;self&#39;
         https://*.<?php echo DOMAIN ?>/
         https://<?php echo DOMAIN ?>/ 
         https://xat.wiki/
         https://images.weserv.nl/;
         script-src
         &#39;self&#39; 
         https://<?php echo DOMAIN ?>/
         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js
         https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js
         https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.js
         https://www.google.com/recaptcha/
         https://www.gstatic.com/;
         frame-src 
         &#39;self&#39; 
         https://www.google.com/recaptcha/;
         base-uri 
         &#39;self&#39;;
         object-src 
         &#39;self&#39;
         https://<?php echo DOMAIN ?>/
         https://www.<?php echo DOMAIN ?>/
         https://www.xatech.com/;
         form-action
         &#39;self&#39;
         https://<?php echo DOMAIN ?>/;
         font-src 
         &#39;self&#39;
         https://fonts.gstatic.com/
         '>
      <meta name=viewport content='width=device-width,initial-scale=1,shrink-to-fit=no'>
      <meta name=description content=xat>
      <title><?php echo XAT_NAME ?> report</title>
      <script type=application/json id=xjson> {"type":"home","dir":"/content/web/<?php echo DIRVERSION;?>/"} </script> 
      <link href=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css rel=stylesheet>
      <link href=/content/web/<?php echo DIRVERSION;?>/direct.css rel=stylesheet>
      <link rel=manifest href=/content/web/<?php echo DIRVERSION;?>/manifest.json>
      <link rel=icon href=/content/web/<?php echo DIRVERSION;?>/img/favicon.ico>
      <link rel=icon href=/content/web/<?php echo DIRVERSION;?>/img/favicon-32x32.png sizes=32x32 type=image/png>
      <link rel=icon href=/content/web/<?php echo DIRVERSION;?>/img/favicon-16x16.png sizes=16x16 type=image/png>
      <meta name=application-name content=xat>
      <meta name=theme-color content=#ffffff>
      <link rel=mask-icon href=/content/web/<?php echo DIRVERSION;?>/img/safari-pinned-tab.svg color=#5bbad5>
      <link rel=apple-touch-icon href=/content/web/<?php echo DIRVERSION;?>/img/apple-touch-icon.png sizes=180x180>
      <meta name=apple-mobile-web-app-title content=xat>
      <meta name=msapplication-config content=/content/web/<?php echo DIRVERSION;?>/img/favicons/browserconfig.xml>
   </head>
   <body class=invisible>
      <nav id=navTop class='navbar navbar-expand-md navbar-dark fixed-top gradback p-0'>
         <div class=header-flex>
            <div> <a class='navbar-brand p-0 m-0 ml-2' href=https://<?php echo DOMAIN ?>> <img id=navLogo src=/content/web/<?php echo DIRVERSION;?>/img/xatplanet.svg height=50 alt=logo> </a> </div>
            <div class=logoname-flex>
               <div id=groupName><?php echo XAT_NAME ?> <span data-localize=report.report>report</span></div>
               <div id=groupDescription></div>
            </div>
         </div>
         <span id=statnav></span> 
      </nav>
      <div class=container>
         <div class='text-center mb-3'><iframe title='xat banner' width=728 height=90 id=promoframe src=/content/web/<?php echo DIRVERSION;?>/apps/ad/ad.html scrolling=no sandbox='allow-scripts allow-same-origin'></iframe></div>
         <ul class='nav nav-tabs mb-4'>
            <li class='nav-item repgrp'><a id=tabgroup class='NavTabs nav-link'href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/inappropriate.svg width=18 alt='report group'><span data-localize=report.group>report group</span></a></li>
            <li class='nav-item repusr'><a id=tabuser class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/inappropriate.svg width=18 alt='report user'><span data-localize=report.user>report user</span></a></li>
         </ul>
         <div id=group class='d-none HideDiv'>
            <h1 data-localize=report.repgroup>report an inappropriate group</h1>
            <p class=eventsearch data-localize=chat.canreport>You can report something as inappropriate if it violates our <a href=http://<?php echo DOMAIN ?>/terms.html>Terms of Service</a>. If you believe something is otherwise inappropriate please use the box below to tell us why. However, xat will not help to resolve disputes between users. Please don't report without good cause, if you do this repeatedly you may be blocked from using our service.</p>
            <div id=reportgrouperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form id=sendgrpyes class=needs-validation novalidate>
               <div class='row mb-3 reportgroupcol'>
                  <div class=col-lg-2> <label for=GroupName><span data-localize=chats.groupname>group name</span>:</label> </div>
                  <div class=col-lg-5> <span id=GroupName class='font-weight-bold text-secondary'></span> </div>
               </div>
               <div class='row mb-3'>
                  <div class=col-lg-2> <label for=Complaint><span data-localize=report.complaint>complaint</span>:</label> </div>
                  <div class=col-lg-5>
                     <select id=selectcomplaint name=Complaint>
                        <option value=please data-localize=chat.plzsel>Please select ...</option>
                        <option value=unfair data-localize=chat.unfair>Unfair Banning</option>
                        <option value=language data-localize=chat.badlang>Offensive Language</option>
                        <option value=scam data-localize=chat.scamming>Scamming, Phishing or Hacking</option>
                        <option value=img data-localize=chat.badimg>Inappropriate Images or Video</option>
                        <option value=promo data-localize=chat.noctrl>Promotion: Inappropriate or Out of Control</option>
                        <option value=harass data-localize=chat.bully>Harassment, Cyberbulling, Imposter</option>
                        <option value=contact data-localize=chat.unwanted>Unwanted Contact</option>
                        <option value=other data-localize=chat.otherissue>Other Terms Violation (Please Specify)</option>
                     </select>
                     <div id=typeerr class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <div class='row mb-3'>
                  <div class=col-lg-2> <label for=yourname><span data-localize=chats.yourname>your name</span>:</label> </div>
                  <div class=col-lg-5>
                     <input name=yourname class='form-control form-control-sm'id=yourname maxlength=60 required> 
                     <div id=yournameerr class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <div class='row mb-3'>
                  <div class=col-lg-2> <label for=email><span data-localize=chats.email>email</span>:</label> </div>
                  <div class=col-lg-5>
                     <input name=email class='form-control form-control-sm' id=email maxlength=60>
                     <div id=emailerr class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <hr>
               <div class='row mb-3'>
                  <div class=col-lg-9>
                     <label for=why><span data-localize=report.addinfo>additional information</span>:</label> 
                     <div class=override data-localize=report.detailed>Please be as detailed as possible to further assist us with your report.</div>
                     <textarea class='form-control cssareamin'id=why rows=5 maxlength=1000></textarea>
                     <div id=whyerr class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <div class=row>
                  <div class=col-lg>
                     <div id=createcap class=ClrDiv></div>
                  </div>
               </div>
               <div class=bottombuttons>
                  <button type=submit class='btn btn-primary btn-large'> <img class='mr-2 pb-1'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/send.svg width=19 alt='send report'><span data-localize=report.send>send report</span> </button> 
                  <p class=inforight data-localize=chat.nonotify>You may not be notified of the result of the report or any action taken.</p>
               </div>
            </form>
         </div>
         <div id=user class='d-none HideDiv'>
            <h1 data-localize=report.repuser>report an inappropriate user</h1>
            <p class=eventsearch data-localize=chat.canreport>You can report something as inappropriate if it violates our <a href=http://<?php echo DOMAIN ?>/terms.html>Terms of Service</a>. If you believe something is otherwise inappropriate please use the box below to tell us why. However, xat will not help to resolve disputes between users. Please don't report without good cause, if you do this repeatedly you may be blocked from using our service.</p>
            <div id=reportusererr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form id=sendusryes class=needs-validation novalidate>
               <div class='row mb-3 reportusercol'>
                  <div class=col-lg-2> <label for=UserName><span data-localize=chats.username>username</span>:</label> </div>
                  <div class=col-lg-5> <span id=UserName class='font-weight-bold text-secondary'></span> </div>
               </div>
               <div class='row mb-3'>
                  <div class=col-lg-2> <label for=ComplaintUsr><span data-localize=report.complaint>complaint</span>:</label> </div>
                  <div class=col-lg-5>
                     <select id=selectcomplaintUsr name=ComplaintUsr>
                        <option value=please data-localize=chat.plzsel>Please select ...</option>
                        <option value=language data-localize=chat.badlang>Offensive Language</option>
                        <option value=img data-localize=chat.badimg>Inappropriate Images or Video</option>
                        <option value=harass data-localize=chat.bully>Harassment, Cyberbulling, Imposter</option>
                        <option value=contact data-localize=chat.unwanted>Unwanted Contact</option>
                        <option value=other data-localize=chat.otherissue>Other Terms Violation (Please Specify)</option>
                     </select>
                     <div id=type2err class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <div class='row mb-3'>
                  <div class=col-lg-2> <label for=YourNameUsr><span data-localize=chats.yourname>your name</span>:</label> </div>
                  <div class=col-lg-5>
                     <input name=YourNameUsr class='form-control form-control-sm'id=YourNameUsr maxlength=60 required> 
                     <div id=yourname2err class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <div class='row mb-3'>
                  <div class=col-lg-2> <label for=emailUsr><span data-localize=chats.email>email</span>:</label> </div>
                  <div class=col-lg-5>
                     <input name=emailUsr class='form-control form-control-sm'id=emailUsr maxlength=60> 
                     <div id=email2err class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <hr>
               <div class='row mb-3'>
                  <div class=col-lg-9>
                     <label for=whyUsr><span data-localize=report.addinfo>additional information</span>:</label> 
                     <div class=override data-localize=report.detailed>Please be as detailed as possible to further assist us with your report.</div>
                     <textarea class='form-control cssareamin'id=whyUsr name=whyUsr rows=5 maxlength=1000></textarea>
                     <div id=msglenerr class='invalid-feedback ClrErr'></div>
                  </div>
               </div>
               <div class=row>
                  <div class=col-lg>
                     <div id=createcap2 class=ClrDiv></div>
                  </div>
               </div>
               <div class=bottombuttons>
                  <button type=submit class='btn btn-primary btn-large'> <img class='mr-2 pb-1'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/send.svg width=19 alt='send report'><span data-localize=report.send>send report</span> </button> 
                  <p class=inforight data-localize=chat.nonotify>You may not be notified of the result of the report or any action taken.</p>
               </div>
            </form>
         </div>
      </div>
      <div id=cookiePopup class='alert alert-dismissible text-center cookiePopup'role=alert>
         <div> <span data-localize=web.privacyterms>xat uses <a href=https://<?php echo DOMAIN ?>/privacy rel=noopener target=_blank>cookies</a> and your use is subject to <a href=https://<?php echo DOMAIN ?>/terms rel=noopener target=_blank>terms</a></span> <button id=cookieAgree type=button class='btn btn-primary btn-sm cookieButton' aria-label=accept><span data-localize=web.agree>agree</span></button> <button id=cookieSettings type=button class='btn btn-outline-secondary btn-sm cookieButton' aria-label=settings><span data-localize=web.settings>settings</span></button> </div>
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
                     <button type=button class=close data-dismiss=modal aria-label=Close> <span aria-hidden=true>×</span> </button> 
                  </div>
                  <div class=modal-body>
                     <div id=privacyGroupFrame class='alert alert-danger d-none'role=alert>
                        <h4 class=text-center><span data-localize=web.triedtab>you tried to open a group tab</span></h4>
                        <p><strong id=privacyGroupUrl></strong> <span data-localize=web.tabblocked>has been blocked due to your privacy preferences. Opening this tab is the same as visiting a third party website. You can 'allow this time' or change your 'group tabs' privacy preferences below.</span></p>
                        <div class='d-flex p-1 justify-content-end'> <button id=privacyGroupButton type=button class='btn btn-primary'><span data-localize=web.allow>allow this time</span></button> </div>
                     </div>
                     <div class='container card mb-4 pt-2 pb-2'>
                        <div class=row>
                           <div class=col><span data-localize=web.necessary>necessary cookies</span><br> <small><span data-localize=web.operate>These are necessary for this service to operate. They mainly store your preferences and settings.</span> <a href=/privacy><span data-localize=web.learnmorenec>Learn more about necessary cookies.</span></a></small> </div>
                           <div class='col-ms-auto mr-2'> <label class=switch> <input id=privacyNecessary type=checkbox checked> <span class='slider round'></span> </label> </div>
                           <div class='w-100 mb-3'></div>
                           <div class=col><span data-localize=web.performance>performance cookies</span><br> <small><span data-localize=web.optional>These are used to improve the performance of the service. The service can operate without these.</span> <a href=/privacy><span data-localize=web.learnmoreper>Learn more about performance cookies.</span></a></small> </div>
                           <div class='col-ms-auto mr-2'> <label class=switch> <input id=privacyPerformance type=checkbox checked> <span class='slider round'></span> </label> </div>
                           <div class='w-100 mb-3'></div>
                           <div class=col><span data-localize=web.grouptabs>group tabs (third party)</span><br> <small><span data-localize=web.allowstabs>This option allows third party content to open automatically on all xat groups.</span> <a href=/privacy><span data-localize=web.learnmorethird>Learn more about third party content.</span></a></small> </div>
                           <div class='col-ms-auto mr-2'> <label class=switch> <input id=privacyGroups type=checkbox> <span class='slider round'></span> </label> </div>
                        </div>
                     </div>
                  </div>
                  <div class=modal-footer> <button id=openPolicy type=button class='btn btn-info' data-dismiss=modal><span data-localize=web.policy>privacy policy</span></button> <button id=privacyClose type=button class='btn btn-primary'><span data-localize=web.close>close</span></button> </div>
               </div>
            </div>
         </div>
      </div>
      <div id=languageDialog></div>
      <script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script> <script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js></script> <script src=https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js></script> <script src=/content/js/slimselect/slimselect.min.js></script> 
      <link href=/content/js/slimselect/slimselect.min.css rel=stylesheet>
      <script src=/content/web/<?php echo DIRVERSION;?>/lib/jquery.localize.js></script> <script src=/content/web/<?php echo DIRVERSION;?>/common.js></script> <script src=/content/web/<?php echo DIRVERSION;?>/report.js></script>
