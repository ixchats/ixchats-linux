<?php
namespace Functions\WebGear\Gifts;

use Vendor\View;
use Vendor\Curl;
use Vendor\Header;

class Gift1 {
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		Header::set('application/json');
		$source = Curl::getHttps('https://xat.com/web_gear/chat/gift1.php');
		return View::plain($source);
	}
}