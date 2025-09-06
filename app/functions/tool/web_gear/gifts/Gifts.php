<?php
namespace Functions\WebGear\Gifts;

use Vendor\View;
use Classes\Gift;

class Gifts {
	protected $gifts;
	
	public function __construct() {
		$this->gifts = new Gift();
	}
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getDel  = (int) \Server::get('del');
		$getFlag = (int) \Server::get('flags');
		$getK    = (int) \Server::get('k');
		$getId   = (string)\Server::get('id');
		$aa      = explode(',', $getId);
		$bb    	 = implode(' ', $aa);
		$search  = $getId ? $this->gifts->getGiftsById($aa[0]) : '';
		$gifts   = [];
		if (count($search) < 0) {
			return false;
		}
		$gifto = $this->gifts->getUserById($aa[0]);
		if (isset($aa[2]) && $aa[2] == $gifto->k && isset($aa[3]) && $aa[3] == $gifto->k2) {
			if (in_array($getFlag, [0, 1]) && $getK) { 
				$this->gifts->update('gifts',['f' => $getFlag],['t' => $getK , 'b' => $gifto->id]);
			}	
			if ($getK && array_key_exists('old', $_GET)) {
				$this->gifts->update('gifts',['old' => 1],['t' => $getK , 'b' => $gifto->id]);
			}
			if ($getDel) {
				$this->gifts->delete(['t' => $getDel, 'b' => $gifto->id]);
				return print 'deleted';
			}
		}
		if ($search && !$getDel) {
		    foreach ($search as $g) {
				$flag = $g['c'] == 100 ? $g['f'] - 2 : $g['f'] + 2;
				if ($g['f'] == 1 || (isset($aa[2]) && $aa[2] == $gifto->k && isset($aa[3]) && $aa[3] == $gifto->k2)) { // only person can see private msg who have gift
					$gifts[$g['t']]['id'] = $g['u'];
					$gifts[$g['t']]['n']  = $g['n'];
					$gifts[$g['t']]['g']  = $g['g'];
					$gifts[$g['t']]['m']  = htmlspecialchars_decode($g['m']);
					$gifts[$g['t']]['s']  = htmlspecialchars_decode($g['s']);
					$gifts[$g['t']]['f']  = $g['old'] == '0' ? $flag : $g['f'];
				} else {
					$gifts[$g['t']]['id'] = $g['u'];
					$gifts[$g['t']]['n']  = $g['n'];
					$gifts[$g['t']]['g']  = $g['old'] == '0' ? 'Blank' : $g['g'];
					$gifts[$g['t']]['s']  = htmlspecialchars_decode($g['s']);
					$gifts[$g['t']]['f']  = $g['old'] == '0' ? $flag : $g['f'];
				}
			}
			return View::json($gifts);
		}
	}
}