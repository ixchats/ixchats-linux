<?php
namespace Functions\Panel;

use Vendor\Curl;
use Vendor\View;
use Vendor\Database;
use Classes\User;


class LastPower {
	protected $sql;
	protected $user;
	private $url = "http://xatech.com/";
	
	public function __construct() {
		$this->sql = new Database();
		$this->user = new User();
	}
	
	public function index() {
		
		if (!$this->user->isAuth() || $this->user->get()->panel == 0) {
			return \Server::redirect('/login');
		}	
		
		$pow2     = json_decode(Curl::getHttps("{$this->url}/web_gear/chat/pow2.php"), true);
		$powers   = json_decode(Curl::getHttps("{$this->url}/json/powers.php"), true);
		$select   = (string) \Server::post('select_power');
		$sticker  = (string) \Server::post('sticker');
		$download = (int) 	 \Server::post('download_power');
		$update   = (int) 	 \Server::post('update_dbpower');
		$id		  = (($select && $download) || $update) ? $select : $pow2[0][1]['id'];
		$Power    = ['name' => '', 'desc' => '', 'short' => '', 'smiles' => [], 'hugs' => [], 'backs' => [], 'pawns' => [], 'pawns2' => [], 'require' => [], 'type' => '', 'cost' => 0, 'emote' => '', 'sticker' => 0];
		$message  = ['success' => null, 'failed' => null, 'updated' => null];
		
		if (!isset($pow2[10][1][$id])) {
			$id 		     = count(array_keys($pow2[4][1], $id + 1)) > 0 ? $id : $id;
			$Power['name']   = array_search($id, $pow2[6][1]);
			$Power['smiles'] = array_merge(array($Power['name']), array_keys($pow2[4][1], $id));
			unset($Power['smiles'][0]);
			$Power['short']  = isset($powers[$id]['d1']) ? $powers[$id]['d1'] : '';
			$Power['desc']   = isset($powers[$id]['d2']) ? $powers[$id]['d2'] : '';
			$Power['cost'] 	 = isset($powers[$id]['x']) ? $powers[$id]['x'].' xats' : (isset($powers[$id]['d']) ? $powers[$id]['d'].' days' : 0) ;
			foreach($pow2[3][1] as $name => $hid) if ($hid % 10000 == $id) $Power['hugs'][] = $name;
			foreach($pow2[7][1] as $pawn) if ($pawn[0] == $id) $Power['pawns'][] = $pawn[1]; 
			foreach($pow2[7][1] as $pawn => $u) if ($u[0] == $id && $pawn != 'L') $Power['pawns2'][] = $pawn.':'.$u[1];
			$Power['sticker'] = (array_keys(explode(',', $pow2[12][1]), $id)) ? 1 : 0; 		
		} else {
			$require 	     = explode(',', $pow2[10][1][$id]['n']);
			$name    	     = explode(',', $pow2[10][1][$id]['s']);
			$pawn 	 	     = explode(',', $pow2[10][1][$id]['p']);
			$Power['name']   = $name[0];
			$Power['smiles'] = $name;
			unset($Power['smiles'][0]);
			$Power['short']  = ucfirst($Power['name']).'- themed pawns';
			$Power['desc']   = ucfirst($Power['name']).' is a set of powers that gives you the ability to use old themed pawns. $WIKI';
			foreach ($pawn as $p) $Power['pawns'][] = 'p1'.$p; 
			foreach ($require as $n) { $Power['require'][] = $powers[$n]['s']; $Power['cost'] += (isset($powers[$n]['x']) ? $powers[$n]['x'] : $powers[$n]['d'] * 13); }
		}
		foreach ($pow2[13][1] as $i => $u) { 
			$tpower = explode(',', $u); 
			if (array_keys($tpower, $id)) { 
				$Power['type'] = $i; 
			} 
		}
		foreach ($pow2[1][1] as $b => $u) foreach($Power['smiles'] as $m) if ($u == $m) $Power['backs'][] = $u;
			
			if ($download) {
				$swfs =  array_merge(array($Power['name']), $Power['smiles'], $Power['pawns']);
				$this->run($Power['hugs'] , 'hug', 'swf');
				$this->run($swfs , 'sm2', 'swf');
				$this->run([$Power['name']] , 'smw', 'png');
				if ($Power['sticker'] == 1 && $sticker) {
					$fsticker = [];
					$stickers = explode(',', $sticker);
					foreach ($stickers as $stick) $fsticker[] = $Power['name'] . '_' . $stick;
					$this->run($fsticker , 'sticker', 'js');					
				}
			}
			
			if ($update) {
				$check = $this->sql->fetch_array('select * from powers where id = '.$id.' limit 1');
				$calc  = $this->getPcalc($id);
				if (empty($check)) {
				$this->user->InsertData('powers', 
					[
						'id'   		  => $id,
						'name' 		  => $Power['name'],
						'subid' 	  => $calc['subid'],
						'p' 		  => $calc['section'],
						'shortabout'  => $Power['short'],
						'description' => $Power['desc'],
						'topsh' 	  => implode(',', $Power['smiles']),
						'cost' 		  => intval($Power['cost']),
						'pawns' 	  => isset($Power['pawns2']) ? implode(',', $Power['pawns2']) : '',
						'backs' 	  => implode(',', $Power['backs']),
						'hugs' 	   	  => implode(',', $Power['hugs']), 
						'new' 		  => 1,
						'limited' 	  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x2000 ? 1 : 0,
						'allp' 		  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x401 ? 1 : 0,
						'groups' 	  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x800 ? 1 : 0,
						'epic' 		  => isset($powers[$id]['f']) && $powers[$id]['f'] & 8 ? 1 : 0,
						'game' 		  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x80 ? 1 : 0,
						'everypower'  => 0,
						'currency'    => (strpos($Power['cost'], 'xats') == true ? 0 : 1),
						'maxper' 	  => 0,
						'is_release'  => 0,
						'super' 	  => isset($pow2[10][1][$id]['p']) ? $pow2[10][1][$id]['p'] : '',
						'emote' 	  => isset($pow2[11][1][$id]) ? $pow2[11][1][$id]['p'] : '',
						'requires' 	  => isset($Power['require']) ? implode(',', $Power['require']) : '',						
						'Type'  	  => $Power['type'],
						'sticker'  	  => $Power['sticker']
															
					]);
					$this->user->updateData('prelease', ['power' => $Power['name']], ['id' => 1]);
					$this->user->updateData('powers', ['new' => 0], ['id' => $id - 2]);
			} else {
				
				$this->user->updateData('powers', 
					[
						'shortabout'  => $Power['short'],
						'description' => $Power['desc'],
						'topsh' 	  => implode(',', $Power['smiles']),
						'cost' 		  => intval($Power['cost']),
						'pawns' 	  => isset($Power['pawns2']) ? implode(',', $Power['pawns2']) : $check[0]['pawns'],
						'backs' 	  => implode(',', $Power['backs']),
						'hugs' 	   	  => implode(',', $Power['hugs']), 
						'limited' 	  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x2000 ? 1 : 0,
						'allp' 		  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x401 ? 1 : 0,
						'groups' 	  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x800 ? 1 : 0,
						'epic' 		  => isset($powers[$id]['f']) && $powers[$id]['f'] & 8 ? 1 : 0,
						'game' 		  => isset($powers[$id]['f']) && $powers[$id]['f'] & 0x80 ? 1 : 0,
						'everypower'  => !$pow2[10][1][$id] ? 1 : 0,
						'currency'    => (strpos($Power['cost'], 'xats') == true ? 0 : 1),
						'maxper' 	  => 0,
						'is_release'  => 1,
						'super' 	  => isset($pow2[10][1][$id]['p']) ? $pow2[10][1][$id]['p'] : '',
						'emote' 	  => isset($pow2[11][1][$id]) ? $pow2[11][1][$id]['p'] : '',
						'requires' 	  => isset($Power['require']) ? implode(',', $Power['require']) : '',
						'Type'  	  => $Power['type'],
						'sticker'  	  => $Power['sticker'],
						'name' 		  => $Power['name']
					
					], 
					[
						'id' => $id
					]);		
			}
			$message['updated'] = $Power['name'] . 'was updated';
		}
		$getPage  = View::get('panel/updatepower', ['id' => $id, 'smw' => $Power['name'], 'smiles' => $Power['smiles'], 'pawns' => $Power['pawns'], 'shortabout' => $Power['short'], 'cost' => $Power['cost'], 'desc' => $Power['desc'], 'require' => (isset($Power['require']) ? $Power['require'] : ''), 'pow2' => $pow2, 'select' => $select, 'sticker' => $sticker, 'is_sticker' => $Power['sticker'], 'message' => $message]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('panel', 'nav'), 'foot' => \Server::loadFotter('panel', 'foot'), 'user' => $this->user, 'title' => XAT_NAME . ' power udpater' , 'xt' => ['main'], 'description' => DOMAIN . ' update power'] );	
	}
	
	private function getPcalc($id) {
        list($subid, $section) = [pow(2, $id % 32), $id >> 5];
        return ['subid' => $subid, 'section' => $section];
    }
	
	private function run(array $files, string $directory, string $type) {
		foreach($files as $file) {
			$load = $this->getFiles('images/' . $directory . '/' . $file . '.' . $type);
			if (200 === $load[0]) { //status OK
				$code = $load[1];
				$name = basename($file);
				$this->write("images/" . $directory . "/" . $file . "." . $type, $code);
				$message['success'][] = $file;
			} else { //failed
				$message['failed'][] = $file;
			}	
		}
	}
	
	private function write(string $file, string $text, $append = false) {
		$directory = dirname($file);
		if (!is_dir($directory)) {
			mkdir($directory, 0777, true); //permission 777 & recursive
		}
		if ($append) {
			file_put_contents($file, $text, FILE_APPEND);
		} else {
			file_put_contents($file, $text);
		}
	}
	
	private function getFiles(string $file): array {
		$opts = [
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HEADER         => false,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_SSL_VERIFYPEER => false,
			CURLOPT_CONNECTTIMEOUT => 3,
			CURLOPT_TIMEOUT        => 3,
			CURLOPT_MAXREDIRS      => 2
		];
		$ch = curl_init($this->url . $file);
		curl_setopt_array($ch, $opts);
		$result = curl_exec($ch);
		$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);
		return [$status, $result];
	}
}