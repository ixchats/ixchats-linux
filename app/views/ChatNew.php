<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title><?php echo XAT_NAME?></title>
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self'; 
    style-src 'self' https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css https://www.gstatic.com/; 
    connect-src 'self' https://<?php echo DOMAIN;?>/; 
    img-src 'self' https://*.<?php echo DOMAIN;?>/ https://images.weserv.nl http://*.tinypic.com/ https://i.imgur.com/ https://i.postimg.cc/ https://u.cubeupload.com/ https://ssl.google-analytics.com/; 
    script-src 'self' https://<?php echo DOMAIN;?>/ 
	 https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
	 https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js
	 https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.runtime.js
     https://www.google-analytics.com/ https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.gstatic.com/ ; 
    frame-src * https://www.google.com/recaptcha/; 
    base-uri 'self'; 
    object-src 'none'; 
    form-action https://<?php echo DOMAIN;?>/">
<link href="/images/app/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/app/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/app/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="/images/app/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="/images/app/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/app/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="/images/app/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/app/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/app/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/app/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<script type=application/json id=xjson><?php
	$result = ['dir' => '/content/web/'.DIRVERSION.'/','id' => 0, 'd' => '#', 'g' => '#', 'a' => '#'];	
	if ($chat) {
			$Idbuddy = '';
			if(!empty($chat->attached)){
				$Idbuddy = $attachedid;
			}
			$tab = [
						['label' => $chat->button0, 'url' => 0, 'html' => $chat->HTML],
						['label' => $chat->button1, 'url' => 1, 'html' => $chat->HTML1],
						['label' => $chat->button2, 'url' => 2, 'html' => $chat->HTML2],
						['label' => $chat->button3, 'url' => 3, 'html' => $chat->HTML3],
						['label' => $chat->button4, 'url' => 4, 'html' => $chat->HTML4],
						['label' => $chat->button5, 'url' => 5, 'html' => $chat->HTML5],
						['label' => $chat->button6, 'url' => 6, 'html' => $chat->HTML6]	
				   ];
         
         	foreach ($tab as $tb) {
         		if (!empty($tb['html'])) {
         			$tabs[] = ['label' => $tb['label'], 'url' => $tb['url']];
          		}
         	}
			$result['id']      = null;
			$result['d']       = (string) $chat->descr;
			$result['g']       = (string) $chat->name;
			$result['a']  	= (string) "{$chat->bg};={$chat->attached};={$Idbuddy};={$chat->language};={$chat->radio};={$chat->button};={$chat->portrait};={$chat->landscape};={$chat->flagName};={$chat->flagName};={$chat->grad};={$chat->font};={$chat->glow}";
			$result['tabs']    = 0;
			if ($chat->debug > 0) {
				$result['t']   = (int) 256;
			}
			if ($chat->bot > 0) {
				$result['bot'] = (int) $chat->bot;
			}else{
				$result['bot'] = (int) 0;
			}
			$result['Direct']  = (int) 1;
			$result['dbg']  = (int) 1;
	}			
	echo json_encode($result);
?></script>
<meta name="description" content="<?php echo XAT_NAME?>">
<link rel="manifest" href="/content/web/<?php echo DIRVERSION;?>/manifest.webmanifest">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#000088" />
<link rel="apple-touch-icon" href="/images/app/apple-touch-icon.png" sizes="180x180">
<link href="/content/web/<?php echo DIRVERSION;?>/pwa.css" rel="stylesheet">
<script src="/content/web/<?php echo DIRVERSION;?>/pwa.js?z5" defer></script>
</head>
<body>
<noscript>To use <?php echo XAT_NAME?>, please enable Javascript.</noscript>
</body>
</html>