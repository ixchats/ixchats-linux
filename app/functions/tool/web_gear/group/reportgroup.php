<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\User;
use Classes\Chat;


class reportgroup {
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
		$getGroup     	  = (string) \Server::get('GroupName');		
		$getId     	 	  = (int) \Server::get('id');	
		$GroupName    	  = (string) \Server::post('GroupName');
		$Id    	  		  = (int) \Server::post('id');	
		$YourName    	  = (string) \Server::post('YourName');		
		$Type    	      = (string) \Server::post('Type');		
		$captcha    	  = (string) \Server::post('g-recaptcha-response');		
		$submit   	      = (string) \Server::post('submit');
		$why   	  		  = (string) \Server::post('why');
		$email  	      = (string) \Server::post('email');
		$message    = ['Err' =>[]];
		$chat             = '';
		
		while(1) {
					
			if (!$submit || $submit != 'Send') { break; }
			
			if (!$Id && !$GroupName) {
				$message['Err']['error'] = 'System problem (1). Please try later, sorry';
				break;
			}
			if (($Id && !Validator::isNumeric($Id)) || ($GroupName && !Validator::isValidChatName($GroupName))) {
				$message['Err']['error'] = 'System problem (2). Please try later, sorry';
				break;
			}
			$chat = $GroupName ? $this->chat->get($GroupName) : $this->chat->getById($Id);
			if (!$chat) {
				$message['Err']['error'] = 'System problem (3). Please try later, sorry';
				break;
			}
			if ($Type == 'please') {
				$message['Err']['type'] = \Server::PrintResult('chat','mustsel');
				$stop = 1;
			}
			if (strlen($YourName) < 4) {
				$message['Err']['yourname'] = \Server::PrintResult('chat','yourname') . '  ' . \Server::PrintResult('chat','mustbe') . '  4  ' . \Server::PrintResult('chat','letters');
				$stop = 1;
			}
			if (!Validator::isValidEmail($email)) {
				$message['Err']['email'] = \Server::PrintResult('chat','bademail');
				$stop = 1;
			}
			if (strlen($why) < 8) {
				$message['Err']['why'] = \Server::PrintResult('chat','mustbe');
				$stop = 1;
			}
			
			
			if ($stop == 1) { break; }
			
			if (!Validator::recaptcha($captcha)) {
				$message['Err']['captcha'] = \Server::PrintResult('main','recaperr');
				break;
			}
			
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
				$this->mail->Subject    = \Server::PrintMessage('chat', 'grpmess1',[$chat->name]);
				$this->mail->AltBody    = "";
				$this->mail->Body       = "";
				$this->mail->Body      .= \Server::PrintMessage('chat', 'grpmess2',[$chat->creator, $chat->name]);
				$this->mail->Body      .= $why. "\n\n";
				$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
				$this->mail->AddAddress($chat->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();
						
			}
			$message['Err']['reportgroup'] = 'done';
			break;
		}
		
		echo json_encode($message);
	}
}