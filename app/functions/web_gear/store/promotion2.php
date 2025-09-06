<?php
namespace Functions\WebGear\Store;

use Vendor\View;
use Vendor\Validator;
use Classes\Core;
use Classes\Chat;
use Classes\User;

class promotion2 {
	protected $chat;
	protected $core;
	protected $user;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->core = new Core();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}

		$XatsDays     = ['Xats','Days']; 
		$GroupName    = (string) \Server::post('GroupName');
		$YourEmail    = (string) \Server::post('YourEmail');
		$password     = (string) \Server::post('password');
		$PayType      = (string) \Server::post('XatsDays');
		$agree        = (string) \Server::post('agree');
		$AdImg        = (string) \Server::post('AdImg');
		$Quote        = (int) \Server::post('Quote'); 
		$Quote2       = (int) \Server::post('Quote2');  
		$Promote      = (int) \Server::post('Promote');  
		$Advertise    = (int) \Server::post('Advertise'); 
		$Authorize    = (int) \Server::post('Authorize'); 
		$Hours        = (int) \Server::post('Hours'); 
		$Days         = (int) \Server::post('Days'); 
		$Xats         = (int) \Server::post('Xats'); 
		$Err          = ['Err' =>[], 'Hours' => $Hours, 'Xats' => 0, 'Days' => 0, 'promoname' => $GroupName, 'NeedApproval' => 0, 'Lang' => '', 'Language' => null];

		while(1) {
		
			if (!$GroupName){ break;}	
			
			if (!Validator::isValidChatName($GroupName)) { 
				 $Err['Err']['promotion'] = 'System problem try later. (1)';  
				 break;
			}
			if (!is_numeric($Hours) || $Hours == 0 || $Hours < 0.5) {
				 $Err['Err']['promohours'] = \Server::PrintResult('buy','notzero');
				 break;
			}
			if ($Hours > 6) {
				 $Err['Err']['promohours'] = 'Max : 6';
				 break;
			}
			
			$days = (int) $Quote || $Promote ?  $Hours * 16  :  $Hours * 32 ;
			$xats = (int) $Quote || $Promote ?  $Hours * 200 :  $Hours * 400;
			$Err['Days']  = intval($days);
			$Err['Xats']  = intval($xats);
			$end  = floor(($Hours * 3600) + time());
			
			$chat = $this->chat->get($GroupName); 
			if (!$chat || !$GroupName) {
				$Err['Err']['promoname'] = \Server::PrintResult('buy','groupnoexist');
				break;
			}
			if ($chat->promo == 0 || $chat->blocked == 1 || $chat->autopromo !== 'OFF') {
				$Err['Err']['promoname'] = \Server::PrintResult('buy','promoblocked').': '. $chat->name;
				break;
			}
			if ($chat->flag & F_MEMBERS_ONLY || $chat->flag & F_MEMBERS_ONLY2) {
				$Err['Err']['promoname'] =  \Server::PrintResult('buy','membersonly');
				break;
			}
			if ($chat->NoList > 0) {
				$Err['Err']['promoname'] = \Server::PrintResult('buy','delisted');
				break;
			}
			if (empty($chat->langdef)) {
				$Err['Err']['promoname'] = \Server::PrintResult('buy','langnotset');
				break;
			}
			$Err['Lang']     = $chat->langdef;
			$Err['Language'] = $chat->language;
			
			if (!$Promote  && !$Advertise && !$Authorize){ break;} 
			
			if (!$agree ||($agree && $agree !== 'ON')) { 	 
				$Err['Err']['agreeterms'] = \Server::PrintResult('buy','terms');
				break; 	 	 
			}	
			if (!$YourEmail) { 
				$Err['Err']['username'] = \Server::PrintResult('buy','notfound'); 
				break; 	 	 		 
			} 
			$user = $this->user->getUserByUsername($YourEmail);
			if (!$user) { 
				$Err['Err']['username'] = $YourEmail . \Server::PrintResult('buy','notfound'); 
				break; 	 	 		 
			} 
			if (!$this->user->isAuth() || $this->user->get()->username != $user->username) {
				$Err['Err']['promotion'] = \Server::PrintResult('buy','relogin'); 
				break; 	 	 		 
			}
			if (!$this->user->verifyPass($password)) {
				$Err['Err']['password'] = \Server::PrintResult('buy','wrongpassword'); 
				break; 	 	 		 
			}
			if ($user->is_held > time()) {
				$Err['Err']['promotion'] = \Server::PrintResult('buy','held').'('. $this->user->getDays($user->is_held) .')'; 
				break; 	 	 		 
			} 
			if ($user->reserve < $xats) {
				$Err['Err']['promotion'] = 'xats reserve limit exceeded.'; 
				break; 	 	 		 
			} 
			if ($PayType && $PayType == 'Xats' && $xats > $user->xats) { 
				$Err['Err']['promotion'] = \Server::PrintResult('buy','noxats'); 
				break; 	 	 		 
			} 
			if ($PayType && $PayType == 'Days' && $days > $this->user->getDays($user->days)) { 
				$Err['Err']['promotion'] = \Server::PrintResult('buy','nodays'); 
				break; 	 	 		 
			} 
			if ($Promote && $Promote == 1 && !$Advertise && !$Quote2 && !$Quote && !$Authorize) {
				if (!in_array($PayType, $XatsDays) || $Xats != $xats || $Days != $days) { 
					$Err['Err']['promotion'] = \Server::PrintResult('buy','costchanged'); 
					break; 	 	 		 
				} 
				$CheckPromotion = $this->chat->CheckPromotion($chat->name);
				if (!$CheckPromotion && $CheckPromotion->over > time()) { 
					$Err['Err']['promotion'] =  \Server::PrintResult('buy','promona'); 
					 break; 	 	 		 
				} 
				switch($PayType) {
					case 'Xats':
						$uxats   = floor($user->xats - $xats);
						$price   =  $xats;
						$this->chat->update('users', ['xats' => $uxats, 'reserve' => $user->reserve - $xats], ['id' => $user->id]);
					break;	
					case 'Days':
						$udays   = floor($user->days - ($days * 24 * 3600));
						$reserve = ($days * 13);
						$price   =  floor($days * 13);
						$this->chat->update('users', ['days' => $udays, 'reserve' => $reserve], ['id' => $user->id]);
					break;	
				}
				$this->chat->InsertData('promoted', ['id' => 'NULL', 'chat' => $chat->name, 'over' => $end, 'active' => 1, 'xby' => $user->id, 'at' => time(), 'price' => $price]);
				$Err['Err']['promotion'] = \Server::PrintResult('buy','promosoon'); 
				$Err['Err']['Finished']  = (int) 1; 
				break;
			}
			if (($Advertise && $Advertise == 1) || ($Authorize && $Authorize == 1) && !$Promote && !$Quote2 && !$Quote) {
				if (!in_array($PayType, $XatsDays) || $Xats != $xats || $Days != $days) { 
					$Err['Err']['promotion'] = \Server::PrintResult('buy','costchanged'); 
					break; 	 	 		 
				} 
				$CheckAdvertise = $this->chat->CheckAdvertise($chat->name);
				if ($CheckAdvertise && $CheckAdvertise->over > time()) { 
					$Err['Err']['promotion'] =  \Server::PrintResult('buy','promona'); 
					 break; 	 	 		 
				} 
				$ImageLink = Validator::urlToDomain($AdImg);
				$banner    = $this->chat->CheckBanner($ImageLink);
				if (substr($AdImg, -4) != '.jpg' && substr($AdImg, -4) != '.png') {
					$Err['Err']['adimage'] = \Server::PrintResult('buy','imagetype'); 
					break; 	 	 		 
				} 
				if ($ImageLink) {
					switch($PayType) {
						case 'Xats':
							$uxats   = floor($user->xats - $xats);
							$price   =  $xats;
							$this->chat->update('users', ['xats' => $uxats, 'reserve' => $user->reserve - $xats], ['id' => $user->id]);
						break;	
						case 'Days':
							$udays   = floor($user->days - ($days * 24 * 3600));
							$reserve = ($days * 13);
							$price   =  floor($days * 13);
							$this->chat->update('users', ['days' => $udays, 'reserve' => $reserve], ['id' => $user->id]);
						break;	
					}
					$this->chat->InsertData('promobanner', ['id' => 'NULL', 'chat' => $chat->name, 'over' => $end, 'active' => 1, 'xby' => $user->id, 'at' => time(), 'price' => $price, 'banner' => str_replace(['https://', 'http://'], ['', ''], $AdImg)]);
					$Err['Err']['promotion'] = \Server::PrintResult('buy','adssoon'); 
					$Err['Err']['Finished']  = (int) 1; 
					break;
				}
			
				$Err['NeedApproval'] = (int) 1; 
				
				if (!empty($banner) && $banner->active != 1) {
					$Err['Err']['promotion'] = 'System problem try later. (1)'; 
					break; 	 	 		 
				} 
				
				if (!$Authorize && $Authorize !== 1) { break;}
				
				$file   = Validator::urlToDomain($AdImg,'http');
				$dom    = Validator::urlToDomain($AdImg,'dom');
				$size   = Validator::ImageSize($file);
				$valid  = ['i.imgur.com','i67.tinypic.com'];
				if (!in_array($dom, $valid)) {
					$Err['Err']['adimage'] =  \Server::PrintResult('buy','tinypiconly'); 
					break; 	 	 		 
				} 
				if (substr($AdImg, -4) != '.jpg' && substr($AdImg, -4) != '.png') {
					$Err['Err']['adimage'] = \Server::PrintResult('buy','imagetype'); 
					break; 	 	 		 
				} 
				if (Validator::validImage($file)) {
					$Err['Err']['adimage'] = \Server::PrintResult('buy','imageinval'); 
					break; 	 	 		 
				} 
				if (Validator::FilzeSize($file) > 60000) {
					$Err['Err']['adimage'] = \Server::PrintResult('buy','imagebig'); 
					break; 	 	 		 
				} 
				/*if ($size['height'] != 90 && $size['width'] != 728) {
					$Err['Err']['adimage'] = \Server::PrintResult('buy','imagesize'); 
					break; 	 	 		 
				}*/
				$this->chat->InsertData('banners', ['id' => 'NULL', 'chat' => $chat->name, 'link' => $ImageLink, 'email' => $user->email]);		
				$Err['Err']['promotion'] = \Server::PrintResult('buy','emailauth'); 
				$Err['Err']['Finished']  = (int) 1; 

			}
			break;	
		}
		return View::json($Err);
	}
}