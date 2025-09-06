<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Header;

class Sticker {
	public function index() {
		if(Header::cache(__FILE__)) {
			return;
		}
		Header::setcache();
		$getSticker  = (string) \Server::get('s');
		$StickerList = (bool) 	\Server::get('a');
		$stickers    = [];
		
		if ($StickerList) {	
			foreach (\Server::loadStickers() as $i => $u) {
				$value = explode('_', substr(basename($u), 0, -3));
				if (!empty($value[1])) 
					$stickers[$value[0]][] = $value[1];
			}
			return View::json($stickers);
		}
		
		$getPage = View::get('web_gear/Sticker', ['getsticker' => $getSticker,'title' => 'Sticker']);
		return View::render('layout/main', ['page' => $getPage]);
	}
}