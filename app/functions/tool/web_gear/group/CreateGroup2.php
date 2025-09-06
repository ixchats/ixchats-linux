<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\Chat;
use Classes\User;

class CreateGroup2 {
	protected $chat;
	protected $mail;
	private $bgurl = METHOD . DOMAIN . '/web_gear/background/xat_%s.jpg';
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->mail = new PHPMailer();
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
			$agree	   		   = (string) \Server::post('agree');
			$GroupDescription  = (string) \Server::post('GroupDescription');
			$www			   = (string) \Server::post('www');
			$background 	   = (string) \Server::post('bg');
			$submit			   = (int) \Server::post('submit');
			$stop              = 0;
			$message    = ['Err' =>[]];
			$parameters        = ['YourName' => $YourName, 'GroupName' => $GroupName, 'password' => $password, 'email' => $email, 'Tags' => $Tags, 'GroupDescription' => $GroupDescription, 'background' => $background];
			
		while(1) {
			
			if (!$submit) { break; }
			
			if (!$agree || ($agree && $agree !== 'agree')) {
				$message['Err']['Agree'] = \Server::PrintResult('chats','terms');
				$stop = 1;
			}
			if ($this->isBad($GroupName)) {
				$message['Err']['GroupName'] = $GroupName . \Server::PrintResult('buy','notallowed');
				$stop = 1;
			}
			if (strlen($GroupName) < 4 || strlen($GroupName) > 23) {
				$message['Err']['GroupName'] = $GroupName . \Server::PrintResult('buy','short');
				$stop = 1;
			}
			if (!Validator::isValidChatName($GroupName)) {
				$message['Err']['GroupName'] = $GroupName . \Server::PrintResult('buy','notallowed');
				$stop = 1;
			}
			if (strlen($password) < 6) {
				$message['Err']['password'] =  \Server::PrintResult('login','passshort');
				$stop = 1;
			}
			if (strlen($GroupDescription) < 12) {
				$message['Err']['GroupDescription'] =  \Server::PrintResult('chat','mustbe').' 12 '.\Server::PrintResult('chat','letters');
				$stop = 1;
			}
			if (strlen($YourName) < 4) {
				$message['Err']['YourName'] =  \Server::PrintResult('chat','mustbe').' 4 '.\Server::PrintResult('chat','letters');
				$stop = 1;
			}
			if (!Validator::isAlphanumeric($YourName)) {
				$message['Err']['YourName'] =  'Invalid Username';
				$stop = 1;
			}
			if (!Validator::isValidEmail($email)) {
				$message['Err']['email'] = $email . \Server::PrintResult('main','evalid').' E42';
				$stop = 1;
			}

			if (!Validator::isValidMail($email)) {
				$message['Err']['email'] = \Server::PrintResult('main','evalid');
				$stop = 1;
			}
			
			if ($stop == 1) { break; } 
			
			$CheckMail = $this->chat->CheckEmail($email);
			if ($CheckMail) {
				$message['Err']['email'] = \Server::PrintResult('login','emaildup');
				$stop = 1;
			}
			if ($this->chat->isAlreadyCreated($GroupName)) {
				$message['Err']['GroupName'] = \Server::PrintResult('buy','nametaken');
				$stop = 1;
			}

			if ($stop == 1) { break; } 
			
			if (!Validator::recaptcha($captcha)) {
				$message['Err']['captcha'] = 'true';
				$stop = 2;
			}
			if ($stop == 2) { break; } 
			
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
				$this->mail->Body      .= \Server::PrintMessage('chat', 'grpac3',[$chat->creator, $chat->name, METHOD . '//' . DOMAIN .'/chats#!activate=1&id='.$chat->id.'&gn='.$chat->name, $chat->name]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
				$this->mail->AddAddress($chat->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();
							
			}

			$message['Err']['captchasuccess'] =  \Server::PrintResult('chat','grpac1');
			break;
		}

		echo json_encode($message);
	}
}