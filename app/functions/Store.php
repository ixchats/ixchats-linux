<?php
namespace Functions;

use Vendor\View;
use Classes\User;

class Store {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getPage = View::get('Store', ['user' => $this->user]);
		return View::render('layout/main', ['title' => XAT_NAME.' store', 'page' => $getPage]);
	}
}