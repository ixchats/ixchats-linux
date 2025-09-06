<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Classes\User;
use Vendor\Header;
use Vendor\Validator;

class GetXavi {
	protected $user;

	public function __construct() {
		$this->user = new User();
	}
	
	public function index() {
		$agree     = (string) \Server::post('agree');
		$YourEmail = (string) \Server::post('YourEmail');
		$password  = (string) \Server::post('password');
		$BuyIt     = (int) \Server::post('BuyIt');
		$items     = $this->user->getXavis();
		$e         = [];
		$selected  = [];
		$Err       = ['error' => null, 'success' => null];
		$cost      = 0;
		$ReLogin   = false;
		
		Header::xss(0);
		while(1) {
			
			if (!$BuyIt) { break; }

			if (!$agree || ($agree && $agree !== 'ON')) {
				$Err['error'] = \Server::PrintResult('buy','terms');
				break; 	 	 		 
			}
			if (!$YourEmail && !Validator::isAlphanumeric($YourEmail)) {
				$Err['error'] = \Server::PrintResult('buy','notfound');
				break;
			}
			if (!$password && !Validator::isAlphanumeric($password)) {
				$Err['error'] = \Server::PrintResult('buy','notfound');
				break;
			}
			if (!$this->user->isAuth()) {
				$Err['error'] = \Server::PrintResult('buy','relogin');  
				break;
			}
			$user = $this->user->getUserByUsername($YourEmail);
			if (!$user) {
				$Err['error'] = \Server::PrintResult('buy','wrongusername');
				break;
			}
			if (!$this->user->verifyPass($password)) {
				$Err['error'] = \Server::PrintResult('buy','wrongpassword');  
				break;
			}
			if ($this->user->get()->username != $user->username) {
				$Err['error'] = \Server::PrintResult('buy','relogin');  
				break;
			}
			
			$j = json_decode($user->xavi, true);

			$x = array();

			if (isset($j['data'])) {
				$x = $j;
			} else {
				$x['data'] = $j;
			}

			foreach ($items as $i) {
				if (isset($_POST["p_{$i['type']}_{$i['vid']}"]) && $_POST["p_{$i['type']}_{$i['vid']}"] == 'ON'){
					if (isset($x['items'][$i['type']][$i['vid']])) {
						array_push($e, $i['id']);
					} else {
						array_push($selected, $i['id']);
						$x['items'][$i['type']][$i['vid']] = 1;
						$cost += $i['cost'];
					}
				}
			}

			if (empty($selected)) {
				$Err['error'] = \Server::PrintResult('buy','nothing'); 
				break;
			}
			if ($user->is_held > time()) {
				$Err['error'] = \Server::PrintResult('buy','held');
				break; 
			} 
			if ($user->reserve < $cost) {
				$Err['error'] = 'xats reserve limit exceeded.'; 
				break; 
			} 
			if ($cost > $user->xats) {
				$Err['error'] = \Server::PrintResult('buy','nocoins');
				break;
			}			
			if ($cost > 0) {
				$this->user->updateData('users',['xavi' => json_encode($x), 'reserve' => $user->reserve - $cost, 'xats' => $user->xats - $cost],['id' => $user->id]);
			}
			$ReLogin = true;
			break;
		}
		$getPage = View::get('web_gear/GetXavi', ['items' => $items, 'e' => $e, 'ReLogin' => $ReLogin, 'YourEmail' => $YourEmail, 'password' => $password, 'Err' => $Err]);
		return View::render('layout/main', ['page' => $getPage, 'user' => $this->user, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'title' => 'Buy xavi items', 'xt' => ['buy'], 'description' => 'Buy xavi items']);
	}
}