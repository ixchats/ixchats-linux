<?php
namespace Functions\WebGear;
use Vendor\Validator;
use Vendor\View;
use Classes\Chat;
class RoomID {
	protected $chat;
	public function __construct() {
		$this->chat = new Chat();
	}
	
	private $ChatLangs = ['n0' => 'International', 'aa' => 'Afar', 'ab' => 'Abkhazian', 'ae' => 'Avestan', 'af' => 'Afrikaans', 'ak' => 'Akan', 'am' => 'Amharic', 'an' => 'Aragonese', 'ar' => 'Arabic', 'as' => 'Assamese', 'av' => 'Avaric', 'ay' => 'Aymara', 'az' => 'Azerbaijani', 'ba' => 'Bashkir', 'be' => 'Belarusian', 'bg' => 'Bulgarian', 'bh' => 'Bihari', 'bi' => 'Bislama', 'bm' => 'Bambara', 'bn' => 'Bengali', 'bo' => 'Tibetan', 'br' => 'Breton', 'bs' => 'Bosnian', 'ca' => 'Catalan', 'ce' => 'Chechen', 'ch' => 'Chamorro', 'co' => 'Corsican', 'cr' => 'Cree', 'cs' => 'Czech', 'cu' => 'Church Slavic', 'cv' => 'Chuvash', 'cy' => 'Welsh', 'da' => 'Danish', 'de' => 'German', 'dv' => 'Divehi', 'dz' => 'Dzongkha', 'ee' => 'Ewe', 'el' => 'Greek', 'en' => 'English', 'eo' => 'Esperanto', 'es' => 'Spanish', 'et' => 'Estonian', 'eu' => 'Basque', 'fa' => 'Persian', 'ff' => 'Fulah', 'fi' => 'Finnish', 'fl' => 'Filipino', 'fj' => 'Fijian', 'fo' => 'Faroese', 'fr' => 'French', 'fy' => 'Western Frisian', 'ga' => 'Irish', 'gd' => 'Scottish Gaelic', 'gl' => 'Galician', 'gn' => 'Guaraní', 'gu' => 'Gujarati', 'gv' => 'Manx', 'ha' => 'Hausa', 'he' => 'Hebrew', 'hi' => 'Hindi', 'ho' => 'Hiri Motu', 'hr' => 'Croatian', 'ht' => 'Haitian', 'hu' => 'Hungarian', 'hy' => 'Armenian', 'hz' => 'Herero', 'ia' => 'Interlingua', 'id' => 'Indonesian', 'ie' => 'Interlingue', 'ig' => 'Igbo', 'ii' => 'Sichuan Yi', 'ik' => 'Inupiaq', 'io' => 'Ido', 'is' => 'Icelandic', 'it' => 'Italian', 'iu' => 'Inuktitut', 'ja' => 'Japanese', 'jv' => 'Javanese', 'ka' => 'Georgian', 'kg' => 'Kongo', 'ki' => 'Kikuyu', 'kj' => 'Kwanyama', 'kk' => 'Kazakh', 'kl' => 'Kalaallisut', 'km' => 'Khmer', 'kn' => 'Kannada', 'ko' => 'Korean', 'kr' => 'Kanuri', 'ks' => 'Kashmiri', 'ku' => 'Kurdish', 'kv' => 'Komi', 'kw' => 'Cornish', 'ky' => 'Kirghiz', 'la' => 'Latin', 'lb' => 'Luxembourgish', 'lg' => 'Ganda', 'li' => 'Limburgish', 'ln' => 'Lingala', 'lo' => 'Lao', 'lt' => 'Lithuanian', 'lu' => 'Luba-Katanga', 'lv' => 'Latvian', 'mg' => 'Malagasy', 'mh' => 'Marshallese', 'mi' => 'Maori', 'mk' => 'Macedonian', 'ml' => 'Malayalam', 'mn' => 'Mongolian', 'mo' => 'Moldavian', 'mr' => 'Marathi', 'ms' => 'Malay', 'mt' => 'Maltese', 'na' => 'Nauru', 'nb' => 'Norwegian Bokmål', 'nd' => 'North Ndebele', 'ne' => 'Nepali', 'ng' => 'Ndonga', 'nl' => 'Dutch', 'nn' => 'Norwegian Nynorsk', 'no' => 'Norwegian', 'nr' => 'South Ndebele', 'nv' => 'Navajo', 'ny' => 'Chichewa', 'oc' => 'Occitan', 'oj' => 'Ojibwa', 'om' => 'Oromo', 'or' => 'Oriya', 'os' => 'Ossetian', 'pa' => 'Panjabi', 'pi' => 'Paadi', 'pl' => 'Polish', 'ps' => 'Pashto', 'pt' => 'Portuguese', 'qu' => 'Quechua', 'rm' => 'Raeto-Romance', 'rn' => 'Kirundi', 'ro' => 'Romanian', 'ru' => 'Russian', 'rw' => 'Kinyarwanda', 'ry' => 'Rusyn', 'sa' => 'Sanskrit', 'sc' => 'Sardinian', 'sd' => 'Sindhi', 'se' => 'Northern Sami', 'sg' => 'Sango', 'sh' => 'Serbo-Croatian', 'si' => 'Sinhalese', 'sk' => 'Slovak', 'sl' => 'Slovenian', 'sm' => 'Samoan', 'sn' => 'Shona', 'so' => 'Somali', 'sq' => 'Albanian', 'sr' => 'Serbian', 'ss' => 'Swati', 'st' => 'Sotho', 'su' => 'Sundanese', 'sv' => 'Swedish', 'sw' => 'Swahili', 'ta' => 'Tamil', 'te' => 'Telugu', 'tg' => 'Tajik', 'th' => 'Thai', 'ti' => 'Tigrinya', 'tk' => 'Turkmen', 'tl' => 'Tagalog', 'tn' => 'Tswana', 'to' => 'Tonga', 'tr' => 'Turkish', 'ts' => 'Tsonga', 'tt' => 'Tatar', 'tw' => 'Twi', 'ty' => 'Tahitian', 'ug' => 'Uighur', 'uk' => 'Ukrainian', 'ur' => 'Urdu', 'uz' => 'Uzbek', 've' => 'Venda', 'vi' => 'Vietnamese', 'vo' => 'Volapük', 'wa' => 'Walloon', 'wo' => 'Wolof', 'xh' => 'Xhosa', 'yi' => 'Yiddish', 'yo' => 'Yoruba', 'za' => 'Zhuang', 'zh' => 'Chinese', 'zu' => 'Zulu'];
	
	public function index() {
		/*if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}*/
		$chatN    = (string) \Server::get('d');
		$chatId   = (int)    \Server::get('i');
		$result   = ['id' => 0, 'd' => '#', 'g' => '#', 'a' => '#'];
		$attached = ['id' => false, 'name' => false];
		$chat     = $chatN && Validator::isValidChatName($chatN) && !$chatId ? (substr($chatN, 0, 3) == 'xat' && is_numeric(substr($chatN, 3)) ? $this->chat->getById(substr($chatN, 3)) : $this->chat->get($chatN)) : $this->chat->getById($chatId);
		if ($chat) {
			if (!empty($chat->attached)) {
				$getAttached = $this->chat->get($chat->attached);
				if ($getAttached) {
					$attached = ['id' => $getAttached->id, 'name' => $getAttached->name];
				}
			}
			 $tab = [
					['label' => $chat->button0, 'url' => 1, 'html' => $chat->HTML],
					['label' => $chat->button1, 'url' => 2, 'html' => $chat->HTML2],
					['label' => $chat->button2, 'url' => 3, 'html' => $chat->HTML3],
					['label' => $chat->button3, 'url' => 4, 'html' => $chat->HTML4],
					['label' => $chat->button4, 'url' => 5, 'html' => $chat->HTML5],
					['label' => $chat->button5, 'url' => 6, 'html' => $chat->HTML6]	
				];
         	foreach ($tab as $tb) {
         		if (!empty($tb['html']) && !empty($tb['label'])) {
					$url = filter_var(\Server::DecryptData($tb['html']), FILTER_SANITIZE_URL); // Validator link
					if (filter_var($url, FILTER_VALIDATE_URL) !== false) {
						$tabs[] = ['label' => $tb['label'], 'url' => \Server::DecryptData($tb['html'])];
					}else{
						$tabs[] = ['label' => $tb['label'], 'url' => $tb['url']];
					}
          		}
         	}
			$result['id'] = (string) $chat->id;
			$result['d']  = (string) $chat->descr;
			$result['g']  = (string) $chat->name;
			$result['a']  = (string) "{$chat->bg};={$attached['name']};={$attached['id']};={$chat->langdef};={$chat->radio};={$chat->button};={$chat->portrait};={$chat->landscape};={$chat->flagName};={$this->ChatLangs[$chat->flagName]};={$chat->grad};={$chat->font};={$chat->glow}";
			$result['tabs']    = $tabs;	
			if ($chat->bot > 0) {
				$result['bot'] = (int) $chat->bot;
			}
			
			/*if ($chat->a1 > 0) {
				$result['a1'] = (int) $chat->a1;
			}*/
			if($this->chat->isAssignedGROUP($chat->name,636) != null){
				$assign = $this->chat->isAssignedGROUP($chat->name,636);
				$result['636'] = $assign->count;
			}
			if (!empty($chat->debug)) {
				$result['t'] = 256;
				$result['assigned'] = 2;
			}
			if (!empty($chat->outter)) {
				$result['gb'] = $chat->outter;
			}
			if (!empty($chat->iframe)) {
				$result['if'] = $chat->iframe;
			}
		} else {
			print "-10-11";
		}
		return View::json($result);
	}
}