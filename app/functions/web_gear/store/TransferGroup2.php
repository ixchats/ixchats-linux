<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;
use Classes\Core;
use Vendor\SMTP;
use Vendor\PHPMailer;

class TransferGroup2 {
	protected $user;
	protected $chat;
	protected $core;
	protected $mail;
	
	public function __construct() {
		$this->user = new User();
		$this->chat = new Chat();
		$this->core = new Core();
		$this->mail = new PHPMailer();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
		$GroupName = (string) \Server::post('GroupName');
		$YourEmail = (string) \Server::post('YourEmail');
		$password  = (string) \Server::post('password');
		$agree     = (string) \Server::post('agree');
		$Quote     = (int) \Server::post('Quote');
		$Promote   = (int) \Server::post('Promote');
		$Err       = ['Err' =>[], 'Xats' => null, 'wantedgroup' => $GroupName];
			
		while(1) {
			
			if (!$GroupName) { break; } 
			
			if (!Validator::isValidChatName($GroupName)) {
				$Err['Err']['wantedgroup'] = \Server::PrintResult('buy','gtxnotavail').'(2)';
				break; 
			}
			$chat = $this->chat->get($GroupName);
			if (!$chat){
				$Err['Err']['wantedgroup'] = \Server::PrintResult('buy','groupnoexist');
				break; 
			}
			$days = 90 * 24;
			$time = time() - floor($days * 3600);
			if ($chat->OffTime > $time || $chat->debug > 0 || $chat->blocked > 0) {
				$Err['Err']['wantedgroup'] = \Server::PrintResult('buy','notdormant');
				break; 
			}
			$CalcPrice = $this->core->CalcXats($GroupName, SN_COTATION);
			if ($CalcPrice  < 1) {
				$Err['Err']['buygroup'] = \Server::PrintResult('buy','gtxnotavail').'(1)'; 
				break; 	 	 		 
			} 
			
			$price       = $CalcPrice;
			$Err['Xats'] = $CalcPrice;
			
			if (!$Promote || $Promote != 1 || $Quote) { break;} 
	
			if ($price != $_POST['Xats']) {
				$Err['Err']['buygroup'] =  \Server::PrintResult('buy','costchanged'); 
				break; 	 	 		 
			}
			if (!$agree ||($agree && $agree !== 'ON')) { 	 
				$Err['Err']['agreeterms'] = \Server::PrintResult('buy','terms');
				break; 	 	 
			}	
			if (!Validator::isAlphanumeric($GroupName)) {
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound').'(2)';
				break; 
			}
			if (!Validator::isAlphanumeric($password) || !$password) {
				$Err['Err']['username'] = \Server::PrintResult('buy','wrongpassword').'(2)';
				break; 
			}
			$user = $this->user->getUserByUsername($YourEmail);
			if (!$user) { 
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound'); 
				break; 	 	 		 
			} 
			if (!$this->user->isAuth() || $this->user->get()->username != $user->username) {
				$Err['Err']['buygroup'] = \Server::PrintResult('buy','relogin'); 
				break; 	 	 		 
			}
			if (!$this->user->verifyPass($password)) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword'); 
				break; 	 	 		 
			}
			if ($user->is_held > time()) {
				$Err['Err']['buygroup'] = \Server::PrintResult('buy','held').'('. $this->user->getDays($user->is_held) .')'; 
				break; 	 	 		 
			} 
			if ($user->reserve < $price) {
				$Err['Err']['buygroup'] = 'xats reserve limit exceeded.'; 
				break; 	 	 		 
			} 
			if ($price > $user->xats) { 
				$Err['Err']['buygroup'] = \Server::PrintResult('buy','noxats'); 
				break; 	 	 		 
			} 	
			if (smtpmail == true) {
				
				$Details = implode(',', $this->core->userdetails($this->user->ipAddr()));
				$NewPass = 'XT' . rand(100000000, 9999999999);
				$this->user->updateData('chats', ['pass' => $this->core->hash($NewPass), 'email' => $user->email, 'creator' => $user->username, 'OffTime' => time()],['name' => $chat->name]);
				$this->user->updateData('users', ['xats' => $user->xats - $price, 'reserve' => $user->reserve - $price],['id' => $user->id]);

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
				$this->mail->Body       = "Hi {$user->username} ,\r\n\r\nThe password for the group {$chat->name} is :\r\n\r\n{$NewPass}\r\n\r\n Request for IP was: {$Details}\r\n\r\nFor immediate help with the  ".XAT_NAME." go here: visit this link:".METHOD."//".DOMAIN."/Help \r\n\r\nFor other problems, comments or suggestions, use the Facebook page at the following link: ".FACEBOOK." \r\n\r\nOur web: ".METHOD."//".DOMAIN."\r\nSincerely,\r\n ".XAT_NAME." Staff.\r\n\r\n=== THIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT ANSWER ===\r\n\r\n";
				$this->mail->AddAddress($user->email, "");
				$this->mail->IsHTML(false);
				$this->mail->Send();
				
			}
			$Err['Err']['buygroup'] =  \Server::PrintResult('buy','txgroupdone'); 
			$Err['Err']['ReLogin']  = (int) 1; 
			break;
		}
		return View::json($Err);
	}
}