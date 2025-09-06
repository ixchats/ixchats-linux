<!DOCTYPE html>
<html lang="<?php echo \Server::detectLanguage() ?>">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta name="description" content="O-Bot - xat Bot Service Provider" />
	<meta name="author" content="Guillaume" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<title><?php echo XAT_NAME ?> Panel - <?php echo $title ?></title>

	<link rel="stylesheet" href="/css/slim/slim.css">
	<link rel="stylesheet" href="/css/slim/slim.one.css">
	
	<link href="/css/slim/lib/Ionicons/css/ionicons.css" rel="stylesheet">
	<link href="/css/slim/lib/font-awesome/css/font-awesome.css" rel="stylesheet">
	
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>

<body>
    <div class="slim-header">
      <div class="container">
        <div class="slim-header-left">
          <h2 class="slim-logo"><a href="/"><?php echo XAT_NAME ?><span>Panel</span></a></h2>
        </div><!-- slim-header-left -->
        <div class="slim-header-right">
			<div class="dropdown dropdown-c">
				<a href="#" class="logged-user" data-toggle="dropdown">
					<iframe frameborder="0" height="32" width="32" scrolling="no" src="/Panel/avatar.html?size=32&url=<?php echo $user->get()->avatar; ?>"></iframe>
					<span class="group-admin"> <?php echo $user->get()->username; ?></span>
				</a>
			</div>
        </div><!-- header-right -->
      </div><!-- container -->
    </div><!-- slim-header -->
	
	<div class="slim-navbar">
     <div class="container">
        <ul class="nav">
			<li class="nav-item">
             <a class="nav-link" href="/Panel/Home">
               <i class="icon ion-ios-home-outline"></i>
               <span>Home</span>
             </a>
           </li>
		   <li class="nav-item">
             <a class="nav-link" href="/Panel/Staff">
               <i class="icon ion-ios-gear-outline"></i>
               <span>Staff</span>
             </a>
           </li>
          <li class="nav-item with-sub">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="icon ion-ios-gear-outline"></i>
              <span>Edit</span>
            </a>
            <div class="sub-item">
              <ul>
                <li><a href="/Panel/Users">Users</a></li>
				 <li><a href="/Panel/UsersNull">Users Null</a></li>
                <li><a href="/Panel/Chats">Chats</a></li>
				<li><a href="/Panel/Powers">Powers</a></li>
				<li><a href="/Panel/Messages">Messages</a></li>
              </ul>
            </div><!-- dropdown-menu -->
          </li>
		  <li class="nav-item with-sub">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="icon ion-ios-gear-outline"></i>
              <span>Tools</span>
            </a>
            <div class="sub-item">
              <ul>
                <li><a href="/Panel/Pchat">Promo Chat</a></li>
                <li><a href="/Panel/Pbanner">Promo Banner</a></li>
				<li><a href="/Panel/Bans">Bans</a></li>
				<li><a href="/Panel/Transfer">Transfer</a></li>
              </ul>
            </div><!-- dropdown-menu -->
          </li>
		  <?php if($user->get()->panel == 1){?>
			  <li class="nav-item">
				<a class="nav-link" href="/Panel/Lastpower">
				  <i class="icon ion-ios-chatboxes-outline"></i>
				  <span>Add Powers</span>
				  <span class="square-8"></span>
				</a>
			  </li>
		  <?php } ?>
        </ul>
      </div>
    </div>
      
    <div class="slim-mainpanel">
      <div class="container">
		<div class="slim-pageheader">
			<ol class="breadcrumb slim-breadcrumb"></ol>
			<h6 class="slim-pagetitle"><?php echo $title ?></h6>
		</div>
