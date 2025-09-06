<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Vendor\Database;
use Vendor\Validator;
use Classes\User;
use Classes\Core;

class GetPowers2 {
	protected $sql;
	protected $user;
	protected $core;
	
	public function __construct() {
		$this->sql  = new Database();
		$this->user = new User();
		$this->core = new Core();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$agree      = (string) \Server::post('agree');
		$youremail  = (string) \Server::post('YourEmail');
		$password   = (string) \Server::post('password');
		$update     = (bool)   \Server::post('update');
		
		$selected   = [];
		$userpowers = [];
		$addpowers  = [];
		$xats       = 0;
		$days       = 0;
		$stop       = 0;
		$powers     = [];
		$Err        = ['Err' => []];
			
		while(1) {
			
			if ($update) { break; }
			
			$Err['remaining'] = [['id' => 1, 'remaining' => '0']];
				
			if (!$agree || ($agree && $agree !== 'ON')) {
				$Err['Err']['agreeterms'] = \Server::PrintResult('buy','terms');
				$stop = 1; 	 	 		 
			}
			if (!$youremail || !Validator::isAlphanumeric($youremail)) { 
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound');  
				$stop = 1; 	 	 		 
			}
			if (!$password) { 
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword');
				$stop = 1; 	 	 		 
			} 
			
			if ($stop == 1) { break; } 
			
			$query = $this->sql->fetch_array('select * from powers where cost >= 1  and everypower = 1  and name != \'\' and subid < 2147483647 order by id desc;'); 
			foreach ($query as $p) { 
				$powers[$p['id']] = $p; 
			}
			
			foreach ($powers as $i) { 
				if (isset($_POST["pnum{$i['id']}"]) && is_numeric($_POST["pnum{$i['id']}"])) { 
					$Err['remaining'][] = ['id' => (int) $i['id'], 'remaining' => '0']; 
				}
				if (isset($_POST["pnum{$i['id']}"]) && $_POST["pnum{$i['id']}"] > 0) { 
					$quantity = $_POST["pnum{$i['id']}"]; 
					array_push($selected, $i['id']); 
					$addpowers[$i['id']] = $quantity; 

					if ($i['currency'] == 0) { 
						if ($quantity > 1) { 
							$xats += ($i['cost'] * $quantity); 
						} else { 
							$xats += $i['cost']; 
						} 
					} else { 
						if ($quantity > 1) { 
							$days += ($i['cost'] * $quantity); 
						} else { 
							$days += $i['cost']; 
						} 
					} 
				} 
			} 
			if (!$this->user->isAuth()) {
				$Err['Err']['buypowers'] = \Server::PrintResult('buy','relogin');  
				break;
			}
			$user = $this->user->getUserByUsername($youremail);
			if (!$user) {
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound');  
				$stop = 1;
			}
			if (!$this->user->verifyPass($password)) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword');  
				$stop = 1;	
			}
			
			if ($stop == 1) { break; } 

			if ($this->user->get()->username !== $user->username) {
				$Err['Err']['buypowers'] = \Server::PrintResult('buy','relogin');  
				break;
			}
			if ($user->is_held > time()) {
				$Err['Err']['buypowers'] = \Server::PrintResult('buy','held');  
				break;
			}
			if ($user->reserve < $xats) {
				$Err['Err']['buypowers'] = 'xats reserve limit exceeded.';  
				break;
			}
			if ($user->xats < $xats) {
				$Err['Err']['buypowers'] = \Server::PrintResult('buy','noxats');  
				break;
			}
			if ($days > $this->user->getDays($user->days)) {
				$Err['Err']['buypowers'] = \Server::PrintResult('buy','nodays');  
				break;
			}
			$stop = 0; 
			foreach ($addpowers as $n => $q) { 
				if (isset($powers[$n])) { 
					if (($powers[$n]['limited'] == 1 && $q > $powers[$n]['amount'])||($powers[$n]['limited'] == 0 && $powers[$n]['is_release'] == 0 && $q > $powers[$n]['amount'])) { 
						$Err['Err']['buypowers'] = $powers[$n]['name'].':'.\Server::PrintResult('buy','allgone');
						$stop = 1;
						break; 
					} else if ($q < 0) { 
						$Err['Err']['buypowers'] = $powers[$n]['name'].':'.\Server::PrintResult('buy','allgone');
						$stop = 1;
						break; 
					} 
					if ($q > $powers[$n]['maxper'] && $powers[$n]['maxper'] != 0 && ($powers[$n]['is_release'] == 0 || $powers[$n]['limited'] == 1)) { 
						$Err['Err']['buypowers'] = '<img width=30 height=30 src=/images/smw/'.$powers[$n]['name'].'.png>('.$powers[$n]['name'].')'.$powers[$n]['name'].': '.\Server::PrintResult('buy','maxbuy') . $powers[$n]['maxper'];
						$stop = 1;
						break; 
					} 
					if ((time() < $user->STime && $powers[$n]['limited'] == 1) ||(time() < $user->STime && $powers[$n]['limited'] == 0 && $powers[$n]['is_release'] == 0)) { 
						$Err['Err']['buypowers'] = \Server::PrintResult('buy','notyet').'(3)';
						$stop = 1;
						break;
					} 
				} 
			}
			unset($n, $q); 
			if ($stop == 1) { break; } 
			
			$userpowers = $this->core->DecodePowers($user->powers, $user->dO);
	
			foreach ($addpowers as $n => $q) { 
				if(isset($powers[$n])) { 
					if(($powers[$n]['limited'] == 1) || ($powers[$n]['limited'] == 0 && $powers[$n]['is_release'] == 0)) { 
						if($q <= $powers[$n]['amount']) { 
							$this->user->updateData('powers',['amount' => $powers[$n]['amount'] - $q],['id' => $n]);
						} 
					} 

					if (array_key_exists($n, $userpowers)) {
						$userpowers[$n] += $q;				
					} else {				
						$userpowers[$n] = $q;
					}
				} 
			}

			list($upowers, $dO) = $this->core->EncodePowers($userpowers);
			
			if (empty($selected)) { 
				$Err['Err']['buypowers'] = \Server::PrintResult('buy','nothing'); 
				break; 
			} 
			if ($xats > 0 || $days > 0) {
				$reserve = floor($xats + ($days * 13));
				$uxats   = ($user->xats - $xats);
				$days    = $this->user->getDays($user->days) - $days;
				$u1d     = $this->user->makeDays($days);
				$utime   = floor(time() + 240); 
				
				$this->user->updateData('users',['xats' => $uxats, 'reserve' => $user->reserve - $reserve, 'days' => $u1d, 'powers' => $upowers, 'dO' => $dO, 'STime' => $utime],['id' => $user->id]);
				$Err['Err']['buypowers'] = \Server::PrintResult('buy','completeta'); 
				$Err['Err']['ReLogin']   = (int) 1; 
			}
			break;
		}
		return View::json($Err);
	}
}