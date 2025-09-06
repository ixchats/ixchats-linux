<?php
namespace Functions;

use Vendor\View;
use Classes\User;

class chats {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getPage = View::get('chats', []);
		return View::render('layout/main', ['title' => XAT_NAME.' chats', 'page' => $getPage]);
	}
}