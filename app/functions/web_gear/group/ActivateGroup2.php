<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\Chat;
use Classes\User;

class ActivateGroup2 {
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
		$message    = ['Err' =>[]]; 	
		$getId    = (int) \Server::post('id');
		$getName  = (string) \Server::post('gn');
		$MainOwner = (int) \Server::post('MainOwner');
		$chat     = '';
		
		while(1) {
			if (!$this->user->isAuth()) {
				$message['Err']['activategroupfail'] = \Server::PrintResult('buy', 'relogin'); 
				break;
			}
			if ($MainOwner != $this->user->get()->id) {
				$message['Err']['activategroupfail'] = \Server::PrintResult('buy', 'relogin'); 
				break;			
			}
			if ($getId && $getName && Validator::isValidChatName($getName)) {
                $chat = $this->chat->getById($getId);
            }
            if (!$chat) {
                $message['Err']['activategroupfail'] = \Server::PrintResult('chat','expired'); 
                break;
            }
            if ($chat->active == 1) {
                $message['Err']['activategroupfail'] = \Server::PrintResult('chat','already'); 
                break;
            }
			if (smtpmail == true) {
				
				$this->user->updateData('chats',['promo' => 1, 'active' => 1],['name' => $chat->name]);
				$this->user->InsertData('ranks',['chatid' => $chat->id, 'userid' => $MainOwner, 'f' => 1, 'permissions' => -1]);
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
			$message['Err']['activategroupok'] = '<p>' . \Server::PrintResult('chats','activate') . '! ' . \Server::PrintResult('chats','seemail') . '.</p> </p>
			<p> <p>' . \Server::PrintResult('chats','yourgroup') . ': <a href="'. METHOD .'//'. DOMAIN. '/'. $chat->name .'">'. METHOD .'//'. DOMAIN .'/'. $chat->name .'</a></p>';
            break;
        }
		echo json_encode($message);
    }
}
