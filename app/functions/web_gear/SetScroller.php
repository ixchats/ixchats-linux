<?php
namespace Functions\WebGear;

use Vendor\Validator;
use Vendor\Header;
use Vendor\View;
use Classes\Chat;
use Classes\Core;

class SetScroller {
	protected $chat;
	protected $core;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->core = new Core();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		
		$Message  = (string) \Server::get('Message');
		$id  	  = (int) 	 \Server::get('id');
		$pw  	  = (int) 	 \Server::get('pw');
		
		while(1) {
		
			if (!Validator::isFilled([$id, $pw, $Message])) { break; }
		
			$chat = $this->chat->getById($id);

			if (!$chat) { break; }

			if ($chat->crc32 != $pw) { break; }

			$this->core->API('scroll', [
				'c' => $id,
				't' => $Message
			]);	
			break;
		}
	}
}