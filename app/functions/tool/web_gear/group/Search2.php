<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;

class Search2 {
	protected $chat;
	
	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$search = (string) \Server::get('search');		
		$from = (int) \Server::get('from');	
		
		while (1) {
			if (!$search) {
				$message['Err']['search2'] = 'System problem. Please try later, sorry.(no search)';
				break;
			}
			if (!Validator::isAlphanumeric($search)) {
				$message['Err']['nores'] = 'No Results';
				break;
			}
			$results = $this->chat->Search2Message($search, $from ? $from : time(), 30);
			
			if (count($results) == 0) {
				$message['Err']['nores'] = 'No Results';
				break;
			}
			
			foreach ($results as $r) {
				$xatName = $this->chat->getById($r['id']);
				$message['Err']['results'][] = implode(',', [$r['visible'], $r['time'], $xatName->name, 'en', sprintf('%s;%s',$r['registered'], $r['uid']), $r['name'], $r['avatar'], $r['message']]);
			}
			break;
		}
		return View::json($message);
	}
}