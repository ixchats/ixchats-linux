<?php
namespace Functions;

use Vendor\View;
use Classes\User;

class Privacy {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		$getPage = View::get('Privacy', []);
		return View::render('layout/main', ['page' => $getPage, 'user' => $this->user]);
	}
}