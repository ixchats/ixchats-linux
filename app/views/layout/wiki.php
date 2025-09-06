<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title><?php echo ucfirst($title); ?> - <?php echo XAT_NAME; ?> Wiki</title>
      <meta name="description" content="<?php echo XAT_NAME; ?> Main_Page power smileys wiki">
      <meta name="viewport" content="width=device-width">
      <meta name="msapplication-TileColor" content="#000033" />
      <link href="//<?php echo DOMAIN; ?>/favicon.ico" rel="shortcut icon" type="image/x-icon">
      <link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN; ?>/css/bootstrap.min82da.css">
      <link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN; ?>/css/bootstrap-responsive.min82da.css">
      <link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN; ?>/css/animate82da.css">
      <link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN; ?>/css/main.css">
      <link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN; ?>/css/cookiecuttr82da.css">
      <link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN; ?>/wiki/js/wiki.css">
      <link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN; ?>/css/index82da.css">
	  <link type="text/css" rel="stylesheet" href="//<?php echo DOMAIN; ?>/wiki/js/style-custom.css">
      <script src="//<?php echo DOMAIN; ?>/js/vendor/modernizr-2.6.2-respond-1.1.0.min82da.js"></script>
      <style>.smileypreviewfix img { padding-top: 5px;height: 50px;}ul{list-style-type:square;margin:0.3em 0 0 1.6em;padding:0}</style>
   </head>
   <div class="container">
      <a href="#" class="scrolltop">
      <span style="margin-left: 2px;"><i class="icon-arrow-up"></i></span>
      </a>
      <div class="navbar navbar-fixed-top">
         <div class="navbar-inner">
            <div class="container">
               <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               </a>
               <a class="brand scroller peShiner" href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Main_Page">
               <img src="<?php echo \Server::loadLogo();?>" alt="logo" />
               </a>
               <div class="nav-collapse collapse">
                  <ul class="nav pull-right">
                     <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <span>Subscriber</span>
                        <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Auction" title="Auction"><i class="icon-star"></i>&nbsp;<span>Auction</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Powers_Auction" title="Powers Auction"><i class="icon-star"></i>&nbsp;<span>Powers-Auction</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Gifts" title="Gifts"><i class="icon-star"></i>&nbsp;<span>Gifts</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Powers" title="Powers"><i class="icon-star"></i>&nbsp;<span>Powers</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Trading" title="Trading"><i class="icon-star"></i>&nbsp;<span>Trading</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Xats" title="Xats"><i class="icon-star"></i>&nbsp;<span>Xats</span></a></li>
                        </ul>
                     </li>
                     <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <span>Security</span>
                        <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Account_protection" title="Account Protection"><i class="icon-star"></i>&nbsp;<span>Account Protection</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Authentication" title="Authentication"><i class="icon-star"></i>&nbsp;<span>Authentication</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Email_Security" title="Email Security"><i class="icon-star"></i>&nbsp;<span>Email Security</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Password" title="Password"><i class="icon-star"></i>&nbsp;<span>Password</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Phishing" title="Phishing"><i class="icon-star"></i>&nbsp;<span>Phishing</span></a></li>
                        </ul>
                     </li>
                     <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <span>Guides</span>
                        <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Errors" title="Errors"><i class="icon-star"></i>&nbsp;<span>Errors</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Owners_Guide" title="Owners Guide"><i class="icon-star"></i>&nbsp;<span>Owners Guide</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Profiles" title="Profiles"><i class="icon-star"></i>&nbsp;<span>Profiles</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Users_Guide" title="Users Guide"><i class="icon-star"></i>&nbsp;<span>Users Guide</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Short_names" title="Short Names"><i class="icon-star"></i>&nbsp;<span>Short names</span></a></li>
                        </ul>
                     </li>
                     <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <span>Category</span>
                        <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Powers" title="Category Powers"><i class="icon-star"></i>&nbsp;<span>Category Powers</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Allpowers" title="Category Allpowers"><i class="icon-star"></i>&nbsp;<span>Category Allpowers</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Smiley" title="Category Smiley"><i class="icon-star"></i>&nbsp;<span>Category Smiley</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Limited" title="Category Limited"><i class="icon-star"></i>&nbsp;<span>Category Limited</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Unlimited" title="Category Unlimited"><i class="icon-star"></i>&nbsp;<span>Category Unlimited</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Hug" title="Category Hug"><i class="icon-star"></i>&nbsp;<span>Category Hug</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Jinx" title="Category Jinx"><i class="icon-star"></i>&nbsp;<span>Category Jinx</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Group" title="Category Group"><i class="icon-star"></i>&nbsp;<span>Category Group</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Games" title="Category Games"><i class="icon-star"></i>&nbsp;<span>Category Games</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Function" title="Category Function"><i class="icon-star"></i>&nbsp;<span>Category Function</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Flix" title="Category Flix"><i class="icon-star"></i>&nbsp;<span>Category Flix</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Epic" title="Category Epic"><i class="icon-star"></i>&nbsp;<span>Category Epic</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Collection" title="Category Collection"><i class="icon-star"></i>&nbsp;<span>Category Collection</span></a></li>
                           <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Category:Sticker" title="Category Sticker"><i class="icon-star"></i>&nbsp;<span>Category Sticker</span></a></li>
                        </ul>
                     </li>
                     <li><a href="//forum.<?php echo DOMAIN; ?>" title="Forum" data-localize="main.community">Forum</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
	   
	   <?php echo $content;?>

   </div>
   </div>
   <script src="/wiki/js/jquery-1.10.2.min.js"></script>
   <div id="footer">
      <footer>
         <ul>
            <li><a href="//<?php echo DOMAIN; ?>/wiki" title="Wiki" data-localize="main.wiki">Wiki</a></li>
            <li><a href="//<?php echo DOMAIN; ?>/privacy.html" title="Privacy" data-localize="main.privacy">Privacy</a></li>
            <li><a href="//<?php echo DOMAIN; ?>/terms.html" title="Terms" data-localize="main.terms">Terms</a></li>
            <li><a href="//<?php echo DOMAIN; ?>/wiki/index.php?title=Safety" title="Safety" data-localize="main.safety">Safety</a></li>
            <li><a href="#" title="Support" data-localize="main.support">Support</a></li>
         </ul>
         <p>&copy; <?php echo date('Y');?> Wiki <?php echo XAT_NAME; ?>. All rights reserved.</p>
      </footer>
   </div>
   <script src="//<?php echo DOMAIN; ?>/wiki/js/jquery-1.10.2.min.js"></script>
   <script src="//<?php echo DOMAIN; ?>/wiki/js/table-advanced.js"></script>
   <script src="//<?php echo DOMAIN; ?>/wiki/js/jquery.tablesorter.js"></script>
   <script src="//<?php echo DOMAIN; ?>/wiki/js/bootstrap.min.js"></script>
   <script src="//<?php echo DOMAIN; ?>/wiki/js/previe.js"></script>
   </body>
</html>
