<?php
namespace Functions\Json\Lists;

use Vendor\View;
use Vendor\Header;
use Vendor\Database;

class GameList {
	protected $sql;
	private $games = [
						60189 => 'DoodleRace',
						60193 => 'MatchRace',
						60195 => 'SnakeRace',
						60201 => 'SpaceWar',
						60225 => 'Hearts',
						60239 => 'Switch',
						60247 => 'Darts',
						60257 => 'zWhack'
					 ];
		private $getimage = METHOD . '//' . DOMAIN . '/web_gear/chat/GetImage7.php?W=100&H=67&U=';
	
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
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} 
		//else if(Header::cache(__FILE__)) {
		//	return;
		//}
		$number   	= 0;
		$quantity 	= 24;
		$limit    	= floor($number * $quantity);
		$json     	= [['p' => $number, 'l' => 5]];
		$condition  = ['blocked' => 0, 'active'  => 1];
		$i 			= 0;
		
		$chats = $this->sql->fetch_array('select online, bg, descr , name , flag, games from chats where  '. $this->arrayOptions($condition) .' games in ('. implode(',', array_keys($this->games)) .') and name != "" and email != "" order by id desc limit '. $quantity .';');
		foreach($chats as $c) {
			if ($c['flag'] ^ F_DELISTED) {
				$i++;	
				$json[$i]['n'] = $c['online'];
				$json[$i]['a'] = $this->getimage . $c['bg'];
				$json[$i]['g'] = $c['name'];
				$json[$i]['d'] = $c['descr'];
				$json[$i]['t'] = $this->games[$c['games']];
				$json[$i]['x'] = (int) 0;
			}
		}			
		return View::json($json);
	}
}