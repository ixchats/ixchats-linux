<?php
namespace Functions;

use Vendor\Validator;
use Vendor\View;
use Classes\User;
use Classes\Chat as ChatClass;

class Embed {
	protected $user;
	protected $chat;

	public function index() {
		$getPage = View::get('Embed', []);
		return View::render('layout/main', ['page' => $getPage]);
	}
}