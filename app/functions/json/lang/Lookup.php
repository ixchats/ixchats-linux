<?php
namespace Functions\Json\Lang;

use Vendor\Curl;
use Vendor\View;
use Vendor\Header;

class Lookup {
	public function index() {
		if(Header::cache(__FILE__)) {
			return;
		}
		Header::setcache();
		$file  = 'game';
		$lang  = (string) \Server::get('l');
		$game  = (string) \Server::get('p');
		$lang  = strlen($lang) > 2 ? \Server::LangCode($lang) : $lang;
		$arr   = [];
		$pages = [];
		$default = DEFAULT_LANG;
		
		if ($game == 'Game1') {
			foreach (\Server::loadLanguages($file, $lang)  as $i => $u) {
				$pages[substr(basename($u), 0, -4)] = $u;
			} 

			if ($pages[$lang])
				require_once($pages[$lang]);
			if (!$pages[$lang])
				require_once($pages[$default]);
			if (is_array($array))
				$arr = (array) $array;
		}
		return View::json(str_replace('xat.com', DOMAIN, $arr));
	}
}