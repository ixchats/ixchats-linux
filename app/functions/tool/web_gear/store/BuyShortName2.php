<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Vendor\Validator;
use Classes\User;
use Classes\Core;

class BuyShortName2 {
	protected $user;
	protected $core;
	
	public function __construct() {
		$this->user = new User();
		$this->core = new Core();
	}
	
	private function isBad(string $name) {
		$name = strtolower($name);
		foreach (NOT_ALLOW as $n) {
			if (strpos($name, $n) !== false) {
				return true;
			}
		}
		return false;
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$GroupName = (string) \Server::post('GroupName');
		$YourEmail = (string) \Server::post('YourEmail');
		$password  = (string) \Server::post('password');
		$agree     = (string) \Server::post('agree');
		$Quote     = (int) \Server::post('Quote');
		$Promote   = (int) \Server::post('Promote');
		$Xats      = (int) \Server::post('Xats');
		$Err       = ['Err' =>[], 'Xats' => null, 'wantedname' => $GroupName];
			
		while(1) {
			
			if (!$GroupName) { break; } 
			
			if (!Validator::isAlphanumeric($GroupName)) {
				$Err['Err']['wantedgroup'] = \Server::PrintResult('buy','letters');
				break; 
			}
			if (strlen($GroupName) < 4 || !ctype_alnum($GroupName)){
				$Err['Err']['wantedname'] = \Server::PrintResult('buy','short');
				break; 
			}
			if (strlen($GroupName) > 9) {
				$Err['Err']['wantedname'] = \Server::PrintResult('buy','long');
				break; 
			}
			if (is_numeric(substr($GroupName, 0, 1))) {
				$Err['Err']['wantedname'] = \Server::PrintResult('buy','firstletter');
				break; 
			}
			$CheckName = $this->user->getUserByUsername($GroupName);
			if ($CheckName){
				$Err['Err']['wantedname'] = \Server::PrintResult('buy','nametaken'); 
				break; 
			}
			$CalcPrice = $this->core->CalcXats($GroupName, SN_COTATION);
			if ($CalcPrice  < 1 || $this->isBad($GroupName)) {
				$Err['Err']['buyshortname'] = \Server::PrintResult('buy','notallowed'); 
				break; 	 	 		 
			} 
			
			$price       =  $CalcPrice;
			$Err['Xats'] =  $CalcPrice;
			
			if (!$Promote || $Promote != 1 || $Quote) { break;} 
	
			if ($price != $Xats) {
				$Err['Err']['buyshortname'] =  \Server::PrintResult('buy','costchanged'); 
				break; 	 	 		 
			}
			if (!$agree ||($agree && $agree !== 'ON')) { 	 
				$Err['Err']['agreeterms'] = \Server::PrintResult('buy','terms');
				break; 	 	 
			}	
			if (!Validator::isAlphanumeric($GroupName)) {
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound');
				break; 
			}
			if (!Validator::isAlphanumeric($password) || !$password) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword');
				break; 
			}
			$user = $this->user->getUserByUsername($YourEmail);
			if (!$user) { 
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound'); 
				break; 	 	 		 
			} 
			if (!$this->user->isAuth() || $this->user->get()->username != $user->username) {
				$Err['Err']['buyshortname'] = \Server::PrintResult('buy','relogin'); 
				break; 	 	 		 
			}
			if (!$this->user->verifyPass($password)) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword'); 
				break; 	 	 		 
			}
			if ($user->is_held > time()) {
				$Err['Err']['buyshortname'] = \Server::PrintResult('buy','held').'('. $this->user->getDays($user->is_held) .')'; 
				break; 	 	 		 
			} 
			if ($user->reserve < $price) {
				$Err['Err']['buyshortname'] = 'xats reserve limit exceeded.'; 
				break; 	 	 		 
			} 
			if ($price > $user->xats) { 
				$Err['Err']['buyshortname'] = \Server::PrintResult('buy','noxats'); 
				break; 	 	 		 
			} 	
			$this->user->updateData('users',['username' => $GroupName, 'xats' => $user->xats - $price, 'reserve' => $user->reserve - $price],['id' => $user->id]);
			$Err['Err']['buygroup'] =  \Server::PrintResult('buy','completeta'); 
			$Err['Err']['ReLogin']  = (int) 1; 
			break;
		}
		return View::json($Err);
	}
}