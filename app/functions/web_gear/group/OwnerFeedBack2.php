<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\User;
use Classes\Chat;


class OwnerFeedBack2 {
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
		
		$submit   	      = (string) \Server::post('submit');
		$feedback   	  = (string) \Server::post('feedback');
		$email  	      = (string) \Server::post('email');
		$GroupName    	  = (string) \Server::post('GroupName');
		$captcha    	  = (string) \Server::post('g-recaptcha-response');
		
		while(1) {
					
			if (!$submit || $submit != 'Send') { break; }
			
			if (!$GroupName || !Validator::isValidChatName($GroupName)) {
				$message['Err']['feedback'] = 'System problem (2). Please try later, sorry';
				break;
			}
			
			$chat = $this->chat->get($GroupName);
			
			if (!$chat) {
				$message['Err']['feedback'] = 'System problem (2). Please try later, sorry';
				break;
			}
			if (strlen($feedback) < 30) {
				$message['Err']['feedback'] = \Server::PrintResult('chat','mustbe') . ' 30 '. \Server::PrintResult('chats','letters');
				break;
			}
			if (!Validator::isValidEmail($email)) {
				$message['Err']['feedback']= \Server::PrintResult('main','evalid');
				break;
			}
			
			$message['Err']['captcha'] = 'true';
			
			if (!Validator::recaptcha($captcha)) {
				break;
			}
			
			unset($message['Err']['captcha']);
			
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
				$this->mail->Body      .= \Server::PrintMessage('chat', 'grpmes2',[$chat->creator, $chat->name]);
				$this->mail->Body      .= $feedback. "\n\n";
				$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
				$this->mail->AddAddress($chat->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();
						
			}
			$message['Err']['ownerfeedback'] = 'done';
			break;
		}
		
		echo json_encode($message);
	}
}