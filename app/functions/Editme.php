<?php
namespace Functions;

use Vendor\View;
use Classes\User;

class editme {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getPage = View::get('Editme', []);
		return View::render('layout/main', ['title' => XAT_NAME.' Editme', 'page' => $getPage,'nav' => \Server::loadNavbar('html5', 'editme'), 'foot' => \Server::loadFotter('html5', 'Editme')]);
	}
}