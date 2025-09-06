<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Vendor\Validator;
use Classes\User;
use Classes\Core;

class DaysToXats2 {
	protected $user;
	private $XatsPerDay = 13.5;
	private $dx = 60;
	
	public function __construct() {
		$this->user = new User();
		$this->core = new Core();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$NoOfDays  = (int)    \Server::post('NoOfDays');
		$YourEmail = (string) \Server::post('YourEmail');
		$password  = (string) \Server::post('password');
		$agree     = (string) \Server::post('agree');
		$Convert   = (int)    \Server::post('Convert');
		$Err       = ['Err' => null, 'Xats' => null];
			
		while(1) {
			
			if (!$Convert) { break; } 
			
			if (!$agree ||($agree && $agree !== 'ON')) { 	 
				$Err['Err']['agreeterms'] = \Server::PrintResult('buy','terms');
				break; 	 	 
			}	
			if (!$NoOfDays || $NoOfDays < 10) { 	 
				$Err['Err']['NoOfDays'] = \Server::PrintResult('buy','min10');
				break; 	 	 
			}	
			if ($NoOfDays > 180) { 	 
				$Err['Err']['NoOfDays'] = 'You can convert a minimum of 180 days';
				break; 	 	 
			}
			$Err['Xats'] = 	$NoOfDays * 14;
			
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
				$Err['Err']['days2xats'] = \Server::PrintResult('buy','relogin'); 
				break; 	 	 		 
			}
			if (!$this->user->verifyPass($password)) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword'); 
				break; 	 	 		 
			}
			if ($user->is_held > time()) {
				$Err['Err']['days2xats'] = \Server::PrintResult('buy','held').'('. $this->user->getDays($user->is_held) .')'; 
				break; 	 	 		 
			} 
			if ($this->user->getDays($user->days) < $NoOfDays) {
				$Err['Err']['NoOfDays'] = \Server::PrintResult('buy','nodays'); 
				break; 	 	 		 
			} 
			if(!$this->user->hasPower($this->dx)) {
				$Err['Err']['days2xats'] = \Server::PrintResult('buy','nox2d'); 
				break; 	 	 		 
			}
			$userpowers = $this->core->DecodePowers($user->powers, $user->dO);
			$BuyXats 	= round($NoOfDays * $this->XatsPerDay);
			$Days    	= $this->user->getDays($user->days) - $NoOfDays;
			$MyDays  	= $this->user->makeDays($Days);
			
			if ($userpowers[$this->dx] > 1) {
				$userpowers[$this->dx] -= 1;				
			} else {				
				unset($userpowers[$this->dx]);
			}
			list($upowers, $dO) = $this->core->EncodePowers($userpowers);
			
			$this->user->updateData('users',
				[
					'days' 	  => $MyDays, 
					'xats'	  => $user->xats + $BuyXats, 
					'powers'  => $upowers, 
					'dO'      => $dO
				],
			['id' => $user->id]);			
			$Err['Err']['days2xats'] =  \Server::PrintResult('buy','completeta'); 
			$Err['Err']['ReLogin']   = (int) 1; 
			break;
		}
		return View::json($Err);
	}
}