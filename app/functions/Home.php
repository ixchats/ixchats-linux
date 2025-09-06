<?php
namespace Functions;

use Vendor\View;
use Classes\User;
use Classes\Chat as ChatClass;

class Home {
	protected $user;
	protected $chat;

	public function __construct() {
		$this->user = new User();
		$this->chat = new ChatClass();
	}
	
	public function index() {	

		$getPage = View::get('home', ['user' => $this->user, 'chat' => $this->chat->get(MAINCHAT[1])]);

		return View::render('layout/main', ['title' => XAT_NAME, 'page' => $getPage, 'user' => $this->user]);
	 
	}			
}