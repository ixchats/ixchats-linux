<?php
namespace Functions\WebGear;

use Vendor\Validator;
use Vendor\View;
use Classes\User;
use Classes\Chat as ChatClass;

class Direct {
	protected $user;
	protected $chat;

	public function __construct() {
		$this->user = new User();
		$this->chat = new ChatClass();
	}
	
	public function index(){
		
		$chat = (string) \Server::get('d');
		
		if (!Validator::isValidChatName($chat)) {
			return \Server::redirect('/groups.php');
		}
		
		$vchat    = substr($chat, 0, 3) == 'xat' && is_numeric(substr($chat, 3)) ? $this->chat->getById(substr($chat, 3)) : $this->chat->get($chat) ;
		$chatpage = (int) \Server::get('p');
		$getSS    = (int) \Server::get('ss');
		
		if (!$vchat) {
			return \Server::redirect('/groups.php');
		}
		
		if ($vchat->active != 1) {
			return \Server::redirect('/groups.php');
		}
		
		if(array_key_exists('new', $_GET)) {
			$getPage = View::get('ChatNew', ['user' => $this->user, 'chat' => $this->chat->get($vchat->name)]);
			
			$getChat = $this->chat->get($vchat->name);
			
			return View::render('layout/main', ['title' => $getChat->name . ' - ' . $getChat->descr, 'chat' => $getChat, 'page' => $getPage,'nav' => \Server::loadNavbar('html5', 'chat'), 'foot' => \Server::loadFotter('html5', 'chat'), 'user' => $this->user]);
		} 
			$getPage = View::get('chat', ['user' => $this->user, 'chat' => $this->chat->get($vchat->name), 'assigned' => $this->chat->isAssigned($vchat->name, 220), 'embed' => $this->chat->getChatEmbed($vchat->name), 'chatpage' => $chatpage, 'getSS' => $getSS]);
			
			$getChat = $this->chat->get($vchat->name);		
			
			return View::render('layout/main', ['title' => $getChat->name . ' - ' . $getChat->descr, 'page' => $getPage, 'user' => $this->user]);		
	}
}