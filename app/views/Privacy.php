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
         https://<?php echo XAT_NAME ?>.wiki/
         img-src 
         &#39;self&#39;
         https://*.<?php echo DOMAIN ?>/
         https://<?php echo DOMAIN ?>/ 
         https://<?php echo XAT_NAME ?>.wiki/
         https://images.weserv.nl/;
         script-src
         &#39;self&#39; 
         https://<?php echo DOMAIN ?>/
         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
         https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js
         https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js
         https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/1.0.11/jquery.csv.js
         https://www.google-analytics.com/ 
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
      <meta name=description content='Make use of <?php echo XAT_NAME ?> tools.'>
      <title><?php echo XAT_NAME ?></title>
      <script type=application/json id=xjson> {"type":"home","dir":"/content/web/<?php echo DIRVERSION;?>/"} </script> 
      <link href=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css rel=stylesheet>
      <link href=/content/web/<?php echo DIRVERSION;?>/direct.css rel=stylesheet>
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
   <body class=invisible id=toolsbody>
      <nav id=navTop class='navbar navbar-expand-md navbar-dark fixed-top gradback p-0'>
         <div class=header-flex>
            <div> <a class='navbar-brand p-0 m-0 ml-2' href=https://<?php echo DOMAIN ?>> <img id=navLogo src=/content/web/<?php echo DIRVERSION;?>/img/xatplanet.svg height=50 alt=logo> </a> </div>
            <div class=logoname-flex>
               <div id=groupName><?php echo XAT_NAME ?> <span data-localize=tools.tools id=pdtools>tools</span></div>
               <div id=groupDescription></div>
            </div>
         </div>
         <span id=statnav></span> 
      </nav>
      <div class=container id=checktools>
         <div class='text-center mb-3 xbanner'><iframe title='<?php echo XAT_NAME ?> banner'width=728 height=90 id=promoframe src=/content/web/<?php echo DIRVERSION;?>/apps/ad/ad.html scrolling=no sandbox='allow-scripts allow-same-origin allow-top-navigation'></iframe></div>
         <nav class='navbar navbar-expand-lg navbar-light bg-light newnav'>
            <a class='navbar-brand newbartitle'href=# data-localize=web.menu>menu</a> <button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNavStore aria-controls=navbarNavStore aria-expanded=false aria-label='Toggle navigation'> <span class='navbar-toggler-icon darktoggle'></span> </button> 
            <div class='collapse navbar-collapse'id=navbarNavStore>
               <div class=navbar-nav>
                  <li class=nav-item><a id=tabsearch class='NavTabs nav-link'href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/search.svg alt=search><span data-localize=tools.search>search</span></a></li>
                  <li class=nav-item><a id=tabanimation class='NavTabs nav-link'href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/animate.svg alt=animation><span data-localize=tools.animate>convert animation</span></a></li>
                  <li class='nav-item d-none'><a id=tabshuffle class='NavTabs nav-link'href=#><img class=mr-2 src=/content/web/<?php echo DIRVERSION;?>/img/navbar/shuffle.svg alt=shuffle><span data-localize=tools.shuffle>convert shuffle</span></a></li>
               </div>
            </div>
         </nav>
         <div id=search class='d-none HideDiv'>
            <h1><span data-localize=tools.searchchats>search chats</span></h1>
            <p data-localize=tools.searchdesc>Find out what people are talking about.</p>
            <form id=searchSubmit accept-charset=UTF-8>
               <div id=searcherror class='alert alert-danger d-none'role=alert> <span data-localize=tools.errorreq>Something went wrong! Please try again later</span> </div>
               <div id=searchloading class='alert alert-info d-none'role=alert> <span data-localize=tools.pleasewaitsearch>Please wait while we are looking for results..</span> </div>
               <div class='alert alert-danger d-none'data-no-result-div> <span data-localize=tools.nosearchres data-no-result>No results found</span> </div>
               <div class=mb-3>
                  <label for=searchValue data-localize=tools.search>search</label>: <input name=searchValue class=form-control id=searchValue required> 
                  <div class=lostpass><span data-localize=tools.searchinfo>Private Chats, Private Messages, Members Only, Don't List and Don't Store are NOT searchable. <a href=https://wiki.<?php echo DOMAIN ?>/Search target=_blank>More Information about search</a>.</span></div>
               </div>
               <div> <button type=submit id=butsearch href=# class='btn btn-primary btn-large'> <img class='mr-2 pb-1'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/search.svg alt=search> <span data-localize=tools.search>search</span> </button> </div>
            </form>
            <div class='mb-5 mt-3 d-none'data-search-results>
               <h2 class=mb-3 data-localize=tools.results>Results:</h2>
               <div></div>
               <button type=button id=butpreviousresults href=# class='btn btn-primary btn-large'> <span data-localize=tools.moreresults>More results</span> </button> 
            </div>
         </div>
         <div id=animation class='d-none HideDiv'>
            <h1><span data-localize=tools.animate>convert animation</span></h1>
            <p data-localize=tools.animatedesc>A strip of pictures is required in order to produce an animated GIF. To create a strip, select a GIF file from your computer. Click convert to download the JPG/PNG strip. Finally, upload the strip to an <a href=https://wiki.<?php echo DOMAIN ?>/Images target=_blank>image host</a>.</p>
            <div class='mb-3 alert alert-danger d-none'id=animation_error> <span data-localize=tools.mustbeagif>Your image must be a gif</span> </div>
            <div id=animationerror class='alert alert-danger HideDiv ClrErr'role=alert></div>
            <div id=animationloading class='alert alert-info d-none'role=alert> <span data-localize=tools.pleasewait>Please wait while we are converting your gif..</span> </div>
            <div id=animationreqerror class='alert alert-danger d-none'role=alert> <span data-localize=tools.errorreq>Something went wrong! Please try again later</span> </div>
            <div class=mb-3> <label for=imgname data-localize=tools.name>name</label>: <input name=Name class=form-control id=animateName required> </div>
            <div class=mb-3>
               <label for=imgname data-localize=tools.image>image</label>: 
               <div class=custom-file> <input type=file name=file class=custom-file-input id=animateFile required> <label class=custom-file-label for=animateFile data-localize=tools.selectgif>Select GIF</label> </div>
            </div>
            <div> <a id=convert href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/convert.svg alt=convert><span data-localize=tools.convert>convert</span></a> </div>
         </div>
         <div id=shuffle class='d-none HideDiv'>
            <h1><span data-localize=tools.shuffle>convert shuffle</span></h1>
            <p data-localize=tools.shuffledesc>This tool will help make a strip of pictures required for shuffle power. Select pictures from your computer. Click convert to download the JPG strip and then upload to an <a href=https://wiki.<?php echo DOMAIN ?>/Images target=_blank>image host</a>.</p>
            <div class=mb-3> <label for=imgname data-localize=tools.name>name</label>: <input name=Name class=form-control id=imgname required> </div>
            <div class=mb-3>
               <label for=imgname data-localize=tools.image>image</label> (1): 
               <div class=custom-file> <input type=file name=file1 class=custom-file-input id=inputGroupFile required> <label class=custom-file-label for=inputGroupFile data-localize=tools.selectimg>Select image</label> </div>
            </div>
            <div class=mb-3>
               <label for=imgname2 data-localize=tools.image>image</label> (2): 
               <div class=custom-file> <input type=file name=file2 class=custom-file-input id=inputGroupFile2 required> <label class=custom-file-label for=inputGroupFile2 data-localize=tools.selectimg>Select image</label> </div>
            </div>
            <span id=addfield></span> 
            <div class='tabstopspace bottombuttons'> <a id=add_field class='btn btn-primary btn-large addfield'><img class='mr-2 pb-1'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/plus.svg alt=convert><span data-localize=tools.addfield>add field</span></a> <a id=convert href=# class='btn btn-primary btn-large'><img class='mr-2 pb-1'src=/content/web/<?php echo DIRVERSION;?>/img/navbar/convert.svg alt=convert><span data-localize=tools.convert>convert</span></a> </div>
         </div>
      </div>
      <div id=maintenance class='d-none container'>
         <div class=mt-4>
            <h3 data-localize=tools.updated class=mb-4><?php echo XAT_NAME ?> is being updated</h3>
            <p data-localize=tools.cannot>During this time you cannot create new stuff or edit your existing group.</p>
            <p data-localize=tools.sorry>Sorry for the delay, we will be back soon!</p>
            <a href=https://<?php echo DOMAIN ?>/ ><img class='mt-4 xplanet'src=/content/web/<?php echo DIRVERSION;?>/img/xatplanet.svg alt='<?php echo XAT_NAME ?> logo'width=100></a> 
         </div>
         <div class=history>
            <p class=oldtext data-localize=tools.did>Did you know?</p>
            <p class='d-none rhistory1'data-localize=tools.first>The first <?php echo XAT_NAME ?> chat was created in 2006.</p>
            <p class='d-none rhistory2'data-localize=tools.founded><?php echo XAT_NAME ?> was first founded as an Image Optimizer.</p>
            <p class='d-none rhistory3'data-localize=tools.topman>Topman was the first <?php echo XAT_NAME ?> power.</p>
            <a href=https://xat.wiki/history data-localize=tools.history>Learn more about <?php echo XAT_NAME ?>'s history.</a> 
         </div>
         <span class='d-flex justify-content-center mt-2'> <a class='nav-link ftright footer-icons footLang'href=//<?php echo DOMAIN ?>/twitter rel=noopener target=_blank><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/twitter_white.svg width=32 alt=twitter></a> <a class='nav-link ftright footer-icons footLang'href=//<?php echo DOMAIN ?>/facebook rel=noopener target=_blank><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/facebook_white.svg width=32 alt=facebook></a> <a class='nav-link ftlast footer-icons footLang'href=//<?php echo DOMAIN ?>/instagram rel=noopener target=_blank><img src=/content/web/<?php echo DIRVERSION;?>/img/navbar/instagram_white.svg width=32 alt=instagram></a> </span> 
      </div>
      <div id=terms class='d-none container'>
         <h1>Terms of Service</h1>
         <h3 class=mb-4>Your use of the service is subject to Terms and Conditions.</h3>
         <h5 class=heading>1. Use of Service</h5>
         <p>The service is not intended for use by individuals under the age of 14. If you are a under the age of 18, you can use the service only with the agreement of, and under the supervision of, your parent or guardian. You are responsible and liable for all your activities while using the service. The use of the service is entirely at your own risk. Your activities on the service are not private; do not transmit anything that you would not want the world to be able to see.</p>
         <p>The service may not be used to transmit material, links or references to material which:<br> is unlawful, hateful, offensive, vulgar, abusive, defamatory, obscene or sexually explicit, promotes self harm<br> is intended to harass, stalk, intimidate, threaten, victimize, deceive, degrade, embarrass, cause distress or discomfort<br> contains direct threats of violence or depicts violence gratuitously<br> promotes any dangerous or illegal activity<br> contains or solicits personal information<br> infringes anyone else's intellectual property rights<br> violates proprietary rights of any person<br> impersonates or represents another person<br> is otherwise deemed inappropriate by <?php echo DOMAIN ?><br> <?php echo DOMAIN ?> does not promote groups or users that are based on religious or political views</p>
         <h5 class=heading>2. Restrictions</h5>
         <p>You will not disrupt the operation of the service<br> You will not act in a manner that negatively affect other users enjoyment of the service<br> You will not harvest or collect material or user information from the service<br> You will not attempt to access or access any account that is not yours <br> You will not use automated means to perform interactions with <?php echo DOMAIN ?>'s systems without permission from <?php echo DOMAIN ?>, except public search engines<br> You will not modify, adapt, translate, or reverse engineer any portion of the service<br> You will not resell the service without permission from <?php echo DOMAIN ?><br> You will not post unauthorized commercial content (eg spam or advertising)<br> You will not use the service in any manner deemed inappropriate by <?php echo DOMAIN ?><br> You will not add any kind of redirect<br> You will not participate in phishing or scamming schemes<br> You will not use the service if you are a convicted sex offender<br> You will not use the service if you are banned from using such services by law</p>
         <h5 class=heading>3. <?php echo DOMAIN ?></h5>
         <p>makes no guarantees concerning the service<br> makes no guarantee that the service does not contain material that could be offensive to some<br> does not verify any user identities on the service<br> does not guarantee the proper use material on the service by any party<br> may pass any material to appropriate authorities<br> reserves the right, but has no obligation, to monitor or moderate the service<br> reserves the right to terminate your use of the service and remove material stored on the service at any time, for any reason<br> reserves the right to delete or refuse to distribute any content, or any group and to terminate or reclaim users, user names, group names and IDs.<br> reserves the right to amend or change the Terms and Conditions at any time without notice</p>
         <h5 class=heading>4. Accounts</h5>
         <p>You are responsible for the security and proper use of all your accounts and passwords used in connection with the service and must take all necessary steps to ensure they are kept confidential, secure, used properly and not disclosed to unauthorised people.</p>
         <p>You must use your <?php echo XAT_NAME ?> accounts on a regular basis in order to keep them active. <?php echo DOMAIN ?> may, without notification, cancel your accounts which have not been used for a period of ninety (90) days.</p>
         <h5 class=heading>5. Groups</h5>
         <p>Individuals are responsible for the material they post to the chat box but group moderators should do what they can to ensure that your users abide by the terms and conditions.<br> Inactive or inappropriately run groups will be disabled or passed on to other moderators.</p>
         <p>You are responsible for the security and proper use of all your groups and passwords used in connection with the service and must take all necessary steps to ensure they are kept confidential, secure, used properly and not disclosed to unauthorised people.<br> You must use your <?php echo XAT_NAME ?> groups on a regular basis in order to keep them active. <?php echo DOMAIN ?> may, without notification, cancel your groups which have not been used for a period of ninety (90) days or if the group is largely inactive.</p>
         <h5 class=heading>6. <?php echo DOMAIN ?> Paid for Premium Services</h5>
         <p><?php echo DOMAIN ?> offer certain premium services that are subject to charges</p>
         <p>all premium services purchased from <?php echo DOMAIN ?> can only be used in the <?php echo DOMAIN ?> chat box and within the terms and conditions of <?php echo DOMAIN ?></p>
         <p><?php echo DOMAIN ?> retains the right to withdraw premium services</p>
         <p>when premium services are purchased from <?php echo DOMAIN ?> by the user, the amount of xats (credits) used for that purchase will be deducted from the users account immediately. The user will not have a right to cancel the order after the order has been placed</p>
         <p>If a user is banned from the <?php echo DOMAIN ?> site for contraventions of <?php echo DOMAIN ?> terms and conditions they will lose the right to a refund of xats (credits). In some circumstances unused credits may be refunded to the user if more than 200 xats remain in a deactivated user account. The costs incurred by <?php echo DOMAIN ?> in providing this refund will be deducted from the outstanding user balance in question. If the costs exceed the balance no refund will be made.</p>
         <p>The site includes fictional currencies (e.g. xats, days), which may be purchased with real world currency and can then be exchanged on this Site for limited license right(s) to use a feature of our product when, as, and if allowed by <?php echo DOMAIN ?> and subject to the terms of service. Regardless of terminology used, <?php echo DOMAIN ?> Credits are not redeemable for any sum of real world money or monetary value from <?php echo DOMAIN ?> at any time. You agree that <?php echo DOMAIN ?> has the absolute right to manage, regulate, control, modify and/or eliminate such Credits as it sees fit in its sole discretion, in any general or specific case, and that <?php echo DOMAIN ?> will have no liability to you based on its exercise of such rights. <?php echo DOMAIN ?> Credits cannot be used for any kind of wagering, betting or gambling either within or outside of our Site.</p>
         <p><?php echo DOMAIN ?> does not assume any responsibility associated with your transactions with such third parties. <?php echo DOMAIN ?> is the sole owner of Credits, and as such, retains all intellectual property rights affiliated with ownership. You acknowledge that at no time do you own, nor have any right to, the intellectual property affiliated with Credits. You are hereby prohibited from reselling or distributing Credits without the expressed written consent of <?php echo DOMAIN ?>.<br> There will be no refunds for any unused credits for any portion of the Service in the case of cancellation or account locking, suspension or termination by <?php echo XAT_NAME ?>.</p>
         <p>Under this Terms of Service agreement you must first contact <?php echo DOMAIN ?> to attempt to resolve any billing disputes before contacting your bank or credit card company to dispute the charges. You further agree that any billing disputes must be submitted in writing (by fax) to our billing department within one month of the invoice payment in question. By using our services You agree to the above policy and to contact <?php echo DOMAIN ?> before contacting your financial institution to seek a resolution. In the event you dispute charges contrary to this agreement, we reserve the right to add a $150 collection chargeback fee per transaction and to refer your account or sell your debt to a third party collection agency. We also reserve the right to take further legal action against you.</p>
         <h5 class=heading>7. Tortuous Conduct</h5>
         <p>You are expected to request and respond to support and other issues in a courteous manner, when emailing, calling, submitting online tickets or using live chat with a representative of <?php echo DOMAIN ?>. Any cursing, yelling, or further intentional disruptive behavior aimed at <?php echo DOMAIN ?> or its employees shall be considered a violation of this Terms of Service agreement. Any threat; whether orally, verbally, in written, via E-mail, via live chat, delivered by second parties or delivered in any other way, and directed towards <?php echo DOMAIN ?> or any of <?php echo DOMAIN ?>'s employees, partners, staff, contractors, sub-contractors, facilities, offices, etc. shall be construed as a violation of this Terms of Service agreement.</p>
         <h5 class=heading>8. Disputes</h5>
         <p><?php echo DOMAIN ?> does not resolve disputes between users and does not guarantee that users will comply with our terms and conditions or otherwise behave appropriately. If you are the victim of offensive or inappropriate behavior or receive any other unwanted communications, you should use the built-in facilities to block the messages as well as seeking appropriate external help, for example from law enforcement authorities. If you continue to suffer problems, or are not satisfied, then you must stop using the service. You may report people who you believe to be breaking the terms of service to <?php echo DOMAIN ?>/support but you should not expect their group or account to be deleted as a result of your report, <?php echo XAT_NAME ?> may take action against them including suspending or locking accounts with no further communication with you.</p>
         <p>It is your sole responsibility to ensure that you are not scammed or phished while using the service. <?php echo DOMAIN ?> is unable to resolve scamming or phishing disputes between users, this includes but is not limited to reversing trades, returning xats, days, powers after a bargain did not turn out as you expected. You may report scammers and phishing sites to <?php echo DOMAIN ?>/support, <?php echo XAT_NAME ?> may take action against them including suspending or locking accounts with no further communication with you.</p>
         <p>YOU ARE SOLELY RESPONSIBLE FOR ANY DISPUTES BETWEEN YOU AND OTHER <?php echo XAT_NAME ?> USERS INCLUDING WITHOUT LIMITATION, DISPUTES CONCERNING TRANSACTIONS WITH OTHER MEMBERS. <?php echo DOMAIN ?> RESERVES THE RIGHT, BUT HAS NO OBLIGATION TO MONITOR OR RESOLVE DISPUTES BETWEEN <?php echo XAT_NAME ?> USERS. YOU WILL NOT HOLD <?php echo DOMAIN ?> RESPONSIBLE FOR OTHER USERS' CONTENT, ACTIONS OR INACTIONS. IF YOU HAVE A DISPUTE WITH ONE OR MORE <?php echo XAT_NAME ?> USERS, YOU RELEASE <?php echo DOMAIN ?>, ITS AFFILIATES, AND THEIR OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS FROM CLAIMS, DEMANDS AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.</p>
         <h5 class=heading>9. Copyright Infringement</h5>
         <p>To file a notice of infringement, you must provide a written communication (by fax).</p>
         <p>DISCLAIMERS OF WARRANTIES</p>
         <p>THE SERVICE AND THE MATERIALS ARE PROVIDED "AS IS"; AND "AS AVAILABLE", AND WITHOUT WARRANTY BY <?php echo DOMAIN ?>, AND, TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, <?php echo DOMAIN ?> EXPRESSLY DISCLAIM ALL WARRANTIES, EXPRESS AND IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND ANY WARRANTY OF NONINFRINGEMENT. THERE IS NO WARRANTY THAT THE SERVICE OR THE MATERIALS WILL MEET YOUR REQUIREMENTS, OR THAT YOUR ACCESS TO THE SAME WILL BE UNINTERRUPTED OR ERROR-FREE. <?php echo DOMAIN ?> DO NOT WARRANT, GUARANTEE, OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE SERVICE OR THE MATERIALS WITH RESPECT TO PERFORMANCE, ACCURACY, RELIABILITY, SECURITY CAPABILITY, CURRENTNESS OR OTHERWISE. YOU WILL NOT HOLD <?php echo DOMAIN ?> RESPONSIBLE FOR ANY DAMAGES THAT RESULT FROM YOU ACCESSING THE SERVICE OR USING THE SERVICE AND/OR THE MATERIALS. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY ANY PERSON SHALL CREATE A WARRANTY IN ANY WAY WHATSOEVER RELATING TO <?php echo DOMAIN ?>.</p>
         <p>UNDER NO CIRCUMSTANCES SHALL <?php echo DOMAIN ?> BE LIABLE FOR ANY UNAUTHORIZED USE OF THE SERVICE AND/OR THE MATERIALS.</p>
         <p>LIMITATION OF LIABILITY</p>
         <p>TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, UNDER NO CIRCUMSTANCES SHALL <?php echo DOMAIN ?> BE LIABLE TO YOU FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, SPECIAL OR SIMILAR DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, AND THE LIKE) ARISING OUT OF THE USE OR INABILITY TO USE THE SERVICE AND/OR THE MATERIALS, EVEN IF <?php echo DOMAIN ?>, HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. TO THE EXTENT THAT IN A PARTICULAR CIRCUMSTANCE ANY DISCLAIMER OR LIMITATION ON DAMAGES OR LIABILITY SET FORTH HEREIN IS PROHIBITED BY APPLICABLE LAW, THEN, INSTEAD OF THE PROVISIONS HEREOF IN SUCH PARTICULAR CIRCUMSTANCE, <?php echo XAT_NAME ?>, SHALL BE ENTITLED TO THE MAXIMUM DISCLAIMERS AND/OR LIMITATIONS ON DAMAGES AND LIABILITY AVAILABLE AT LAW OR IN EQUITY BY SUCH APPLICABLE LAW IN SUCH PARTICULAR CIRCUMSTANCE, AND IN NO EVENT SHALL SUCH DAMAGES OR LIABILITY EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE.</p>
         <p>OWNERSHIP</p>
         <p>NOTWITHSTANDING ANYTHING TO THE CONTRARY HEREIN AND REGARDLESS OF TERMINOLOGY USED, YOU ACKNOWLEDGE AND AGREE THAT YOU SHALL HAVE NO OWNERSHIP OR OTHER PROPERTY INTEREST IN THE GROUPS OR ACCOUNTS, AND YOU FURTHER ACKNOWLEDGE AND AGREE THAT ALL RIGHTS IN AND TO THE GROUPS OR ACCOUNTS ARE AND SHALL FOREVER BE OWNED BY AND INURE TO THE BENEFIT OF <?php echo DOMAIN ?>.</p>
         <p>GOVERNING LAW</p>
         <p>These Terms shall be governed in accordance with the laws of England and Wales and all disputes shall be decided in the courts of England and Wales.</p>
         <p>If any provision of this Agreement shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this Agreement and shall not affect the validity and enforceability of any remaining provisions, we agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision. If we fail to enforce any provision of these terms of service, that failure will not preclude us from enforcing either that provision (or any similar provision) on a later occasion. This Terms of Service is the complete and exclusive statement of the agreement between you and <?php echo XAT_NAME ?> concerning the Service, and this Agreement supersedes any prior or contemporaneous agreement, either oral or written, and any other communications with regard thereto between you and <?php echo XAT_NAME ?>. No agency, partnership, joint venture, employee-employer or franchiser-franchisee relationship is intended or created by this Agreement. Except for clauses excluding or restricting our liability a person who is not a party to this agreement shall have no rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of this agreement. </p>
         <h5 class=heading>10. Contact</h5>
         <p><?php echo DOMAIN ?> ltd.</p>
         <p>Registered number: 3615226</p>
         <p> 22 The Square</p>
         <p>The Millfields</p>
         <p>Plymouth </p>
         <p>England</p>
         <p>PL1 3JX</p>
         <p>https://<?php echo DOMAIN ?>/ticket</p>
         <p>info@<?php echo DOMAIN ?></p>
         <p>+44(0)8712457288</p>
      </div>
      <div id=privacy class='d-none container'>
         <h2 class=mb-3>Privacy Policy</h2>
         <h4>Your use of the service is subject our Privacy Policy.</h4>
         <p>This policy applies only to information gathered through the Service, including the download and use of Materials through the Service, but not to other offline transactions with <?php echo XAT_NAME ?>, nor to transactions with any third party not owned or controlled by <?php echo XAT_NAME ?>. By using the Service you agree to accept the practices and terms set forth in this Privacy Policy.</p>
         <h4>Data Collection</h4>
         <p>Data is collected when you use the service (e.g. create an account, make a purchase, send messages, create a ticket or send <?php echo XAT_NAME ?> an email). The following data may be collected:</p>
         <ul>
            <li>Accounts (including payment details but not financial data)</li>
            <li><?php echo XAT_NAME ?> group information</li>
            <li>Preferences</li>
            <li>Messages sent on the service</li>
            <li>Log files of interactions with the service and servers (including IP addresses)</li>
            <li>Tickets and E-mails</li>
         </ul>
         <p>You may provide personally identifiable information in order to use certain Services and to obtain support from <?php echo XAT_NAME ?>. If you do not want to provide <?php echo XAT_NAME ?> with any personally identifiable information, you should not use the Services that require such information. Other Users may also provide <?php echo XAT_NAME ?> with your personally identifiable information.</p>
         <p><?php echo XAT_NAME ?> does not collect or have access to your financial data (e.g. bank account or payment card details). If you make a purchase on the service, this will be handled by an external payment provider and you should refer to their privacy policy for any transaction you are party to.</p>
         <h4>Data Use</h4>
         <p><?php echo XAT_NAME ?> only uses this data, which may include potentially personal data, when it is lawful for <?php echo XAT_NAME ?> to do so (e.g. to provide the service you have requested, for our legitimate interests in managing and improving the service and to comply with legal or regulatory obligations). Any potentially personal data that is collected is only used for the purposes for which it was originally collected.</p>
         <p>To deliver you the Service and send you notices related to the Service, your Account and necessary updates. This includes fulfilling your requests for products and services and delivering content to you that is sent by other Users. To deliver your content to other Users (we will share your User name with Users to whom you send content). If you do not want to share this information, you should limit the content that you share and the Users that you share it with.</p>
         <p>To manage your Account and Account access, provide you with Software and Materials, purchase confirmations, support and customer service and to keep track of support and customer service requests.</p>
         <p>To determine the technical capabilities of your device and the appropriate content to deliver to you. <?php echo XAT_NAME ?> may disclose personally identifiable information to its partners in order to provide the Service, resolve service problems and correct errors in the Service (including customer inquiries, billing and credit corrections), to communicate with you about the Service, and to enhance your experience on the Service. </p>
         <p>Your personally identifiable information may be provided to a third party if <?php echo XAT_NAME ?> files for bankruptcy, or there is a transfer of the assets or ownership of <?php echo XAT_NAME ?>. <?php echo XAT_NAME ?> may also disclose personally identifiable information in order to respond to a subpoena, court order or other such request, or to otherwise establish or exercise our rights, or defend against legal claims. <?php echo XAT_NAME ?> may also provide such personally identifiable information order to investigate, prevent and take action regarding fraud or misuse of the Service, to comply with law or in response to a law enforcement agency's request, to enforce our Privacy Policy and end user agreements, and to protect the rights, property and safety of the Service, Users and others.</p>
         <p>In addition to other Users that you designate, <?php echo XAT_NAME ?>, its partners, and each of their contractors and employees may view the content that you upload to the Service in order to provide the Service and otherwise perform the tasks set forth in this Privacy Policy.</p>
         <p>If any data is transferred to a third party for this will only be done in accordance with the privacy policy and terms of service. It will be used for the purposes related to the service and not for their own interests and only if <?php echo XAT_NAME ?> is confident that it will be retained and processed in accordance with the law. <?php echo XAT_NAME ?> does not rent or sell personally identifiable information, such as your name or e-mail address, to third parties including advertisers.</p>
         <p>Your data may be transferred to a different legal jurisdiction and this will only be done where adequate level of data protection is available. For example, in the case of the USA; an approved contract and Privacy Shield registration.</p>
         <h4>Data Retention</h4>
         <p>Potentially personal data is only retained for as long as necessary. The duration the data is retained varies; considering the quantity of data, the type of data, the risk of harm should the data be accessed without authorization. In addition, there are regulatory, security, tax, law enforcement and legal requirements that may require data to be retained for a longer period of time. Where it is practical the retained data is encrypted and/or anonymized.</p>
         <p>In some circumstances, you may request your potentially personal data and/or its deletion e.g. where there is no good reason for <?php echo XAT_NAME ?> to retain or process it. The will likely require <?php echo XAT_NAME ?> to confirm your identity to ensure that data is neither made available to an unauthorized third party or incorrectly deleted. Alternatively, you can use the self service tools to delete your account or group.</p>
         <h4>Cookies</h4>
         <p>When you visit any web site, it may store or retrieve information on your browser. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. This service stores data (e.g. HTTP Cookies, HTML5 Local Storage) in your browser to deliver the service.</p>
         <p>Strictly Necessary</p>
         <p>These are needed for the service to function and cannot be switched off in our systems (e.g. setting your privacy preferences, Cloudflare security functionality). You can set your browser to block or alert you about these, but some parts of the site cannot work work without them. They do not store any personally identifiable information.</p>
         <p>Third party: Cloudflare, Amazon AWS ELB</p>
         <p>Functionality</p>
         <p>They are usually only set in response to actions made by you which amount to a request for services e.g. creating an account, setting your preferences on the service.</p>
         <p>Performance</p>
         <p>These are used to monitor the service for the purposes of management and development of the service. They do not store any personally identifiable information.</p>
         <p>Third party: Google Analytics</p>
         <h4>Children</h4>
         <p><?php echo XAT_NAME ?> does not knowingly collect personal information from children under the age of 13. <?php echo XAT_NAME ?> requests that children under the age of 13 not use the Service nor submit any personal information to the Service. Since information regarding children under the age of 13 is not collected, <?php echo XAT_NAME ?> does not knowingly use or distribute personal information regarding children under the age of 13. If <?php echo XAT_NAME ?> obtains actual knowledge that it has collected personal information about a child under the age of 13, that information will be immediately deleted from our database.</p>
         <h4>Security</h4>
         <p><?php echo XAT_NAME ?> takes appropriate steps to help ensure data privacy and security including through various hardware and software methodologies. However, due to the open communication nature of the Internet, <?php echo XAT_NAME ?> cannot guarantee that communications between you and the Service, and the Service and you, will be free from unauthorized access by third parties. Users of the Service do so at their own risk. <?php echo XAT_NAME ?> cannot guarantee the security of any information that is disclosed online.</p>
         <h4>Third Party Websites and Services</h4>
         <p>The service may contain links to third party websites/content. <?php echo XAT_NAME ?> is not responsible for the privacy policies of websites and services to which the Service links, or of which the Service is a part. If you provide any information to such third parties different rules regarding the collection and use of your personal information may apply. <?php echo XAT_NAME ?> strongly suggest you review such third party's privacy policies before providing any data to them.</p>
         <h4>Reasonable Efforts</h4>
         <p><?php echo XAT_NAME ?> will use reasonable efforts to comply with this Privacy Policy and will take prompt corrective action when <?php echo XAT_NAME ?> learn of any failure to comply with our Privacy Policy. <?php echo XAT_NAME ?> sometimes release beta versions of our products and services, which are further refined before the release of the final version. Because these products and services are still in a test phase, <?php echo XAT_NAME ?> may not always catch an unintended privacy issue, despite our efforts to do so. As such, <?php echo XAT_NAME ?> welcome User feedback on any privacy concerns you may have. In light of the above and because of the complex and constantly changing nature of our technology and business, and the security risks associated with using the Internet, <?php echo XAT_NAME ?> does not guarantee error-free performance under this Privacy Policy. To the extent permissible under law, <?php echo XAT_NAME ?> shall not be liable for any incidental, consequential or punitive damages relating to this Privacy Policy.</p>
         <h4>Modifications of the Privacy Policy</h4>
         <p><?php echo XAT_NAME ?> reserves the rights to modify its Privacy Policy at any time. Such modifications will become effective on the day they are posted. <?php echo XAT_NAME ?> encourages you to frequently review the Privacy Policy for any modifications.</p>
         <h4>Contact, Corrections and Updates</h4>
         <p>If you have any questions or comments about this policy, please contact https://<?php echo DOMAIN ?>/ticket.</p>
         <p>Date: 25 May 2018</p>
      </div>
      <div id=cookiePopup class='alert alert-dismissible text-center cookiePopup'role=alert>
         <div> <span data-localize=web.privacyterms><?php echo XAT_NAME ?> uses <a href=https://<?php echo DOMAIN ?>/privacy rel=noopener target=_blank>cookies</a> and your use is subject to <a href=https://<?php echo DOMAIN ?>/terms rel=noopener target=_blank>terms</a></span> <button id=cookieAgree type=button class='btn btn-primary btn-sm cookieButton' aria-label=accept><span data-localize=web.agree>agree</span></button> <button id=cookieSettings type=button class='btn btn-outline-secondary btn-sm cookieButton' aria-label=settings><span data-localize=web.settings>settings</span></button> </div>
      </div>
      <div id=embedDialog></div>
      <div id=sendMessageDialog></div>
      <div id=inappDialog></div>
      <div id=termsDialog></div>
      <div id=privacyDialog>
         <div class='modal fade'id=privacyModal tabindex=-1 role=dialog aria-labelledby=privacyModalLabel aria-hidden=true>
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
                           <div class=col><span data-localize=web.grouptabs>group tabs (third party)</span><br> <small><span data-localize=web.allowstabs>This option allows third party content to open automatically on all <?php echo XAT_NAME ?> groups.</span> <a href=/privacy><span data-localize=web.learnmorethird>Learn more about third party content.</span></a></small> </div>
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
      <script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script> <script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js></script> <script src=https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js></script> <script src=/content/web/<?php echo DIRVERSION;?>/lib/jquery.localize.js></script> <script src=/content/web/<?php echo DIRVERSION;?>/common.js></script> <script src=/content/web/<?php echo DIRVERSION;?>/tools.js></script>
