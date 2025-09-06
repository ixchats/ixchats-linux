<?php
namespace Functions\WebGear\Gameraces;

use Vendor\View;
use Classes\Core;
use Classes\User;

class Codeban {
	protected $core;
	protected $user;
	
	public function __construct() {
		$this->core = new Core();
		$this->user = new User();
	}
	
	public function index() {
		$calories 	 	 = (int)	\Server::post('calories');
		$apples 	 	 = (int)	\Server::post('apples');
		$applesEaten 	 = (int)	\Server::post('applesEaten');
		$player 	 	 = (int)	\Server::post('player');
		$group 	 	 	 = (int)	\Server::post('group');
		$banTime 	 	 = (int)	\Server::post('banTime');
		$seedTime 	 	 = (int)	\Server::post('seedTime');
		$startTime 	 	 = (int)	\Server::post('startTime');
		$special         = 162;
		$ban = $this->user->getLastBan((int) $player, (int) $group, (string) $special);
		if($ban) {
			$duration = (time() - $startTime);
			$this->core->API('games', [
				'w' => $special,
				'd' => $duration,
				'h' => $ban->hours,
				'u' => $player,
				'r' => $group
			]);
			return View::plain('Unbanned');
		}
	}
}