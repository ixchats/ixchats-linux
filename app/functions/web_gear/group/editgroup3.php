<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\Chat;
use Classes\User;
use Classes\Core;

class EditGroup3 {
	protected $chat;
	protected $mail;
	protected $user;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->core = new Core();
		$this->mail = new PHPMailer();
	}
	private $ChatLangs = ['n0' => 'International', 'aa' => 'Afar', 'ab' => 'Abkhazian', 'ae' => 'Avestan', 'af' => 'Afrikaans', 'ak' => 'Akan', 'am' => 'Amharic', 'an' => 'Aragonese', 'ar' => 'Arabic', 'as' => 'Assamese', 'av' => 'Avaric', 'ay' => 'Aymara', 'az' => 'Azerbaijani', 'ba' => 'Bashkir', 'be' => 'Belarusian', 'bg' => 'Bulgarian', 'bh' => 'Bihari', 'bi' => 'Bislama', 'bm' => 'Bambara', 'bn' => 'Bengali', 'bo' => 'Tibetan', 'br' => 'Breton', 'bs' => 'Bosnian', 'ca' => 'Catalan', 'ce' => 'Chechen', 'ch' => 'Chamorro', 'co' => 'Corsican', 'cr' => 'Cree', 'cs' => 'Czech', 'cu' => 'Church Slavic', 'cv' => 'Chuvash', 'cy' => 'Welsh', 'da' => 'Danish', 'de' => 'German', 'dv' => 'Divehi', 'dz' => 'Dzongkha', 'ee' => 'Ewe', 'el' => 'Greek', 'en' => 'English', 'eo' => 'Esperanto', 'es' => 'Spanish', 'et' => 'Estonian', 'eu' => 'Basque', 'fa' => 'Persian', 'ff' => 'Fulah', 'fi' => 'Finnish', 'fl' => 'Filipino', 'fj' => 'Fijian', 'fo' => 'Faroese', 'fr' => 'French', 'fy' => 'Western Frisian', 'ga' => 'Irish', 'gd' => 'Scottish Gaelic', 'gl' => 'Galician', 'gn' => 'Guaraní', 'gu' => 'Gujarati', 'gv' => 'Manx', 'ha' => 'Hausa', 'he' => 'Hebrew', 'hi' => 'Hindi', 'ho' => 'Hiri Motu', 'hr' => 'Croatian', 'ht' => 'Haitian', 'hu' => 'Hungarian', 'hy' => 'Armenian', 'hz' => 'Herero', 'ia' => 'Interlingua', 'id' => 'Indonesian', 'ie' => 'Interlingue', 'ig' => 'Igbo', 'ii' => 'Sichuan Yi', 'ik' => 'Inupiaq', 'io' => 'Ido', 'is' => 'Icelandic', 'it' => 'Italian', 'iu' => 'Inuktitut', 'ja' => 'Japanese', 'jv' => 'Javanese', 'ka' => 'Georgian', 'kg' => 'Kongo', 'ki' => 'Kikuyu', 'kj' => 'Kwanyama', 'kk' => 'Kazakh', 'kl' => 'Kalaallisut', 'km' => 'Khmer', 'kn' => 'Kannada', 'ko' => 'Korean', 'kr' => 'Kanuri', 'ks' => 'Kashmiri', 'ku' => 'Kurdish', 'kv' => 'Komi', 'kw' => 'Cornish', 'ky' => 'Kirghiz', 'la' => 'Latin', 'lb' => 'Luxembourgish', 'lg' => 'Ganda', 'li' => 'Limburgish', 'ln' => 'Lingala', 'lo' => 'Lao', 'lt' => 'Lithuanian', 'lu' => 'Luba-Katanga', 'lv' => 'Latvian', 'mg' => 'Malagasy', 'mh' => 'Marshallese', 'mi' => 'Maori', 'mk' => 'Macedonian', 'ml' => 'Malayalam', 'mn' => 'Mongolian', 'mo' => 'Moldavian', 'mr' => 'Marathi', 'ms' => 'Malay', 'mt' => 'Maltese', 'na' => 'Nauru', 'nb' => 'Norwegian Bokmål', 'nd' => 'North Ndebele', 'ne' => 'Nepali', 'ng' => 'Ndonga', 'nl' => 'Dutch', 'nn' => 'Norwegian Nynorsk', 'no' => 'Norwegian', 'nr' => 'South Ndebele', 'nv' => 'Navajo', 'ny' => 'Chichewa', 'oc' => 'Occitan', 'oj' => 'Ojibwa', 'om' => 'Oromo', 'or' => 'Oriya', 'os' => 'Ossetian', 'pa' => 'Panjabi', 'pi' => 'Paadi', 'pl' => 'Polish', 'ps' => 'Pashto', 'pt' => 'Portuguese', 'qu' => 'Quechua', 'rm' => 'Raeto-Romance', 'rn' => 'Kirundi', 'ro' => 'Romanian', 'ru' => 'Russian', 'rw' => 'Kinyarwanda', 'ry' => 'Rusyn', 'sa' => 'Sanskrit', 'sc' => 'Sardinian', 'sd' => 'Sindhi', 'se' => 'Northern Sami', 'sg' => 'Sango', 'sh' => 'Serbo-Croatian', 'si' => 'Sinhalese', 'sk' => 'Slovak', 'sl' => 'Slovenian', 'sm' => 'Samoan', 'sn' => 'Shona', 'so' => 'Somali', 'sq' => 'Albanian', 'sr' => 'Serbian', 'ss' => 'Swati', 'st' => 'Sotho', 'su' => 'Sundanese', 'sv' => 'Swedish', 'sw' => 'Swahili', 'ta' => 'Tamil', 'te' => 'Telugu', 'tg' => 'Tajik', 'th' => 'Thai', 'ti' => 'Tigrinya', 'tk' => 'Turkmen', 'tl' => 'Tagalog', 'tn' => 'Tswana', 'to' => 'Tonga', 'tr' => 'Turkish', 'ts' => 'Tsonga', 'tt' => 'Tatar', 'tw' => 'Twi', 'ty' => 'Tahitian', 'ug' => 'Uighur', 'uk' => 'Ukrainian', 'ur' => 'Urdu', 'uz' => 'Uzbek', 've' => 'Venda', 'vi' => 'Vietnamese', 'vo' => 'Volapük', 'wa' => 'Walloon', 'wo' => 'Wolof', 'xh' => 'Xhosa', 'yi' => 'Yiddish', 'yo' => 'Yoruba', 'za' => 'Zhuang', 'zh' => 'Chinese', 'zu' => 'Zulu'];
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getDelete     	  = (string) \Server::post('Token');
		$getGroup     	  = (string) \Server::post('GroupName');
		$SubmitPass   	  = (string) \Server::post('SubmitPass');
		$GetMedia   	  = (string) \Server::post('GetMedia');
		$GetPowers   	  = (string) \Server::post('GetPowers');
		$Definitions   	  = (string) \Server::post('Definitions');
		$SubmitLost   	  = (string) \Server::post('SubmitLost');
		$DeleteGroup  	  = (string) \Server::post('DeleteGroup');
		$GroupName    	  = (string) \Server::post('name');
		$password     	  = (string) \Server::post('password');
		$email      	  = (string) \Server::post('email');
		$password0     	  = (string) \Server::post('password0');
		$password1     	  = (string) \Server::post('password1');
		$password2     	  = (string) \Server::post('password2');
		$GroupDescription = (string) \Server::post('descrip');
		$iframegp		  = (string) \Server::post('iframegp');
		$background	  	  = (string) \Server::post('background');
		$www	  		  = (string) \Server::post('www');
		$Tags 			  = (string) \Server::post('tags');
		$back 			  = (string) \Server::post('back');
		$Lang 			  = (string) \Server::post('Lang');
		$Radio 	   	   	  = (string) \Server::post('Radio');
		$Comments 		  = (string) \Server::post('Comments');
		$Transparent 	  = (string) \Server::post('Transparent');
		$StartPlayer 	  = (string) \Server::post('StartPlayer');
		$CoOwnerTrusted   = (string) \Server::post('CoOwnerTrusted');
		$Whiz   		  = (string) \Server::post('Whiz');
		$New   		  	  = (string) \Server::post('New');
		$button0   		  = (string) \Server::post('button0');
		$button1   		  = (string) \Server::post('button1');
		$button2   		  = (string) \Server::post('button2');
		$button3  		  = (string) \Server::post('button3');
		$button4  		  = (string) \Server::post('button4');
		$button5  		  = (string) \Server::post('button5');
		$media0  		  = (string) \Server::post('media0', false);
		$media1  		  = (string) \Server::post('media1', false);
		$media2  		  = (string) \Server::post('media2', false);
		$media3  		  = (string) \Server::post('media3', false);
		$media4  		  = (string) \Server::post('media4', false);
		$media5  		  = (string) \Server::post('media5', false);
		$NewPass    	  = (int) \Server::post('NewPass');
		$SubmitRoom    	  = (int) \Server::post('SubmitRoom');
		$SubmitChange  	  = (int) \Server::post('SubmitChange');
		$submit1  	   	  = (int) \Server::post('submit1');
		$RefreshChat  	  = (int) \Server::post('RefreshChat');
		$ResetChat     	  = (int) \Server::post('ResetChat');
		$SetMains     	  = (string) \Server::post('SetMains', false);
		$SetTabs     	  = (int) \Server::post('SetTabs');
		$SetPowers     	  = (string) \Server::post('SetPowers', false);
		$SetBuddy     	  = (string) \Server::post('SetBuddy');
		$SetFlags     	  = (int) \Server::post('SetFlags');
		$BackupUsers      = (int) \Server::post('BackupUsers');
		$MainOwner     	  = (int) \Server::post('MainOwner');
		$GetMains     	  = (int) \Server::post('GetMains');
		$id   	       	  = (int) \Server::post('id');
		$p   	       	  = (int) \Server::post('p');
		$message  		  = (object)[ 'Err' => (object)[]];
		$Features     	  = [$SubmitPass, $SubmitLost, $DeleteGroup, $SubmitChange, $submit1, $ResetChat, $NewPass, $p];
		$EditGroup        = false;
		$ChangePass       = false;
		$chat         	  = '';
		$message       = (object)[];
		$PowerList     = [80, 92, 96, 98, 102, 108, 114, 148, 156, 180, 188, 192, 194, 200, 206, 220, 224, 238, 246, 252 ,256, 278, 296];
		$PowerList2    = [74, 90, 100, 130, 106, 112, 150, 630, 634];
		$powers        = [];
		$group_powers  = [];
		$attached = ['id' => false, 'name' => false];

		while(1) {
			if ($getDelete) {
				if (!Validator::isAlphanumeric($getDelete) || strlen($getDelete) != 20 || !$getGroup) {
					break;
				}

				if (!Validator::isValidChatName($getGroup)) {
					$message->Err->deletegroup = 'Wrong group-name.';
					break;
				}

				$chat = $this->chat->get($getGroup);
				if (!$chat) {
					$message->Err->deletegroup = 'Wrong group-name.';
					break;
				}

				if ($chat->deletecode !== $getDelete) {
					break;
				}

				$this->user->updateData('chats',['crc32' => '', 'creator' => '', 'deletecode' => '', 'sc' => '', 'tags' => '', 'descr' => '', 'email' => '', 'pass' => $this->core->hash($this->core->rand(20)) , 'OffTime' => 0],['name' => $chat->name]);
				$this->user->deleteData('ranks',['chatid' => $chat->id]);

				$message->Err->deletegroupok = 'Your' . $chat->name . 'info was deleted';
				break;
			}
			switch($Features) {
				case $SubmitChange && $SubmitChange == 1: 
					if (!Validator::isValidChatName($GroupName)) {
						$message->Err->editgroup = 'Wrong group-name.';
						break;
					}
					$ChangePass = true;
				break;
				case $SubmitPass && ($SubmitPass == 'Submit' || $SubmitPass == '1'): 
				case $ResetChat && $ResetChat == 1:
				case $GetPowers && $GetPowers == 1:
				case $Definitions && $Definitions == 1:
				case $submit1 && $submit1 == 1: 
				case $NewPass && $NewPass == 1: 
				case $p && Validator::isNumeric($p): 
					if (!Validator::isValidChatName($GroupName)) {
						$message->Err->editgroup = 'Wrong group-name.';
						break;
					}
					$chat = $this->chat->get($GroupName);
					if (!$chat) {
						$message->Err->editgroup = 'Wrong group-name.';
						break;
					}
					if ($chat->active != 1) {
						$message->Err->editgroup = 'Your group is not activated. Please go to your email';
						break;
					}
					$password = $password0 ? $password0 : $password;
					if (!$this->core->validate($password, $chat->pass)) {
						$user = $this->user->getUserByUsername(\Server::protection($_COOKIE['user']));
						$main = $this->chat->getrank2($chat->id, $user->id);
						if ($this->user->verifyPass($password) && $main){
							}else{
							$message->Err->editgroup = \Server::PrintResult('buy','wrongpassword');
							break;
						}
						
					}
					$data = '';
					$EditGroup = true;
					
					$powers       = $this->chat->GroupPowers();
					$group_powers = $this->chat->getGroupPowers($chat->name);
					
					
					
					$arr3 = [];
					$gps_ids = array_column($group_powers, 'power');
					
					
					foreach ($powers as $power) {
						if ($power['groups'] > 0) {
							$arr[70] = ['banish', 'Banish a user'];
							$arr[72] = ['gkaoani', 'Kaoani group smilies '];
							$arr[74] = ['gline', 'Smiley line', '[^0-9a-z,]', 256];
							$arr[76] = ['gkaliens', 'Alien Kaoani smilies'];
							$arr[78] = ['supporter', 'Support a group'];
							$arr[80] = ['gcontrol', 'Configure your chatroom', '[^0-9a-z,\":{}\\.]', 256, 1];
							$arr[82] = ['sea', 'Sea-themed smilies'];
							$arr[84] = ['blastpro', 'Promotion animations'];
							$arr[86] = ['blastban', 'Ban animations'];
							$arr[88] = ['blastde', 'Demotion animations'];
							$arr[90] = ['bad', 'Custom bad words filter', "[\\'\"<>;&#=]", 100];
							$arr[92] = ['horror', 'Horror flix', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[94] = ['blastkick', 'Kick animations'];
							$arr[96] = ['winter', 'Winter smilies and flix', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[98] = ['feast', 'Feast smilies and flix', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[100] = ['link', 'Custom link words', '[^0-9a-z,]', 1250];
							$arr[102] = ['fairy', 'Fairy flix and smilies', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[104] = ['gkbear', 'Kaoani bear smilies'];
							$arr[106] = ['gscol', 'Default smiley color', '[^0-9#rgb+-abcdef]', 60];
							$arr[108] = ['love', 'Love smilies and flix', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[110] = ['gkkitty', 'Kaoani kitty smilies'];
							$arr[112] = ['announce', 'Custom message', "[\\'\"<>;&#=]", 256];
							$arr[114] = ['rankpool', 'Private pool for your chat', "[\\'<>;&#=]", 80, 1];
							$arr[116] = ['animal', 'Animal smilies'];
							$arr[118] = ['gkpanda', 'Kaoani panda smilies'];
							$arr[126] = ['banpool', 'Pool for banned users'];
							$arr[130] = ['gback', 'Group smiley backs'];
							$arr[134] = ['snakeban', 'Snake ban'];
							$arr[136] = ['spaceban', 'Space ban'];
							$arr[140] = ['matchban', 'Match ban'];
							$arr[148] = ['spooky', 'Spooky power', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[150] = ['bot', 'Add a bot to your chat', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[152] = ['mazeban', 'Maze ban'];
							$arr[156] = ['santa', 'Santa flix and smilies', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[162] = ['codeban', 'Code Ban'];
							$arr[176] = ['reverse', 'Reverse ban'];
							$arr[180] = ['gsound', 'Group sounds', "[^0-9a-z,\":{}]", 100, 1];
							$arr[184] = ['zip', 'Zip ban'];
							$arr[188] = ['doodlerace', 'DoodleRace game', "[^0-9a-z,\":{}]", 50, 1];
							$arr[192] = ['matchrace', 'MatchRace game', "[^0-9a-z,\":{}]", 50, 1];
							$arr[194] = ['snakerace', 'Snake race', "[^0-9a-z,\":{}]", 50, 1];
							$arr[200] = ['spacewar', 'Space war game', "[^0-9a-z,\":{}]", 50, 1];
							$arr[206] = ['lang', 'Custom language', "[\\'\"<>;&=]", 100, 1];
							$arr[220] = ['vote', 'Add a poll to your chat', "[\\'\"<>;&=]", 100, 1];
							$arr[224] = ['hearts', 'Hearts card game', "[^0-9a-z,\":{}]", 50, 1];
							$arr[238] = ['switch', 'Switch card game', "[^0-9a-z,\":{}]", 50, 1];
							$arr[246] = ['darts', 'Dart zing game', "[^0-9a-z,\":{}]", 50, 1];
							$arr[252] = ['redirect', 'Redirect a chat', "[^0-9a-z,\":{}]", 50, 1];
							$arr[256] = ['zwhack', 'Whack a zombie game', "[^0-9a-z,\":{}]", 50, 1];
							$arr[278] = ['springflix', 'Spring and flix smilies', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[296] = ['summerflix', 'Summer flix and smilies', "[^0-9a-z\\-+,#\\.\":{}]", 100, 1];
							$arr[310] = ['manage', 'Manage group users'];
							$arr[318] = ['backup', 'Group daily backup'];
							$arr[472] = ['superblastban', 'Super blast bans'];
							$arr[478] = ['superblastkick', 'Super blast kicks'];
							$arr[488] = ['rankscroll', 'Rank dependent scroll'];
							$arr[598] = ['main', 'Main powers'];
							$arr[630] = ['bantimes', 'Preset times for bans', "[\'\"<>;&#=]", 1250];
							$arr[634] = ['whitelist', 'Whitelist links for guests', "[^0-9a-zA-Z,:\.\-]", 1250];
							$arr[636] = ['gstyle', 'Styles for your group'];

							$arr2[$power['id']] = [
								'd1' => $power['shortabout'],
								'd2' => $power['description'],
								'f' => $power['cost'],
								's' => $power['name'],
								'x' => $power['cost']
							];
						}
						
						if (in_array($power['id'], $gps_ids)) {
							$idx = array_search($power['id'], $gps_ids);
							$gps = $group_powers[$idx];
							
							if($gps['count'] > 1){
								$counts = "={$gps['count']}";
							}else{
								$counts = '';
							}
							
							$asign = array($gps['assignedBy'].''.$counts.':', $gps['enabled']);

							$powername = $power['name'] == 'rankpool' ? 'pools' : $power['name'];
							if (isset($chat->{$powername})) {
								if ($powername == "pools") {
									$asign[] = str_replace("'", '"', $chat->pools);
								}elseif($powername == "redirect"){
									$asign[] = str_replace("'", '"', $chat->redirect);
								}else {
									$asign[] = $chat->{$powername};
								}
							}

							$arr3[$power['id']] = implode('|', $asign);
						}
					}

					if (!empty($chat->attached)) {
						$getAttached = $this->chat->get($chat->attached);
						if ($getAttached) {
							$attached = ['id' => $getAttached->id, 'name' => $getAttached->name];
						}
					}
					$fundal = ($chat->outter) ? $chat->outter : \Server::DecryptData($chat->css);

					if ($SubmitPass && $SubmitPass == '1')
					{
						$data = (object) array(
							'FullMain'    =>    "1",
							'roomid'    =>    $chat->id,
							'tags'    =>    $chat->tags,
							'name'    =>    $chat->name,
							'www'    =>    ';='.$fundal.';='.$chat->iframe.';=',
							'width' => '540',
							'height' => '405',
							'background' => (string) ''.$chat->bg.';='.$attached['name'].';='.$attached['id'].';='.$chat->language.';='.$chat->radio.';='.$chat->button.';='.$chat->portrait.';='.$chat->landscape.';='.$chat->flagName.';='.$this->ChatLangs[$chat->flagName].';='.$chat->grad.';='.$chat->font.';='.$chat->glow.'',
							'descrip' => $chat->descr,
							'flags' => (int) $chat->flag,
							'TokenKey' => 'EditgroupToken.'. $chat->id .'.'. $chat->crc32 .'',
							'Powers' => array(
									'Definitions' => $arr,
									'GroupPowers' => $arr2,
									'Powers' => $arr3
							)
						);

						if (!$this->core->validate($password, $chat->pass)) {
							$main = $this->chat->getrank($chat->id);
							if($main){
								foreach ($main as $mains) {
									$mainn[$mains['userid']] = (int)$mains['permissions'];
								}
								$data->mains = json_encode($mainn);
							}
						}
					}
					else if ($GetPowers && $GetPowers == '1')
					{
						$data = (object) array(
							'FullMain' => "1",
							'Powers' => array(
								'Definitions' => $arr,
								'GroupPowers' => $arr2,
								'Powers' => $arr3
							)
						);
					}
					$message->Err = $data;

					if ($ResetChat) {
						$this->chat->resetare($chat->id);
						$this->user->updateData('chats',['crc32' => crc32(microtime())],['id' => $chat->id]);
						$data = (object) array(
							"FullMain" => 1,
							"ChatPass" => crc32(microtime()),
							"ResetChat" => "<e done \/>"
						);
						$message->Err = $data;
						break;
					}

					if ($NewPass) {
						$ChangePass = true;
						if (!Validator::isFilled([$password0, $password1, $password2, $GroupName])) {
							break;
						}
						if (substr($password1, 0, 2) == 'XT') {
							$message->Err->changepass = \Server::PrintResult('edit','passnoxt');
							break;
						}
						if (strlen($password1) < 6) {
							$message->Err->changepass = \Server::PrintResult('edit','passnok');
							break;
						}
						if ($password1 != $password2) {
							$message->Err->changepass = \Server::PrintResult('login','passne');
							break;
						}
						$this->user->deleteData('ranks', ['chatid' => $chat->id]);
						$this->user->updateData('chats',['crc32' => crc32(microtime()), 'pass' => $this->core->hash($password1)],['id' => $chat->id]);
						$message->Err->changepassok = \Server::PrintResult('edit','passupd');
						break;
					}

					if ($submit1) {
						$cbackground = explode(';=', $background);
						$www = explode(';=', $www);
						// 0 - chat bg
						// 1 - chat embed
						// 2 - 25447747 - 
						// 3 - chat language
						// 4 - radio
						// 5 - chat button
						// ex: $cbackground[0]
						$test = json_decode($SetPowers, true);
						foreach ($group_powers as $gps) {
							if(isset($test[$gps['power']])){
								$asing = explode('|', $test[$gps['power']]);
								if ($asing[1] == '1' && $gps['enabled'] == 0)
								{
									$this->user->updateData('group_powers',['enabled' => 1],['chat' => $chat->name, 'power' => $gps['power']]);
								}
								else if ($asing[1] == '0' && $gps['enabled'] == 1)
								{
									$this->user->updateData('group_powers',['enabled' => 0],['chat' => $chat->name, 'power' => $gps['power']]);
								}
							}
						}
						foreach ($powers as $gp) {
							if (in_array($gp['id'], $PowerList)) {
								if (isset($test[$gp['id']]) && $this->chat->isAssigned($chat->name, $gp['id']) == 1) {
									$asing = explode('|', $test[$gp['id']]);
									if (count($asing) == 3)
									{
										$powername = $gp['name'] == 'rankpool' ? 'pools' : $gp['name'];
										$this->user->updateData('chats',[$powername => $this->handleJson($gp['id'], $asing[2])],['name' => $chat->name]);
									}
								}
							}
							if (in_array($gp['id'], $PowerList2)) {
								if (isset($test[$gp['id']]) && $this->chat->isAssigned($chat->name, $gp['id']) == 1) {
									$asing = explode('|', $test[$gp['id']]);
									if (count($asing) == 3)
									{
										$this->user->updateData('chats',[$gp['name'] => $asing[2]],['name' => $chat->name]);
									}
								}
							}
						}
						if (!$SetPowers){
							if($SetFlags == null){
								$SetFlags = $chat->flag;
							}

							if(!empty($cbackground[4])){
								$cbackground[4] = $cbackground[4];
								$radio = $chat->radio;
							}

							if ($SetBuddy == null){
								$SetBuddy = $chat->attached;
							}
							if($SetTabs == null){
								$media0 = html_entity_decode(\Server::DecryptData($chat->HTML));
								$media1 = html_entity_decode(\Server::DecryptData($chat->HTML2));
								$media2 = html_entity_decode(\Server::DecryptData($chat->HTML3));
								$media3 = html_entity_decode(\Server::DecryptData($chat->HTML4));
								$media4 = html_entity_decode(\Server::DecryptData($chat->HTML5));
								$media5 = html_entity_decode(\Server::DecryptData($chat->HTML6));
								$button0 = $chat->button0;
								$button1 = $chat->button1;
								$button2 = $chat->button2;
								$button3 = $chat->button3;
								$button4 = $chat->button4;
								$button5 = $chat->button5;
							}
							$this->user->updateData('chats',['crc32' => crc32(microtime()), 'OffTime' => time()],['id' => $chat->id]);
							$this->user->updateData('chats',
								[
									'flag'              => $Transparent && $Transparent == 'ON' ? $chat->flag |= F_TRANSPARENT : $chat->flag &= ~F_TRANSPARENT,
									'comments' 	        => $Comments && $Comments == 'ON' ? 1 : 0,
									'CoOwnerTrusted'    => $CoOwnerTrusted && $CoOwnerTrusted == 'ON' ? 1 : 0,
									'StartPlayer'   	=> $StartPlayer && $StartPlayer == 'ON' ? 1 : 0,
									'Whiz'   		    => $Whiz && $Whiz == 'ON' ? 1 : 0,
									'langdef'   	    => isset($Lang) ? $Lang : $chat->langdef,
									'outter'   	        => strpos($www[1], '}') == false ? $www[1] : '',
									'css'   	        => strpos($www[1], '}') == true ? \Server::EncryptData($www[1]) : '',
									'mode'   	        => strpos($www[1], '}') == true ? 1 : 0,
									'tags'   	        => isset($Tags) ? $Tags : $chat->tags,
									'descr'   	        => isset($GroupDescription) ? $GroupDescription : $chat->descr,
									'iframe'   	        => isset($www[2]) ? $www[2] : $chat->iframe,
									'radio'   	        => isset($cbackground[4]) ? $cbackground[4] : $chat->radio,
									'bg'   	       		=> isset($cbackground[0]) ? $cbackground[0] : $chat->bg,
									'button'   	       	=> isset($cbackground[5]) ? $cbackground[5] : $chat->button,
									'portrait'   	    => isset($cbackground[6]) ? $cbackground[6] : $chat->portrait,
									'landscape'   	    => isset($cbackground[7]) ? $cbackground[7] : $chat->landscape,
									'flagName'   	    => isset($cbackground[8]) ? $this->chat->cleanPost($cbackground[8]) : $chat->flagName,
									'grad'   	    => isset($cbackground[10]) ? $this->chat->cleanPost($cbackground[10]) : $chat->grad,
									'font'   	    => isset($cbackground[11]) ? $this->chat->cleanPost($cbackground[11]) : $chat->font,
									'glow'   	    => isset($cbackground[12]) ? $this->chat->cleanPost($cbackground[12]) : $chat->glow,
									'attached'          => $SetBuddy,
									'flag'   	       	=> isset($SetFlags) ? $SetFlags : $chat->flag,
									'HTML'   	        => isset($media0) ? \Server::EncryptData(htmlentities($media0)) : $chat->HTML,
									'HTML2'   	        => isset($media1) ? \Server::EncryptData(htmlentities($media1)) : $chat->HTML2,
									'HTML3'   	        => isset($media2) ? \Server::EncryptData(htmlentities($media2)) : $chat->HTML3,
									'HTML4'   	        => isset($media3) ? \Server::EncryptData(htmlentities($media3)) : $chat->HTML4,
									'HTML5'   	        => isset($media4) ? \Server::EncryptData(htmlentities($media4)) : $chat->HTML5,
									'HTML6'   	        => isset($media5) ? \Server::EncryptData(htmlentities($media5)) : $chat->HTML6,
									'button0'   	    => htmlentities($button0) ? htmlentities($button0) : $chat->button0,
									'button1'   	    => htmlentities($button1) ? htmlentities($button1) : $chat->button1,
									'button2'   	    => htmlentities($button2) ? htmlentities($button2) : $chat->button2,
									'button3'   	    => htmlentities($button3) ? htmlentities($button3) : $chat->button3,
									'button4'   	    => htmlentities($button4) ? htmlentities($button4) : $chat->button4,
									'button5'   	    => htmlentities($button5) ? htmlentities($button5) : $chat->button5
								],
								[
									'id' => $chat->id
								]
							);
							$chat = $this->chat->get($GroupName);
							if (!empty($chat->attached)) {
								$getAttached = $this->chat->get($chat->attached);
								if ($getAttached) {
									$attached = ['id' => $getAttached->id, 'name' => $getAttached->name];
								}
							}
							$fundal = ($chat->outter) ? $chat->outter : \Server::DecryptData($chat->css);
						}
						if (strlen($SetPowers) > 0){
							header('Content-Type: application/json');
							$data = (object) array(
								'FullMain' => "1",
								'SetPowers' => $SetPowers
							);
						} else {
							$data = (object) array(
								'FullMain'    =>    "1",
								'SaveAppearanceOk'    =>    "Appearance",
								'SaveSettingsOk'    =>    "Settings",
								'background' => (string) ''.$chat->bg.';='.$attached['name'].';='.$attached['id'].';='.$chat->language.';='.$chat->radio.';='.$chat->button.';='.$chat->portrait.';='.$chat->landscape.';='.$chat->flagName.';='.$this->ChatLangs[$chat->flagName].';='.$chat->grad.';='.$chat->font.';='.$chat->glow.'',
								'descrip'    =>    $chat->descr,
								'flags'    =>   (int) $chat->flag,
								'height' => 480,
								'name'    =>    $chat->name,
								'tags'    =>    $chat->tags,
								'width' => 540,
								'www'    =>    ';='.$fundal.';='.$chat->iframe.';='
							);
							if ($SetTabs > 0){
								$data->SaveTabsOk = 'Tabs';
							}
						}
						$message->Err = $data;
						$chat = $this->chat->get($chat->name);
						if ($SetTabs > 0){
							$this->user->updateData('chats',
								[
									'HTML'   	        => \Server::EncryptData($media0),
									'HTML2'   	        => \Server::EncryptData($media1),
									'HTML3'   	        => \Server::EncryptData($media2),
									'HTML4'   	        => \Server::EncryptData($media3),
									'HTML5'   	        => \Server::EncryptData($media4),
									'HTML6'   	        => \Server::EncryptData($media5),
									'button0'   	    => $button0,
									'button1'   	    => $button1,
									'button2'   	    => $button2,
									'button3'   	    => $button3,
									'button4'   	    => $button4,
									'button5'   	    => $button5
								],
								[
									'id' => $chat->id
								]
							);
						}
						break;
					}
				break;
				case (strlen($SetMains) > 0):
						$set = json_decode($SetMains);

						// 1st
						$chat = $this->chat->get($GroupName);

						// 2nd
						$this->user->deleteData('ranks', ['chatid' => $chat->id], ['f' => 1]);

						// 3rd
						$main = $this->chat->getrank($chat->id);
	
						$xxa = array(
							"FullMain" => 1,
							"mains" => array(
								array(),
								"",
							)
						);

						foreach ($set as $id => $permisiune)
						{
							$user = is_numeric($id) ? $this->user->getUserByid($id) : $this->user->getUserByUsername($id);
							if ($user && $user->username != '') {
								$checkranks = $this->chat->getuRankOnChat($chat->id, $user->id);
								if(!empty($checkranks)){
									$xxa['mains'][0][$id] = [(int)$permisiune, $user->username];
									$this->chat->update('ranks', ['f' => 1, 'permissions' => $permisiune], ['chatid' => $chat->id, 'userid' => $user->id]);
								} else{
									$xxa['mains'][0][$id] = [(int)$permisiune, $user->username];
									$this->user->InsertData('ranks', ['userid' => $user->id, 'chatid' => $chat->id, 'f' => 1, 'permissions' => $permisiune]);
								}
							} else {
								$xxa['mains'][1] = $id;
							}
						}

						if ($main) {
							foreach ($main as $mains) {
								$user = $this->user->getUserByid($mains['userid']);
								$xxa['mains'][0][$mains['userid']] = [(int)$mains['permissions'], $user->username];
							}
						}

						$data = (object) $xxa;

						$message->Err = $data;
					break;
				case $GetMains && $GetMains == '1':
						$chat = $this->chat->get($GroupName);
						$main = $this->chat->getrank($chat->id);
						if($main){
							foreach ($main as $mains) {
								$user = $this->user->getUserByid($mains['userid']);
								$mainn[$mains['userid']] = [
								  (int)$mains['permissions'],
								  $user->username
								];
							}
							$data = (object) array(
								"FullMain" => 1,
								"mains" => [$mainn]
							);
						}else{
							$data = (object) array(
								"FullMain" => 1
							);
						}
						$message->Err = $data;
					break;
				case $RefreshChat && $RefreshChat == '1':
						$data = (object) array(
							"FullMain" => 1,
							"ResetChat" => "<e done \/>"
						);
						$message->Err = $data;
					break;
				case $GetMedia && $GetMedia == '1':
						$chat = $this->chat->get($GroupName);
						if($chat->button0){
							$md1 = html_entity_decode(\Server::DecryptData($chat->HTML));
							$media = "{$chat->button0};={$md1};=";
						}
						if($chat->button1){
							$md2 = html_entity_decode(\Server::DecryptData($chat->HTML2));
							$media2 = "{$chat->button1};={$md2};=";
						}
						if($chat->button2){
							$md3 = html_entity_decode(\Server::DecryptData($chat->HTML3));
							$media3 = "{$chat->button2};={$md3};=";
						}
						if($chat->button3){
							$md4 = html_entity_decode(\Server::DecryptData($chat->HTML4));
							$media4 = "{$chat->button3};={$md4};=";
						}
						if($chat->button4){
							$md5 = html_entity_decode(\Server::DecryptData($chat->HTML5));
							$media5 = "{$chat->button4};={$md5};=";
						}
						if($chat->button5){
							$md6 = html_entity_decode(\Server::DecryptData($chat->HTML6));
							$media6 = "{$chat->button5};={$md6};=";
						}
						$media = (object) array(
							"FullMain" => 1,
							"Media" => "0;={$media}{$media2}{$media3}{$media4}{$media5}{$media6}"
						);
						$message->Err = $media;
					break;
				case $SubmitLost && $SubmitLost == '1':
					if (!Validator::isValidChatName($GroupName)) {
						$message->Err->forgotpass = 'Wrong group-name.';
						break;
					}
					$chat = $this->chat->get($GroupName);
					if (!$chat) {
						$message->Err->forgotpass = 'Wrong group-name.';
						break;
					}
					if (!$email) {
						$message->Err->forgotpass = \Server::PrintResult('edit','emailno');
						break;
					}
					if (!Validator::isValidEmail($email)) {
						$message->Err->forgotpass = \Server::PrintResult('edit','emailno');
						break;
					}
					if ($chat->email != $email) {
						$message->Err->forgotpass = \Server::PrintResult('edit','emailno');
						break;
					}
					if (smtpmail == true) {
						$Details = implode(',',$this->core->userdetails($this->user->ipAddr()));
						$NewPass = 'XT'.rand(100000000,9999999999);
						$this->user->updateData('chats',['pass' => $this->core->hash($NewPass)],['name' => $chat->name]);
						$this->mail->IsSMTP();
						$this->mail->SMTPAuth   = true;
						$this->mail->SMTPSecure = SMTP_Sec;
						$this->mail->Host       = host_smtp;
						$this->mail->Port       = port_gmail;
						$this->mail->Username   = mail_gmail;
						$this->mail->Password   = pass_gmail;
						$this->mail->From       = mail_gmail;
						$this->mail->FromName   = 'INFO ' . XAT_NAME;
						$this->mail->Subject    = XAT_NAME . '- Recover password ' . $chat->name;
						$this->mail->AltBody    = "";
						$this->mail->Body       = "Hi {$chat->creator} ,\r\n\r\nThe password for the group {$chat->name} is :\r\n\r\n{$NewPass}\r\n\r\n Request for IP was: {$Details}\r\n\r\nFor immediate help with the  ".XAT_NAME." go here: visit this link:".METHOD."//".DOMAIN."/Help \r\n\r\nFor other problems, comments or suggestions, use the Facebook page at the following link: ".FACEBOOK." \r\n\r\nOur web: ".METHOD."//".DOMAIN."\r\nSincerely,\r\n ".XAT_NAME." Staff.\r\n\r\n=== THIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT ANSWER ===\r\n\r\n";
						$this->mail->AddAddress($chat->email, "");
						$this->mail->IsHTML(false);
						$this->mail->Send();
					}
					$message->Err->forgotpass = \Server::PrintResult('chat','emailsent');
				break;
				case $DeleteGroup && $DeleteGroup == '1':
					if (!Validator::isValidChatName($GroupName)) {
						$message->Err->deletegroup = 'Wrong group-name.';
						break;
					}
					$chat = $this->chat->get($GroupName);
					if (!$chat) {
						$message->Err->deletegroup = 'Wrong group-name.';
						break;
					}
					if (!$email) {
						$message->Err->deletegroup = \Server::PrintResult('edit','emailno');
						break;
					}
					if (!Validator::isValidEmail($email)) {
						$message->Err->deletegroup = \Server::PrintResult('edit','emailno');
						break;
					}
					if ($chat->email != $email) {
						$message->Err->deletegroup = \Server::PrintResult('edit','emailno');
						break;
					}
					if (!$this->core->validate($password, $chat->pass)) {
						$message->Err->deletegroup = \Server::PrintResult('buy','wrongpassword');
						break;
					}
					if (smtpmail == true) {
						$DeleteCode = $this->core->rand(20);
						$this->user->updateData('chats',['deletecode' => $DeleteCode],['name' => $chat->name]);
						$this->mail->IsSMTP();
						$this->mail->SMTPAuth   = true;
						$this->mail->SMTPSecure = SMTP_Sec;
						$this->mail->Host       = host_smtp;
						$this->mail->Port       = port_gmail;
						$this->mail->Username   = mail_gmail;
						$this->mail->Password   = pass_gmail;
						$this->mail->From       = mail_gmail;
						$this->mail->FromName   = 'INFO ' . XAT_NAME;
						$this->mail->Subject    = 'Delete info from '. XAT_NAME . ' chat group: ' . $chat->name;
						$this->mail->AltBody    = "";
						$this->mail->Body       = 'Click here to delete info from '.XAT_NAME.' chat group '.$chat->name.': '.METHOD.'//'.DOMAIN.'/chats?GroupName='.$chat->name.'&Token='.$DeleteCode;
						$this->mail->AddAddress($chat->email, "");
						$this->mail->IsHTML(false);
						$this->mail->Send();
					}
					$message->Err->deletegroupok = \Server::PrintResult('chat','emailsent');
				break;
			}
			break;
		}
		echo json_encode($message);
	}

	private function handleJson($id, $json) {
		if ($json == "{}" || empty($json))
			return "";

		$json = json_decode($json, true);
		$allowedRanks = [0, 2, 3, 5, 7, 8, 10, 11, 14];
		switch($id)  {
			case "80":
				$rankStuff = ['mg', 'mb', 'mm', 'kk', 'bn', 'ubn', 'ss', 'dnc', 'bdg', 'ns', 'yl', 'rc', 'ka', 'lkd', 'rgd', 'prm', 'bge', 'sme', 'rl', 'p', 'cbs', 'ssb', 'cm', 'j'];
				foreach ($rankStuff as $rank) { 
					if (isset($json[$rank]))
						$json[$rank] = is_numeric($json[$rank]) && in_array($json[$rank], $allowedRanks) ? $json[$rank]:0;
				}
				//Mod max ban time 0-99 (0 = forever)
				if (isset($json['mbt']))
					$json['mbt'] = is_numeric($json['mbt']) ? ($json['mbt'] > 99 || $json['mbt'] < 0 ? 6:$json['mbt']):6;
				
				//Owner max ban time 0-999 (0 = forever)
				if (isset($json['obt']))
					$json['obt'] = is_numeric($json['obt']) ? ($json['obt'] > 999 || $json['obt'] < 0 ? 0:$json['obt']):0;
				
				//Preferred blast 0-4
				if (isset($json['bst']))
					$json['bst'] = is_numeric($json['bst']) ? ($json['bst'] > 4 || $json['bst'] < 0 ? 0:$json['bst']):0;
				
				//Max toons
				if (isset($json['mxt']))
					$json['mxt'] = is_numeric($json['mxt']) ? ($json['mxt'] < 0 ? 10:$json['mxt']):10;
				
				//Ad position 0-2
				if (isset($json['ads']))
					$json['ads'] = is_numeric($json['ads']) ? ($json['ads'] > 2 || $json['ads'] < 0 ? 0:$json['ads']):0;
				
				//Red card factor 0.1-10
				if (isset($json['rf']))
					$json['rf'] = is_numeric($json['rf']) ? ($json['rf'] > 10 || $json['rf'] < 0.1 ? 6:$json['rf']):6;
				
				//Protect default
				if (isset($json['pd']))
					$json['pd'] = is_numeric($json['pd']) ? ($json['pd'] > 5 || $json['pd'] < 1 ? 1:$json['pd']):1;
				
				//Protect time (hours) 0.1-12
				if (isset($json['pt']))
					$json['pt'] = is_numeric($json['pt']) ? ($json['pt'] > 12 || $json['pt'] < 0.1 ? 1:$json['pt']):1;
				
				//Member flood trust 1-99
				if (isset($json['mft']))
					$json['mft'] = is_numeric($json['mft']) ? ($json['mft'] > 99 || $json['mft'] < 1 ? 4:$json['mft']):4;
				
				//Flood threshold 10-200
				if (isset($json['ft']))
					$json['ft'] = is_numeric($json['ft']) ? ($json['ft'] > 200 || $json['ft'] < 10 ? 50:$json['ft']):50;	

				//Can jinx same rank 0-1
				if (isset($json['js']))
					$json['js'] = is_numeric($json['js']) ? ($json['js'] > 1 || $json['js'] < 0 ? 0:$json['js']):0;
				
				//Mute max time 1-99
				if (isset($json['mmt']))
					$json['mmt'] = is_numeric($json['mmt']) ? ($json['mmt'] > 99 || $json['mmt'] < 1 ? 1:$json['mmt']):1;
				
			break;
			case "92":
				//Effect 'None','Skeleton','Eyes','Cauldron','Witch','Blood','Halloween'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 6 || $json['ef'] < 0 ? 1:$json['ef']):1;
				
				//Colors eg r#g or FF00FF#0000FF
				$json['col'] = isset($json['col']) ? htmlspecialchars(trim(substr($json['col'], 0, 26))):"";
				
				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";	
				
				//Background 'None','Moon','Web','Haunted','Graveyard','Horror','Halloween'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 6 || $json['bk'] < 0 ? 1:$json['bk']):1;
		
				//Option
				$json['Opt'] = isset($json['Opt']) && is_numeric($json['Opt']) ? ($json['Opt'] > 3 || $json['Opt'] < 0 ? "":$json['Opt']):"";				
			break;		
			case "96":
				//Effect 'None','Santa sledge','Sleigh moon','Snowman','Santa chimney','Penguin march','Xmas tree'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 6 || $json['ef'] < 0 ? 1:$json['ef']):1;
				
				//Colors eg r#g or FF00FF#0000FF
				$json['col'] = isset($json['col']) ? htmlspecialchars(trim(substr($json['col'], 0, 26))):"";
				
				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";	
				
				//Background 'None','Trees','Moon','Snow scape','Night sky'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 4 || $json['bk'] < 0 ? 1:$json['bk']):1;
		
				//Options No background', 'No snow', 'Flip
				$json['Opt'] = isset($json['Opt']) && is_numeric($json['Opt']) ? ($json['Opt'] > 3 || $json['Opt'] < 0 ? "":$json['Opt']):"";	
				
				//Tree Options 'Bauble', 'Glitter', 'Star', 'No back', 'Spin'
				$json['Opt'] = isset($json['Opt']) && is_numeric($json['Opt']) ? ($json['Opt'] > 31 || $json['Opt'] < 0 ? 7:$json['Opt']):7;	
				
				//Tree Bauble "circle", "star", "xatsat", "d"
				$json['BT'] = isset($json['BT']) && is_numeric($json['BT']) ? ($json['BT'] > 3 || $json['BT'] < 0 ? 0:$json['BT']):0;	
				
				//Bauble transparency
				$json['BA'] = isset($json['BA']) && is_numeric($json['BA']) ? ($json['BA'] > 100 || $json['BA'] < 10 ? "":$json['BA']):"";		
				
				//Glitter transparency
				$json['GA'] = isset($json['GA']) && is_numeric($json['GA']) ? ($json['GA'] > 100 || $json['GA'] < 10 ? "":$json['GA']):"";			
			break;
			case "98":
				//Effect 'None','Chef','Thanksgiving','Turkey','Lights'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 4 || $json['ef'] < 0 ? 1:$json['ef']):1;

				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";	
				
				//Background 'None'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 1 || $json['bk'] < 0 ? 1:$json['bk']):1;
		
				//Thanksgiving Options 'Background','IndianF','IndianM','PilgrimF','PilgrimM'
				$json['Opt'] = isset($json['Opt']) && is_numeric($json['Opt']) ? ($json['Opt'] > 31 || $json['Opt'] < 0 ? 31:$json['Opt']):31;				
			break;
			case "102":
				//Effect 'None','Leaves','Fairy','Butterfly','Fairy dust'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 4 || $json['ef'] < 0 ? 1:$json['ef']):1;
				
				//Background 'None'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 1 || $json['bk'] < 0 ? 1:$json['bk']):1;
					
				//Colors eg r#g or FF00FF#0000FF
				$json['col'] = isset($json['col']) ? htmlspecialchars(trim(substr($json['col'], 0, 26))):"";
				
				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";				
			break;	
			case "108":
				//Effect 'None','Leaves','Fairy','Butterfly','Fairy dust'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 4 || $json['ef'] < 0 ? 1:$json['ef']):1;
				
				//Background 'None'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 1 || $json['bk'] < 0 ? 1:$json['bk']):1;
					
				//Colors eg r#g or FF00FF#0000FF
				$json['col'] = isset($json['col']) ? htmlspecialchars(trim(substr($json['col'], 0, 26))):"";
				
				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (5-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 5 ? "":$json['SC']):"";
					
				//Smiley eg beat
				$json['SM'] = isset($json['SM']) && is_numeric($json['SM']) ? ($json['SM'] > 15 || $json['SM'] < 5 ? "":$json['SM']):"";
				
				//Options 'No background', 'No text'
				$json['Opt'] = isset($json['Opt']) && is_numeric($json['Opt']) ? ($json['Opt'] > 3 || $json['Opt'] < 0 ? 0:$json['Opt']):0;				
			break;	
			case "114":
				
				//Main Pool Name
				$json['m'] = isset($json['m']) && $json['m'] != "" ? htmlentities($json['m']) : 'Main';
				
				//Rank Pool Name
				$json['t'] = isset($json['t']) && $json['t'] != "" ? htmlentities($json['t']) : 'Ranked';
				
				//Rank Pool Rank
				$json['rnk'] = isset($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 3;
				
				//Ban Pool Name
				$json['b'] = isset($json['b']) && $json['b'] != "" ? htmlentities($json['b']) : 'Banned';	
				
				//Ban Pool Rank
				$json['brk'] = isset($json['brk']) && is_numeric($json['brk']) && in_array($json['brk'], $allowedRanks) ? $json['brk'] : 7;			
			break;
			case "148":
				//Effect 'None','Candles','Organ','Spider','Owl','Evil eyes','Cat'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 6 || $json['ef'] < 0 ? 1:$json['ef']):1;

				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";	
				
				//Background 'None','Pumkins','Owl','Evil eyes','Cat'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 4 || $json['bk'] < 0 ? 1:$json['bk']):1;			
			break;
			case "156":
				//Effect 'None','Baubles','Santa','Present'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 3 || $json['ef'] < 0 ? 1:$json['ef']):1;

				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";	
				
				//Background 'None','Santas','Moon','Gift'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 3 || $json['bk'] < 0 ? 1:$json['bk']):1;	
				
				//Glitter "all","star", "burst", "xatsat", "d"
				$json['GT'] = isset($json['GT']) && is_numeric($json['GT']) ? ($json['GT'] > 4 || $json['GT'] < 0 ? 0:$json['GT']):0;			
				
				//Number of stars % (10-100)
				$json['NUM'] = isset($json['NUM']) && is_numeric($json['NUM']) ? ($json['NUM'] > 100 || $json['NUM'] < 10 ? "":$json['NUM']):"";	
				
				//Present On,Off
				$json['PR'] = isset($json['PR']) && is_numeric($json['PR']) ? ($json['PR'] > 100 || $json['PR'] < 10 ? 0:$json['PR']):0;	
			break;		
			case "180":
				//Message Sound 
				$json['m'] = isset($json['m']) && ctype_alpha($json['m']) && strlen($json['m']) < 20 ? $json['m'] : 'clickfast';
				
				//User Sound
				$json['d'] = isset($json['d']) && ctype_alpha($json['d']) && strlen($json['d']) < 20 ? $json['d'] : 'computerbeep';
				
				//Tab Sound
				$json['t'] = isset($json['t']) && ctype_alpha($json['t']) && strlen($json['t']) < 20 ? $json['t'] : 'swing';
			break;
			case "188":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 3;
				$json['dt'] = isset($json['dt']) && is_numeric($json['dt']) ? ($json['dt'] > 3600 || $json['dt'] < 10 ? 60:$json['dt']):60;
				$json['lv'] = isset($json['lv']) && is_numeric($json['lv']) ? ($json['lv'] > 99 || $json['lv'] < 1 ? 1:$json['lv']):1;
				$json['rt'] = isset($json['rt']) && is_numeric($json['rt']) ? ($json['rt'] > 600 || $json['rt'] < 10 ? 10:$json['rt']):10;
				$json['st'] = isset($json['st']) && is_numeric($json['st']) ? ($json['st'] > 600 || $json['st'] < 10 ? 60:$json['st']):60;
				$json['o'] = isset($json['o']) && is_numeric($json['o']) ? ($json['o'] > 2 || $json['o'] < 0 ? 0:$json['o']):0;
			break;
			case "192":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 3;
				$json['dt'] = isset($json['dt']) && is_numeric($json['dt']) ? ($json['dt'] > 900 || $json['dt'] < 10 ? 60:$json['dt']):60;
				$json['lv'] = isset($json['lv']) && is_numeric($json['lv']) ? ($json['lv'] > 99 || $json['lv'] < 1 ? 1:$json['lv']):1;
				$json['rt'] = isset($json['rt']) && is_numeric($json['rt']) ? ($json['rt'] > 600 || $json['rt'] < 10 ? 10:$json['rt']):10;
			break;
			case "194":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 3;
				$json['dt'] = isset($json['dt']) && is_numeric($json['dt']) ? ($json['dt'] > 900 || $json['dt'] < 10 ? 60:$json['dt']):60;
				$json['lv'] = isset($json['lv']) && is_numeric($json['lv']) ? ($json['lv'] > 99 || $json['lv'] < 1 ? 1:$json['lv']):1;
				$json['rt'] = isset($json['rt']) && is_numeric($json['rt']) ? ($json['rt'] > 600 || $json['rt'] < 10 ? 10:$json['rt']):10;
			break;
			case "206":
				//FUCK OFF to much work.
				foreach($json as $key => $value) {
					$json[$key] = @mb_convert_encoding(htmlentities(html_entity_decode($value)), "UTF-8", "auto");
				}
				return json_encode($json);// bypass he str replace becuase we cant dop thatw ith lang
			break;
			case "200":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 3;
				$json['dt'] = isset($json['dt']) && is_numeric($json['dt']) ? ($json['dt'] > 900 || $json['dt'] < 10 ? 300:$json['dt']):300;
				$json['lv'] = isset($json['lv']) && is_numeric($json['lv']) ? ($json['lv'] > 99 || $json['lv'] < 1 ? 1:$json['lv']):1;
				$json['rt'] = isset($json['rt']) && is_numeric($json['rt']) ? ($json['rt'] > 600 || $json['rt'] < 10 ? 10:$json['rt']):10;
				$json['lm'] = isset($json['lm']) && is_numeric($json['lm']) ? ($json['lm'] > 1 || $json['lm'] < 0 ? 0:$json['lm']):0;
				
			break;
			case "224":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 5;
				$json['dt'] = isset($json['dt']) && is_numeric($json['dt']) ? ($json['dt'] > 900 || $json['dt'] < 10 ? 60:$json['dt']):60;
				$json['lv'] = isset($json['lv']) && is_numeric($json['lv']) ? ($json['lv'] > 99 || $json['lv'] < 1 ? 1:$json['lv']):1;
				$json['rt'] = isset($json['rt']) && is_numeric($json['rt']) ? ($json['rt'] > 600 || $json['rt'] < 10 ? 10:$json['rt']):10;
			break;
			case "238":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 5;
			break;
			case "246":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 3;
				$json['dt'] = isset($json['dt']) && is_numeric($json['dt']) ? ($json['dt'] > 43200 || $json['dt'] < 10 ? 60:$json['dt']):60;
				$json['rt'] = isset($json['rt']) && is_numeric($json['rt']) ? ($json['rt'] > 600 || $json['rt'] < 10 ? 10:$json['rt']):10;
				$json['rc'] = isset($json['rc']) && is_numeric($json['rc']) ? ($json['rc'] > 1 || $json['rc'] < 0 ? 0:$json['rc']):0;
				$json['tg'] = isset($json['tg']) && is_numeric($json['tg']) ? ($json['tg'] > 1000000 || $json['tg'] < 100 ? 5000:$json['tg']):5000;
				$json['pz'] = isset($json['pz']) ? htmlspecialchars(trim($json['pz'])):"";
			break;
			case "256":
				$json['rnk'] = isset($json['rnk']) && is_numeric($json['rnk']) && in_array($json['rnk'], $allowedRanks) ? $json['rnk'] : 3;
				$json['dt'] = isset($json['dt']) && is_numeric($json['dt']) ? ($json['dt'] > 43200 || $json['dt'] < 10 ? 60:$json['dt']):60;
				$json['rt'] = isset($json['rt']) && is_numeric($json['rt']) ? ($json['rt'] > 600 || $json['rt'] < 10 ? 10:$json['rt']):10;
				$json['rc'] = isset($json['rc']) && is_numeric($json['rc']) ? ($json['rc'] > 1 || $json['rc'] < 0 ? 0:$json['rc']):0;
				$json['tg'] = isset($json['tg']) && is_numeric($json['tg']) ? ($json['tg'] > 1000000 || $json['tg'] < 100 ? 2000:$json['tg']):2000;
				$json['pz'] = isset($json['pz']) ? htmlspecialchars(trim($json['pz'])):"";
			break;
			case "278":
				//Effect 'None','Flower grow','Random flowers','Butterfly','Sunflowers','Spring'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 5 || $json['ef'] < 0 ? 1:$json['ef']):1;
				
				//Background 'None'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 1 || $json['bk'] < 0 ? 1:$json['bk']):1;
				
				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";				
			break;	
			case "296":
				//Effect 'None','Beach','Sun','Fan','Hammock','Crab'
				$json['ef'] = isset($json['ef']) && is_numeric($json['ef']) ? ($json['ef'] > 5 || $json['ef'] < 0 ? 1:$json['ef']):1;
				
				//Background 'None'
				$json['bk'] = isset($json['bk']) && is_numeric($json['bk']) ? ($json['bk'] > 1 || $json['bk'] < 0 ? 1:$json['bk']):1;
				
				//Horizontal offset % (-100 to +100)
				$json['XX'] = isset($json['XX']) && is_numeric($json['XX']) ? ($json['XX'] > 100 || $json['XX'] < -100 ? "":$json['XX']):"";
				
				//Vertical offset % (-100 to +100)
				$json['YY'] = isset($json['YY']) && is_numeric($json['YY']) ? ($json['YY'] > 100 || $json['YY'] < -100 ? "":$json['YY']):"";	
				
				//Scale % (1-1000)
				$json['SC'] = isset($json['SC']) && is_numeric($json['SC']) ? ($json['SC'] > 1000 || $json['SC'] < 1 ? "":$json['SC']):"";

				//Options 'No background'
				$json['Opt'] = isset($json['Opt']) && is_numeric($json['Opt']) ? ($json['Opt'] > 1 || $json['Opt'] < 0 ? 0:$json['Opt']):0;				
			break;
		}
		return str_replace('"', "'", json_encode($json, true));
	}
}
