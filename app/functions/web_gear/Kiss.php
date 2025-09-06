<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Curl;
use Vendor\Header;

class Kiss {
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} else if(Header::cache(__FILE__)) {
			return;
		}
		Header::set('application/json');
		$source = '[["New","kiss,25,Haunt,Hippo,Shark,Rocket,Dart","kiss,25,Lips,Car,Easteregg,Cupid,Grumpy"],["more","kiss,25,Dreams,Kiss,Baseball,Doves,Iceheart","kiss,25,SteamTrain,,Holiday,Spider,Autumn"],["more","kiss,25,Stoneage,Potofgold,Sticky,Tomb,Ani1","kiss,25,Spring,Tv,WildHorses,Mailbox,Animal"],["more","kiss,25,Valentine,Carnival,Weather,Farm,Hippo2","kiss,25,Ilu,Ufo,Easter,Bubbly,Eggs"],["more","kiss,25,Snowfight,Globe,Newyear2,Christmas,Chimney","kiss,25,Hogmanay"]]';
		return View::plain($source);
	}
}