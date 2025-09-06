<?php
namespace Functions\WebGear\User;

use Classes\User;
use Classes\Core;
use Vendor\Header;
use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Vendor\SMTP_validateEmail;

class Register2 {
	protected $user;
	protected $chat;
	protected $core;
	protected $mail;
	protected $checkmail;
	
	public function __construct() {
		$this->user = new User();
		$this->core = new Core();
		$this->mail = new PHPMailer();
		$this->checkmail = new SMTP_validateEmail();
	}
	
	private function DoLogin(string $user = '0', string $password = '$0', int $chat = 2) {
		return "<div id=\"LoginResult\"><h3>". \Server::PrintResult('buy','pleasewait') ."..<br>&nbsp;</h3><p><large>&nbsp;</large></p></div><BR><table border=\"0\"><tr><td>\r\n<embed src=\"//".DOMAIN."/web_gear/chat/chat.swf\" quality=\"high\" width=\"440\" height=\"310\" name=\"chat\" FlashVars=\"id=".$chat."&em=".$user."&pw=".$password."\" align=\"middle\" allowtAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"//".DOMAIN."/update_flash.php\" /></td><td>&nbsp;</td><td width=\"250\">\r\n". \Server::PrintResult('login','seebox') ."\r\n</td><td>&nbsp;</td><td><img border=\"0\" src=\"//".DOMAIN."/images/FlashSettings1.gif\" /></td></tr></table><BR>";
	}

	private function isBad(string $name): bool {
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
		$agree      	= (string) \Server::post('agree');
		$youremail  	= (string) \Server::post('YourEmail');
		$NameEmail  	= (string) \Server::post('NameEmail');
		$Username 	 	= (string) \Server::post('Username');
		$password   	= (string) \Server::post('password');
		$password2   	= (string) \Server::post('password2');
		$oldpassword   	= (string) \Server::post('oldpassword');
		$Protected   	= (string) \Server::post('Protected');
		$Locked   		= (string) \Server::post('Locked');
		$PassHash   	= (string) \Server::post('PassHash');
		$DeviceId   	= (string) \Server::post('DeviceId');
		$ResetApiKey    = (string) \Server::post('ResetApiKey');
		$captcha 		= (string) \Server::post('g-recaptcha-response');
		$ac 			= (string) \Server::post('ac');
		$email 			= (string) \Server::post('email');
		$key 			= (string) \Server::post('key');
		$json 			= (string) \Server::post('json', false);
		$UserId     	= (int) \Server::post('UserId');
		$k2	         	= (int) \Server::post('k2');
		$Logout     	= (int) \Server::post('Logout');
		$Delete     	= (int) \Server::post('Delete');
		$Login     		= (int) \Server::post('Login');
		$ChangeUserName = (int) \Server::post('ChangeUserName');
		$ForgotPassword = (int) \Server::post('ForgotPassword');
		$ChangePassword = (int) \Server::post('ChangePassword');
		$Pin        	= (int) \Server::post('Pin');
		$DoneQuiz       = (int) \Server::post('DoneQuiz');
		$Register       = (int) \Server::post('Register');
		$mode       	= (int) \Server::post('mode');
		$Options        = [$Logout, $Delete, $Login, $ChangeUserName, $ForgotPassword, $ForgotPassword, $ChangePassword, $Pin, $DoneQuiz, $Register, $mode, $json];
		$Err        	= ['Err' =>[]];
		$message		= '';
		
		while(1) {
			
			if (Validator::spam_control($this->user->ipAddr(),'login')) {
				$Err['Err']['login'] = 'Try again in 10 minutes';
				break; 			
			}
			switch($Options){
				case strlen($json) > 0:

					$data = json_decode($json, true);
					
					if (json_last_error() !== 0) {
						$Err = 'Bad Params';
						break;
					}
					
					if (array_key_exists('ForgotPassword', $data) && $data['ForgotPassword'] == 'ResetPassword') {
						$NameEmail = (string) \Server::protection($data['NameEmail']);
						$captcha   = (string) \Server::protection($data['g-recaptcha-response']);

						if (!Validator::isValidEmail($NameEmail)) {
							$Err = $NameEmail . \Server::PrintResult('main','evalid');
							break;
						}
						
						$user = $this->user->getUserEmail($NameEmail);

						if (!$user) {
							$Err = \Server::PrintResult('buy','notfound');
							break;
						}
						if (smtpmail == true) {

							$forgotHash = $this->core->rand(10);
							$this->user->updateData('users', ['forgothash' => $forgotHash], ['id' => $user->id]);
							$this->mail->IsSMTP();
							$this->mail->SMTPAuth   = true;
							$this->mail->SMTPSecure = SMTP_Sec;
							$this->mail->Host       = host_smtp;
							$this->mail->Port       = port_gmail;
							$this->mail->Username   = mail_gmail;
							$this->mail->Password   = pass_gmail;
							$this->mail->From       = mail_gmail;              
							$this->mail->FromName   = 'INFO ' . XAT_NAME;
							$this->mail->Subject    = \Server::PrintMessage('login', 'chgpass1',[$user->username]);
							$this->mail->AltBody    = "";
							$this->mail->Body       = "";
							$this->mail->Body      .= \Server::PrintMessage('login', 'chgpass2',[$user->username, METHOD.'//'.DOMAIN.'/login?UserId='.$user->id.'&k2='.$user->k2.'&key='.$forgotHash.'&mob=0']);
							$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'.DOMAIN.'/'. XAT_NAME, FACEBOOK]);
							$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
							$this->mail->AddAddress($user->email, "");
							$this->mail->IsHTML(false);
							$this->mail->Send();
						}
						$Err =  json_encode(['html' => \Server::PrintResult('login','chgpass3')]);
						
					} elseif (array_key_exists('Register', $data) && $data['Register'] == 'Register') {

							
							$email     = (string) \Server::protection($data['email']);
							$captcha   = (string) \Server::protection($data['g-recaptcha-response']);
							$Username  = (string) \Server::protection($data['name']);
							$password  = (string) \Server::protection($data['password']);
							$password2 = (string) \Server::protection($data['password2']);
													
							if (strlen($Username) < 10) {
								$Err = \Server::PrintResult('buy','short') . ' E47';
								break;
							}
							if (strlen($Username) > 18  ||  !Validator::isAlphanumeric($Username)) {
								$Err = \Server::PrintResult('login','namebad').' E47';
								break;
							}
							if (Validator::isNumeric(substr($Username, 0, 1))) {
								$Err = \Server::PrintResult('buy','firstletter');
								break;
							}
							if ($this->isBad($Username)) {
								$Err = $Username . \Server::PrintResult('buy','notallowed');
								break;
							}
							if ($this->user->isAlreadyRegistered($Username)) {
								$Err = \Server::PrintResult('login','namedup') . ' E6';
								break;
							}
							if ($password != $password2) {
								$Err = \Server::PrintResult('login','passne') . ' E40';
								break;
							}
							if (!Validator::isAlphanumeric($password)) {
								$Err = \Server::PrintResult('login','len6') . ' E65';
								break;
							}					
							if (strlen($password) < 6) {
								$Err = \Server::PrintResult('login','passshort');
								break;
							}
							
							if (!Validator::isValidEmail($email)) {
								$Err = $email . \Server::PrintResult('main','evalid') . ' E42';
								break;
							}
							
							if (!Validator::isValidMail($email)) {
								$Err = $email . \Server::PrintResult('login','eblock');
								break;
							}

							if (Emailvalidator_SMTP == true) {
								$exist = $this->checkmail->validate([$email]);
								if (!$exist[$email]) {
									$Err = \Server::PrintResult('main','evalid').' (doesn\'t exists)';
									break;
								}
							}		
							if (Emailvalidator_API == true) {
								if (!Validator::verifyEmail($email)) {
									$Err = \Server::PrintResult('main','evalid').' (doesn\'t exists)';
									break;
								}
							}
						
							$getEmail = $this->user->getUserEmail($email);
						
							if ($getEmail) {
								$Err = \Server::PrintResult('login','emaildup') . ' E7';
								break;
							}

							$user = $this->user->newGuest();
							$this->user->deleteData('users',['id' => $user->id, 'k2' => $user->k2]);
							$RegisterCode = $this->core->rand(10);
							$userdetails  = $this->core->userdetails($this->user->ipAddr());
							$this->user->doRegister($user->id, $user->k, $user->k2, $user->k3, $Username, $password, $email, $userdetails['isp'], $userdetails['country'], $RegisterCode);
							
							if (smtpmail == true) {	
							
								$this->mail->IsSMTP();
								$this->mail->SMTPAuth   = true;
								$this->mail->SMTPSecure = SMTP_Sec;
								$this->mail->Host       = host_smtp;
								$this->mail->Port       = port_gmail;
								$this->mail->Username   = mail_gmail;
								$this->mail->Password   = pass_gmail;
								$this->mail->From       = mail_gmail;              
								$this->mail->FromName   = 'INFO ' . XAT_NAME;
								$this->mail->Subject    = \Server::PrintMessage('login', 'activate1',[$Username]);
								$this->mail->AltBody    = "";
								$this->mail->Body       = "";
								$this->mail->Body      .= \Server::PrintMessage('login', 'activate2',[$Username, METHOD . '//' . DOMAIN .'/login?UserId='.$user->id.'&k2='.$user->k2.'&ac='.$RegisterCode.'&mode=1', $Username]);
								$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
								$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
								$this->mail->AddAddress($email, "");
								$this->mail->IsHTML(false);
								$this->mail->Send();
								
							}
						
						$Err = json_encode([
							'UserId' => (string) $user->id,
							'html'   => \Server::PrintResult('login', 'regdone'),
							'k1'     => $user->k,
							'k2'     => (string) $user->k2
						]);					
					}
				break;
				case $Logout && $Logout == 1:
					$this->user->doLogout();
					//Err['Err']['LogoutEmbed'] = $this->DoLogin();
					$Err['Err']['LogoutEmbed'] = '<div class="text-success font-weight-bold mb-3" data-localize="web.logoutsuccess">You have been successfully logged out!</div>';
				break;					
				case $Login && $Login == 1:
				case $Delete && $Delete == 1:
				case $ChangeUserName && $ChangeUserName == 1:
					if (!Validator::isAlphanumeric($NameEmail)) {
						$Err['Err']['login'] = $NameEmail . ':Wrong username/email or password E25';
						break; 
					}
					$user = $this->user->getUserByUsername($NameEmail);
					if (!$user || !$this->core->validate($password, $user->password)) {
						$Err['Err']['login'] = $NameEmail . ':Wrong username/email or password E25';
						break; 
					}
					$Confirmed = ($user->confirmed == 1 ? true : false);
					if (!$Confirmed) {
						if (smtpmail == true) {	
						
							$Code = $this->core->rand(10);
							$this->user->updateData('users', ['confirmed' => $Code], ['username' => $user->username]);
							$this->mail->IsSMTP();
							$this->mail->SMTPAuth   = true;
							$this->mail->SMTPSecure = SMTP_Sec;
							$this->mail->Host       = host_smtp;
							$this->mail->Port       = port_gmail;
							$this->mail->Username   = mail_gmail;
							$this->mail->Password   = pass_gmail;
							$this->mail->From       = mail_gmail;              
							$this->mail->FromName   = 'INFO ' . XAT_NAME;
							$this->mail->Subject    = \Server::PrintMessage('login', 'activate1',[$user->username]);
							$this->mail->AltBody    = "";
							$this->mail->Body       = "";
							$this->mail->Body      .= \Server::PrintMessage('login', 'activate2',[$user->username, METHOD . '//' . DOMAIN .'/login?UserId='.$user->id.'&k2='.$user->k2.'&ac='.$Code.'&mode=1', $user->username]);
							$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
							$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
							$this->mail->AddAddress($user->email, "");
							$this->mail->IsHTML(false);
							$this->mail->Send();
							
						}
						$Err['Err']['login'] = $user->username .' '. \Server::PrintResult('buy','notconf');
						break;
					}
					$userdetails  = $this->core->userdetails($this->user->ipAddr());
					$LockedAccess = false;
					switch($user->protection) {
						case 'ip':
							$protection   = ($user->ip_login != $this->user->ipAddr()) ? true : false;
							$LockedAccess = $protection ? ($user->isp != $userdetails['isp'] || $user->country != $userdetails['country'] ? true : false): false;
						break;
						case 'isp':
							$protection = ($user->isp != $userdetails['isp']) ? true : false;
						case 'country':
							$protection = ($user->country != $userdetails['country']) ? true : false;
						break;
					}
					
					if ($LockedAccess) {					  
						if (smtpmail == true) {
							$this->mail->IsSMTP();
							$this->mail->SMTPAuth   = true;
							$this->mail->SMTPSecure = SMTP_Sec;
							$this->mail->Host       = host_smtp;
							$this->mail->Port       = port_gmail;
							$this->mail->Username   = mail_gmail;
							$this->mail->Password   = pass_gmail;
							$this->mail->From       = mail_gmail;              
							$this->mail->FromName   = 'INFO ' . XAT_NAME;
							$this->mail->Subject    = \Server::PrintMessage('login', 'locked1',[]);
							$this->mail->AltBody    = "";
							$this->mail->Body       = "";
							$this->mail->Body      .= \Server::PrintMessage('login', 'locked2',[$user->username, $user->id, implode(',', $userdetails), METHOD . '//'.DOMAIN.'/AccountLocking']);
							$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
							$this->mail->AddAddress($user->email, "");
							$this->mail->IsHTML(false);
							$this->mail->Send();
							
						} 
						$Err['Err']['login'] = \Server::PrintResult('login','locked3') . '<a href="//'.DOMAIN.'/AccountLocking">'. \Server::PrintResult('login','lockd') . '</a>. E29' ;
						break;
					}
					if ((!$Pin || $user->pin != $Pin) && $protection) {					  
						if (smtpmail == true) {
							$PinCode = rand(1, 10000000000);
							$this->user->updateData('users', ['pin' => $PinCode ], ['username' => $user->username]);
							$this->mail->IsSMTP();
							$this->mail->SMTPAuth   = true;
							$this->mail->SMTPSecure = SMTP_Sec;
							$this->mail->Host       = host_smtp;
							$this->mail->Port       = port_gmail;
							$this->mail->Username   = mail_gmail;
							$this->mail->Password   = pass_gmail;
							$this->mail->From       = mail_gmail;              
							$this->mail->FromName   = 'INFO ' . XAT_NAME;
							$this->mail->Subject    = \Server::PrintMessage('login', 'logpin',[$user->username]);
							$this->mail->AltBody    = "";
							$this->mail->Body       = "";
							$this->mail->Body      .= \Server::PrintMessage('login', 'logpin2',[$user->username, METHOD.'//'.DOMAIN.'/login?Pin='.$PinCode, $user->username]);
							$this->mail->Body      .= \Server::PrintMessage('login', 'logfrom',[]) . implode(',',$userdetails) . "\n\n";
							$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'.DOMAIN.'/'. XAT_NAME, FACEBOOK]);
							$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
							$this->mail->AddAddress($user->email, "");
							$this->mail->IsHTML(false);
							$this->mail->Send();
							
						} 
						$Err['Err']['login'] = \Server::PrintResult('login','emcheck');
						break;
					}
					if ($Delete) {
						if ($user->is_held > time()) {
							$Err['Err']['delete'] = \Server::PrintResult('login','locked3');
							break; 
						}
						if ($user->UsernameChangeTime > time()) {
							$Err['Err']['delete'] = \Server::PrintResult('login','del30') . $this->user->getDays($user->UsernameChangeTime) . \Server::PrintResult('buy','days') .' E20';
							break; 
						}
						if ($user->torched == 1) {
							$Err['Err']['delete'] = 'Account was torched';
							break;
						}
						if (!$Pin || $user->pin != $Pin) {
							if (smtpmail == true) {
								$PinCode = rand(1, 10000000000);
								$this->user->updateData('users', ['pin' => $PinCode ], ['username' => $user->username]);
								$this->mail->IsSMTP();
								$this->mail->SMTPAuth   = true;
								$this->mail->SMTPSecure = SMTP_Sec;
								$this->mail->Host       = host_smtp;
								$this->mail->Port       = port_gmail;
								$this->mail->Username   = mail_gmail;
								$this->mail->Password   = pass_gmail;
								$this->mail->From       = mail_gmail;              
								$this->mail->FromName   = 'INFO ' . XAT_NAME;
								$this->mail->Subject    = \Server::PrintMessage('login', 'logpin',[$user->username]);
								$this->mail->AltBody    = "";
								$this->mail->Body       = "";
								$this->mail->Body      .= \Server::PrintMessage('login', 'logpin2',[$user->username, METHOD.'//'.DOMAIN.'/login?Pin='.$PinCode, $user->username]);
								$this->mail->Body      .= \Server::PrintMessage('login', 'logfrom',[]) . implode(',',$userdetails) . "\n\n";
								$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'.DOMAIN.'/'. XAT_NAME, FACEBOOK]);
								$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
								$this->mail->AddAddress($user->email, "");
								$this->mail->IsHTML(false);
								$this->mail->Send();
							}
						$Err['Err']['delete'] = \Server::PrintResult('login','delcheck');
						break;
						}
						$this->user->deleteData('ranks',['userid' => $user->id]);
						$this->user->deleteData('users',['id' => $user->id]);
						$this->user->InsertData('users',
								[
									'id'  => $user->id,
									'k'   => $user->k,
									'k2'  => $user->k2,
									'k3'  => $user->k3
								]
						);
						$Err['Err']['settings'] = '<font color="FF0000">k2: '. $user->k2 . ' ' . \Server::PrintResult('login','needk2') .'</font>';
					} else if ($ChangeUserName) {
						if ($user->UsernameChangeTime > time()) {
							$Err['Err']['newname'] = 'You cant change your username for '.$this->user->getDays($user->UsernameChangeTime).' days E17';
							break;
						}
						if (Validator::isNumeric(substr($Username, 0, 1))) {
							$Err['Err']['newname'] = \Server::PrintResult('buy','firstletter');
							break; 
						}
						if (strlen($Username) < 10) {
							$Err['Err']['newname'] = \Server::PrintResult('buy','short').' E47';
							$stop = 1;
							break; 
						}
						if (strlen($Username) > 18 || !ctype_alnum($Username) || $this->isBad($Username)) {
							$Err['Err']['newname'] = \Server::PrintResult('login','namebad');
							break; 
						}
						$CheckName = $this->user->getUserByUsername($Username);
						if ($CheckName) {
							$Err['Err']['newname'] = \Server::PrintResult('buy','nametaken');
							break; 	
						}
						$days = 14;
						$time = $this->user->makeDays($days);
						$this->user->updateData('users', ['UsernameChangeTime' => $time, 'username' => $Username], ['id' => $user->id]);
						$user = $this->user->getUserById($user->id);
					}
							
					if ($Protected && $Locked) {
						if ($Protected == 'ON' && $Locked == 'ON') {
							if ($user->isp == $userdetails['isp'])
								$type_protection = 'ip';
						}				
						if ($Protected == 'OFF' && $Locked == 'OFF') {
							$type_protection = 'country';
							if (empty($user->country)) {
								$this->user->updateData('users', ['country' => $userdetails['country']], ['id' => $user->id]);
							}
						}				
						if ($Protected == 'ON' && $Locked == 'OFF') {
							$type_protection = 'isp';
							if (empty($user->isp)) {
								$this->user->updateData('users', ['isp' => $userdetails['isp']], ['id' => $user->id]);
							}
						}
						if ($user->protection != $type_protection && !empty($type_protection)) {
							$this->user->updateData('users', ['protection' => $type_protection], ['id' => $user->id]);
							if ($this->user->getDays($user->is_held) < 4) {
								$this->user->updateData('users', ['is_held' => $this->user->makeDays(3)], ['id' => $user->id]);
								//$Err['Err']['settings'] = \Server::PrintResult('login','precaution');	
								$Err['Err']['settings'] = '<span data-localize=login.precaution>Account held for 3 days as a security precaution.</span>';
							}
						}
					}
					if (!empty($user->isp) && $user->isp != $userdetails['isp']) {
						$this->user->updateData('users', ['is_held' => $this->user->makeDays(7)], ['id' => $user->id]);
					}  
					if ($user->isp == $userdetails['isp'] && $this->user->getDays($user->is_held) > 3) {
						$this->user->updateData('users', ['is_held' => time()], ['id' => $user->id]);
					}
					if ($ResetApiKey && $ResetApiKey == 'ResetApiKey') {
						$this->user->updateData('users', ['apiKey' => $this->core->rand(20)], ['id' => $user->id]);
					}
					$user = $Delete ? $user : $this->user->doLogin($user->username, $password);
					$Err['Err']['todo'] = $this->user->doHtml5($user);
					$Err['Err']['protect'] = $user->protection;
					if ($Pin) {
						$Err['Err']['Pin']  = $Pin;
					}
					if (!empty($user->apiKey)) {
						$Err['Err']['ApiKey']  = $user->apiKey;	
					}
					if (isset($_POST['DoneQuiz']) && $_POST['DoneQuiz'] == 1) {
						$this->user->updateData('users', ['AuthSelect' => 1], ['id' => $user->id]);
					}
					$GroupPowers = $this->user->getAssignedPowers($user->id);
					if ($GroupPowers) {
						$PowersBody .= "<h3 data-localize=login.grpassigns>Current group power assignments:</h3>\n\r";
						foreach ($GroupPowers as $gp) {
							$power         = $this->user->getPowerName($gp['power']);
							$PowersBody   .= $power->name.": <a href=//".DOMAIN."/{$gp['chat']}>{$gp['chat']}</a><br>";
						}
						$Err['Err']['PowerAssignments']  = $PowersBody;	
					}
					if ($user->is_held > time()) {
						$Err['Err']['held'] = 'Account held '. $this->user->getDays($user->is_held) .' days';	
					}
					$Err['Err']['Settings'] = $this->DoLogin($NameEmail, $password, 8);
					$Err['Err']['Settings2'] = '<div class="text-success font-weight-bold mb-3" data-localize="web.loginsuccess">You have been successfully logged in!</div>';
				break;
				case $ForgotPassword && $ForgotPassword == 1:
					if (!Validator::recaptcha($captcha)) {
						$Err['Err']['lost'] = \Server::PrintResult('main','recaperr');
						break;
					}
					if (!Validator::isValidEmail($NameEmail)) {
						$Err['Err']['lostemail'] = $NameEmail . \Server::PrintResult('main','evalid');
						break;
					}
					$user = $this->user->getUserEmail($NameEmail);
					if (!$user) {
						$Err['Err']['lostemail'] = \Server::PrintResult('buy','notfound');
						break;
					}
					if (smtpmail == true) {
						
						$forgotHash = $this->core->rand(10);
						$this->user->updateData('users', ['forgothash' => $forgotHash], ['id' => $user->id]);
						$this->mail->IsSMTP();
						$this->mail->SMTPAuth   = true;
						$this->mail->SMTPSecure = SMTP_Sec;
						$this->mail->Host       = host_smtp;
						$this->mail->Port       = port_gmail;
						$this->mail->Username   = mail_gmail;
						$this->mail->Password   = pass_gmail;
						$this->mail->From       = mail_gmail;              
						$this->mail->FromName   = 'INFO ' . XAT_NAME;
						$this->mail->Subject    = \Server::PrintMessage('login', 'chgpass1',[$user->username]);
						$this->mail->AltBody    = "";
						$this->mail->Body       = "";
						$this->mail->Body      .= \Server::PrintMessage('login', 'chgpass2',[$user->username, METHOD.'//'.DOMAIN.'/login?UserId='.$user->id.'&k2='.$user->k2.'&key='.$forgotHash.'&mob=0']);
						$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'.DOMAIN.'/'. XAT_NAME, FACEBOOK]);
						$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
						$this->mail->AddAddress($user->email, "");
						$this->mail->IsHTML(false);
						$this->mail->Send();
					}
					$Err['Err']['lostok'] =  \Server::PrintResult('login','chgpass3');
				break;
				case $ChangePassword && $ChangePassword == 1:	
					if (strlen($password) < 6) {
						$Err['Err']['cppass1'] =  \Server::PrintResult('login','passshort').' E39';
						break;
					}
					if (!Validator::isAlphanumeric($password)) {
						$Err['Err']['cppass1'] =  \Server::PrintResult('login','len6').' E39';
						break;
					}
					if ($key && $UserId && strlen($key) == 10) {
						$user = $this->user->getUserById($UserId);
						if (!$user) {
							$Err['Err']['changepass'] = \Server::PrintResult('login','notvalid').' E39';
							break;
						}
						if ($user->forgothash !== $key) {
							$Err['Err']['changepass'] = \Server::PrintResult('login','notvalid').' E39';
							break;
						}
						$this->user->updateData('users', ['password' => $this->core->hash($password), 'forgothash' => ''], ['id' => $user->id]);
						$Err['Err']['changepassok'] = \Server::PrintResult('login','passupdetd');
						break;
					}
					if (!Validator::isAlphanumeric($NameEmail)) {
						$Err['Err']['changepass'] = \Server::PrintResult('login','notvalid').' E15';
						break;
					}
					$user = $this->user->getUserByUsername($NameEmail);
					if (!$user) {
						$Err['Err']['changepass'] = \Server::PrintResult('login','notvalid').' E14';
						break;
					}
					if (!$this->core->validate($oldpassword, $user->password)) {
						$Err['Err']['changepass'] = \Server::PrintResult('login','notvalid').' E14';
						break;
					}
					$this->user->updateData('users', ['password' => $this->core->hash($password)], ['id' => $user->id]);
					$Err['Err']['changepassok'] = \Server::PrintResult('login','passupdetd');
				break;
				case $mode && $mode == 1:
				case $Register && $Register == 1:
					if (!$this->user->checkMaxAccounts()) {
						$Err['Err']['login'] = 'You exceeded the maximum number of registrations allowed';
						break;
					}
					if ($k2 && $UserId) {
						$user = $this->user->getUserById($UserId);
					}
					if (!$user) {
						$Err['Err']['login'] = $UserId .' '. \Server::PrintResult('login','nolonger').' E51';
						break;					
					}
					if ($user) {
						if ($user->confirmed == 1) {
							$Err['Err']['login'] = $user->id . \Server::PrintResult('login','regdup').' E4';
							break;
						}
						if ($user->k2 != $k2) {
							$Err['Err']['login'] = \Server::PrintResult('login','badid').' E67';
							break;
						}
						if ($ac && Validator::isAlphanumeric($ac) && $user->confirmed != 1) {
							if ($user->confirmed != $ac) {
								$Err['Err']['ShowRegister'] = (int) 1;
								$Err['Err']['register']     = $UserId . \Server::PrintResult('login','badid').' E50';
								$Err['Err']['regnoform']    = (int) 1;
								break;					
							}
							$this->user->updateData('users', ['confirmed' => 1], ['confirmed' => $ac]);
							$Err['Err']['todo'] = $this->user->doHtml5($user);
							$Err['Err']['protect']  = $user->protection;
							$Err['Err']['Settings'] = $this->doLogin($user->username, $user->password);
							$Err['Err']['Settings2'] = '<div class="text-success font-weight-bold mb-3" data-localize="web.loginsuccess">You have been successfully logged in!</div>';
							break;
						}
						
						$Err['Err']['ShowRegister'] = (int) 1;
		
						if ($Register) {
							$stop = 0;
							if (!Validator::recaptcha($captcha)) {
								$Err['Err']['registercap'] = \Server::PrintResult('main','recaperr');
								$stop = 1;
							}
							if (!$agree || ($agree && $agree !== 'ON')) { 	 
								$Err['Err']['registerterms'] = \Server::PrintResult('buy','terms');
								$stop = 1;
							}	
							if (strlen($Username) < 10) {
								$Err['Err']['registername'] = \Server::PrintResult('buy','short') . ' E47';
								$stop = 1;
							}
							if (strlen($Username) > 18  ||  !Validator::isAlphanumeric($Username)) {
								$Err['Err']['registername'] = \Server::PrintResult('login','namebad').' E47';
								$stop = 1;
							}
							if (Validator::isNumeric(substr($Username, 0, 1))) {
								$Err['Err']['registername'] = \Server::PrintResult('buy','firstletter');
								$stop = 1;
							}
							if ($this->isBad($Username)) {
								$Err['Err']['registername'] = $Username . \Server::PrintResult('buy','notallowed');
								$stop = 1;
							}
							if ($this->user->isAlreadyRegistered($Username)) {
								$Err['Err']['registername'] = \Server::PrintResult('login','namedup') . ' E6';
								$stop = 1;
							}
							if ($password != $password2) {
								$Err['Err']['regpass'] = \Server::PrintResult('login','passne') . ' E40';
								$stop = 1;
							}
							if (!Validator::isAlphanumeric($password)) {
								$Err['Err']['regpass'] = \Server::PrintResult('login','len6') . ' E65';
								$stop = 1;
							}					
							if (strlen($password) < 6) {
								$Err['Err']['regpass'] = \Server::PrintResult('login','passshort');
								$stop = 1;
							}
							
							if (!Validator::isValidEmail($email)) {
								$Err['Err']['regemail'] = $email . \Server::PrintResult('main','evalid') . ' E42';
								break;
							}
							
							if (!Validator::isValidMail($email)) {
								$Err['Err']['regemail'] = $email . \Server::PrintResult('login','eblock');
								$stop = 1;
							}
							
							if ($stop == 1) { break; }
							
							if (Emailvalidator_SMTP == true) {
								$exist = $this->checkmail->validate([$email]);
								if (!$exist[$email]) {
									$Err['Err']['regemail'] = \Server::PrintResult('main','evalid').' (doesn\'t exists)';
									break;
								}
							}		
							if (Emailvalidator_API == true) {
								if (!Validator::verifyEmail($email)) {
									$Err['Err']['regemail'] = \Server::PrintResult('main','evalid').' (doesn\'t exists)';
									break;
								}
							}
							$getEmail = $this->user->getUserEmail($email);
							if ($getEmail) {
								$Err['Err']['regemail'] = \Server::PrintResult('login','emaildup') . ' E7';
								break;
							}

							$this->user->deleteData('users',['id' => $user->id, 'k2' => $user->k2]);
							$RegisterCode = $this->core->rand(10);
							$userdetails  = $this->core->userdetails($this->user->ipAddr());
							$this->user->doRegister($user->id, $user->k, $user->k2, $user->k3, $Username, $password, $email, $userdetails['isp'], $userdetails['country'], $RegisterCode);
							
							if (smtpmail == true) {	
							
								$this->mail->IsSMTP();
								$this->mail->SMTPAuth   = true;
								$this->mail->SMTPSecure = SMTP_Sec;
								$this->mail->Host       = host_smtp;
								$this->mail->Port       = port_gmail;
								$this->mail->Username   = mail_gmail;
								$this->mail->Password   = pass_gmail;
								$this->mail->From       = mail_gmail;              
								$this->mail->FromName   = 'INFO ' . XAT_NAME;
								$this->mail->Subject    = \Server::PrintMessage('login', 'activate1',[$Username]);
								$this->mail->AltBody    = "";
								$this->mail->Body       = "";
								$this->mail->Body      .= \Server::PrintMessage('login', 'activate2',[$Username, METHOD . '//' . DOMAIN .'/login?UserId='.$user->id.'&k2='.$user->k2.'&ac='.$RegisterCode.'&mode=1', $Username]);
								$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
								$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
								$this->mail->AddAddress($email, "");
								$this->mail->IsHTML(false);
								$this->mail->Send();
								
							}
							
							$Err['Err']['captoken']   = "{$user->id},{$user->k},{$user->k3},";
							$Err['Err']['regdone']    = \Server::PrintResult('login','regdone');
							$Err['Err']['regnoform']  = (int) 1;
						}	
					}
				break;
			}
			break;
		}
		if ($json) {
			return View::plain($Err);
		}
		return View::json($Err);
	}
}