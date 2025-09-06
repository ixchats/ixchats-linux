<?php
namespace Functions;

use Vendor\View;
use CLasses\User;

class Terms {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		$getPage = View::get('terms', []);
		return View::render('layout/main', ['page' => $getPage, 'user' => $this->user]);
	}

	public function plain() {
		return View::render('terms');
	}
}