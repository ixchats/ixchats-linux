<?php
namespace Functions\WebGear;

use Vendor\View;

class GroupOptionEdit2 {
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$j   = (int) \Server::get('j');
		$getId   = (int) \Server::get('id');
		$gp      = [74,80,90,92,96,98,100,102,106,108,112,114,130,148,150,156,180,188,192,194,200,206,220,224,238,246,252,256,278,296,300,630,634];
		$js      = [];
		$html    = [];
		$gethtml = '';
		$getjs   = '';

		foreach (\Server::loadGroupHtml() as $i => $u) {
			$html[substr(basename($u), 0, -5)] = $u;
		} 
		foreach (\Server::loadGroupJs() as $i => $u) {
			$js[substr(basename($u), 0, -3)] = $u;
		}
		if ($getId && in_array($getId, $gp)) {		
			$gethtml = $html[$getId];
			$getjs   = $js[$getId];
		}
		$getPage = View::get('web_gear/GroupOptionEdit2', ['html' => $gethtml, 'js' => $getjs, 'id' => $getId]);
		return View::render('layout/main', ['page' => $getPage]);
	}
}