<?php
namespace Functions\Json;

use Vendor\View;
use Classes\Chat;

class GroupPools {
	private $fields = ['roomid', 'id', 'count'];
	protected $chat;
	protected $xml;
	
	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		
		$getChat   = (int) \Server::get('roomid');
		$getUser   = (int) \Server::get('id');
		$getCount  = (int) \Server::get('count');

		$chats  = $this->chat->getById($getChat);
		$users  = $this->chat->getuserById($getUser);
		$polls  = $this->chat->getPoll($getChat);
		$ranks  = $this->chat->getuRankOnChat($getChat, $getUser);
		$av     = $this->chat->CheckPolls($getChat, $getUser);
		
		$vote   = is_numeric($RoomId) && isset($RoomId) && ($chats->vote !== '{}' || !empty($chats->vote)) ? $chats->vote : '{}';
		$vote   = @json_decode($vote, true);
		if($chats) {
			if($users && is_numeric($UserId) && $getUser && is_numeric($getChat) && $getChat && is_null($Count)) {
			$vars  = "";
			$vars2 = "";
			$count = array();
			$cv    = is_null($vote['cv']) ? '' : $vote['cv'];

			  foreach($vote as $i => $v) { 
				  if (is_numeric($i)) { 
					 $vars .=  "a{$i}=\"{$v}\" ";
				  }
			  }
			  unset($i,$v);
		
		      foreach($polls as $poll) { 
				  @$count[$poll->count] += 1; 
			  }
			unset($poll);
			  foreach($count as $i=>$v) { 
				  $vars2 .= "c{$i}=\"{$v}\" ";
			  }
			unset($i,$v);
			
			$this->xml = new \SimpleXMLElement(sprintf("<vote %s%s%s cv=\"%s\" />", $vars, $vars2, $av ? 'av="1"' : '', $cv));
			View::xml($this->xml->asXML());
			}
		}
	}
	
	public function addAttr(string $name, string $value) {
			${$name} = $this->xml->addChild($name);
			${$name}->addAttribute('v', $value);
			return ${$name};
	}
}