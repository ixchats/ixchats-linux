<?php
namespace Functions\WebGear;

use Vendor\View;
use Classes\Chat;
use Classes\User;
use Vendor\Validator;

class CommentsPost {
	protected $chat;
	protected $user;

	public function __construct() {
		$this->chat = new Chat();
		$this->user = new User();
	}
	
	public function index() {
		if (\Server::isRealUser() == false) {
			return http_response_code(403);
		}

			$getid    = (int) \Server::get('id');
			$getn     = (int) \Server::get('n');
			$chatid   = (int) \Server::post('id');
			$username = (string) \Server::post('YourEmail');
			$unick    = (string) \Server::post('l_name');
			$uavatar  = (string) \Server::post('l_avatar');
			$media	  = (string) \Server::post('media', false);
			$submit1  = (int) \Server::post('submit1');
			$number   = (int) \Server::post('n');
			$message  = ['status' => null, 'text' => null];	
			
		while(1) {
			
			if (!$submit1 || $submit1 !== 1 || !$getid || !$chatid) {
				break;
			}
			if (!Validator::isNumeric($chatid)){
				break;
			}
			
			if (!$getn && $number == '-1') {
				
				if (!$this->user->isAuth()) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('buy','relogin')];
					break;
				}
				$chat = $this->chat->getById($chatid);	
				if (!$chat) {
					$message = ['status' => 'error', 'text' => 'System problem (2). Please try later, sorry'];
					break;
				} 
				if (!$username) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('buy','sorryyou')];
					break;
				} 
				$user = $this->user->getUserByUsername($username);
				if (!$user) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('buy','sorryyou')];
					break;
				} 
				$rank = $this->user->getRankOnChat($chat->id);
				if ($rank == 5) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('chat','topost')];
					break;
				} 
				$Comment  = $this->chat->selectLastComments($chat->id) ? $this->chat->selectLastComments($chat->id) : 0;
				$this->chat->doComment([
							  'id'       => $Comment->id + 1,
							  'username' => $user->username,
							  'nickname' => base64_decode($user->nickname),
							  'chat'     => $chat->id,
							  'avatar'   => $user->avatar,
							  'userid'   => $user->id,	 
							  'time'     => time(),
							  'comment'  => htmlspecialchars($media)
							  ]);
				$message = ['status' => 'success'];
				
			} else {
				
				if (!$this->user->isAuth()) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('buy','relogin')];
					break;
				}
				$chat = $this->chat->getById($chatid);	
				if (!$chat) {
					$message = ['status' => 'error', 'text' => 'System problem (2). Please try later, sorry'];
					break;
				} 
				if (!$username) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('buy','sorryyou')];
					break;
				} 
				$user = $this->user->getUserByUsername($username);
				if (!$user) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('buy','sorryyou')];
					break;
				} 
				$rank = $this->user->getRankOnChat($chat->id);
				if ($rank != 1 || ($rank != 4 && $chat->CoOwnerTrusted == 1)) {
					$message = ['status' => 'error', 'text' => \Server::PrintResult('chat','todelete')];
					break;
				} 
				$this->chat->deleteComment(['chat' => $chat->id, 'id' => $number ]);
				$message = ['status' => 'success'];
			}
			break;
		}

		$getPage  = View::get('web_gear/CommentsPost', ['getn' => $getn, 'chatid' => $getid, 'user' => $this->user, 'title' => 'Post a comment', 'message' => $message, 'xt' => ['buy','chat'], 'description' => 'Post a comment', 'chat' => $getid && Validator::isNumeric($getid)? $this->chat->getById($getid) : '']);
		if ($getid) {
			$array = ['page' => $getPage, 'user' => $this->user];
		} else {
			$array = ['page' => $getPage, 'nav' => \Server::loadNavbar('classic', 'nav'), 'foot' => \Server::loadFotter('classic', 'foot'), 'user' => $this->user, 'title' => 'Post a comment', 'message' => $message, 'xt' => ['buy','chat'], 'description' => 'Post a comment'];
		}
		return View::render('layout/main', $array);
	}
}