<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;

class SearchMessage {
	protected $chat;
	protected $user;
	protected $validator;

	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->validator = new Validator();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}

		$search    = (string) \Server::post('search');
		$from      = (int) \Server::post('from');
		$messages  = [];
		$messages2 = [];
		$Newfrom   = $from + 10;

		while (1) {
			
			if (!$search) { break; }
			
			if (!$this->validator->isAlphanumeric($search)) { break; }
			
			$messages  = $this->chat->SearchMessage($search, $from);
			$messages2 = $this->chat->SearchMessage($search, $Newfrom);
			break;
		}
		$getPage = View::get('web_gear/Search', ['chat' => $this->chat, 'messages' => $messages, 'messages2' => $messages2, 'Validator' => $this->validator, 'search' => $search, 'Newfrom' => $Newfrom]);
		return View::render('layout/main', ['page' => $getPage, 'user' => $this->user, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'title' => 'Search the chat', 'xt' => ['chat'], 'description' => 'Search the chat']);
	}
}