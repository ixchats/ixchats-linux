<?php
namespace Functions;

use Vendor\View;
use Classes\Chat;
use Classes\User;

class Groups {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		$getPage  = View::get('groups', []);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => XAT_NAME , 'xt' => ['groups'], 'description' => DOMAIN . ' is a fun social networking site, join a group, make friends, create your own '.XAT_NAME.' group'] );
	}
}