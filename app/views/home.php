<!doctype html>
<html lang=en>
   <head>
      <meta http-equiv=Content-Security-Policy content='
         default-src &#39;self&#39;; 
         style-src &#39;self&#39; https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css https://fonts.googleapis.com/;
         connect-src &#39;self&#39; https://<?php echo DOMAIN ?>/; 
         img-src &#39;self&#39; https://*.<?php echo DOMAIN ?>/  https://images.weserv.nl/ http://*.tinypic.com/ https://i.imgur.com/;
         script-src &#39;self&#39; https://<?php echo DOMAIN ?>/      
         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js
         https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.runtime.js;
         frame-src *; 
         base-uri &#39;self&#39;; 
         object-src &#39;none&#39;; 
         form-action https://<?php echo DOMAIN ?>/'>
      <meta charset=utf-8>
      <meta name=viewport content='width=device-width,initial-scale=1,shrink-to-fit=no'>
      <meta name=description content=<?php echo XAT_NAME ?>>
      <title><?php echo XAT_NAME ?></title>
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
   <body>
      <nav id=navTop class='navbar navbar-expand-lg navbar-dark fixed-top gradback p-0'>
         <div class=header-flex>
            <div><a class='navbar-brand p-0 m-0 ml-2 peShiner' href=https://<?php echo DOMAIN ?>><img id=navLogo src=/content/web/<?php echo DIRVERSION;?>/img/xatplanet.svg height=60 alt=logo></a></div>
            <div class=logoname-flex>
               <div id=groupName></div>
               <div id=groupDescription></div>
            </div>
         </div>
         <button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavDropdown aria-controls=navbarNavDropdown aria-expanded=false aria-label='Toggle navigation'><span class=navbar-toggler-icon></span></button>
         <div class='collapse navbar-collapse'id=navbarNavDropdown>
            <ul class='navbar-nav ml-auto mobpad'>
               <li class=nav-item><a id=newStf target=_blank class='nav-link d-none'href='https://util.<?php echo DOMAIN ?>/wiki/index.php?title=HTML5'><img class=newstfic src=/content/web/<?php echo DIRVERSION;?>/img/navbar/pointing.svg alt=pointing width=35><button type=button class='btn btn-primary btn-sm newstfbut'><span data-localize=web.newstf>new stuff!</span><span id=newV></span></button></a></li>
               <li class='nav-item dropdown'>
                  <a id=navGroups class='nav-link dropdown-toggle'href=# data-toggle=dropdown aria-haspopup=true aria-expanded=false><img class=mr-1 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/groups.svg alt=groups><span data-localize=web.groups>groups</span></a>
                  <div id=navGroupsItems class=dropdown-menu aria-labelledby=navGroups>
                     <a id=navCreate class=dropdown-item href=//<?php echo DOMAIN ?>/create><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/community.svg alt=creategroup><span data-localize=web.create>create</span></a>
                     <div class=dropdown-divider></div>
                     <a id=navGroupsFeatured class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/featured.svg alt=featured><span data-localize=web.featured>featured</span></a><a id=navGroupsPopular class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/popular.svg alt=popular><span data-localize=web.popular>popular</span></a><a id=navGroupsSupported class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/supported.svg alt=supported><span data-localize=web.supported>supported</span></a><a id=navGroupsGames class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/games.svg alt=groups><span data-localize=web.games>games</span></a>
                     <div class=dropdown-divider></div>
                     <a id=navGroupsSearch class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/search.svg alt=search><span data-localize=web.search>search</span></a>
                     <div class=dropdown-divider></div>
                     <a id=navGroupsHelp class=dropdown-item href='https://<?php echo DOMAIN ?>/web_gear/chat/chats.php?v=yHv2&type=help'><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/help.svg alt=help><span data-localize=web.help>help</span></a><a id=navGroupsTrade class=dropdown-item href='https://<?php echo DOMAIN ?>/web_gear/chat/chats.php?v=yHv2&type=trade'><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/trade.svg alt=trade><span data-localize=web.trade>trade</span></a>
                  </div>
               </li>
               <li class='nav-item dropdown'>
                  <a id=navStore class='nav-link dropdown-toggle'href=# data-toggle=dropdown aria-haspopup=true aria-expanded=false><img class=mr-1 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/store.svg alt=store><span data-localize=web.store>store</span></a>
                  <div class=dropdown-menu aria-labelledby=navStore>
                     <a id=navStoreBuyXats class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/store.html#buy><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/buyxats.svg alt=buyxats><span data-localize=web.buyxats>buy <?php echo XAT_NAME ?>s & days</span></a>
                     <div class=dropdown-divider></div>
                     <a id=navStorePowers class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/store.html#powers><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/powers.svg alt=powers><span data-localize=web.powers>powers</span></a><a id=navStoreShortName class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/store.html#shortname><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/shortname.svg alt=shortname><span data-localize=web.shortname>short name</span></a><a id=navStoreAuctions class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/store.html#auctions><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/auctions.svg alt=auctions><span data-localize=web.auctions>auctions</span></a><a id=navStorePromotion class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/store.html#promotion><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/promotion.svg alt=promotion><span data-localize=web.promotion>promotion</span></a><a id=navStoreAds class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/store.html#ads><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/ads.svg alt=ads><span data-localize=web.ads>ads</span></a><a id=navStoreBuyGroup class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/store.html#groups><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/buygroup.svg alt=group><span data-localize=web.buygroup>groups</span></a>
                  </div>
               </li>
               <li class='nav-item dropdown'>
                  <a id=navxat class='nav-link dropdown-toggle'href=# data-toggle=dropdown aria-haspopup=true aria-expanded=false><img class=mr-0 src=/content/web/<?php echo DIRVERSION;?>/img/xatplanet.svg alt=<?php echo XAT_NAME ?>><span data-localize=web.xat><?php echo XAT_NAME ?></span></a>
                  <div class=dropdown-menu aria-labelledby=navxat>
                     <a id=navxatApps class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/apps.svg alt=wiki><span data-localize=web.apps>apps</span></a><a id=navxatWiki class=dropdown-item href=//<?php echo DOMAIN ?>/wiki><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/wiki.svg alt=wiki><span data-localize=web.wiki>wiki</span></a><a id=navxatForum class=dropdown-item href=//<?php echo DOMAIN ?>/forum><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/popular.svg alt='forum & forum'><span data-localize=web.forum>forum</span></a><a id=navxatSupport class=dropdown-item href=//<?php echo DOMAIN ?>/support><img class='mr-2 grlsupport'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/support.svg alt=support><span data-localize=web.support>support</span></a><a id=navxatTicket class=dropdown-item href=//<?php echo DOMAIN ?>/ticket><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/ticket.svg alt='open ticket'><span data-localize=web.ticket>ticket</span></a><a id=navxatTwitter class=dropdown-item href=//<?php echo DOMAIN ?>/twitter><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/twitter.svg alt='<?php echo XAT_NAME ?> twitter'><span data-localize=web.twitter>twitter</span></a><a id=navxatFacebook class=dropdown-item href=//<?php echo DOMAIN ?>/facebook><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/facebook.svg alt='<?php echo XAT_NAME ?> facebook'><span data-localize=web.facebook>facebook</span></a><a id="navxatInstagram" class="dropdown-item" href="//<?php echo DOMAIN ?>/instagram" target="_blank"><img class="mr-2" src="/content/web/<?php echo DIRVERSION;?>/img/navbar/instagram.svg" alt="<?php echo XAT_NAME ?> instagram" width="19"><span>instagram</span></a><a id=navxatHtml5 class='dropdown-item h5logs'href='//util.<?php echo DOMAIN ?>/HTML5'><img class=mr-2 width=25 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/html5.svg alt=changelogs><span data-localize=web.changelogs class=h5logsicon>changelogs</span></a>
                     <div class=dropdown-divider></div>
                     <a id="navxatBot" class="dropdown-item" href="//<?php echo DOMAIN ?>/bot"><img class="mr-2" src="/content/web/<?php echo DIRVERSION;?>/img/navbar/bot.svg" alt="bot"><span data-localize="web.bot">bot</span></a><!----<a id="navxatTools" class="dropdown-item" href="//<?php echo DOMAIN ?>/tools"><img class="mr-2" src="/content/web/<?php echo DIRVERSION;?>/img/navbar/tools.svg" alt="tools"><span data-localize="web.tools">tools</span></a>----->
                     <div class=dropdown-divider></div>
                     <a id=navxatPrivacy class=dropdown-item href=# data-toggle=modal data-target=#privacyModal><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/privacy.svg alt=privacy><span data-localize=web.privacy>privacy/cookies</span></a><a id=navxatTerms class=dropdown-item href=# data-toggle=modal data-target=#termsModal><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/terms.svg alt=terms><span data-localize=web.terms>terms of service</span></a><a id=navxatSafety class=dropdown-item href=//<?php echo DOMAIN ?>/safety><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/safety.svg alt=safety><span data-localize=web.safety>safety</span></a><span class=d-none id=date>Sat Oct 10 2020 07:31:01 GMT+0100 (BST)</span>
                  </div>
               </li>
               <li id=rankdrop class='nav-item dropdown'>
                  <a id=navGroup class='nav-link dropdown-toggle'href=# data-toggle=dropdown aria-haspopup=true aria-expanded=false><img class=mr-1 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/group.svg alt=group><span data-localize=web.group>group</span></a>
                  <div class=dropdown-menu aria-labelledby=navGroup><a id=navEmbedGrp class=dropdown-item href=# data-toggle=modal data-target=#embedmodal><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/embed2.svg alt=embed width=19><span data-localize=web.embed>embed</span></a><a id=navGroupEvents class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/events.svg alt=events><span data-localize=web.events>events</span></a><a id=navCustomize class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/customize.svg alt=customize><span data-localize=web.customize>customize</span></a><a id=navSendMessage class=dropdown-item href=# data-toggle=modal data-target=#msgModal><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/message.svg alt=message><span data-localize=web.message>send message</span></a><a id=navInapp class=dropdown-item href=# data-toggle=modal data-target=#inappModal><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/inappropriate.svg alt=inappropriate><span data-localize=web.inappropriate>inappropriate</span></a><a id=navIframe class=dropdown-item href=# data-toggle=modal data-target=#iframeModal><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/xatframe.svg alt=xatframe width=21><span class=h5logs><?php echo XAT_NAME ?>frame</span></a></div>
               </li>
               <li id=admindrop class='nav-item dropdown d-none'>
                  <a id=navGroup2 class='nav-link dropdown-toggle'href=# data-toggle=dropdown aria-haspopup=true aria-expanded=false><img class=mr-1 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/group.svg alt=group><span data-localize=web.group>group</span></a>
                  <div class=dropdown-menu aria-labelledby=navGroup2>
                     <h6 class='dropdown-header text-center p-0'><img class=mr-0 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=account>Main Owner</h6>
                     <div class=dropdown-divider></div>
                     <div class=dropdown-divider></div>
                  </div>
               </li>
               <li id=accountdrop class='nav-item dropdown d-none'>
                  <a id=navAccount class='nav-link dropdown-toggle'href=# data-toggle=dropdown aria-haspopup=true aria-expanded=false><img class=mr-0 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=account><span data-localize=web.account>account</span><span id=navAccountBadge class='badge badge-pill badge-primary align-text-top ml-1 mr-1'></span></a>
                  <div class='dropdown-menu dropdown-menu-right'aria-labelledby=navAccount>
                     <h6 id=navUsernameId class='dropdown-header text-center p-0'></h6>
                     <div class=dropdown-divider></div>
                     <a id=navAccountedit class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/xatme.svg alt=edit><span data-localize=web.edit>edit</span></a><a id=navAccountxatme class=dropdown-item href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/pencil2.svg alt=xatme><span data-localize=web.xatme><?php echo XAT_NAME ?>.me</span></a><a id=navSettings class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/login.html#settings><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/settings.svg alt=settings><span data-localize=web.settings>settings</span></a>
                     <div class=dropdown-divider></div>
                     <a id=navLogout class=dropdown-item href=/content/web/<?php echo DIRVERSION;?>/login.html#logout><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/logout.svg alt=logout><span data-localize=web.logout>logout</span></a>
                  </div>
               </li>
               <li class=nav-item><button id=navLogin class='btn btn-outline-primary btn-sm my-2 my-sm-0 mr-1'type=button><img class=mr-0 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=account><span data-localize=web.login>login</span></button><button id=navRegister class='btn btn-primary btn-sm my-2 my-sm-0 mr-1'type=button><img class=mr-0 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/account.svg alt=account><span data-localize=web.register>register</span></button></li>
               <li class='nav-item dropdown'>
                  <a id=navLang class='nav-link dropdown-toggle'href=# data-toggle=dropdown aria-haspopup=true aria-expanded=false><img class='mr-0 globe'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/globe.svg width=18 alt=globe></a>
                  <div id=langdropdownitems class='dropdown-menu dropdown-menu-right'aria-labelledby=navLang></div>
               </li>
            </ul>
         </div>
      </nav>
      <div id=hero class='pt-5 pb-5 pbsm'>
         <div class=container>
            <div class='row animated fadeInDown'>
               <div>
                  <div id=myCarousel class='carousel slide' data-ride=carousel data-interval=false>
                     <div class=carousel-inner>
                        <div class='carousel-item active'>
                           <div class=container>
                              <div class=row>
                                 <div class=col-sm>
                                    <div id=xatbox>
                                       <div class=xatbox><iframe name=box width=728 height=486 id=embedframe class=hmemb></iframe></div>
                                       <div id=promo></div>
                                    </div>
                                 </div>
                                 <div class=col-sm>
                                    <div id=newto class=container-fluid>
                                       <h1 data-localize=index.new id=newtoxat>new to <?php echo XAT_NAME ?>?</h1>
                                       <p id=newtodesc data-localize=index.newt>Register an account. Find a <?php echo XAT_NAME ?> group that shares your interests. Make your own <?php echo XAT_NAME ?> group. Get and trade Powers. Play a multiplayer game. Design your own animated avatar character. Send stickers with custom text.</p>
                                       <a href=#myCarousel data-slide=next class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/help.svg><span data-localize=index.newb>learn more</span></a>
                                       <p class=pt-4><span data-localize=index.follow>Follow <?php echo XAT_NAME ?> on</span>:
                                          <a href=//<?php echo DOMAIN ?>/twitter target=_blank><img class='ml-2 mr-2 mb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/twitter.svg alt='<?php echo XAT_NAME ?> twitter' width=22></a><a href=//<?php echo DOMAIN ?>/facebook target=_blank><img class='mr-2 mb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/facebook.svg alt='<?php echo XAT_NAME ?> facebook' width=22></a><a href=//<?php echo DOMAIN ?>/instagram target=_blank><img class='mr-2 insta' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/instagram.svg alt='<?php echo XAT_NAME ?> instagram' width=22></a>
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class=carousel-item>
                           <div class=container>
                              <div class=row>
                                 <div class='col-sm span6 animated fadeInUpBig'><img src=/content/web/<?php echo DIRVERSION;?>/img/home/tourgroup.png alt=group class='img-fluid himgs1 himgs4'></div>
                                 <div class='col-sm span4 animated fadeInDownBig'>
                                    <h1 data-localize=index.group>create a <?php echo XAT_NAME ?> group</h1>
                                    <p data-localize=index.groupt>Your own <?php echo XAT_NAME ?> group could be for particular subject (e.g. music, anime, video games), for the visitors to your site or just for you and your friends. You can use it on <?php echo XAT_NAME ?> or embed it on your site. Groups are fully customizeable and can be members only if you want to restrict it to your friends.</p>
                                    <a href=//<?php echo DOMAIN ?>/create class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/community.svg><span data-localize=index.groupb>create <?php echo XAT_NAME ?> group</span></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class=carousel-item>
                           <div class=container>
                              <div class=row>
                                 <div class='col-sm span4 animated fadeInUpBig'>
                                    <h1 data-localize=index.powers>powers</h1>
                                    <p data-localize=index.powerst>You can use your xats and days to buy special powers for the <?php echo XAT_NAME ?> box. These include sets of custom smilies, special effects and abilities and group powers which add extra features to your <?php echo XAT_NAME ?> group. Learn more about all the available powers on the <a href=//util.<?php echo DOMAIN ?>/wiki/index.php/Powers><?php echo XAT_NAME ?> wiki</a>.</p>
                                    <a href=//<?php echo DOMAIN ?>/powers class='btn btn-primary btn-large'><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/powers.svg><span data-localize=index.powersb>get powers</span></a>
                                 </div>
                                 <div class='col-sm span6 animated fadeInDownBig'><img src=/content/web/<?php echo DIRVERSION;?>/img/home/tourpowers.png alt=powers class='img-fluid himgs1 himgs3 pt-1'></div>
                              </div>
                           </div>
                        </div>
                        <div class=carousel-item>
                           <div class=container>
                              <div class=row>
                                 <div class='col-sm span4 animated fadeInUpBig cncaro'>
                                    <h1 data-localize=index.trade>trade powers</h1>
                                    <p data-localize=index.tradet>You can trade powers with other <?php echo XAT_NAME ?> users. If you are skillful you can earn a profit, buy low and sell high. <a href=//<?php echo DOMAIN ?>/trade?new><?php echo XAT_NAME ?> trade</a> is a stock exchange where traders meet.</p>
                                    <a href=//<?php echo DOMAIN ?>/trade?new class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/trade.svg><span data-localize=index.tradeb>start trading</span></a>
                                 </div>
                                 <div class='col-sm span6 animated fadeInDownBig'><img src=/content/web/<?php echo DIRVERSION;?>/img/home/tourtrade.png alt=trade class=img-fluid></div>
                              </div>
                           </div>
                        </div>
                        <div class=carousel-item>
                           <div class=container>
                              <div class=row>
                                 <div class='col-sm span6 animated fadeInUpBig'><img src=/content/web/<?php echo DIRVERSION;?>/img/home/tourgames.png alt=games class='img-fluid himgs1 himgs3'></div>
                                 <div class='col-sm span4 animated fadeInDownBig'>
                                    <h1 data-localize=index.games>games</h1>
                                    <p data-localize=index.gamest>Play games against your friends or randoms.
                                       <br>Compete to be the fastest in the race games or evade bans with the ban games. <a href='//<?php echo DOMAIN ?>/game?ss=10000'>Doodle</a> is a freeform co-operative drawing app. <a href='//<?php echo DOMAIN ?>/game?ss=60189'>DoodleRace</a> gives you something to draw and then you vote on whose drawing was the best. Also try the new <a href='//<?php echo DOMAIN ?>/game?ss=60225'>Hearts</a> card game.
                                    </p>
                                    <a href=//<?php echo DOMAIN ?>/game class='btn btn-primary btn-large'><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/games.svg><span data-localize=index.gamesb>play now</span></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class=carousel-item>
                           <div class=container>
                              <div class=row>
                                 <div class='col-sm span4 animated fadeInDownBig cncaro'>
                                    <h1 data-localize=index.xavi>xavi animated character</h1>
                                    <p><span data-localize=index.xavide>Design your own custom animated character with the Xavi app and watch it respond to what you type. Choose from a variety of accessories, hairstyles, colors and much more!</span><small>(<span data-localize=web.reqxavi>Requires Xavi power</span>)</small></p>
                                    <a href='//<?php echo DOMAIN ?>/chat?new&open=20047' target=_blank class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/xavi.svg><span data-localize=index.xavib>make your xavi</span></a>
                                 </div>
                                 <div class='col-sm span6 animated fadeInUpBig'><img src=/content/web/<?php echo DIRVERSION;?>/img/home/tourxavi.png alt=xavis class='img-fluid himgs2 pt-1'></div>
                              </div>
                           </div>
                        </div>
                        <div class=carousel-item>
                           <div class=container>
                              <div class=row>
                                 <div class='col-sm span6 animated fadeInUpBig'><img src=/content/web/<?php echo DIRVERSION;?>/img/home/tourstickers.png alt=xavis class='img-fluid himgs2'></div>
                                 <div class='col-sm span6 animated fadeInDownBig'>
                                    <h1 data-localize=index.stickers>stickers</h1>
                                    <p><span data-localize=index.stickersde>Stickers to share in your conversations! You can even personalize them with your own custom colored text.</span><small>(<span data-localize=index.reqstickers>Requires Sticker powers</span>)</small></p>
                                    <a href='//<?php echo DOMAIN ?>/chat?new&open=selector.Stickers' target=_blank class='btn btn-primary btn-large'><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/stickersf.svg width=21 alt=stickers><span data-localize=index.xavib>see stickers</span></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a class='xcarousel-control xleft' href=#myCarousel data-slide=prev><img class='ximg p-2' src=/content/web/<?php echo DIRVERSION;?>/img/leftarrow.svg alt=prev></a><a class='xcarousel-control xright' href=#myCarousel data-slide=next><img class='ximg p-2' src=/content/web/<?php echo DIRVERSION;?>/img/rightarrow.svg alt=next></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id=groups class='groups_page mt-4'>
         <div class=container>
            <div class=row>
               <div class=col-lg-4>
                  <h2 class='section_header left'><span data-localize=groups.xatgroups><?php echo XAT_NAME ?> groups</span></h2>
               </div>
               <div class=col-lg-8>
                  <div class='float-right smgrps smgrpsmar'>
                     <span class=d-none id=findout data-localize=groups.findout>find out what people are talking about</span>
                     <form method=post action=//<?php echo DOMAIN ?>/web_gear/chat/search.php class='form-search form-span inline-center'>
                        <div id=searchdiv class='input-group mb-3'>
                           <input id=searchBox name=search class=form-control placeholder='find out what people are talking about' aria-label=search aria-describedby=basic-addon2>
                           <div class=input-group-append><button class='btn btn-outline-secondary' type=submit><img class='mr-2 search' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/search.svg><span data-localize=web.search>search</span></button></div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div class='row mt-4 mb-2'>
               <div class=col-lg-8>
                  <ul class='nav nav-pills homenav'>
                     <li class=nav-item><a class=nav-link id=xfeatured href=#><img class='mr-2 pb-1' src=/content/web/<?php echo DIRVERSION;?>/img/navbar/featured.svg><span data-localize=groups.featured>featured</span></a></li>
                     <li class=nav-item><a class=nav-link id=xpopular href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/popular.svg><span data-localize=groups.popular>popular</span></a></li>
                     <li class=nav-item><a class=nav-link id=xsupported href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/supported.svg><span data-localize=groups.supported>supported</span></a></li>
                     <li class=nav-item><a class=nav-link id=xgames href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/games.svg><span data-localize=groups.games>games</span></a></li>
                  </ul>
               </div>
               <div class=col-lg-4>
                  <nav aria-label='' class='float-right smgrps smgrpsmar'>
                     <ul class='pagination pagination-right'>
                        <li class=page-item><a class=page-link id=prev href=# aria-label=Previous><span aria-hidden=true>«</span><span class=sr-only>Previous</span></a></li>
                        <li class='page-item active'><a class=page-link id=p1 href=#>1</a></li>
                        <li class=page-item><a class=page-link id=p2 href=#>2</a></li>
                        <li class=page-item><a class=page-link id=p3 href=#>3</a></li>
                        <li class=page-item><a class=page-link id=p4 href=#>4</a></li>
                        <li class=page-item><a class=page-link id=p5 href=#>5</a></li>
                        <li class=page-item><a class=page-link id=next href=# aria-label=Next><span aria-hidden=true>»</span><span class=sr-only>Next</span></a></li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div class=row>
               <div id=thumbs class='span12 w-100'></div>
            </div>
            <div class=row>
               <div class=col-lg>
                  <nav aria-label='' class='float-right smgrps'>
                     <ul class='pagination pagination-right'>
                        <li class=page-item><a class=page-link id=xprev href=# aria-label=Previous><span aria-hidden=true>«</span><span class=sr-only>Previous</span></a></li>
                        <li class='page-item active'><a class=page-link id=pp1 href=#>1</a></li>
                        <li class=page-item><a class=page-link id=pp2 href=#>2</a></li>
                        <li class=page-item><a class=page-link id=pp3 href=#>3</a></li>
                        <li class=page-item><a class=page-link id=pp4 href=#>4</a></li>
                        <li class=page-item><a class=page-link id=pp5 href=#>5</a></li>
                        <li class=page-item><a class=page-link id=xnext href=# aria-label=Next><span aria-hidden=true>»</span><span class=sr-only>Next</span></a></li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </div>
      <footer id=footer class='pt-2 py-2'>
         <div class='container text-center'><span class='d-flex justify-content-center'><a id=navLang class='nav-link mr-1 footer-icons'href=//<?php echo DOMAIN ?>/twitter target=_blank><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/twitter_white.svg width=18 alt=twitter></a> <a id=navLang class='nav-link mr-1 footer-icons'href=//<?php echo DOMAIN ?>/facebook target=_blank><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/facebook_white.svg width=18 alt=facebook></a> <a id=navLang class='nav-link footer-icons'href=//<?php echo DOMAIN ?>/instagram target=_blank><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/instagram_white.svg width=18 alt=instagram></a> </span> <span><a id=navxatPrivacy href=# data-toggle=modal data-target=#privacyModal><span data-localize=web.privacy>privacy/cookies</span></a> <span>•</span> <a href=https://<?php echo DOMAIN ?>/terms target=_blank><span data-localize=web.terms>terms of service</span></a> <span>•</span> <a href=https://<?php echo DOMAIN ?>/safety target=_blank><span data-localize=web.safety>safety</span></a> <span>•</span> <span>© <span id=copyrightyear></span> <?php echo XAT_NAME ?></span></span></div>
      </footer>
      <div id=cookiePopup class='alert alert-dismissible text-center cookiePopup' role=alert>
         <div><span data-localize=web.privacyterms><?php echo XAT_NAME ?> uses <a href=https://<?php echo DOMAIN ?>/privacy target=_blank>cookies</a> and your use is subject to <a href="https://<?php echo DOMAIN ?>/terms" target=_blank>terms</a></span><button id=cookieAgree type=button class='btn btn-primary btn-sm cookieButton' aria-label=accept><span data-localize=web.agree>agree</span></button><button id=cookieSettings type=button class='btn btn-outline-secondary btn-sm cookieButton' aria-label=settings><span data-localize=web.settings>settings</span></button></div>
      </div>
      <div id=embedDialog></div>
      <div id=sendMessageDialog></div>
      <div id=inappDialog></div>
      <div id=termsDialog></div>
      <div id=privacyDialog>
         <div class='modal fade'id=privacyModal tabindex=-1 role=dialog aria-labelledby=privacyModalLabel aria-hidden=true>
            <div class='modal-dialog mw-100 w-75'role=document>
               <div class=modal-content>
                  <div class=modal-header>
                     <h5 class=modal-title id=inappModalLabel><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/terms.svg alt=terms><span data-localize=web.preferences>privacy preferences</span></h5>
                     <button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>×</span></button>
                  </div>
                  <div class=modal-body>
                     <div id=privacyGroupFrame class='alert alert-danger d-none'role=alert>
                        <h4 class=text-center><span data-localize=web.triedtab>you tried to open a group tab</span></h4>
                        <p><strong id=privacyGroupUrl></strong><span data-localize=web.tabblocked>has been blocked due to your privacy preferences. Opening this tab is the same as visiting a third party website. You can 'allow this time' or change your 'group tabs' privacy preferences below.</span></p>
                        <div class='d-flex p-1 justify-content-end'><button id=privacyGroupButton type=button class='btn btn-primary'><span data-localize=web.allow>allow this time</span></button></div>
                     </div>
                     <div class='container card mb-4 pt-2 pb-2'>
                        <div class=row>
                           <div class=col><span data-localize=web.necessary>necessary cookies</span><br><small><span data-localize=web.operate>These are necessary for this service to operate. They mainly store your preferences and settings.</span><a href=/privacy><span data-localize=web.learnmoreper>Learn more</span></a></small></div>
                           <div class='col-ms-auto mr-2'><label class=switch><input id=privacyNecessary type=checkbox checked><span class='slider round'></span></label></div>
                           <div class='w-100 mb-3'></div>
                           <div class=col><span data-localize=web.performance>performance cookies</span><br><small><span data-localize=web.optional>These are used to improve the performance of the service. The service can operate without these.</span><a href=/privacy><span data-localize=web.learnmoreper>Learn more</span></a></small></div>
                           <div class='col-ms-auto mr-2'><label class=switch><input id=privacyPerformance type=checkbox checked><span class='slider round'></span></label></div>
                           <div class='w-100 mb-3'></div>
                           <div class=col><span data-localize=web.grouptabs>group tabs (third party)</span><br><small><span data-localize=web.allowstabs>This option allows third party content to open automatically on all <?php echo XAT_NAME ?> groups.</span><a href=/privacy><span data-localize=web.learnmorethird>Learn more</span></a></small></div>
                           <div class='col-ms-auto mr-2'><label class=switch><input id=privacyGroups type=checkbox><span class='slider round'></span></label></div>
                        </div>
                     </div>
                  </div>
                  <div class=modal-footer><button id=openPolicy type=button class='btn btn-info'data-dismiss=modal><span data-localize=web.policy>privacy policy</span></button><button id=privacyClose type=button class='btn btn-primary'><span data-localize=web.close>close</span></button></div>
               </div>
            </div>
         </div>
      </div>
      <div id=languageDialog></div>
      </script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.runtime.js></script><script src=/content/web/<?php echo DIRVERSION;?>/lib/jquery.localize.js></script><script src=/content/web/<?php echo DIRVERSION;?>/common.js?z></script><script src='/content/web/<?php echo DIRVERSION;?>/direct.js?z=Tgtx3eg#'></script>
	  <style>
		body {
			margin-top: 69px;
		}
		/* width */
		 ::-webkit-scrollbar {
			width: 10px;
		 }
		 /* Track */
		 ::-webkit-scrollbar-track {
			background: #f1f1f1; 
		 }
		 /* Handle */
		 ::-webkit-scrollbar-thumb {
			background: #000000; 
		 }
		 /* Handle on hover */
		 ::-webkit-scrollbar-thumb:hover {
			background: #555; 
		 }
		#xatbox {
			text-align: center;
			color: aliceblue;
		}
		#hero {
			background-position: center;
			background-repeat: no-repeat;
			background-image: url(<?php echo I_BACKGROUND;?>);
			margin-bottom: 1rem;
			color: #ffffff;
			background-size: cover;
		}
	</style>
