<?php
namespace Functions\Json;

use Vendor\View;
use Classes\Chat;

class GInfo {
	protected $chat;
	
	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		$getID    = (int) \Server::get('id');
		$getGames = $this->chat->getGameRaces($getID);
		if (!$getGames) {
			return View::json(['e' => true, 't' => 'Chat not found.']);
		}
		return View::json($getGames);
	}
}