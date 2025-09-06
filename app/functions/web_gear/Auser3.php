<?php
namespace Functions\WebGear;

use Vendor\View;
use Classes\User;

class Auser3 {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}

	public function index() {
		/*if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if (NO_PROXY && \Server::hasProxy()) {
			return http_response_code(403);
		}*/
		$getID = (int) \Server::get('u');
		$getK2 = (int) \Server::get('k2');
		$_last = $this->user->getLastGuest();
		$_user = $this->user->getUserByK2($getID, $getK2);
		if ($_user) {
			$get = $_user;
		} else if ($_last) {
			$get = $_last;
		} else {
			$get = $this->user->newGuest();
		}
		return View::plain("&UserId={$get->id}&k1={$get->k}&k2={$get->k2}");
	}
}