<?php
namespace Functions\WebGear\Gameraces;

use Vendor\View;
use Classes\Core;
use Classes\User;

class G50136 {
	protected $core;
	protected $user;
	
	public function __construct() {
		$this->core = new Core();
		$this->user = new User();
	}
	
	public function index() {
		$get = unpack('N*', file_get_contents("php://input"));
		if (count($get) < 7) {
			return View::plain('Forever spaced ;)');
		} else if ($get[4] == 0) {
			return View::plain('Forever spaced ;)');
		} else if($get[6] > time()) {
			return View::plain('Failed.');
		}
		$ban = $this->user->getLastBan((int) $get[2], (int) $get[3], (string) $get[5]);
		if($ban) {
			$duration = (time() - $get[6]);
			$this->core->API('games', [
				'w' => $get[5],
				'd' => $duration,
				'h' => $ban->hours,
				'u' => $get[2],
				'r' => $get[3]
			]);
			return View::plain('Unbanned');
		}
	}
}
