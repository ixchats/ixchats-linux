<?php
session_start();

class Server {
	const ENCRYPT_KEY = '2a9b3bd36f4c1cfc';
	const REQUEST_ALLOWED = ['POST', 'GET'];
	const PROXY_PORTS = [80, 8080, 3128, 443, 1080];
	const PROXY_HEADERS = [
		'HTTP_VIA',
		'VIA',
		'Proxy-Connection',
		'HTTP_FORWARDED_FOR',
		'HTTP_X_FORWARDED',
		'HTTP_FORWARDED',
		'HTTP_CLIENT_IP',
		'HTTP_FORWARDED_FOR_IP',
		'X-PROXY-ID',
		'MT-PROXY-ID',
		'X-TINYPROXY',
		'X_FORWARDED_FOR',
		'FORWARDED_FOR',
		'X_FORWARDED',
		'FORWARDED',
		'CLIENT-IP',
		'CLIENT_IP',
		'PROXY-AGENT',
		'HTTP_X_CLUSTER_CLIENT_IP',
		'FORWARDED_FOR_IP',
		'HTTP_PROXY_CONNECTION'
	];
	const MOBILE_UA = [
		'/iphone/i' => 'iPhone', 
		'/ipod/i' => 'iPod', 
		'/ipad/i' => 'iPad', 
		'/android/i' => 'Android', 
		'/blackberry/i' => 'BlackBerry', 
		'/webos/i' => 'Mobile'
	];
	public static function LangCode(string $lang): string {
	$langcode = DEFAULT_LANG;	
	$languages = [
			['code' => 'ab', 'name' => 'Abkhazian'],
			['code' => 'aa', 'name' => 'Afar'],
			['code' => 'af', 'name' => 'Afrikaans'],
			['code' => 'ak', 'name' => 'Akan'],
			['code' => 'sq', 'name' => 'Albanian'],
			['code' => 'am', 'name' => 'Amharic'],
			['code' => 'ar', 'name' => 'Arabic'],
			['code' => 'an', 'name' => 'Aragonese'],
			['code' => 'hy', 'name' => 'Armenian'],
			['code' => 'as', 'name' => 'Assamese'],
			['code' => 'av', 'name' => 'Avaric'],
			['code' => 'ae', 'name' => 'Avestan'],
			['code' => 'ay', 'name' => 'Aymara'],
			['code' => 'az', 'name' => 'Azerbaijani'],
			['code' => 'bm', 'name' => 'Bambara'],
			['code' => 'ba', 'name' => 'Bashkir'],
			['code' => 'eu', 'name' => 'Basque'],
			['code' => 'be', 'name' => 'Belarusian'],
			['code' => 'bn', 'name' => 'Bengali'],
			['code' => 'bh', 'name' => 'Bihari'],
			['code' => 'bi', 'name' => 'Bislama'],
			['code' => 'bs', 'name' => 'Bosnian'],
			['code' => 'br', 'name' => 'Breton'],
			['code' => 'bg', 'name' => 'Bulgarian'],
			['code' => 'my', 'name' => 'Burmese'],
			['code' => 'ca', 'name' => 'Catalan'],
			['code' => 'km', 'name' => 'Central'],
			['code' => 'ch', 'name' => 'Chamorro'],
			['code' => 'ce', 'name' => 'Chechen'],
			['code' => 'ny', 'name' => 'Chichewa'],
			['code' => 'zh', 'name' => 'Chinese'],
			['code' => 'cu', 'name' => 'Church'],
			['code' => 'cv', 'name' => 'Chuvash'],
			['code' => 'kw', 'name' => 'Cornish'],
			['code' => 'co', 'name' => 'Corsican'],
			['code' => 'cr', 'name' => 'Cree'],
			['code' => 'hr', 'name' => 'Croatian'],
			['code' => 'cs', 'name' => 'Czech'],
			['code' => 'da', 'name' => 'Danish'],
			['code' => 'dv', 'name' => 'Divehi'],
			['code' => 'nl', 'name' => 'Dutch'],
			['code' => 'dz', 'name' => 'Dzongkha'],
			['code' => 'en', 'name' => 'English'],
			['code' => 'eo', 'name' => 'Esperanto'],
			['code' => 'et', 'name' => 'Estonian'],
			['code' => 'ee', 'name' => 'Ewe'],
			['code' => 'fo', 'name' => 'Faroese'],
			['code' => 'fj', 'name' => 'Fijian'],
			['code' => 'fi', 'name' => 'Finnish'],
			['code' => 'fr', 'name' => 'Frcodeh'],
			['code' => 'ff', 'name' => 'Fulah'],
			['code' => 'gd', 'name' => 'Gaelic'],
			['code' => 'gl', 'name' => 'Galician'],
			['code' => 'lg', 'name' => 'Ganda'],
			['code' => 'ka', 'name' => 'Georgian'],
			['code' => 'de', 'name' => 'German'],
			['code' => 'ki', 'name' => 'Gikuyu'],
			['code' => 'el', 'name' => 'Greek'],
			['code' => 'kl', 'name' => 'Greenlandic'],
			['code' => 'gn', 'name' => 'Guarani'],
			['code' => 'gu', 'name' => 'Gujarati'],
			['code' => 'ht', 'name' => 'Haitian'],
			['code' => 'ha', 'name' => 'Hausa'],
			['code' => 'he', 'name' => 'Hebrew'],
			['code' => 'hz', 'name' => 'Herero'],
			['code' => 'hi', 'name' => 'Hindi'],
			['code' => 'ho', 'name' => 'Hiri Motu'],
			['code' => 'hu', 'name' => 'Hungarian'],
			['code' => 'is', 'name' => 'Icelandic'],
			['code' => 'io', 'name' => 'Ido'],
			['code' => 'ig', 'name' => 'Igbo'],
			['code' => 'id', 'name' => 'Indonesian'],
			['code' => 'ia', 'name' => 'Interlingua'],
			['code' => 'ie', 'name' => 'Interlingue'],
			['code' => 'iu', 'name' => 'Inuktitut'],
			['code' => 'ik', 'name' => 'Inupiaq'],
			['code' => 'ga', 'name' => 'Irish'],
			['code' => 'it', 'name' => 'Italian'],
			['code' => 'ja', 'name' => 'Japanese'],
			['code' => 'jv', 'name' => 'Javanese'],
			['code' => 'kn', 'name' => 'Kannada'],
			['code' => 'kr', 'name' => 'Kanuri'],
			['code' => 'ks', 'name' => 'Kashmiri'],
			['code' => 'kk', 'name' => 'Kazakh'],
			['code' => 'rw', 'name' => 'Kinyarwanda'],
			['code' => 'kv', 'name' => 'Komi'],
			['code' => 'kg', 'name' => 'Kongo'],
			['code' => 'ko', 'name' => 'Korean'],
			['code' => 'kj', 'name' => 'Kwanyama'],
			['code' => 'ku', 'name' => 'Kurdish'],
			['code' => 'ky', 'name' => 'Kyrgyz'],
			['code' => 'lo', 'name' => 'Lao'],
			['code' => 'la', 'name' => 'Latin'],
			['code' => 'lv', 'name' => 'Latvian'],
			['code' => 'lb', 'name' => 'Letzeburgesch'],
			['code' => 'li', 'name' => 'Limburgish'],
			['code' => 'ln', 'name' => 'Lingala'],
			['code' => 'lt', 'name' => 'Lithuanian'],
			['code' => 'lu', 'name' => 'Luba-Katanga'],
			['code' => 'mk', 'name' => 'Macedonian'],
			['code' => 'mg', 'name' => 'Malagasy'],
			['code' => 'ms', 'name' => 'Malay'],
			['code' => 'ml', 'name' => 'Malayalam'],
			['code' => 'mt', 'name' => 'Maltese'],
			['code' => 'gv', 'name' => 'Manx'],
			['code' => 'mi', 'name' => 'Maori'],
			['code' => 'mr', 'name' => 'Marathi'],
			['code' => 'mh', 'name' => 'Marshallese'],
			['code' => 'ro', 'name' => 'Romanian'],
			['code' => 'mn', 'name' => 'Mongolian'],
			['code' => 'na', 'name' => 'Nauru'],
			['code' => 'nv', 'name' => 'Navajo'],
			['code' => 'nd', 'name' => 'Northern'],
			['code' => 'ng', 'name' => 'Ndonga'],
			['code' => 'ne', 'name' => 'Nepali'],
			['code' => 'se', 'name' => 'Northern'],
			['code' => 'no', 'name' => 'Norwegian'],
			['code' => 'nb', 'name' => 'Norwegian'],
			['code' => 'nn', 'name' => 'Norwegian'],
			['code' => 'ii', 'name' => 'Nuosu'],
			['code' => 'oc', 'name' => 'Occitan'],
			['code' => 'oj', 'name' => 'Ojibwa'],
			['code' => 'or', 'name' => 'Oriya'],
			['code' => 'om', 'name' => 'Oromo'],
			['code' => 'os', 'name' => 'Ossetian'],
			['code' => 'pi', 'name' => 'Pali'],
			['code' => 'pa', 'name' => 'Panjabi'],
			['code' => 'ps', 'name' => 'Pashto'],
			['code' => 'fa', 'name' => 'Persian'],
			['code' => 'pl', 'name' => 'Polish'],
			['code' => 'pt', 'name' => 'Portuguese'],
			['code' => 'qu', 'name' => 'Quechua'],
			['code' => 'rm', 'name' => 'Romansh'],
			['code' => 'rn', 'name' => 'Rundi'],
			['code' => 'ru', 'name' => 'Russian'],
			['code' => 'sm', 'name' => 'Samoan'],
			['code' => 'sg', 'name' => 'Sango'],
			['code' => 'sa', 'name' => 'Sanskrit'],
			['code' => 'sc', 'name' => 'Sardinian'],
			['code' => 'sr', 'name' => 'Serbian'],
			['code' => 'sn', 'name' => 'Shona'],
			['code' => 'sd', 'name' => 'Sindhi'],
			['code' => 'si', 'name' => 'Sinhala'],
			['code' => 'sk', 'name' => 'Slovak'],
			['code' => 'sl', 'name' => 'Slovenian'],
			['code' => 'so', 'name' => 'Somali'],
			['code' => 'st', 'name' => 'Sotho'],
			['code' => 'nr', 'name' => 'South'],
			['code' => 'es', 'name' => 'Spanish'],
			['code' => 'su', 'name' => 'Sundanese'],
			['code' => 'sw', 'name' => 'Swahili'],
			['code' => 'ss', 'name' => 'Swati'],
			['code' => 'sv', 'name' => 'Swedish'],
			['code' => 'tl', 'name' => 'Tagalog'],
			['code' => 'ty', 'name' => 'Tahitian'],
			['code' => 'tg', 'name' => 'Tajik'],
			['code' => 'ta', 'name' => 'Tamil'],
			['code' => 'tt', 'name' => 'Tatar'],
			['code' => 'te', 'name' => 'Telugu'],
			['code' => 'th', 'name' => 'Thai'],
			['code' => 'bo', 'name' => 'Tibetan'],
			['code' => 'ti', 'name' => 'Tigrinya'],
			['code' => 'to', 'name' => 'Tonga'],
			['code' => 'ts', 'name' => 'Tsonga'],
			['code' => 'tn', 'name' => 'Tswana'],
			['code' => 'tr', 'name' => 'Turkish'],
			['code' => 'tk', 'name' => 'Turkmen'],
			['code' => 'tw', 'name' => 'Twi'],
			['code' => 'ug', 'name' => 'Uighur'],
			['code' => 'uk', 'name' => 'Ukrainian'],
			['code' => 'ur', 'name' => 'Urdu'],
			['code' => 'uz', 'name' => 'Uzbek'],
			['code' => 've', 'name' => 'Venda'],
			['code' => 'vi', 'name' => 'Vietnamese'],
			['code' => 'vo', 'name' => 'Volap_k'],
			['code' => 'wa', 'name' => 'Walloon'],
			['code' => 'cy', 'name' => 'Welsh'],
			['code' => 'fy', 'name' => 'Western'],
			['code' => 'wo', 'name' => 'Wolof'],
			['code' => 'xh', 'name' => 'Xhosa'],
			['code' => 'yi', 'name' => 'Yiddish'],
			['code' => 'yo', 'name' => 'Yoruba'],
			['code' => 'za', 'name' => 'Zhuang'],
			['code' => 'zu', 'name' => 'Zulu']
		];
		foreach ($languages as $list) {
			if ($list['name'] == $lang)
				$langcode = $list['code'];
		}
		return $langcode;
	}
	public static function removeSlashes(string $url): string {
		return preg_replace('#/+#', '/', $url);
	}

	public static function getUrl(): string {
		$uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
		error_log("Autoloader getUrl: $uri"); // Log for debugging
		$path = strtok($uri, '?');
		// Extract the last part of the path (e.g., 'index' from 'ixchats-linux/index.php')
		$page = basename($path, '.php');
		return self::removeSlashes($page);
	}

	public static function loadClasses(): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'classes' . SEPARATOR . '*.php');
	}

	public static function loadFunctions(): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'functions' . SEPARATOR . '*.php');
	}

	public static function loadVendor(): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'vendor' . SEPARATOR . '*.class.php');
	}

	public static function loadXaviActions(): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'functions' . SEPARATOR . 'json'  . SEPARATOR . 'xavi' . SEPARATOR .  'actions' . SEPARATOR . '*.txt');
	}
	
	public static function redirect(string $url) {
		header('Location: ' . $url);
	}
	
	public static function setLanguage(string $lang): string {
		return setCookie('lang', $lang, strtotime('+10 years'), '/');
	}
	
	public static function isForbidden(array $values) {
		$directory = explode('/', $_SERVER['SCRIPT_NAME']);
		if (empty($directory[1])) {
			return false;
		}
		if (in_array($directory[1], $values)) {
			http_response_code(403);
			exit;
		}
	}

	public static function isMobile() {
		foreach(self::MOBILE_UA as $regex => $os) {
			if(preg_match($regex, $_SERVER['HTTP_USER_AGENT'])) {
				return $os;
			}
		}
		return false;
	}
	
	public static function getIp(): string {
		return array_key_exists("HTTP_CF_CONNECTING_IP", $_SERVER) 
			? $_SERVER["HTTP_CF_CONNECTING_IP"] 
			: $_SERVER['REMOTE_ADDR'];
	}
	
	public static function isBot(): bool {
		if (!array_key_exists('HTTP_USER_AGENT', $_SERVER)) {
			return false;
		}
		return (preg_match('/bing|google|bot|spider/i', $_SERVER['HTTP_USER_AGENT']));
	}
	
	public static function isRealUser(): bool {
		if (!array_key_exists('HTTP_USER_AGENT', $_SERVER)) {
			return false;
		} else if (strlen($_SERVER['HTTP_USER_AGENT']) < 15) {
			return false;
		} else if (!self::isBot()) {
			$name  = md5(self::getIp());
			$token = sha1(base64_encode(self::getIp()));
			$_SESSION[$name] = $token;
			if (!array_key_exists($name, $_SESSION)) {
				return false;
			} else if ($_SESSION[$name] != $token) {
				return false;
			}
		}
		return true;
	}
	
	public static function doCSRF($level = 3): string { // default is 3
		switch ($level) {
			case 2:
				$token = base64_encode(time() . md5(uniqid()));
				break;
			case 3:
				$token = self::random(32) . sha1(microtime(true));
				break;
			default:
				$token = sha1(microtime(true));
				break;
		}
		self::newSession(md5(self::getIp()), $token);
		return $token;
	}
	
	public static function getCSRF() {
		return self::getSession(md5(self::getIp()));
	}
	
	public static function newSession(string $name, string $value): bool {
		return file_put_contents(
			DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'sessions' . SEPARATOR . $name . '.txt', 
			strip_tags($value)
		);
	}
	
	public static function getSession(string $name) {
		$dir = DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'sessions' . SEPARATOR . $name . '.txt';
		if (!file_exists($dir)) {
			return null;
		}
		return file_get_contents($dir);
	}
	
	public static function loadChatLang(string $lang): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'functions' . SEPARATOR . 'json' . SEPARATOR . 'translate' . SEPARATOR . 'src' . SEPARATOR . $lang . SEPARATOR . '*.php');
	}
	
	public static function loadLanguages(string $type): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'langs' . SEPARATOR . $type . SEPARATOR . '*.php');
	}
	
	public static function loadGroupJs(): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'goe' . SEPARATOR . 'js' . SEPARATOR . '*.js');
	}

	public static function loadGroupHtml(): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'goe' . SEPARATOR . 'html' . SEPARATOR . '*.html');
	}

	public static function loadLogo() {
		$logos = self::rglob(DIRECTORY . SEPARATOR . 'images' . SEPARATOR . 'logo' . SEPARATOR . SEASON[0] . SEPARATOR . '*.' . SEASON[1]);
		$files = [];
		foreach ($logos as $i => $u) {
			$files[substr(basename($u), 0, -4)] = basename($u);
		} 
		$img_name = array_rand($files, 2);
		return '//'.DOMAIN.'/images/logo/'.SEASON[0].'/'.$files[$img_name[0]].'';
	}
	
	public static function loadStickers(): array {
		return self::rglob(DIRECTORY . SEPARATOR . 'images' . SEPARATOR . 'sticker' . SEPARATOR . '*.js');
	}
	
	public static function loadNavbar(string $class, string $type) {
		$nav = self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'views' . SEPARATOR . 'layout' . SEPARATOR . $class . SEPARATOR . 'src' . SEPARATOR . 'navbar' . SEPARATOR .  '*.php');
		$files = [];
		foreach ($nav as $i => $u) {
			$files[substr(basename($u), 0, -4)] = $u;
		} 
		return $files[$type];
	}
	
	public static function loadFotter(string $class, string $type) {
		$nav = self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'views' . SEPARATOR . 'layout' . SEPARATOR . $class . SEPARATOR . 'src' . SEPARATOR . 'footer' . SEPARATOR .  '*.php');
		$files = [];
		foreach ($nav as $i => $u) {
			$files[substr(basename($u), 0, -4)] = $u;
		} 
		return $files[$type];
	}
	
	public static function validateCSRF(): bool {
		return self::post('_csrf') === self::getCSRF();
	}
	
	public static function inputCSRF() {
		print '<input type="hidden" name="_csrf" value="' . self::doCSRF() . '" />';
	}
	
	public static function PrintResult(string $type, string $error, string $lang = 'en', $translate = true) {
		$string = self::rglob(DIRECTORY . SEPARATOR . 'app' . SEPARATOR . 'functions' . SEPARATOR . 'json' . SEPARATOR . 'translate' . SEPARATOR . 'src' . SEPARATOR . $lang . SEPARATOR . '*.php');
		$files = [];
		$array = [];
		foreach ($string as $i => $u) {
			$files[substr(basename($u), 0, -4)] = $u;
		} 

		include $files[$type];
		
		if (!$translate) {
			return $array[$error];
		} else {
			return '<span data-localize='.$type.'.'.$error.'>'.$array[$error].'</span>';
		}
	}
	
	public static function PrintMessage(string $type, string $error, array $replace) {
		$load   = self::PrintResult($type, $error, self::detectLanguage(), false);
		$result = vsprintf($load, $replace);
		return $result . "\n\n";
	}
		
	public static function random($size = 20): string {
		$chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$result = '';
		for ($i = 0; $i < $size; $i++) {
			$result .= $chars[rand(0, strlen($chars) - 1)];
		}
		return $result;
	}
	
	public static function avatar(string $string, int $num) {
		if (isset($string) && !is_numeric($string) && strpos($string, '(') === false)
			$imagedetails = getimagesize($string);
		if (is_numeric($string)) {
			return '<img src="/web_gear/chat/av/'.$string.'.png" style="float:left;width: 30px;height: 30px;margin-right: 5px;">';
		} else if (!is_numeric($string) && strpos($string, '(') === false && (substr($string, 0, 7) == 'http://' || substr($string, 0, 8) == 'https://') && (floor($imagedetails[0]/$imagedetails[1]) == 0 || floor($imagedetails[0]/$imagedetails[1]) == 1)) {
			return '<img src="'.explode("#", $string)[0].'" style="float:left;width: 30px;height: 30px;margin-right: 5px;">';
		} else if (!is_numeric($string) && strpos($string, '(') === false && (substr($string, 0, 7) == 'http://' || substr($string, 0, 8) == 'https://') && floor($imagedetails[0]/$imagedetails[1]) >= 2) {
			print '<style>@-webkit-keyframes AviAnimation{from{background-position:0px;}to{background-position:-'.((60*($imagedetails[0]/$imagedetails[1]))).'px;}}@-moz-keyframes AviAnimation{from{background-position:0px;}to{background-position:-'.((60*($imagedetails[0]/$imagedetails[1]))).'px;}}@-ms-keyframes AviAnimation{from{background-position:0px;}to{background-position:-'.((60*($imagedetails[0]/$imagedetails[1]))).'px;}}@-o-keyframes AviAnimation{from{background-position:0px;}to{background-position:-'.((60*($imagedetails[0]/$imagedetails[1]))).'px;}}@keyframes AviAnimation{from{background-position:0px;}to{background-position:-'.((60*($imagedetails[0]/$imagedetails[1]))).'px;}}.avatar'.$num.' {width: 30px;height: 30px;margin: auto;background: url('.METHOD.'//'.DOMAIN.'/web_gear/chat/GetImage7.php?S&W=30&H=30&U='.explode("#", $string)[0].');-webkit-animation: AviAnimation '.($imagedetails[0]/$imagedetails[1]/12).'s steps('.floor($imagedetails[0]/$imagedetails[1]).') infinite;-moz-animation: AviAnimation '.($imagedetails[0]/$imagedetails[1]/12).'s steps('.floor($imagedetails[0]/$imagedetails[1]).') infinite;-ms-animation: AviAnimation '.($imagedetails[0]/$imagedetails[1]/12).'s steps('.floor($imagedetails[0]/$imagedetails[1]).') infinite;-o-animation: AviAnimation '.($imagedetails[0]/$imagedetails[1]/12).'s steps('.floor($imagedetails[0]/$imagedetails[1]).') infinite;animation: AviAnimation '.($imagedetails[0]/$imagedetails[1]/12).'s steps('.floor($imagedetails[0]/$imagedetails[1]).') infinite;}</style>';
			return '<div class="avatar'.$num.'" style="float:left;width: 30px;height: 30px;margin-right: 3px;"></div>';
		} else if (!is_numeric($string) && strpos($string, '(') !== false) {
			$smiley_data	= explode("(", $string);
			$smiley			= explode(")", $smiley_data[1]);
			return '<embed src="/web_gear/flash/smiliesshow.swf" flashvars="r='.$smiley[0].'" wmode="transparent" quality="high" type="application/x-shockwave-flash" align="middle" style="float:left;width: 30px;height: 30px;margin-right: 4px;">';
		}
	}

	public static function EncryptData($string) {
		$result    = '';
		$key       = self::ENCRYPT_KEY;
		for($i = 0; $i < strlen($string); $i++) {
		  $char    = substr($string, $i, 1);
		  $keychar = substr($key, ($i % strlen($key))-1, 1);
		  $char    = chr(ord($char) + ord($keychar));
		  $result .= $char;
	   }
	   return base64_encode($result);
	}
	
	public static function DecryptData($string) {
	   $result 	   = '';
	   $key        = self::ENCRYPT_KEY;
	   $string 	   = base64_decode($string);
	   for($i = 0; $i < strlen($string); $i++) {
		  $char	   = substr($string, $i, 1);
		  $keychar = substr($key, ($i % strlen($key))-1, 1);
		  $char    = chr(ord($char) - ord($keychar));
		  $result .=$char;
	   }
	   return $result;
	}

	public static function hasProxy(): bool {
		foreach(self::PROXY_HEADERS as $header){
			if (array_key_exists($header, $_SERVER) && !empty($_SERVER[$header])) {
				return true;
			}
		}
		foreach(self::PROXY_PORTS as $port) {
			if(@fsockopen(self::getIp(), $port, $errno, $errstr, 1)) {
				return true;
			}
		}
		return false;
	}
	
	public static function detectLanguage(): string {
		$getFromBrowser = array_key_exists('HTTP_ACCEPT_LANGUAGE', $_SERVER) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : 'en';
		$getLanguage = substr($getFromBrowser, 0, 2);
		$language = strtolower($getLanguage);
		if (in_array($language, LANGUAGES)) {
			return $language;
		}
		return DEFAULT_LANG;
	}

	public static function method(): string {
		if (empty($_SERVER['REQUEST_METHOD'])) {
			return 'get';
		}
		$getMethod = $_SERVER['REQUEST_METHOD'];
		if (in_array($getMethod, self::REQUEST_ALLOWED)) {
			return strtolower($getMethod);
		}
		return 'get';
	}

	public static function input($value, $sanatize = true) {
		if (array_key_exists($value, $_REQUEST)) {
			if ($sanatize) {
				return strip_tags($_REQUEST[$value]);
			}
			return $_REQUEST[$value];
		}
		return null;
	}
	
    public static function protection(string $string) {  
        $string = htmlspecialchars(trim(addslashes(stripslashes(strip_tags($string)))));  
        $string = str_replace(chr(160), '', $string);  
		return $string; 
    }
	
	public static function post($value, $sanatize = true) {
		if (array_key_exists($value, $_POST)) {
			if ($sanatize) {
				return self::protection($_POST[$value]);
			}
			return $_POST[$value];
		}
		return null;
	}
	
	public static function get($value, $sanatize = true) {
		if (array_key_exists($value, $_GET)) {
			if ($sanatize) {
				return self::protection($_GET[$value]);
			}
			return $_GET[$value];
		}
		return null;
	}

	public static function rglob($pattern, $flags = 0): array {
	    $files = glob($pattern, $flags); 
	    foreach (glob(dirname($pattern) . '/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir) {
	        $files = array_merge($files, self::rglob($dir . '/' . basename($pattern), $flags));
	    }
	    return $files;
	}
}
