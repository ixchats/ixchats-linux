<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;

class Events {
	protected $chat;
	protected $mail;
	protected $user;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getid     	  	  = (int) \Server::get('roomid');		
		$getname     	  = (string) \Server::get('GroupName');		
		$RegName   	  	  = (string) \Server::post('RegName');
		$Type   	  	  = (string) \Server::post('Type');
		$search   	  	  = (string) \Server::post('search');
		$Search   	  	  = (string) \Server::post('Search');
		$SubmitPass   	  = (int) \Server::post('SubmitPass');
		$Stats   	  	  = (int) \Server::post('Stats');
		$Power   	  	  = (int) \Server::post('Power');
		$roomid   	  	  = (int) \Server::post('roomid');
		$from   	  	  = (int) \Server::post('from');
		$from1   	  	  = (int) \Server::post('from1');
		$days   	  	  = (int) \Server::post('days');
		$userid   	  	  = (int) \Server::post('userid');
		$message      	  = ['error' => null, 'success' => null];
		$View             = false;
		
		while(1) {
			
			if  (!$Stats && !$Search && !$RegName) { break;}
			
			if (!Validator::isAlphanumeric($RegName)) {
				$message['error'] = 'System Error (2)';
				break;
			}
			if (!$this->user->isAuth()) {
				$message['error'] = \Server::PrintResult('buy','relogin');
				break;
			}
			$user = $this->user->getUserByUsername($RegName);
			if ($this->user->get()->username != $user->username) {
				$message['error'] = \Server::PrintResult('buy','relogin');
				break;
			}
			if ($this->user->getDays($user->days) < 1) {
				$message['error'] = \Server::PrintResult('chat','nodays');
				break;
			}
			if (!$this->user->hasPower(120) && !$this->user->hasPower(280)) {
				$message['error'] = \Server::PrintResult('chat','needevents');
				break;
			}
			if (!Validator::isNumeric($roomid)) {
				$message['error'] = 'System Error (2)';
				break;
			}
			$chat = $this->chat->getById($roomid);
			if (!$chat) {
				$message['error'] = 'System Error (3)';
				break;
			}
			$View = true;
			if ($Search) {
				$quantity = 50;
				$event    = $this->chat->getEvents($chat->id, $Type, $Power, $search);
				if (!$event) { break; }
				switch ($Search) {
					case '1':
						$events  = array_slice($event, $from, $quantity);
						$events2 = array_slice($event, $quantity, $quantity);
					break;
					case 'Older results':
						$events  = array_slice($event, $from, $quantity);
						$events2 = array_slice($event, $from1, $quantity);
					break;
				}
				break;
			}

			break;
		}
		
		$getPage  = View::get('web_gear/Events', ['chat' => $this->chat, 'users' => $this->user, 'name' => $getname, 'chatid' => $getid, 'message' => $message, 'Power' => $Power, 'Type' => $Type, 'room' => $chat, 'View' => $View, 'SubmitPass' => $SubmitPass, 'Regname' => $RegName, 'roomid' => $roomid, 'Stats' => $Stats, 'Search' => $Search, 'userid' => $userid, 'days' => $days, 'search' => $search, 'quantity' => $quantity, 'from' => $from, 'events' => $events, 'events2' => $events2]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Chat events for '.$getname.'', 'xt' => ['chat','buy'], 'description' => 'Chat events for '.$getname.''] );
	}
}