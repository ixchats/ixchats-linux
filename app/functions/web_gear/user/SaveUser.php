<?php
namespace Functions\WebGear\User;

use Vendor\View;
use Classes\User;
use Vendor\Header;

class SaveUser {
	protected $user;
	
	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getJson = (string) \Server::post('json', false);
		$json = json_decode($getJson, false);
		$status = true;
		if (!$getJson || json_last_error() !== 0) {
			return View::plain('BadParams');
		} else if (empty($json->Params) || empty($json->M) || empty($json->S)) {
			return View::plain('BadParams');
		} else if (empty($json->Params->UserId) || empty($this->user->get()->id)) {
			return View::plain('BadParams');
		} else if ($this->user->get()->id != $json->Params->UserId) {
			return View::plain('BadParams');
		}
		$this->user->update(['settings' => json_encode(
			array(
				$json->M, 
				$json->S
			))
		]);
	}
}