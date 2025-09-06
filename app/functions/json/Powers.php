<?php
namespace Functions\Json;

use Vendor\View;
use Vendor\Database;

class Powers {
	protected $sql;
	
	public function __construct() {
		$this->sql = new Database();
	}
	
	public function index() {
		$getAll = $this->sql->fetch_array('select * from powers where everypower = 1 order by id desc');
		$MaxPwr = $getAll[0]['id'];
		$powers = [];
		foreach ($getAll as $p) {
			$powers[$p['id']]['s']  = $p['name'];
			$powers[$p['id']]['d1'] = $p['shortabout'];
			$powers[$p['id']]['d2'] = $p['description'];
			$powers[$p['id']][ $p['currency'] == '0' ? 'x' : 'd' ] = (string) $p['cost'];
			
			if ($p['limited'] == '1')
				$powers[$p['id']]['r'] = '1';
			if ($p['is_release'] == 0)
				$powers[$p['id']]['r'] = '1';
			
			if (($p['limited'] == 1 && $p['amount'] > 0) || ($p['is_release'] == 0 && $p['limited'] == 0 && $p['amount'] > 0))
				$powers[$p['id']]['r'] += $p['amount'];
			
			$powers[$p['id']]['f']  = 2;
			
			if ($p['allp'] > 0)  {
				$powers[$p['id']]['f'] |= 0x401;
			}
			if ($p['epic'] > 0)  {
				$powers[$p['id']]['f'] |= 8;
			}
			if ($p['game'] > 0)  {
				$powers[$p['id']]['f'] |= 0x80;
			}
			if ($p['groups'] > 0)  {
				$powers[$p['id']]['f'] |= 0x800;
			}
			if ($p['id'] > ($MaxPwr - 5))  {
				$powers[$p['id']]['f'] |= 0x1000;
			}
			if ($p['limited'] > 0)  {
				$powers[$p['id']]['f'] |= 0x2000;
			}
			$powers[$p['id']] = array_map('strval', $powers[$p['id']]); // sanatize
		}
		return View::json($powers);
	}
}