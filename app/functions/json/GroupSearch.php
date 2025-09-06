<?php
namespace Functions\Json;

use Vendor\View;
use Classes\Chat;

class GroupSearch {
	protected $chat;
	
	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		$getName  = (string) \Server::get('s');
		$getChats = $this->chat->search($getName);
		$groups   = [];
		if ($getChats) {
			foreach ($getChats as $chat) {
				$groups[] = [
					'a' => $chat['bg'], 
					'g' => $chat['name'], 
					'd' => $chat['descr']
				];
			}
		}
		return View::json($groups);
	}
}