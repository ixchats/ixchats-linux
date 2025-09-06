<?php
namespace Functions\WebGear\User;

use Vendor\View;
use Vendor\Validator;
use Classes\Chat;
use Classes\User;
use Classes\Core;

class AreYouHuman {
	protected $chat;
	protected $user;
	protected $core;
	
	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
		$this->core = new Core();		
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}
			$getS	   = (int) 	  \Server::get('s');
			$getT	   = (int)    \Server::get('t');
			$getJ	   = (string) \Server::get('j');
			$postS	   = (int) 	  \Server::get('s');
			$postT	   = (int) 	  \Server::get('t');
			$getM	   = (int) 	  \Server::get('m');
			$postM	   = (int) 	  \Server::post('m');
			$postJ	   = (string) \Server::post('j');
			$captcha   = (string) \Server::post('g-recaptcha-response');
			$Continue  = (int) 	  \Server::post('Continue');
			$getS	   = $postS ? $postS : $getS;
			$getT	   = $postT ? $postT : $gettT;
			$J         = json_decode($getJ, true);
			$message   = ['error' => null, 'success' => null];
			
		while(1) {
			
			if (!$Continue) { break; }
			
			if (!Validator::recaptcha($captcha)) {
				$message['error'] = \Server::PrintResult('main','recaperr');
				break;
			}
			
			if (!$postT || !$postS) { break;}
			
			if (!$this->chat->getById($postS)) { break;}
			
			$this->core->API('human', [
				'u' => $postT,
				'r' => $postS
			]);	
			
			if ($postM == 3) {
				$json = ['Type' => 'Protect', 'Command' => 'GotCap', 'Result' => 'OK', 'Page' => 'this', 'Next' => 'pop', 'c' => '3576508206934550181', 't' => $postT, 'r' => $postS];
				return View::json($json);
			}
			$message['success'] = true;
			break;
		}

		$getPage  = View::get('web_gear/AreYouHuman', ['chat' => $this->chat, 'message' => $message, 'getJ' => $getJ, 'getM' => $getM, 'getS' => $getS, 'getT' => $getT, 'J' => $J]);
		return View::render('layout/main', ($getJ ? ['page' => $getPage,'title' => 'Are You a Human', 'xt' => ['chat'], 'description' => 'Are You a Human'] : ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Are You a Human', 'xt' => ['chat'], 'description' => 'Are You a Human']));
	}
}
