<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\User;
use Classes\Chat;


class inappropriate {
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
		$message      	  = ['error' => null, 'success' => null, 'why' => null, 'email' => null, 'captcha' => null, 'type' => null, 'yourname' => null];
		$chat             = '';
		
		while(1) {
					
			if (!$submit || $submit != 'Send') { break; }
			
			if (!$Id && !$GroupName) {
				$message['error'] = 'System problem (1). Please try later, sorry';
				break;
			}
			if (($Id && !Validator::isNumeric($Id)) || ($GroupName && !Validator::isValidChatName($GroupName))) {
				$message['error'] = 'System problem (2). Please try later, sorry';
				break;
			}
			$chat = $GroupName ? $this->chat->get($GroupName) : $this->chat->getById($Id);
			if (!$chat) {
				$message['error'] = 'System problem (3). Please try later, sorry';
				break;
			}
			if (!Validator::recaptcha($captcha)) {
				$message['captcha'] = \Server::PrintResult('main','recaperr');
				$stop = 1;
			}
			if (strlen($why) < 8) {
				$message['why'] = \Server::PrintResult('chat','message') . ' '. \Server::PrintResult('chat','mustchars');
				$stop = 1;
			}
			if (strlen($YourName) < 4) {
				$message['yourname'] = \Server::PrintResult('chat','yourname') . '  ' . \Server::PrintResult('chat','mustbe') . '  4  ' . \Server::PrintResult('chat','letters');
				$stop = 1;
			}
			if ($Type == 'please') {
				$message['type'] = \Server::PrintResult('chat','message') . ' '. \Server::PrintResult('chat','mustchars');
				$stop = 1;
			}
			if (!Validator::isValidEmail($email)) {
				$message['email'] = \Server::PrintResult('chat','bademail');
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
			$message['success'] = \Server::PrintResult('chat','thxsent');
			break;
		}
		
		$getPage  = View::get('web_gear/inappropriate', ['chat' => $this->chat, 'message' => $message, 'GroupName' => $getGroup, 'Id' => $getId, 'postgroup' => $GroupName, 'postid' => $Id]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Report an inappropriate chat', 'xt' => ['chat', 'buy', 'main'], 'description' => 'Report an inappropriate chat'] );
	}
}