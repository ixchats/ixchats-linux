<?php
namespace Classes;

use Vendor\Database;

class Chat {
	protected $sql;
	protected $core;
	private $bgUrl = METHOD . CDNMAIN . 'web_gear/background/xat_%s.jpg';
	private $games = 'name, doodlerace, matchrace, snakerace, spacewar, switch, darts, zwhack';
	private $backs = [
		'balls', 'winter_holiday', 'stars', 'snowman', 'light', 'bauble', 'disco', 'flames', 'car',
		'hearts', 'fireworks', 'on_the_beach', 'matrix', 'lime_splash', 'spiderman2', 'rock1',
		'velvet', 'splash', 'drops_of_rain', 'rock2', 'pool', 'globe', 'circuit', 'cash',
		'gears', 'south_pacific', 'paper', 'metalglass', 'bliss_like', 'jigsaw'
	];
	private $hasGame = [
		'doodlerace' => 188, 
		'matchrace'  => 192, 
		'snakerace'  => 194, 
		'spacewar'   => 200, 
		'hearts'     => 224, 
		'switch'     => 238, 
		'darts'      => 246, 
		'zwhack'     => 256, 
		'name'       => 'name'
	];
	private	$languages = [
		'aa' => "Afar / Afaraf",
		'ab' => "Abkhazian / Аҧсуа",
		'ae' => "Avestan / avesta",
		'af' => "Afrikaans / Afrikaans",
		'ak' => "Akan",
		'am' => "Amharic / አማርኛ",
		'an' => "Aragonese / Aragonés",
		'ar' => "Arabic / ‫العربية",
		'as' => "Assamese / অসমীয়া",
		'av' => "Avaric / авар мацӀ; магӀарул мацӀ",
		'ay' => "Aymara / aymar aru",
		'az' => "Azerbaijani / azərbaycan dili",
		'ba' => "Bashkir / башҡорт теле",
		'be' => "Belarusian / Беларуская",
		'bg' => "Bulgarian / български език",
		'bh' => "Bihari / भोजपुरी",
		'bi' => "Bislama",
		'bm' => "Bambara / bamanankan",
		'bn' => "Bengali / বাংলা",
		'bo' => "Tibetan / བོད་ཡིག",
		'br' => "Breton / brezhoneg",
		'bs' => "Bosnian / bosanski jezik",
		'ca' => "Catalan / Català",
		'ce' => "Chechen / нохчийн мотт",
		'ch' => "Chamorro / Chamoru",
		'co' => "Corsican / corsu; lingua corsa",
		'cr' => "Cree / ᓀᐦᐃᔭᐍᐏᐣ",
		'cs' => "Czech / česky; čeština",
		'cu' => "Church Slavic / ",
		'cv' => "Chuvash / чӑваш чӗлхи",
		'cy' => "Welsh / Cymraeg",
		'da' => "Danish / dansk",
		'de' => "German / Deutsch",
		'dv' => "Divehi / ‫ދިވެހި",
		'dz' => "Dzongkha / རྫོང་ཁ",
		'ee' => "Ewe / Ɛʋɛgbɛ",
		'el' => "Greek / Ελληνικά",
		'en' => "English",
		'eo' => "Esperanto / ",
		'es' => "Spanish / español",
		'et' => "Estonian / Eesti keel",
		'eu' => "Basque / euskara",
		'fa' => "Persian / ‫فارسی",
		'ff' => "Fulah / Fulfulde",
		'fi' => "Finnish / suomen kieli",
		'fl' => "Filipino",
		'fj' => "Fijian / vosa Vakaviti",
		'fo' => "Faroese / Føroyskt",
		'fr' => "French / français",
		'fy' => "Western Frisian / Frysk",
		'ga' => "Irish / Gaeilge",
		'gd' => "Scottish Gaelic / Gàidhlig",
		'gl' => "Galician / Galego",
		'gn' => "Guaraní / Avañe'ẽ",
		'gu' => "Gujarati / ગુજરાતી",
		'gv' => "Manx / Ghaelg",
		'ha' => "Hausa / ‫هَوُسَ",
		'he' => "Hebrew / ‫עברית",
		'hi' => "Hindi / हिन्दी; हिंदी",
		'ho' => "Hiri Motu / ",
		'hr' => "Croatian / Hrvatski",
		'ht' => "Haitian / Kreyòl ayisyen",
		'hu' => "Hungarian / Magyar",
		'hy' => "Armenian / Հայերեն",
		'hz' => "Herero / Otjiherero",
		'ia' => "Interlingua / ",
		'id' => "Indonesian / Bahasa Indonesia",
		'ie' => "Interlingue / ",
		'ig' => "Igbo / Igbo",
		'ii' => "Sichuan Yi / ꆇꉙ",
		'ik' => "Inupiaq / Iñupiaq; Iñupiatun",
		'io' => "Ido / Ido",
		'is' => "Icelandic / Íslenska",
		'it' => "Italian / Italiano",
		'iu' => "Inuktitut / ᐃᓄᒃᑎᑐᑦ",
		'ja' => "Japanese / 日本語",
		'jv' => "Javanese / basa Jawa",
		'ka' => "Georgian / ქართული",
		'kg' => "Kongo / KiKongo",
		'ki' => "Kikuyu / Gĩkũyũ",
		'kj' => "Kwanyama / Kuanyama",
		'kk' => "Kazakh / Қазақ тілі",
		'kl' => "Kalaallisut / kalaallit oqaasii",
		'km' => "Khmer / ភាសាខ្មែរ",
		'kn' => "Kannada / ಕನ್ನಡ",
		'ko' => "Korean / 한국어; 조선말",
		'kr' => "Kanuri / Kanuri",
		'ks' => "Kashmiri / कश्मीरी; كشميري‎",
		'ku' => "Kurdish / Kurdî; كوردی‎",
		'kv' => "Komi / коми кыв",
		'kw' => "Cornish / Kernewek",
		'ky' => "Kirghiz / кыргыз тили",
		'la' => "Latin / latine; lingua latina",
		'lb' => "Luxembourgish / Lëtzebuergesch",
		'lg' => "Ganda / Luganda",
		'li' => "Limburgish / Limburgs",
		'ln' => "Lingala / Lingála",
		'lo' => "Lao / ພາສາລາວ",
		'lt' => "Lithuanian / lietuvių kalba",
		'lu' => "Luba-Katanga / ",
		'lv' => "Latvian / latviešu valoda",
		'mg' => "Malagasy / Malagasy fiteny",
		'mh' => "Marshallese / Kajin M̧ajeļ",
		'mi' => "Māori / te reo Māori",
		'mk' => "Macedonian / македонски јазик",
		'ml' => "Malayalam / മലയാളം",
		'mn' => "Mongolian / Монгол",
		'mo' => "Moldavian / лимба молдовеняскэ",
		'mr' => "Marathi / मराठी",
		'ms' => "Malay / bahasa Melayu; بهاس ملايو‎",
		'mt' => "Maltese / Malti",
		'na' => "Nauru / Ekakairũ Naoero",
		'nb' => "Norwegian Bokmål / Norsk bokmål",
		'nd' => "North Ndebele / isiNdebele",
		'ne' => "Nepali / नेपाली",
		'ng' => "Ndonga / Owambo",
		'nl' => "Dutch / Nederlands",
		'nn' => "Norwegian Nynorsk / Norsk nynorsk",
		'no' => "Norwegian / Norsk",
		'nr' => "South Ndebele / Ndébélé",
		'nv' => "Navajo / Diné bizaad; Dinékʼehǰí",
		'ny' => "Chichewa / chiCheŵa; chinyanja",
		'oc' => "Occitan / Occitan",
		'oj' => "Ojibwa / ᐊᓂᔑᓈᐯᒧᐎᓐ",
		'om' => "Oromo / Afaan Oromoo",
		'or' => "Oriya / ଓଡ଼ିଆ",
		'os' => "Ossetian / Ирон æвзаг",
		'pa' => "Panjabi / ਪੰਜਾਬੀ; پنجابی‎",
		'pi' => "Pāli / पािऴ",
		'pl' => "Polish / polski",
		'ps' => "Pashto / ‫پښتو",
		'pt' => "Portuguese / Português",
		'qu' => "Quechua / Runa Simi; Kichwa",
		'rm' => "Raeto-Romance / rumantsch grischun",
		'rn' => "Kirundi / kiRundi",
		'ro' => "Romanian / română",
		'ru' => "Russian / русский язык",
		'rw' => "Kinyarwanda / Kinyarwanda",
		'ry' => "Rusyn / русинськый язык",
		'sa' => "Sanskrit / संस्कृतम्",
		'sc' => "Sardinian / sardu",
		'sd' => "Sindhi / सिन्धी; ‫سنڌي، سندھی‎",
		'se' => "Northern Sami / Davvisámegiella",
		'sg' => "Sango / yângâ tî sängö",
		'sh' => "Serbo-Croatian / Српскохрватски",
		'si' => "Sinhalese / සිංහල",
		'sk' => "Slovak / slovenčina",
		'sl' => "Slovenian / slovenščina",
		'sm' => "Samoan / gagana fa'a Samoa",
		'sn' => "Shona / chiShona",
		'so' => "Somali / Soomaaliga; af Soomaali",
		'sq' => "Albanian / Shqip",
		'sr' => "Serbian / српски језик",
		'ss' => "Swati / SiSwati",
		'st' => "Sotho / seSotho",
		'su' => "Sundanese / Basa Sunda",
		'sv' => "Swedish / Svenska",
		'sw' => "Swahili / Kiswahili",
		'ta' => "Tamil / தமிழ்",
		'te' => "Telugu / తెలుగు",
		'tg' => "Tajik / тоҷикӣ; toğikī; ‫تاجیکی‎",
		'th' => "Thai / ไทย",
		'ti' => "Tigrinya / ትግርኛ",
		'tk' => "Turkmen / Türkmen; Түркмен",
		'tl' => "Tagalog / Tagalog",
		'tn' => "Tswana / seTswana",
		'to' => "Tonga / faka Tonga",
		'tr' => "Turkish / Türkçe",
		'ts' => "Tsonga / xiTsonga",
		'tt' => "Tatar / татарча; tatarça; ‫تاتارچا‎",
		'tw' => "Twi / Twi",
		'ty' => "Tahitian / Reo Mā`ohi",
		'ug' => "Uighur / Uyƣurqə; ‫ئۇيغۇرچ ‎",
		'uk' => "Ukrainian / Українська",
		'ur' => "Urdu / ‫اردو",
		'uz' => "Uzbek / O'zbek; Ўзбек; أۇزبېك‎",
		've' => "Venda / tshiVenḓa",
		'vi' => "Vietnamese / Tiếng Việt",
		'vo' => "Volapük / Volapük",
		'wa' => "Walloon / Walon",
		'wo' => "Wolof / Wollof",
		'xh' => "Xhosa / isiXhosa",
		'yi' => "Yiddish / ‫ייִדיש",
		'yo' => "Yoruba / Yorùbá",
		'za' => "Zhuang / Saɯ cueŋƅ; Saw cuengh",
		'zh' => "Chinese / 中文, 汉语, 漢語",
		'zu' => "Zulu / isiZulu"
	];
	public function __construct() {
		$this->sql = new Database();
		$this->core = new Core();
	}
	
	public function doCreate(int $xatid, string $chat, string $desc, string $bg, string $pass, string $email, string $lang, string $tags, string $creator) {
		$this->sql->insert('chats', 
			[
				'name'    => $chat,
				'bg'      => $bg,
				'descr'   => $desc,
				'pass'    => $this->core->hash($pass),
				'creator' => $creator,
				'crc32'   => crc32(microtime()),
				'email'   => $email,
				'tags'    => $tags,
				'promo'   => 0,
				'langdef' => $lang
			]
		);
		$chatid = $this->sql->lastInsertId();
	}

	public function allGroups($limit = 10000): array {
		return $this->sql->fetch_array('select * from chats order by id desc limit ' . $limit . ';');
	}
	
	public function loadComments($chat): array {
		return $this->sql->fetch_array('select * from comments where chat =\'' . $chat . '\';');
	}
	
	public function selectComments(int $chat, int $from, int $quantity = 10): array {
		return $this->sql->fetch_array('select * from comments where chat =\'' . $chat . '\' order by time desc limit '.$from * $quantity.', '.$quantity.';');
	}
	
	public function SearchMessage(string $message, int $from, int $quantity = 10): array {
		return $this->sql->fetch_array('select * from messages where message like \'%' . $message . '%\' and uid2 = 0 order by mid desc limit '.$from * $quantity.', '.$quantity.';');
	}
	
	public function selectLastComments(int $chatid) {
		$getComment = $this->sql->fetch_array('select * from comments where chat =\'' . $chatid . '\' order by id desc limit 1;');
		if (empty($getComment[0])) {
			return false;
		}
		return (object) $getComment[0];
	}
	
	public function CheckEmail(string $email) {
		$getEmail = $this->sql->fetch_array('select * from chats where email =\'' . $email . '\' order by id desc limit 1;');
		if (empty($getEmail[0])) {
			return false;
		}
		return (object) $getEmail[0];
	}
	
	public function doComment(array $parameters) {
		$this->sql->insert('comments',$parameters);
	}
	
	public function InsertData(string $table, array $parameters) {
		$this->sql->insert($table,$parameters);
	}
	
	public function deleteComment(array $parameters): bool {
		$this->sql->delete('comments', $parameters);
		return true;
	}
	
	public function getReport(string $id) {
		if (!$id) {
			return false;
		}
		$getReport = $this->sql->fetch_array('select * from report where id = \'' . crc32($id) . '\' and send = 0 limit 1;');
		if (empty($getReport[0])) {
			return false;
		}
		return (object) $getReport[0];
	}
	
	public function getTranscript(int $id) {
		if (!$id) {
			return false;
		}
		$getTranscript = $this->sql->fetch_array('select * from report where id = \'' . $id . '\' and send = 1 limit 1;');
		if (empty($getTranscript[0])) {
			return false;
		}
		return (object) $getTranscript[0];
	}	
	
	public function get(string $chat) {
		if (!$chat) {
			return false;
		}
		$getChat = $this->sql->fetch_array('select * from chats where name = \'' . $chat . '\' limit 1;');
		if (empty($getChat[0])) {
			return false;
		}
		return (object) $getChat[0];
	}
	
	public function search($chat, $limit = 10) {
		if (!$chat) {
			return false;
		}
		$getChat = $this->sql->fetch_array('select * from chats where name like \'%' . $chat . '%\' limit ' . $limit . ';');
		if (empty($getChat[0])) {
			return false;
		}
		return $getChat;
	}
	
	public function update(string $table, array $values, array $where): bool {
		$this->sql->update($table, $values, $where);
		return true;
	}
		
	public function isAssigned($group, int $power) {
		$assigned = $this->sql->fetch_array('select * from `group_powers` where `chat`=\''.$group.'\' and `power`=\''.$power.'\' and `enabled`=1;');
		empty($assigned) ? $a = 0 : $a = 1;
		return $a;
	}
	
	public function getGroupPowers(string $group): array {
		$chat = [];
		$chat = $this->sql->fetch_array('select * from group_powers where chat = \''.$group.'\';');
		return $chat;
	}
	
	public function GroupPowers(): array {
		$group = [];
		$group = $this->sql->fetch_array('select * from powers where groups != 0;');
		return $group;
	}
	
	public function getChatEmbed(string $name, $pass = false, $w = 728, $h = 486) {
		$getChat = $this->sql->fetch_array('select * from chats where name = \'' . $name . '\' limit 1;');
		$chat    = (object) $getChat[0];
        if ($pass !== false) {
            $pass = '&pass=' . $chat->crc32 . '&xc=32&rf=1';
		} 
		$debug       = isset($_GET['debug']) ? '&debug' : '';
		$uChat       = ($chat->debug > 0 ? 'chat2.swf' : 'chat.swf');
		$transparent = $chat->flag & F_TRANSPARENT ? ' wmode="transparent"' : '';
		$lang        = !empty($chat->language) ? "&rl={$chat->language}" : '';
		$xn          = !empty($chat->xn) ? "&xn={$chat->xn}" : '';
		return "<embed {$transparent} src=\"//".DOMAIN."/web_gear/chat/{$uChat}\" quality=\"high\" width=\"{$w}\" height=\"{$h}\" bgcolor=\"#000000\" name=\"chat\" flashvars=\"id={$chat->id}&gn={$chat->name}{$pass}{$debug}{$lang}\" align=\"middle\" allowscriptaccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"//".DOMAIN."/update_flash.php\">";
	}
	
	public function validateBg(string $url) {
		$change = preg_replace('(https?://)', '', $url);
		if (filter_var($url, FILTER_VALIDATE_URL)) {
			return METHOD . '//' . $change;
		}
		return false;
	}
	
	public function isAlreadyCreated(string $name): bool {
		$getUser = $this->sql->fetch_array('select id from chats where name = \'' . $name . '\' limit 1;');
		return !empty($getUser[0]);
	}
	
	
	public function randBg(): string {
		shuffle($this->backs);
		return sprintf($this->bgUrl, $this->backs[0]);
	}
	
	public function getBackgrounds(): array {
		return $this->backs;
	}
	
	public function getGameRaces(int $id) {
		if (!$id) {
			return false;
		}
		$getChat = $this->sql->fetch_array('select ' . $this->games . ' from chats where id = \'' . $id . '\';');
		$results = [];
		if (empty($getChat[0])) {
			return false;
		}
		foreach($getChat[0] as $k => $v) {
			$results[$this->hasGame[$k]] = $v;
		}
		return (array) $results;
	}

	public function SelectLang(string $lang): string {
		return $this->languages[$lang];
	}
	
	public function cleanPost(string $datas): string {
		$datas = preg_replace("/rxat.pl/i", "BlockedDomain",$datas);
		$datas = preg_replace("/nx4t.in/i", "BlockedDomain",$datas);
		$datas = preg_replace("/qxat.pl/i", "BlockedDomain",$datas);
		$datas = preg_replace("/ixat.pl/i", "BlockedDomain",$datas);
		$datas = preg_replace("/nxat.gq/i", "BlockedDomain",$datas);
		$datas = preg_replace("/nxat.eu/i", "BlockedDomain",$datas);
		$datas = preg_replace("/nx4t.co/i", "BlockedDomain",$datas);
		$datas = preg_replace("/uxat.pl/i", "BlockedDomain",$datas);
		$datas = preg_replace("/yxat.pl/i", "BlockedDomain",$datas);
		$datas = preg_replace("/sxat.eu/i", "BlockedDomain",$datas);
		$datas = preg_replace("/chatsgroup.com/i", "BlockedDomain",$datas);
		$datas = preg_replace("/xatt.pl/i", "BlockedDomain",$datas);
		$datas = preg_replace("/xat.com/i", "BlockedDomain",$datas);
		$datas = preg_replace("/rxat.in/i", "BlockedDomain",$datas);
		$datas = preg_replace("/rxat.ro/i", "BlockedDomain",$datas);
		$datas = preg_replace("/ixa1.tk/i", "BlockedDomain",$datas);
		return trim($datas);
	}
	
	public function isAssignedGROUP($group, int $power) {
		if (!$group || !$power) {
			return false;
		}
		$assigned = $this->sql->fetch_array('select * from `group_powers` where `chat`=\''.$group.'\' and `power`=\''.$power.'\';');
		if (empty($assigned[0])) {
			return false;
		}
		return (object) $assigned[0];
	}
	
	public function InputLangs(): array {
		return $this->languages;
	}
	
	public function getById(int $id) {
		if (!$id) {
			return false;
		}
		$getChat = $this->sql->fetch_array('select * from chats where id = \'' . $id . '\' limit 1;');
		if (empty($getChat[0])) {
			return false;
		}
		return (object) $getChat[0];
	}

	public function getuserById(int $id) {
		if (!$id) {
			return false;
		}
		$getUser = $this->sql->fetch_array('select * from users where id = \'' . $id . '\' limit 1;');
		if (empty($getUser[0])) {
			return false;
		}
		return (object) $getUser[0];
	}
	
	public function getuserByUsername(string $name) {
		if (!$name) {
			return false;
		}
		$getUser = $this->sql->fetch_array('select * from users where username = \'' . $name . '\' limit 1;');
		if (empty($getUser[0])) {
			return false;
		}
		return (object) $getUser[0];
	}
	
	public function CheckPromotion(string $name) {
		if (!$name) {
			return false;
		}
		$getPromo = $this->sql->fetch_array('select * from promoted where chat = \'' . $name . '\' and active =\'1\' limit 1;');
		if (empty($getPromo[0])) {
			return false;
		}
		return (object) $getPromo[0];
	}
	
	public function CheckAdvertise(string $name) {
		if (!$name) {
			return false;
		}
		$getAdvertise = $this->sql->fetch_array('select * from promobanner where chat = \'' . $name . '\' and over > '.time().' limit 1;');
		if (empty($getAdvertise)) {
			return false;
		}
		return (object) $getAdvertise[0];
	}
	
	public function CheckBanner(string $link) {
		if (!$link) {
			return false;
		}
		$checkBanner = $this->sql->fetch_array('select * from banners where link = \'' . $link . '\' limit 1;');
		if (empty($checkBanner[0])) {
			return false;
		}
		return (object) $getAdvertise[0];
	}
	
	public function getAutoAdv(): array {
		return $this->sql->fetch_array('select * from `chats` where `autopromo`!=\'OFF\' and `adimg`!=\'\';');
	}
	
	public function AdvGroups(): array {
		return $this->sql->fetch_array('select * from `promobanner` where `active`=\'1\' and `over` > '. time() . ';');
	}
	
	public function getAutoPromo(): array {
		return $this->sql->fetch_array('select * from `chats` where `autopromo`!=\'OFF\';');
	}
	
	public function PromoGroups(): array {
		return $this->sql->fetch_array('select * from `promoted` where `active`=\'1\' and `over` > ' . time() . ';');
	}

	public function getuRankOnChat(int $id, int $user){

		$getRank = $this->sql->fetch_array('select * from ranks where userid = \'' . $user. '\' and chatid = \'' . $id . '\' limit 1;');
		if (empty($getRank[0])) {
			return false;
		}
		return $getRank[0]['f'];
	}
	
	public function getEvents(int $id, string $type, int $power, string $search){
		$getEvents = [];
		if ($power)  $array['power']  = $power;
		if ($type)   $array['mode'] = $type;
		if ($search) $where2 = 'and (id like \'' . $search. '\' or jd like \'' . $search. '\' or jname = \'' . $search. '\')';
		foreach ($array as $k => $v) {
			$where .= "{$k} = '{$v}' and ";
		}
		$getEvents = $this->sql->fetch_array('select * from events where  ' .$where. ' roomid = \'' . $id. '\' ' .$where2. ' order by time desc;');
		if (empty($getEvents)) {
			return false;
		}
		return $getEvents;
	}
	
	public function CheckPolls(int $id, int $user) {
		if (!$id) {
			return false;
		}
		$VerifyPoll = $this->sql->fetch_array('select * from polls where roomid = \'' . $id . '\' and uid = \'' . $user . '\';');
		if (empty($VerifyPoll[0])) {
			return false;
		}
		return (object) $VerifyPoll[0];
	}

	public function getrank(string $chat) {
		if (!$chat) {
			return false;
		}
		$getrank = $this->sql->fetch_array('select * from ranks where chatid = \'' . $chat . '\' and f =\'1\';');
		if (empty($getrank[0])) {
			return false;
		}
		return (object) $getrank;
	}
	
	public function getrank2(string $chat, string $chat2) {
		if (!$chat) {
			return false;
		}
		$getrank = $this->sql->fetch_array('select * from ranks where chatid = \'' . $chat . '\' and userid = \'' . $chat2 . '\' and f =\'1\';');
		if (empty($getrank[0])) {
			return false;
		}
		return (object) $getrank[0];
	}
	
	public function resetare(string $chat) {
		if (!$chat) {
			return false;
		}
		$resetare = $this->sql->query('delete from ranks where chatid = \'' . $chat . '\' and f!=\'1\';');
		return (object) $resetare;
	}
	
	public function getPoll(int $id) {
		if (!$id) {
			return false;
		}
		$getPoll = $this->sql->fetch_array('select * from polls where roomid = \'' . $id . '\';');
		if (empty($getPoll)) {
			return false;
		}
		return (object) $getPoll;
	}
	
	public function Search2Message(string $message, int $from, int $quantity = 10): array {
		return $this->sql->fetch_array('select * from messages where message like \'%' . $message . '%\' and uid2 = 0 and time < '.$from.' order by mid desc limit '.$quantity.';');
	}
	
	public function doVote(int $uid, int $roomid, int $count) {
		$this->sql->insert('polls', 
			[
				'uid'     => $uid,
				'roomid'  => $roomid,
				'count'   => $count
			]
		);
	}
	
	public function updateData(string $table, array $values, array $where): bool {
		$this->sql->update($table, $values, $where);
		return true;
	}
	
	public function server($acao)
	{
		$svid = 1;
		switch($acao)
		{
			case "status":
				$apid = $this->sql->fetch_array("SELECT * FROM `server`");
				exec("ps -p {$apid[0]['pid']}",$output);
				$sts = isset($output[1]) ? TRUE : FALSE;
				return $sts;
				
			case "start":
				If($this->server("status") == True) return False;
				$command = "nohup python3 /var/_FILES/server2/server.py"; // locate server
				exec( $command." >/dev/null 2>&1 & echo $!", $output) ;
				$this->updateData('server',['pid'	=> (int)$output[0]],['server_domain'	=> 'rxat.ro']);
				sleep(2);
				return $this->server("status");
				
			case "stop":
				If(!$this->server("status")) return True;
				$pid = $this->sql->fetch_array("SELECT * FROM `server`");
				exec("kill -9 {$pid[0]['pid']}");
				$this->updateData('server',['pid'	=> 0],['server_domain'	=> 'rxat.ro']);
				return $this->server("status");
				
			default: 
				return False;
		}
	}
}