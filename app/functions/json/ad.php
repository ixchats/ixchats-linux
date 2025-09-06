<?php
namespace Functions\Json;

use Vendor\View;
use Vendor\Database;

class Ad {
	protected $sql;
	
	public function __construct() {
		$this->sql = new Database();
	}
	
	public function index() {

		$prelease = $this->sql->fetch_array('select * from `prelease` where `id`=1 limit 1;');
		$pow      = $this->sql->fetch_array('select `amount`,`maxper` from `powers` where `name`=\''.$prelease[0]['power'].'\' limit 1 ;');
		$maxper   = 'on sale NOW! Max: ' . $prelease[0]['max_per'];
		
			$powers['m1'] =  (string) $prelease[0]['time'] > time() ? $prelease[0]['m1'] : '';
			$powers['m2'] =  (string) ($pow[0]['amount'] > 0 ? ($pow[0]['maxper'] > 0 ? $maxper : $prelease[0]['m2']) : '');
			$powers['t']  =  (int) $prelease[0]['time'];
		
		$power = $prelease[0]['power'];
		if ($prelease[0]['time'] < time() && $prelease[0]['time'] != 1 && $prelease[0]['start'] != 1) { 
			$amount = $prelease[0]['pamount'];
			$max    = $prelease[0]['max_per']; 
			$this->sql->query("update `powers` set `amount`='{$amount}' where `name`='{$power}'");
			$this->sql->query("update `powers` set `maxper`='{$max}' where `name`='{$power}'");
			$this->sql->query("update `prelease` set `time`='1' where `power`='{$power}'");
			$this->sql->query("update `prelease` set `m2`='' where `power`='{$power}'");
		} elseif ($prelease[0]['time'] == 1 && $prelease[0]['start'] == 1) {
			$time = $prelease[0]['hours'];
			$end  = time() + floor($time * 3600);
			$this->sql->query("update `prelease` set `time`='{$end}' where `power`='{$power}'");
			$this->sql->query("update `prelease` set `start`=0 where `power`='{$power}'");
		}
		return View::json($powers);
	}
}
