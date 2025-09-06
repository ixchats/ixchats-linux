<?php
namespace Functions;

use Vendor\View;

class Maintenance {
	
	public function index() {
		$getPage = View::get('maintenance', []);
		return View::render('layout/main', ['title' => XAT_NAME, 'page' => $getPage]);
	}
}