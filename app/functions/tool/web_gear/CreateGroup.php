<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Vendor\SMTP_validateEmail;
use Classes\Chat;
use Classes\User;

class CreateGroup {
	protected $chat;
	protected $mail;
	protected $user;
	protected $checkmail;
	private $bgurl = METHOD . DOMAIN . '/web_gear/background/xat_%s.jpg';
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->mail = new PHPMailer();
		$this->checkmail = new SMTP_validateEmail();
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
			$captcha 		   = (string) \Server::post('g-recaptcha-response');
			$YourName          = (string) \Server::post('YourName');
			$GroupName         = (string) \Server::post('GroupName');
			$password          = (string) \Server::post('password');
			$email             = (string) \Server::post('email');
			$Tags	   		   = (string) \Server::post('Tags');
			$GroupDescription  = (string) \Server::post('GroupDescription');
			$www			   = (string) \Server::post('www');
			$background 	   = (string) \Server::post('bg');
			$submit			   = (int)    \Server::post('submit');
			$stop              = 0;
			$message           = ['username' => null, 'group' => null, 'registercap' => null, 'email' => null, 'description' => null, 'password' => null, 'success' => null];
			$parameters        = ['YourName' => $YourName, 'GroupName' => $GroupName, 'password' => $password, 'email' => $email, 'Tags' => $Tags, 'GroupDescription' => $GroupDescription, 'background' => $background];
			
		while(1) {
			
			if (!$submit) { break; }
			
			if (!Validator::recaptcha($captcha)) {
				$message['registercap'] = \Server::PrintResult('main','recaperr');
				$stop = 1;
			}
			if ($this->isBad($GroupName) || substr(strtolower(trim($GroupName)), 0, 3) == 'xat') {
				$message['group'] = $GroupName . \Server::PrintResult('buy','notallowed');
				$stop = 1;
			}
			if (strlen($GroupName) < 4 || strlen($GroupName) > 23) {
				$message['group'] = $GroupName . \Server::PrintResult('buy','short');
				$stop = 1;
			}
			if (!Validator::isValidChatName($GroupName)) {
				$message['group'] = $GroupName . \Server::PrintResult('buy','notallowed');
				$stop = 1;
			}
			if (strlen($password) < 6) {
				$message['password'] =  \Server::PrintResult('login','passshort');
				$stop = 1;
			}
			if (strlen($GroupDescription) < 12) {
				$message['description'] =  \Server::PrintResult('chat','mustbe').' 12 '.\Server::PrintResult('chat','letters');
				$stop = 1;
			}
			if (strlen($YourName) < 4) {
				$message['username'] =  \Server::PrintResult('chat','mustbe').' 4 '.\Server::PrintResult('chat','letters');
				$stop = 1;
			}
			if (!Validator::isAlphanumeric($YourName)) {
				$message['username'] =  'Invalid Username';
				$stop = 1;
			}
			if (!Validator::isValidEmail($email)) {
				$message['email'] = $email . \Server::PrintResult('main','evalid').' E42';
				$stop = 1;
			}
			if (!Validator::isValidMail($email)) {
				$message['email'] = \Server::PrintResult('main','evalid');
				$stop == 1;
			}	

			if ($stop == 1) { break; } 

			if (Emailvalidator_SMTP == true) {
				$exist = $this->checkmail->validate([$email]);
				if (!$exist[$email]) {
					$message['email'] = $email . \Server::PrintResult('main','evalid').' (doesn\'t exists)';
					break;
				}
			}		
			if (Emailvalidator_API == true) {
				if (!Validator::verifyEmail($email)) {
					$message['email'] = $email . \Server::PrintResult('main','evalid').' (doesn\'t exists)';
					break;
				}
			}			
			$CheckMail = $this->chat->CheckEmail($email);
			if ($CheckMail) {
				$message['email'] = \Server::PrintResult('login','emaildup');
				$stop = 1;
			}
			if ($this->chat->isAlreadyCreated($GroupName)) {
				$message['group'] = \Server::PrintResult('buy','nametaken');
				$stop = 1;
			}

			if ($stop == 1) { break; } 
			
			$this->chat->doCreate(1, $GroupName, $GroupDescription, $background, $password, $email, \Server::detectLanguage(), $Tags, $YourName);
			
			if (smtpmail == true) {	
						
				$chat = $this->chat->get($GroupName);
				$this->mail->IsSMTP();
				$this->mail->SMTPAuth   = true;
				$this->mail->SMTPSecure = SMTP_Sec;
				$this->mail->Host       = host_smtp;
				$this->mail->Port       = port_gmail;
				$this->mail->Username   = mail_gmail;
				$this->mail->Password   = pass_gmail;
				$this->mail->From       = mail_gmail;              
				$this->mail->FromName   = 'INFO ' . XAT_NAME;
				$this->mail->Subject    = \Server::PrintMessage('chat', 'grpac2',[$chat->name]);
				$this->mail->AltBody    = "";
				$this->mail->Body       = "";
				$this->mail->Body      .= \Server::PrintMessage('chat', 'grpac3',[$chat->creator, $chat->name, METHOD . '//' . DOMAIN .'/web_gear/chat/activategroup.php?id='.$chat->id.'&gn='.$chat->name, $chat->name]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
				$this->mail->AddAddress($chat->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();
							
			}

			$message['success'] =  \Server::PrintResult('chat','grpac1');
			break;
		}

		$getPage  = View::get('web_gear/CreateGroup', ['chat' => $this->chat, 'message' => $message, 'post' => $parameters]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Create a new chat group', 'xt' => ['buy','chat','main','login'], 'description' => 'Create a new chat group'] );
	}
}