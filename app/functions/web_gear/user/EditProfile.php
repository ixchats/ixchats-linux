<?php
namespace Functions\WebGear\User;

use Vendor\Header;
use Vendor\View;
use Classes\Chat;
use Classes\User;
use Vendor\Validator;

class EditProfile {
	protected $chat;
	protected $user;

	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		Header::SessionCache();
		
		$getEmail 	 = (string) \Server::get('email');
		$email    	 = (string) \Server::post('email');
		$password 	 = (string) \Server::post('password');
		$Token 	 	 = (string) \Server::post('Token');
		$Advanced 	 = (string) \Server::post('Advanced');
		$back 	 	 = (string) \Server::post('back');
		$back3 	 	 = (string) \Server::post('back3');
		$Whiz0 	 	 = (string) \Server::post('Whiz0');
		$Whiz1 	 	 = (string) \Server::post('Whiz1');
		$media0 	 = (string) \Server::post('media0', false);
		$media1 	 = (string) \Server::post('media1', false);
		$OutCol  	 = (string) \Server::post('OutCol');
		$OutWidth  	 = (int) \Server::post('OutWidth');
		$SubmitPass  = (int) \Server::post('SubmitPass');
		$submit1  	 = (int) \Server::post('submit1');
		$ChangeBackground2 = (int) \Server::post('ChangeBackground2');
		$ChangeBackground3 = (int) \Server::post('ChangeBackground3');
		$postEmail   = $email ? $email : $getEmail;
		$pass        = [$SubmitPass, $submit1, $ChangeBackground2, $ChangeBackground3];
		$message  	 = ['error' => null, 'success' => null, 'me' => null];	
		$AuthProfile = false;
		$user        = '';
			
		while(1) {
			switch ($pass) {
				case $ChangeBackground2 && $ChangeBackground2 == 1:
				case $ChangeBackground3 && $ChangeBackground3 == 1:
				case $SubmitPass && $SubmitPass == 1:
				case $submit1 && $submit1 == 1:
					if (!$email || !Validator::isAlphanumeric($email)) { 
						$message['error'] = \Server::PrintResult('buy','notfound');  
						break; 	 	 		 
					}
					if (!$password) { 
						$message['error'] = \Server::PrintResult('buy','wrongpassword');; 
						break; 	 	 		 
					} 
					if (!$this->user->isAuth()) {
						$message['error'] = \Server::PrintResult('buy','relogin');  
						break;
					}
					$user = $this->user->getUserByUsername($email);
					if (!$user) {
						$message['error'] = \Server::PrintResult('buy','notfound');  
						break;
					}
					if (!$this->user->verifyPass($password)) {
						$message['error'] = \Server::PrintResult('buy','wrongpassword');  
						break;
					}
					if ($this->user->get()->username != $user->username) {
						$message['error'] = \Server::PrintResult('buy','relogin');  
						break;
					}
					
					$AuthProfile = true;
					
					if (!$submit1) { break;}

					if ($Advanced && $Advanced == 'ON' && !$this->user->hasPower(349)) {
						$message['me'] = 'You don\'t have the ME power'; 
					}
					
					$this->user->update(
							[
								'OutCol'  	  => $OutCol ? $OutCol : $user->OutCol,
								'OutWidth'	  => $OutWidth ? $OutWidth : $user->OutWidth,
								'background'  => $back ? \Server::EncryptData($back) : $user->background,
								'media0' 	  => $media0 ? \Server::EncryptData($this->cleanPost($media0)) : $user->media0,
								'media1' 	  => $media1 ? \Server::EncryptData($media1) : $user->media1,
								'background2' => $back3 ? \Server::EncryptData($back3) : $user->background2,
								'Whiz0'       => $Whiz0 && $Whiz0 == 'ON' ? 1 : ($user->Advanced == 1 ? $user->Whiz0 : 0),
								'Whiz1'       => $Whiz1 && $Whiz1 == 'ON' ? 1 : 0,
								'Advanced'    => $Advanced && $Advanced == 'ON' && $this->user->hasPower(349) == 'ON' ? 1 : 0
							]
						);
					$user = $this->user->get();
				break;				
			}
			break;
		}
		$getPage = View::get('web_gear/EditProfile', ['AuthProfile' => $AuthProfile, 'email' => $email, 'password' => $password, 'postEmail' => $postEmail, 'user' => $user, 'message' => $message]);
		return View::render('layout/main', ['page' => $getPage, 'user' => $this->user, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'title' => 'Edit your profile', 'xt' => ['edit', 'buy', 'chat'], 'description' => 'Edit your profile']);
	}
	private function cleanPost(string $s): string {
		preg_match('=<a.*?<img=is', $s, $m);
		foreach ($m as $v) {
			if(!preg_match('=</a=is', $v) || preg_match('=</a.*[\'"]=is', $v))
				$s = str_replace($v, ' Links cannot contain images ', $s);
		}
		$s = str_replace('\0', 'nope', $s);
		$s = str_replace('/*', 'nope', $s);
		$s = str_replace('*/', 'nope', $s);
		$s = preg_replace('/body/i', 'b0dy', $s);
		$s = preg_replace('/\\beval\\b/i', 'nope', $s);
		$s = preg_replace('/html/i', 'htmI', $s);
		$s = preg_replace('/script/i', 'nope', $s);
		$s = preg_replace('/<style/i', 'nope', $s);
		$s = preg_replace('/\\son(mouse|blur|change|click|contextmenu|copy|cut|dblclick|focus|hashchange|key|paste|reset|resize|scroll|select|submit|textinput|unload|wheel)/i', ' nope', $s);
		$s = preg_replace('=[\w:\s]*///*=i', 'http://', $s);
		$s = preg_replace('=<style />=i', 'nope', $s);
		$s = preg_replace('/(margin[\-a-z]*?\s*?:|position\s*?:|firefox-view|z-index|xatsty|display\s*?:\s*none|visibility\s*?:\s*?hidden|width\s*?:|height\s*?:|@import|transform\s*?:|transition\s*?:|filter\s*?:|opacity)/i', 'NotAllowed', $s);
		$s = str_replace('pw=', 'PW=', $s);
		$s = str_replace('xc=', 'XC=', $s);
		$s = str_replace('em=', 'EM=', $s);
		$s = str_replace('nooway', 'noway', $s);
		return $s;
	}
}