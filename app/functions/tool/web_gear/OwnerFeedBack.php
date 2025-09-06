<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\User;
use Classes\Chat;


class OwnerFeedBack {
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
		$submit   	      = (string) \Server::post('submit');
		$feedback   	  = (string) \Server::post('feedback');
		$email  	      = (string) \Server::post('email');
		$GroupName    	  = (string) \Server::post('GroupName');
		$captcha    	  = (string) \Server::post('g-recaptcha-response');
		$message      	  = ['error' => null, 'success' => null];
		$chat             = '';
		
		while(1) {
					
			if (!$submit || $submit != 'Send') { break; }
			
			if (!Validator::recaptcha($captcha)) {
				$message['error'] = \Server::PrintResult('main','recaperr');
				break;
			}
			if (!$GroupName || !Validator::isValidChatName($GroupName)) {
				$message['error'] = 'System problem (2). Please try later, sorry';
				break;
			}
			$chat = $this->chat->get($GroupName);
			if (!$chat) {
				$message['error'] = 'System problem (2). Please try later, sorry';
				break;
			}
			if (strlen($feedback) < 8) {
				$message['error'] = \Server::PrintResult('chat','message') . ' '. \Server::PrintResult('chat','mustchars');
				break;
			}
			if (!Validator::isValidEmail($email)) {
				$message['error'] = \Server::PrintResult('login','wronguep');
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
				$this->mail->Body      .= \Server::PrintMessage('chat', 'grpmes2',[$chat->creator, $chat->name]);
				$this->mail->Body      .= $feedback. "\n\n";
				$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
				$this->mail->AddAddress($chat->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();
						
			}
			$message['success'] = \Server::PrintResult('chat','thxsent');
			break;
		}
		
		$getPage  = View::get('web_gear/OwnerFeedBack', ['chat' => $this->chat, 'message' => $message, 'GroupName' => $getGroup, 'postname' => $GroupName]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Send feedback to chat group owner', 'xt' => ['chat','login'], 'description' => 'Send feedback to chat group owner'] );
	}
}