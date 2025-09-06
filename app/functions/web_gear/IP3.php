<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Header;
use Vendor\Database;

class IP3 {
	protected $sql;
	private $epic = [95, 0, 430, 153, 35];
	
	public function __construct() {
		$this->sql = new Database();
	}
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		} 
		//else if(Header::cache(__FILE__)) {
		//	return;
		//}
		$powers   = $this->sql->fetch_array('select * from powers order by id asc');
		$release  = $this->sql->fetch_array('select * from `prelease` where `id`=1');
		$last     = $this->sql->fetch_array('select super,limited,id from `powers` where `name`="'. $release[0]['power'] .'" limit 1');
		$limited  = $last[0]['limited'] == 0 ? ($last[0]['super'] != '' ? '[COLLECTION]' : '') : '[LIMITED]';
		$Types    = ['epic'		=> ['epic'],
					 'function' => ['blasts', 'gamebans', 'games', 'hugs', 'jinx', 'function'],
					 'smiley'   => ['animal', 'colors', 'fx', 'kao', 'yellow', 'smiley'],
					 'other'    => ['santa', 'back', 'event', 'halloween', 'holiday', 'valentines', 'other'],
					 'collection' => ['supers']
					];
		
		$json = ['S0'    => [0,['s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN,'s.'.DOMAIN]],
				 'order' => [['E0', 60], ['E1', 90],["E0",180],["E1",240],["S0",240]],
				 'xFlag' => 2,
				 'time'  => 1628180041,
				 'T0'    => [1,['']],
				 'E0'    => [1,['fwdelb01-1365137239.us-east-1.elb.amazonaws.com']],
				 'E1'    => [1,['fwdelb01-1365137239.us-east-1.elb.amazonaws.com:80:1']],
				 'k1n'   => 2000000000,
				 'k1d'   => 14,
				 'pow2'  => ['last'    => [],
							 'backs'   => [],
							 'actions' => [],
							 'hugs'    => [],
							 'topsh'   => [],
							 'isgrp'   => [],
							 'pssa'    => [],
							 'pawns'   => [],
							 'nonmob'  => [],
							 'pawns2'  => [],
							 'SuperP'  => [],
							 'EmoteP'  => [],
							 'Sticker' => [],
							 'Types'   => []
							]							
				];				
		$json['pow2']['last']    = [
									'id'   => (string) $last[0]['id'], 
									'text' => (string) $limited
								   ];
		$json['pow2']['actions'] = [
									22 => 'tipsy,merry,drunk',
									23 => 'party,2013,year,newyear'
								   ];
		$json['pow2']['pawns']   = ['time' =>(int) time()];
		$json['pow2']['nonmob']  = [
									'0'  => 256, 
									'2'  => 1431655744, 
									'3'  => 1347769685, 
									'4'  => 290460132, 
									'5'  => 269549573, 
									'6'  => 1476411653, 
									'7'  => 885674017, 
									'8'  => 583016485, 
									'9'  => 1094715648, 
									'10' => 8192, 
									'1'  => 402653200, 
									'13' => 128, 
									'12' => 69273, 
									'11' => 2021834752,
								   ];
		$json['pow2']['pawns2'] = ['999' => [0 => 31, 1 => 'p1123']];
		$i = 86;		    
		foreach ($powers as $power) {
		if (!is_numeric(strpos($power['name'], '(Undefined)')) && $power['backs'] != '') {				
				foreach (explode(',', $power['backs']) as $back) {
					$i++;
					$json['pow2']['backs']['b'.$i] = (string) $back;
				}
			}
		}
		
		foreach ($powers as $power) {
			$pv[$power['name']] = ['id' => $power['id'], 'name' => $power['name']];
		}
		
		foreach ($powers as $power) {
			
			if (!is_numeric(strpos($power['name'], '(Undefined)')) && $power['hugs'] != '') {
				$i = substr($power['name'], -4) != 'jinx' ? -10 : 90;
				foreach (explode(',', $power['hugs']) as $h) {
					$i = $i + 10;
					$json['pow2']['hugs'][$h] = (int)($i == 0) ? $power['id'] : $i . $power['id'];
				}
			}
			if ((!is_numeric(strpos($power['name'], '(Undefined)')) && $power['topsh'] != '' && $power['super'] == '' && $power['id'] > 201) || $power['id'] == 35) {
				foreach (explode(',', $power['topsh']) as $top) {
					$json['pow2']['topsh'][$top] = (int) $power['id'];
				}
			}			
			if (!is_numeric(strpos($power['name'], '(Undefined)')) && $power['groups'] != 0 && $power['id'] > 250) {
				$json['pow2']['isgrp'][$power['id']] = (int) 1;
			}
			if (($power['super'] == '' && !is_numeric($power['name']) && $power['id'] > 201) || $power['id'] == 35) {
				$json['pow2']['pssa'][$power['name']] = (int) $power['id'];
			}
			if (!is_numeric(strpos($power['name'], '(Undefined)')) && $power['pawns'] != '' && $power['new'] > 0) {
				foreach (explode(',', $power['pawns']) as $first) {
					$data = explode(':', $first);
					$json['pow2']['pawns'][$data[0]] = [(int) $power['id'],(string) isset($data[1]) ? $data[1] : ''];
				}
			}

			if ($power['sticker'] == 1) {
				if ($power['sticker'] == 1) {
					$sticker[] = $power['id'];
					$json['pow2']['Sticker'] = implode(',',$sticker);
				}
			}
			if ($power['emote'] != '') {
				$emote = ['s' => substr($power['name'], 1), 'p' => $power['emote']];
				$json['pow2']['EmoteP'][$power['id']] = $emote;
			}
			
		}
		
		foreach ($Types as $t => $u) {
			foreach ($u as $i) {
				$tpower[$i] = [0, 1, $t];
				if ($i == 'epic') foreach($this->epic as $e) $tpower[$i][] = $e;
				foreach ($powers as $p) if ($p['Type'] == $i && !in_array($p['id'], $this->epic)) $tpower[$i][] = $p['id'];
				$json['pow2']['Types'][$i] = implode(',', $tpower[$i]); 
			}
		}
		
		foreach ($powers as $power) {
			if ($power['super'] != '') {
				$collect = explode(',', $power['requires']);
				for ($i = 0; $i < count($collect); $i++) {
					$req[$power['name']][] = $pv[$collect[$i]]['id'];
				}
				
				$spsmilies[$power['name']][] = $power['name'];
				if(!empty($power['topsh'])){$spsmilies[$power['name']][] = $power['topsh'];}
				$sp = ['s' => implode(',', $spsmilies[$power['name']]), 
					   'n' => implode(',', $req[$power['name']]),
					   'p' => $power['super']
					  ];
				$json['pow2']['SuperP'][$power['id']] = $sp;
				
				array_unshift($req[$power['name']], 0, 0, 'collection');
				$json['pow2']['Types'][$power['name']] = implode(',', $req[$power['name']]);	
			}
		}
		return View::json($json);
	}
}