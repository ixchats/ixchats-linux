<?php
namespace Functions\Json\Xavi;

use Vendor\View;
use Vendor\Curl;
use Vendor\Header;

class Xavi {
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		$json = [
				   'ver' => 1,
				   'hat' => 
				  [
				  /*number => cost*/
					0 => 1,
					1 => 100,
					2 => 100,
					3 => 100,
					4 => 100,
					5 => 100,
					6 => 50,
					7 => 100,
					8 => 100,
					9 => 100,
					10 => 100,
					11 => 100,
					12 => 100,
					13 => 1,
					14 => 100,
					15 => 50,
					16 => 100,
					17 => 100,
					18 => 100,
					19 => 100,
					20 => 100,
					21 => 100,
					22 => 100,
					23 => 100,
					24 => 100,
					25 => 100,
					26 => 100,
					27 => 100,
					28 => 100,
					29 => 100,
					30 => 100,
					31 => 100,
					32 => 100,
					33 => 100,
					34 => 100,
					35 => 100,
					36 => 100,
					37 => 100,
					38 => 100,
					39 => 100,
					40 => 100,
				  ],
				   'hair' => 
				  [
				 /*number => cost*/
					0 => 0,
					1 => 0,
					2 => 0,
					3 => 50,
					4 => 100,
					5 => 0,
					6 => 0,
					7 => 0,
					8 => 50,
					9 => 50,
					10 => 50,
					11 => 50,
					12 => 50
				  ]
				];
		return View::json($json);
		#Header::set('json');
		#$source = Curl::getHttps('https://xat.com/json/xavi/xavi.php');
		#return View::plain($source);
	}
}