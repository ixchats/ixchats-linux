<?php
namespace Functions\WebGear;

use Vendor\View;
use Vendor\Header;
use Vendor\Validator;
use Vendor\SMTP;
use Vendor\PHPMailer;
use Classes\Chat;
use Classes\User;
use Classes\Core;

class EditGroup {
	protected $chat;
	protected $mail;
	protected $user;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->core = new Core();
		$this->mail = new PHPMailer();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		Header::SessionCache();
		
		$getDelete     	  = (string) \Server::get('t');		
		$getGroup     	  = (string) \Server::get('GroupName');		
		$SubmitPass   	  = (string) \Server::post('SubmitPass');
		$SubmitLost   	  = (string) \Server::post('SubmitLost');
		$DeleteGroup  	  = (string) \Server::post('DeleteGroup');
		$GroupName    	  = (string) \Server::post('GroupName');
		$password     	  = (string) \Server::post('password');
		$email      	  = (string) \Server::post('email');
		$password0     	  = (string) \Server::post('password0');
		$password1     	  = (string) \Server::post('password1');
		$password2     	  = (string) \Server::post('password2');
		$GroupDescription = (string) \Server::post('GroupDescription');
		$Tags 			  = (string) \Server::post('Tags');
		$back 			  = (string) \Server::post('back');
		$Lang 			  = (string) \Server::post('Lang');
		$Comments 		  = (string) \Server::post('Comments');
		$Transparent 	  = (string) \Server::post('Transparent');
		$StartPlayer 	  = (string) \Server::post('StartPlayer');
		$CoOwnerTrusted   = (string) \Server::post('CoOwnerTrusted');
		$Whiz   		  = (string) \Server::post('Whiz');
		$New   		  	  = (string) \Server::post('New');
		$button0   		  = (string) \Server::post('button0');
		$button1   		  = (string) \Server::post('button1');
		$button2   		  = (string) \Server::post('button2');
		$button3  		  = (string) \Server::post('button3');
		$button4  		  = (string) \Server::post('button4');
		$button5  		  = (string) \Server::post('button5');
		$media0  		  = (string) \Server::post('media0', false);
		$media1  		  = (string) \Server::post('media1', false);
		$media2  		  = (string) \Server::post('media2', false);
		$media3  		  = (string) \Server::post('media3', false);
		$media4  		  = (string) \Server::post('media4', false);
		$media5  		  = (string) \Server::post('media5', false);
		$media6  		  = (string) \Server::post('media6', false);
		$NewPass    	  = (int) \Server::post('NewPass');
		$SubmitRoom    	  = (int) \Server::post('SubmitRoom');
		$SubmitChange  	  = (int) \Server::post('SubmitChange');
		$submit1  	   	  = (int) \Server::post('submit1');
		$ResetChat     	  = (int) \Server::post('ResetChat');
		$id   	       	  = (int) \Server::post('id');
		$p   	       	  = (int) \Server::post('p');
		$message      	  = ['error' => null, 'success' => null];
		$Features     	  = [$SubmitPass, $SubmitLost, $DeleteGroup, $SubmitChange, $submit1, $ResetChat, $NewPass, $p];
		$EditGroup        = false;
		$ChangePass       = false;
		$chat         	  = '';
		
		while(1) {
			if ($getDelete) {
				if (!Validator::isAlphanumeric($getDelete) || strlen($getDelete) != 20 || !$getGroup) {
					break; 
				}
				if (!Validator::isValidChatName($getGroup)) {
					$message['error'] = 'Wrong group-name.';
					break;
				}
				$chat = $this->chat->get($getGroup);
				if (!$chat) {
					$message['error'] = 'Wrong group-name.';
					break;
				}	
				if ($chat->deletecode !== $getDelete) {
					break;
				}	
				$this->user->updateData('chats',['crc32' => '', 'creator' => '', 'deletecode' => '', 'sc' => '', 'tags' => '', 'descr' => '', 'email' => '', 'pass' => $this->core->hash($this->core->rand(20)) , 'OffTime' => 0],['name' => $chat->name]);
				$this->user->deleteData('ranks',['chatid' => $chat->id]);
				$message['success'] = 'Your' . $chat->name . 'info was deleted';
				break;
			}
			switch($Features) {
				case $SubmitChange && $SubmitChange == 1: 
					if (!Validator::isValidChatName($GroupName)) {
						$message['error'] = 'Wrong group-name.';
						break;
					}
					$ChangePass = true;
				break;
				case $SubmitPass && $SubmitPass == 'Submit': 
				case $ResetChat && $ResetChat == 1:
				case $submit1 && $submit1 == 1: 
				case $NewPass && $NewPass == 1: 
				case $p && Validator::isNumeric($p): 
					if (!Validator::isValidChatName($GroupName)) {
						$message['error'] = 'Wrong group-name.';
						break;
					}
					$chat = $this->chat->get($GroupName);
					if (!$chat) {
						$message['error'] = 'Wrong group-name.';
						break;
					}
					if ($chat->active != 1) {
						$message['error'] = 'Your group is not activated. Please go to your Email';
						break;
					}
					$password = $password0 ? $password0 : $password;
					if (!$this->core->validate($password, $chat->pass)) {
						$message['error'] = \Server::PrintResult('buy','wrongpassword');
						break;
					}
					$EditGroup = true;

					if ($ResetChat) {
						$this->user->deleteData('ranks', ['chatid' => $chat->id]);
						$chat->flag |= 0x80000;
						$this->user->updateData('chats',['flag' => $chat->flag],['id' => $chat->id]);
						break;
					} 
					if ($NewPass) {
						$ChangePass = true;
						if (!Validator::isFilled([$password0, $password1, $password2, $GroupName])) {
							break;
						}
						if (substr($password1, 0, 2) == 'XT') {	
							$message['error'] = \Server::PrintResult('edit','passnoxt');
							break;
						}						
						if (strlen($password1) < 6) {	
							$message['error'] = \Server::PrintResult('edit','passnok');
							break;
						}						
						if ($password1 != $password2) {	
							$message['error'] = \Server::PrintResult('login','passne');
							break;
						}						
						$this->user->deleteData('ranks', ['chatid' => $chat->id]);
						$this->user->updateData('chats',['crc32' => crc32(microtime()), 'pass' => $this->core->hash($password1)],['id' => $chat->id]);
						$message['success'] = \Server::PrintResult('edit','passupd');
						break;
					} 
					if ($submit1) {
						$this->user->updateData('chats',['crc32' => crc32(microtime()), 'OffTime' => time()],['id' => $chat->id]);
						$this->user->updateData('chats',
								[
									'flag'              => $Transparent && $Transparent == 'ON' ? $chat->flag |= F_TRANSPARENT : $chat->flag &= ~F_TRANSPARENT,
									'comments' 	        => $Comments && $Comments == 'ON' ? 1 : 0,
									'CoOwnerTrusted'    => $CoOwnerTrusted && $CoOwnerTrusted == 'ON' ? 1 : 0,
									'StartPlayer'   	=> $StartPlayer && $StartPlayer == 'ON' ? 1 : 0,
									'Whiz'   		    => $Whiz && $Whiz == 'ON' ? 1 : 0,
									'langdef'   	    => $Lang,
									'outter'   	        => strpos($back, '}') == false ? $back : '',
									'css'   	        => strpos($back, '}') == true ? \Server::EncryptData($back) : '',
									'mode'   	        => strpos($back, '}') == true ? 1 : 0,
									'tags'   	        => $Tags,
									'descr'   	        => $GroupDescription,
									'HTML'   	        => $media0 ? \Server::EncryptData(htmlentities($media0)) : $chat->HTML,
									'HTML2'   	        => $media1 ? \Server::EncryptData(htmlentities($media1)) : $chat->HTML2,
									'HTML3'   	        => $media2 ? \Server::EncryptData(htmlentities($media2)) : $chat->HTML3,
									'HTML4'   	        => $media3 ? \Server::EncryptData(htmlentities($media3)) : $chat->HTML4,
									'HTML5'   	        => $media4 ? \Server::EncryptData(htmlentities($media4)) : $chat->HTML5,
									'HTML6'   	        => $media5 ? \Server::EncryptData(htmlentities($media5)) : $chat->HTML6,
									'button0'   	    => htmlentities($button0),
									'button1'   	    => htmlentities($button1),
									'button2'   	    => htmlentities($button2),
									'button3'   	    => htmlentities($button3),
									'button4'   	    => htmlentities($button4),
									'button5'   	    => htmlentities($button5)
								],
								[
									'id' => $chat->id
								]
						);
						$chat = $this->chat->get($chat->name);
						break;
					}
				break;
				case $SubmitLost && $SubmitLost == 'Submit':
					if (!Validator::isValidChatName($GroupName)) {
						$message['error'] = 'Wrong group-name.';
						break;
					}
					$chat = $this->chat->get($GroupName);
					if (!$chat) {
						$message['error'] = 'Wrong group-name.';
						break;
					}				
					if (!$email) {
						$message['error'] = \Server::PrintResult('edit','emailno');
						break;
					}
					if (!Validator::isValidEmail($email)) {
						$message['error'] = \Server::PrintResult('edit','emailno');
						break;
					}
					if ($chat->email != $email) {
						$message['error'] = \Server::PrintResult('edit','emailno');
						break;
					}
					if (smtpmail == true) {
						
						$Details = implode(',',$this->core->userdetails($this->user->ipAddr()));
						$NewPass = 'XT'.rand(100000000, 9999999999);
						$this->user->updateData('chats',['pass' => $this->core->hash($NewPass)],['name' => $chat->name]);
						$this->mail->IsSMTP();
						$this->mail->SMTPAuth   = true;
						$this->mail->SMTPSecure = SMTP_Sec;
						$this->mail->Host       = host_smtp;
						$this->mail->Port       = port_gmail;
						$this->mail->Username   = mail_gmail;
						$this->mail->Password   = pass_gmail;
						$this->mail->From       = mail_gmail;              
						$this->mail->FromName   = 'INFO ' . XAT_NAME;
						$this->mail->Subject    = XAT_NAME . '- Recover password ' . $chat->name;
						$this->mail->AltBody    = "";
						$this->mail->Body       = "Hi {$chat->creator} ,\r\n\r\nThe password for the group {$chat->name} is :\r\n\r\n{$NewPass}\r\n\r\n Request for IP was: {$Details}\r\n\r\nFor immediate help with the  ".XAT_NAME." go here: visit this link:".METHOD."//".DOMAIN."/Help \r\n\r\nFor other problems, comments or suggestions, use the Facebook page at the following link: ".FACEBOOK." \r\n\r\nOur web: ".METHOD."//".DOMAIN."\r\nSincerely,\r\n ".XAT_NAME." Staff.\r\n\r\n=== THIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT ANSWER ===\r\n\r\n";
						$this->mail->AddAddress($chat->email, "");
						$this->mail->IsHTML(false);
						$this->mail->Send();
						
				}
					$message['success'] = \Server::PrintResult('chat','emailsent');
				break;
				case $DeleteGroup && $DeleteGroup == 'Submit':
					if (!Validator::isValidChatName($GroupName)) {
						$message['error'] = 'Wrong group-name.';
						break;
					}
					$chat = $this->chat->get($GroupName);
					if (!$chat) {
						$message['error'] = 'Wrong group-name.';
						break;
					}				
					if (!$email) {
						$message['error'] = \Server::PrintResult('edit','emailno');
						break;
					}
					if (!Validator::isValidEmail($email)) {
						$message['error'] = \Server::PrintResult('edit','emailno');
						break;
					}
					if ($chat->email != $email) {
						$message['error'] = \Server::PrintResult('edit','emailno');
						break;
					}
					if (!$this->core->validate($password, $chat->pass)) {
						$message['error'] = \Server::PrintResult('buy','wrongpassword');
						break;
					}
					if (smtpmail == true) {
						
						$DeleteCode = $this->core->rand(20);
						$this->user->updateData('chats',['deletecode' => $DeleteCode],['name' => $chat->name]);
						$this->mail->IsSMTP();
						$this->mail->SMTPAuth   = true;
						$this->mail->SMTPSecure = SMTP_Sec;
						$this->mail->Host       = host_smtp;
						$this->mail->Port       = port_gmail;
						$this->mail->Username   = mail_gmail;
						$this->mail->Password   = pass_gmail;
						$this->mail->From       = mail_gmail;              
						$this->mail->FromName   = 'INFO ' . XAT_NAME;
						$this->mail->Subject    = 'Delete info from '. XAT_NAME . ' chat group: ' . $chat->name;
						$this->mail->AltBody    = "";
						$this->mail->Body       = 'Click here to delete info from '.XAT_NAME.' chat group '.$chat->name.': '.METHOD.'//'.DOMAIN.'/web_gear/chat/editgroup.php?GroupName='.$chat->name.'&t='.$DeleteCode;
						$this->mail->AddAddress($chat->email, "");
						$this->mail->IsHTML(false);
						$this->mail->Send();
						
					}
					$message['success'] = \Server::PrintResult('chat','emailsent');
				break;
			}
			break;
		}
		
		$getPage  = View::get('web_gear/EditGroup', ['chat' => $this->chat, 'message' => $message, 'room' => $chat, 'GroupName' => $getGroup, 'EditGroup' => $EditGroup, 'ChangePass' => $ChangePass, 'password' => $password, 'PostName' => $GroupName, 'ResetChat' => $ResetChat, 'p' => $p]);
		return View::render('layout/main', ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Edit chat group', 'xt' => ['buy','chat','login','edit'], 'description' => 'Edit chat group'] );
	}
}
