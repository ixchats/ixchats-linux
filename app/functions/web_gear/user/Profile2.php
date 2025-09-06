<?php
namespace Functions\WebGear\User;

use Vendor\Header;
use Vendor\View;
use Classes\Chat;
use Classes\User;
use Vendor\Validator;
use Classes\Core;

class Profile2 {
	protected $chat;
	protected $user;
	protected $core;

	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->core = new Core();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		
		$n = (string) \Server::get('n');
		$i = (int)    \Server::get('i');

		$message =  ['Err' => ['Media' => ['nick' => null,'avatar' => null, 'home' => null, 'id' => 0]]];
					
		while(1) {
			switch (true) {
				case $n:
					if (Validator::isAlphanumeric($n)) { 
						$user = $this->user->getUserByUsername($n);	 		 
					}
					
				break;	
				case $i:					
					if (Validator::isNumeric($i)) { 
						$user = $this->user->getUserById($i); 	 	 		 
					}
					
				break;
			}
			if ($user) {			
				$message['Err']['Media'] = [
					'Back2' => $user->back2,
					'Back3' => $user->back3,
					'aboutnew' => \Server::DecryptData($user->aboutnew),
					'avatar2' => $user->avatar2,
					'id' => $user->id,
					'Name' => $user->username,
					'avatar' => $user->avatar,
					'home' => $user->url,
					'nick' => base64_decode($user->nickname),
					'medianew' => SpecialEmbed(html_entity_decode(\Server::DecryptData($user->medianew))),
					'social' => $user->social,
					'txtcolor' => $user->txtcolor,
					'custom' => $user->custom,
					'xatframe' => $user->xatframe
				];
				
				if ($this->user->hasPower2(349, $user->id)) {
					$message['Err']['Media']['me'] = '';
				}
				
				if ($user->d2 > 0) {
					$couple = $this->user->getUserById($user->d2); 
					if ($couple) {
						if ($user->d0 & 1 << 0) {
							$message['Err']['Media']['Bff'] = $couple->username;
						} else {
							$message['Err']['Media']['Married'] = $couple->username;
						}
					}
				}
				
				if ($user->d0 > 0) {
					if ($user->d0 & 1 << 21) {
						$message['Err']['Media']['Verified'] = 'Cyan';
					}
				}
			}
		break;
		}
		header('Content-Type: application/json');
		echo json_encode($message);
	}
}

function SpecialEmbed($input) {
			$pattern = [
						'/\[youtube:([0-9]{1,5}):([0-9]{1,5}):(..*):(..*)]\??/',
						'/\[icons:bootstrap]\??/',
						'/\[icons:fontawesome]\??/',
						'/\[icons:fontawesome]\??/',
						'/\[icon:(..*):([0-9]{1,3})]\??/',
						'/\[font:(..*)]\??/',
						'/\[box:(..*):([0-9]{1,5}):([0-9]{1,5}):(..*)]\??/',
						'/\[radio:([0-9]{1,5}):([0-9]{1,5}):(..*):([0-9]{1,5}):(..*):(..*)]\??/',
						'/\[radioswf:([0-9]{1,3}):([0-9]{1,3}):(..*)]\??/',
						'/\[radiohtml:([0-9]{1,3}):([0-9]{1,3}):(..*)]\??/',
						'/\[radiohtml5:(..*):([0-9]{1,5}):(..*)]\??/',
						'/\[chat:([0-9]{1,4}):([0-9]{1,4}):([0-9]{1,4}):(..*)]\??/',
						'/\[spotify:(..*):(..*):([0-9]{1,5}):([0-9]{1,5})]\??/',
						];	
			$rep = [
						'<iframe width="$1" height="$2" src="//www.youtube.com/embed/$3?$4" frameborder="0"></iframe>',
						'<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">',
						'<link rel="stylesheet"href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',
						'<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">',
						'<i class="fa fa-$1" style="font-size:$2px;"></i>',
						'<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=$1">',
						'<iframe width="$2" height="$3" src="https://xatradio.com/utilbox.php?n=$4&t=$1" frameborder="0">Your browser does not support iframe!</iframe>',
						'<embed src="http://xatradio.com/player.swf" height="$1" width="$2" flashvars="skin=http://xatradio.com/gen/$6.swf&title=RadioPlayer&type=sound&file=http://$3:$4/$5&duration=99999&id=scplayer&autostart=true" />',
						'<embed width="$1" height="$2" src="http://xatradio.com/player/$3.swf" wmode="transparent">',
						'<iframe scrolling="no" frameborder="0" width="$1" height="$2" src="//radio.'.DOMAIN.'/player/$3.html"></iframe>',
						'<audio controls="" autoplay="autoplay"><source src="//xatradio.com/html5.php?ip=$1&amp;port=$2&amp;extra=$3" type="audio/mp3"></audio>',
						'<iframe src="https://'.DOMAIN.'/embed/chat.php#id=$3&gn=$4" width="$1" height="$2" frameborder="0" scrolling="no"></iframe>',
						'<iframe src="https://open.spotify.com/embed/$1/$2" width="$3" height="$4" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
						];
				$result = preg_replace($pattern, $rep, $input);
			return $result;
		}