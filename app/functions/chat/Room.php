<?php
namespace Chat\Room;

use Vendor\Validator;
use Vendor\View;
use Classes\User;
use Classes\Chat as ChatClass;

class Chat {
	protected $user;
	protected $chat;

	public function __construct() {
		$this->user = new User();
		$this->chat = new ChatClass();
	}
	
	public function index(array $settings){
		
		$id = (int) $settings[1];
		
		if (!Validator::isNumeric($id)) {
			return \Server::redirect('/groups.php');
		}
		
		$getChat = $this->chat->getById($id);
		
		if (!$getChat) {
			return \Server::redirect('/groups.php');
		}
		
		if ($getChat->active != 1) {
			return \Server::redirect('/groups.php');
		}
	 
		$getPage = View::get('chat', ['user' => $this->user, 'chat' => $this->chat->get($getChat->name), 'assigned' => $this->chat->isAssigned($getChat->name, 220), 'embed' => $this->chat->getChatEmbed($getChat->name), 'chatpage' => $chatpage]);					
		return View::render('layout/main', ['title' => $getChat->name . ' - ' . $getChat->descr, 'page' => $getPage, 'user' => $this->user]);		
	}
}
