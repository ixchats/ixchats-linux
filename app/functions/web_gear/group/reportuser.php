<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\User;
use Classes\Chat;


class reportuser {
	protected $user;
	protected $chat;
	protected $mail;
	
	public function __construct() {
		$this->user = new User();
		$this->chat = new Chat();
		$this->mail = new PHPMailer();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$getId     	 	  = (int) \Server::get('id');
		$getName    	  = (string) \Server::get('UserName');				
		$Id    	  		  = (int) \Server::post('id');	
		$UserName    	  = (string) \Server::post('UserName');		
		$YourName    	  = (string) \Server::post('YourName');		
		$Type    	      = (string) \Server::post('Type');		
		$captcha    	  = (string) \Server::post('g-recaptcha-response');		
		$submit   	      = (string) \Server::post('submit');
		$why   	  		  = (string) \Server::post('why');
		$email  	      = (string) \Server::post('email');
		$group  	      = (string) \Server::post('group');
		$message    = ['Err' =>[]];
		$user             = '';
		
		while(1) {
					
			if (!$submit || $submit != 'Send') { break; }
			
			if (!$Id && !$UserName) {
				$message['Err']['yourname2'] = 'System problem (1). Please try later, sorry';
				break;
			}
			if (($Id && !Validator::isNumeric($Id)) || ($UserName && !Validator::isAlphanumeric($UserName))) {
				$message['Err']['yourname2'] = 'System problem (2). Please try later, sorry';
				break;
			}
			$user = $UserName ? $this->user->getUserByUsername($UserName) : $this->user->getUserById($Id);
			if (!$user) {
				$message['Err']['yourname2'] = 'System problem (3). Please try later, sorry';
				break;
			}
			if (strlen($why) < 8) {
				$message['Err']['msglen'] = \Server::PrintResult('chat','message') . ' '. \Server::PrintResult('chat','mustchars');
				$stop = 1;
			}
			if (strlen($YourName) < 4) {
				$message['Err']['yourname2'] = \Server::PrintResult('chat','yourname') . '  ' . \Server::PrintResult('chat','mustbe') . '  4  ' . \Server::PrintResult('chat','letters');
				$stop = 1;
			}
			if ($Type == 'please') {
				$message['Err']['type2'] = \Server::PrintResult('chat','mustsel');
				$stop = 1;
			}
			if (!Validator::isValidEmail($email)) {
				$message['Err']['email2'] = \Server::PrintResult('chat','bademail');
				$stop = 1;
			}

			if ($stop == 1) { break; }
			
			if (!Validator::recaptcha($captcha)) {
				$message['Err']['captcha'] = \Server::PrintResult('main','recaperr');
				$stop = 1;
			}
			if ($stop == 1) { break; }
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
				$this->mail->Subject    = \Server::PrintMessage('chat', 'grpmess1',[$user->username]);
				$this->mail->AltBody    = "";
				$this->mail->Body       = "";
				$this->mail->Body      .= \Server::PrintMessage('chat', 'grpmess2',[$user->username, $user->username]);
				$this->mail->Body      .= $why. "\n\n";
				$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
				$this->mail->AddAddress($user->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();
						
			}
			$message['Err']['reportuser'] = 'done';
			break;
		}
		
		echo json_encode($message);
	}
}