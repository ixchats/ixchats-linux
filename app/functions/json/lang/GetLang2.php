<?php
namespace Functions\Json\Lang;

use Vendor\Curl;
use Vendor\View;
use Vendor\Header;

class GetLang2 {
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		Header::setcache();
		$file  = (string) \Server::get('f');
		$lang  = (string) \Server::get('l');
		$lang  = strlen($lang) > 2 ? \Server::LangCode($lang) : $lang;
		$arr   = [];
		$pages = [];

		foreach (\Server::loadLanguages($file, $lang)  as $i => $u) {
			$pages[substr(basename($u), 0, -4)] = $u;
		} 
		
		if ($pages[$lang])
			require_once($pages[$lang]);
		if (is_array($array))
			$arr = [$file => (array) $array];
		return View::json($arr);
		//$source = Curl::getHttps('https://xat.com/json/lang/getlang2.php?f=' . $file . '&l=' . $lang);
		//return View::plain($source);
	}
}