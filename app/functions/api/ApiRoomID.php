<?php
namespace Functions\Api;

use Vendor\Validator;
use Vendor\View;
use Classes\Chat;

class ApiRoomID {
	protected $chat;

	public function __construct() {
		$this->chat = new Chat();
	}

	public function index() {
		//if (\Server::isRealUser() == false) {
		//	return http_response_code(403);
		//}
		$chatN    = (string) \Server::get('d');
		$chatId   = (int) \Server::get('i');
		$result   = ['id' => '0', 'd' => '#', 'g' => '#', 'a' => '#','tabs' => [0 => ['label' => 'YouTube Chat','url' => 1], 1 => ['label' => 'Comments', 'url' => 2]]];
		$attached = ['id' => false, 'name' => false];
		$chat     = $chatN && Validator::isValidChatName($chatN) && !$chatId ? (substr($chatN, 0, 3) == 'xat' && is_numeric(substr($chatN, 3)) ? $this->chat->getById(substr($chatN, 3)) : $this->chat->get($chatN)) : $this->chat->getById($chatId);
		if ($chat) {
			if (!empty($chat->attached)) {
				$getAttached = $this->chat->get($chat->attached);
				if ($getAttached) {
					$attached = ['id' => $getAttached->id, 'name' => $getAttached->name];
				}
			}
			 $tab = [
					['label' => $chat->button0, 'url' => '/web_gear/chat/media.php?d='.$chat->name.'&p=0&id='.$chat->id.'', 'html' => $chat->HTML],
					['label' => $chat->button1, 'url' => 1, 'html' => $chat->HTML],
					['label' => $chat->button2, 'url' => 2, 'html' => $chat->HTML2],
					['label' => $chat->button3, 'url' => 3, 'html' => $chat->HTML3],
					['label' => $chat->button4, 'url' => 4, 'html' => $chat->HTML4],
					['label' => $chat->button5, 'url' => 5, 'html' => $chat->HTML5],
					['label' => $chat->button6, 'url' => 6, 'html' => $chat->HTML6]	
				];
         
         	foreach ($tab as $tb) {
         		if (!empty($tb['html']) && !empty($tb['label'])) {
         			$tabs[] = ['label' => $tb['label'], 'url' => $tb['url']];
          		}
         	}
			$result['id']      = (string) $chat->id;
			$result['d']       = (string) $chat->descr;
			$result['g']       = (string) $chat->name;
			$result['a']  	   = (string) "{$chat->bg};={$attached['name']};={$attached['id']};={$chat->langdef};={$chat->radio};={$chat->button};={$chat->portrait};={$chat->landscape}";
			$result['tabs']    = $tabs;
			if ($chat->debug > 0) {
				$result['t']   = (int) 256;
			}
			if ($chat->bot > 0) {
				$result['bot'] = (int) $chat->bot;
			}
			$result['gb']  = (string) $chat->outter;
		} else {
			print "-10-11";
		}
		return View::json($result);
	}
}
