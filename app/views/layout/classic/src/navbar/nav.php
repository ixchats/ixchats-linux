<!DOCTYPE html> 
<!--head--> 
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]--> 
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]--> 
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]--> 
<!--[if gt IE 8]--><!--> <html lang="<?php echo \Server::detectLanguage() ?>" class="no-js"> <!--<![endif]--> 

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?php echo $title ?></title>
	<meta name="description" content="<?php echo $description ?>">
    <meta name="viewport" content="width=device-width">
    <!--<meta name="msapplication-TileImage" content="//<?php echo DOMAIN ?>/images/win8-tile-144.png"/>  TODO: -->
    <meta name="msapplication-TileColor" content="#000033">
    <?php echo $xt ? "<meta name=\"xt\" content=\"".implode(',',$xt)."\">\n" : '' ?>
    <meta name="xcb_js" content="<?php echo VERSION ?>">
    <meta name="xcb_l" content="<?php echo VERSION ?>">
	<?php echo in_array('index',$xt) ? '<meta name="xj" content="index">' : (in_array('groups',$xt) ? '<meta name="xj" content="groups">' :  '')?>
	<?php echo strpos($title, 'privacy') == true ? '<meta name="xcookie" content="big">' : ''?>
    <link href="//<?php echo DOMAIN ?>/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link rel="dns-prefetch" href="//www.<?php echo DOMAIN ?>">
	<link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN ?>/css/bootstrap.min82da.css?v=<?php echo VERSION ?>">
	<link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN ?>/css/bootstrap-responsive.min82da.css?v=<?php echo VERSION ?>"> 
	<link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN ?>/css/animate82da.css?v=<?php echo VERSION ?>">
	<?php if (in_array('groups',$xt)) { ?>
	<link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN ?>/css/groups82da.css?v=<?php echo VERSION ?>">
	<?php } ?>
	<?php if (in_array('index',$xt)) { ?>
	<link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN ?>/css/index82da.css?v=<?php echo VERSION ?>">
	<?php } ?>
	<link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN ?>/css/main.css?v=<?php echo VERSION ?>">
	<link rel="stylesheet" type="text/css" href="//<?php echo DOMAIN ?>/css/cookiecuttr82da.css?v=<?php echo VERSION ?>">
	<script src="//<?php echo DOMAIN ?>/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js?v=<?php echo VERSION ?>"></script>
	<!---<link rel="stylesheet" href="//<?php echo DOMAIN ?>/css/nx_preloader.css?v=<?php echo VERSION ?>" />
	<script src="//<?php echo DOMAIN ?>/js/npreloader.js?v=<?php echo VERSION ?>"></script>--->
</head>
<body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="//browsehappy.com/">upgrade your browser</a> or <a href="//www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
<!--header-->
    <a href="#" class="scrolltop">
        <span style="margin-left: 2px;"><i class="icon-arrow-up"></i></span>
    </a>
<!-- begins navbar -->
<div class="navbar navbar-fixed-top">
   <div class="navbar-inner">
      <div class="container">
         <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         </a>
         <a class="brand scroller peShiner"  href="//<?php echo DOMAIN ?>">
         <img src="<?php echo \Server::loadLogo();?>"   alt="logo" /> </a>
         <div class="nav-collapse collapse">
            <ul class="nav pull-right">
               <li><a href="//<?php echo DOMAIN ?>/groups.php" data-localize="main.groups">Groups</a></li>
               <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <span  data-localize="main.store" data-localize="main.store">Store</span>
                  <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                     <li><a href="//<?php echo DOMAIN ?>/buy"><i class="icon-star"></i>&nbsp;<span data-localize="main.buyxats">Buy xats days</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/powers"><i class="icon-star"></i>&nbsp;<span data-localize="main.powers">Powers</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/web_gear/chat/Getxavis.php"><i class="xicon-xavi"></i>&nbsp;<span data-localize="main.xavi">xavis</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/BuyGroup"><i class="xicon-groups"></i>&nbsp;<span data-localize="main.xatgroup"><?php echo XAT_NAME ?> group</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/ShortName"><i class="xicon-shortname"></i>&nbsp;<span data-localize="main.shortname">Short name</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/promotion"><i class="xicon-promote"></i>&nbsp;<span data-localize="main.promotion">Promotion</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/Auction"><i class="xicon-auction"></i>&nbsp;<span data-localize="main.auctions">Auctions</span></a></li>
                  </ul>
               </li>
               <li><a href="//<?php echo DOMAIN ?>/forum" data-localize="main.community">Community</a></li>
               <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-toggle="dropdown">
                  <span data-localize="main.more">More</span>
                  <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu">
                     <!--<li><a href="//<?php echo DOMAIN ?>/about.php"><i class="xicon-about"></i>&nbsp;<span data-localize="main.about">About</span></a></li> -->
                     <li><a href="#"><i class="xicon-twitter"></i>&nbsp;<span data-localize="main.twitter">Twitter</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/web_gear/chat/chats.php?type=wiki"><i class="xicon-wiki"></i>&nbsp;<span data-localize="main.wiki">Wiki</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/support"><i class="xicon-support"></i>&nbsp;<span data-localize="main.support">Support</span></a></li>
                     <li><a href="#"><i class="xicon-contact"></i>&nbsp;<span data-localize="main.contact">Contact</span></a></li>
                     <li class="divider"></li>
                     <li><a href="//<?php echo DOMAIN ?>/web_gear/chat/chats.php?type=help"><i class="xicon-help"></i>&nbsp;<span data-localize="main.help">Help</span></a></li>
                     <li><a href="//<?php echo DOMAIN ?>/web_gear/chat/chats.php?type=trade"><i class="icon-star"></i>&nbsp;<span data-localize="main.trade">Trade</span></a></li>
                     <li class="divider"></li>
                     <li><a href="//<?php echo DOMAIN ?>/web_gear/index.php"><i class="icon-tasks"></i>&nbsp;<span data-localize="main.widgets">Widgets</span></a></li>
                  </ul>
               </li>
               <!--<li><a class="btn-header" href="//<?php echo DOMAIN ?>/register" data-localize="main.register">Register</a></li> -->
		<?php
		  if ($user->isAuth()) {
			  $avatar = $user->get()->avatar; 
			  echo '<li>';
			  echo '<li class="dropdown">';
			  echo '<a href="#" class="dropdown-toggle" data-toggle="dropdown">';
			  echo ''.\Server::avatar($user->get()->avatar, $user->get()->k2).'&nbsp;'.$user->get()->username.'';
			  echo '<b class="caret"></b></a><ul class="dropdown-menu">';
			  echo '<li><a href="//me.'.DOMAIN.'/'.$user->get()->username.'"><i class="icon icon-user color=" #f5f5f5"=""></i> '.$user->get()->username.'</a></li>';	
			  echo '<li><a  href="//'.DOMAIN.'/web_gear/chat/editprofile.php?email='.$user->get()->username.'"><i class="icon-edit"></i>';
			  echo '<span data-localize="edit.editpro">Edit My Profile</span> </a></li>';
			  #echo '<li><a  href="//'.DOMAIN.'/web_gear/chat/register.php?UserId='.$user->get()->id.'&k2='.$user->get()->k2.'&mode=3" >';
			  #echo '<i class="icon-edit"></i>&nbsp;<span data-localize="login.changepass" style="display: inline;">Change password</span></a></li>';
			  #echo '<li><a  href="//'.DOMAIN.'/web_gear/chat/register.php?UserId='.$user->get()->id.'&k2='.$user->get()->k2.'&mode=4">';
			  #echo '<i class="icon-edit"></i>&nbsp;<span data-localize="login.lost">Lost password/username</span></a></li>';
			  #echo '<li><a  href="//'.DOMAIN.'/web_gear/chat/custompawn.php"><i class="xicon-shortname"></i>&nbsp;<span data-localize="pawn.eveh2" style="display: inline;">Change Pawn Color</span></a></li><li>';
			  #echo '<a  href="//'.DOMAIN.'/web_gear/chat/Transfers.php"><i class="icon-list"></i>&nbsp;<span style="display: inline;">Transfers History</span></a></li>';
			  #echo '<li><a  href="//'.DOMAIN.'/web_gear/chat/touchsound.php"><i class="icon-home"></i>&nbsp;<span style="display: inline;">Touchound</span></a></li>';
			  #echo '<li><a href="/relogin"><i class="icon-refresh"></i>&nbsp;<span data-localize="pawn.relog2" style="display: inline;">Relogin Register</span></a></li>';
			  #echo '<li><a href="//'.DOMAIN.'/web_gear/chat/referals.php"><i class="icon-star"></i><font color="green">&nbsp;Referals</font></a></li>';
			  echo '<li><a  href="//'.DOMAIN.'/login"><i class="icon-refresh"></i>&nbsp;<span data-localize="login.login" style="display: inline;">Login</span></a></li>';
			  echo '<li><a  href="/logout"><i class="icon-off"></i>&nbsp;<span data-localize="pawn.logautx2" style="display: inline;">Logout</span></a></li></ul>';
				
			} else {
			  
			  echo '<li><a class="btn-header" href="/login" data-localize="main.login"><i class="mdi-action-perm-contact-cal left"></i>Login</a></li>';
			}
		 ?>
               <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <small><span data-localize="main.language">Language</small>
                  <b class="caret"></b>
                  </a>
                  <ul id="langselect" class="dropdown-menu">
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>
<!-- ends navbar -->
<div class="container warning">
   <noscript>
      <div class="cc-cookies-error well text-center" >
         <p>Features that need <b>JavaScript</b> have been disabled as it is not available.<br><br>To continue using <?php echo XAT_NAME ?> please:</p>
         <p><a href="//www.enable-javascript.com"/>Enable it in your browser's preferences</a></p>
      </div>
   </noscript>
</div>
</div>
<!--/header-->
