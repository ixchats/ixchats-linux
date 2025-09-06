<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Header;
use Vendor\Database;

class Pow2 {
	protected $sql;
	private $epic = [95, 0, 430, 153, 35];
	
	public function __construct() {
		$this->sql = new Database();
	}
	public function index() {
		//if (\Server::isRealUser() == false) {
			//return http_response_code(403);
		//} else
		//if(Header::cache(__FILE__)) {
		//	return;
		//}
		$powers   = $this->sql->fetch_array('select * from powers order by id asc');
		$release  = $this->sql->fetch_array('select * from `prelease` where `id`=1');
		$last     = $this->sql->fetch_array('select super,limited,id from `powers` where `name`="'. $release[0]['power'] .'" limit 1');
		$limited  = $last[0]['limited'] == 0 ? ($last[0]['super'] != '' ? '[COLLECTION]' : '') : '[LIMITED]';
		$Types    = ['epic'		=> ['epic'],
					 'function' => ['name', 'blasts', 'gamebans', 'games', 'hugs', 'jinx', 'stickers', 'function'],
					 'smiley'   => ['animal', 'colors', 'fx', 'kao', 'yellow', 'smiley'],
					 'other'    => ['santa', 'back', 'event', 'halloween', 'holiday', 'valentines', 'other']
					];
		
		$json = [
					 0  => [0 => 'last', 1 => []],
					 1  => [0 => 'backs', 1 => []],
					 2  => [0 => 'actions', 1 => []],
					 3  => [0 => 'hugs', 1 => []],
					 4  => [0 => 'topsh', 1 => []],
					 5  => [0 => 'isgrp', 1 => []],
					 6  => [0 => 'pssa', 1 => []],
					 7  => [0 => 'pawns', 1 => []],
					 8  => [0 => 'nonmob', 1 => []],
					 9  => [0 => 'pawns2', 1 => []],
					 10 => [0 => 'SuperP', 1 => []],
					 11 => [0 => 'EmoteP', 1 => []],
					 12 => [0 => 'Sticker', 1 => []],
					 13 => [0 => 'Types', 1 => []],
					 14 => [0 => 'pawnids', 1 => []],
				];
				
		$json[0][1] = ['id' => (string) $last[0]['id'], 'text' => (string) $limited];
		$json[2][1] = [
						22 => 'tipsy,merry,drunk', 
						23 => 'party,2013,year,newyear'
					  ];
		$json[7][1] = ['time' => (int) 1602459133];
		$json[8][1] = [
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
		$json[9][1] = ['999' => [0 => 31, 1 => 'p1123']];
		$i = 86;		    
		foreach($powers as $power) {
		if(!is_numeric(strpos($power['name'], '(Undefined)')) && $power['backs'] != '') {				
				foreach(explode(',', $power['backs']) as $back) {
					$i++;
					$json[1][1]['b'.$i] = (string) $back;
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
					$json[3][1][$h] = (int)($i == 0) ? $power['id'] : $i . $power['id'];
				}
			}
			if ((!is_numeric(strpos($power['name'], '(Undefined)')) && $power['topsh'] != '' && $power['super'] == '' && $power['id'] > 201) || $power['id'] == 35) {
				foreach (explode(',', $power['topsh']) as $top) {
					$json[4][1][$top] = (int) $power['id'];
				}
			}			
			if (!is_numeric(strpos($power['name'], '(Undefined)')) && $power['groups'] != 0 && $power['id'] > 250) {
				$json[5][1][$power['id']] = (int) 1;
			}
			if (($power['super'] == '' && !is_numeric($power['name']) && $power['id'] > 201) || $power['id'] == 35) {
				$json[6][1][$power['name']] = (int) $power['id'];
			}
			if (!is_numeric(strpos($power['name'], '(Undefined)')) && $power['pawns'] != '' && $power['new'] > 0) {
				foreach (explode(',', $power['pawns']) as $first) {
					$data = explode(':', $first);
					$json[7][1][$data[0]] = [(int) $power['id'],(string) isset($data[1]) ? $data[1] : ''];
				}
			}
			if ($power['sticker'] == 1) {
				if ($power['sticker'] == 1) {
					$sticker[] = $power['id'];
					$json[12][1] = implode(',', $sticker);
				}
			}
			if($power['emote'] != '') {
				$emote = ['s' => substr($power['name'], 1), 'p' => $power['emote']];
				$json[11][1][$power['id']] = $emote;
			}
			if ($power['pawn'] == 1) {
					$json[14][1][] = (int) $power['id'];
			}		
		}

		foreach ($Types as $t => $u) {
			foreach ($u as $i) {
				$tpower[$i] = [0, 1, $t];
				if ($i == 'epic') foreach($this->epic as $e) $tpower[$i][] = $e;
				foreach ($powers as $p) if ($p['Type'] == $i && !in_array($p['id'], $this->epic)) $tpower[$i][] = $p['id'];
				$json[13][1][$i] = implode(',',$tpower[$i]); 
			}
		}
		
		foreach ($powers as $power) {
			if ($power['super'] != '') {
				$collect = explode(',', $power['requires']);
				for ($i = 0; $i < count($collect) ;$i++) {
					$req[$power['name']][] = $pv[$collect[$i]]['id'];
				}
				
				$spsmilies[$power['name']][] = $power['name'];
				
				if (!empty($power['topsh'])){$spsmilies[$power['name']][] = $power['topsh'];}
				
				$sp = ['s' => implode(',', $spsmilies[$power['name']]), 
					   'n' => implode(',', $req[$power['name']]),
					   'p' => $power['super']
					  ];
				
				$json[10][1][$power['id']] = $sp;
				
				array_unshift($req[$power['name']], 0, 0, 'collection');
				$json[13][1][$power['name']] = implode(',', $req[$power['name']]);	
			}
		}
		return View::json($json);
	}
}