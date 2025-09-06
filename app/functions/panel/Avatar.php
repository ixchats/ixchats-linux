<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;

class Avatar {
	protected $user;
	protected $chat;

	public function index() {
		$getPage = View::get('panel/avatar', []);
		return View::render('layout/main', ['page' => $getPage]);
	}
}
