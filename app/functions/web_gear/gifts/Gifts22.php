<?php
namespace Functions\WebGear\Gifts;

use Vendor\View;
use Classes\Gift;

class Gifts22 {
	protected $gifts;
	
	public function __construct() {
		$this->gifts = new Gift();
	}
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$postDel  = (int) \Server::post('del');
		$postFlag = (int) \Server::post('flags');
		$postK    = (int) \Server::post('k');
		$postId   = (int) \Server::post('id');
		$getId    = (int) \Server::get('id');
		$postold  = (int) \Server::post('old');
		$PassHash = (string) \Server::post('PassHash');
		
		$gifts   = [];		
		
		while (1) {
			
			if ($postId) {
				
				$user = $this->gifts->getUserById($postId);
				
				if (!$user){
					break;
				}			
				
				if ($PassHash != substr(sha1($user->password), 0, 20)) {
					break;
				}

				if (in_array($postFlag, [0, 1])) { 
					$this->gifts->update('gifts',['f' => $postFlag],['t' => $postK , 'b' => $user->id]);
				}	
				if ($postK && $postold) {
					$this->gifts->update('gifts',['old' => 1],['t' => $postK , 'b' => $user->id]);
				}
				if ($postDel) {
					$this->gifts->delete(['t' => $postDel, 'b' => $user->id]);
				}
				
				$usergifts = $this->gifts->getGiftsById($user->id);
				
				if (count($usergifts) > 0) {
					foreach ($usergifts as $g) {
						$flag = $g['c'] == 100 ? $g['f'] - 2 : $g['f'] + 2;
						$gifts[$g['t']]['id'] = $g['u'];
						$gifts[$g['t']]['n']  = $g['n'];
						$gifts[$g['t']]['g']  = $g['g'];
						$gifts[$g['t']]['m']  = htmlspecialchars_decode($g['m']);
						$gifts[$g['t']]['s']  = htmlspecialchars_decode($g['s']);
						$gifts[$g['t']]['f']  = $g['old'] == '0' ? $flag : $g['f'];
					}					
				}
				break;
			}
			
			if ($getId) {
				
				$user = $this->gifts->getUserById($getId);
				
				if (!$user){
					break;
				}	
				
				$usergifts = $this->gifts->getGiftsById($user->id);
								
				if (count($usergifts) > 0) {
					foreach ($usergifts as $g) {
						$flag = $g['c'] == 100 ? $g['f'] - 2 : $g['f'] + 2;
						$gifts[$g['t']]['id'] = $g['u'];
						$gifts[$g['t']]['n']  = $g['n'];
						$gifts[$g['t']]['g']  = $g['old'] == '0' ? 'Blank' : $g['g'];
						$gifts[$g['t']]['s']  = htmlspecialchars_decode($g['s']);
						$gifts[$g['t']]['f']  = $g['old'] == '0' ? $flag : $g['f'];
					}					
				}
				
				break;
			}
			
			break;
		}
		if (count($gifts) > 0) {
			return View::json($gifts);
		}
		return View::plain('No Gifts');
	}
}
