<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;

class WebChat {
	protected $chat;
	protected $user;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$arr = ['es' => [], 'pt' => [], 'ro' => [], 'de' => [], 'th' => [], 'ar' => [], 'tr' => [], 'pl' => [], 'fr' => [], 'n0' => [], 'bg' => [], 'hr' => [], 'sr' => [], 'bs' => [], 'en' => [], 'it' => [], 'fl' => []];
			
		$promo = $this->chat->PromoGroups();
		$list = [];
		foreach ($promo as $p) {
			$chat = $this->chat->get($p['chat']);

			if(empty($chat))
				continue;

			$list[$chat->langdef][] = implode(',', [$chat->name, $chat->id]);
		}
		foreach ($arr as $a => $u) {
			$lang[] = $a;
		}
		foreach ($lang as $l) {
			if (!empty($list[$l]))
				$arr[$l] = implode(',', $list[$l]).',';
		}
		$arr = array_map(function($x) use($arr) { return empty($x) ? (empty($arr) ? [] : implode(',',[MAINCHAT[1], MAINCHAT[0]]).',') : $x; }, $arr);
		
		$chats = json_encode($arr);
		
		$getPage  = View::get('web_gear/WebChat', ['chat' => $this->chat, 'promoted' => $chats]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Free stuff for your web site', 'xt' => [], 'description' => 'Free stuff for your web site'] );
	}
}