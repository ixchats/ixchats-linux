<?php
namespace Functions\Json\Lang;

use Vendor\Curl;
use Vendor\View;
use Vendor\Header;

class Languages {
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		Header::setcache();
		$languages = [
						  0 => 
						  [
							 'e' => 'English',
							 'f' => 'English',
							 'c' => 'en',
							 'i' => '1',
							 's' => '1',
						  ],
						  1 => 
						  [
							 'e' => 'Afrikaans',
							 'f' => 'Afrikaans',
							 'c' => 'af',
						  ],
						  2 => 
						  [
							 'e' => 'Albanian',
							 'f' => 'Albania',
							 'c' => 'sq',
							 's' => '1',
						  ],
						  3 => 
						  [
							 'e' => 'Arabic',
							 'f' => 'عربي',
							 'c' => 'ar',
							 'i' => '1',
							 's' => '1',
						  ],
						  4 => 
						  [
							 'e' => 'Argentina',
							 'f' => 'Español (Argentina)',
							 'c' => 'es-AR',
						  ],
						  5 => 
						  [
							 'e' => 'Azerbaijani',
							 'f' => 'Azərbaycanca',
							 'c' => 'az',
						  ],
						  6 => 
						  [
							 'e' => 'Basque',
							 'f' => 'Euskara',
							 'c' => 'eu',
						  ],
						  7 => 
						  [
							 'e' => 'Bosnian',
							 'f' => 'Bosanski',
							 'c' => 'xx',
							 's' => '1',
						  ],
						  8 => 
						  [
							 'e' => 'Brazilian',
							 'f' => 'Português Brasileiro',
							 'c' => 'pt-BR',
							 's' => '1',
						  ],
						  9 => 
						  [
							 'e' => 'Bulgarian',
							 'f' => 'Български',
							 'c' => 'bg',
							 's' => '1',
						  ],
						  10 => 
						  [
							 'e' => 'Castilian',
							 'f' => 'Castellano',
							 'c' => 'xx',
						  ],
						  11 => 
						  [
							 'e' => 'Catalan',
							 'f' => 'Català',
							 'c' => 'ca',
						  ],
						  12 => 
						  [
							 'e' => 'Chinese',
							 'f' => '汉语',
							 'c' => 'zh',
							 's' => '1',
						  ],
						  13 => 
						  [
							 'e' => 'Croatian',
							 'f' => 'Hrvatski',
							 'c' => 'hr',
							 's' => '1',
						  ],
						  14 => 
						  [
							 'e' => 'Danish',
							 'f' => 'Dansk',
							 'c' => 'da',
							 's' => '1',
						  ],
						  15 => 
						  [
							 'e' => 'Dutch',
							 'f' => 'Nederlands',
							 'c' => 'nl',
							 's' => '1',
						  ],
						  16 => 
						  [
							 'e' => 'Estonian',
							 'f' => 'Eesti',
							 'c' => 'et',
							 'i' => '1',
							 's' => '1',
						  ],
						  17 => 
						  [
							 'e' => 'Filipino',
							 'f' => 'Filipino',
							 'c' => 'tl',
							 'i' => '1',
							 's' => '1',
						  ],
						  18 => 
						  [
							 'e' => 'Finn',
							 'f' => 'Finn',
							 'c' => 'xx',
							 's' => '1',
						  ],
						  19 => 
						  [
							 'e' => 'Finnish',
							 'f' => 'Suomi',
							 'c' => 'fi',
						  ],
						  20 => 
						  [
							 'e' => 'French',
							 'f' => 'Français',
							 'c' => 'fr',
							 'i' => '1',
							 's' => '1',
						  ],
						  21 => 
						  [
							 'e' => 'German',
							 'f' => 'Deutsch',
							 'c' => 'de',
							 'i' => '1',
							 's' => '1',
						  ],
						  22 => 
						  [
							 'e' => 'Greek',
							 'f' => 'ελληνικά',
							 'c' => 'el',
							 's' => '1',
						  ],
						  23 => 
						  [
							 'e' => 'Hebrew',
							 'f' => 'עברית',
							 'c' => 'iw',
							 's' => '1',
						  ],
						  24 => 
						  [
							 'e' => 'Hungarian',
							 'f' => 'Magyar',
							 'c' => 'hu',
							 'i' => '1',
							 's' => '1',
						  ],
						  25 => 
						  [
							 'e' => 'Icelandic',
							 'f' => 'ísland',
							 'c' => 'is',
							 's' => '1',
						  ],
						  26 => 
						  [
							 'e' => 'Indonesian',
							 'f' => 'Bahasa Indonesia',
							 'c' => 'id',
						  ],
						  27 => 
						  [
							 'e' => 'Italian',
							 'f' => 'Italiano',
							 'c' => 'it',
							 'i' => '1',
							 's' => '1',
						  ],
						  28 => 
						  [
							 'e' => 'Japanese',
							 'f' => '﻿日本語',
							 'c' => 'ja',
							 's' => '1',
						  ],
						  29 => 
						  [
							 'e' => 'Korean',
							 'f' => '﻿한국어',
							 'c' => 'ko',
							 's' => '1',
						  ],
						  30 => 
						  [
							 'e' => 'Kosovars',
							 'f' => 'Gegnishte',
							 'c' => 'xx',
							 's' => '1',
						  ],
						  31 => 
						  [
							 'e' => 'Latvian',
							 'f' => 'Latviski',
							 'c' => 'lv',
							 's' => '1',
						  ],
						  32 => 
						  [
							 'e' => 'Lithuanian',
							 'f' => 'Lietuvių',
							 'c' => 'lt',
						  ],
						  33 => 
						  [
							 'e' => 'Macedonian',
							 'f' => 'Makedonski',
							 'c' => 'mk',
						  ],
						  34 => 
						  [
							 'e' => 'Malay',
							 'f' => 'Bahasa Melayu',
							 'c' => 'ms',
						  ],
						  35 => 
						  [
							 'e' => 'Norwegian',
							 'f' => 'Norsk',
							 'c' => 'no',
							 's' => '1',
						  ],
						  36 => 
						  [
							 'e' => 'Polish',
							 'f' => 'Polish',
							 'c' => 'pl',
							 'i' => '1',
							 's' => '1',
						  ],
						  37 => 
						  [
							 'e' => 'Portuguese',
							 'f' => 'Português',
							 'c' => 'pt',
							 'i' => '1',
							 's' => '1',
						  ],
						  38 => 
						  [
							 'e' => 'Romanian',
							 'f' => 'Română',
							 'c' => 'ro',
							 'i' => '1',
							 's' => '1',
						  ],
						  39 => 
						  [
							 'e' => 'Russian',
							 'f' => 'Русский',
							 'c' => 'ru',
							 's' => '1',
						  ],
						  40 => 
						  [
							 'e' => 'Serbian',
							 'f' => 'Srpski',
							 'c' => 'sr',
							 's' => '1',
						  ],
						  41 => 
						  [
							 'e' => 'Slovakian',
							 'f' => 'Česky',
							 'c' => 'sk',
						  ],
						  42 => 
						  [
							 'e' => 'Slovenian',
							 'f' => 'Slovenscina',
							 'c' => 'sl',
							 's' => '1',
						  ],
						  43 => 
						  [
							 'e' => 'Spanish',
							 'f' => 'Español',
							 'c' => 'es',
							 'i' => '1',
							 's' => '1',
						  ],
						  44 => 
						  [
							 'e' => 'Swedish',
							 'f' => 'Svenska',
							 'c' => 'sv',
							 's' => '1',
						  ],
						  45 => 
						  [
							 'e' => 'Thai',
							 'f' => 'ไทย',
							 'c' => 'th',
							 'i' => '1',
							 's' => '1',
						  ],
						  46 => 
						  [
							 'e' => 'Turkish',
							 'f' => 'Türkçe',
							 'c' => 'tr',
							 'i' => '1',
							 's' => '1',
						  ],
						  47 => 
						  [
							 'e' => 'Uzbek',
							 'f' => 'O\'zbek',
							 'c' => 'xx',
						  ],
						  48 => 
						  [
							 'e' => 'Vietnamese',
							 'f' => 'Viet Nam',
							 's' => '1',
							 'c' => 'vi',
						  ],
						  49 => 
						  [
							 'e' => 'lao',
							 'f' => 'ພາສາລາວ',
							 'c' => 'lo',
						  ]
					 ];
		return View::json($languages);
	}
}