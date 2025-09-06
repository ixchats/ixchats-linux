<?php
namespace Functions\WebGear\User;

use Vendor\Header;
use Vendor\View;
use Classes\Chat;
use Classes\User;
use Vendor\Validator;
use Classes\Core;

class EditProfile2 {
	protected $chat;
	protected $user;
	protected $core;

	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->core = new Core();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		
		$email 	    = (string) \Server::post('email');
		$password   = (string) \Server::post('password');
		$name       = (string) \Server::post('name');
		$Token      = (string) \Server::post('Token');
		$Back2      = (string) \Server::post('Back2');
		$Back3      = (string) \Server::post('Back3');
		$aboutnew   = (string) $_POST['aboutnew'];
		$medianew   = (string) $_POST['medianew'];
		$avatar2    = (string) \Server::post('avatar2');
		$social     = (string) \Server::post('social');
		$custom     = (string) \Server::post('custom');
		$txtcolor   = (string) \Server::post('txtcolor');
		$xatframe   = (string) \Server::post('xatframe');
		$SubmitPass = (bool)   \Server::post('SubmitPass');
		$submit1    = (bool)   \Server::post('submit1');
		
		$message =  ['Err' => ['editprofile2' => 'zz']];
					
		while(1) {
			switch (true) {
				case $SubmitPass:
					if (!$email || !Validator::isAlphanumeric($email)) { 
						$message['Err']['editprofile2'] = \Server::PrintResult('buy','notfound');  
						break; 	 	 		 
					}
					if (!$password) { 
						$message['Err']['editprofile2'] = \Server::PrintResult('buy','wrongpassword');; 
						break; 	 	 		 
					} 
					
					$user = $this->user->getUserByUsername($email);
					
					if (!$user) {
						$message['Err']['editprofile2'] = \Server::PrintResult('buy','notfound');  
						break;
					}

					if (!$this->core->validate($password, $user->password)) {
						$message['Err']['editprofile2'] = \Server::PrintResult('buy','relogin');  
						break;
					}
					
					$message['Err'] = [
						'Back2' => $user->back2,
						'Back3' => $user->back3,
						'Token' => $user->loginKey,
						'aboutnew' => \Server::DecryptData($user->aboutnew),
						'avatar2' => $user->avatar2,
						'id' => $user->id,
						'name' => $user->username,	
						'medianew' => \Server::DecryptData($user->medianew),
						'social' => $user->social,
						'txtcolor' => $user->txtcolor,
						'custom' => $user->custom,
						'xatframe' => $user->xatframe
					];
					
					if ($this->user->hasPower2(349, $user->id)) {
						$message['Err']['hasme'] = true;
					}
					
				break;	
				case $submit1:					
					if (!$name || !Validator::isAlphanumeric($name)) { 
						$message['Err']['editprofile2'] = \Server::PrintResult('buy','notfound');  
						break; 	 	 		 
					}
					
					$user = $this->user->getUserByUsername($name);

					if ($Token != $user->loginKey) { 
						$message['Err']['editprofile2'] = \Server::PrintResult('buy','wrongpassword');; 
						break; 	 	 		 
					} 
					
					$this->user->updateData('users', [
						'back2' => $Back2,
						'back3' => $Back3,
						'aboutnew' => \Server::EncryptData($aboutnew),
						'avatar2' => $avatar2,
						'medianew' => \Server::EncryptData($medianew),
						'social' => $social,
						'txtcolor' => $txtcolor,
						'custom' => $custom,
						'xatframe' => $xatframe
					], ['id' => $user->id]);
					
					$message['Err']['editprofile2'] = 'SaveOK';
				break;
		}
		break;
		}
		echo json_encode($message);
	}
}