<!doctype html>
<html lang=en>
   <head>
      <meta http-equiv=Content-Security-Policy content='
         default-src &#39;self&#39;;
         style-src &#39;self&#39; https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css;
         connect-src https://<?php echo DOMAIN ?>/ https://www.xatech.com/ https://xat.wiki/;
         img-src &#39;self&#39; https://*.<?php echo DOMAIN ?>/ https://<?php echo DOMAIN ?>/  https://pay.openbucks.com/paybutton_v2.php https://www.paypalobjects.com/;
         script-src &#39;self&#39; https://<?php echo DOMAIN ?>/
         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js
         https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js;         frame-src *;
         base-uri &#39;self&#39;;
         object-src https://www.xatech.com/ https://<?php echo DOMAIN ?>/ https://www.<?php echo DOMAIN ?>/;
         form-action https://<?php echo DOMAIN ?>/ https://www.paypal.com/cgi-bin/webscr https://pay.skrill.com/'>
      <meta charset=utf-8>
      <meta name=viewport content='width=device-width,initial-scale=1,shrink-to-fit=no'>
      <meta name=description content=<?php echo XAT_NAME ?>>
      <title><?php echo XAT_NAME ?> store</title>
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
               <div id=groupName><?php echo XAT_NAME ?> <span data-localize=web.store >store</span></div>
               <div id=groupDescription></div>
            </div>
         </div>
         <span id=statnav></span>
      </nav>
      <div class='container storenav'>
         <div class='text-center mb-3 xbanner'><iframe title='<?php echo XAT_NAME ?> banner' title='<?php echo XAT_NAME ?> banner' width=728 height=90 id=promoframe src=/content/web/<?php echo DIRVERSION;?>/apps/ad/ad.html scrolling=no sandbox='allow-scripts allow-same-origin allow-top-navigation'></iframe></div>
         <nav class='navbar navbar-expand-lg navbar-light bg-light newnav'>
            <a class='navbar-brand newbartitle' href=# data-localize=web.menu>menu</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavStore aria-controls=navbarNavStore aria-expanded=false aria-label='Toggle navigation'><span class='navbar-toggler-icon darktoggle'></span></button>
            <div class='collapse navbar-collapse' id=navbarNavStore>
               <div class=navbar-nav>
                  <li class=nav-item><a id=tabbuyxats class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/buyxats.svg alt=buyxats><span data-localize=main.buyxats>buy <?php echo XAT_NAME ?>s & days</span></a></li>
                  <li class=nav-item><a id=tabpowers class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/powers.svg alt=powers><span data-localize=main.powers>powers</span></a></li>
                  <li class=nav-item><a id=tabshortname class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/shortname.svg alt=shortname><span data-localize=main.shortname>short name</span></a></li>
                  <li class=nav-item><a id=tabauction class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/auctions.svg alt=auctions><span data-localize=main.auctions>auctions</span></a></li>
                  <li class=nav-item><a id=tabpromotion class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/promotion.svg alt=promotion><span data-localize=main.promotion>promotion</span></a></li>
                  <li class=nav-item><a id=tabads class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/ads.svg alt=ads><span data-localize=main.ads>ads</span></a></li>
                  <li class=nav-item><a id=tabgroup class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/buygroup.svg alt='get group'><span data-localize=main.buygroup>groups</span></a></li>
                  <li class=nav-item><a id=tabdays2xats class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/dx.svg width=23 alt=dx><span data-localize=main.days2xats>dx</span></a></li>
                  <li class=nav-item><a id=tabxats2days class='NavTabs nav-link' href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/x2d.svg width=19 alt=x2d><span data-localize=main.xats2days>x2d</span></a></li>
               </div>
            </div>
         </nav>
         <div id=CommonDiv>
            <div class=mb-3>
               <label for=username data-localize=buy.xatname><?php echo XAT_NAME ?> username:</label>
               <div class=input-group>
                  <input class=form-control id=username required>
                  <div id=usernameerr class='invalid-feedback ClrErr'></div>
               </div>
            </div>
            <div class=mb-3>
               <label for=password><span data-localize=buy.password>password</span>:</label><input type=password class=form-control id=password required>
               <div id=passworderr class='invalid-feedback ClrErr'></div>
            </div>
            <div class='custom-control custom-checkbox'>
               <input type=checkbox class=custom-control-input id=agreeterms><label class=custom-control-label for=agreeterms data-localize=buy.iagree>I have read and agree to the rules and <a href=//<?php echo DOMAIN ?>/terms>terms</a></label>
               <div id=agreetermserr class='invalid-feedback ClrErr'></div>
            </div>
         </div>
         <div id=buyxats class='d-none HideDiv'>
            <h1><span data-localize=buy.buyxats>buy <?php echo XAT_NAME ?>s and days</span></h1>
            <div class='alert alert-info sall' role=alert data-localize=buy.intro><?php echo XAT_NAME ?>s allow you to buy powers and many other things for the chat. You also get "days" that are included in purchases. Days are subscriber time that are needed to make powers work and other chat box features. Decide how many <?php echo XAT_NAME ?>s you would like to purchase from the list below and press one of the buttons. Please ensure that you have permission of the card or account holder. All purchases are subject to our <a href=//<?php echo DOMAIN ?>/terms>terms and conditions</a>.</div>
            <div class='alert alert-warning d-none' role=alert id=abouttobuy><b daysta-localize=buy.abouttobuyo>You are about to order <?php echo XAT_NAME ?>s for user:</b><font color=#FF0000><span id=buyuser></span></font>. <b data-localize=buy.notyou>If this is not your ID DO NOT PROCEED!</b><br></div>
            <div id=buythanks class='alert alert-success d-none' role=alert data-localize=buy.buythanks>
               Thank you for your purchase.
               <p>Your order will be processed soon and you will be sent a confirmation email. If you don't receive the confirmation email after 30 minutes try signing in here: <a href=//<?php echo DOMAIN ?>/login>https://<?php echo DOMAIN ?>/login</a></p>
            </div>
            <div id=buyxatserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <div id=buyform class=needs-validation novalidate></div>
         </div>
         <div id=auction class='d-none HideDiv'>
            <h1 data-localize=buy.canauction>you can use your <?php echo XAT_NAME ?>s to bid on auctions.</h1>
            <h2><span data-localize=buy.aphase>auction phase</span><span id=Phaseerr></span></h2>
            <div id=auctionphaseerr class='alert alert-primary p-2 HideDiv ClrErr' role=alert></div>
            <div id=auctionerr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <div id=auctionokerr class='alert alert-success HideDiv ClrErr' role=alert></div>
            <div id=auctiontableerr></div>
            <p><a class=float-right href='?old=1#!auction' data-localize=web.prevhere>The previous auction results are here.</a></p>
            <h3><span data-localize=buy.rules>rules:</span></h3>
            <div class='alert alert-info p-2 showtrigger d-none cursx' role=alert data-toggle=collapse href=#aucshow aria-expanded=false aria-controls=aucshow data-localize=web.showrules>Click to show/hide rules</div>
            <div class='alert alert-info small showrules' role=alert id=aucshow>
               <ul class=mb-0 data-localize=buy.auctionrules>
                  <li>You must <a href=//<?php echo DOMAIN ?>/terms.html>comply with the terms</a>. </li>
                  <li><?php echo XAT_NAME ?> reserves the right to cancel and refund any auction without notice.</li>
                  <li>Your <?php echo XAT_NAME ?> name and user id will be shown if you are high bidder / winner (this is a public auction).</li>
                  <li>Bids are binding. If you are not outbid you will be required to pay.</li>
                  <li>If you are top bidder you must keep enough xats and powers in your account to cover the bid.</li>
                  <li>You must have enough xats and or non limited powers in your account in order to bid.</li>
                  <li>If you win <strong>you need to claim your ID within 12 hours</strong> of the auction ending.</li>
                  <li>If you fail to complete and auction you can be<strong> fined or deleted</strong>.</li>
                  <li>If you bid by mistake you will lose 20% of your bid but you must notify <?php echo XAT_NAME ?> right away.</li>
                  <li>If you fail to complete the auction and move the xats away you will lose 100% of your bid.</li>
                  <li><?php echo XAT_NAME ?> reserves the right to block IDs from the auction.</li>
                  <li>Also check out the <a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Auction>wiki</a> before bidding.</li>
                  <li>For name auctions the name will be assigned to your ID. <strong>Your old name will be lost.</strong></li>
               </ul>
            </div>
            <div id=bid name=bid>
               <div class='alert alert-secondary p-2'><span data-localize=buy.minbid>The minimum bid in this auction is:</span><span id=MinBiderr></span> <?php echo XAT_NAME ?>s</div>
               <div class=mb-3>
                  <label for=DesiredID><span data-localize=buy.desired>desired id</span>:</label><input class='form-control noread1' id=DesiredID autocomplete=<?php echo XAT_NAME ?>45 required>
                  <div id=DesiredIDerr class=invalid-feedback></div>
                  <div id=digitserr class=small></div>
               </div>
               <div class=mb-3>
                  <label for=StartingBid><span data-localize=buy.bid>bid</span> (<?php echo XAT_NAME ?>s):</label><input class=form-control id=StartingBid required>
                  <div id=StartingBiderr class=invalid-feedback></div>
                  <div class=small><span class=text-danger data-localize=buy.careful>(CHECK CAREFULLY!)</span></div>
               </div>
               <div id=auctionextra class='pb-3 ClrDiv'></div>
               <div id=auctionchooseerr class='alert alert-info HideDiv ClrErr' role=alert></div>
               <div id=TransferOptserr class=mb-3></div>
               <a id=auctionbut href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/auctions.svg><span data-localize=buy.enterbif>enter bid</span></a>
            </div>
         </div>
         <div id=relogin class='d-none HideDiv'>
            <div class='alert alert-success' role=alert>
               <div id=reloginerr></div>
            </div>
            <div id=reloginflash></div>
         </div>
         <div id=promotion class='HideDiv PromoDiv AdDiv'>
            <h1 class='d-none HideDiv PromoDiv'><span data-localize=buy.promo>promote a chat group</span></h1>
            <h1 class='d-none HideDiv AdDiv'><span data-localize=buy.orads>advertise your chat with banner ads on <?php echo XAT_NAME ?></span></h1>
            <p><span data-localize=buy.canpromo>You can use your <?php echo XAT_NAME ?>s to get your chat group promoted here.</span></p>
            <div>
               <h2><span data-localize=buy.rules>rules:</span></h2>
               <div class='alert alert-info p-2 showtrigger d-none cursx' role=alert data-toggle=collapse href=#proshow aria-expanded=false aria-controls=proshow data-localize=web.showrules>Click to show/hide rules</div>
               <div class='alert alert-info small showrules' role=alert id=proshow>
                  <ul data-localize=buy.rulespromo class=mb-0>
                     <li>All aspects of the chat must be suitable for age 14 and over.</li>
                     <li>The chat must <a href=//<?php echo DOMAIN ?>/terms.html>comply with the terms</a>. </li>
                     <li>The chat must be moderated while it is promoted (no bad language etc).</li>
                     <li>CHAT RADIO: If the chat radio has tracks with swear words scroller must include 'WARNING Radio may be 18+' (in the language of the promotion) or on the background just above the scroller. DJs should not swear. </li>
                     <li>If a user causes a bot to say something inappropriate that is the same as them saying it and they should be banned. </li>
                     <li>Inappropriate visitors should be banned immediately (not kicked). </li>
                     <li>There must be no inappropriate links and no links to binaries (e.g. programs). </li>
                     <li>Chats on promotion must NOT sell ranks e.g. sell moderator. </li>
                     <li>Chats must NOT be based on religious or political views. </li>
                     <li>At least one owner or moderator must be <em>visible</em> at all times. </li>
                     <li>The chat must be in the correct language.</li>
                     <li>Other chats can be promoted at the same time as yours.</li>
                     <li>Promotion costs may vary, press 'get cost' to find out.</li>
                     <li>The chat must be open to all (not set members only, live mode etc). Do not ban and kick without reason e.g. new users (toons or nulls). </li>
                     <li>Chat ads only show to users who speak your language.</li>
                     <li>Chat ads now rotate for more exposure.</li>
                     <li>Do not use /pr unless absolutely necessary <a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=OwnerGuide#.2Fp_Protect_your_group_from_invaders>use /p instead</a> (The chat must be open to all). You could lose promotion for using /pr. </li>
                     <li>Due to scamming ads for selling <?php echo XAT_NAME ?>s are no longer allowed. </li>
                     <li>NEW: Ads must not include ANY items or services that are for sale, this includes but is not limited to <?php echo XAT_NAME ?>s, days, and powers.</li>
                     <li>Do not promote a chat that is redirected. </li>
                  </ul>
               </div>
            </div>
            <div class='alert alert-warning' role=alert data-localize=buy.promonote>Note: if you do not abide by these rules your promotion will end with no notice, no refund of <?php echo XAT_NAME ?>s and your group will be delisted and blocked from further promotion.</div>
            <div id=promotionerr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form class=needs-validation novalidate>
               <div class=mb-3>
                  <label for=promoname data-localize=buy.groupname>group name:</label><input class=form-control autocomplete=<?php echo XAT_NAME ?> id=promoname required>
                  <div id=promonameerr class='invalid-feedback ClrErr'></div>
               </div>
               <div id=promolangdiv class='mb-3 HideDiv'>
                  <label for=promolang><span data-localize=buy.language>language</span>: <span id=promolang></span></label>
                  <div class=small>(<span data-localize=buy.editgrp>Edit your group to change</span>)</div>
               </div>
               <div id=promohoursdiv class='mb-3 HideDiv'>
                  <label for=promohours data-localize=buy.promohours>hours of promotion:</label><input type=number class='form-control noread2' autocomplete=<?php echo XAT_NAME ?>46 id=promohours min=0>
                  <div class=small>(<span data-localize=buy.minhalf>Minimum 0.5 in 1/2 hours</span>.)</div>
                  <div id=promohourserr class='invalid-feedback ClrErr'></div>
               </div>
               <div id=promoextra class='pb-3 ClrDiv HideDiv'></div>
               <div id=promocostdiv class='mb-3 HideDiv'>
                  <label for=promocost data-localize=buy.cost>cost</label>
                  <div id=promocost><span id=promoxats></span> <?php echo XAT_NAME ?>s
                     <input type=radio name=XatsDays value=Xats checked><span id=promodays></span><span data-localize=buy.days>days</span><input type=radio name=XatsDays value=Days>
                  </div>
               </div>
               <div id=adimagediv class='mb-3 HideDiv AdDiv'>
                  <label for=adimage data-localize=buy.adimage>ad image (728 x 90):</label><input class=form-control id=adimage>
                  <div class=small>(<span>e.g. a99.imgur.com/abcdef.png / a99.postimg.cc/abcdef.png</span>)</div>
                  <div id=adimageerr class='invalid-feedback ClrErr'></div>
               </div>
               <div><a id=adcostbut href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/buyxats.svg><span data-localize=buy.getcost>get cost</span></a></div>
               <div id=promobutdiv class='HideDiv pt-3'><a id=promobut href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg><span data-localize=buy.promonow>promote now!</span></a> (<span data-localize=buy.once>Only click once!</span>) </div>
               <div id=adauth class='HideDiv pt-3'>
                  <div class='alert alert-primary' role=alert><span data-localize=buy.imgneedauth>Advert images need to be authorized <font color=#FF0000>(cost 50 <?php echo XAT_NAME ?>s)</font><br><b>See <a href=https://util.<?php echo DOMAIN ?>/wiki/index.php?title=Advertise>wiki</a> before proceeding.</b></span></div>
                  <div class=pt-3><a id=authbut href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg><span data-localize=buy.authorize>authorize</span></a> (<span data-localize=buy.once>Only click once!</span>) </div>
               </div>
               <div id=adbutdiv class='HideDiv pt-3'><a id=adbut href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg><span data-localize=buy.advertise>advertise</span></a> (<span data-localize=buy.once>Only click once!</span>) </div>
            </form>
         </div>
         <div id=group class='d-none HideDiv'>
            <h1><span data-localize=buy.buygroup>buy a chat group</span></h1>
            <p data-localize=buy.youcangroup>You can use your <?php echo XAT_NAME ?>s to transfer a chat group that is not being used to you.</p>
            <h2 data-localize=buy.rules>rules:</h2>
            <div class='alert alert-info p-2 showtrigger d-none cursx' role=alert data-toggle=collapse href=#buygrpshow aria-expanded=false aria-controls=buygrpshow data-localize=web.showrules>Click to show/hide rules</div>
            <div class='alert alert-info small showrules' role=alert id=buygrpshow>
               <ul data-localize=buy.rulesgroup class=mb-0>
                  <li>You must <a href=//<?php echo DOMAIN ?>/terms.html>comply with the terms</a>. </li>
                  <li>Group transfer costs may vary, press 'get cost' to find out.</li>
                  <li>If the group becomes unused again it can be transferred again.</li>
                  <li>The email of the group will be set to the same email as your user.</li>
                  <li>If the group name is inappropriate (see <a href=//<?php echo DOMAIN ?>/terms>terms</a>) the group may be deleted with no refund or notice. </li>
                  <li>Don't worry, your group has to be ownerless for more than 3 months to be transferred. </li>
               </ul>
            </div>
            <div id=buygrouperr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form class=needs-validation novalidate>
               <div class=mb-3>
                  <label for=wantedgroup data-localize=buy.groupname>group name:</label><input class='form-control noread3' autocomplete=xat47 id=wantedgroup required>
                  <div id=wantedgrouperr class='invalid-feedback ClrErr'></div>
               </div>
               <div><a id=getcost href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/buyxats.svg><span data-localize=buy.getcost>get cost</span></a></div>
               <div id=buygroupextra class='d-none HideDiv pt-3'>
                  <div id=buygroupextra2 class='pb-3 ClrDiv'></div>
                  <div class=pb-2><span data-localize=buy.cost>cost</span>: <span id=groupxats></span> <?php echo XAT_NAME ?>s</div>
                  <a data-buy=1 id=butbuygroup href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg><span data-localize=buy.buy>buy</span><span id=buygroupname></span></a> (<span data-localize=buy.once>Only click once!</span>) 
               </div>
            </form>
         </div>
         <div id=days2xats class='d-none HideDiv'>
            <h1><span data-localize=buy.days2xats>convert days to xats</span></h1>
            <p data-localize=buy.candx>You can convert some of your days to <?php echo XAT_NAME ?>s here.</p>
            <h2 data-localize=buy.rules>rules:</h2>
            <div class='alert alert-info p-2 showtrigger d-none cursx' role=alert data-toggle=collapse href=#dxshow aria-expanded=false aria-controls=aucshow data-localize=web.dxshow>Click to show/hide rules</div>
            <div class='alert alert-info small showrules' role=alert id=dxshow>
               <ul data-localize=buy.dxrules class=mb-0>
                  <li>You must <a href=//<?php echo DOMAIN ?>/terms.html>comply with the terms</a>.</li>
                  <li><strong>You will need and use up one DX power for each conversion.</strong></li>
                  <li>You can convert up to 180 days per DX power.</li>
                  <li>You will get 13.5 <?php echo XAT_NAME ?>s per day.</li>
               </ul>
            </div>
            <div id=days2xatserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form class=needs-validation novalidate>
               <div id=days2xatsextra class=pt-3>
                  <div>
                     <label for=NoOfDays data-localize=buy.daysto>days to convert:</label><input type=number class='form-control noread5' id=NoOfDays autocomplete=<?php echo XAT_NAME ?>48 required>
                     <div id=NoOfDayserr class='invalid-feedback ClrErr'></div>
                  </div>
                  <div id=days2xatsextra2 class='ClrDiv pt-3'></div>
               </div>
               <div><a data-buy=1 id=days2xatsbut href=# class='btn btn-primary btn-large mt-2'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg><span data-localize=buy.convert>convert</span></a></div>
            </form>
         </div>
         <div id=xats2days class='d-none HideDiv'>
            <h1><span data-localize=buy.xats2days>convert <?php echo XAT_NAME ?>s to days</span></h1>
            <p data-localize=buy.canx2d>You can convert some of your <?php echo XAT_NAME ?>s to days here.</p>
            <h2 data-localize=buy.rules>rules:</h2>
            <div class='alert alert-info p-2 showtrigger d-none cursx' role=alert data-toggle=collapse href=#x2dshow aria-expanded=false aria-controls=x2dshow data-localize=web.showrules>Click to show/hide rules</div>
            <div class='alert alert-info small showrules' role=alert id=x2dshow>
               <ul data-localize=buy.x2drules class=mb-0>
                  <li>You must <a href=//<?php echo DOMAIN ?>/terms.html>comply with the terms</a>.</li>
                  <li><strong>You will need and use up one X2D power for each conversion.</strong></li>
                  <li>You can convert up to 2500 <?php echo XAT_NAME ?>s per X2D power.</li>
                  <li>You will get 1 day per 13.5 <?php echo XAT_NAME ?>s.</li>
               </ul>
            </div>
            <div id=xats2dayserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form class=needs-validation novalidate>
               <div id=x2dextra class=pt-3>
                  <div>
                     <label for=NoOfXats data-localize=buy.xatsto><?php echo XAT_NAME ?>s to convert:</label><input type=number class='form-control noread6' id=NoOfXats autocomplete=<?php echo XAT_NAME ?>49 required>
                     <div id=Xatserr class='invalid-feedback ClrErr'></div>
                  </div>
                  <div id=xats2daysextra2 class='ClrDiv pt-3'></div>
               </div>
               <div><a data-buy=1 id=xats2daysbut href=# class='btn btn-primary btn-large mt-2'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg><span data-localize=buy.convert>convert</span></a></div>
            </form>
         </div>
         <div id=shortname class='d-none HideDiv'>
            <h1><span data-localize=buy.buyshort>buy a short user name</span></h1>
            <p data-localize=buy.youcan>You can use your <?php echo XAT_NAME ?>s to buy a short user name (4-9 letters).</p>
            <h2 data-localize=buy.rules>rules:</h2>
            <div class='alert alert-info p-2 showtrigger d-none cursx' role=alert data-toggle=collapse href=#shoshow aria-expanded=false aria-controls=shoshow data-localize=web.showrules>Click to show/hide rules</div>
            <div class='alert alert-info small showrules' role=alert id=shoshow>
               <ul data-localize=buy.rulesname class=mb-0>
                  <li>You must <a href=//<?php echo DOMAIN ?>/terms>comply with the terms</a>.</li>
                  <li>Short name costs vary, press get cost to find out.</li>
                  <li>If your short name is unused for 90 days it may be sold again.</li>
                  <li>Only one short name is allowed per person.</li>
                  <li>Your current name will be replaced and lost.</li>
                  <li>If you choose a short name that is offensive (in any language) it may be deleted without refund.</li>
                  <li><?php echo XAT_NAME ?> reserves the right to cancel and refund any name without notice.</li>
                  <li>Note: a short name will put you higher up the user list. </li>
               </ul>
            </div>
            <div id=buyshortnameerr class='alert alert-danger HideDiv ClrErr' role=alert></div>
            <form class=needs-validation novalidate>
               <div class=mb-3>
                  <label for=wantedname data-localize=buy.desiredname>desired name:</label><input class='form-control noread4' id=wantedname autocomplete=<?php echo XAT_NAME ?>44 required>
                  <div class=small>(<span data-localize=buy.noteil>Note: 'i' will always be lowercase 'L' will always be in uppercase.</span>)</div>
                  <div id=wantednameerr class='invalid-feedback ClrErr'></div>
               </div>
               <div><a id=getcost href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/buyxats.svg><span data-localize=buy.getcost>get cost</span></a></div>
               <div id=shortnameextra class='d-none HideDiv pt-3'>
                  <div id=shortnameextra2 class='pb-3 ClrDiv'></div>
                  <div class=pb-2><span data-localize=buy.cost>cost</span>: <span id=shortxats></span> <?php echo XAT_NAME ?>s</div>
                  <a data-buy=1 id=buyshortname href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg><span data-localize=buy.buy>buy</span><span id=buyname></span></a> (<span data-localize=buy.once>Only click once!</span>) 
               </div>
            </form>
         </div>
      </div>
      <div id=powers class='d-none HideDiv container-fluid'>
         <div class=container>
            <h1><span data-localize=buy.buypow>buy powers</span></h1>
            <p><span data-localize=buy.canpowers>You can use your <?php echo XAT_NAME ?>s to buy special powers and abilities for the <?php echo XAT_NAME ?> chat.</span></p>
            <h2 data-localize=buy.rules>rules:</h2>
            <div class='alert alert-info p-2 showtrigger d-none cursx' role=alert data-toggle=collapse href=#powshow aria-expanded=false aria-controls=powshow data-localize=web.showrules>Click to show/hide rules</div>
            <div class='alert alert-info small showrules' role=alert id=powshow>
               <ul class=mb-0 data-localize=buy.powrules>
                  <li>You must <a href=//<?php echo DOMAIN ?>/terms>comply with the terms</a>.</li>
                  <li><strong>Powers only work if you are subscribed (have days).</strong></li>
                  <li>More powers will be added later.</li>
                  <li>Powers may be withdrawn from sale (so hurry, get yours now!).</li>
                  <li>The price of Powers will change up and down depending on demand.</li>
                  <li>Other users can see what powers you have turned on.</li>
                  <li>Powers can be individually turned on and off.</li>
                  <li>Powers are tradable with other users.</li>
                  <li>Powers stay with you until you trade them.</li>
                  <li>Each power has a power smiley. Only users with the power can use the power smiley.</li>
                  <li><strong>Powers cannot be refunded. Please read the description carefully before buying.</strong></li>
               </ul>
            </div>
            <nav class='navbar navbar-expand-lg navbar-light bg-light mb-3 pownav'>
               <a class='navbar-brand newbartitle powtit' href=# data-localize=web.powcat>power categories</a><button class='navbar-toggler powtog' type=button data-toggle=collapse data-target=#navbarText aria-controls=navbarText aria-expanded=false aria-label='Toggle navigation'><span class='navbar-toggler-icon darktoggle'></span></button>
               <div class='collapse navbar-collapse' id=navbarText>
                  <ul class='navbar-nav mr-auto'><button id=bpFeatured type=button class='PowTabs btn btn-outline-primary mr-1' data-localize=web.featured>featured</button><button id=bpStandard type=button class='PowTabs btn btn-outline-primary mx-1' data-localize=web.standard>standard</button><button id=bpRare type=button class='PowTabs btn btn-outline-primary mx-1' data-localize=web.rare>rare</button><button id=bpEpic type=button class='PowTabs btn btn-outline-primary mx-1' data-localize=web.epic>epic</button><button id=bpGroup type=button class='PowTabs btn btn-outline-primary mx-1' data-localize=web.group>group</button><button id=bpGames type=button class='PowTabs btn btn-outline-primary mx-1' data-localize=web.games>games</button><button id=bpCollection type=button class='PowTabs btn btn-outline-primary mx-1' data-localize=web.collection>collection</button><button id=bpAll type=button class='PowTabs btn btn-outline-primary mx-1' data-localize=web.all>all</button></ul>
                  <span class=navbar-text>
                     <div class='searchDiv d-flex'>
                        <label for=search id=sortLabel class=sortLabel></label>
                        <div class=webholder data-localize=web.search>search</div>
                        <input id=search type=search class='searchInput websearch' aria-label=search><button id=morebut class='searchButton btn svgBack searchTap' type=button></button>
                        <div id=searchopts class=dropdown-content>
                           <span class=searchopt data-option=true id=clear data-localize=web.clear>Clear</span><span class=searchopt data-option=true id=sort_az>A-Z</span><span class=searchopt data-option=true id=sort_za>Z-A</span><span class=searchopt data-option=true id=sort_19>1-9</span><span class=searchopt data-option=true id=sort_91>9-1</span><span class=searchopt data-option=true id=sort_price_asc>$?$$</span><span class=searchopt data-option=true id=sort_price_desc>$$?$</span>
                           <span class='searchopt saveFilter' id=saveFilter>
                              <div class='custom-control custom-checkbox'><input type=checkbox class=custom-control-input id=save_filter name=save_filter><label class='custom-control-label cursx' for=save_filter data-localize=web.save>Save</label></div>
                           </span>
                        </div>
                     </div>
                  </span>
               </div>
            </nav>
            <div id=buypowerserr class='alert alert-danger HideDiv ClrErr' role=alert></div>
         </div>
         <form class=needs-validation novalidate>
            <div id=powerslist class=d-none>
               <table>
                  <tr id=powerslist2>
                     <th scope=col data-localize=buy.power class=firstColumn>power</th>
                     <th scope=col id=newCol></th>
                     <th scope=col data-localize=buy.smilie>smiley</th>
                     <th scope=col data-localize=buy.cost>cost</th>
                     <th scope=col data-localize=buy.quantity>quantity</th>
                     <th scope=col data-localize=buy.orcheck>or check</th>
                     <th scope=col><span data-localize=buy.readwell>description</span></th>
               </table>
            </div>
            <div class=container>
               <div class='alert alert-primary HideDiv ClrErr' id=powersTotalerr role=alert></div>
               <div id=buypowersextra class='pb-3 ClrDiv'></div>
               <a data-buy=1 id=buypowersbut href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg alt=store><span data-localize=buy.buypow>buy powers</span></a> (<span data-localize=buy.once>Only click once!</span>) 
            </div>
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
      <script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js></script><script src=/content/web/<?php echo DIRVERSION;?>/lib/jquery.localize.js></script><script src=/content/web/<?php echo DIRVERSION;?>/common.js?z></script><script src=/content/web/<?php echo DIRVERSION;?>/store.js?ab></script>
