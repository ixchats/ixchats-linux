<?php
namespace Functions\Json;

use Vendor\View;
use Classes\Chat;

class Promo {
	protected $chat;
	
	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		$arr = ['es' => [], 'pt' => [], 'ro' => [], 'de' => [], 'th' => [], 'ar' => [], 'tr' => [], 'pl' => [], 'fr' => [], 'n0' => [], 'bg' => [], 'hr' => [], 'sr' => [], 'bs' => [], 'en' => [], 'it' => [], 'fl' => []];

		$promo = $this->chat->PromoGroups();

		foreach($promo as $p) {
			$chat = $this->chat->get($p['chat']);

			if(empty($chat))
				continue;

			$arr[$chat->langdef][] = ['n' => $chat->name, 'i' => (int) $chat->id, 't' => (int) $p['over'], 'd' => $chat->descr, 'a' => $chat->bg];
		}

		$autopromo = $this->chat->getAutoPromo();
		foreach($autopromo as $ap)
		{
			switch($ap['autopromo']) {
			case 'ON':
				$arr[$ap['langdef']][] = ['n' => $ap['name'], 'i' => (int) $ap['id'], 'd' => $ap['descr'], 'a' => $ap['bg']];
			break;
			case 'ALL':
				$arr[$ap['langdef']][] = ['n' => $ap['name'], 'i' => (int) $ap['id'], 'd' => $ap['descr'], 'a' => $ap['bg']];
				$arr= array_map(function($x) use($ap) { return empty($x) ? (empty($ap) ? [] : [['n' => $ap['name'], 'i' => (int) $ap['id'], 'd' => $ap['descr'], 'a' => $ap['bg']]]) : $x; }, $arr);
			break;
			}
		}
		return View::json($arr);
	}
}