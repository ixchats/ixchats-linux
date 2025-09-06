<?php
namespace Functions\Json\Xavi;

use Vendor\View;
use Classes\User;
use Vendor\Header;

class Get2 {
	protected $user;
	protected $defaultXavi = [
	  'head' => 
	  [
		'id' => 1,
		'y' => 0,
		'sx' => 0,
		'sy' => 0,
		'r' => 0,
		'color' => 0,
	  ],
	  'mouth' => 
	  [
		'id' => 1,
		'x' => 0,
		'y' => 0,
		'sx' => 0,
		'sy' => 0,
		'r' => 0,
		'color' => 0,
	  ],
	  'eyes' => 
	  [
		'id' => 1,
		'x' => 0,
		'y' => 0,
		'sx' => 0,
		'sy' => 0,
		'r' => 0,
		'color' => 0,
	  ],
	  'brows' => 
	  [
		'id' => 1,
		'x' => 0,
		'y' => 0,
		'sx' => 0,
		'sy' => 0,
		'r' => 0,
		'color' => 0,
	  ],
	  'hair' => 
	  [
		'id' => 1,
		'x' => 0,
		'y' => 0,
		'sx' => 0,
		'sy' => 0,
		'r' => 0,
		'color' => 0,
	  ],
	  'items' => 
	  [
		'id' => 0,
		'x' => 0,
		'y' => 0,
		'sx' => 0,
		'sy' => 0,
		'r' => 0,
		'color' => 0,
	  ],
	];

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getId   = (int)  \Server::get('u');
		
		if (!$getId) {
			return;
		}
		
		Header::set('json');
		$getUser = $this->user->getUserById($getId);
		
		if (!$getUser) {
			return View::json($this->defaultXavi);
		}
		
		$getXavi = json_decode($getUser->xavi2, true);
		$xavi    = json_last_error() == JSON_ERROR_NONE ? $getXavi : $this->defaultXavi;
				
		return View::json($xavi);
	}
}