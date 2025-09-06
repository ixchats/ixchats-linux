<?php
namespace Functions;

use Vendor\Validator;
use Vendor\View;
use Classes\User;
use Classes\Chat as ChatClass;

class Crossdomain {
	protected $user;
	protected $chat;

	public function index() {
		$getPage = View::get('Crossdomain', []);
		return View::render('layout/main', ['page' => $getPage]);
	}
}