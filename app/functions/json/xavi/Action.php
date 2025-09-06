<?php
namespace Functions\Json\Xavi;

use Vendor\Curl;
use Vendor\View;
use Vendor\Header;

class Action {
	protected $actions = [
		'biggrin', 'confused', 'cool', 'crs', 'crying', 
		'doh', 'eek', 'frown', 'hello', 'mad', 
		'mischief', 'nme', 'no', 'redface', 'sleepy', 
		'smile', 'think', 'tongue', 'un', 'what', 
		'wink', 'yes'
	];
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		$action = (string) \Server::get('a');
		if (!in_array($action, $this->actions)) {
			return;
		}
		$pages = [];
		foreach (\Server::loadXaviActions()  as $i => $u) {
			$pages[substr(basename($u), 0, -4)] = $u;
		}
		if ($pages[$action])
			Header::set('json');
			require_once($pages[$action]);
	}
}
