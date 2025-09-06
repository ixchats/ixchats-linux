<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;

class Media {
	protected $chat;

	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
			$chat      = (string) \Server::get('d');
			$page      = (int) 	  \Server::get('p');
			$getid     = (int) 	  \Server::get('id');
			
			if (!$chat || !Validator::isValidChatName($chat)) {
				return false;
			}
			
			$vchat = $this->chat->get($chat);
			
			if (!$vchat || $vchat->id !== $getid) {
				return false;
			}
			
			$getPage = View::get('web_gear/Media', ['chat' => $vchat, 'getp' => $page]);	
			return View::render('layout/main', ['page' => $getPage]);
	}
}