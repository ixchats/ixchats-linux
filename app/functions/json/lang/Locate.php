<?php
namespace Functions\Json\Lang;

use Vendor\Curl;
use Vendor\View;
use Vendor\Header;

class Locate {
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		Header::setcache();
		$arr   = [['lang' => \Server::detectLanguage()]];
		return View::json($arr);
	}
}