<?php
namespace Functions;

use Vendor\View;
use Classes\User;

class tools {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getPage = View::get('Tools', []);
		return View::render('layout/main', ['title' => XAT_NAME.' Tools', 'page' => $getPage,'nav' => \Server::loadNavbar('html5', 'tools'), 'foot' => \Server::loadFotter('html5', 'Tools')]);
	}
}