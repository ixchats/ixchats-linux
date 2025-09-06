<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;

class changelanguage {
	protected $chat;
	protected $user;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$submit1   = (int) \Server::post('submit1');
		$Language  = (string) \Server::post('Language');
		
		while(1) {
			
			if (!$submit1 || $submit1 != 1) { break; }
			
			if (!array_key_exists($Language, $this->chat->InputLangs())){ break; }
			\Server::setLanguage($Language);
			\Server::redirect('/index3.php');
			break;
		}

		$getPage = View::get('web_gear/changelanguage', ['chat' => $this->chat]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'xt' => ['chat'], 'title' => 'Change language', 'description' => 'Change language']);
	}
}