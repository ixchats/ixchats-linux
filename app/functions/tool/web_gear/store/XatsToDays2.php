<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Vendor\Validator;
use Classes\User;
use Classes\Core;

class XatsToDays2 {
	protected $user;
	private $DayPrice = 13.5;
	private $x2d      = 423;
	
	public function __construct() {
		$this->user = new User();
		$this->core = new Core();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$NoOfXats  = (int)    \Server::post('NoOfXats');
		$YourEmail = (string) \Server::post('YourEmail');
		$password  = (string) \Server::post('password');
		$agree     = (string) \Server::post('agree');
		$Convert   = (int)    \Server::post('Convert');
		$Err       = ['Err' => null, 'NoOfXats' => null];
			
		while(1) {
			
			if (!$Convert) { break; } 
			
			if (!$agree ||($agree && $agree !== 'ON')) { 	 
				$Err['Err']['agreeterms'] = \Server::PrintResult('buy','terms');
				break; 	 	 
			}	
			if (!$NoOfXats || $NoOfXats < 100) { 	 
				$Err['Err']['Xats'] = \Server::PrintResult('buy','min100');
				break; 	 	 
			}	
			if ($NoOfXats > 2500) { 	 
				$Err['Err']['Xats'] = 'You can convert a minimum of 2500 xats';
				break; 	 	 
			}
			$Err['NoOfXats'] = 	$NoOfXats * 14;
			
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
				$Err['Err']['xats2days'] = \Server::PrintResult('buy','relogin'); 
				break; 	 	 		 
			}
			if (!$this->user->verifyPass($password)) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword'); 
				break; 	 	 		 
			}
			if ($user->is_held > time()) {
				$Err['Err']['xats2days'] = \Server::PrintResult('buy','held').'('. $this->user->getDays($user->is_held) .')'; 
				break; 	 	 		 
			} 
			if ($user->reserve < $NoOfXats) {
				$Err['Err']['xats2days'] = 'xats reserve limit exceeded.'; 
				break; 	 	 		 
			} 
			if ($NoOfXats > $user->xats) { 
				$Err['Err']['xats2days'] = \Server::PrintResult('buy','noxats'); 
				break; 	 	 		 
			} 
			if(!$this->user->hasPower($this->x2d)) {
				$Err['Err']['xats2days'] = \Server::PrintResult('buy','nox2d'); 
				break; 	 	 		 
			}
			$userpowers = $this->core->DecodePowers($user->powers, $user->dO);
			$BuyDays 	= floor($NoOfXats / $this->DayPrice);
			$Days    	= $this->user->getDays($user->days) + $BuyDays;
			$MyDays  	= $this->user->makeDays($Days);
			
			if ($userpowers[$this->x2d] > 1) {
				$userpowers[$this->x2d] -= 1;				
			} else {				
				unset($userpowers[$this->x2d]);
			}
			list($upowers, $dO) = $this->core->EncodePowers($userpowers);
			
			$this->user->updateData('users',
				[
					'days' => $MyDays, 
					'xats' => $user->xats - $NoOfXats, 
					'reserve' => $user->reserve - $NoOfXats,  
					'powers' => $upowers, 
					'dO' => $dO
				],
			['id' => $user->id]);			
			$Err['Err']['xats2days'] =  \Server::PrintResult('buy','completeta'); 
			$Err['Err']['ReLogin']   = (int) 1; 
			break;
		}
		return View::json($Err);
	}
}