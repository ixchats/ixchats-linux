<?php
namespace Functions\WebGear;

use Vendor\Header;
use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;

class EditChat {
	protected $chat;
	protected $user;
	private $bgurl = METHOD .'//'. DOMAIN . '/web_gear/background/xat_%s.jpg';
	private $ChatLang = [
					'Afrikaans' => 'Afrikaans',
					'Albanian' => 'Albania',
					'Arabic' => 'عربي',
					'Argentina' => 'Español (Argentina)',
					'Azerbaijani' => 'Azərbaycanca',
					'Basque' => 'Euskara',
					'Bosnian' => 'Bosanski',
					'Brazilian' => 'Português Brasileiro',
					'Bulgarian' => 'Български',
					'Castilian' => 'Castellano',
					'Catalan' => 'Català',
					'Chinese' => '汉语',
					'Croatian' => 'Hrvatski',
					'Danish' => 'Dansk',
					'Dutch' => 'Nederlands',
					'English' => 'English',
					'Estonian' => 'Eesti',
					'Filipino' => 'Filipino',
					'Finn' => 'Finn',
					'Finnish' => 'Suomi',
					'French' => 'Français',
					'German' => 'Deutsch',
					'Greek' => 'ελληνικά',
					'Hebrew' => 'עברית',
					'Hungarian' => 'Magyar',
					'Icelandic' => 'ísland',
					'Indonesian' => 'Bahasa Indonesia',
					'Italian' => 'Italiano',
					'Japanese' => '﻿日本語',
					'Korean' => '﻿한국어',
					'Kosovars' => 'Gegnishte',
					'Latvian' => 'Latviski',
					'Leet' => 'L337',
					'Lithuanian' => 'Lietuvių',
					'Macedonian' => 'Makedonski',
					'Malay' => 'Bahasa Melayu',
					'Norwegian' => 'Norsk',
					'Polish' => 'Polski',
					'Portuguese' => 'Português',
					'Romanian' => 'Română',
					'Russian' => 'Русский',
					'Serbian' => 'Srpski',
					'Slovakian' => 'Česky',
					'Slovenian' => 'Slovenscina',
					'Spanish' => 'Español',
					'Swedish' => 'Svenska',
					'Thai' => 'ไทย',
					'Turkish' => 'Türkçe',
					'Uzbek' => 'O\'zbek',
					'Vietnamese' => 'Viet Nam',
					'lao' => 'ພາສາລາວ'
				];
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		Header::SessionCache();
		
		$getId  	   = (int) 	  \Server::get('id');
		$getPw  	   = (int) 	  \Server::get('pw');
		$postId 	   = (int)    \Server::post('id');
		$postPw 	   = (int) 	  \Server::post('pw');
		$UpDateOptions = (int) 	  \Server::post('UpDateOptions');
		$update 	   = (int) 	  \Server::post('update');
		$SizeM 	   	   = (int) 	  \Server::post('SizeM');
		$SizeS 	   	   = (int) 	  \Server::post('SizeS');
		$SizeL 	   	   = (int) 	  \Server::post('SizeL');
		$width 	   	   = (int) 	  \Server::post('width');
		$height 	   = (int) 	  \Server::post('height');
		$DidPost 	   = (int) 	  \Server::post('DidPost');
		$back 	   	   = (string) \Server::post('back');
		$Radio 	   	   = (string) \Server::post('Radio');
		$ButCol 	   = (string) \Server::post('ButCol');
		$Language 	   = (string) \Server::post('Language');
		$NoList 	   = (string) \Server::post('NoList');
		$members 	   = (string) \Server::post('members');
		$Live 	   	   = (string) \Server::post('Live');
		$registered    = (string) \Server::post('registered');
		$subscribers   = (string) \Server::post('subscribers');
		$NoStore   	   = (string) \Server::post('NoStore');
		$FussyBan      = (string) \Server::post('FussyBan');
		$NoSmilieLine  = (string) \Server::post('NoSmilieLine');
		$DefNoSound    = (string) \Server::post('DefNoSound');
		$Transparent   = (string) \Server::post('Transparent');
		$getWidth      = empty($width) || $SizeM  ?  540 : ($SizeS ? 400 : ($SizeL ? 640 : $width));
		$getHeight     = empty($height) || $SizeM ?  405 : ($SizeS ? 300 : ($SizeL ? 480 : $height));
		$chatid        = $postId ? $postId : $getId;
		$password      = $postPw ? $postPw : $getPw;
		$ValidGroup    = false;
		$backgrounds   = $this->chat->getBackgrounds();
		$chat          = '';
		$PowerList     = [80, 92, 96, 98, 102, 108, 114, 148, 156, 180, 188, 192, 194, 200, 206, 220, 224, 238, 246, 252 ,256, 278, 296];
		$PowerList2    = [74, 90, 100, 130, 106, 112, 150];
		$flags         = 0;
		$powers        = [];
		$group_powers  = [];

		while (1) {
			
			if (!$chatid || !$password) { break; }
			
			$chat = $this->chat->getById($chatid);
			
			if (!$chatid) { break; }
			
			if ($chat->crc32 != $password) { break; }
			
			$ValidGroup = true;
			
			if (!$ValidGroup) { break; }
			
			$powers       = $this->chat->GroupPowers();
			$group_powers = $this->chat->getGroupPowers($chat->name);
			
			if (!$DidPost) { break; }
			
			
			foreach ($this->chat->getBackgrounds() as $b) {
				if (isset($_POST["newimage_xat_{$b}_x"], $_POST["newimage_xat_{$b}_y"])) {
					$this->user->updateData('chats',['bg' => sprintf($this->bgurl, $b)],['id' => $chat->id]);
				}
			}
			if ($update) {
				if ($back && $back != $chat->bg) {
					$this->user->updateData('chats',['bg' => $back],['id' => $chat->id]);
				}
			} else if ($UpDateOptions) {
				if ($Radio && $Radio != $chat->radio) {
					$this->user->updateData('chats',['radio' => $Radio],['id' => $chat->id]);
				}
				if ($ButCol && $ButCol != $chat->button) {
					$this->user->updateData('chats',['button' => $ButCol],['id' => $chat->id]);
				}
				if ($Language && $Language != $chat->language && isset($this->ChatLang[$Language])) {
					$this->user->updateData('chats',['language' => $Language],['id' => $chat->id]);
				}
				if ((!$FussyBan || $FussyBan)) {
					$this->user->updateData('chats',['FussyBan' => $FussyBan ? 1 : 0],['id' => $chat->id]);
				}
				
				$flags = intval($chat->flag);
				if ($Live && $Live == 'ON') {
					$flags |= F_LIVE_MODE;
				} else {
					$flags &= ~F_LIVE_MODE;			
				}
				
				$flags &= ~(F_MEMBERS_ONLY | F_MEMBERS_ONLY2);
				if ($subscribers && $subscribers == 'ON') {
					$flags |= F_MEMBERS_ONLY | F_MEMBERS_ONLY2;
				} else if ($registered && $registered == 'ON') {
					$flags |= F_MEMBERS_ONLY2;
				} else if ($members && $members == 'ON') {
					$flags |= F_MEMBERS_ONLY;
				}

				if ($NoStore == 'ON') { 
					$flags |= F_NO_STORE;
				} else {
					$flags &= ~F_NO_STORE;
				}
				if ($NoList == 'ON') {
					$flags |= F_DELISTED; 
				} else { 
					$flags &= ~F_DELISTED;
				}
				if ($NoSmilieLine == 'ON') {
					$flags |= F_NO_SMILEY_LINE; 
				} else { 
					$flags &= ~F_NO_SMILEY_LINE;
				}
				if ($DefNoSound == 'ON') {				
					$flags |= F_NO_SOUND; 
				} else { 
					$flags &= ~F_NO_SOUND;
				}
				if ($Transparent == 'ON') { 
					$flags |= F_TRANSPARENT; 
				} else {
					$flags &= ~F_TRANSPARENT;
				}	
				if ($flags & F_LIVE_MODE) {
					$flags |= F_KICK_ALL; 
				} else { 
					$flags &= ~F_KICK_ALL;
				}
				/*if (count($group_powers) > 0) {
					$flags |= F_HAS_POWERS;
				} else {
					$flags &= ~F_HAS_POWERS;
				}	*/				
				if ($flags != $chat->flag) {
					$this->user->updateData('chats',['flag' => $flags],['id' => $chat->id]);
					if ($flags & F_TRANSPARENT) {
						$this->user->updateData('chats',['bg' => ''],['id' => $chat->id]);
					}
				}
				if (!empty($group_powers)) {
					foreach ($group_powers as $gp) {
						$postVariable = (int) \Server::post('gp_'.$gp['power']);
						if ($postVariable && $postVariable == 1 && $gp['enabled'] == 0) {
							$this->user->updateData('group_powers',['enabled' => 1],['chat' => $chat->name, 'power' => $gp['power']]);
						} else if (!$postVariable && $gp['enabled'] == 1) {
							$this->user->updateData('group_powers',['enabled' => 0],['chat' => $chat->name, 'power' => $gp['power']]);
						}
					}
					$group_powers = $this->chat->getGroupPowers($chat->name);	
				}
				foreach ($powers as $gp) {
					if (in_array($gp['id'], $PowerList)) {
						if (\Server::post($gp['name']) && $this->chat->isAssigned($chat->name, $gp['id']) == 1) {
							$powername = $gp['name'] == 'rankpool' ? 'pools' : $gp['name'];
							$this->user->updateData('chats',[$powername => $this->handleJson($gp['id'], \Server::post($gp['name'], false))],['name' => $chat->name]);
						}
					}
					if (in_array($gp['id'], $PowerList2)) {
						if (\Server::post($gp['name']) && $this->chat->isAssigned($chat->name, $gp['id']) == 1) {
							$this->user->updateData('chats',[$gp['name'] => \Server::post($gp['name'])],['name' => $chat->name]);
						}
					}
				}
			}
			$chat = $this->chat->getById($chatid);
			break;	
		}
		$getPage  = View::get('web_gear/EditChat', ['chat' => $this->chat, 'backgrounds' => $backgrounds, 'width' => $getWidth, 'height' => $getHeight, 'ValidGroup' => $ValidGroup, 'chatid' => $chatid, 'password' => $password, 'room' => $chat ,'features' => (array) $chat , 'powers' => $powers, 'group_powers' => $group_powers, 'PowerList' => $PowerList, 'PowerList2' => $PowerList2, 'flags' => $chat->flag, 'chatlang' => $this->ChatLang]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Edit your chat', 'xt' => ['edit'], 'description' => 'Edit your chat'] );
	}
	
	private function handleJson($id, $json)  {
		if ($json == "{}" || empty($json))
			return "";
		
		$json = json_decode($json, true);
		$allowedRanks = [0, 2, 3, 5, 7, 8, 10, 11, 14, 99];
		switch($id)  {
			case "80":
				$rankStuff = ['mg', 'mb', 'mm', 'kk', 'bn', 'ubn', 'ss', 'dnc', 'bdg', 'ns', 'yl', 'rc', 'ka', 'lkd', 'rgd', 'prm', 'bge', 'sme', 'rl', 'p', 'cbs', 'ssb', 'cm', 'j', 'mbt', 'obt', 'bst', 'mxt', 'ads', 'rf', 'p', 'pd', 'pt', 'mft', 'ft', 'js'];
				foreach ($rankStuff as $rank) { 
					if (isset($json[$rank]))
						$json[$rank] = is_numeric($json[$rank]) && in_array($json[$rank], $allowedRanks) ? intval($json[$rank]):0;
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