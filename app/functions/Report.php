<?php
namespace Functions;

use Vendor\View;
use Classes\User;

class Report {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getPage = View::get('Report', []);
		return View::render('layout/main', ['title' => XAT_NAME.' report', 'page' => $getPage]);
	}
}