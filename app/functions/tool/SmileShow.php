<?php
namespace Functions\Tool;

use Vendor\View;
use Vendor\Header;

class SmileShow {
	public function index() {
		Header::setcache();
		$smile    = (string) \Server::get('sm');
		$getPage  = View::get('tool/smileshow', ['smile' => $smile]);
		return View::render('layout/main', ['page' => $getPage]);	
	}	
}
