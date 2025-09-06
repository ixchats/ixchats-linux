<?php
namespace Functions\Json\Xavi;

use Vendor\View;
use Classes\User;

class Put {
	protected $user;
	
	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} 
		$getXavi = (string) \Server::post('xavi');
		$getUser = (int)    \Server::post('u');
		$getKey  = (int)    \Server::post('k');
		$getInt  = (int)    \Server::post('i');
		$xavi    = json_decode($getXavi, true);
		
		if (!$getUser) {
			return View::plain('no u');
		}
		if (!$getKey) {
			return View::plain('no k');
		}
		if (!$getInt) {
			return View::plain('no i');
		}		
		if (json_last_error() != JSON_ERROR_NONE) {
			return View::plain('no xavi');
		}
		
		$user 		    = $this->user->getUserById($getUser);
		$MyXavi         = json_decode($user->xavi, true);
		$MyXavi['data'] = $xavi;
		$SaveXavi       = json_encode($MyXavi);
		$this->user->updateData('users', ['xavi' => $SaveXavi],['id' => $user->id]);
		return View::plain('OK');
	}
}