<?php
namespace Functions\Json\Lang;

use Vendor\View;
use Vendor\Header;
use Classes\Chat;

class CustomLang2 {
	protected $chat;
	
	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		
		$getChat   = (int) \Server::get('r');
		$Chat      = $this->chat->getById($getChat);
		$json      = ['box'];
		if ($getChat && $Chat) {
			$lang = json_decode($Chat->lang, true);
			$json = ['box' => (array) $lang];
		}	
		return View::json($json);
	}
}
