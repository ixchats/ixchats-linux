<?php
namespace Functions\WebGear;

use Vendor\View;
use Classes\Chat;
use Vendor\Validator;

class CommentsView {
	protected $chat;

	public function __construct() {
		$this->chat = new Chat();
	}
	
	public function index() {
		$getid = (int) \Server::get('id');
		$page  = (int) \Server::get('pg');
		if (!Validator::isNumeric($getid)){
			return false;
		}
		if (!$this->chat->getById($getid)) {
			return false;
		}
		$Comments = $this->chat->loadComments($getid);
		$quantity = 10;
		$page     = $page * $quantity > count($Comments) ? 0 : $page; 
		$Selected = $this->chat->selectComments($getid,$page,$quantity);
		$getPage  = View::get('web_gear/CommentsView', ['chat' => $this->chat->getById($getid), 'getpage' => $page, 'comments' => $Comments, 'Selected' => $Selected, 'quantity' => $quantity]);
		$getChat  = $this->chat->getById($getid);		
		return View::render('layout/main', ['page' => $getPage]);
	}
}