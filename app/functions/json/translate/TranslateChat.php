<?php
namespace Functions\Json\Translate;

use Vendor\Curl;
use Vendor\View;
use Vendor\Header;

class TranslateChat {
	public function index(array $settings) {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		Header::setcache();
		$file  = (string) strtolower($settings[1]);
		$lang  = (string) strtolower($settings[2]);	
		$lang  = substr($lang, 0, 2);
		$arr   = [];
		$pages = [];
		$array = '';
		
		foreach (\Server::loadChatLang($lang) as $i => $u) {
			$pages[substr(basename($u), 0, -4)] = $u;
		} 
		
		if(isset($pages[$file]))
			include($pages[$file]);
		if(is_array($array))
			$arr = [$file => (array) $array];
		return View::json($arr);
	}
}
