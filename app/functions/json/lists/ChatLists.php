<?php
namespace Functions\Json\Lists;

use Vendor\View;
use Vendor\Curl;
use Vendor\Header;
use Vendor\Database;

class ChatList {
	protected $sql;
		
	public function __construct() {
		$this->sql = new Database();
	}
	
	private function arrayOptions(array $array) {
		$whereC = '';
		foreach ($array as $k => $v) {
			$whereC .= "{$k} = '{$v}' and ";
		}
		return $whereC;
	}
	
	public function index(array $settings) {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} 
		//else if(Header::cache(__FILE__)) {
		//	return;
		//}	
		$number   	= (int)    $settings[1];
		$language 	= (string) substr($settings[2], 0, 2);
		$section  	= (string) $settings[3];
		$quantity 	= 24;
		$limit    	= floor($number * $quantity);
		$json     	= [['p' => $number, 'l' => 5]];
		$condition  = ['blocked' => 0, 'active'  => 1];
		$i = 0;
		
		switch($section) {
			case 'popular':								
				$chats = $this->sql->fetch_array('select * from chats where online > -1 and langdef = \''. $language .'\' and '.$this->arrayOptions($condition).'  name != "" and email != ""  order by online desc limit '. $limit .','. $quantity .';');
				foreach ($chats as $c) {
					if($c['name'] == "Sohbet"){
						$c['online'] = ($c['online'] + 95);
					}
					$i++;
					$json[$i]['n'] = $c['online'];
					$json[$i]['a'] = $c['bg'];
					$json[$i]['g'] = $c['name'];
					$json[$i]['d'] = $c['descr'];
				}
			break;
			case 'featured':								
				$chats = $this->sql->fetch_array('select * from chats where online > -1 and langdef = \''. $language .'\' and '.$this->arrayOptions($condition).'  name != "" and email != ""  order by id desc limit '. $limit .','. $quantity .';');
				foreach ($chats as $c) {
					if($c['name'] == "Sohbet"){
						$c['online'] = ($c['online'] + 95);
					}
					$i++;
					$json[$i]['n'] = $c['online'];
					$json[$i]['a'] = $c['bg'];
					$json[$i]['g'] = $c['name'];
					$json[$i]['d'] = $c['descr'];
				}
			break;
			case 'supported':								
				$chats = $this->sql->fetch_array('select * from chats where langdef = \''. $language .'\' and '.$this->arrayOptions($condition).'  name != "" and email != "";');
				$chats = array_slice($chats, $limit, floor($quantity + $limit));
				foreach ($chats as $c) {
					$group = $this->sql->fetch_array('select distinct chat from group_powers where power = 78 and enabled = 1 and chat = \''.$c['name'].'\';');
					if ($group) {
						$supporter = $this->sql->fetch_array('select count from group_powers where power = 78 and enabled = 1 and chat = \''.$c['name'].'\';');
						$supcount = 0;
						foreach ($supporter as $s) { $supcount += $s['count'];}
						$i++;
						$json[$i]['n'] = $supcount;
						$json[$i]['a'] = $c['bg'];
						$json[$i]['g'] = $c['name'];
						$json[$i]['d'] = $c['descr'];
					}
				}
			break;
		}
		if ($getPage == 'games') {
			$chats = $this->sql->fetch_array('select * from chats where  '.$this->arrayOptions($condition).' games != "" and name != "" and email != ""  order by id desc limit '. $quantity .';');
			foreach($chats as $c) {
				if($c['name'] == "Sohbet"){
						$c['online'] = ($c['online'] + 95);
					}
				$i++;	
				$json[$i]['n'] = $c['online'];
				$json[$i]['a'] = $c['bg'];
				$json[$i]['g'] = $c['name'];
				$json[$i]['d'] = $c['descr'];
				$json[$i]['t'] = $c['games'];
				$json[$i]['x'] = (int)0;
			}	
		}		
		return View::json($json);
	}
}
