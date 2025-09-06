<?php
namespace Functions\Json;

use Vendor\View;
use Classes\Chat;

class Adverts {
	protected $chat;
	
	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		$arr = ["pt" => [], "es" => [], "ro" => [], "de" => [], "th" => [], "ar" => [], "tr" => [], "pl" => [], "fr" => [], "n0" => [], "bg" => [], "hr" => [], "sr" => [], "bs" => [], "en" => [], "it" => [], "fl" => []];

		$promo = $this->chat->AdvGroups();

		foreach($promo as $p) {
			$chat = $this->chat->get($p['chat']);

			if(empty($chat))
				continue;

			$arr[$chat->langdef][] = ["start" => (int) $p['at'], "time" => (int) $p['over'] - $p['at'], "group" => $chat->name, "roomid" => (string) $chat->id,  "adimg" => $p['banner']];
		}
		
		$autopromo = $this->chat->getAutoAdv();
		
		foreach($autopromo as $ap) {
			switch($ap['autopromo']) {
				case 'ON':
					$arr[$ap['langdef']][] = ["start" => 0, "time" => (int) 0, "group" => $ap['name'], "roomid" => (int) $ap['id'],  "adimg" => $ap['adimg']];
				break;
				case 'ALL':
					$arr[$ap['langdef']][] = ["start" => (int) $ap['time'], "time" => (int) 0, "group" => $ap['name'], "roomid" => (int) $ap['id'],  "adimg" => $ap['adimg']];
					$arr = array_map(function($x) use($ap) { return empty($x) ? (empty($ap) ? [] : [["start" => 1, "time" => (int) 0, "group" => $ap['name'], "roomid" => $ap['id'], "adimg" => $ap['adimg']]]) : $x; }, $arr);	
				break;
			}
		}
		return View::plain(json_encode($arr));
	}
}