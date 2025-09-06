<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\Chat;
use Classes\User;

class ActivateGroup {
	protected $chat;
	protected $mail;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->mail = new PHPMailer();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$message  = ['error' => null, 'success' => null];	
		$getId    = (int) \Server::get('id');
		$getName  = (string) \Server::get('gn');
		$chat     = '';
		
		while(1) {
			if ($getId && $getName && Validator::isValidChatName($getName)) {
				$chat = $this->chat->getById($getId);
			}
			if (!$chat) {
				$message['error'] = \Server::PrintResult('chat','expired'); 
				break;
			}
			if ($chat->active == 1) {
				$message['error'] = \Server::PrintResult('chat','already'); 
				break;
			}
			$this->user->updateData('chats',['promo' => 1, 'active' => 1, 'OffTime' => time()],['name' => $chat->name]);
			
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
				$this->mail->Subject    = \Server::PrintMessage('chat', 'grpok1',[$chat->name]);
				$this->mail->AltBody    = "";
				$this->mail->Body       = "";
				$this->mail->Body      .= \Server::PrintMessage('chat', 'grpok2',[$chat->creator, $chat->name, METHOD . '//' . DOMAIN .'/'.$chat->name, $chat->name, $chat->name]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'forhelp',[ METHOD . '//'. DOMAIN .'/'. XAT_NAME, FACEBOOK]);
				$this->mail->Body      .= \Server::PrintMessage('login', 'noreply',[]);
				$this->mail->AddAddress($chat->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();				
			}
				$message['success'] = '<p>' . \Server::PrintResult('chat','activated') . '<a href="'. METHOD .'//'. DOMAIN. '/'. $chat->name .'">'. METHOD .'//'. DOMAIN .'/'. $chat->name .'</a></p><p> '. \Server::PrintResult('login','group') .': '. $chat->name .' - '. $chat->descr .'</p>';
			break;
		}
		
		$getPage  = View::get('web_gear/ActivateGroup', ['chat' => $this->chat, 'message' => $message, 'room' => $chat]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Activate a new chat group', 'xt' => ['buy','chat','login'], 'description' => 'Activate a new chat group'] );
	}
}
