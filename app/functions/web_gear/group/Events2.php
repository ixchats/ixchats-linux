<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;

class Events2 {
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
		$RegName   	  	  = (string) \Server::post('search');
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
		$userid   	  	  = (int) \Server::post('Id');
		$UnMod   	  	  = (int) \Server::post('UnMod');
		$MainOwner   	  = (int) \Server::post('MainOwner');
		$message    = ['Err' =>[]];
		$getj2 = (string) \Server::get('j');
		$View             = false;
		$domain = DOMAIN;
		
		while(1) {
			
			if  (!$Stats && !$Search && !$RegName) { break;}
			
			$user = $this->user->getUserByid($userid);
			if (!Validator::isAlphanumeric($user->username)) {
				$message['error'] = 'System Error (2)';
				break;
			}
			if (!$this->user->isAuth()) {
				$message['Err']['events'] = \Server::PrintResult('buy','relogin');
				break;
			}
			$user = $this->user->getUserByid($userid);
			if ($this->user->get()->id != $user->id) {
				$message['Err']['events'] = \Server::PrintResult('buy','relogin');
				break;
			}
			if ($this->user->getDays($user->days) < 1) {
				$message['error'] = \Server::PrintResult('chat','nodays');
				break;
			}
			if (!$this->user->hasPower(120) && !$this->user->hasPower(280)) {
				$message['Err']['events'] = \Server::PrintResult('chat','needevents');
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
						$test = array();
						$total = 0;
							foreach ($events as $e) {
									$Modes = [
										'gm' => 'muted',
										'gg' => 'gag',
										'gs' => 'guest self',
										'g' => 'ban',
										'ss' => 'set scroller',
										'rl' => 'ranklock',
										'sb' => 'sinbin',
										'pt' => 'protect',
										'hu' => 'hush',
										'k' => 'kick',
										'mb' => 'temp member',
										'me' => 'make member',
										'mm' => 'make mod',
										'mo' => 'make owner',
										'dr' => 'demote to guest',
										'de' => 'demote to member',
										'dm' => 'demote to mod',
										'u' => 'unban',
										'pro' => 'promotion',
										'rst' => 'restore',
										'gd' => 'dunce',
										'd2' => 'un-dunce',
										'b1' => 'badge',
										'b2' => 'un-badge',
										'n1' => 'naughty',
										'gn' => 'naughty',
										'n2' => 'un-naughty',
										'gy' => 'yellowcard',
										'y2' => 'un-yellowcard',
										'R' => 'redcard self',
										'gr' => 'redcard',
										'r2' => 'un-redcard',
										'ka' => 'kickall'
									];
								
								$test[] = array(
											date('F d Y - H:i:s', $e['time']),
											"<a title=\"Click to unmod\" href=\"\/\/{$domain}\/report\/unmod.php?u={$e['id']}&g={$e['room']}\">{$e['id']}<\/a>",
											$e['iname'],
											$Modes[$e['mode']],
											$e['jd'],
											$e['jname'],
											$e['secs'],
											$total = $total+1,
											$e['text']
										);
										
								 $data = array(
									'nextfrom'    =>    "1597041215",
									'oldest'    =>    "1597041216",
									'count'    =>    $total,
									'events'       =>    (object)$test
								);
							}
						$message['Err'] = $data;
					break;
					case 'Older results':
						$events  = array_slice($event, $from, $quantity);
						$events2 = array_slice($event, $from1, $quantity);
						$message['error'] = $events;
					break;
				}
				break;
			}elseif ($Stats) {
				$quantity = 50;
				$event    = $this->chat->getEvents($chat->id, $Type, $Power, $search);
				if (!$event) { break; }
				switch ($Stats) {
					case '1':
						$events  = array_slice($event, $from, $quantity);
						$events2 = array_slice($event, $quantity, $quantity);
						$test = array();
						$total = 0;
							foreach ($events as $e) {
							//	$data1 = array(
							//		'Who'    =>    $total,
							//		'Table'    =>    $total,
							//		'datakp'    =>    $total,
							//	);
							//	$test[] = array(
							//				$total = $total+1,
							//				$e['text']
							//			);
							/* meh too busy to finish it, maybe later */			
								 $data = array(
									'stats'    =>    'asd'
								);
							}
						$message['Err'] = $data;
					break;
					case 'Older results':
						$events  = array_slice($event, $from, $quantity);
						$events2 = array_slice($event, $from1, $quantity);
						$message['error'] = $events;
					break;
				}
				break;
			}
				
			
		break;
	}
			if($getj2 == '1'){
				$source= '{"Powers":{"134":"SnakeBan","136":"SpaceBan","140":"MatchBan","152":"MazeBan","162":"CodeBan","176":"Reverse","184":"Zip","236":"SlotBan"},"Modes":{"gm":"muted","gg":"gag","gs":"guest self","g":"ban","ss":"set scroller","rl":"ranklock","sb":"sinbin","pt":"protect","hu":"hush","k":"kick","mb":"temp member","me":"make member","mm":"make mod","mo":"make owner","dr":"demote to guest","de":"demote to member","dm":"demote to mod","u":"unban","pro":"promotion","rst":"restore","gd":"dunce","d2":"un-dunce","b1":"badge","b2":"un-badge","n1":"naughty","n2":"un-naughty","y1":"yellowcard","y2":"un-yellowcard","R":"redcard self","r1":"redcard","r2":"un-redcard","ka":"kickall"}}';
				echo $source;
			} else {
				echo json_encode($message);
			}

	}
}