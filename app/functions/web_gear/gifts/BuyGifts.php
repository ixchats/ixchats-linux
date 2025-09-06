<?php
namespace Functions\WebGear\Gifts;

use Vendor\View;
use Classes\Gift;
use Classes\Core;

class BuyGifts {
	protected $core;
	protected $gifts;
	
	public function __construct() {
		$this->gifts = new Gift();
		$this->core = new Core();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		
		$To			 = (int)    \Server::post('b');
		$Pass		 = (string) \Server::post('p');
		$Front		 = (string) \Server::post('s', false);
		$Logintime 	 = (int)    \Server::post('t'); //don't need this i assume
		$Chatmsg 	 = (string) \Server::post('w');
		$Message 	 = (string) \Server::post('m', false);
		$From 	 	 = (int)	\Server::post('u');
		$Flags 		 = (int) 	\Server::post('f');
		$Cost 		 = (int) 	\Server::post('c');
		$GiftName	 = (string) \Server::post('g');
		$RoomId		 = (int) 	\Server::post('r');
		
		while(1) {
			
			if (!$GiftName || !$From || !$To || !in_array($Cost, array(50, 100))) {
				break;
			}
			$user = $this->gifts->getUserById($From);
			if (!$user) {
				echo \Server::PrintResult('buy', 'notfound', \Server::detectLanguage(), false);
				break;
			}
			if ($user->xats < $Cost) {
				echo \Server::PrintResult('buy', 'noxats', \Server::detectLanguage(), false);
				break;
			}
			if ($user->is_held > time()) {
				echo \Server::PrintResult('buy', 'held', \Server::detectLanguage(), false);
				break;
			}
			$receiver = $this->gifts->getUserById($To);
			if ($receiver->username == '' || !$receiver) {
				break;
			}
			if (!$From || !$this->gifts->verifyPass($Pass, $user->password)) {
				echo \Server::PrintResult('buy', 'wrongpassword', \Server::detectLanguage(), false);
				break;
			}
			
			$d0 = $receiver->d0;
			if ($receiver->d0 ^ 1 << 24) {
				$d0 |= 1 << 24;
				$this->gifts->update('users',['d0' => $d0],['id' => $receiver->id]);
			}
			$this->gifts->update('users',['xats' => floor($user->xats - $Cost)],['id' => $user->id]);
			$this->gifts->buyGift([
					'u' => $user->id, 
					'n' => $user->username, 
					'b' => $receiver->id, 
					's' => htmlspecialchars($Front), 
					'f' => $Flags, 
					'm' => htmlspecialchars($Message), 
					'r' => $RoomId, 
					'g' => htmlspecialchars($GiftName), 
					'c' => $Cost, 
					't' => time()
				]
			);
			$this->core->API('gifts', [
				'd' => $To,
				'u' => $From,
				'c' => $RoomId,
				'f' => $Flags,
				'w' => $Chatmsg,
				'k' => 'Gifts'
			]);	
			echo 'OK';
			break;
		}
	}
}
